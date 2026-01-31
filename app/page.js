
import Hero from '../components/Hero'
import Counters from '../components/Counters'
import MarqueeLogos from '../components/MarqueeLogos'
import ProcessSnapshot from '../components/ProcessSnapshot'
import InsightsPreview from '../components/InsightsPreview'
import Link from 'next/link'

export default function Page() {
  return (
    <>

      <Hero />

      {/* ABOUT PREVIEW SECTION */}
      <section className="section py-20 border-b border-white/5 bg-gradient-to-b from-slate-950/80 to-transparent">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">About OpsVantage Digital</h2>
          <p className="text-lg md:text-xl text-muted-2 leading-relaxed mb-8">
            OpsVantage Digital is a new kind of digital partner—built for small and medium businesses who want more than just a website. We deliver clarity, care, and future-proof digital systems that help you grow with confidence.
          </p>
          <Link href="/about-us" className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition hover:opacity-90">Learn More</Link>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="section py-20">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-muted-2 leading-relaxed mb-8">
            From premium websites to automation, AI, and ongoing stewardship—OpsVantage Digital offers a complete suite of services to help your business thrive in the digital era.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">Premium Website Development</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>Custom Next.js websites</li>
                <li>Lightning fast, mobile-first, SEO optimized</li>
                <li>Conversion-driven, brand-aligned</li>
                <li>Secure, accessible, future-proof</li>
              </ul>
            </div>
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">Business Automation & Workflow</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>Automated lead capture & onboarding</li>
                <li>Email, booking, content, and reporting flows</li>
                <li>Higher productivity, fewer errors</li>
              </ul>
            </div>
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">AI Agent Integration</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>Custom AI agents for support, sales, ops</li>
                <li>AI-powered content & analytics</li>
                <li>Safe, ethical, real-world AI</li>
              </ul>
            </div>
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">Domain, SSL, Email & DNS</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>Domain registration & SSL provisioning</li>
                <li>Email hosting & DNS setup</li>
                <li>Renewal & security monitoring</li>
              </ul>
            </div>
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">Website Monitoring & Upkeep</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>24/7 uptime, SSL, domain, and DNS monitoring</li>
                <li>Performance audits, backups, security scans</li>
                <li>Client portal for self-management</li>
              </ul>
            </div>
            <div className="card-surface p-6 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-2">Strategy, Brand & Education</h3>
              <ul className="list-disc list-inside text-sm text-muted-2 mb-2">
                <li>Strategy sessions & digital roadmapping</li>
                <li>Brand identity & narrative architecture</li>
                <li>Onboarding, documentation, and support</li>
              </ul>
            </div>
          </div>
          <Link href="/services" className="btn btn-primary px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition hover:opacity-90">See All Services</Link>
        </div>
      </section>


      {/* SOCIAL PROOF / COUNTERS */}
      <section className="section py-12">
        <div className="container">
          <Counters />
        </div>
      </section>


      {/* MARQUEE LOGOS */}
      <section className="section py-12 border-t border-white/5">
        <div className="container">
          <MarqueeLogos />
        </div>
      </section>



      {/* PROCESS SNAPSHOT PREVIEW */}
      <section className="w-full relative border-y border-white/5 bg-gradient-to-b from-transparent to-black/20">
        <div className="py-24">
          <ProcessSnapshot />
        </div>
      </section>


      {/* INSIGHTS PREVIEW */}
      <section className="section pb-20">
        <div className="container">
          <InsightsPreview />
        </div>
      </section>


      {/* CTA SECTION */}
      <section className="section py-12 bg-gradient-to-b from-black/10 to-transparent border-t border-white/5">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">Ready to build your next chapter?</h3>
          <p className="text-lg text-muted-2 mb-8">Let’s explore how OpsVantage Digital can help you scale with care, clarity, and confidence. No pressure—just a conversation about your vision.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn btn-primary inline-block px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition hover:opacity-90">Contact Us</a>
            <a href="/booking" className="btn btn-secondary inline-block px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition hover:opacity-90">Book a Meeting</a>
          </div>
        </div>
      </section>
    </>
  )
}
