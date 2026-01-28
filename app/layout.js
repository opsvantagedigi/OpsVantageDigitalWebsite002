import './globals.css'

export const metadata = {
  title: 'OpsVantage — Revenue Acceleration Infrastructure',
  description: 'Productized systems that scale predictable revenue for B2B SaaS and service businesses.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
