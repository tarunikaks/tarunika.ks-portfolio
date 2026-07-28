import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import { Reveal, StaggerChild, StaggerParent } from "../Reveal";
import { SectionHeading } from "../SectionHeading";
import { SoftSkillRotator } from "../SoftSkillRotator";

const techStack = [
  "Python",
  "Java",
  "C",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
  "ESP32",
  "Arduino",
  "IoT",
  "Modern AI",
  "Prompt Engineering",
  "Robotics",
  "DBMS",
  "OOP",
  "Computer Networks",
  "Operating Systems",
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
          description="Motivated Computer Science and Design undergraduate with interests in Software Engineering, UI/UX Design, AI, Cybersecurity, IoT and Intelligent Systems."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          {/* Photo */}
          <Reveal className="lg:col-span-2">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-[4/5] w-full max-w-sm"
            >
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-2xl" />
              <div className="glass glow-border relative h-full w-full overflow-hidden rounded-3xl p-1 shadow-elevated">
                <img
                  src="/assets/profile.jpg"
                  alt="Tarunika K S"
                  className="h-full w-full rounded-[1.35rem] object-cover"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
            </motion.div>
          </Reveal>

          {/* Profile */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="glass card-hover glow-border h-full rounded-2xl p-8">
              <div className="flex items-center gap-3 text-primary">
                <Users size={18} />
                <span className="text-xs font-semibold uppercase tracking-widest">Profile</span>
              </div>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Computer Science and Design student and aspiring Software Engineer passionate about
                building innovative digital solutions. Skilled in AI/ML, UI/UX design, full-stack
                development, and the basics of Cloud Computing, with hands-on experience developing
                real-world projects and participating in hackathons. Always eager to learn, innovate,
                and create technology that makes a meaningful impact.
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

              <div className="mt-6 flex items-center gap-3 border-t border-border pt-6 text-primary">
                <GraduationCap size={18} />
                <span className="text-xs font-semibold uppercase tracking-widest">Education</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">
                B.E. Computer Science and Design
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Easwari Engineering College · 2024 — 2028
              </p>
            </div>
          </Reveal>
        </div>

        {/* Tech Stack pills */}
        <Reveal delay={0.1}>
          <div className="mt-10">
            <div className="mb-5 flex items-center gap-3 text-primary">
              <span className="text-xs font-semibold uppercase tracking-widest">Tech Stack</span>
              <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
            <StaggerParent className="flex flex-wrap gap-3">
              {techStack.map((skill, idx) => (
                <StaggerChild key={skill}>
                  <motion.span
                    animate={{ y: [0, idx % 2 === 0 ? -6 : 6, 0] }}
                    transition={{
                      duration: 4 + (idx % 5),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.05,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="glass glow-border inline-flex cursor-default items-center rounded-full border border-border-strong bg-gradient-to-br from-primary/10 via-surface/60 to-accent/10 px-5 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/70 hover:text-primary hover:shadow-glow"
                  >
                    {skill}
                  </motion.span>
                </StaggerChild>
              ))}
            </StaggerParent>
          </div>
        </Reveal>

        {/* Soft Skills rotator */}
        <Reveal delay={0.15}>
          <div className="mt-10">
            <SoftSkillRotator />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
