"use client"

import { motion } from 'framer-motion'
import { BookOpen, BrainCircuit, Code2, Play, Sparkles, TerminalSquare, Zap } from 'lucide-react'
import ColorBends from '@/components/ColorBends'
import Sidebar from '@/components/Sidebar'

const conceptSections = [
  {
    title: 'Execution Context',
    description: 'Understand how JavaScript creates memory and runs your code step by step.',
    icon: BrainCircuit,
  },
  {
    title: 'Closures',
    description: 'See how functions retain access to their lexical environment.',
    icon: Code2,
  },
  {
    title: 'Promises',
    description: 'Visualize async flow with real-time state transitions.',
    icon: TerminalSquare,
  },
]

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D1117] text-[#E6EDF3]">
      <ColorBends />
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[280px_1fr] lg:px-8">
        <Sidebar />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-[#2D333B] bg-[#161B22]/90 p-8 shadow-[0_0_80px_rgba(88,166,255,0.12)] backdrop-blur xl:p-12"
        >
          <div className="mb-8 flex flex-wrap items-center gap-3 text-sm text-[#58A6FF]">
            <span className="rounded-full border border-[#58A6FF]/30 bg-[#58A6FF]/10 px-3 py-1">Premium JS Learning Platform</span>
            <span className="rounded-full border border-[#F7DF1E]/30 bg-[#F7DF1E]/10 px-3 py-1">Next.js 15 + TypeScript</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F7DF1E]/25 bg-[#F7DF1E]/10 px-3 py-1 text-sm text-[#F7DF1E]">
                <Sparkles size={16} />
                Interactive movie-style JavaScript education
              </div>
              <h1 className="mb-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                Learn JavaScript like a premium product experience.
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-[#8B949E]">
                From Execution Context to async patterns, every lesson feels cinematic, visual, and interview-ready.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-full bg-[#F7DF1E] px-5 py-3 font-semibold text-[#0D1117] transition hover:scale-[1.02]">
                  <Play size={18} />
                  Start with Execution Context
                </button>
                <button className="flex items-center gap-2 rounded-full border border-[#2D333B] bg-[#0D1117] px-5 py-3 font-semibold text-[#E6EDF3] transition hover:border-[#58A6FF]">
                  <BookOpen size={18} />
                  Explore Concepts
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="rounded-2xl border border-[#2D333B] bg-[#0D1117] p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#8B949E]">Current Concept</p>
                  <p className="text-xl font-semibold text-white">Execution Context</p>
                </div>
                <div className="rounded-full border border-[#58A6FF]/30 bg-[#58A6FF]/10 p-2 text-[#58A6FF]">
                  <Zap size={18} />
                </div>
              </div>
              <div className="space-y-4">
                {conceptSections.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-center gap-3 rounded-xl border border-[#2D333B] bg-[#161B22] p-3">
                      <div className="rounded-lg bg-[#F7DF1E]/10 p-2 text-[#F7DF1E]">
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-[#8B949E]">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
