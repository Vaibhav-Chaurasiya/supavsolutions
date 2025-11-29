import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const allPlans = {
  Amazon: [
    {
      title: "Amazon Basic Plan",
      description:
        "Perfect for new sellers looking to start with listing optimization and account setup.",
      features: [
        "Up to 50 SKU listings & optimization",
        "Keyword Updates",
        "Claim Submissions (10 limit)",
        "Title & Description Updates",
        "1 Growth Call",
        "Campaign Management (up to 100 ads)",
        "Image Enhancements (50 images)",
      ],
    },
    {
      title: "Amazon Standard Plan",
      description:
        "Ideal for growing sellers — expand your SKUs and marketing strategies efficiently.",
      features: [
        "Up to 100 SKU listings & optimization",
        "Keyword & Ranking Strategy",
        "Claim Submissions (15 limit)",
        "Title & Description Optimization",
        "2 Growth Calls",
        "Campaigns (200 ads + 50 organic)",
        "Social Media & Image Enhancements (100+)",
        "A+ Listings Management",
      ],
    },
    {
      title: "Amazon Premium Plan",
      description:
        "For large-scale sellers — complete account management, SEO, and advanced campaigns.",
      features: [
        "Up to 150 SKU listings & optimization",
        "Advanced SEO & Keyword Optimization",
        "Claim Submissions (25+)",
        "Title & Description Optimization",
        "Unlimited Growth Calls",
        "Campaigns & Marketing (300+ ads)",
        "Social Media Enhancements (150+)",
        "A+ Listings & Performance Tracking",
      ],
    },
  ],
  Flipkart: [
    {
      title: "Flipkart Basic Plan",
      description:
        "Get started with listing setup and optimization for your Flipkart store.",
      features: [
        "Up to 50 SKUs setup",
        "Basic Keyword Optimization",
        "Claim Assistance (10 limit)",
        "Basic Campaign Strategy",
        "Monthly Reporting",
      ],
    },
    {
      title: "Flipkart Standard Plan",
      description:
        "Perfect for mid-size sellers — includes optimization, campaigns, and data tracking.",
      features: [
        "Up to 100 SKUs optimization",
        "Keyword Updates + Ranking Strategy",
        "15 Claim Submissions",
        "2 Growth Calls",
        "Campaign Management (200+ ads)",
        "Performance Reporting",
      ],
    },
    {
      title: "Flipkart Premium Plan",
      description:
        "Full-scale seller management with advanced strategies and A+ listing upgrades.",
      features: [
        "Up to 150 SKUs & A+ Listings",
        "SEO & Performance Optimization",
        "Unlimited Claim Assistance",
        "Dedicated Account Manager",
        "Campaign & Ads Management (300+)",
      ],
    },
  ],
  Meesho: [
    {
      title: "Meesho Starter Plan",
      description:
        "Start your Meesho seller journey with professional setup and support.",
      features: [
        "Product Listing Optimization",
        "Catalog Enhancement",
        "Keyword Updates",
        "Claim Support",
      ],
    },
    {
      title: "Meesho Growth Plan",
      description:
        "Get advanced optimization, ad setup, and daily account management.",
      features: [
        "Enhanced Listings",
        "Growth Calls (2)",
        "Ad Campaign Setup",
        "Social Media Boost",
      ],
    },
    {
      title: "Meesho Premium Plan",
      description:
        "For top sellers — maximize ROI with complete strategy & automation.",
      features: [
        "Full Account Management",
        "Advanced SEO + Campaigns",
        "Unlimited Claims",
        "Weekly Reporting",
      ],
    },
  ],
};

const platforms = Object.keys(allPlans);

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("Amazon");

  const plans = allPlans[activeTab];

  return (
    <section id="pricing" className="bg-[#0A0B10] text-white py-24">
      <div className="container mx-auto px-6 text-center">
        {/* 🔹 Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {platforms.map((platform) => (
            <button
              key={platform}
              onClick={() => setActiveTab(platform)}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                activeTab === platform
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-lg"
                  : "bg-white/5 text-gray-300 border-white/10 hover:border-blue-500/40"
              }`}
            >
              {platform} SPN Service
            </button>
          ))}
        </div>

        {/* 🧠 Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {activeTab} SPN Service
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Choose the best plan for your {activeTab} store — optimized strategies
          to boost visibility, growth, and conversions.
        </p>

        {/* 💼 Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-blue-400/40 hover:bg-white/10 transition-all duration-500 shadow-lg hover:shadow-blue-600/20"
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <h4 className="text-lg font-semibold text-white mb-4">
                  What’s Included:
                </h4>
                <ul className="text-left space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="text-green-400 mt-1 w-5 h-5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full font-semibold py-2 rounded-lg transition-all"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Get Started
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
