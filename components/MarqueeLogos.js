"use client"
import React from 'react'
import logo from '../assets/logo.png'
import icon from '../assets/icon.png'

const logos = [logo.src, icon.src, logo.src, icon.src]

export default function MarqueeLogos(){
  return (
    <div className="overflow-hidden">
      <div className="marquee flex gap-8 items-center">
        {[...logos, ...logos].map((l,i)=> (
          <img key={i} src={l} alt="client" className="h-12 opacity-80 grayscale" />
        ))}
      </div>
      <style jsx>{`
        .marquee{display:flex;animation:scroll 18s linear infinite}
        @keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>
    </div>
  )
}
