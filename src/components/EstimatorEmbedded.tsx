import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface EstimatorEmbeddedProps {
  apiEndpoint?: string;
  onSuccess?: (data: any) => void;
}

const EstimatorEmbedded: React.FC<EstimatorEmbeddedProps> = ({
  apiEndpoint = "/api/estimator",
  onSuccess,
}) => {
  // STATES
  const [step, setStep] = useState(1);
  const [helpWith, setHelpWith] = useState("Website");
  const [budget, setBudget] = useState("<20k");
  const [customBudget, setCustomBudget] = useState("");

  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const TIME_SLOTS = [
    "09:00","10:00","11:00","12:00","13:00",
    "14:00","15:00","16:00","17:00","18:00",
    "19:00","20:00",
  ];

  // DATE HELPERS
  function startOfMonth(d) {
    return new Date(d.getFullYear(), d.getMonth(), 1);
  }
  function daysInMonth(d) {
    return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  }
  function weekday(d) {
    return new Date(d).getDay();
  }

  function next30MinSlotStr() {
    const now = new Date();
    let m = now.getMinutes();
    let roundedMins = Math.ceil((m + 1) / 30) * 30;
    let hr = now.getHours();

    if (roundedMins === 60) {
      roundedMins = 0;
      hr = (hr + 1) % 24;
    }

    return `${String(hr).padStart(2, "0")}:${String(roundedMins).padStart(
      2,
      "0"
    )}`;
  }

  function isSlotDisabled(slot: string) {
    const selected = new Date(selectedDate);
    selected.setHours(0, 0, 0, 0);
    const todayZero = new Date(today);

    if (selected.getTime() === todayZero.getTime()) {
      const minSlot = next30MinSlotStr();
      return slot < minSlot;
    }
    return false;
  }

  function buildCalendarMatrix(monthDate: Date) {
    const first = startOfMonth(monthDate);
    const total = daysInMonth(monthDate);
    const startW = weekday(first);
    const weeks = [];
    let current = 1 - startW;

    for (let r = 0; r < 6; r++) {
      const row = [];
      for (let c = 0; c < 7; c++, current++) {
        if (current < 1 || current > total) row.push(null);
        else
          row.push(
            new Date(monthDate.getFullYear(), monthDate.getMonth(), current)
          );
      }
      weeks.push(row);
    }
    return weeks;
  }

  const calendarWeeks = useMemo(
    () => buildCalendarMatrix(calendarMonth),
    [calendarMonth]
  );

  // VALIDATION
  function canNext(stepNum: number) {
    if (stepNum === 1) {
      if (!helpWith) return false;
      if (!budget) return false;
      if (budget === "custom" && customBudget.trim() === "") return false;
      return true;
    }

    if (stepNum === 2) {
      const sd = new Date(selectedDate);
      sd.setHours(0, 0, 0, 0);
      return sd.getTime() >= today.getTime();
    }

    if (stepNum === 3) {
      if (!selectedTime) return false;
      if (selectedDate.getTime() === today.getTime() && isSlotDisabled(selectedTime))
        return false;
      return true;
    }

    if (stepNum === 4) {
      if (fullName.trim().length < 2) return false;
      if (!/\S+@\S+\.\S+/.test(email)) return false;
      return true;
    }

    return true;
  }

  // SUBMIT HANDLER
  async function handleSubmit() {
    if (!canNext(4)) return;

    setSending(true);

    try {
      const payload = {
        helpWith,
        budget: budget === "custom" ? customBudget : budget,
        date: selectedDate,
        time: selectedTime,
        fullName,
        email,
        phone,
        website,
        notes,
      };

      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      setSuccess(true);
      onSuccess?.(data);
    } catch (err) {
      console.error("Estimator Error:", err);
    } finally {
      setSending(false);
    }
  }

  const progress = Math.round(((step - 1) / 3) * 100);

  return (
    <>
      <section className="py-16 px-6 md:px-10 bg-[#0b0c10] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Project Estimator
            </h2>
            <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
              Quick estimator — choose scope, pick a date & time, and share details.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-8 items-start">

            {/* LEFT INFO CARDS */}
            <aside className="order-2 md:order-1 flex flex-col gap-6">

              {/* HOW THIS ESTIMATOR WORKS */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#13151d] border border-white/10 rounded-2xl p-6 
                           backdrop-blur-xl shadow-lg transition-all duration-300 
                           hover:border-purple-500/40 hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-semibold text-indigo-300">
                  How This Estimator Works
                </h3>

                <p className="text-gray-300 mt-2">
                  This tool helps us understand your goals so we can prepare the right plan before your meeting.
                </p>

                <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2 mt-4">
                  <li>Fill your requirements step-by-step.</li>
                  <li>Choose your budget & meeting slot.</li>
                  <li>We prepare a pre-assessment before the call.</li>
                  <li>Your inputs help us create an accurate roadmap.</li>
                </ul>

                <div className="mt-6">
                  <p className="text-indigo-300 font-medium">Office Location</p>
                  <p className="text-gray-300 text-sm mt-1">
                    SuPav Solutions, Chipiyana Buzurg, Greater Noida, 201009
                  </p>
                </div>
              </motion.div>

              {/* WHAT YOU GET AFTER SUBMISSION */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-[#13151d] border border-white/10 rounded-2xl p-6 
                           backdrop-blur-xl shadow-lg transition-all duration-300 
                           hover:border-purple-500/40 hover:shadow-purple-500/20"
              >
                <h3 className="text-xl font-semibold text-indigo-300">
                  What You Get After Submission
                </h3>

                <ul className="text-gray-300 text-sm list-disc ml-5 space-y-2 mt-3">
                  <li>Tailored project plan based on your inputs.</li>
                  <li>Estimated timeline & transparent pricing.</li>
                  <li>Technology recommendations.</li>
                  <li>Free consultation call (Zoom / Google Meet).</li>
                </ul>
              </motion.div>
            </aside>

            {/* RIGHT MAIN FORM / WIZARD */}
            <main className="order-1 md:order-2">
              <div className="bg-[#11131a]/70 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl">

                {/* PROGRESS BAR */}
                <div className="mb-4">
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      style={{ width: `${progress}%` }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.45 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                    />
                  </div>

                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Scope</span>
                    <span>Schedule</span>
                    <span>Time</span>
                    <span>Details</span>
                  </div>
                </div>

                {/* STEPS */}
                <AnimatePresence mode="wait">

                  {/* STEP 1 — PROJECT SCOPE */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">Project Scope</h3>
                          <p className="text-gray-400">Tell us what you need.</p>
                        </div>
                        <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">
                          Step 1 of 4
                        </span>
                      </div>

                      <div className="mt-6">
                        <div className="text-xs text-gray-400 uppercase mb-3">
                          I need help with...
                        </div>

                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {["New Website", "Existing Website", "New Feature", "Migration", "Urgent Help"].map((opt) => {
                            const active = helpWith === opt;
                            return (
                              <button
                                key={opt}
                                onClick={() => setHelpWith(opt)}
                                className={`py-3 px-3 rounded-lg text-sm border transition-all
                                  ${
                                    active
                                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                      : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                                  }`}
                              >
                                {opt}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* BUDGET */}
                      <div className="mt-6">
                        <div className="text-xs text-gray-400 uppercase mb-3">My budget is...</div>

                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { k: "<10k", lab: "Below ₹10,000" },
                            { k: "10k-50k", lab: "₹10,000–50,000" },
                            { k: "50k-1L", lab: "₹50,000–1,00,000" },
                            { k: ">1L", lab: "₹1,00,000+" },
                          ].map((b) => (
                            <button
                              key={b.k}
                              onClick={() => {
                                setBudget(b.k);
                                setCustomBudget("");
                              }}
                              className={`py-3 px-3 rounded-lg text-sm border transition-all
                                ${
                                  budget === b.k
                                    ? "bg-indigo-600 text-white"
                                    : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                                }`}
                            >
                              {b.lab}
                            </button>
                          ))}

                          {/* CUSTOM */}
                          <button
                            onClick={() => setBudget("custom")}
                            className={`py-3 px-3 rounded-lg text-sm border transition-all
                              ${
                                budget === "custom"
                                  ? "bg-indigo-600 text-white"
                                  : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                              }`}
                          >
                            Custom
                          </button>
                        </div>

                        {budget === "custom" && (
                          <input
                            value={customBudget}
                            onChange={(e) => setCustomBudget(e.target.value)}
                            placeholder="Enter custom amount..."
                            className="mt-4 w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400"
                          />
                        )}
                      </div>

                      <div className="mt-8 flex justify-end">
                        <button
                          onClick={() => canNext(1) && setStep(2)}
                          className={`px-6 py-3 rounded-full inline-flex items-center gap-2 font-semibold transition
                            ${
                              canNext(1)
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                                : "bg-white/10 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                          Next Step <ArrowRight className="h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2 — CALENDAR */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">Schedule a Date</h3>
                          <p className="text-gray-400">Pick your date</p>
                        </div>

                        <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">
                          Step 2 of 4
                        </span>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-sm text-gray-300 font-medium">
                            {calendarMonth.toLocaleString(undefined, {
                              month: "long",
                              year: "numeric",
                            })}
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() =>
                                setCalendarMonth(
                                  new Date(
                                    calendarMonth.getFullYear(),
                                    calendarMonth.getMonth() - 1,
                                    1
                                  )
                                )
                              }
                              className="p-2 bg-black/20 border border-white/10 rounded-md hover:bg-white/10 transition"
                            >
                              <ArrowLeft className="h-4" />
                            </button>

                            <button
                              onClick={() =>
                                setCalendarMonth(
                                  new Date(
                                    calendarMonth.getFullYear(),
                                    calendarMonth.getMonth() + 1,
                                    1
                                  )
                                )
                              }
                              className="p-2 bg-black/20 border border-white/10 rounded-md hover:bg-white/10 transition"
                            >
                              <ArrowRight className="h-4" />
                            </button>
                          </div>
                        </div>

                        {/* CALENDAR */}
                        <div className="bg-[#0c0f16] border border-white/10 rounded-xl p-4 shadow-inner">
                          <div className="grid grid-cols-7 gap-2 text-xs text-gray-400 mb-3">
                            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                              (d) => (
                                <div key={d} className="text-center">
                                  {d}
                                </div>
                              )
                            )}
                          </div>

                          <div className="grid grid-cols-7 gap-2">
                            {calendarWeeks.flat().map((d, i) => {
                              if (!d) return <div key={i} className="h-12 rounded-md" />;

                              const isToday = d.getTime() === today.getTime();
                              const disabled = d.getTime() < today.getTime();
                              const selected = d.getTime() === selectedDate.getTime();

                              return (
                                <button
                                  key={i}
                                  disabled={disabled}
                                  onClick={() => setSelectedDate(new Date(d))}
                                  className={`h-12 rounded-md flex items-center justify-center text-sm transition
                                    ${
                                      disabled
                                        ? "text-gray-700"
                                        : selected
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                        : isToday
                                        ? "bg-white/10 text-white"
                                        : "text-gray-200 hover:bg-white/10"
                                    }`}
                                >
                                  {d.getDate()}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 flex justify-between">
                        <button
                          onClick={() => setStep(1)}
                          className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 
                                     flex items-center gap-2 hover:bg-white/20 transition"
                        >
                          <ArrowLeft className="h-4" /> Back
                        </button>

                        <button
                          onClick={() => canNext(2) && setStep(3)}
                          className={`px-6 py-3 rounded-full inline-flex items-center gap-2 transition
                            ${
                              canNext(2)
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                                : "bg-white/10 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                          Next Step <ArrowRight className="h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3 — TIME SLOTS */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">Select a Time</h3>
                          <p className="text-gray-400">
                            Available slots for{" "}
                            {selectedDate.toLocaleString(undefined, {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>

                        <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">
                          Step 3 of 4
                        </span>
                      </div>

                      <div className="mt-6">
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {TIME_SLOTS.map((slot) => {
                            const disabled = isSlotDisabled(slot);
                            const active = selectedTime === slot;

                            return (
                              <button
                                key={slot}
                                disabled={disabled}
                                onClick={() => !disabled && setSelectedTime(slot)}
                                className={`py-3 rounded-lg text-sm border transition
                                  ${
                                    disabled
                                      ? "bg-black/10 text-gray-500 border-white/10"
                                      : active
                                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                      : "bg-black/20 text-gray-200 border-white/10 hover:bg-white/10"
                                  }`}
                              >
                                {slot}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="mt-8 flex justify-between">
                        <button
                          onClick={() => setStep(2)}
                          className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 
                                     flex items-center gap-2 hover:bg-white/20 transition"
                        >
                          <ArrowLeft className="h-4" /> Back
                        </button>

                        <button
                          onClick={() => canNext(3) && setStep(4)}
                          className={`px-6 py-3 rounded-full inline-flex items-center gap-2 transition
                            ${
                              canNext(3)
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                                : "bg-white/10 text-gray-400 cursor-not-allowed"
                            }`}
                        >
                          Next Step <ArrowRight className="h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4 — USER DETAILS */}
                  {step === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-2xl font-bold mb-1">Your Details</h3>
                          <p className="text-gray-400">Where should we send the confirmation?</p>
                        </div>

                        <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">
                          Step 4 of 4
                        </span>
                      </div>

                      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Full Name *"
                          className="w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400"
                        />

                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email Address *"
                          className="w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400"
                        />

                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone (optional)"
                          className="w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400"
                        />

                        <input
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="Website (optional)"
                          className="w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400"
                        />

                        <textarea
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Tell us more about your project goals..."
                          rows={4}
                          className="w-full bg-black/20 border border-white/10 p-3 rounded-md text-white hover:border-indigo-400 sm:col-span-2"
                        ></textarea>
                      </div>

                      <div className="mt-8 flex justify-between">
                        <button
                          onClick={() => setStep(3)}
                          className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 
                                     flex items-center gap-2 hover:bg-white/20 transition"
                        >
                          <ArrowLeft className="h-4" /> Back
                        </button>

                        <button
                          disabled={!canNext(4) || sending}
                          onClick={handleSubmit}
                          className={`px-6 py-3 rounded-full inline-flex items-center gap-2 transition
                            ${
                              canNext(4)
                                ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                                : "bg-white/10 text-gray-400"
                            }`}
                        >
                          {sending ? "Sending..." : "Confirm Booking"}{" "}
                          <ArrowRight className="h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </main>
          </div>
        </div>

        {/* SUCCESS MODAL */}
        {success && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              className="bg-[#11131a]/80 backdrop-blur-md border border-white/10 
                         rounded-2xl p-6 max-w-md w-full text-center"
            >
              <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
              <h3 className="text-xl font-semibold mt-4">Thanks — Request Sent</h3>
              <p className="text-gray-300 mt-2">
                Our team will contact you soon with the project plan & next steps.
              </p>

              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSuccess(false);
                    setStep(1);
                  }}
                  className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                >
                  Close
                </button>

                <Link
                  to="/contact"
                  className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>
    </>
  );
};

export default EstimatorEmbedded;
