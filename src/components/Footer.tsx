import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0B10] pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Supav<span className="text-indigo-400">Solutions</span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-xs">
              A digital agency helping businesses grow through web development, 
              e-commerce solutions, and result-driven digital marketing strategies.
            </p>

            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com/company/supavsolutions" className="text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/Vaibhav-Chaurasiya" className="text-gray-400 hover:text-indigo-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">E-Commerce Solutions</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Digital Marketing</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Branding & Design</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">SEO Optimization</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-medium mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Case Studies</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Portfolio</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">FAQs</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">About Us</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#!" className="text-gray-400 hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Supav Solutions. All rights reserved. 
              <span className="text-gray-500"> | Empowering Your Digital Vision</span>
            </p>
            <div className="flex space-x-6">
              <a href="#!" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#!" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Terms</a>
              <a href="#!" className="text-gray-400 hover:text-indigo-400 text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
