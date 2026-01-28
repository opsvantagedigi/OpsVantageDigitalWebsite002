"use client"
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingBox(){
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.6))
  return (
    <mesh ref={ref} rotation={[0.4, 0.8, 0]}>
      <boxGeometry args={[2.2, 1.2, 0.6]} />
      <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.2} />
    </mesh>
  )
}

export default function HeroR3F(){
  return (
    <div className="hero">
      <div className="container hero__container">
        <div className="hero__data">
          <h1 className="hero__title">Revenue Acceleration Infrastructure</h1>
          <p className="hero__description">We build productized systems that scale predictable revenue for B2B SaaS and services companies.</p>
        </div>
        <div className="hero__image">
          <div style={{width:360, height:260}}>
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5,5,5]} />
              <RotatingBox />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  )
}
