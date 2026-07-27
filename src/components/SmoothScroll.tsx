import { useEffect } from "react";

export function SmoothScroll() {
  // Native scrolling only; no smooth-scroll override.
  useEffect(() => {
    if (typeof window === "undefined") return;
    delete (window as unknown as { __lenis?: unknown }).__lenis;
  }, []);

  return null;
}

export function scrollToId(id: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}
