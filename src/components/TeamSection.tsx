import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string; // Cloudinary link
}

const TeamSection: React.FC = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await fetch("/api/team"); // <-- backend endpoint
        const data = await res.json();
        setTeam(data);
      } catch (err) {
        console.error("Error fetching team:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-300">
        Loading team members...
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-12 relative z-10">
      <h3 className="text-2xl font-bold text-center text-indigo-300 mb-8">
        Our Team
      </h3>

      <div className="grid leader-grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <motion.div
            key={member.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="
              bg-white/5 border border-white/10 rounded-3xl p-6 
              flex flex-col items-center text-center backdrop-blur-xl
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
            "
          >
            {/* photo */}
            <div className="relative -mt-12 mb-2">
              <div className="leader-photo-wrap rounded-full p-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 inline-block">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-black/40"
                />
              </div>
            </div>

            {/* name + role */}
            <div className="mt-2 w-full">
              <div className="mx-auto inline-block px-4 py-2 rounded-full bg-black/30 border border-white/10 backdrop-blur-sm">
                <h4 className="font-semibold text-white">{member.name}</h4>
                <p className="text-gray-300 text-sm mt-1">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
