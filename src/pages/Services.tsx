// src/pages/Services.tsx
import React, { useEffect, useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/FloatingActions";
import Lottie from "lottie-react";
import EstimatorEmbedded from "@/components/EstimatorEmbedded"; // ⭐ NEW IMPORT
import { Link } from "react-router-dom";

/* ---------- small animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Services: React.FC = () => {
  const [sparkle, setSparkle] = useState<any>(null);

  useEffect(() => {
    fetch("https://lottie.host/d0fb9c95-8684-49c4-a59b-e4e105a456db/5OrD6F8FkK.json")
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
          Build modern websites, automate workflows, optimize marketing & scale your business with SuPav Solutions.
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

      {/* ⭐ NOW USING SEPARATE COMPONENT */}
      <EstimatorEmbedded apiEndpoint="/api/estimator" />

      <ScrollToTop />
    </div>
  );
};

export default Services;
