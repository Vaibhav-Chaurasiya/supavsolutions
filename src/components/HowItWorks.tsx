import { motion } from "framer-motion";
import { steps } from "@/data/howItWorks";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-gradient-to-b from-[#08080b] via-[#0d0f19] to-[#101827] overflow-hidden"
    >
      {/* 🔮 Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-[-5rem] w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-[-5rem] w-[28rem] h-[28rem] bg-indigo-600/20 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* 🧭 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 
            bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-300 
            bg-clip-text text-transparent">
            How It Works
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Partnering with{" "}
            <span className="text-white font-medium">SuPav Solutions</span> is
            simple and transparent. Here’s how we transform your digital vision
            into success.
          </p>
        </motion.div>

        {/* 🧱 Steps Timeline */}
        <div className="relative">

          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] 
            bg-gradient-to-r from-purple-500/20 via-indigo-400/20 to-purple-300/10 
            transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 
                rounded-2xl p-8 text-center hover:border-purple-500/40 
                hover:bg-white/10 transition-all duration-500 group"
              >

                {/* Step Number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 
                  bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold 
                  w-10 h-10 flex items-center justify-center rounded-full shadow-lg shadow-purple-600/30">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 
                  rounded-xl w-14 h-14 flex items-center justify-center mx-auto mb-6 
                  group-hover:scale-110 transition-transform duration-300">
                  <span className="text-purple-300 text-2xl">{step.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white 
                  group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Dot (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute right-[-1.25rem] top-1/2 
                    transform -translate-y-1/2 w-2 h-2 bg-purple-400/50 
                    rounded-full shadow-lg shadow-purple-500/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🚀 CTA Button → WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://wa.me/918860951910?text=Hi%20I%20want%20to%20start%20a%20project%20with%20SuPav%20Solutions"
            target="_blank"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 
            hover:brightness-110 text-white px-10 py-6 rounded-full font-semibold 
            shadow-lg shadow-purple-600/30 transition-all"
          >
            Chat on WhatsApp
          </a>

          <p className="text-gray-400 text-sm mt-3">
            Let's collaborate and take your business to the next level 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
