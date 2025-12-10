import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqItems } from "@/data/faqData";
import { HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-[#08080b] via-[#0d0f19] to-[#101827] overflow-hidden"
    >
      {/* ⚡ Faster Floating Purple Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-50 animate-pulse-fast"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.25}s`, // ⭐ faster
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-[-8rem] w-[28rem] h-[28rem] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/3 right-[-10rem] w-[32rem] h-[32rem] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* ⭐ Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}  // ⭐ faster
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Everything you need to know — from{" "}
            <span className="text-white font-medium">web development</span> to{" "}
            <span className="text-white font-medium">e-commerce onboarding</span>{" "}
            & <span className="text-white font-medium">digital growth</span>.
          </p>
        </motion.div>

        {/* ⭐ FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-5">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}  // ⭐ faster
                viewport={{ once: true }}
                whileHover={{ scale: 1.015 }}
                className="group"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="
                    relative bg-white/5 backdrop-blur-lg border border-white/10 
                    rounded-2xl overflow-hidden transition-all duration-300 
                    hover:border-purple-400/40 hover:bg-white/10 shadow-lg 
                    hover:shadow-purple-600/30
                  "
                >
                  {/* Shine Animation */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                  translate-x-[-130%] group-hover:translate-x-[160%] 
                  transition-transform duration-[600ms]"></span>

                  {/* ⭐ Question Trigger — underline removed */}
                  <AccordionTrigger
                    className="
                      px-6 py-5 text-left text-white text-lg font-semibold 
                      flex items-center gap-3 transition-all duration-300 
                      hover:text-purple-300 no-underline
                    "
                  >
                    <HelpCircle className="w-6 h-6 text-purple-300 flex-shrink-0" />
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent
                    className="
                      px-6 pb-5 text-gray-300 leading-relaxed border-t 
                      border-white/10 no-underline
                    "
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* ⭐ Footer Contact Line — underline removed */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-12 no-underline"
        >
          Didn’t find your answer?{" "}
          <Link
            to="/contact"
            className="
              text-purple-300 hover:text-purple-100 
              font-medium transition-all duration-200 no-underline
            "
          >
            Contact our support team
          </Link>{" "}
          anytime — we’re here to help.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
