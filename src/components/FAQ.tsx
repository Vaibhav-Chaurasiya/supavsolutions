import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

import { faqItems } from '../data/faqData'; // 👈 make sure you replaced faqData with the Supav Solutions version

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-[#0A0B10] to-indigo-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions about our web development, e-commerce, or digital marketing services?  
            Here are some quick answers. Can’t find what you’re looking for? Reach out to our team anytime.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-indigo-400 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-400">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
