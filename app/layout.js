import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: 'OpsVantage — Revenue Acceleration Infrastructure',
  description: 'Productized systems that scale predictable revenue for B2B SaaS and service businesses.',
}

// Provide favicon/icon metadata so browsers and crawlers see the correct file
export const icons = {
  icon: '/favicon.svg',
  shortcut: '/favicon.svg',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* Speed Insights integration removed to avoid build-time module error. Re-add after installing @vercel/speed-insights/next or using dynamic import. */}
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
