import { useState, useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const [sparkle, setSparkle] = useState<any>(null);

  useEffect(() => {
    fetch("https://lottie.host/d0fb9c95-8684-49c4-a59b-e4e105a456db/5OrD6F8FkK.json")
      .then((r) => r.json())
      .then(setSparkle);
  }, []);

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
      className="relative py-24 bg-gradient-to-b from-[#08080b] via-[#0d0f19] to-[#101827] overflow-hidden"
    >
      {/* 🔮 Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-40 animate-pulse"
            style={{
              top: `${Math.random() * 90}%`,
              left: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-[-8rem] w-[30rem] h-[30rem] bg-purple-600/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/3 right-[-8rem] w-[34rem] h-[34rem] bg-indigo-600/20 blur-[150px] rounded-full" />

      <div
        className="container mx-auto px-6 relative z-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Businesses trust <span className="text-white font-medium">SuPav Solutions</span> to boost their brand visibility & performance.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.6 }}
                className="min-w-full px-4"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 text-center shadow-xl shadow-purple-900/10 hover:border-purple-500/40 hover:bg-white/10 transition-all duration-500 group">

                  {/* Lottie Sparkles */}
                  {sparkle && (
                    <div className="absolute top-4 right-4 w-10 opacity-90 pointer-events-none">
                      <Lottie animationData={sparkle} loop />
                    </div>
                  )}

                  {/* Accent gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

                  {/* ⭐ Rating */}
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex justify-center mb-6"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
                      />
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <p className="text-xl text-gray-200 mb-10 leading-relaxed italic">
                    “{testimonials[currentIndex].quote}”
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-purple-400 shadow-lg shadow-purple-600/30"
                    />
                    <p className="text-white font-semibold text-lg mt-4">
                      {testimonials[currentIndex].author}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-purple-500"
                    : "w-2 bg-gray-600 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
