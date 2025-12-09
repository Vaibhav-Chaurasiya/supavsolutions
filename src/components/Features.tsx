import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { features } from "@/data/featuresData";
import Lottie from "lottie-react";

const Features = () => {
  const [sparkle, setSparkle] = useState<any>(null);

  useEffect(() => {
    // Purple-themed sparkle animation
    fetch("https://lottie.host/f2f45900-8737-4b12-b12d-7115d4afa60a/UcHKzT.json")
      .then((r) => r.json())
      .then(setSparkle)
      .catch(() => {});
  }, []);

  return (
    <section
      id="features"
      className="relative py-24 bg-gradient-to-b from-[#08080b] via-[#0d0f19] to-[#101827] overflow-hidden"
    >
      {/* ✨ PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(28)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400/40 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 95}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* 🔮 GLOW LIGHTS */}
      <div className="absolute top-1/3 left-[-130px] w-[30rem] h-[30rem] bg-purple-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 right-[-130px] w-[32rem] h-[32rem] bg-indigo-600/20 blur-[120px] rounded-full"></div>

      {/* 🌊 MOVING PURPLE WAVE */}
      <div className="absolute inset-0 opacity-20 animate-[wave_6s_ease_in_out_infinite] bg-gradient-to-r from-purple-700/20 via-indigo-600/20 to-transparent blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 bg-clip-text text-transparent">
            Why Choose <span className="text-white">SuPav Solutions</span>
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            We combine creativity, innovation, and strategy to deliver powerful
            digital experiences that help your business grow.
          </p>

          {/* underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            transition={{ duration: 0.6 }}
            className="mx-auto mt-4 h-[3px] bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
          />
        </motion.div>

        {/* FEATURES GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
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
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                relative bg-white/5 backdrop-blur-xl border border-white/10 
                rounded-2xl p-8 group transition-all duration-500
                hover:-translate-y-2 hover:bg-white/10
                hover:border-purple-500/40
                hover:shadow-[0_0_45px_rgba(168,85,247,0.25)]
                overflow-hidden
              "
            >
              {/* ✨ LOTTIE SPARKLE (PURPLE-THEMED) */}
              {sparkle && (
                <div className="absolute top-4 right-4 w-8 opacity-90 z-20">
                  <Lottie animationData={sparkle} loop />
                </div>
              )}

              {/* ICON with PURPLE GLOW */}
              <div
                className="
                relative z-10 bg-gradient-to-br from-purple-500/20 to-indigo-500/20
                rounded-xl w-16 h-16 flex items-center justify-center mb-6
                group-hover:scale-110 transition-transform duration-300
                animate-[pulseGlow_3s_ease_in_out_infinite]
              "
              >
                <span className="text-purple-300 text-3xl">{feature.icon}</span>
              </div>

              {/* TEXT */}
              <div className="relative z-10">
                <h3
                  className="
                  text-xl font-semibold text-white mb-3 
                  group-hover:text-purple-300 transition-colors duration-300
                "
                >
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* ✨ SHINE SWIPE */}
              <div
                className="
                absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-all duration-700
                translate-x-[-100%] group-hover:translate-x-[100%]
              "
              />

              {/* OUTER GLOW BORDER */}
              <div
                className="
                absolute -inset-[1px] rounded-2xl opacity-0 
                group-hover:opacity-100 transition duration-500
                bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-md pointer-events-none
              "
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }

        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0px rgba(168,85,247,0.0); }
          50% { box-shadow: 0 0 18px rgba(168,85,247,0.45); }
        }
      `}</style>
    </section>
  );
};

export default Features;
