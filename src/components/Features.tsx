import React from "react";
import { motion } from "framer-motion";
import { features } from "@/data/featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-[#0A0B10] via-[#0b1120] to-[#020617] overflow-hidden"
    >
      {/* 🔮 Floating Background Accent Lights */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-[-100px] w-[28rem] h-[28rem] bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 🧠 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Why Choose <span className="text-white">SuPav Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We blend creativity, technology, and strategy to deliver digital
            experiences that drive measurable business growth.
          </p>
        </motion.div>

        {/* 🧩 Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 group hover:border-blue-500/40 hover:bg-white/10 transition-all duration-500"
            >
              {/* 🔹 Glow Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* 🔷 Icon */}
              <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-blue-400 text-2xl">{feature.icon}</span>
              </div>

              {/* 🧾 Text Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* ✨ Hover Glow Border */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-blue-500/30 to-indigo-500/30 blur-sm pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
