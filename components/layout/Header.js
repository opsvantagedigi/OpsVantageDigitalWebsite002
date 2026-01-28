"use client"
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import icon from '../../assets/icon.png'
import logo from '../../assets/logo.png'

export default function Header(){
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const servicesRef = useRef(null)

  useEffect(()=>{
    function onDoc(e){
      if(!servicesRef.current) return
      if(servicesRef.current.contains(e.target)) return
      setServicesOpen(false)
    }
    function onKey(e){ if(e.key === 'Escape') setServicesOpen(false) }
    document.addEventListener('click', onDoc)
    document.addEventListener('keydown', onKey)
    return ()=>{
      document.removeEventListener('click', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  },[])

  return (
    <header className="fixed-header" role="banner">
      <div className="container flex items-center justify-between py-3">
        <div className="logo-container">
          <Link href="/" aria-label="Home">
            <div className="inline-flex items-center gap-3">
              <Image src={icon} alt="OpsVantage icon" width={28} height={28} className="logo-icon" />
              <Image src={logo} alt="OpsVantage logo" width={140} height={36} className="logo-image" />
            </div>
          </Link>
        </div>

        <nav className="main-nav hidden md:block" role="navigation" aria-label="Primary">
          <ul className="flex items-center nav-gap">
            <li><Link href="/">Home</Link></li>
            <li ref={servicesRef} onMouseEnter={()=>setServicesOpen(true)} onMouseLeave={()=>setServicesOpen(false)}>
              <button aria-haspopup="true" aria-expanded={servicesOpen} onClick={()=>setServicesOpen((v)=>!v)} onKeyDown={(e)=>{ if(e.key==='Escape') setServicesOpen(false) }} className="text-muted-2">Services</button>
              <ul className={`dropdown-menu ${servicesOpen ? 'open' : ''}`} role="menu">
                <li role="none"><Link href="/marketing/services">Advisory & Ops</Link></li>
                <li role="none"><Link href="/marketing/work">Case Studies</Link></li>
                <li role="none"><Link href="/marketing/insights">Insights</Link></li>
              </ul>
            </li>
            <li className="ml-6"><Link href="/marketing/about">About</Link></li>
            <li className="ml-6"><Link href="/marketing/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button aria-expanded={mobileOpen} aria-controls="mobile-menu" onClick={()=>setMobileOpen(v=>!v)} className="p-2 rounded-md text-muted-2">Menu</button>
        </div>

        <div id="mobile-menu" className={`mobile-panel ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          <div className="card-surface p-4 mobile-panel-inner">
            <nav className="flex flex-col gap-3">
              <Link href="/">Home</Link>
              <details>
                <summary>Services</summary>
                <div className="flex flex-col pl-4">
                  <Link href="/marketing/services">Advisory & Ops</Link>
                  <Link href="/marketing/work">Case Studies</Link>
                  <Link href="/marketing/insights">Insights</Link>
                </div>
              </details>
              <Link href="/marketing/about">About</Link>
              <Link href="/marketing/contact">Contact</Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
