"use client"

import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { BookOpen, BrainCircuit, Code2, Sparkles, TerminalSquare, Zap } from 'lucide-react'
import ColorBends from '@/components/ColorBends'
import Sidebar from '@/components/Sidebar'
import { sidebarTopics } from '@/components/sidebarTopics'


export default function HomePage() {
  const pathname = usePathname()
  const [selectedTopic, setSelectedTopic] = useState('')

  useEffect(() => {
    if (pathname && pathname.startsWith('/learn/')) {
      const topicFromPath = pathname.replace('/learn/', '').replace(/-/g, ' ')
      const matchingTopic = sidebarTopics
        .flatMap((section) => section.topics)
        .find((topic) => topic.toLowerCase() === topicFromPath.toLowerCase())

      if (matchingTopic) {
        setSelectedTopic(matchingTopic)
      }
    }
  }, [pathname])

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
              {selectedTopic ? (
                <>
                  {/* Your existing topic UI */}
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="flex min-h-[70vh] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-[#0B111A]/90 p-10 text-center"
                >
                  <div className="mb-8 rounded-full bg-gradient-to-r from-[#58A6FF] to-[#A855F7] p-5 shadow-[0_0_50px_rgba(88,166,255,0.35)]">
                    <BrainCircuit size={60} className="text-white" />
                  </div>

                  <h1 className="text-5xl font-bold text-white">
                    Welcome to Code with Baba 🚀
                  </h1>

                  <p className="mt-6 max-w-3xl text-xl leading-9 text-[#94A3B8]">
                    Learn modern JavaScript in the easiest way possible.
                    Every concept is explained in
                    <span className="font-semibold text-[#58A6FF]">
                      {" "}English
                    </span>
                    ,
                    and
                    <span className="font-semibold text-[#F7DF1E]">
                      {" "}B@B@ Ki Bhasha
                    </span>

                    with real-world examples, interview questions, dry runs,
                    visual explanations, and best practices.
                  </p>

                  <div className="mt-10 grid gap-5 md:grid-cols-3">

                    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">
                      <Code2 className="mx-auto mb-4 text-[#58A6FF]" size={36} />
                      <h3 className="text-lg font-semibold text-white">
                        Beginner Friendly
                      </h3>
                      <p className="mt-2 text-sm text-[#94A3B8]">
                        Start from zero and master JavaScript step by step.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">
                      <BrainCircuit className="mx-auto mb-4 text-[#F7DF1E]" size={36} />
                      <h3 className="text-lg font-semibold text-white">
                        Interview Ready
                      </h3>
                      <p className="mt-2 text-sm text-[#94A3B8]">
                        Learn exactly what top companies ask in interviews.
                      </p>
                    </div>

                    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6">
                      <TerminalSquare className="mx-auto mb-4 text-[#A855F7]" size={36} />
                      <h3 className="text-lg font-semibold text-white">
                        Code & Practice
                      </h3>
                      <p className="mt-2 text-sm text-[#94A3B8]">
                        Understand concepts through examples, visualizations, and coding.
                      </p>
                    </div>

                  </div>

                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="mt-12 rounded-full bg-[#58A6FF]/10 px-8 py-4"
                  >
                    <p className="text-[#58A6FF] font-semibold">
                      👈 Select any topic from the sidebar to begin learning.
                    </p>
                  </motion.div>

                </motion.div>
              )}
            </motion.div>
          </section>
        </div>
      </div>
    </main>
  )
}
