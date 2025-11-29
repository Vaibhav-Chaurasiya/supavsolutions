import React from "react";
import { UserPlus, ClipboardList, Rocket } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <UserPlus className="h-6 w-6 text-indigo-400" />,
    title: "Connect With Our Team",
    description:
      "Reach out to us or book a free consultation directly through our website. We’ll discuss your goals, business needs, and the best digital strategy for you.",
  },
  {
    number: "02",
    icon: <ClipboardList className="h-6 w-6 text-indigo-400" />,
    title: "Strategy, Plan & Design",
    description:
      "Our creative and technical experts craft a personalized roadmap — from strategy and UI/UX design to development — perfectly tailored to your brand and audience.",
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6 text-indigo-400" />,
    title: "Launch & Grow Online",
    description:
      "Once launched, we provide full-scale support, marketing assistance, and performance optimization to help your business scale and dominate online.",
  },
];
