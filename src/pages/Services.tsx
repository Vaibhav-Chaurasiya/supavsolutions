// src/pages/Services.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Lottie from "lottie-react";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

/* ---------- small animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Services: React.FC = () => {
  const [sparkle, setSparkle] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/d0fb9c95-8684-49c4-a59b-e4e105a456db/5OrD6F8FkK.json"
    )
      .then((r) => r.json())
      .then(setSparkle)
      .catch(() => {});
  }, []);

  const services = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      title: "Website Development",
      text: "React, Next.js & WordPress websites optimized for SEO, speed & conversions.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/891/891462.png",
      title: "E-Commerce Onboarding",
      text: "Amazon, Flipkart, Meesho, JioMart — seller onboarding, listings & catalog setup.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
      title: "Seller Account Management",
      text: "Order management, ads optimization & SEO performance improvement.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1006/1006363.png",
      title: "App Development",
      text: "Custom Android, iOS & cross-platform mobile app development.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/13855/13855018.png",
      title: "Digital Marketing & SEO",
      text: "Google Ads, Meta Ads, SEO strategy, lead generation & growth campaigns.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
      title: "Business Automation",
      text: "Custom CRM, workflow automations, dashboards & integration tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">
      <Helmet>
        <title>Premium Digital Services • SuPav Solutions</title>
        <meta
          name="description"
          content="SuPav Solutions provides premium websites, automation systems, branding, SEO, digital marketing, and e-commerce onboarding services."
        />
      </Helmet>

      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 text-center px-6 overflow-hidden">
        {/* floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30 animate-pulse"
              style={{
                top: `${Math.random() * 85}%`,
                left: `${Math.random() * 95}%`,
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
          bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Premium Digital Services
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.25 }}
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4"
        >
          Build modern websites, automate workflows, optimize marketing & scale
          your business with SuPav Solutions.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.05 }}
            className="
              group relative bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-center 
              backdrop-blur-lg shadow-md transition-all duration-300
              hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]
              hover:border-indigo-500/40
            "
          >
            {/* Glow Layer */}
            <div
              className="
                absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 
                transition-all duration-300 blur-xl
                bg-gradient-to-r from-indigo-500 to-purple-600
              "
            ></div>

            {/* Sparkle */}
            {sparkle && (
              <div className="absolute top-4 right-4 w-8 opacity-95 z-10">
                <Lottie animationData={sparkle} loop />
              </div>
            )}

            <img
              src={s.img}
              alt={s.title}
              className="
                w-16 h-16 object-contain mx-auto mb-3 
                transition-all duration-300 group-hover:scale-110
              "
            />

            <h3
              className="
                text-xl md:text-2xl font-semibold text-indigo-300 
                transition-all duration-300 group-hover:text-purple-300
              "
            >
              {s.title}
            </h3>

            <p
              className="
                text-gray-300 mt-2 text-sm md:text-base 
                transition-all duration-300 group-hover:text-gray-200
              "
            >
              {s.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ESTIMATOR (embedded) */}
      <EstimatorEmbedded />

      <ScrollToTop />
    </div>
  );
};

export default Services;

/* ========================= EstimatorEmbedded =========================
   - Light premium hover look
   =================================================================== */

