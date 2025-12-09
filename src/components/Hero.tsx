import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero3DModel from "@/components/Hero3DModel";

const Hero: React.FC = () => {
  const [projects, setProjects] = useState<number>(0);
  const [clients, setClients] = useState<number>(0);

  useEffect(() => {
    let p = 0, c = 0;
    const interval = setInterval(() => {
      if (p < 40) setProjects(++p);
      if (c < 50) setClients(++c);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero hero-glow">

      {/* 🔮 Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-700/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT CONTENT */}
          <div className="lg:w-1/2 animate-fade-in-left">
            
            {/* Small Tag */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-medium text-purple-400 mr-2">
                SuPav Solutions
              </span>
              <span className="text-xs text-gray-300">
                Websites • E-Commerce • Branding • Automation
              </span>
              <ChevronRight className="h-4 w-4 text-gray-400 ml-1" />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Grow Your Business</span> with Premium Digital Solutions
            </h1>

            {/* Subheading */}
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              We build high-performance websites, manage marketplace onboarding,
              and provide digital marketing solutions to scale your brand online.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 shadow-lg shadow-purple-600/20 w-full sm:w-auto"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-700 text-white hover:bg-white/5 py-6 w-full sm:w-auto"
                >
                  View Portfolio
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Stats Section */}
            <div className="mt-8 flex items-center space-x-6">
              <div>
                <p className="text-2xl font-bold text-white">{projects}+</p>
                <p className="text-sm text-gray-400">Projects Delivered</p>
              </div>

              <div className="h-12 w-px bg-gray-700"></div>

              <div>
                <p className="text-2xl font-bold text-white">{clients}+</p>
                <p className="text-sm text-gray-400">Active Clients</p>
              </div>

              <div className="h-12 w-px bg-gray-700"></div>

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-sm text-gray-400">Support Available</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION — 3D MODEL */}
          <div className="lg:w-1/2 mt-12 lg:mt-0 animate-fade-in-right flex justify-center">
            <div className="relative w-full max-w-md mx-auto">
              <Hero3DModel />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
