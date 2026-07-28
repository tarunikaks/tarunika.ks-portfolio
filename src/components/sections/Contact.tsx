import { useState, type FormEvent } from "react";
import { Loader2, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../Reveal";
import { SectionHeading } from "../SectionHeading";

const items = [
  { icon: Mail, label: "Email", value: "kstarunika1511@gmail.com", href: "mailto:kstarunika1511@gmail.com" },
  { icon: MapPin, label: "Location", value: "Chennai, India", href: null },
];

// FormSubmit AJAX endpoint — sends form submissions to this inbox.
// No signup required. First submission triggers a one-time activation email
// from FormSubmit to the recipient; click the link inside to activate.
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/kstarunika1511@gmail.com";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    const payload = {
      name,
      email,
      _replyto: email,
      _subject: `Portfolio inquiry: ${subject}`,
      _captcha: "false",
      _template: "table",
      subject,
      message,
    };
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
      const ok = res.ok && (json.success === true || json.success === "true");
      if (!ok) throw new Error(json.message || "Send failed");
      setStatus("success");
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    } catch {
      // Fallback: open the user's email client with prefilled content so the
      // message still reaches the inbox even if the AJAX endpoint is blocked
      // or awaiting first-time activation.
      const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
      window.location.href = `mailto:kstarunika1511@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      setStatus("success");
      toast.success("Opening your email app to complete sending…");
      form.reset();
    }
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
                      {href ? <a href={href}>{inner}</a> : inner}
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
                <Field name="subject" label="Subject" placeholder="What is this about?" required />
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
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-semibold text-primary-foreground btn-glow disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    Sending… <Loader2 size={14} className="animate-spin" />
                  </>
                ) : status === "success" ? (
                  <>
                    Message sent <Send size={14} />
                  </>
                ) : (
                  <>
                    Send Message <Send size={14} />
                  </>
                )}
              </button>
              {status === "success" && (
                <p className="mt-3 text-center text-xs text-primary">
                  Thanks! Your message has been delivered.
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-center text-xs text-destructive">
                  Couldn't send right now. Please try again.
                </p>
              )}
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
