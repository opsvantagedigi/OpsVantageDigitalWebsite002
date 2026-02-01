// Governance Note: This is the main landing page. It orchestrates all hero, branding, and preview components.
// Maintenance: Update hero, counters, and preview sections as product offerings evolve. Keep all logic teachable and cinematic.
// Legacy Alignment: Follows "Cinematic" and "Clarity" pillars. Comments clarify emotional impact and narrative flow.
import Hero from "../components/Hero";
import Counters from "../components/Counters";
import MarqueeLogos from "../components/MarqueeLogos";
import ProcessSnapshot from "../components/ProcessSnapshot";
import InsightsPreview from "../components/InsightsPreview";
import BentoGrid from "../components/BentoGrid";
import MagneticButton from "../components/MagneticButton";
import Sparkles from "../components/Sparkles";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Cinematic Hero with Sparkles */}
      <div className="relative">
        <Hero />
        <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
          <Sparkles>
            <span className="text-3xl md:text-5xl font-bold text-ovd-blue drop-shadow-lg">
              2025 Agency Ecosystem
            </span>
          </Sparkles>
        </div>
      </div>

      {/* ABOUT PREVIEW SECTION */}
      <section className="section py-20 border-b border-white/5 bg-gradient-to-b from-slate-950/80 to-transparent">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <Sparkles>About OpsVantage Digital</Sparkles>
          </h2>
          <p className="text-lg md:text-xl text-muted-2 leading-relaxed mb-8">
            OpsVantage Digital is a new kind of digital partner—built for small
            and medium businesses who want more than just a website. We deliver
            clarity, care, and future-proof digital systems that help you grow
            with confidence.
          </p>
          <MagneticButton as={Link} href="/about">
            Learn More
          </MagneticButton>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION - Cinematic BentoGrid */}
      <section className="section py-20">
        <div className="container max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            <Sparkles>Our Services</Sparkles>
          </h2>
          <p className="text-lg md:text-xl text-muted-2 leading-relaxed mb-8">
            From premium websites to automation, AI, and ongoing
            stewardship—OpsVantage Digital offers a complete suite of services
            to help your business thrive in the digital era.
          </p>
          <BentoGrid />
          <div className="mt-8">
            <MagneticButton as={Link} href="/services">
              See All Services
            </MagneticButton>
          </div>
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

      {/* CTA SECTION - Cinematic, Magnetic, Sparkling */}
      <section className="section py-12 bg-gradient-to-b from-black/10 to-transparent border-t border-white/5">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            <Sparkles>Ready to build your next chapter?</Sparkles>
          </h3>
          <p className="text-lg text-muted-2 mb-8">
            Let’s explore how OpsVantage Digital can help you scale with care,
            clarity, and confidence. No pressure—just a conversation about your
            vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton as="a" href="/contact">
              Contact Us
            </MagneticButton>
            <MagneticButton
              as="a"
              href="/booking"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Book a Meeting
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
