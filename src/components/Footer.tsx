import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] text-gray-400 pt-16 pb-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* ======= Top Section ======= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* ===== Legal ===== */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="hover:text-blue-400 transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-blue-400 transition-colors">
                  Return Policy
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Quick Links ===== */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* ===== Contact Us ===== */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed">
              <span className="block">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:info@supavsolutions.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@supavsolutions.com
                </a>
              </span>
              <span className="block">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919876543210"
                  className="hover:text-blue-400 transition-colors"
                >
                  +91 98765 43210
                </a>
              </span>
              <span className="block mt-2 text-sm">
                Noida, Uttar Pradesh, India
              </span>
            </p>
          </div>

          {/* ===== Follow Us ===== */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/supavsolutions"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="hover:text-blue-400 transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@supavsolutions.com"
                className="hover:text-blue-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* ======= Middle Section (Brand + Subscribe) ======= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-10 border-b border-white/10">
          <div>
            <h2 className="text-2xl font-semibold text-white mb-3">
              SuPav Solutions
            </h2>
            <p className="text-gray-400 text-sm max-w-md">
              Empowering businesses through innovative e-commerce solutions,
              digital growth strategies, and technology-driven success.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <h4 className="text-white font-medium mb-3">
              Get the latest updates
            </h4>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full overflow-hidden w-full max-w-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent px-4 py-2 w-full text-gray-200 placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-500 px-5 py-2 text-white rounded-full hover:bg-blue-600 transition-all"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. No spam ever!
            </p>
          </div>
        </div>

        {/* ======= Bottom Bar ======= */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm">
          <p className="text-gray-500 mb-3 md:mb-0">
            © {currentYear} SuPav Solutions. All rights reserved. | Empowering
            Your Digital Vision
          </p>
          <div className="flex space-x-6 text-gray-400">
            <a href="#!" className="hover:text-blue-400 transition-colors">
              Terms & Conditions
            </a>
            <a href="#!" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#!" className="hover:text-blue-400 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
