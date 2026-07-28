import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { scrollToId } from "../SmoothScroll";

const techIcons = ["React", "Python", "IoT", "AI", "Java", "SQL", "Figma", "Git"];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20">
      {/* Floating tech chips */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {techIcons.map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.15,
              y: [0, -14, 0],
            }}
            transition={{
              opacity: { delay: 0.4 + i * 0.05, duration: 1 },
              y: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute font-mono text-xs uppercase tracking-widest text-primary"
            style={{
              left: `${8 + ((i * 13) % 82)}%`,
              top: `${18 + ((i * 23) % 60)}%`,
            }}
          >
            {t}
          </motion.span>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted-foreground">Open to internships & placements</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            Hi, I'm <span className="gradient-text animate-gradient-shift">Tarunika K S</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-5 space-y-1 text-base text-muted-foreground sm:text-lg md:text-xl"
          >
            <p className="text-foreground">Computer Science and Design Student</p>
            <p className="text-foreground">
              Aspiring Software Engineer | Full-Stack Developer | UI/UX Designer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground/90"
          >
            Building intelligent systems at the intersection of software, AI and hardware.
            Two patents filed, Cisco-certified, hackathon builder — engineered for impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://drive.google.com/file/d/1uI-N9kGvbqxRLcQKenjeul-xK8icWv2R/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground btn-glow"
            >
              <Download size={16} />
              Resume
            </a>
            <button
              onClick={() => scrollToId("projects")}
              className="group inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface/50 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary/60 hover:bg-surface"
            >
              View My Works
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="group inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="flex h-10 w-6 justify-center rounded-full border border-border-strong p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
