import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Counters from '../components/Counters'
import MarqueeLogos from '../components/MarqueeLogos'
import ProcessSnapshot from '../components/ProcessSnapshot'
import InsightsPreview from '../components/InsightsPreview'

export default function Page() {
  return (
    <>
      <Hero />

      {/* TITAN UPGRADE: "The Value Anchor"
         - Increased header size to text-5xl for authority.
         - Added 'text-center' and 'max-w' to prevent eye fatigue on wide screens.
         - Increased gap to 'mt-16' (64px) for visual calmness.
      */}
      <section className="section py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
              What We Build
            </h2>
            <p className="text-lg md:text-xl text-muted-2 leading-relaxed">
              Productized systems that scale revenue, reduce churn, and optimize delivery.
            </p>
          </div>
          {/* The Grid now sits comfortably below the narrative */}
          <div className="w-full mt-16">
            <BentoGrid />
          </div>
        </div>
      </section>

      {/* TITAN UPGRADE: "Social Proof Rhythm" */}
      <section className="section py-12">
        <div className="container">
          <Counters />
        </div>
      </section>

      <section className="section py-12 border-t border-white/5">
        <div className="container">
          <MarqueeLogos />
        </div>
      </section>


      {/* TITAN HYBRID: Cinematic Full-Width Background, Contained Content
          - We break the standard 'container' rhythm here to create a "Cinematic Pause."
          - GOVERNANCE NOTE: The 'w-full' wrapper ensures the background creates an immersive break.
            The internal component MUST have its own 'max-w' constraint to prevent data from stretching on 4k monitors (Stewardship).
      */}
      <section className="w-full relative border-y border-white/5 bg-gradient-to-b from-transparent to-black/20">
        {/* This 'py-24' creates the 'Breathing Room' required by the Legacy Filter */}
        <div className="py-24">
          <ProcessSnapshot />
        </div>
      </section>

      <section className="section pb-20">
        <div className="container">
          <InsightsPreview />
        </div>
      </section>
    </>
  )
}
