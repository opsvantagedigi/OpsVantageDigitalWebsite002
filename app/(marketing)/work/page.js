"use client";
import { useEffect, useState } from "react";
import Sparkles from "../../../components/Sparkles";
import MagneticButton from "../../../components/MagneticButton";

function ToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible ? (
    <button
      aria-label="To the top"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 text-slate-950 font-bold px-4 py-2 rounded-full shadow-lg hover:brightness-110 focus-visible:outline-2 focus-visible:outline-amber-400"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑ Top
    </button>
  ) : null;
}

function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    const sysTheme = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    setTheme(localStorage.getItem("theme") || sysTheme);
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
  };
  return (
    <button
      aria-label="Toggle theme"
      className="fixed top-6 right-6 z-50 bg-slate-800 dark:bg-slate-200 text-amber-400 dark:text-slate-900 px-3 py-2 rounded-full shadow-lg border border-slate-700 dark:border-slate-300 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-amber-400"
      onClick={toggle}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <main className="container mx-auto px-6 py-12 max-w-3xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <Sparkles>What We’re Building</Sparkles>
        </h1>
        <p className="text-xl text-center mb-10">
          <Sparkles>Our vision, roadmap, and platform ambitions for the future of digital stewardship.</Sparkles>
        </p>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Platform Vision</h2>
            <p>
              OpsVantage Digital is building a platform where websites are
              self-healing, AI agents support operations, automation handles the
              repetitive, and monitoring protects your digital assets.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Roadmap Highlights</h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>AI powered website editor</li>
              <li>Automated content engine</li>
              <li>Client side AI assistant</li>
              <li>Web3 onboarding hub</li>
              <li>Smart wallet dashboard</li>
              <li>Crypto Sentinel integration</li>
              <li>Automated compliance tools</li>
              <li>Multi agent orchestration</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
            <p>
              We build with care, clarity, and governance. Our roadmap is
              ambitious but grounded in our legacy philosophy: teach, empower,
              and protect every client.
            </p>
          </div>
        </section>
        <div className="mt-10 text-xs text-muted-2 text-center">
          <p>
            All roadmap items are forward-looking statements and subject to
            change. OpsVantage Digital is committed to transparency and lawful
            innovation.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <MagneticButton as="a" href="/contact">
            Partner With Us
          </MagneticButton>
        </div>
      </main>
      <ThemeToggle />
      <ToTopButton />
    </div>
  );
}
