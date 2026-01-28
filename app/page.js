import dynamic from 'next/dynamic'
import BentoGrid from '../components/BentoGrid'
import MagneticButton from '../components/MagneticButton'
import MarqueeLogos from '../components/MarqueeLogos'
import Counters from '../components/Counters'

const HeroR3F = dynamic(() => import('../components/HeroR3F'), { ssr: false })

export default function Page() {
  return (
    <>
      <section aria-label="Hero">
        <HeroR3F />
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-semibold">What We Build</h2>
          <p className="text-gray-600">Productized systems that scale revenue, reduce churn, and optimize delivery.</p>
          <div className="mt-6"><BentoGrid /></div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <Counters />
          <div className="mt-8 text-center">
            <MagneticButton>Get a Revenue Readout</MagneticButton>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <MarqueeLogos />
        </div>
      </section>
    </>
  )
}
