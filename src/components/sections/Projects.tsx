import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

import parkingImg from "@/assets/project-parking.jpg";
import freshnessImg from "@/assets/project-freshness.jpg";
import intellinavImg from "@/assets/project-intellinav.jpg";

type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  stack: string[];
  patented?: boolean;
};

const projects: Project[] = [
  {
    title: "Smart Parking System",
    tag: "IoT · Full-Stack",
    description:
      "A smart parking management system with real-time slot monitoring, QR-based authentication, automated billing, booking and parking analytics dashboards.",
    image: parkingImg,
    stack: ["ESP32", "Ultrasonic Sensors", "QR Auth", "Analytics", "IoT"],
    patented: true,
  },
  {
    title: "Smart Food Freshness Detection",
    tag: "IoT · AI",
    description:
      "IoT-enabled food freshness monitoring that analyzes freshness levels, estimates shelf life and pushes real-time alerts to retailers and consumers.",
    image: freshnessImg,
    stack: ["ESP32", "Sensors", "Shelf-life AI", "Realtime Alerts"],
    patented: true,
  },
  {
    title: "IntelliNav Robotics Simulator",
    tag: "Robotics · AI",
    description:
      "Intelligent robotics simulation with A* pathfinding, autonomous navigation, gesture-based control, human-aware obstacle avoidance and real-time telemetry.",
    image: intellinavImg,
    stack: ["A* Pathfinding", "Gesture Control", "Human-aware Nav", "Telemetry"],
  },
];

function TiltCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 250, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 250, damping: 20 });
  const glowX = useMotionValue(50);
  const glowY = useMotionValue(50);
  const bg = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(400px circle at ${x}% ${y}%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)`,
  );

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 8);
    rx.set((0.5 - py) * 8);
    glowX.set(px * 100);
    glowY.set(py * 100);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative rounded-2xl"
    >
      <div className="glass glow-border relative overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[var(--shadow-elevated),var(--shadow-glow)]">
        <motion.div
          aria-hidden
          style={{ background: bg }}
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            width={1280}
            height={800}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          {project.patented && (
            <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 text-xs font-semibold text-primary shadow-glow">
              <Sparkles size={12} /> Patent Filed
            </div>
          )}
          <div className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
            {project.tag}
          </div>
        </div>

        <div className="relative z-20 p-6" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-surface/60 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          description="Systems-level work spanning IoT, AI and robotics — with two patents filed."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
