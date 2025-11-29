// src/pages/Home.tsx
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

import ScrollToTop from "@/components/ScrollToTop";
import useScrollAnimation from "@/utils/useScrollAnimation";

const Home = () => {
  // Scroll animations
  useScrollAnimation();

  // Fallback title
  useEffect(() => {
    document.title = "SuPav Solutions | Empowering Your Digital Future";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#030303] via-[#0a0b10] to-[#111827] text-white">

      {/* 🧠 SEO META TAGS */}
      <Helmet>
        <title>SuPav Solutions | Empowering Your Digital Future</title>
        <meta
          name="description"
          content="SuPav Solutions helps businesses grow online with expert E-commerce onboarding, digital marketing, and IT consulting."
        />
        <meta
          name="keywords"
          content="SuPav Solutions, e-commerce onboarding, digital marketing, website development, IT consulting, business automation"
        />
        <meta property="og:title" content="SuPav Solutions" />
        <meta
          property="og:description"
          content="Empowering businesses with digital innovation and online growth solutions."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://supavsolutions.com" />
        <meta name="theme-color" content="#0b1120" />
      </Helmet>

      {/* ⭐ MAIN CONTENT (Navbar/Footer is now App.tsx controlled) */}
      <main>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Hero />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Features />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <HowItWorks />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Pricing />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <CTA />
        </motion.section>
      </main>

      {/* 🆙 Scroll to top */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
