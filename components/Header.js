"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleToggle = () => setMenuOpen((open) => !open)
  const handleClose = () => setMenuOpen(false)

  return (
    <header className="ovd-header" id="header" role="banner">
      <div className="container" role="navigation" aria-label="Primary">
        <div className="nav__logo">
          <Link href="/" aria-label="Home">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="logo-link">
              <img src="/favicon.svg" alt="OpsVantage logo" className="logo" loading="eager" />
            </a>
          </Link>
          <span className="brand-text">OpsVantage</span>
        </div>

        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="main-nav"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>

        <nav
          id="main-nav"
          className={`nav${menuOpen ? ' nav--open' : ''}`}
          role="navigation"
          aria-label="Main Navigation"
        >
          <Link href="/services" className="nav__link" onClick={handleClose} tabIndex={0} role="menuitem">Services</Link>
          <Link href="/work" className="nav__link" onClick={handleClose} tabIndex={0} role="menuitem">Work</Link>
          <Link href="/about" className="nav__link" onClick={handleClose} tabIndex={0} role="menuitem">About</Link>
          <Link href="/contact" className="nav__link" onClick={handleClose} tabIndex={0} role="menuitem">Contact</Link>
          <Link href="/insights" className="nav__link" onClick={handleClose} tabIndex={0} role="menuitem">Insights</Link>
        </nav>
      </div>
    </header>
  )
}
