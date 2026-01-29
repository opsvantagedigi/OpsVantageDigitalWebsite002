import React from 'react'
import Link from 'next/link'

export default function Header(){
  return (
    <header className="ovd-header" id="header" role="banner">
      <div className="container" role="navigation" aria-label="Primary">
        <div className="nav__logo">
          <Link href="/" aria-label="Home">
            <a className="logo-link">
              <img src="/logo.png" alt="OpsVantage logo" className="logo" width="140" height="36" loading="eager" />
            </a>
          </Link>
          <span className="brand-text">OpsVantage</span>
        </div>

        <nav className="nav" role="navigation" aria-label="Main Navigation">
          <a href="#services" className="nav__link">Services</a>
          <a href="#work" className="nav__link">Work</a>
          <a href="#about" className="nav__link">About</a>
          <a href="#contact" className="button button--primary nav__link">Contact</a>
        </nav>
      </div>
    </header>
  )
}
