// src/pages/About.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#08080b] via-[#0e0f19] to-[#0f172a] text-white relative overflow-hidden">

      {/* ⭐ SEO */}
      <Helmet>
        <title>About Us • SuPav Solutions</title>
        <meta
          name="description"
          content="SuPav Solutions is a digital transformation agency specializing in Web Development, Software Development, Automation, Marketplace Management and Digital Marketing."
        />
        <meta
          name="keywords"
          content="web development, software development, SuPav Solutions, about, digital agency, ecommerce onboarding, automation tools"
        />
      </Helmet>

      {/* 🌟 Floating Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      {/* ⭐ HEADER */}
      <section className="pt-28 pb-16 text-center px-6 relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold 
          bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          About SuPav Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-2xl mx-auto mt-5 text-base sm:text-lg"
        >
          SuPav Solutions is a tech-first digital agency focused primarily on 
          <span className="text-purple-300 font-semibold"> Web Development </span> 
          and 
          <span className="text-indigo-300 font-semibold"> Software Development </span>.
          We build modern products, automation systems and high-performance solutions for business growth.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 0.6 }}
          className="h-[3px] mx-auto mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </section>

      {/* ⭐ OUR JOURNEY */}
      <section className="container mx-auto px-6 py-16 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 
            backdrop-blur-xl shadow-md transition-all duration-300
            hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]
          "
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
            Our Journey ✨
          </h2>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            SuPav Solutions began with one strong belief — 
            <span className="text-purple-300 font-semibold">“Every business deserves world-class development.”</span>
            <br /><br />
            From dynamic websites to full-scale enterprise software,
            we convert ideas into powerful digital products.
            <br /><br />
            Today, SuPav stands as a 
            <span className="text-indigo-300 font-semibold"> development-driven digital agency </span> 
            building intelligent systems, automation tools and growth-ready platforms.
          </p>
        </motion.div>
      </section>

      {/* ⭐ MISSION + VISION */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 relative z-10">

        {/* Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-md 
            transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]
          "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-300 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            To build powerful 
            <span className="text-purple-300 font-semibold"> web applications, business software, automation systems </span>
            and digital infrastructure that help Indian businesses grow 10× faster.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-md
            transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]
          "
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-300 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-300 text-base md:text-lg">
            To be India’s most trusted Web & Software Development company,  
            building tech that simplifies operations and accelerates digital success.
          </p>
        </motion.div>

      </section>

      {/* ⭐ WHY CHOOSE US */}
      <section className="py-20 bg-gradient-to-b from-[#11131a] to-[#08080b] relative z-10">
        <div className="container mx-auto px-6 text-center mb-14">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
          >
            Why Choose SuPav Solutions?
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            We are development-first — everything we build is fast, scalable, secure and growth-oriented.
          </p>
        </div>

        {/* Cards */}
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Top-Tier Web Development",
              text: "High-performance websites, dashboards, and full-stack systems using modern technologies.",
            },
            {
              title: "Powerful Software Solutions",
              text: "We design and build ERP, CRM, billing systems, automation tools & custom enterprise software.",
            },
            {
              title: "Growth-Driven Digital Services",
              text: "A perfect mix of development, automation, branding & marketing for consistent business growth.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="
                bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-md 
                transition-all duration-300
                hover:border-purple-500/40 hover:shadow-[0_0_25px_rgba(147,51,234,0.3)]
              "
            >
              <h3 className="text-xl md:text-2xl font-semibold text-indigo-300 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;
