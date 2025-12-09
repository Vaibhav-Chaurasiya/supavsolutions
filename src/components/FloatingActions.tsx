import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingActions = () => {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 How can I help you today?" },
  ]);

  const messageEndRef = useRef<HTMLDivElement | null>(null);

  const whatsappNumber = "918860951910";
  const whatsappMessage = encodeURIComponent("Hello! I need assistance.");

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* LEFT — WhatsApp Button */}
      <motion.button
        onClick={openWhatsApp}
        className="fixed left-6 bottom-8 z-50 w-14 h-14 rounded-full bg-[#25D366] 
                   flex items-center justify-center shadow-xl hover:scale-110 transition"
      >
        {/* FIXED WHATSAPP SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0a11.94 11.94 0 0 0-10.4 17.94L0 24l6.18-1.62A11.94 11.94 0 0 0 12.05 24h.01A11.93 11.93 0 0 0 20.52 3.48zM12.06 21.8h-.01a9.85 9.85 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37a9.88 9.88 0 1 1 18.07-5.76 9.87 9.87 0 0 1-9.77 10.33zm5.32-7.47c-.29-.15-1.72-.85-1.99-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a8.1 8.1 0 0 1-2.39-1.47 9 9 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.34.45-.51c.15-.17.2-.29.3-.49s.05-.37-.02-.51-.66-1.59-.9-2.18c-.24-.58-.49-.5-.66-.51H8.1a1.29 1.29 0 0 0-.93.43 3.89 3.89 0 0 0-1.23 2.88 6.73 6.73 0 0 0 1.41 3.58c.17.22 2.39 3.4 5.8 4.75.81.35 1.44.56 1.93.72a4.64 4.64 0 0 0 2 .13c.61-.09 1.72-.7 1.96-1.38a2.87 2.87 0 0 0 .2-1.38c-.08-.15-.27-.24-.56-.37z" />
        </svg>
      </motion.button>

      {/* RIGHT SIDE */}
      <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4">

        {/* Scroll To Top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-blue-600 text-white shadow-xl hover:scale-110 transition"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
            >
              <ChevronUp className="w-6 h-6" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Chat Toggle Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                     flex items-center justify-center text-white shadow-xl hover:scale-105 transition"
        >
          <MessageCircle className="w-8 h-8" />
        </button>

        {/* CHAT WINDOW */}
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              className="w-80 md:w-96 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20
                         shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-4 py-3 bg-white/10 border-b border-white/20 text-white">
                <p className="font-semibold">SuPav Assistant</p>
                <button onClick={() => setChatOpen(false)} className="hover:bg-white/10 p-2 rounded-lg">
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* MESSAGES */}
              <div className="p-4 space-y-3 max-h-72 overflow-y-auto text-white">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.from === "bot" ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
                        msg.from === "bot"
                          ? "bg-white/20"
                          : "bg-blue-600"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={messageEndRef} />
              </div>

              {/* INPUT */}
              <div className="p-3 bg-white/10 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 px-3 py-2 bg-white/20 text-white rounded-lg outline-none"
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={sendMessage}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FloatingActions;
