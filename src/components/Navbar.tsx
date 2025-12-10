// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

// SCROLL TO TOP FUNCTION
const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-xl shadow-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">

        {/* ---------------------- LOGO ---------------------- */}
        <Link
          to="/"
          onClick={scrollTop}
          className="flex items-center gap-3"
        >
          <img
            src="/logo.png"
            alt="SuPav Solutions"
            className="w-11 h-11 drop-shadow-lg animate-pulse-slow"
          />
          <span className="text-2xl font-bold tracking-wide text-white">
            SuPav
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </span>
        </Link>

        {/* ---------------------- DESKTOP MENU ---------------------- */}
        <ul className="hidden md:flex items-center gap-6 mx-auto">

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={scrollTop}
              className={({ isActive }) =>
                `relative px-5 py-2 rounded-full text-white/80 font-medium transition-all
                ${isActive ? "text-yellow-400 bg-white/5 border border-white/10" : ""}
                group`
              }
            >
              {link.name}

              {/* Animated Neon Hover Border */}
              <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-transparent">
                <span className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100 border-transparent overflow-hidden transition">
                  <span className="absolute w-full h-full -left-full group-hover:left-full transition-all duration-700 bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500" />
                </span>
              </span>
            </NavLink>
          ))}
        </ul>

        {/* ---------------------- RIGHT BUTTONS ---------------------- */}
        <div className="hidden md:flex items-center gap-4">

          <NavLink
            to="/login"
            onClick={scrollTop}
            className="relative px-6 py-2 rounded-full text-white/90 font-medium 
            bg-white/5 border border-white/20 group overflow-hidden"
          >
            Login

            <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0
              group-hover:opacity-100 transition overflow-hidden">
              <span
                className="absolute w-full h-full -left-full group-hover:left-full transition-all duration-700
                bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500"
              />
            </span>
          </NavLink>
        </div>

        {/* ---------------------- MOBILE MENU BUTTON ---------------------- */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ---------------------- MOBILE DROPDOWN ---------------------- */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/10 py-6"
        >
          <ul className="flex flex-col items-center gap-6">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  scrollTop();
                  setIsMobileMenuOpen(false);
                }}
                className="relative px-6 py-2 rounded-full text-white text-lg font-medium group"
              >
                {link.name}

                <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0
                  group-hover:opacity-100 transition overflow-hidden">
                  <span
                    className="absolute w-full h-full -left-full group-hover:left-full transition-all duration-700
                    bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500"
                  />
                </span>
              </NavLink>
            ))}

            {/* MOBILE LOGIN */}
            <NavLink
              to="/login"
              onClick={() => {
                scrollTop();
                setIsMobileMenuOpen(false);
              }}
              className="relative px-6 py-2 rounded-full text-white text-lg font-medium bg-white/5 border border-white/20 group"
            >
              Login

              <span className="absolute inset-0 rounded-full border-2 border-transparent opacity-0
                group-hover:opacity-100 transition overflow-hidden">
                <span
                  className="absolute w-full h-full -left-full group-hover:left-full transition-all duration-700
                  bg-gradient-to-r from-yellow-400 via-purple-500 to-indigo-500"
                />
              </span>
            </NavLink>

          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
