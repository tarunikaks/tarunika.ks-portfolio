import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Code2,
  Layout,
  Wrench,
  GraduationCap,
  Users,
} from "lucide-react";
import { Reveal, StaggerChild, StaggerParent } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "C", level: 75 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 88 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    icon: Brain,
    title: "AI & Emerging Tech",
    skills: [
      { name: "Modern AI", level: 78 },
      { name: "Prompt Engineering", level: 82 },
      { name: "Robotics Simulation", level: 75 },
    ],
  },
  {
    icon: Cpu,
    title: "IoT & Embedded",
    skills: [
      { name: "ESP32", level: 82 },
      { name: "Arduino", level: 85 },
      { name: "Ultrasonic Sensors", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 92 },
      { name: "Figma", level: 80 },
    ],
  },
];

const softSkills = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Event Management",
  "Critical Thinking",
  "Problem Solving",
  "Adaptability",
  "Time Management",
];

const coreConcepts = [
  "Data Structures & Algorithms",
  "OOPS",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="About"
          title="A quick introduction"
          description="Motivated Computer Science and Design undergraduate with interests in Software Engineering, AI, Cybersecurity, IoT and Intelligent Systems."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile */}
          <Reveal className="lg:col-span-2">
            <div className="glass card-hover glow-border h-full rounded-2xl p-8">
              <div className="flex items-center gap-3 text-primary">
                <Users size={18} />
                <span className="text-xs font-semibold uppercase tracking-widest">Profile</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                I'm a Computer Science and Design student passionate about building systems that
                blend software, AI, and hardware into real, useful products. My work spans
                robotics simulators, IoT platforms and full-stack applications — reinforced by
                hackathons, patent filings, and industry-led mentoring at{" "}
                <span className="text-foreground">Cisco BOOST</span>. I care about clean
                engineering, elegant interfaces, and shipping ideas that matter.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {coreConcepts.map((c) => (
                  <span
                    key={c}
                    className="rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.1}>
            <div className="glass card-hover glow-border h-full rounded-2xl p-8">
              <div className="flex items-center gap-3 text-primary">
                <GraduationCap size={18} />
                <span className="text-xs font-semibold uppercase tracking-widest">Education</span>
              </div>
              <div className="mt-5">
                <h3 className="font-display text-lg font-bold text-foreground">
                  B.E. Computer Science and Design
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">Easwari Engineering College</p>
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  2024 — 2028
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Technical skills */}
        <StaggerParent className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <StaggerChild key={title}>
              <div className="glass card-hover glow-border h-full rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary/25 to-accent/25 text-primary">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-display text-base font-bold">{title}</h3>
                </div>
                <div className="mt-5 space-y-3.5">
                  {skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{s.name}</span>
                        <span className="font-mono text-primary/80">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>

        {/* Soft skills */}
        <Reveal delay={0.1}>
          <div className="mt-6 glass rounded-2xl p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
              Soft Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border-strong bg-surface/60 px-4 py-1.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
