// src/pages/Portfolio.tsx
import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "MERN Cake Store",
      category: "E-Commerce",
      image:
        "https://images.unsplash.com/photo-1542831371-d531d36971e6?auto=format&fit=crop&w=1200&q=60",
      live: "https://mern-cake.vercel.app/",
      tags: ["MERN", "React", "E-Commerce"],
      description:
        "A modern online bakery store built with MERN stack, including cart, product management & smooth UI.",
    },
    {
      id: 2,
      title: "Pet Store Landing Page",
      category: "Website",
      image:
        "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=60",
      live: "https://supavsolutions.com/pet/",
      tags: ["Landing Page", "HTML", "CSS"],
      description:
        "A clean and conversion-focused landing page showcasing pet products.",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Branding",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=60",
      tags: ["Branding", "Design"],
      description:
        "Logo design, brand kit and A+ content design samples for marketplace brands.",
    },
  ]);

  const categories = ["All", "Website", "E-Commerce", "Branding"];

  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const q = search.toLowerCase();
      const matchSearch =
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.join(" ").toLowerCase().includes(q);

      return matchCat && matchSearch;
    });
  }, [projects, active, search]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0b0c10] via-[#11131b] to-[#0f172a] text-white pb-20 overflow-hidden">

      {/* 🌟 PARTICLE BACKGROUND (FULL PAGE) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <Helmet>
        <title>Portfolio • SuPav Solutions</title>
      </Helmet>

      {/* HEADER */}
      <section className="pt-28 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Our Portfolio
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto mt-3">
          Explore our live work — websites, e-commerce stores & branding work.
        </p>
      </section>

      {/* FILTERS */}
      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between gap-4 relative z-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                active === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <input
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm outline-none"
        />
      </div>

      {/* GRID */}
      <div className="container mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filtered.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition backdrop-blur-md"
            onClick={() => setSelected(p)}
          >
            <img src={p.image} className="w-full h-44 object-cover" />

            <div className="p-4">
              <h3 className="text-xl font-semibold text-indigo-300">
                {p.title}
              </h3>

              <p className="text-gray-300 text-sm mt-1 line-clamp-2">
                {p.description}
              </p>

              <div className="flex gap-2 mt-3 flex-wrap">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm bg-indigo-600 px-3 py-2 rounded-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live Demo <ExternalLink size={14} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* FIXED MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white/10 border border-white/20 p-6 rounded-xl max-w-lg w-full backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={selected.image} className="w-full rounded-lg" />

            <h2 className="text-2xl font-bold mt-4 text-indigo-300">
              {selected.title}
            </h2>

            <p className="text-gray-300 mt-2">{selected.description}</p>

            {selected.live && (
              <a
                href={selected.live}
                target="_blank"
                className="mt-4 inline-block bg-indigo-600 px-4 py-2 rounded-full"
              >
                Open Live Demo
              </a>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
