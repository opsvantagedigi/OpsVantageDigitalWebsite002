import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BentoGrid from '../components/BentoGrid'
import MagneticButton from '../components/MagneticButton'
import MarqueeLogos from '../components/MarqueeLogos'
import Counters from '../components/Counters'

const HeroR3F = dynamic(() => import('../components/HeroR3F'), { ssr: false })

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <HeroR3F />
        </section>

        <section className="py-12">
          <div className="ovd-container">
            <h2 className="section__title">What We Build</h2>
            <p className="section__subtitle">Productized systems that scale revenue, reduce churn, and optimize delivery.</p>
            <BentoGrid />
          </div>
        </section>

        <section className="py-8">
          <div className="ovd-container">
            <Counters />
            <div className="mt-8 text-center">
              <MagneticButton>Get a Revenue Readout</MagneticButton>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="ovd-container">
            <MarqueeLogos />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
