import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BentoGrid from '../components/BentoGrid'
import MagneticButton from '../components/MagneticButton'
import MarqueeLogos from '../components/MarqueeLogos'
import Counters from '../components/Counters'

const HeroR3F = dynamic(() => import('../components/HeroR3F'), { ssr: false })

export default function Home() {
  return (
    <>
      <Head>
        <title>OpsVantage — Revenue Acceleration Infrastructure</title>
        <meta name="description" content="Revenue acceleration infrastructure for growth-driven teams." />
      </Head>

      <Header />

      <main>
        <section>
          <HeroR3F />
        </section>

        <section style={{ padding: '3rem 0' }}>
          <div className="container">
            <h2 className="section__title">What We Build</h2>
            <p className="section__subtitle">Productized systems that scale revenue, reduce churn, and optimize delivery.</p>
            <BentoGrid />
          </div>
        </section>

        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <Counters />
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <MagneticButton>Get a Revenue Readout</MagneticButton>
            </div>
          </div>
        </section>

        <section style={{ padding: '2rem 0' }}>
          <div className="container">
            <MarqueeLogos />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
