import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between gap-4">
        <div>© {new Date().getFullYear()} OpsVantage Digital — Revenue Acceleration Infrastructure</div>
        <div style={{opacity:0.9}}>Legacy founded by Mother, co‑founded by Ajay & Marz.</div>
        <div className="text-right">Made with care — Data-driven strategies & reliable delivery</div>
      </div>
    </footer>
  )
}
