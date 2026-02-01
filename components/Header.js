// Governance Note: This is the global header. It provides primary navigation and anchors the brand visually.
// Maintenance: Update navigation structure and branding as site evolves. Ensure accessibility and teachability.
// Legacy Alignment: Follows "Stewardship" and "Emotional Awareness" pillars. Comments clarify accessibility and user safety.
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem } from "./ui";
import { Button } from "./ui";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleClose = () => setMenuOpen(false);

  return (
    <header
      className="ovd-header sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur"
      id="header"
      role="banner"
    >
      <div
        className="container flex items-center justify-between py-3"
        role="navigation"
        aria-label="Primary"
      >
        <div className="flex items-center gap-3">
          <Link
            href="/"
            aria-label="Home"
            className="logo-link flex items-center gap-2"
          >
            <img
              src="/favicon.svg"
              alt="OpsVantage logo"
              className="logo h-8 w-8"
              loading="eager"
            />
            <span className="brand-text text-lg font-bold tracking-tight text-white">
              OpsVantage Digital
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuItem href="/about">About</NavigationMenuItem>
            <NavigationMenuItem href="/services">Services</NavigationMenuItem>
            <NavigationMenuItem href="/insights">Insights</NavigationMenuItem>
            <NavigationMenuItem href="/work">Vision</NavigationMenuItem>
            <NavigationMenuItem href="/contact">Contact</NavigationMenuItem>
          </NavigationMenu>
          <Button variant="primary" className="ml-4" as="a" href="/contact">
            Start Project
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          onClick={handleToggle}
        >
          <span
            className="block w-6 h-0.5 bg-white mb-1.5 rounded transition-transform"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            className={`block w-6 h-0.5 bg-white mb-1.5 rounded transition-opacity ${menuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className="block w-6 h-0.5 bg-white rounded transition-transform"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav
            id="mobile-nav"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-md md:hidden"
            role="navigation"
            aria-label="Mobile Navigation"
          >
            <NavigationMenu className="flex-col gap-6 text-2xl">
              <NavigationMenuItem href="/about" onClick={handleClose}>
                About
              </NavigationMenuItem>
              <NavigationMenuItem href="/services" onClick={handleClose}>
                Services
              </NavigationMenuItem>
              <NavigationMenuItem href="/insights" onClick={handleClose}>
                Insights
              </NavigationMenuItem>
              <NavigationMenuItem href="/work" onClick={handleClose}>
                Vision
              </NavigationMenuItem>
              <NavigationMenuItem href="/contact" onClick={handleClose}>
                Contact
              </NavigationMenuItem>
            </NavigationMenu>
            <Button
              variant="primary"
              className="mt-8 w-48"
              as="a"
              href="/contact"
              onClick={handleClose}
            >
              Start Project
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
