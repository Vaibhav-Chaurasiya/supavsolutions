// src/pages/Career.tsx

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Heart,
  Briefcase,
  Users,
  CheckCircle,
  GraduationCap,
  Rocket,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

// Fade Up Animation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08090F] via-[#0F1220] to-[#121A2E] text-white relative overflow-hidden">

      {/* =================== FLOATING PARTICLES =================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-floating"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.6}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute hidden md:block top-20 left-10 w-96 h-96 bg-purple-700/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-700/20 blur-[150px] rounded-full"></div>

      {/* SEO */}
      <Helmet>
        <title>Career & Divyang Support • SuPav Solutions</title>
        <meta
          name="description"
          content="Explore premium career opportunities, internships, fresher openings, and Divyang job support at SuPav Solutions."
        />
      </Helmet>

      {/* =================== HERO =================== */}
      <section className="relative text-center pt-28 pb-16 px-6 z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
        >
          Career & Divyang Support
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto mt-4 leading-relaxed text-base md:text-lg"
        >
          Build your future with SuPav Solutions — internships, freshers, remote work
          and inclusive roles for Divyang candidates.
        </motion.p>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 0.35 }}
          className="mx-auto w-[140px] h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 mt-6 rounded-full"
        />
      </section>

      {/* =================== CAREER OPPORTUNITIES =================== */}
      <section className="container mx-auto px-4 md:px-10 pb-16 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <Rocket className="h-10 w-10 text-indigo-400" />,
            title: "Internships",
            desc: "Web Dev, Software Dev, Digital Marketing & E-commerce roles.",
          },
          {
            icon: <GraduationCap className="h-10 w-10 text-indigo-400" />,
            title: "Fresher Jobs",
            desc: "We hire passionate freshers and train them with real tech stack.",
          },
          {
            icon: <Briefcase className="h-10 w-10 text-indigo-400" />,
            title: "Experienced Roles",
            desc: "Developer, designer, project manager & technical roles.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.15 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 
              backdrop-blur-xl shadow-lg transition-all duration-300
              hover:border-purple-500/40 hover:shadow-purple-500/30"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"></div>

            <div className="relative z-10 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-300 relative z-10">{item.title}</h3>
            <p className="text-gray-300 mt-2 relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* =================== DIVYANG SUPPORT =================== */}
      <section className="container mx-auto px-4 md:px-10 pb-16 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <Users className="h-10 w-10 text-indigo-400" />,
            title: "Skill Training",
            desc: "Digital literacy, typing, computer applications & work tools.",
          },
          {
            icon: <Heart className="h-10 w-10 text-indigo-400" />,
            title: "Personal Guidance",
            desc: "Documentation, resume support, interview prep & confidence boosting.",
          },
          {
            icon: <Briefcase className="h-10 w-10 text-indigo-400" />,
            title: "Job Placements",
            desc: "Calm, remote-friendly roles for special-abled individuals.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.15 }}
            className="group relative bg-white/5 border border-white/10 rounded-3xl p-8 
              backdrop-blur-xl shadow-lg transition-all duration-300
              hover:border-purple-500/40 hover:shadow-purple-500/30"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl bg-gradient-to-r from-purple-600 to-indigo-500 transition-all duration-300"></div>

            <div className="relative z-10 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-300 relative z-10">{item.title}</h3>
            <p className="text-gray-300 mt-2 relative z-10">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* =================== AVAILABLE ROLES =================== */}
      <section className="bg-[#0C0F18] py-16 px-4 md:px-10 relative z-10">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Available Roles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
          {[
            "Web Development Intern",
            "Software Developer (Junior)",
            "E-commerce Catalog Assistant",
            "Customer Support Executive",
            "Data Entry Operator",
            "Digital Marketing Assistant",
            "Telecaller (WFH)",
            "Website Content Assistant",
          ].map((role, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group flex items-center gap-3 bg-white/5 px-6 py-4 rounded-xl border border-white/10
                backdrop-blur-xl transition-all duration-300
                hover:border-purple-500/40 hover:shadow-purple-500/20"
            >
              <CheckCircle className="text-green-400" />
              <span className="text-gray-200">{role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== APPLY FORM =================== */}
      <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Apply Now
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-10">
          Submit your details and our HR team will contact you soon.
        </p>

        <form
          className="group grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-8 rounded-3xl 
            backdrop-blur-xl shadow-xl transition-all duration-300
            hover:border-purple-500/40 hover:shadow-purple-500/30"
        >
          <input type="text" placeholder="Full Name" className="bg-black/20 border border-white/20 p-3 rounded-lg text-white" />
          <input type="text" placeholder="Applying For" className="bg-black/20 border border-white/20 p-3 rounded-lg text-white" />
          <input type="text" placeholder="Phone Number" className="bg-black/20 border border-white/20 p-3 rounded-lg text-white" />
          <input type="email" placeholder="Email Address" className="bg-black/20 border border-white/20 p-3 rounded-lg text-white" />

          <textarea
            placeholder="Your skills or experience"
            rows={4}
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="w-full md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-700 hover:to-purple-700 py-3 rounded-xl font-semibold shadow-xl text-white"
          >
            Submit Application
          </button>
        </form>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Career;
