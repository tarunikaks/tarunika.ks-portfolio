import { useMemo } from "react";

/**
 * Ambient background: gradient blobs + subtle particle field + falling code rain
 * (matrix-style glyphs) reminiscent of a developer terminal.
 */
const CODE_GLYPHS = ["{", "}", "<", ">", "/", ";", "[", "]", "(", ")", "0", "1"];

export function BackgroundFX() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 1 + Math.random() * 2,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 8,
      })),
    [],
  );

  const codeRain = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        char: CODE_GLYPHS[Math.floor(Math.random() * CODE_GLYPHS.length)],
        duration: 22 + Math.random() * 22,
        delay: -Math.random() * 20,
        size: 9 + Math.random() * 5,
        opacity: 0.18 + Math.random() * 0.22,
        driftX: (Math.random() - 0.5) * 160,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gradient blobs */}
      <div
        className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "radial-gradient(circle, var(--primary), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--accent), transparent 70%)",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: "radial-gradient(circle, var(--primary-glow), transparent 70%)",
          animationDelay: "-12s",
        }}
      />

      {/* Code rain */}
      {codeRain.map((c) => (
        <span
          key={c.id}
          className="absolute font-mono font-medium text-primary"
          style={{
            left: `${c.left}%`,
            top: `${c.top}%`,
            fontSize: `${c.size}px`,
            opacity: c.opacity,
            ["--drift-x" as string]: `${c.driftX}px`,
            ["--glyph-opacity" as string]: c.opacity,
            animation: `code-drift ${c.duration}s ease-in-out ${c.delay}s infinite`,
            textShadow: "0 0 6px color-mix(in oklab, var(--primary) 40%, transparent)",
          }}
        >
          {c.char}
        </span>
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-primary/60"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float-slow ${p.duration}s ease-in-out ${p.delay}s infinite`,
            boxShadow: "0 0 6px currentColor",
          }}
        />
      ))}
    </div>
  );
}
