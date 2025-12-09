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

import ScrollToTop from "@/components/FloatingActions";
import useScrollAnimation from "@/utils/useScrollAnimation";

const Home: React.FC = () => {
  // Scroll-based reveal animations
  useScrollAnimation();

  // Fallback Title (In case Helmet didn't apply yet)
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
          content="SuPav Solutions helps businesses grow online with expert E-commerce onboarding, digital marketing, web development, and IT consulting."
        />
        <meta
          name="keywords"
          content="SuPav Solutions, web development, e-commerce onboarding, digital marketing, IT consulting, automation, branding"
        />

        {/* OPEN GRAPH TAGS */}
        <meta property="og:title" content="SuPav Solutions" />
        <meta
          property="og:description"
          content="Empowering businesses with digital innovation and online growth solutions."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://supavsolutions.com" />
        <meta name="theme-color" content="#0b1120" />
      </Helmet>

      {/* ⭐ MAIN CONTENT (Navbar / Footer handled in App.tsx) */}
      <main>
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Hero />
        </motion.section>

        {/* FEATURES */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Features />
        </motion.section>

        {/* HOW IT WORKS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <HowItWorks />
        </motion.section>

        {/* TESTIMONIALS */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.section>

        {/* PRICING */}
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Pricing />
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FAQ />
        </motion.section>

        {/* CALL TO ACTION */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <CTA />
        </motion.section>
      </main>

      {/* Scroll to top floating button */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
