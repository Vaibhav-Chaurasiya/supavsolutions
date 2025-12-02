import React from "react";
import { FileSearch, Brush, Code2, TestTube, Rocket } from "lucide-react";

export const steps = [
  {
    number: "01",
    icon: <FileSearch className="h-6 w-6 text-indigo-400" />,
    title: "Requirement Analysis",
    description:
      "We understand your idea, business goals, and technical needs to define clear project requirements.",
  },
  {
    number: "02",
    icon: <Brush className="h-6 w-6 text-indigo-400" />,
    title: "UI/UX Design",
    description:
      "We prepare clean UI designs, wireframes, and user flows to ensure a smooth experience.",
  },
  {
    number: "03",
    icon: <Code2 className="h-6 w-6 text-indigo-400" />,
    title: "Development",
    description:
      "Our team builds fast, secure and modern websites, apps & software using the latest technologies.",
  },
  {
    number: "04",
    icon: <TestTube className="h-6 w-6 text-indigo-400" />,
    title: "Testing & Quality Check",
    description:
      "Complete testing is done to ensure bug-free performance, security & smooth functionality.",
  },
  {
    number: "05",
    icon: <Rocket className="h-6 w-6 text-indigo-400" />,
    title: "Deployment & Support",
    description:
      "We launch your project on secure servers and provide long-term updates, maintenance & support.",
  },
];
