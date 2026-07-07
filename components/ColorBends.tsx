"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function FloatingBlob({ color = '#38bdf8', radius = 3, speed = 0.6, x = -3, y = 0, z = -6 }: any) {
  const ref = useRef<any>(null)
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed
    if (ref.current) {
      ref.current.position.x = x + Math.sin(t) * 1.2
      ref.current.position.y = y + Math.cos(t * 0.9) * 0.8
      ref.current.rotation.y = t * 0.2
    }
  })
  return (
    <mesh ref={ref} position={[x, y, z]}>
      <sphereGeometry args={[radius, 64, 64]} />
      <meshBasicMaterial color={color} transparent opacity={0.18} toneMapped={false} />
    </mesh>
  )
}

export default function ColorBends() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.6} />
        <FloatingBlob color="#38bdf8" radius={3.6} speed={0.45} x={-6} y={-1} z={-8} />
        <FloatingBlob color="#a78bfa" radius={4.2} speed={0.35} x={6} y={-2} z={-10} />
      </Canvas>
    </div>
  )
}
    // Single export kept: @react-three/fiber canvas implementation above
