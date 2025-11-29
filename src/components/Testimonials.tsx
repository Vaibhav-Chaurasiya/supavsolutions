import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 6000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-[#0b1120] via-[#0A0B10] to-[#020617] overflow-hidden"
    >
      {/* 💫 Background Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-[-6rem] w-[28rem] h-[28rem] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-[-8rem] w-[32rem] h-[32rem] bg-indigo-600/10 blur-3xl rounded-full" />
      </div>

      <div
        className="container mx-auto px-6 relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 🧭 Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Hear from businesses who trusted{" "}
            <span className="text-white font-medium">SuPav Solutions</span> to
            elevate their digital presence and performance.
          </p>
        </motion.div>

        {/* 🧩 Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-w-full px-4"
              >
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden hover:border-blue-400/40 hover:bg-white/10 transition-all duration-500">
                  {/* Accent glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* ⭐ Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  {/* 💬 Quote */}
                  <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed italic">
                    “{testimonials[currentIndex].quote}”
                  </p>

                  {/* 👤 Author Info */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-400 shadow-md"
                    />
                    <div className="mt-4">
                      <p className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* 🔘 Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
