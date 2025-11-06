import React from 'react';
import { Globe, Code, ShoppingCart, Megaphone, BarChart3, ShieldCheck } from 'lucide-react';
import { features } from '../data/featuresData'; // 👈 use the Supav Solutions featuresData you updated earlier

const Features = () => {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-indigo-950 to-[#0A0B10]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Why Choose Supav Solutions
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We blend creativity, technology, and strategy to deliver digital experiences that drive real business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 group animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-indigo-500/20 rounded-lg w-12 h-12 flex items-center justify-center mb-5 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
