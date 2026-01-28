"use client"
import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from './ui'

const HeroR3F = dynamic(() => import('./HeroR3F'), { ssr: false })

export default function Hero(){
  return (
    <section className="section">
      <div className="container flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1">
          <h1 className="text-4xl lg:text-6xl font-extrabold orbitron-heading heading-gradient">Revenue Acceleration Infrastructure</h1>
          <p className="mt-4 text-lg text-muted-2 lead">Governance-grade clarity, emotional safety, and technical excellence — productized for growth teams.</p>
          <div className="mt-6 flex gap-3">
            <Button variant="primary">Get a Revenue Readout</Button>
            <Button variant="ghost">Our Process</Button>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="w-full lg:w-2/5">
          <div className="card-surface p-4">
            <HeroR3F />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
