import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <Reveal>
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
          <span className="gradient-text">{title}</span>
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.15}>
          <p className="mt-4 text-base text-muted-foreground">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
