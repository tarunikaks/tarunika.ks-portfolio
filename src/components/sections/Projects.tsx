import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, FileText, Play, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { VideoModal } from "../VideoModal";

import parkingImg from "@/assets/project-parking.jpg";
import freshnessImg from "@/assets/project-freshness.jpg";
import intellinavImg from "@/assets/project-intellinav.jpg";
import parkingPatent from "@/assets/Smart_Parking_System_Patent.pdf.asset.json";
import freshnessPatent from "@/assets/Smart_Food_Freshness_Patent.pdf.asset.json";
import parkingDemo from "@/assets/Smart_Parking_System_Demo.mp4.asset.json";

type Project = {
  title: string;
  tag: string;
  description: string;
  image: string;
  stack: string[];
  patented?: boolean;
  patentUrl?: string;
  demoUrl?: string;
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
    patentUrl: parkingPatent.url,
    demoUrl: parkingDemo.url,
  },
  {
    title: "Smart Food Freshness Detection",
    tag: "IoT · AI",
    description:
      "IoT-enabled food freshness monitoring that analyzes freshness levels, estimates shelf life and pushes real-time alerts to retailers and consumers.",
    image: freshnessImg,
    stack: ["ESP32", "Sensors", "Shelf-life AI", "Realtime Alerts"],
    patented: true,
    patentUrl: freshnessPatent.url,
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
  const [modal, setModal] = useState(false);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 200, damping: 20 });
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
    <>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative rounded-2xl"
      >
        <div className="glass glow-border relative overflow-hidden rounded-2xl transition-shadow duration-500 group-hover:shadow-[var(--shadow-elevated),var(--shadow-glow)]">
          {/* Glow overlay */}
          <motion.div
            aria-hidden
            style={{ background: bg }}
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {/* Image */}
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

          {/* Body */}
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

            <div className="mt-6 flex flex-wrap gap-2">
              {project.patentUrl && (
                <a
                  href={project.patentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-primary-foreground btn-glow"
                >
                  <FileText size={14} /> Patent
                </a>
              )}
              {project.demoUrl && (
                <button
                  onClick={() => setModal(true)}
                  className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface/60 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
                >
                  <Play size={14} /> Demo
                </button>
              )}
              {!project.patentUrl && !project.demoUrl && (
                <span className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-xs text-muted-foreground">
                  <ExternalLink size={14} /> Case Study Soon
                </span>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {project.demoUrl && (
        <VideoModal
          open={modal}
          src={project.demoUrl}
          title={project.title}
          onClose={() => setModal(false)}
        />
      )}
    </>
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
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
