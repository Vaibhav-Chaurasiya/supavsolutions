// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/FloatingActions";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Clock, Users } from "lucide-react";
import TeamSection from "@/components/TeamSection";

/* Animation Variant */
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* Smooth Count-Up */
const useCountUp = (end: number, duration = 1200) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(interval);
      } else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [end, duration]);
  return value;
};

/* Leadership Avatars */
const avatar = {
  mukul: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764752471/mukul_wqzibn.jpg",
  aruna: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764752471/aruna_ulxhfo.jpg",
  vaibhav: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764752470/Vaibhav_pgxqwf.jpg",
};

const About: React.FC = () => {
  const stats = [
    { label: "Projects Delivered", value: useCountUp(40), icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Learners Trained", value: useCountUp(500), icon: <Users className="w-6 h-6" /> },
    { label: "Founded", value: 2025, icon: <Clock className="w-6 h-6" /> },
    { label: "Rating", value: "4.8/5", icon: <Star className="w-6 h-6" /> },
  ];

  const team = [
    { name: "Mukul Anand Sharma", role: "Founder & CEO", photo: avatar.mukul },
    { name: "Mrs. Aruna Sharma", role: "Director — Haze Society", photo: avatar.aruna },
    { name: "Vaibhav Chaurasiya", role: "Developer & Team Lead", photo: avatar.vaibhav },
  ];

  const registrations = [
    { name: "NCS", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/ncs-logo.jpg" },
    { name: "Startup India", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/startup.jpg" },
    { name: "MSME", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/MSME.jpg" },
  ];

  const tech = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "Laravel", logo: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764660916/Laravel_vrnfqj.png" },
    { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-icon-1.svg" },
    { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "AWS", logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070709] via-[#0d0f19] to-[#0f172a] text-white relative">

      {/* --- Soft Background Glows --- */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/20 blur-[130px] rounded-full"></div>

      <Helmet>
        <title>About SuPav Solutions • Digital Empowerment</title>
        <meta name="description" content="SuPav Solutions empowers differently-abled individuals with digital skills and real job opportunities." />
      </Helmet>

      {/* ========================= HERO ========================= */}
      <section className="pt-28 pb-12 text-center px-6">
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
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
        >
          SuPav Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-4 text-gray-300"
        >
          A purpose-driven initiative empowering persons with disabilities through digital skills,
          training, and meaningful work opportunities.
        </motion.p>
        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "140px" }}
          transition={{ delay: 0.35 }}
          className="mx-auto w-[140px] h-[3px] bg-gradient-to-r from-indigo-500 to-purple-500 mt-6 rounded-full"
        />
      </section>

      {/* ========================= PURPOSE ========================= */}
      <section className="container mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        <motion.div className="glass-card" variants={fadeUp} initial="hidden" whileInView="show">
          <h3 className="heading">Our Purpose</h3>
          <p className="text-gray-300 mt-4">
            We provide accessible digital training and support so differently-abled individuals can
            learn, work, and grow with dignity.
          </p>
          <p className="text-gray-300 mt-3">
            Our mission: build an inclusive digital ecosystem where everyone has equal opportunities.
          </p>
        </motion.div>

        <motion.div className="glass-card" variants={fadeUp} initial="hidden" whileInView="show">
          <h3 className="heading">Founder Story</h3>
          <p className="text-gray-300 mt-4">
            Started in 2025 by <b>Mukul Anand Sharma</b>, a specially-abled entrepreneur
            who transformed challenges into a mission to uplift others.
          </p>
          <p className="text-gray-300 mt-3">
            With Haze Computer Education Society, SuPav Solutions is building a progressive future.
          </p>
        </motion.div>
      </section>

      {/* Leadership — Option B: floating round images + glass tag */}
      <section className="container mx-auto px-6 py-8 relative z-10">
        <h3 className="text-2xl font-bold text-center text-indigo-300 mb-6">Leadership</h3>

        <div className="grid leader-grid md:grid-cols-3 gap-6">
          {team.map((t, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="
          bg-white/5 border border-white/10 rounded-3xl p-6 
          flex flex-col items-center text-center backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
        "
            >
              {/* Floating round photo — center */}
              <div className="relative -mt-12 mb-2">
                <div className="leader-photo-wrap rounded-full p-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 inline-block">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-36 h-36 object-cover rounded-full border-4 border-black/40"
                    style={{ display: "block" }}
                  />
                </div>
              </div>

              {/* name + role inside small glass tag */}
              <div className="mt-2 w-full">
                <div className="mx-auto inline-block px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm">
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-gray-300 text-sm mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================= TEAM SECTION (Dynamic) ========================= */}
      <TeamSection />

      {/* ========================= STATS ========================= */}
      <section className="container mx-auto px-6 py-12 grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="
        bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl 
        flex items-center gap-4 transition-all duration-300
        hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
      "
          >
            <div className="p-3 rounded-xl bg-indigo-600/20">{s.icon}</div>
            <div>
              <div className="text-2xl font-bold text-indigo-300">{s.value}</div>
              <div className="text-gray-300 text-sm">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </section>


      {/* ========================= REGISTRATIONS ========================= */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="heading text-center mb-6">Registrations & Partnerships</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
          {registrations.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="
          w-32 h-32 bg-white/10 border border-white/10 rounded-2xl 
          flex items-center justify-center backdrop-blur-xl 
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
        "
            >
              <img src={r.src} className="w-20 h-20 object-contain bg-white rounded-lg p-1" />
            </motion.div>
          ))}
        </div>
      </section>


      {/* ========================= TECH STACK ========================= */}
      <section className="container mx-auto px-6 py-12">
        <h3 className="heading text-center mb-6">Tech Stack</h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {tech.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ scale: 1.07 }}
              className="
          w-28 h-28 bg-white/5 border border-white/10 rounded-2xl 
          flex flex-col items-center justify-center gap-2 backdrop-blur-xl
          transition-all duration-300
          hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
        "
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow flex items-center justify-center">
                <img src={t.logo} className="w-8 h-8 object-contain" />
              </div>
              <p className="text-xs text-gray-300">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* ========================= CTA ========================= */}
      <section className="container mx-auto px-6 py-14">
        <div
          className="
      bg-white/5 p-10 rounded-3xl border border-white/10 backdrop-blur-xl 
      text-center transition-all duration-300
      hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
    "
        >
          <h3 className="heading">Join Our Mission</h3>
          <p className="text-gray-300 mt-3">
            Support accessible education and dignified employment for specially-abled individuals.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link to="/contact" className="btn-primary">Get in Touch</Link>
            <Link to="/services" className="btn-secondary">View Services</Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;