"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-3xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="text-xl text-center mb-10">
          Where legacy, technology, and human care converge.
        </p>
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Story</h2>
            <p>
              OpsVantage Digital was built on a simple but powerful belief:
              technology should serve people — not overwhelm them. In a world
              where digital systems grow more complex by the day, we exist to
              bring clarity, stability, and emotional intelligence back into the
              experience of building online.
            </p>
            <p className="mt-2">
              We are not just a web development company. We are a digital
              stewardship platform — a place where businesses, creators, and
              founders can build with confidence, scale with intention, and grow
              without fear of the unknown.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              To build digital systems that are beautiful, reliable, emotionally
              intelligent, and future‑proof — systems that empower people,
              protect their time, and elevate their potential.
            </p>
            <ul className="list-disc list-inside mt-2 text-sm text-slate-600 dark:text-slate-300">
              <li>We don’t chase trends. We build foundations.</li>
              <li>We don’t cut corners. We build for longevity.</li>
              <li>
                We don’t treat clients as transactions. We treat them as
                partners in a shared journey.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p>
              A world where every business — no matter its size — has access to
              premium digital infrastructure, automation, and AI‑powered tools
              that were once reserved for large enterprises.
            </p>
            <p className="mt-2">
              A world where websites don’t break, systems don’t fail, and
              technology doesn’t intimidate. A world where digital platforms are
              built with care, not shortcuts. OpsVantage Digital is building
              that world — one system, one client, one legacy at a time.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              What Makes Us Different
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>
                Most agencies build websites. We build digital ecosystems.
              </li>
              <li>
                Most agencies deliver projects. We deliver clarity, governance,
                and long‑term stability.
              </li>
              <li>
                Most agencies disappear after launch. We stay — monitoring,
                maintaining, improving, and supporting your platform every day.
              </li>
              <li>
                Our difference is not in what we build, but how we build: with
                emotional intelligence, operational discipline,
                future‑maintainer clarity, and a philosophy rooted in care.
              </li>
              <li>We build for the next generation of your business.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
            <p>
              Every project begins with understanding — your story, your goals,
              your challenges, your customers. From there, we design systems
              that are fast, secure, scalable, automated, AI‑enhanced,
              beautifully crafted, easy to manage, and above all: built to last.
            </p>
            <p className="mt-2">
              We combine modern engineering with human‑centered design, ensuring
              that every interaction — from your website to your client portal —
              feels intuitive, intentional, and aligned with your brand.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Our Commitment to You
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>We care about your success</li>
              <li>We protect your digital foundation</li>
              <li>We build with integrity</li>
              <li>We communicate with clarity</li>
              <li>We support you long after launch</li>
              <li>We treat your business like a legacy worth preserving</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Our Legacy Philosophy
            </h2>
            <p>
              OpsVantage Digital was founded on the belief that technology
              should uplift people — not confuse them, not exploit them, not
              overwhelm them.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>Respect</li>
              <li>Clarity</li>
              <li>Emotional intelligence</li>
              <li>Operational excellence</li>
              <li>
                The desire to leave every client better than we found them
              </li>
            </ul>
            <p className="mt-2">
              This philosophy guides every decision we make, every system we
              design, and every interaction we have.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              The Future We’re Building
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300">
              <li>Websites are self‑healing</li>
              <li>AI agents support your operations</li>
              <li>Automation handles the repetitive</li>
              <li>Smart wallets unlock new possibilities</li>
              <li>Monitoring protects your digital assets</li>
              <li>Your business grows without friction</li>
            </ul>
            <p className="mt-2">
              OpsVantage Digital is not just keeping up with the future — we’re
              building it.
            </p>
          </div>
        </section>
      </main>
      <ThemeToggle />
      <ToTopButton />
      <Footer />
    </div>
  );
}
