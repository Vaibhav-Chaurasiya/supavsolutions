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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Career = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08090F] via-[#0F1220] to-[#121A2E] text-white relative overflow-hidden">

      {/* Background Glow like CONTACT */}
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

      {/* HERO */}
      <section className="relative text-center pt-28 pb-16 px-6">
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
          Build your future with us — from internships to experienced roles,
          and inclusive opportunities for Divyang candidates.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mt-6 rounded-full"
        />
      </section>

      {/* CAREER OPPORTUNITIES */}
      <section className="container mx-auto px-4 md:px-10 pb-16 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <Rocket className="h-10 w-10 text-indigo-400" />,
            title: "Internships",
            desc: "Web Dev, Software Dev, Digital Marketing, E-commerce — real-world project-based learning.",
          },
          {
            icon: <GraduationCap className="h-10 w-10 text-indigo-400" />,
            title: "Fresher Jobs",
            desc: "We hire passionate freshers and train them with industry-grade technologies.",
          },
          {
            icon: <Briefcase className="h-10 w-10 text-indigo-400" />,
            title: "Experienced Roles",
            desc: "Join as a developer, designer, project manager or technical specialist.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.2 }}
            className="
              bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl 
              transition-all duration-300 shadow-lg
              hover:border-purple-500/40 hover:shadow-purple-500/30
            "
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-300">
              {item.title}
            </h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* DIVYANG SUPPORT */}
      <section className="container mx-auto px-4 md:px-10 pb-16 grid md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            icon: <Users className="h-10 w-10 text-indigo-400" />,
            title: "Skill Training",
            desc: "Digital literacy, customer support, typing & office tools for Divyang candidates.",
          },
          {
            icon: <Heart className="h-10 w-10 text-indigo-400" />,
            title: "Personal Guidance",
            desc: "Interview prep, documentation help, resume building, confidence support.",
          },
          {
            icon: <Briefcase className="h-10 w-10 text-indigo-400" />,
            title: "Job Placements",
            desc: "Calm, accessible and remote-friendly job roles for disabled individuals.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            transition={{ delay: i * 0.2 }}
            className="
              bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl
              transition-all duration-300 shadow-lg
              hover:border-purple-500/40 hover:shadow-purple-500/30
            "
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-indigo-300">
              {item.title}
            </h3>
            <p className="text-gray-300 mt-2">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* AVAILABLE ROLES */}
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
              className="
                flex items-center gap-3 bg-white/5 px-6 py-4 rounded-xl border border-white/10
                backdrop-blur-xl transition-all duration-300
                hover:border-purple-500/40 hover:shadow-purple-500/20
              "
            >
              <CheckCircle className="text-green-400" />
              <span className="text-gray-200">{role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APPLY FORM */}
      <section className="py-20 px-4 md:px-10 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
          Apply Now
        </h2>

        <p className="text-gray-400 text-center mt-4 mb-10">
          Submit your details and our HR team will reach out soon.
        </p>

        <form
          className="
            grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-8 rounded-3xl 
            backdrop-blur-xl shadow-xl transition-all duration-300
            hover:border-purple-500/40 hover:shadow-purple-500/30
          "
        >
          <input
            type="text"
            placeholder="Full Name"
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white"
          />
          <input
            type="text"
            placeholder="Applying For"
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white"
          />

          <textarea
            placeholder="Your skills or experience"
            rows={4}
            className="bg-black/20 border border-white/20 p-3 rounded-lg text-white md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="
              w-full md:col-span-2 bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-700 hover:to-purple-700 
              py-3 rounded-xl font-semibold shadow-xl text-white
            "
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
