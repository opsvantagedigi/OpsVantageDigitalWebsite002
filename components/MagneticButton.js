import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function MagneticButton({ children }){
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotate = useTransform(x, [-100, 100], [-6,6])

  function handleMove(e){
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width/2)
    const dy = e.clientY - (rect.top + rect.height/2)
    x.set(dx/10)
    y.set(dy/10)
  }
  function handleLeave(){ x.set(0); y.set(0) }

  return (
    <motion.button
      className="button button--primary"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y, rotate }}
    >
      {children}
    </motion.button>
  )
}
