// src/components/Navbar.tsx
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    { name: "Contact", path: "/contact" },
    { name: "Career", path: "/career" },
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
        
        {/* ------------------------------ LOGO ------------------------------ */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="SuPav Solutions"
            className="w-10 h-10 object-contain"
          />
          <span className="text-2xl font-bold text-white">
            SuPav<span className="text-blue-400">Solutions</span>
          </span>
        </Link>

        {/* ------------------------- CENTER NAV LINKS ------------------------- */}
        <ul className="hidden md:flex items-center gap-10 mx-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-white/80 text-[16px] font-medium hover:text-blue-400 transition-all ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* --------------------------- RIGHT SIDE BUTTONS --------------------------- */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/login"
            className="text-white border border-white/30 px-5 py-2 rounded-full hover:bg-white/10 transition"
          >
            Login
          </Link>

          
        </div>

        {/* ------------------------------ MOBILE MENU BUTTON ------------------------------ */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ------------------------------ MOBILE MENU ------------------------------ */}
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/90 text-lg font-medium hover:text-blue-400 transition"
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex flex-col gap-3 mt-4 w-40">
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white border border-white/30 px-4 py-2 rounded-full text-center hover:bg-white/10 transition"
              >
                Login
              </Link>

              
            </div>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
