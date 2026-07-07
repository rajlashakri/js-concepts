"use client"

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, BrainCircuit, Code2, Sparkles, TerminalSquare, Zap } from 'lucide-react'
import ColorBends from '@/components/ColorBends'
import Sidebar from '@/components/Sidebar'
import { sidebarTopics } from '@/components/sidebarTopics'

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
  const [selectedTopic, setSelectedTopic] = useState('Execution Context')

  const selectedSection = useMemo(
    () => sidebarTopics.find((section) => section.topics.includes(selectedTopic)),
    [selectedTopic]
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0D1117] text-[#E6EDF3]">
      <ColorBends />
      <div className="hero-frame relative z-10 mx-3 sm:mx-4 lg:mx-6">
        <div className="hero-inner">
          <section className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[300px_1fr] lg:px-8 lg:py-16">
            <Sidebar selectedTopic={selectedTopic} onTopicSelect={setSelectedTopic} />

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="space-y-8 rounded-[32px] border border-white/10 bg-[#11151F]/95 p-4 shadow-[0_0_90px_rgba(88,166,255,0.12)] backdrop-blur-xl transition-all duration-300 ease-out sm:p-6 xl:p-8"
            >
              <div className="rounded-[32px] border border-white/10 bg-[#0B111A]/90 p-6 shadow-[0_0_40px_rgba(8,18,38,0.35)] transition-all duration-300">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F7DF1E]/25 bg-[#F7DF1E]/10 px-3 py-1 text-sm text-[#F7DF1E]">
                      <Sparkles size={16} />
                      Interactive JavaScript learning experience
                    </div>
                    <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                      {selectedTopic}
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg text-[#8B949E]">
                      Learn deeper about {selectedTopic.toLowerCase()} with curated examples, progress highlights, and a modern dashboard-style study flow.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-[#0D1117]/80 px-5 py-4 shadow-[0_15px_40px_rgba(0,0,0,0.18)]">
                    <p className="text-sm text-[#8B949E]">Active module</p>
                    <p className="mt-3 text-4xl font-semibold text-white">{selectedSection?.title ?? 'JavaScript Fundamentals'}</p>
                    <p className="text-sm text-[#6B7280]">{selectedSection?.topics.length ?? 0} topics available</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 xl:grid-cols-[1.4fr_0.6fr]">
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <div className="rounded-[28px] border border-white/10 bg-[#0C1421]/80 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#101828]/90">
                    <p className="text-sm text-[#8B949E]">Current pace</p>
                    <p className="mt-4 text-5xl font-semibold text-white">Fast</p>
                    <p className="mt-3 text-sm text-[#6B7280]">Keep the momentum going</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-[#0C1421]/80 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#101828]/90">
                    <p className="text-sm text-[#8B949E]">Retention</p>
                    <p className="mt-4 text-5xl font-semibold text-white">84%</p>
                    <p className="mt-3 text-sm text-[#6B7280]">Concept mastery score</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-[#0C1421]/80 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#101828]/90">
                    <p className="text-sm text-[#8B949E]">Next lesson</p>
                    <p className="mt-4 text-5xl font-semibold text-white">Closures</p>
                    <p className="mt-3 text-sm text-[#6B7280]">Ready when you are</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[28px] border border-white/10 bg-[#0C1421]/80 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#101828]/90">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#8B949E]">Current focus</p>
                        <p className="mt-2 text-2xl font-semibold text-white">{selectedTopic}</p>
                      </div>
                      <div className="rounded-full bg-[#111827] p-3 text-[#58A6FF]">
                        <Zap size={20} />
                      </div>
                    </div>
                    <div className="mt-6 rounded-3xl border border-white/10 bg-[#111827]/90 p-4">
                      <p className="text-xs uppercase tracking-[0.32em] text-[#64748B]">Lesson status</p>
                      <p className="mt-3 text-xl font-semibold text-white">In progress</p>
                      <div className="mt-4 h-2 rounded-full bg-[#111827]">
                        <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#58A6FF] to-[#a78bfa]" />
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-[#0C1421]/80 p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#101828]/90">
                    <div className="mb-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm text-[#8B949E]">Selected section</p>
                        <p className="mt-2 text-xl font-semibold text-white">{selectedSection?.title ?? 'JS Concepts'}</p>
                      </div>
                      <div className="rounded-full bg-[#111827] p-3 text-[#F7DF1E]">
                        <BookOpen size={20} />
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-[#9CA3AF]">
                      {selectedSection?.topics.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-center justify-between rounded-2xl bg-[#111827] px-4 py-3">
                          <span>{item}</span>
                          <span className="rounded-full bg-[#111827] px-2 py-1 text-[#58A6FF]">{item === selectedTopic ? 'Now' : 'Soon'}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  )
}
