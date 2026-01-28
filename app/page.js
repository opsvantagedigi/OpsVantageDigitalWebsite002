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

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">What We Build</h2>
          <p className="text-gray-600">Productized systems that scale revenue, reduce churn, and optimize delivery.</p>
          <div className="mt-6"><BentoGrid /></div>
        </div>
      </section>

      <section className="py-8 bg-gray-900">
        <div className="container mx-auto px-6">
          <Counters />
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <MarqueeLogos />
        </div>
      </section>

      <ProcessSnapshot />

      <InsightsPreview />
    </>
  )
}
