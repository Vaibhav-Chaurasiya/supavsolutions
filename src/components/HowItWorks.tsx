import { Button } from "@/components/ui/button";
import { steps } from "../data/howItWorks"; // make sure you've updated stepsData for Supav Solutions

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-[#0A0B10] to-indigo-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            How It Works
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Partnering with Supav Solutions is simple and transparent. Follow these quick steps to bring your digital ideas to life.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -top-4 -left-4 bg-indigo-700 border rounded-md border-indigo-500/40 text-indigo-300 font-bold text-xl px-3 py-1">
                {step.number}
              </span>
              <div className="bg-indigo-500/20 rounded-xl w-12 h-12 flex items-center justify-center mb-6 text-indigo-400">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6"
          >
            Collaborate for White Label Partnership
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
