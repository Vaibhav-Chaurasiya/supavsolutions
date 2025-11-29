// src/pages/DivyangJobSupport.tsx

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Heart, Briefcase, Users, CheckCircle } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const DivyangJobSupport = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08090F] via-[#0F1220] to-[#121A2E] text-white">

      {/* 🔥 SEO */}
      <Helmet>
        <title>Divyang Job Support | SuPav Solutions</title>
        <meta
          name="description"
          content="SuPav Solutions helps differently-abled individuals find suitable job opportunities, skill training, and workplace support."
        />
      </Helmet>

      {/* 🌟 HERO SECTION */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Empowering <span className="text-indigo-400">Divyang Talent</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          We provide support, training, and job opportunities to differently-abled
          individuals, helping them build a strong career and brighter future.
        </motion.p>
      </section>

      {/* ⭐ FEATURES */}
      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Briefcase className="h-10 w-10 text-indigo-400" />,
            title: "Job Placements",
            desc: "Connecting Divyang individuals with companies offering inclusive job roles."
          },
          {
            icon: <Users className="h-10 w-10 text-indigo-400" />,
            title: "Skill Training",
            desc: "Upskilling programs like computer basics, customer support, e-commerce, and more."
          },
          {
            icon: <Heart className="h-10 w-10 text-indigo-400" />,
            title: "Personal Support",
            desc: "Career counselling, documentation help, workplace guidance, and mentorship."
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 + i * 0.1 }}
            className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md shadow-lg"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* 📑 JOB ROLES */}
      <section className="bg-[#0C0F18] py-16 px-6 md:px-10">
        <h2 className="text-3xl font-bold text-center mb-10 text-indigo-300">
          Available Job Roles
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "E-commerce Catalog Assistant",
            "Customer Support (Chat/Email)",
            "Data Entry Operator",
            "Digital Marketing Intern",
            "Telecaller (Work From Home)",
            "Website Content Assistant",
          ].map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 bg-white/5 px-6 py-4 rounded-lg border border-white/10"
            >
              <CheckCircle className="text-green-400" />
              <span className="text-gray-200">{role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📝 APPLY FORM */}
      <section className="py-20 px-6 md:px-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6 text-indigo-300">
          Apply for Support
        </h2>

        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Fill out this quick form and our team will contact you for job support,
          documentation help, or skill training.
        </p>

        <form className="grid md:grid-cols-2 gap-6 bg-white/5 border border-white/10 p-8 rounded-xl backdrop-blur-md shadow-xl">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-transparent border border-gray-700 p-3 rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Disability Type"
            className="bg-transparent border border-gray-700 p-3 rounded-md text-white"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="bg-transparent border border-gray-700 p-3 rounded-md text-white"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-gray-700 p-3 rounded-md text-white"
          />

          <textarea
            placeholder="Tell us about your skills or experience"
            rows={4}
            className="bg-transparent border border-gray-700 p-3 rounded-md text-white md:col-span-2"
          ></textarea>

          <button
            type="submit"
            className="w-full md:col-span-2 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition-all"
          >
            Submit Application
          </button>
        </form>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default DivyangJobSupport;
