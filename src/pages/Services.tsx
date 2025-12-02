// src/pages/Services.tsx

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  const [sparkle, setSparkle] = useState(null);

  useEffect(() => {
    fetch(
      "https://lottie.host/d0fb9c95-8684-49c4-a59b-e4e105a456db/5OrD6F8FkK.json"
    )
      .then((r) => r.json())
      .then(setSparkle);
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

      {/* SEO META */}
      <Helmet>
        <title>Premium Digital Services • SuPav Solutions</title>
        <meta
          name="description"
          content="SuPav Solutions provides premium websites, automation systems, branding, SEO, digital marketing, and e-commerce onboarding services."
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative pt-28 md:pt-36 pb-16 text-center px-6 overflow-hidden">

        {/* Floating particles only */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight 
          bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Premium Digital Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg mt-4"
        >
          Build modern websites, automate workflows, optimize marketing & scale your business with SuPav Solutions.
        </motion.p>

        {/* underline bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "150px" }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-6 h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </section>

      {/* SERVICES GRID */}
      <section className="container mx-auto px-5 md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 pb-20">

        {services.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.04, rotate: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-8 
            text-center shadow-lg backdrop-blur-lg 
            hover:shadow-purple-500/30 transition-all duration-300 relative"
          >
            {sparkle && (
              <div className="absolute top-4 right-4 w-7 opacity-90">
                <Lottie animationData={sparkle} loop />
              </div>
            )}

            <img src={item.img} className="w-16 sm:w-20 mx-auto mb-4" alt={item.title} />

            <h3 className="text-xl md:text-2xl font-semibold text-indigo-300">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-base mt-2 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center px-6 relative">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-3xl sm:text-4xl font-extrabold 
          bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          Ready to Scale Your Business?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base mt-4 max-w-xl mx-auto"
        >
          Let's build something extraordinary — websites, automation systems, branding & digital solutions.
        </motion.p>

        <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/contact#contact-top"
            className="inline-block px-10 py-3.5 mt-7 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:from-indigo-700 hover:to-purple-700 
            rounded-xl font-semibold shadow-lg text-white text-base sm:text-lg 
            transition-all duration-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Services;
