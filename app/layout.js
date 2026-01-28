import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'OpsVantage — Revenue Acceleration Infrastructure',
  description: 'Productized systems that scale predictable revenue for B2B SaaS and service businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Speed Insights component imported for integration; render where appropriate in production */}
        {/* <SpeedInsights /> */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
