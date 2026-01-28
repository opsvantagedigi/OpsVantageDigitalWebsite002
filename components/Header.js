import React from 'react'

export default function Header(){
  return (
    <header className="ovd-header" id="header">
      <div className="container">
        <div className="nav__logo">
          <img src="/assets/logo.png" alt="logo" style={{height:24}} />
          <span className="brand-text">OpsVantage</span>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact" className="button button--primary">Contact</a>
        </nav>
      </div>
    </header>
  )
}
