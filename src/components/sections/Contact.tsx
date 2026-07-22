import { useState, type FormEvent } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Mail, label: "Email", value: "kstarunika1511@gmail.com", href: "mailto:kstarunika1511@gmail.com" },
  { icon: MapPin, label: "Location", value: "Chennai, India", href: null },
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

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass glow-border h-full rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold">Contact Information</h3>
              <ul className="mt-6 space-y-4">
                {items.map(({ icon: Icon, label, value, href }) => {
                  const inner = (
                    <div className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition hover:border-primary/50">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-glow">
                        <Icon size={18} />
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
                        <a href={href}>{inner}</a>
                      ) : (
                        inner
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={onSubmit} className="glass glow-border h-full rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold">Send a Message</h3>
              <div className="mt-6 space-y-4">
                <Field name="name" label="Name" placeholder="Your name" required />
                <Field name="email" type="email" label="Email" placeholder="you@company.com" required />
                <div>
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
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground btn-glow"
              >
                {sent ? "Opening your email…" : "Send Message"} <Send size={14} />
              </button>
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
}: {
  name: string;
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
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
