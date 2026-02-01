"use client";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useEffect, useState } from "react";
import Sparkles from "../../../components/Sparkles";
import MagneticButton from "../../../components/MagneticButton";
import BentoGrid from "../../../components/BentoGrid";

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-6 py-12 max-w-4xl flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <Sparkles>Our Services</Sparkles>
        </h1>
        <p className="text-xl text-center mb-10">
          <Sparkles>A comprehensive, legacy-aligned articulation of everything we offer our clients.</Sparkles>
        </p>
        <div className="mb-12">
          <BentoGrid />
        </div>
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              1. Premium Website Development
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>Custom designed websites built on Next.js</li>
              <li>Lightning fast performance, mobile-first, SEO optimized</li>
              <li>Accessibility compliant layouts</li>
              <li>Conversion driven UX, brand aligned visuals</li>
              <li>Secure, stable, future proof architecture</li>
            </ul>
            <p className="text-xs text-muted-2">
              For: Small businesses, startups, creators, consultants, agencies,
              anyone needing a premium digital presence.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              2. Business Automation & Workflow Systems
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>
                Automated lead capture, onboarding, email, booking, content,
                reporting, support flows
              </li>
              <li>Automated dashboards, pipelines, and error reduction</li>
              <li>Higher productivity, better customer experience</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              3. AI Agent Integration & Custom AI Systems
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>Custom AI agents for support, sales, operations</li>
              <li>AI powered content workflows, analytics, insights</li>
              <li>AI automation for internal processes</li>
              <li>Ethical, safe, real-world AI adoption</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              4. Domain, SSL, Email & DNS Provisioning
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>Domain registration, SSL certificate provisioning</li>
              <li>Email hosting setup, DNS configuration</li>
              <li>Renewal management, security monitoring</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              5. Website Monitoring & Upkeep
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>24/7 uptime, SSL, domain, email, DNS monitoring</li>
              <li>Broken link detection, performance audits, security scans</li>
              <li>Automated backups, monthly upkeep, client portal</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              6. The OpsVantage Client Portal
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>
                Manage website, analytics, domains, SSL, email, DNS,
                subscriptions, support, invoices, backups, automations, AI
                insights
              </li>
              <li>Competitive advantage: platform, not just agency</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              7. Strategy Sessions & Digital Roadmapping
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>Structured, emotionally intelligent strategy sessions</li>
              <li>Guidance on scaling, automation, safe AI integration</li>
              <li>Trusted advisor, not just service provider</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              8. Brand Identity & Narrative Architecture
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>
                Brand story, voice, messaging, visual identity, content strategy
              </li>
              <li>Website copywriting, emotionally resonant brands</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              9. Productized Digital Systems
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>Website + Monitoring, Automation, AI agent, Web3 bundles</li>
              <li>Full OpsVantage Platform subscription</li>
              <li>Recurring revenue, long-term retention</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              10. Education, Documentation & Stewardship
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>
                Clear documentation, onboarding guides, training materials
              </li>
              <li>
                Governance grade workflows, emotionally intelligent support
              </li>
              <li>Legacy philosophy: teach, empower, protect</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              11. Future Services (Roadmap)
            </h2>
            <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-300 mb-2">
              <li>
                AI powered website editor, automated content engine, client side
                AI assistant
              </li>
              <li>
                Web3 onboarding hub, smart wallet dashboard, crypto sentinel
                integration
              </li>
              <li>Automated compliance tools, multi agent orchestration</li>
              <li>Ambition without overpromising</li>
            </ul>
          </div>
        </section>
        <div className="flex justify-center mt-12">
          <MagneticButton as="a" href="/contact">
            Get Started
          </MagneticButton>
        </div>
      </main>
      <ThemeToggle />
      <ToTopButton />
      <Footer />
    </div>
  );
}
