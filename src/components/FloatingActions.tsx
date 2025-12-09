// src/components/FloatingActions.tsx
import React, { useState, useEffect, useRef } from "react";
import { ChevronUp, X, Send, BotMessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Floating Actions Component
const FloatingActions: React.FC = () => {
  // Show scroll-to-top button
  const [showTop, setShowTop] = useState(false);

  // Chat window open/close
  const [chatOpen, setChatOpen] = useState(false);

  // Small preview bubble
  const [previewVisible, setPreviewVisible] = useState(true);

  // Chat input and state
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Messages: user + bot
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Hi 👋 I'm SuPav Assistant. How can I help?" },
  ]);

  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const previewTimerRef = useRef<number | null>(null);

  // WhatsApp config
  const whatsappNumber = "918860951910";
  const whatsappMessage = encodeURIComponent("Hello! I need assistance with a project.");

  // Show scroll-to-top after 400px
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Auto-scroll chat to bottom
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-close preview bubble after 8 seconds
  useEffect(() => {
    if (!previewVisible) return;

    previewTimerRef.current = window.setTimeout(() => {
      setPreviewVisible(false);
    }, 8000);

    return () => {
      if (previewTimerRef.current) window.clearTimeout(previewTimerRef.current);
    };
  }, [previewVisible]);

  const openWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  // Simple fake bot reply
  const simulateBotReply = () => {
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            "Thanks! We've received your message — a team member will reply shortly. Meanwhile, check our portfolio or contact us.",
        },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  // Send user message
  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setInput("");

    simulateBotReply();
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openChatFromPreview = () => {
    setChatOpen(true);
    setPreviewVisible(false);
  };

  return (
    <>
      {/* -------------------- WHATSAPP FLOAT (left) -------------------- */}
      <motion.button
        onClick={openWhatsApp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 140, damping: 14, delay: 0.12 }}
        aria-label="Chat on WhatsApp"
        className="fixed left-6 bottom-8 z-50"
      >
        <div className="relative">
          {/* subtle pulsating ring */}
          <motion.span
            aria-hidden
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.15, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="absolute inset-0 rounded-full bg-green-400/30"
            style={{ filter: "blur(8px)" }}
          />
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
            style={{
              background:
                "linear-gradient(135deg,#34D399 0%,#10B981 100%)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className="z-10"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0a11.94 11.94 0 0 0-10.4 17.94L0 24l6.18-1.62A11.94 11.94 0 0 0 12.05 24h.01A11.93 11.93 0 0 0 20.52 3.48zM12.06 21.8h-.01a9.85 9.85 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37a9.88 9.88 0 1 1 18.07-5.76 9.87 9.87 0 0 1-9.77 10.33zm5.32-7.47c-.29-.15-1.72-.85-1.99-.94s-.46-.15-.66.15-.76.94-.93 1.13-.34.22-.63.07a8.1 8.1 0 0 1-2.39-1.47 9 9 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.34.45-.51c.15-.17.2-.29.3-.49s.05-.37-.02-.51-.66-1.59-.9-2.18c-.24-.58-.49-.5-.66-.51H8.1a1.29 1.29 0 0 0-.93.43 3.89 3.89 0 0 0-1.23 2.88 6.73 6.73 0 0 0 1.41 3.58c.17.22 2.39 3.4 5.8 4.75.81.35 1.44.56 1.93.72a4.64 4.64 0 0 0 2 .13c.61-.09 1.72-.7 1.96-1.38a2.87 2.87 0 0 0 .2-1.38c-.08-.15-.27-.24-.56-.37z" />
            </svg>
          </div>
        </div>
      </motion.button>


      {/* RIGHT buttons (preview bubble + chat + scroll top) */}
<div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-4">

  {/* Floating Preview Bubble */}
  <AnimatePresence>
    {previewVisible && !chatOpen && (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        className="mb-2 cursor-pointer"
        onClick={openChatFromPreview}
      >
        <div
          className="relative px-4 py-2 rounded-full shadow-lg border border-gray-200"
          style={{
            background: "linear-gradient(90deg,#ffffff 0%, #f9fafc 100%)",
          }}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-purple-700">
            👋 Need help?
            <span className="text-indigo-600">Chat with us!</span>
          </div>

          {/* ✅ CLEAN TAIL (no dot, no shadow, perfectly aligned) */}
          <div
            className="absolute left-6 -bottom-1.5 w-3 h-3 bg-white rotate-45"
            style={{ boxShadow: "none" }}
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>

        {/* Chat Floating Button */}
        <motion.button
          onClick={() => {
            setChatOpen((prev) => !prev);
            setPreviewVisible(false);
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl bg-gradient-to-br from-purple-600 to-indigo-600"
        >
          <BotMessageSquare className="w-7 h-7 text-white" />
        </motion.button>

        {/* Scroll top button */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              className="p-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* CHAT WINDOW */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="fixed right-6 bottom-28 z-50"
          >
            <div className="w-80 md:w-96 rounded-2xl overflow-hidden shadow-2xl bg-[#0b0c10] border border-white/10">
              {/* Header */}
              <div className="px-4 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex justify-center items-center">
                    <BotMessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold">SuPav Assistant</div>
                    <div className="text-xs opacity-80">Online — replying fast ⚡</div>
                  </div>
                </div>
                <button onClick={() => setChatOpen(false)}>
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="p-4 max-h-72 overflow-y-auto space-y-3 text-white">
                {messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.from === "bot" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`px-3 py-2 rounded-xl max-w-[75%] ${
                        m.from === "bot"
                          ? "bg-white/10 border border-purple-500/20"
                          : "bg-gradient-to-r from-indigo-600 to-purple-600"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="px-3 py-2 rounded-xl bg-white/10 border border-purple-500/20 flex gap-1">
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150" />
                      <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300" />
                    </div>
                  </div>
                )}

                <div ref={messageEndRef} />
              </div>

              {/* Input area */}
              <div className="p-3 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 text-white placeholder-white/60 outline-none"
                    placeholder="Type your message..."
                  />
                  <button
                    onClick={sendMessage}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingActions;
