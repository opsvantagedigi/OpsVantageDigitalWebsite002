import React from 'react'

export default function Footer(){
  return (
    <footer className="ovd-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} OpsVantage Digital — Revenue Acceleration Infrastructure</div>
        <div style={{opacity:0.85}}>Made with ❤️ — Data-driven strategies & reliable delivery</div>
      </div>
    </footer>
  )
}
