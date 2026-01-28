"use client"

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroScene = dynamic(() => import('./HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="h-[260px] w-full rounded-3xl bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-amber-300/10 animate-pulse" />
  ),
})

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(251,191,36,0.16),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-20 pt-24 md:flex-row md:items-center md:gap-16 md:px-6 lg:px-8 lg:pb-28 lg:pt-28">
        {/* Left: Copy */}
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-xs font-medium text-emerald-200/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            OpsVantage Digital · Modern Ops & AI Studio
          </div>

          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
            Websites. Automation. AI Agents. Domains.
            <span className="block text-transparent bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-300 bg-clip-text">
              All in one platform.
            </span>
          </h1>

          <p className="text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
            We design and build modern websites, automate business operations, integrate AI agents, and provision domains,
            SSL certificates, email, and DNS through our OpenProvider‑powered infrastructure. Choose full‑service monitoring
            and upkeep, or manage everything yourself through your OpsVantage Client Portal.
          </p>

          {/* Value strip */}
          <div className="grid gap-3 text-xs text-slate-300 sm:grid-cols-2 sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
              <p>Website design & development with governance‑grade performance and accessibility.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <p>Business workflows, CRM, and operations automated end‑to‑end.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-300" />
              <p>AI agents embedded into your stack for support, ops, and growth.</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
              <p>Domains, SSL, email, and DNS provisioned and monitored for you.</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="#start-website"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 via-emerald-500 to-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:brightness-110"
            >
              Start Your Website
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300 sm:text-sm">
              <Link
                href="#automation"
                className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 hover:border-sky-500/60 hover:text-sky-200"
              >
                Automate My Business
              </Link>
              <Link
                href="#ai-agents"
                className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 hover:border-emerald-500/60 hover:text-emerald-200"
              >
                Deploy an AI Agent
              </Link>
              <Link
                href="#domains"
                className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 hover:border-amber-400/70 hover:text-amber-200"
              >
                Get Domain &amp; SSL
              </Link>
              <Link
                href="#portal"
                className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1.5 hover:border-fuchsia-400/70 hover:text-fuchsia-200"
              >
                Access Client Portal
              </Link>
            </div>
          </div>

          {/* Trust line */}
          <p className="pt-1 text-xs text-slate-400">
            Full‑service monitoring and upkeep available on subscription, or self‑managed via your OpsVantage dashboard.
          </p>
        </div>

        {/* Right: 3D scene */}
        <div className="relative w-full max-w-md shrink-0 md:max-w-lg">
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2.25rem] bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-amber-300/15 blur-3xl" />
          <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-slate-950/70 shadow-[0_0_80px_rgba(15,23,42,0.9)] backdrop-blur">
            {/* TEMP: disable 3D scene for hydration triage */}
            <div className="h-[260px] w-full rounded-[2rem] border border-white/8 bg-slate-900/70 md:h-[320px] lg:h-[360px] flex items-center justify-center text-xs text-slate-400">
              3D scene temporarily disabled for diagnostics.
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>OpenProvider‑powered domains, SSL, email &amp; DNS.</span>
            <span>OpsVantage Monitoring · 24/7 uptime &amp; renewals.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
