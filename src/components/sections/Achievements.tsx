import { Trophy, Users, Network, Rocket, Award } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const timeline = [
  {
    icon: Rocket,
    title: "Hackathons — 12h & 24h",
    desc: "Participated in multiple 12-hour and 24-hour hackathons, shipping working IoT and AI prototypes under pressure.",
  },
  {
    icon: Trophy,
    title: "Omnidimension Hackathon",
    desc: "Completed the Omnidimension Hackathon with an intelligent-systems submission.",
  },
  {
    icon: Network,
    title: "Cisco Networking Academy",
    desc: "Earned multiple Cisco certifications spanning Cybersecurity, Networking, AI and Python.",
  },
  {
    icon: Users,
    title: "Department Ambassador",
    desc: "Represent the Computer Science and Design department; help lead planning, coordination and execution of technical events, workshops and student engagement.",
  },
  {
    icon: Award,
    title: "Cisco BOOST Program",
    desc: "Selected participant in industry-led mentoring, technical workshops, networking sessions and professional development.",
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="mx-auto max-w-4xl px-4">
        <SectionHeading
          eyebrow="Journey"
          title="Achievements & Leadership"
          description="Milestones from campus, industry and hackathons."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8">
            {timeline.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                    <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow animate-pulse-ring">
                      <Icon size={15} />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <div className="glass card-hover glow-border rounded-2xl p-5">
                      <h3 className="font-display text-base font-bold text-foreground">{title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
