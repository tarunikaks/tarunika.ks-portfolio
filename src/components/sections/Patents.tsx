import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const patents = [
  {
    title: "Smart Parking System",
    number: "Indian Patent Application No. 202641056865 A",
    status: "Patent Published",
    url: "https://drive.google.com/file/d/1WqLsadz8pbG38z5qydnSYdNhn-cl6Ax8/view?usp=drive_link",
  },
  {
    title: "Smart Food Freshness Detection",
    number: "Indian Patent Application No. 202541119801 A",
    status: "Patent Published",
    url: "https://drive.google.com/file/d/15dfpNYog5ZPD1ZdlfELQxG7RbpeRvibG/view?usp=sharing",
  },
];


export function Patents() {
  return (
    <section id="patents" className="relative section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Recognitions"
          title="Patents"
          description="Original systems research — filed and published with the Indian Patent Office."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {patents.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="glass card-hover glow-border relative overflow-hidden rounded-2xl p-8">
                {/* Award ribbon */}
                <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-2xl" />

                <div className="flex items-start justify-between">
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
                    className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow animate-pulse-ring"
                  >
                    <Award size={22} />
                  </motion.div>
                  <span className="rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {p.status}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 font-mono text-xs text-muted-foreground">{p.number}</p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-accent px-4 py-2 text-xs font-semibold text-primary-foreground btn-glow"
                  >
                    <ExternalLink size={14} /> Open PDF
                  </a>
                  <span className="text-xs text-muted-foreground">Indian Patent</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
