import { ArrowRight, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="
        py-28 relative overflow-hidden 
        bg-gradient-to-b from-[#0A0B10] via-[#0b1120] to-[#020617]
      "
    >
      {/* ✨ Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 95}%`,
              left: `${Math.random() * 95}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* 💜 Glow Blobs */}
      <div className="absolute -top-20 left-10 w-[22rem] h-[22rem] bg-purple-600/25 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-10 w-[26rem] h-[26rem] bg-indigo-600/25 blur-[160px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ⭐ 3D Tilt + Glow Card */}
        <motion.div
          whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3 }}
          transition={{ type: "spring", stiffness: 120, damping: 10 }}
          className="
            max-w-4xl mx-auto p-[2px] rounded-3xl 
            bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-blue-500/40 
            shadow-[0_0_45px_rgba(139,92,246,0.28)]
          "
        >
          
          {/* 🌟 Main Inner Card */}
          <div
            className="
              bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-3xl p-10 md:p-16 text-center relative overflow-hidden
            "
          >
            {/* ✨ Shine Sweep */}
            <div className="
              absolute inset-0 bg-gradient-to-r 
              from-transparent via-white/10 to-transparent 
              opacity-0 hover:opacity-10 
              transition-all duration-700 
              pointer-events-none 
              animate-shine-sweep
            "></div>

            {/* 🔥 Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            >
              Looking for a{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                White-Label Partner
              </span>{" "}
              to scale your projects?
            </motion.h2>

            {/* 📝 Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto mb-10"
            >
              We build websites, apps, automation systems & e-commerce backends 
              for agencies—completely under your branding.  
              You deliver excellence, we work silently in the background.
            </motion.p>

            {/* 🔘 Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col md:flex-row justify-center gap-5"
            >
              {/* OUR WORK */}
              <Link
                to="/portfolio"
                className="
                  bg-gradient-to-r from-indigo-500 to-purple-600
                  hover:from-indigo-600 hover:to-purple-700
                  text-white font-semibold px-10 py-4 rounded-xl
                  shadow-lg shadow-purple-600/40
                  flex items-center justify-center gap-2
                  transition-all hover:scale-[1.03]
                "
              >
                View Our Work
                <ArrowRight className="h-5 w-5" />
              </Link>

              {/* COLLABORATE */}
              <a
                href="https://wa.me/918860951910?text=Hi%20I%20want%20to%20collaborate%20for%20a%20white-label%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  bg-gradient-to-r from-green-500 to-green-600
                  hover:from-green-600 hover:to-green-700
                  text-white font-semibold px-10 py-4 rounded-xl
                  shadow-lg shadow-green-600/40
                  flex items-center justify-center gap-2
                  transition-all hover:scale-[1.03]
                "
              >
                Collaborate With Us
                <Handshake className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Footer */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-sm mt-8"
            >
              NDA Available • Fast Delivery • 100% White-Label Friendly
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* ✨ Shine Sweep Keyframes */}
      <style>{`
        @keyframes shineMotion {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(150%); }
        }
        .animate-shine-sweep {
          animation: shineMotion 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default CTA;
