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
