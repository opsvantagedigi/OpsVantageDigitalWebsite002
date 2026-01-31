import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <div className="inline-flex items-center gap-3">
            <Image src="/favicon.svg" alt="OpsVantage logo" width={140} height={36} />
          </div>
          <p className="mt-3 text-sm text-muted-2">Revenue acceleration infrastructure for growth-focused teams.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://linkedin.com/company/opsvantagedigital" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:text-ovd-blue focus-visible:outline-ovd-blue">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
            </a>
            <a href="https://twitter.com/opsvantage" target="_blank" rel="noopener" aria-label="Twitter/X" className="hover:text-ovd-blue focus-visible:outline-ovd-blue">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.162 5.656c-.793.352-1.645.59-2.54.698.913-.547 1.615-1.414 1.946-2.448-.855.508-1.803.877-2.81 1.077-.807-.86-1.958-1.398-3.234-1.398-2.448 0-4.434 1.986-4.434 4.434 0 .348.04.687.115 1.012-3.686-.185-6.953-1.951-9.137-4.634-.382.656-.601 1.418-.601 2.233 0 1.54.784 2.899 1.978 3.696-.728-.023-1.413-.223-2.012-.557v.056c0 2.152 1.531 3.946 3.566 4.353-.373.102-.765.157-1.17.157-.286 0-.561-.028-.831-.08.562 1.753 2.192 3.029 4.125 3.062-1.51 1.184-3.417 1.89-5.49 1.89-.357 0-.709-.021-1.056-.062 1.957 1.256 4.285 1.99 6.787 1.99 8.142 0 12.6-6.747 12.6-12.6 0-.192-.004-.384-.013-.574.865-.624 1.615-1.404 2.21-2.292z"/></svg>
            </a>
            <a href="https://github.com/opsvantage" target="_blank" rel="noopener" aria-label="GitHub" className="hover:text-ovd-blue focus-visible:outline-ovd-blue">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
          <p className="mt-4 text-xs text-muted-2">© {new Date().getFullYear()} OpsVantage Digital</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-sm text-muted-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about-us">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/work">Vision</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm text-muted-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
            <li><Link href="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Get Started</h4>
          <p className="text-sm text-muted-2">Move faster with governance-grade systems.</p>
          <div className="mt-4">
            <Link href="/contact"><a className="btn btn-gradient">Talk to Sales</a></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
