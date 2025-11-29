import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqItems } from "@/data/faqData";

const FAQ = () => {
  return (
    <section
      id="faq"
      className="relative py-24 bg-gradient-to-b from-[#0A0B10] via-[#0b1120] to-[#020617] overflow-hidden"
    >
      {/* 🌈 Floating background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[-6rem] w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-1/3 right-[-8rem] w-[28rem] h-[28rem] bg-indigo-600/10 blur-3xl rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* 🧭 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Have questions about our{" "}
            <span className="text-white font-medium">web development</span>,
            <span className="text-white font-medium"> e-commerce</span>, or{" "}
            <span className="text-white font-medium">digital marketing</span>{" "}
            services?  
            Here are some quick answers. If you don’t find what you’re looking for,  
            <span className="text-blue-400"> contact our team anytime.</span>
          </p>
        </motion.div>

        {/* 🔹 Accordion Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-5">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-blue-400/40 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-blue-600/20"
                >
                  <AccordionTrigger className="px-6 py-5 text-left text-white text-lg font-medium hover:text-blue-400 transition-colors duration-300">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* ✨ Subtle footer note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mt-12"
        >
          Still have questions?{" "}
          <a
            href="/contact"
            className="text-blue-400 hover:underline hover:text-blue-300 transition"
          >
            Reach out to our support team
          </a>{" "}
          — we’re happy to help.
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
