// src/pages/About.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle, Star, Clock, Users, Code } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const About = () => {
  const team = [
    {
      name: "Vaibhav Chaurasiya",
      role: "Founder & Tech Lead",
      photo:
        "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f7c3b5ce5c94e6db8f8d2c2b3f1c3d9",
      linkedin: "#",
    },
    {
      name: "Divya Chaurasiya",
      role: "Project Manager",
      photo:
        "https://images.unsplash.com/photo-1545996124-8f8be9b20f8a?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2e0e2c4a9f7cbf9dbd6e7d0f804b4d1f",
      linkedin: "#",
    },
    {
      name: "Aman Rai",
      role: "Lead Developer",
      photo:
        "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e6a3e4e8db4f0b1c6680c7b6e1ad0a9",
      linkedin: "#",
    },
    {
      name: "Sachin Maurya",
      role: "Product Designer",
      photo:
        "https://images.unsplash.com/photo-1531123414780-f28f2b6f8d20?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=764f6f4f9f4a0070d3ea7b5a7b6c9b5a",
      linkedin: "#",
    },
  ];

  const stats = [
    { label: "Projects Delivered", value: "220+", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Happy Clients", value: "150+", icon: <Users className="w-6 h-6" /> },
    { label: "Years Experience", value: "6+", icon: <Clock className="w-6 h-6" /> },
    { label: "Avg Rating", value: "4.8/5", icon: <Star className="w-6 h-6" /> },
  ];

  const timeline = [
    { year: "2019", title: "Company Founded", text: "Started as a small web-dev studio focused on local businesses." },
    { year: "2020", title: "Marketplace Onboarding", text: "Expanded to e-commerce onboarding & seller services." },
    { year: "2022", title: "Productized Automation", text: "Built our first automation & CRM integrations for SMBs." },
    { year: "2024", title: "Scale & Partnerships", text: "Partnered with agencies and scaled project operations." },
  ];

  const tech = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Next.js", logo: "https://blog.logrocket.com/wp-content/uploads/2020/09/nextjs-logo.png" },
    { name: "Tailwind", logo: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  ];

  const awards = [
    { title: "Smart India Hackathon (Internal)", year: "2024" },
    { title: "TopperWorld Internship Excellence", year: "2023" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#070709] via-[#0d0f19] to-[#0f172a] text-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-16 left-8 w-80 h-80 bg-purple-700/20 blur-[140px] rounded-full -z-10"></div>
      <div className="absolute bottom-24 right-8 w-96 h-96 bg-indigo-700/20 blur-[140px] rounded-full -z-10"></div>

      <Helmet>
        <title>About Us • SuPav Solutions</title>
        <meta
          name="description"
          content="SuPav Solutions — Web & Software Development, Automation, E-commerce onboarding and growth services."
        />
      </Helmet>

      {/* HERO */}
      <section className="pt-28 pb-12 px-6 text-center relative z-10">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text"
        >
          About SuPav Solutions
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="text-gray-300 max-w-3xl mx-auto mt-4 text-base md:text-lg"
        >
          We are a development-first digital agency — building fast, secure, and scalable web and software solutions for businesses across India.
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "160px" }}
          transition={{ delay: 0.35 }}
          className="mx-auto h-[3px] mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </section>

      {/* JOURNEY + STATS */}
      <section className="container mx-auto px-6 py-12 grid lg:grid-cols-3 gap-8 relative z-10">
        {/* Journey card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:border-purple-500/40 hover:shadow-purple-500/30"
        >
          <h3 className="text-2xl font-bold text-indigo-300 mb-4">Our Story</h3>
          <p className="text-gray-300 leading-relaxed">
            Started as a small web dev studio focused on delivering value, SuPav Solutions evolved to offer full-stack development, automation solutions and marketplace onboarding services. We focus on measurable growth and operational efficiency.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            {awards.map((a, idx) => (
              <div key={idx} className="px-3 py-2 bg-black/20 border border-white/10 rounded-full text-sm text-gray-200">
                {a.title} • {a.year}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.16)]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-600/20 rounded-lg">{s.icon}</div>
                <div>
                  <div className="text-2xl font-semibold text-indigo-300">{s.value}</div>
                  <div className="text-xs text-gray-400">{s.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-8">Milestones</h3>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-[2px] bg-white/10"></div>

            <div className="space-y-8">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  className="pl-12 relative"
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <span className="text-sm font-semibold">{t.year}</span>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg shadow-md transition-all duration-300 hover:shadow-[0_0_26px_rgba(139,92,246,0.12)]">
                    <h4 className="text-lg font-semibold text-indigo-300">{t.title}</h4>
                    <p className="text-gray-300 mt-2">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-8">Meet the Team</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((m, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_40px_rgba(139,92,246,0.16)]"
            >
              {/* photo */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  src={m.photo}
                  alt={m.name}
                  className="object-cover w-full h-full transform transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold">{m.name}</h4>
                    <div className="text-sm text-gray-300">{m.role}</div>
                  </div>
                  <div className="text-indigo-300 text-sm">Team</div>
                </div>

                <p className="text-gray-400 text-sm mt-3">
                  {m.role === "Founder & Tech Lead"
                    ? "Leading product, architecture and engineering."
                    : m.role === "Project Manager"
                    ? "Coordinates delivery and client success."
                    : m.role === "Lead Developer"
                    ? "Builds core product features and devops."
                    : "Designs delightful, user-centered interfaces."}
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <a
                    href={m.linkedin}
                    className="px-3 py-1 rounded-full bg-black/20 border border-white/10 text-xs text-gray-200 hover:bg-indigo-600/20 transition"
                  >
                    LinkedIn
                  </a>
                  <button className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs hover:brightness-105 transition">
                    Message
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <h3 className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-8">Our Tech Stack</h3>

        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {tech.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="flex flex-col items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(99,102,241,0.08)]"
            >
              <img src={t.logo} alt={t.name} className="w-10 h-10 object-contain" />
              <div className="text-xs text-gray-300">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AWARDS + CTA */}
      <section className="container mx-auto px-6 py-12 relative z-10">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-lg flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-300">Awards & Recognition</h3>
            <p className="text-gray-300 mt-3">
              We have been recognized internally and across campuses for innovation, project excellence and training contributions.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              {awards.map((a, i) => (
                <div key={i} className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/10">
                  <CheckCircle className="text-green-400" />
                  <div>
                    <div className="text-sm font-semibold">{a.title}</div>
                    <div className="text-xs text-gray-400">{a.year}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col items-end">
            <div className="mb-4 text-right">
              <div className="text-3xl font-bold text-indigo-300">Ready to build?</div>
              <div className="text-gray-300">Let's start your project and scale faster.</div>
            </div>

            <div className="flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:brightness-105 transition"
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black/20 border border-white/10 text-gray-200 hover:bg-white/10 transition"
              >
                See Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default About;
