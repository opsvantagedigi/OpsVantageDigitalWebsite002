"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingBox() {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += delta * 0.6));
  return (
    <mesh ref={ref} rotation={[0.4, 0.8, 0]}>
      <boxGeometry args={[2.2, 1.2, 0.6]} />
      <meshStandardMaterial color="#2563eb" metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <RotatingBox />
      </Canvas>
    </div>
  );
}
