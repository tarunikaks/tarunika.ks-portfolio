import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const softSkills = [
  "Leadership",
  "Problem Solving",
  "Communication",
  "Critical Thinking",
  "Teamwork",
  "Adaptability",
  "Event Management",
  "Time Management",
];

export function SoftSkillRotator() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % softSkills.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="glass glow-border relative flex h-32 items-center justify-center overflow-hidden rounded-2xl px-6">
      <div className="absolute left-6 top-4 text-[10px] font-semibold uppercase tracking-widest text-primary">
        Soft Skills
      </div>
      <AnimatePresence mode="wait">
        <motion.span
          key={softSkills[i]}
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="gradient-text font-display text-3xl font-bold tracking-tight sm:text-4xl"
        >
          {softSkills[i]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
