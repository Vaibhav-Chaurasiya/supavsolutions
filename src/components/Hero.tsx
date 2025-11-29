import { motion } from "framer-motion";
import Lottie from "lottie-react";

// ⭐ Premium Lotties from CDN
const mainAnimation = "https://lottie.host/3aecd65e-d782-4d81-8e4a-bb79d9e7403b/QLyVab.json";
const trustBadge = "https://lottie.host/692e3460-44b3-4865-9f37-44dbf93574ca/hT8Drk.json";
const growthBadge = "https://lottie.host/7e19f4b9-66d1-4bc4-b1d1-7a017a7c1a90/9u4khs.json";

import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#091018] via-[#0b1220] to-black">

      {/* 🔮 Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute top-20 left-10 w-[24rem] h-[24rem] bg-blue-700/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 11, repeat: Infinity }}
          className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-indigo-500/20 blur-[140px] rounded-full"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            {/* Tag */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full mb-6">
              <span className="text-xs font-semibold text-blue-400 mr-2 uppercase">Trusted Partner</span>
              <span className="text-xs text-gray-300">for Digital Growth & E-Commerce Success</span>
              <ChevronRight className="ml-1 h-4 w-4 text-gray-400" />
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5"
            >
              Empowering Your{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Digital Future
              </span>{" "}
              with Innovation & Impact
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-xl mx-auto lg:mx-0 mb-8"
            >
              From premium websites to marketplace onboarding and digital marketing —  
              SuPav Solutions boosts your brand through technology-driven innovation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-white font-semibold shadow-xl shadow-blue-600/30"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 border-gray-600 text-gray-200 hover:border-blue-400 hover:bg-white/10"
              >
                View Portfolio
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex justify-center lg:justify-start space-x-8"
            >
              <div>
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm text-gray-400">Happy Clients</p>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div>
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm text-gray-400">Client Support</p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — LOTTIE ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative w-full max-w-lg">

              {/* Main Hero Animation */}
              <Lottie
                animationData={null}
                path={mainAnimation}
                loop
                autoplay
                className="w-full drop-shadow-2xl"
              />

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute -top-6 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Lottie animationData={null} path={trustBadge} loop autoplay className="w-10 h-10" />
                  <p className="text-white text-sm font-semibold">Client Trust A+</p>
                </div>
              </motion.div>

              {/* Growth Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-xl"
              >
                <div className="flex items-center gap-2">
                  <Lottie animationData={null} path={growthBadge} loop autoplay className="w-10 h-10" />
                  <p className="text-green-400 text-sm font-bold">+150% Growth</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
