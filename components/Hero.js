import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { Button } from './ui'

const HeroR3F = dynamic(() => import('./HeroR3F'), { ssr: false })

export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-ovd-blue via-ovd-green to-ovd-yellow rounded-b-lg py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="flex-1">
          <h1 className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent" style={{backgroundImage:'linear-gradient(90deg,#6ee7b7,#60a5fa)'}}>Revenue Acceleration Infrastructure</h1>
          <p className="mt-4 text-lg text-gray-100 max-w-xl">Governance-grade clarity, emotional safety, and technical excellence — productized for growth teams.</p>
          <div className="mt-6 flex gap-3">
            <Button variant="primary">Get a Revenue Readout</Button>
            <Button variant="ghost">Our Process</Button>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="w-full lg:w-2/5">
          <div className="bg-ovd-slate/60 rounded-md p-4">
            <HeroR3F />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
