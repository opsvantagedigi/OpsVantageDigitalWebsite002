import React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuItem, NavigationMenuDropdown } from '../ui'
import { Button } from '../ui'

export default function Header(){
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <a className="inline-flex items-center gap-2 no-underline">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg,#6ee7b7,#60a5fa)'}}>OpsVantage</span>
            </a>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuItem href="/marketing/services">Services</NavigationMenuItem>
            <NavigationMenuItem href="/marketing/work">Work</NavigationMenuItem>
            <NavigationMenuItem href="/marketing/insights">Insights</NavigationMenuItem>
            <NavigationMenuItem href="/marketing/about">About</NavigationMenuItem>
          </NavigationMenu>
          <Link href="/marketing/contact">
            <a><Button variant="primary">Contact</Button></a>
          </Link>
        </div>

        <div className="md:hidden">
          <details className="relative">
            <summary className="p-2 rounded-md">Menu</summary>
            <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg p-2">
              <nav className="flex flex-col gap-2">
                <a href="/marketing/services" className="px-2 py-1">Services</a>
                <a href="/marketing/work" className="px-2 py-1">Work</a>
                <a href="/marketing/insights" className="px-2 py-1">Insights</a>
                <a href="/marketing/about" className="px-2 py-1">About</a>
                <a href="/marketing/contact" className="px-2 py-1">Contact</a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  )
}
