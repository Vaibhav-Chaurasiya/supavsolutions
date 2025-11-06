import React from "react";
import { UserPlus, ClipboardList, Rocket } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <UserPlus className="h-6 w-6" />,
    title: "Connect With Us",
    description: "Start by contacting our team or requesting a free consultation through our website. We’ll understand your goals and business requirements."
  },
  {
    number: "02",
    icon: <ClipboardList className="h-6 w-6" />,
    title: "Plan & Design",
    description: "Our experts create a custom strategy, design mockups, and a development roadmap tailored to your brand and audience."
  },
  {
    number: "03",
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch & Grow",
    description: "Once your project is live, we provide full support, marketing assistance, and performance tracking to help your business grow online."
  }
];
