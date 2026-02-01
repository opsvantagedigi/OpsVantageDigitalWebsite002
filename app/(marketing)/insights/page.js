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

export default function InsightsPage() {
  return (
    <>
      <main className="container mx-auto px-6 py-12 max-w-3xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <Sparkles>Insights</Sparkles>
        </h1>
        <p className="text-xl text-center mb-10">
          <Sparkles>
            Actionable digital wisdom, playbooks, and thought leadership for
            modern businesses.
          </Sparkles>
        </p>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Governance Playbook: Ship Securely
            </h2>
            <p>
              Learn how to build and launch digital systems with
              governance-grade security, compliance, and operational discipline.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Observable Delivery Pipelines
            </h2>
            <p>
              Discover best practices for building reliable, observable, and
              scalable delivery pipelines that support growth and stability.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Experimentation Platforms That Scale
            </h2>
            <p>
              Explore how to design and implement experimentation platforms that
              drive actionable decisions and continuous improvement.
            </p>
          </div>
        </section>
        <div className="mt-10 text-xs text-muted-2 text-center">
          <p>
            All insights are provided for educational purposes and reflect
            OpsVantage Digital’s commitment to clarity, stewardship, and lawful
            best practices.
          </p>
        </div>
        <div className="flex justify-center mt-12">
          <MagneticButton as="a" href="/contact">
            Request a Consultation
          </MagneticButton>
        </div>
      </main>
      <ThemeToggle />
      <ToTopButton />
    </>
  );
}
