import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { scrollToId } from "../SmoothScroll";

const socials = [
  { icon: Github, href: "https://github.com/tarunikaks", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/tarunika-k-s", label: "LinkedIn" },
  { icon: Mail, href: "mailto:kstarunika1511@gmail.com", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border pt-12 pb-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-6 text-center">
          <button
            onClick={() => scrollToId("home")}
            className="group inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground transition hover:text-primary"
          >
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
            Back to top
          </button>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface/60 text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary hover:shadow-glow"
              >
                <Icon size={16} className="transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>

          <div className="font-display text-sm text-muted-foreground">
            © {year} <span className="gradient-text font-bold">Tarunika K S</span> · Crafted with
            care in Chennai.
          </div>
        </div>
      </div>
    </footer>
  );
}