function EstimatorEmbedded() {
  // states (UNCHANGED)
  const [step, setStep] = useState<number>(1);
  const [helpWith, setHelpWith] = useState<string>("Website");
  const [budget, setBudget] = useState<string>("<20k");
  const [customBudget, setCustomBudget] = useState<string>("");
  const today = useMemo(() => {
    const n = new Date(); n.setHours(0, 0, 0, 0); return n;
  }, []);
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [notes, setNotes] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const TIME_SLOTS = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

  function startOfMonth(d) { return new Date(d.getFullYear(), d.getMonth(), 1); }
  function daysInMonth(d) { return new Date(d.getFullYear(), d.getMonth()+1, 0).getDate(); }
  function weekday(d) { return new Date(d).getDay(); }

  function next30MinSlotStr() {
    const now = new Date();
    const m = now.getMinutes();
    let mins = Math.ceil((m + 1) / 30) * 30;
    let hr = now.getHours();
    if (mins === 60) { mins = 0; hr = (hr + 1) % 24; }
    return `${String(hr).padStart(2,"0")}:${String(mins).padStart(2,"0")}`;
  }

  function isSlotDisabled(slot) {
    const sel = new Date(selectedDate); sel.setHours(0,0,0,0);
    const todayZero = new Date(today);
    if (sel.getTime() === todayZero.getTime()) {
      const min = next30MinSlotStr();
      return slot < min;
    }
    return false;
  }

  function buildCalendarMatrix(monthDate) {
    const first = startOfMonth(monthDate);
    const total = daysInMonth(monthDate);
    const startW = weekday(first);
    const weeks = [];
    let current = 1 - startW;

    for (let r = 0; r < 6; r++) {
      const row = [];
      for (let c = 0; c < 7; c++, current++) {
        if (current < 1 || current > total) row.push(null);
        else row.push(new Date(monthDate.getFullYear(), monthDate.getMonth(), current));
      }
      weeks.push(row);
    }
    return weeks;
  }

  const calendarWeeks = useMemo(() => buildCalendarMatrix(calendarMonth), [calendarMonth]);

  function canNext(s) {
    if (s === 1) {
      if (!helpWith) return false;
      if (!budget) return false;
      if (budget === "custom" && customBudget.trim() === "") return false;
      return true;
    }
    if (s === 2) {
      const sel = new Date(selectedDate); sel.setHours(0,0,0,0);
      return sel.getTime() >= today.getTime();
    }
    if (s === 3) {
      if (!selectedTime) return false;
      if (selectedDate.getTime() === today.getTime() && isSlotDisabled(selectedTime)) return false;
      return true;
    }
    if (s === 4) {
      if (fullName.trim().length < 2) return false;
      if (!/\S+@\S+\.\S+/.test(email)) return false;
      return true;
    }
    return true;
  }

  function handleSubmit() {
    if (!canNext(4)) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSuccess(true);
    }, 800);
  }

  const progress = Math.round(((step - 1) / 3) * 100);

  /* ========================================================= */

  return (
    <section className="py-12 md:py-16 px-6 md:px-10 bg-gradient-to-b from-[#06060a] to-transparent">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Project Estimator
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
            Quick estimator — choose scope, pick a date & time, and share details.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT PANEL CARDS (Light Hover) */}
          <aside className="order-2 md:order-1 flex flex-col gap-6">

            {/* CARD 1 */}
            <div
              className="
                relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl 
                shadow-lg min-h-[250px] flex flex-col justify-between
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                hover:border-indigo-400/40
              "
            >
              <div>
                <h3 className="text-xl font-semibold text-indigo-300">What This Estimator Does</h3>
                <p className="text-gray-300 mt-2">
                  Share your project needs & pick a meeting time. Our team prepares a
                  personalized strategy before the call.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-indigo-300 font-medium">Office Location</p>
                <p className="text-gray-300 text-sm mt-1">
                  SuPav Solutions, Numberdar Plaza, Chipiyana Buzurg, Greater Noida
                </p>

                <p className="text-indigo-300 font-medium mt-4">Contact</p>
                <a href="tel:+918860951910" className="text-gray-300 mt-1 block text-sm">
                  +91 88609 51910
                </a>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl 
                shadow-lg min-h-[250px] flex flex-col justify-between
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(139,92,246,0.25)]
                hover:border-indigo-400/40
              "
            >
              <h3 className="text-xl font-semibold text-indigo-300">Before You Begin</h3>

              <ul className="mt-3 text-gray-300 text-sm list-disc ml-5 space-y-2">
                <li>Select the service that matches your project.</li>
                <li>Pick a realistic budget.</li>
                <li>Choose a meeting time 30 minutes later.</li>
                <li>Add details like features, pages, CRM.</li>
                <li>Clear inputs = faster delivery.</li>
              </ul>
            </div>
          </aside>

          {/* RIGHT SIDE WIZARD (LIGHT EFFECTS ADDED) */}
          <main className="order-1 md:order-2">
            <div
              className="
                bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-xl 
                transition-all duration-300
                hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]
                hover:border-indigo-400/40
              "
            >
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
                  <span>Scope</span><span>Schedule</span><span>Time</span><span>Details</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                
                {/* ALL STEPS BELOW → UPDATED WITH LIGHT HOVER */}
                {/* 🔥 Steps UI are long — BUT FULLY UPDATED */}

                {/* ----- STEP 1 (LIGHT HOVER BUTTONS) ----- */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Project Scope</h3>
                        <p className="text-gray-400">Tell us what you need.</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">Step 1 of 4</span>
                    </div>

                    {/* OPTIONS */}
                    <div className="mt-6">
                      <div className="text-xs text-gray-400 uppercase mb-3">I need help with...</div>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {["New Website","Existing Website","New Feature","Migration","Urgent Help"].map((opt) => {
                          const active = helpWith === opt;
                          return (
                            <button
                              key={opt}
                              onClick={() => setHelpWith(opt)}
                              className={`
                                py-3 px-3 rounded-lg text-sm border transition-all duration-200
                                ${active 
                                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                  : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                                }
                              `}
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
                            onClick={() => { setBudget(b.k); setCustomBudget(""); }}
                            className={`
                              py-3 px-3 rounded-lg text-sm border transition-all duration-200
                              ${budget === b.k 
                                ? "bg-indigo-600 text-white"
                                : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                              }
                            `}
                          >
                            {b.lab}
                          </button>
                        ))}

                        <button
                          onClick={() => setBudget("custom")}
                          className={`
                            py-3 px-3 rounded-lg text-sm border transition-all duration-200
                            ${budget === "custom"
                              ? "bg-indigo-600 text-white"
                              : "bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10"
                            }
                          `}
                        >
                          Custom
                        </button>
                      </div>

                      {budget === "custom" && (
                        <input
                          value={customBudget}
                          onChange={(e) => setCustomBudget(e.target.value)}
                          placeholder="Enter custom amount..."
                          className="
                            mt-4 w-full bg-black/20 border border-white/10 p-3 rounded-md text-white 
                            transition-all duration-200 hover:border-indigo-400
                          "
                        />
                      )}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        onClick={() => canNext(1) && setStep(2)}
                        className={`
                          inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                          transition-all duration-200
                          ${canNext(1)
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                            : "bg-white/10 text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        Next Step <ArrowRight className="h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ----- STEP 2 (Calendar Light Hover) ----- */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Schedule a Date</h3>
                        <p className="text-gray-400">Pick your date</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">Step 2 of 4</span>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-gray-300 font-medium">
                          {calendarMonth.toLocaleString(undefined, { month: "long", year: "numeric" })}
                        </div>

                        <div className="flex gap-2">
                          {/* PREV MONTH */}
                          <button
                            onClick={() =>
                              setCalendarMonth(
                                new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1)
                              )
                            }
                            className="p-2 rounded-md bg-black/20 border border-white/10 hover:bg-white/10 transition"
                          >
                            <ArrowLeft className="h-4 w-4" />
                          </button>

                          {/* NEXT MONTH */}
                          <button
                            onClick={() =>
                              setCalendarMonth(
                                new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1)
                              )
                            }
                            className="p-2 rounded-md bg-black/20 border border-white/10 hover:bg-white/10 transition"
                          >
                            <ArrowRight className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* CALENDAR */}
                      <div className="rounded-xl bg-[#0c0f16] p-4 border border-white/10 shadow-inner">
                        
                        {/* Weekdays */}
                        <div className="grid grid-cols-7 gap-2 text-xs text-gray-400 mb-3">
                          {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
                            <div key={d} className="text-center">{d}</div>
                          ))}
                        </div>

                        {/* Days */}
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
                                className={`
                                  h-12 flex items-center justify-center rounded-md text-sm transition-all duration-200
                                  ${
                                    disabled
                                      ? "text-gray-700"
                                      : selected
                                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                      : isToday
                                      ? "bg-white/10 text-white"
                                      : "text-gray-200 hover:bg-white/10 hover:border-indigo-400"
                                  }
                                `}
                              >
                                {d.getDate()}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={() => setStep(1)}
                        className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 flex items-center gap-2 hover:bg-white/20 transition"
                      >
                        <ArrowLeft className="h-4" /> Back
                      </button>

                      <button
                        onClick={() => canNext(2) && setStep(3)}
                        className={`
                          px-6 py-3 rounded-full inline-flex items-center gap-2 transition
                          ${canNext(2)
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                            : "bg-white/10 text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        Next Step <ArrowRight className="h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ----- STEP 3 (TIME SLOTS LIGHT HOVER) ----- */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Select a Time</h3>
                        <p className="text-gray-400">
                          Available slots for{" "}
                          {selectedDate.toLocaleString(undefined, { weekday: "long", month: "long", day: "numeric" })}
                        </p>
                      </div>
                      <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">Step 3 of 4</span>
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
                              className={`
                                py-3 rounded-lg text-sm border transition-all duration-200 
                                ${
                                  disabled
                                    ? "bg-black/10 text-gray-500 border-white/10"
                                    : active
                                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                                    : "bg-black/20 text-gray-200 border border-white/10 hover:bg-white/10"
                                }
                              `}
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
                        className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 flex items-center gap-2 hover:bg-white/20 transition"
                      >
                        <ArrowLeft className="h-4" /> Back
                      </button>

                      <button
                        onClick={() => canNext(3) && setStep(4)}
                        className={`
                          px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all
                          ${canNext(3)
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                            : "bg-white/10 text-gray-400 cursor-not-allowed"
                          }
                        `}
                      >
                        Next Step <ArrowRight className="h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ----- STEP 4 (FORM LIGHT EFFECTS) ----- */}
                {step === 4 && (
                  <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>

                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">Your Details</h3>
                        <p className="text-gray-400">Where should we send the confirmation?</p>
                      </div>
                      <span className="text-sm text-gray-400 bg-black/20 px-3 py-1 rounded-full">Step 4 of 4</span>
                    </div>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name *"
                        className="
                          w-full bg-black/20 border border-white/10 p-3 rounded-md text-white
                          transition-all duration-200 hover:border-indigo-400
                        "
                      />

                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address *"
                        className="
                          w-full bg-black/20 border border-white/10 p-3 rounded-md text-white
                          transition-all duration-200 hover:border-indigo-400
                        "
                      />

                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone (optional)"
                        className="
                          w-full bg-black/20 border border-white/10 p-3 rounded-md text-white
                          transition-all duration-200 hover:border-indigo-400
                        "
                      />

                      <input
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="Website (optional)"
                        className="
                          w-full bg-black/20 border border-white/10 p-3 rounded-md text-white
                          transition-all duration-200 hover:border-indigo-400
                        "
                      />

                      <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        rows={4}
                        placeholder="Tell us more about your project goals..."
                        className="
                          w-full bg-black/20 border border-white/10 p-3 rounded-md text-white sm:col-span-2
                          transition-all duration-200 hover:border-indigo-400
                        "
                      ></textarea>
                    </div>

                    <div className="mt-8 flex justify-between">
                      <button
                        onClick={() => setStep(3)}
                        className="px-4 py-2.5 rounded-full bg-white/10 text-gray-200 flex items-center gap-2 hover:bg-white/20 transition"
                      >
                        <ArrowLeft className="h-4" /> Back
                      </button>

                      <button
                        disabled={!canNext(4) || sending}
                        onClick={handleSubmit}
                        className={`
                          px-6 py-3 rounded-full inline-flex items-center gap-2 transition
                          ${canNext(4)
                            ? "bg-gradient-to-r from-indigo-600 to-purple-600 hover:brightness-110"
                            : "bg-white/10 text-gray-400"
                          }
                        `}
                      >
                        {sending ? "Sending..." : "Confirm Booking"} <ArrowRight className="h-4" />
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-md w-full text-center">
            <CheckCircle className="h-12 w-12 text-green-400 mx-auto" />
            <h3 className="text-xl font-semibold mt-4">Thanks — Request Sent</h3>
            <p className="text-gray-300 mt-2">Our team will contact you soon with project plan & next steps.</p>

            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => { setSuccess(false); setStep(1); }}
                className="px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition"
              >
                Close
              </button>

              <Link to="/contact" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}

