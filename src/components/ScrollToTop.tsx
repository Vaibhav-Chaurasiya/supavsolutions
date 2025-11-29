import { useState, useEffect } from "react";
import { ChevronUp, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 400px down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappNumber = "918888888888"; // 🔹 Replace with official SuPav Solutions number
  const message = encodeURIComponent(
    "Hello SuPav Solutions! I’d like to know more about your digital services."
  );

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    window.location.href = "tel:+918888888888"; // 🔹 Replace with your company number
  };

  return (
    <>
      {/* 🚀 Scroll To Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            key="scrollToTop"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-xl 
                       bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 
                       text-white backdrop-blur-md border border-white/20
                       hover:scale-110 hover:shadow-blue-500/40 
                       transition-all duration-300"
          >
            <ChevronUp className="h-6 w-6" />
            <motion.span
              className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl opacity-50"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            ></motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 💬 WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-8 left-8 z-50 p-4 rounded-full bg-[#25D366] text-white 
                   shadow-lg hover:shadow-green-500/40 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <motion.span
          className="absolute inset-0 rounded-full bg-green-400/30 blur-xl opacity-40"
          animate={{ opacity: [0.4, 0.9, 0.4], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.button>

      {/* ☎️ Call Button (optional) */}
      <motion.button
        onClick={handleCallClick}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-24 left-8 z-50 p-4 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700
                   text-white backdrop-blur-md shadow-lg border border-white/10 
                   hover:shadow-blue-500/40 transition-all duration-300"
        aria-label="Call SuPav Solutions"
      >
        <Phone className="h-6 w-6" />
        <motion.span
          className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl opacity-40"
          animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.button>
    </>
  );
};

export default ScrollToTop;
