"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="h-[260px] w-full rounded-3xl bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-amber-300/10 animate-pulse" />
  ),
});


export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95 animate-fade-in">
      {/* Cinematic background gradients and animated glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(251,191,36,0.16),_transparent_55%)] animate-bg-fade" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-20 md:flex-row md:items-center md:gap-16 md:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Left: Copy */}
        <div className="max-w-xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-200/90 backdrop-blur animate-fade-in-up">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Trusted by visionaries. Engineered for tomorrow.
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl animate-fade-in-up delay-100">
            Build, automate, and scale your digital future—<span className="text-emerald-400">powered by OpsVantage</span>.
          </h1>

          <p className="text-pretty text-lg leading-relaxed text-slate-300 sm:text-xl animate-fade-in-up delay-200">
            From first impression to full automation, we help you own every step of your digital journey—with care, clarity, and confidence.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up delay-300">
            <a
              href="/contact"
              className="btn btn-primary inline-block px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition hover:opacity-90 bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 text-slate-950"
            >
              Start Your Journey
            </a>
            <Link
              href="#start-website"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/60 bg-slate-950/80 px-5 py-2.5 text-sm font-semibold text-emerald-200 shadow-lg hover:border-emerald-400/90 hover:text-white transition"
            >
              Start Your Website
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Value strip */}
          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm animate-fade-in-up delay-400">
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              <p>Website design & development with governance‑grade performance and accessibility.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <p>Business workflows, CRM, and operations automated end‑to‑end.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300 animate-pulse" />
              <p>AI agents embedded into your stack for support, ops, and growth.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400 animate-pulse" />
              <p>Domains, SSL, email, and DNS provisioned and monitored for you.</p>
            </div>
          </div>

          {/* Trust line */}
          <p className="pt-2 text-xs text-slate-400 animate-fade-in-up delay-500">
            Full‑service monitoring and upkeep available on subscription, or self‑managed via your OpsVantage dashboard.
          </p>
        </div>

        {/* Right: 3D scene */}
        <div className="relative w-full max-w-md shrink-0 md:max-w-md lg:max-w-lg animate-fade-in-up delay-600">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.25rem] bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-amber-300/15 blur-3xl animate-glow" />
          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/70 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur">
            <HeroScene />
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>OpenProvider‑powered domains, SSL, email &amp; DNS.</span>
            <span>OpsVantage Monitoring · 24/7 uptime &amp; renewals.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
