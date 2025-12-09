import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqItems } from "@/data/faqData";
import { HelpCircle, Sparkles, ChevronRight } from "lucide-react";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-[#08080b] via-[#0d0f19] to-[#101827] overflow-hidden"
    >
      {/* 🟣 Floating Purple Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-[-8rem] w-[28rem] h-[28rem] bg-purple-600/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-1/3 right-[-10rem] w-[32rem] h-[32rem] bg-indigo-600/20 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Your questions answered — from{" "}
            <span className="text-white font-medium">web development</span> to{" "}
            <span className="text-white font-medium">e-commerce growth</span>{" "}
            and <span className="text-white font-medium">digital marketing</span>.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-5">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-400/40 hover:bg-white/10 shadow-lg hover:shadow-purple-600/30"
                >
                  {/* Shine Sweep */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-120%] group-hover:translate-x-[150%] transition-transform duration-700"></span>

                  {/* Question Trigger */}
                  <AccordionTrigger className="px-6 py-5 text-left text-white text-lg font-semibold flex items-center gap-3 transition-all duration-300 hover:text-purple-300">
                    <HelpCircle className="w-6 h-6 text-purple-300" />
                    {item.question}
                  </AccordionTrigger>

                  {/* Answer Content */}
                  <AccordionContent className="px-6 pb-5 text-gray-300 leading-relaxed border-t border-white/10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm mt-12"
        >
          Didn’t find your answer?{" "}
          <a
            href="/contact"
            className="text-purple-300 hover:text-purple-200 underline"
          >
            Contact our support team
          </a>{" "}
          anytime — we’re here to help.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
