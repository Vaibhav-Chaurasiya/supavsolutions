import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // ================= SOCIAL ICON LOOP ANIMATION =================
  const socials = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/SuPavSolutions",
      color: "#6366F1", // Indigo
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/107571790/",
      color: "#8B5CF6", // Violet
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/supavsolutions/",
      color: "#F472B6", // Pink glow
    },
    {
      icon: Mail,
      href: "mailto:info@supavsolutions.com",
      color: "#A78BFA", // Soft purple
    },
  ];

  const glowAnimation = {
    initial: { opacity: 0.4, scale: 1 },
    animate: (i) => ({
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.25, 1],
      transition: {
        duration: 1.4,
        repeat: Infinity,
        delay: i * 0.45,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <footer className="bg-[#0c0e12] text-gray-400 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= TRUST BADGES ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-6 mb-16">

          {/* Secure */}
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-all duration-300 hover:-translate-y-1">
            <ShieldCheck className="w-8 h-8 text-indigo-400 group-hover:text-purple-400 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium group-hover:text-purple-300 transition-colors">
              Secure & Reliable Services
            </p>
          </div>

          {/* Trusted */}
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-all duration-300 hover:-translate-y-1">
            <Award className="w-8 h-8 text-purple-400 group-hover:text-indigo-400 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium group-hover:text-indigo-300 transition-colors">
              Trusted Agency Partners
            </p>
          </div>

          {/* ISO */}
          <div className="flex flex-col items-center gap-2 group hover:text-white transition-all duration-300 hover:-translate-y-1">
            <CheckCircle2 className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
            <p className="text-sm font-medium group-hover:text-purple-300 transition-colors">
              ISO Quality Standards
            </p>
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">

          {/* Legal */}
          <div className="group transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              Legal
            </h3>
            <ul className="space-y-2">
              {["Terms & Conditions", "Privacy Policy", "Return Policy"].map(
                (item, i) => (
                  <li key={i}>
                    <Link
                      to="#"
                      className="hover:text-indigo-400 hover:underline transition-all"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="group transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-indigo-400 hover:underline transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-indigo-400 hover:underline transition-all"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-400 hover:underline transition-all"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="group transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              Contact Us
            </h3>

            <p className="flex items-center gap-2 mb-2 hover:text-indigo-300 transition">
              <Mail className="w-4 h-4 text-indigo-400" />
              <a href="mailto:info@supavsolutions.com">
                info@supavsolutions.com
              </a>
            </p>

            <p className="flex items-center gap-2 mb-2 hover:text-indigo-300 transition">
              <Phone className="w-4 h-4 text-indigo-400" />
              <a href="tel:+918860951910">+91 8860951910</a>
            </p>

            <p className="text-sm text-gray-400 mt-2 hover:text-gray-300 transition">
              Chipiyana Buzurg, Greater Noida
            </p>
          </div>

          {/* ================= SOCIAL ICONS WITH GLOW EFFECT ================= */}
          <div className="group transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              {socials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    variants={glowAnimation}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className="transition-transform hover:scale-110"
                    style={{
                      color: item.color,
                      filter: `drop-shadow(0 0 6px ${item.color})`,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= BRAND + SUBSCRIBE ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 border-b border-white/10">

          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              SuPav Solutions
            </h2>
            <p className="text-gray-400 max-w-md hover:text-gray-300 transition">
              Delivering modern web development, automation & e-commerce
              solutions with transparency and long-term support.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-white font-medium mb-3">Get the latest updates</h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 border border-white/10 rounded-full overflow-hidden w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 w-full text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 text-white rounded-full hover:opacity-90 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm">
          <p className="text-gray-500">
            © {currentYear} SuPav Solutions — Empowering Digital Growth.
          </p>

          <div className="flex space-x-6 mt-3 md:mt-0">
            <Link
              to="#"
              className="hover:text-indigo-400 transition hover:underline"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="hover:text-indigo-400 transition hover:underline"
            >
              Privacy
            </Link>
            <Link
              to="#"
              className="hover:text-indigo-400 transition hover:underline"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
