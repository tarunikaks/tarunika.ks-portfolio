import { createFileRoute } from "@tanstack/react-router";
import { BackgroundFX } from "@/components/BackgroundFX";
import { CursorGlow } from "@/components/CursorGlow";
import { Preloader } from "@/components/Preloader";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Patents } from "@/components/sections/Patents";
import { Certifications } from "@/components/sections/Certifications";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      {
        name: "keywords",
        content:
          "Tarunika K S, portfolio, software engineer, computer science and design, IoT, AI, robotics, Chennai, internship, Easwari Engineering College",
      },
    ],
  }),
});

function PortfolioPage() {
  return (
    <div className="dark relative min-h-screen bg-background text-foreground">
      <Preloader />
      <SmoothScroll />
      <BackgroundFX />
      <CursorGlow />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Patents />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
