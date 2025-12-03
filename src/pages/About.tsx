// src/pages/About.tsx
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle, Star, Clock, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* Smooth Count-Up Hook */
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

/* Vector Avatar URLs */
const avatar = {
  mukul: "https://cdn3d.iconscout.com/3d/premium/thumb/businessman-3d-illustration-7749742-6242680.png",
  aruna: "https://cdn3d.iconscout.com/3d/premium/thumb/woman-teacher-3d-illustration-6295393-5215950.png",
  vaibhav: "https://cdn3d.iconscout.com/3d/premium/thumb/developer-3d-illustration-6295400-5215957.png",
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

  const tech = [
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
    { name: "Node", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
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

  const registrations = [
    { name: "NCS", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/ncs-logo.jpg" },
    { name: "Startup India", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/MSME.jpg" },
    { name: "MSME", src: "https://res.cloudinary.com/dh5uh5wze/image/upload/v1764659653/startup.jpg" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070709] via-[#0d0f19] to-[#0f172a] text-white relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-16 left-10 w-72 h-72 bg-purple-600/20 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-600/20 blur-[130px] rounded-full"></div>

      <Helmet>
        <title>About Us • SuPav Solutions</title>
      </Helmet>

      {/* HERO */}
      <section className="pt-28 pb-10 text-center px-6">
        <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          SuPav Solutions
        </motion.h1>

        <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay: 0.2 }} className="max-w-2xl mx-auto mt-4 text-gray-300">
          A purpose-driven initiative empowering persons with disabilities through digital skills, training, and meaningful work opportunities.
        </motion.p>
      </section>

      {/* PURPOSE */}
      <section className="container mx-auto px-6 py-8 grid md:grid-cols-2 gap-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow">
          <h3 className="text-2xl font-bold text-indigo-300">Our Purpose</h3>
          <p className="text-gray-300 mt-4">
            We provide accessible digital training and support so that differently-abled individuals can learn, work, and grow with dignity.
          </p>
          <p className="text-gray-300 mt-3">
            Our goal is simple — build an inclusive digital ecosystem where everyone has equal opportunities.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow">
          <h3 className="text-2xl font-bold text-indigo-300">Founder Story</h3>
          <p className="text-gray-300 mt-4">
            Started in 2025 by <b>Mukul Anand Sharma</b>, a specially-abled entrepreneur who turned challenges into a mission to uplift others.
          </p>
          <p className="text-gray-300 mt-3">
            With support from Haze Computer Education Society, SuPav Solutions is building an inclusive future.
          </p>
        </motion.div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 py-8">
        <h3 className="text-2xl font-bold text-indigo-300 text-center mb-6">Leadership</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((t, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center backdrop-blur-xl">
              <img src={t.photo} alt={t.name} className="w-24 h-24 mx-auto mb-4 object-contain" />
              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-gray-300 text-sm">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS WITH COUNT-UP */}
      <section className="container mx-auto px-6 py-8 grid md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-xl flex items-center gap-4"
          >
            <div className="p-3 bg-indigo-600/20 rounded-xl">{s.icon}</div>
            <div>
              <div className="text-2xl font-bold text-indigo-300">{s.value}</div>
              <div className="text-gray-300 text-sm">{s.label}</div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* REGISTRATIONS */}
      <section className="container mx-auto px-6 py-8">
        <h3 className="text-xl font-bold text-indigo-300 text-center mb-6">Registrations & Partnerships</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {registrations.map((r, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <img src={r.src} alt={r.name} className="h-12 object-contain" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="container mx-auto px-6 py-10">
        <h3 className="text-xl font-bold text-indigo-300 text-center mb-6">Tech Stack</h3>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
          {tech.map((t, i) => (
            <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col items-center">
              <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain mb-2 bg-white rounded p-0.5" />
              <p className="text-xs text-gray-300">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-12">
        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl text-center">
          <h3 className="text-2xl font-bold text-indigo-300">Join Our Mission</h3>
          <p className="text-gray-300 mt-3">
            Support accessible education and dignified employment for specially-abled individuals.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow">
              Get in Touch
            </a>
            <a href="/services" className="px-6 py-3 rounded-full bg-white/10 border border-white/10 text-gray-300">
              View Services
            </a>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;
