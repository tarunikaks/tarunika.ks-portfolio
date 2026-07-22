import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Mail, label: "Email", value: "kstarunika1511@gmail.com", href: "mailto:kstarunika1511@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 8778434535", href: "tel:+918778434535" },
  { icon: Github, label: "GitHub", value: "github.com/tarunikaks", href: "https://github.com/tarunikaks" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/tarunika-k-s", href: "https://linkedin.com/in/tarunika-k-s" },
  { icon: MapPin, label: "Location", value: "Chennai, Tamil Nadu", href: null },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`Hi Tarunika,\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:kstarunika1511@gmail.com?subject=Portfolio%20inquiry%20from%20${encodeURIComponent(String(name ?? ""))}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Say Hello"
          title="Get in touch"
          description="Open to internships, placements and collaborations. Let's build something great."
        />

        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="glass glow-border h-full rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold">Reach me directly</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fastest response via email — usually within a day.
              </p>
              <ul className="mt-6 space-y-3">
                {items.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-3 transition hover:border-primary/50">
                      <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 text-primary shadow-glow ring-1 ring-primary/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-primary/70">
                        <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        <Icon size={18} className="relative" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {label}
                        </p>
                        <p className="truncate text-sm text-foreground group-hover:text-primary">
                          {value}
                        </p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                          {inner}
                        </a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>

            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="glass glow-border h-full rounded-2xl p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Name" placeholder="Your name" required />
                <Field name="email" type="email" label="Email" placeholder="you@company.com" required />
              </div>
              <Field name="subject" label="Subject" placeholder="Internship / Placement / Collab" className="mt-4" />
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about the opportunity..."
                  className="w-full resize-none rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary/70 focus:bg-surface focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">
                  {sent ? "Opening your email client…" : "Powered by mailto — no data stored."}
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-primary-foreground btn-glow"
                >
                  Send Message <Send size={14} />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
  required,
  className = "",
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-surface/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition focus:border-primary/70 focus:bg-surface focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}
