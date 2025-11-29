// src/pages/Services.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import {
  ShoppingCart,
  Globe,
  TrendingUp,
  Brush,
  BarChart3,
  Rocket,
} from "lucide-react";

const Services = () => {
  const serviceData = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-purple-400" />,
      title: "E-Commerce Marketplace Onboarding",
      text: "Complete onboarding and catalog setup for Amazon, Flipkart, Meesho, Blinkit, Zepto & more.",
    },
    {
      icon: <Globe className="h-10 w-10 text-indigo-400" />,
      title: "Website Development",
      text: "High-performance websites using React, Next.js, WordPress, and custom full-stack solutions.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-pink-400" />,
      title: "Seller Account Management",
      text: "Daily operations, listings, growth optimization, dispute handling & brand visibility boosting.",
    },
    {
      icon: <Brush className="h-10 w-10 text-blue-400" />,
      title: "Branding & Creative Design",
      text: "Logo design, content creation, posters, banners, A+ listing designs & product creatives.",
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-green-400" />,
      title: "Digital Marketing & SEO",
      text: "Google Ads, Meta Ads, SEO ranking, and performance-driven marketing for online business growth.",
    },
    {
      icon: <Rocket className="h-10 w-10 text-yellow-400" />,
      title: "Business Automation",
      text: "Custom tools, workflow automation, CRM systems & inventory management for businesses.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0d] via-[#11131a] to-[#0f172a] text-white overflow-x-hidden">

      {/* 📌 SEO */}
      <Helmet>
        <title>Services | SuPav Solutions</title>
        <meta
          name="description"
          content="Explore SuPav Solutions services: E-commerce onboarding, marketplace management, web development, digital marketing, branding and business automation."
        />
        <meta property="og:title" content="SuPav Solutions Services" />
        <meta
          property="og:description"
          content="Professional services to grow your online business: Amazon, Flipkart onboarding, website development, marketing and automation."
        />
        <meta name="keywords" content="SuPav Solutions Services, ecommerce onboarding, website development, digital marketing India" />
      </Helmet>

      {/* ⭐ Header */}
      <section className="pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gradient"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-2xl mx-auto text-gray-300 mt-4 text-lg"
        >
          We provide complete digital transformation solutions to help your
          business scale in the online marketplace.
        </motion.p>
      </section>

      {/* ⭐ Services Grid */}
      <section className="container mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {serviceData.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg hover:shadow-indigo-600/20 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.text}</p>
          </motion.div>
        ))}
      </section>

      {/* ⭐ CTA */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-indigo-400"
        >
          Want to Grow Your Online Business?
        </motion.h2>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Our expert team will help you scale your digital presence and
          accelerate your business performance across all platforms.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="mt-8 px-10 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl font-medium shadow-lg transition-all"
        >
          Get in Touch
        </motion.button>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Services;
