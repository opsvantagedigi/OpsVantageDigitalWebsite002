import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="inline-flex items-center gap-3">
            <Image src="/assets/icon.png" alt="OpsVantage icon" width={28} height={28} />
            <Image src="/assets/logo.png" alt="OpsVantage logo" width={140} height={36} />
          </div>
          <p className="mt-3 text-sm text-muted-2">Revenue acceleration infrastructure for growth-focused teams.</p>
          <p className="mt-4 text-xs text-muted-2">© {new Date().getFullYear()} OpsVantage Digital</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1 text-sm text-muted-2">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/marketing/services">Services</Link></li>
            <li><Link href="/marketing/insights">Insights</Link></li>
            <li><Link href="/marketing/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-sm text-muted-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service">Terms of Service</Link></li>
            <li><Link href="/cookies">Cookies</Link></li>
            <li><Link href="/disclaimer">Disclaimer</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Get Started</h4>
          <p className="text-sm text-muted-2">Move faster with governance-grade systems.</p>
          <div className="mt-4">
            <Link href="/marketing/contact"><a className="btn btn-gradient">Talk to Sales</a></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
