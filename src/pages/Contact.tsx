// src/pages/Contact.tsx
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b0d] via-[#11131a] to-[#0f172a] text-white overflow-x-hidden">

      {/* 🌐 SEO */}
      <Helmet>
        <title>Contact Us | SuPav Solutions</title>
        <meta
          name="description"
          content="Contact SuPav Solutions for website development, marketplace onboarding, digital marketing, and business automation services."
        />
        <meta property="og:title" content="Contact SuPav Solutions" />
        <meta
          property="og:description"
          content="Get in touch with us for your E-commerce, marketing, and development needs."
        />
      </Helmet>

      {/* ⭐ Header */}
      <section className="pt-28 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-gradient"
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 max-w-xl mx-auto mt-4 text-lg"
        >
          Have a project in mind? Need onboarding support?  
          We're here to help your business grow.
        </motion.p>
      </section>

      {/* ⭐ Contact Info + Form */}
      <section className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* LEFT: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-indigo-300">
            Get In Touch
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-indigo-400" />
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-purple-400" />
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-gray-300">support@supavsolutions.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-pink-400" />
              <div>
                <h3 className="text-lg font-medium">Office Location</h3>
                <p className="text-gray-300">Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg shadow-lg space-y-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-indigo-300">Send a Message</h2>

          <div>
            <label className="text-gray-300">Your Name</label>
            <input
              type="text"
              required
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 focus:border-indigo-500 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300">Email Address</label>
            <input
              type="email"
              required
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 focus:border-indigo-500 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="text-gray-300">Message</label>
            <textarea
              rows={4}
              required
              className="w-full mt-2 p-3 rounded-lg bg-black/20 border border-white/20 focus:border-indigo-500 focus:ring-indigo-500 outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-medium transition shadow-lg"
          >
            Send Message <Send className="h-5 w-5" />
          </button>
        </motion.form>
      </section>

      {/* ⭐ Google Map */}
      <section className="mb-20">
        <motion.iframe
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full h-[350px] rounded-xl border-0 shadow-lg"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.6859482727957!2d80.94237537446676!3d26.846693376690936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2ad3c4c7649%3A0xf51ba3fa9a2b9200!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709140000000"
        ></motion.iframe>
      </section>

      {/* ⭐ Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 p-4 rounded-full shadow-lg transition-all"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </a>

      <ScrollToTop />
    </div>
  );
};

export default Contact;
