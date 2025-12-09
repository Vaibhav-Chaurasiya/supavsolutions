// src/pages/Contact.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Send, PhoneCall, Mail, MapPin, ArrowRightCircle } from "lucide-react";
import ScrollToTop from "@/components/FloatingActions";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <div
      id="contact-top"
      className="min-h-screen bg-gradient-to-br from-[#08080b] via-[#0d0f19] to-[#101827] text-white overflow-hidden relative"
    >
      <Helmet>
        <title>Contact • SuPav Solutions</title>
        <meta
          name="description"
          content="Contact SuPav Solutions for website development, digital marketing, branding, automation systems, and business growth services."
        />
      </Helmet>

      {/* FLOATING PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Background Glows */}
      <div className="absolute top-24 left-10 w-60 h-60 bg-purple-600/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-24 right-10 w-60 h-60 bg-indigo-600/20 blur-[130px] rounded-full" />

      {/* HEADER */}
      <section className="pt-28 pb-12 text-center px-6 relative">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
          bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg mt-4"
        >
          We’re here to support your business needs — Let’s grow together.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 0.4 }}
          className="mx-auto h-[3px] mt-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
        />
      </section>

      {/* MAIN GRID */}
      <section className="container mx-auto px-5 md:px-10 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 relative">

        {/* CONTACT DETAILS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 
          backdrop-blur-xl shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/20 
          transition-all duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Contact Details
          </h2>

          <div className="space-y-8">

            {/* PHONE */}
            <div className="flex gap-4 items-start group">
              <div className="bg-indigo-600/20 p-3 rounded-xl shadow-md group-hover:scale-110 transition-all">
                <PhoneCall className="w-7 h-7 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Phone</h3>
                <p className="text-gray-300 text-sm md:text-base mt-1">+91 8860951910</p>
                <p className="text-gray-400 text-xs mt-1">Available Mon–Sat, 9 AM – 5 PM</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex gap-4 items-start group">
              <div className="bg-indigo-600/20 p-3 rounded-xl shadow-md group-hover:scale-110 transition-all">
                <Mail className="w-7 h-7 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Email</h3>
                <p className="text-gray-300 text-sm md:text-base mt-1">info@supavsolutions.com</p>
                <p className="text-gray-400 text-xs mt-1">Response within 2–4 hours</p>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex gap-4 items-start group">
              <div className="bg-indigo-600/20 p-3 rounded-xl shadow-md group-hover:scale-110 transition-all">
                <MapPin className="w-7 h-7 text-purple-300" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold">Office Location</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-1">
                  SuPav Solutions, First Floor, Numberdar Plaza,<br />
                  Near Canara Bank, Chipiyana Buzurg,<br />
                  Greater Noida, Ghaziabad, UP 201009
                </p>
                <a
                  href="https://maps.app.goo.gl/kJHUsruDdK9Vw1UB8"
                  target="_blank"
                  className="text-purple-300 text-xs mt-1 block hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

            {/* BUSINESS HOURS */}
            <div className="pt-2 border-t border-white/10">
              <h3 className="text-lg md:text-xl font-semibold">Business Hours</h3>
              <p className="text-gray-300 text-sm md:text-base mt-2">
                Monday – Saturday: 09:00 AM – 5:00 PM
              </p>
              <p className="text-gray-500 text-xs">Sunday Closed</p>
            </div>

          </div>
        </motion.div>

        {/* FORM SECTION */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 
          backdrop-blur-xl shadow-xl space-y-6 hover:border-purple-500/40 
          hover:shadow-purple-500/20 transition-all duration-300"
        >
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
            Send a Message
          </h2>

          <div>
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              required
              type="text"
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 
              focus:ring-2 focus:ring-purple-400 text-sm md:text-base"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              required
              type="email"
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 
              focus:ring-2 focus:ring-purple-400 text-sm md:text-base"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              required
              rows={4}
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 
              focus:ring-2 focus:ring-purple-400 text-sm md:text-base resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 
            rounded-xl flex items-center justify-center gap-2 font-medium 
            shadow-xl text-sm md:text-base"
          >
            Send Message <Send className="h-5 w-5" />
          </motion.button>
        </motion.form>
      </section>

      {/* MAP SECTION */}
      <section className="container mx-auto px-5 md:px-10 pb-20 relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 
          backdrop-blur-xl shadow-xl hover:border-purple-500/40 hover:shadow-purple-500/20 
          transition-all duration-300 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowRightCircle className="w-6 h-6 text-purple-300" />
            <h3 className="text-xl font-semibold">Find Us on Map</h3>
          </div>

          {/* NEW GOOGLE MAP (YOUR LOCATION) */}
          <iframe
            className="w-full h-48 md:h-64 rounded-xl border-0 shadow-xl"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2902047726817!2d77.47443957604307!3d28.56099347569311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea19d34ef469%3A0x7b754262e7494005!2sSuPav%20Solutions!5e0!3m2!1sen!2sin!4v1733038250000"
          ></iframe>
        </motion.div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Contact;
