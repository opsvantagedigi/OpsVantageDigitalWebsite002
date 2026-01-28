'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Environment } from '@react-three/drei'

function BrandSphere() {
  return (
    <group>
      <Sphere args={[1.1, 64, 64]}>
        <meshStandardMaterial
          metalness={0.4}
          roughness={0.15}
          color="#00C853"
          emissive="#00C853"
          emissiveIntensity={0.35}
        />
      </Sphere>
      <Sphere args={[1.12, 64, 64]}>
        <meshStandardMaterial
          transparent
          opacity={0.18}
          color="#008BFF"
          emissive="#008BFF"
          emissiveIntensity={0.4}
        />
      </Sphere>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.4], fov: 40 }}
      className="h-[260px] w-full md:h-[320px] lg:h-[360px]"
    >
      <color attach="background" args={["#020617"]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#ffffff" />
      <spotLight position={[-4, -3, -2]} angle={0.6} intensity={0.9} color="#38bdf8" />
      <Environment preset="city" />

      <BrandSphere />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.6}
      />
    </Canvas>
  )
}
