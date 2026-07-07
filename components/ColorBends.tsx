"use client"

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function FloatingBlob({ color = '#38bdf8', radius = 3, speed = 0.6, x = -3, y = 0, z = -6 }: any) {
  const ref = useRef<any>()
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
import { motion } from 'framer-motion'

export default function ColorBends() {
  return (
    <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', zIndex: 0, pointerEvents: 'none' }}>
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], rotate: [0, 12, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          left: '-80px',
          top: '-120px',
          borderRadius: '38% 62% 63% 37% / 41% 44% 56% 59%',
          background: 'radial-gradient(circle at 30% 30%, rgba(56,189,248,0.55), rgba(56,189,248,0.08) 45%, transparent 70%)',
          filter: 'blur(20px)',
          boxShadow: '0 0 120px rgba(56,189,248,0.25)',
        }}
      />
      <motion.div
        animate={{ x: [0, -100, 60, 0], y: [0, 90, -50, 0], rotate: [0, -15, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          right: '-120px',
          bottom: '-180px',
          borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
          background: 'radial-gradient(circle at 40% 40%, rgba(167,139,250,0.6), rgba(167,139,250,0.08) 45%, transparent 70%)',
          filter: 'blur(22px)',
          boxShadow: '0 0 140px rgba(167,139,250,0.25)',
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.08, 0.95, 1], opacity: [0.6, 0.9, 0.65, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          width: '280px',
          height: '280px',
          left: '25%',
          bottom: '8%',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 50% 50%, rgba(34,211,238,0.45), transparent 70%)',
          filter: 'blur(18px)',
        }}
      />
    </div>
  )
}
