import {
  Cloud,
  Database,
  Network,
  ShieldCheck,
  Brain,
  Code2,
  Cpu,
  Blocks,
} from "lucide-react";
import { StaggerChild, StaggerParent } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const certs = [
  {
    icon: Cloud,
    title: "AWS Cloud Quest",
    items: ["Cloud Practitioner", "Generative AI Practitioner"],
    color: "from-orange-400/30 to-pink-400/20",
  },
  {
    icon: Database,
    title: "MongoDB",
    items: ["Database Fundamentals"],
    color: "from-emerald-400/30 to-teal-400/20",
  },
  {
    icon: Network,
    title: "Cisco Networking",
    items: ["Network Basics", "Security & Connectivity"],
    color: "from-sky-400/30 to-blue-500/20",
  },
  {
    icon: Blocks,
    title: "NPTEL",
    items: ["Intro to IoT", "Industry 4.0 & IoT", "Blockchain"],
    color: "from-indigo-400/30 to-purple-400/20",
  },
  {
    icon: Code2,
    title: "Python",
    items: ["Introduction to Python"],
    color: "from-yellow-400/30 to-amber-500/20",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    items: ["Cyber Threat Management", "Security Alerts & Monitoring"],
    color: "from-rose-400/30 to-red-500/20",
  },
  {
    icon: Cpu,
    title: "Networking",
    items: ["Cisco Network Academy"],
    color: "from-cyan-400/30 to-sky-500/20",
  },
  {
    icon: Brain,
    title: "Modern AI",
    items: ["Introduction to Modern AI"],
    color: "from-fuchsia-400/30 to-purple-500/20",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Verified"
          title="Certifications"
          description="Continuous learning across cloud, networking, AI, and security."
        />

        <StaggerParent className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map(({ icon: Icon, title, items, color }) => (
            <StaggerChild key={title}>
              <div className="glass card-hover glow-border h-full rounded-2xl p-5">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${color} text-foreground shadow-glow`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-base font-bold">{title}</h3>
                <ul className="mt-2 space-y-1">
                  {items.map((it) => (
                    <li key={it} className="text-xs text-muted-foreground">
                      · {it}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
