// src/pages/About.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0d] via-[#11131a] to-[#0f172a] text-white overflow-x-hidden">

      {/* ⭐ SEO */}
      <Helmet>
        <title>About Us | SuPav Solutions</title>
        <meta
          name="description"
          content="Learn about SuPav Solutions — a modern digital agency offering E-commerce onboarding, website development, digital marketing, marketplace management, and business automation."
        />
        <meta
          name="keywords"
          content="SuPav Solutions About, website development, ecommerce onboarding, digital marketing agency, IT services India"
        />
        <meta property="og:title" content="About SuPav Solutions" />
        <meta
          property="og:description"
          content="We help businesses grow online with advanced E-commerce, IT, and digital marketing solutions."
        />
      </Helmet>

      {/* ⭐ Header Section */}
      <section className="pt-28 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gradient mb-4"
        >
          About SuPav Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-300 max-w-2xl mx-auto text-lg"
        >
          We are a modern digital agency helping businesses grow with powerful
          E-commerce onboarding, marketplace management, web development,
          branding, and digital marketing solutions.
        </motion.p>
      </section>

      {/* ⭐ Mission + Vision */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-3 text-indigo-400">Our Mission</h2>
          <p className="text-gray-300">
            Our mission is to empower Indian businesses with digital tools,
            scalable technology, and professional E-commerce support — helping
            them sell more, grow faster, and reach customers nationwide.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md"
        >
          <h2 className="text-2xl font-bold mb-3 text-purple-400">Our Vision</h2>
          <p className="text-gray-300">
            We aim to become India’s most trusted digital transformation partner,
            simplifying online selling and creating opportunities for businesses,
            startups, and brands across all marketplaces.
          </p>
        </motion.div>
      </section>

      {/* ⭐ What Makes Us Different */}
      <section className="py-20 bg-gradient-to-b from-[#11131a] to-[#0b0b0d]">
        <div className="container mx-auto px-6 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold text-gradient"
          >
            Why Choose SuPav Solutions?
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We combine technology, design, and strategy to deliver high-quality
            digital solutions tailored for real business growth.
          </p>
        </div>

        {/* ⭐ Cards */}
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trusted E-Commerce Experts",
              text: "We onboard sellers to Amazon, Flipkart, Meesho, Zepto, Blinkit and more with verified & compliant processes.",
            },
            {
              title: "Result-Driven Digital Services",
              text: "From ad campaigns to SEO & branding — our strategies help businesses grow consistently.",
            },
            {
              title: "Strong Technical Capabilities",
              text: "Our team builds fast, secure, high-performance websites & automations for modern businesses.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-300">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ⭐ Final CTA */}
      <section className="py-20 text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-bold text-indigo-400"
        >
          Let’s Build Something Great Together
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4">
          Whether you're a startup or a growing business, we have the right digital
          solutions to elevate your online presence.
        </p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition">
          Contact Us
        </button>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;
