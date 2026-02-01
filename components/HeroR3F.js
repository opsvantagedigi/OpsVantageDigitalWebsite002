"use client";
import React from "react";
import dynamic from "next/dynamic";

// Load the heavy R3F bundle client-side only and show a placeholder while loading
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => <div className="hero-placeholder" aria-hidden="true" />,
});

export default function HeroR3F() {
  return (
    <section className="hero" role="region" aria-label="Hero">
      <div className="container hero__container">
        <div className="hero__data">
          <h1 className="hero__title">Revenue Acceleration Infrastructure</h1>
          <p className="hero__description">
            We build productized systems that scale predictable revenue for B2B
            SaaS and services companies.
          </p>
        </div>
        <div className="hero__image" aria-hidden="false">
          <div className="hero-3d-size">
            <Hero3D />
          </div>
        </div>
      </div>
    </section>
  );
}
