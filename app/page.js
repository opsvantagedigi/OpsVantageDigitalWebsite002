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

      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">What We Build</h2>
          <p className="text-muted-2">Productized systems that scale revenue, reduce churn, and optimize delivery.</p>
          <div className="mt-6"><BentoGrid /></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Counters />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <MarqueeLogos />
        </div>
      </section>

      <ProcessSnapshot />

      <InsightsPreview />
    </>
  )
}
