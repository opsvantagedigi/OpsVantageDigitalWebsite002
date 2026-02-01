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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <>
      <main className="container mx-auto px-6 py-12 max-w-xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <Sparkles>Contact Us</Sparkles>
        </h1>
        <p className="text-xl text-center mb-10">
          <Sparkles>Let’s start your journey. Reach out for a free strategy session, partnership, or support.</Sparkles>
        </p>
        <form
          className="space-y-6"
          onSubmit={handleSubmit}
          aria-label="Contact form"
        >
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="ovd-input w-full"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="ovd-input w-full"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="ovd-input w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              className="accent-emerald-500"
            />
            <label htmlFor="consent" className="text-xs">
              I consent to OpsVantage Digital processing my data for the purpose
              of this inquiry.{" "}
              <a href="/privacy-policy" className="underline">
                Privacy Policy
              </a>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              id="antispam"
              name="antispam"
              type="checkbox"
              required
              className="accent-amber-400"
            />
            <label htmlFor="antispam" className="text-xs">
              I confirm I am not sending spam or unsolicited commercial
              messages.
            </label>
          </div>
          <MagneticButton type="submit" className="w-full py-3 font-semibold text-lg">
            Send Message
          </MagneticButton>
        </form>
        {submitted && (
          <div className="mt-6 p-4 rounded-lg bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100 text-center shadow-md">
            Thank you! Your message has been received. We’ll be in touch soon.
          </div>
        )}
        <div className="mt-10 text-xs text-muted-2 text-center">
          <p>
            OpsVantage Digital is committed to privacy, security, and lawful
            communication. All inquiries are handled in accordance with ISO/IEC
            27001, GDPR, CCPA, and global standards.
          </p>
        </div>
      </main>
      <ThemeToggle />
      <ToTopButton />
    </>
  );
}
