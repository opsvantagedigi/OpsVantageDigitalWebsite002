"use client"
import React from 'react'

const logos = ['/favicon.svg','/favicon.svg','/favicon.svg','/favicon.svg']

export default function MarqueeLogos(){
  return (
    <div className="overflow-hidden">
      <div className="marquee flex gap-8 items-center">
        {[...logos, ...logos].map((l,i)=> (
          <img key={i} src={l} alt={`Client logo ${i+1}`} width={56} height={48} className="h-12 opacity-80 grayscale" />
        ))}
      </div>
      <style jsx>{`
        .marquee{display:flex;animation:scroll 18s linear infinite}
        @keyframes scroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
      `}</style>
    </div>
  )
}
