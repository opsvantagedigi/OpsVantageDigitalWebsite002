'use client'


import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Environment } from '@react-three/drei'
import { useRef } from 'react'

// Brand colors
const OVD_COLORS = {
  blue: '#0033A0',
  green: '#00A676',
  yellow: '#F2C94C',
  purple: '#6A0DAD',
  midnight: '#0A0F1F',
}

// Central core sphere with animated gradient glow
function CoreSphere() {
  return (
    <Sphere args={[1.1, 64, 64]}>
      <meshPhysicalMaterial
        color={OVD_COLORS.blue}
        roughness={0.18}
        metalness={0.55}
        clearcoat={0.7}
        clearcoatRoughness={0.2}
        iridescence={0.18}
        emissive={OVD_COLORS.green}
        emissiveIntensity={0.22}
      />
    </Sphere>
  )
}

// Orbiting spheres (nodes/stewardship)
function OrbitingSpheres() {
  const group = useRef()
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.35
    }
  })
  // 4 orbiting spheres, each with unique color and orbit
  const orbits = [
    { color: OVD_COLORS.yellow, radius: 1.55, speed: 1.0, y: 0.18 },
    { color: OVD_COLORS.green, radius: 1.7, speed: 0.7, y: -0.22 },
    { color: OVD_COLORS.purple, radius: 1.85, speed: 1.3, y: 0.32 },
    { color: OVD_COLORS.blue, radius: 2.0, speed: 0.9, y: -0.35 },
  ]
  return (
    <group ref={group}>
      {orbits.map((o, i) => (
        <Sphere key={i} args={[0.18, 32, 32]} position={[o.radius, o.y, 0]}>
          <meshPhysicalMaterial
            color={o.color}
            metalness={0.6}
            roughness={0.18}
            emissive={o.color}
            emissiveIntensity={0.32}
            transparent
            opacity={0.92}
          />
        </Sphere>
      ))}
    </group>
  )
}

// Subtle glow ring (brand gradient)
function GlowRing() {
  // Use a thin, semi-transparent torus for a glow effect
  return (
    <mesh rotation-x={Math.PI / 2} position={[0, -1.05, 0]}>
      <torusGeometry args={[1.25, 0.045, 32, 128]} />
      <meshBasicMaterial
        color={OVD_COLORS.yellow}
        transparent
        opacity={0.22}
      />
    </mesh>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3.4], fov: 40 }}
      className="h-[260px] w-full md:h-[320px] lg:h-[360px]"
    >
      <color attach="background" args={[OVD_COLORS.midnight]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 4, 5]} intensity={1.18} color="#fff" />
      <spotLight position={[-4, -3, -2]} angle={0.6} intensity={0.7} color={OVD_COLORS.blue} />
      <Environment preset="city" />

      <CoreSphere />
      <GlowRing />
      <OrbitingSpheres />

      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.55}
      />
    </Canvas>
  )
}
