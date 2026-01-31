import React from 'react'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="ovd-header" id="header" role="banner">
      <div className="container" role="navigation" aria-label="Primary">
        <div className="nav__logo">
          <Link href="/" aria-label="Home">
            <a className="logo-link">
              <img src="/logo.png" alt="OpsVantage logo" className="logo" loading="eager" />
            </a>
          </Link>
          <span className="brand-text">OpsVantage</span>
        </div>

        <nav className="nav" role="navigation" aria-label="Main Navigation">
          <Link href="/services" className="nav__link">Services</Link>
          <Link href="/work" className="nav__link">Work</Link>
          <Link href="/about" className="nav__link">About</Link>
          <Link href="/contact" className="nav__link">Contact</Link>
          <Link href="/insights" className="nav__link">Insights</Link>
        </nav>
      </div>
    </header>
  )
}
