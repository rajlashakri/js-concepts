"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { sidebarTopics } from './sidebarTopics'

interface SidebarProps {
  selectedTopic: string
  onTopicSelect: (topic: string) => void
}

export default function Sidebar({ selectedTopic, onTopicSelect }: SidebarProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const router = useRouter()

  const getTopicSlug = (topic: string) =>
    topic
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

  const handleTopicSelect = (category: string, topic: string) => {
    onTopicSelect(topic)

    console.log('getTopicSlug(topic)',getTopicSlug(topic))
    router.push(`/learn/${category}/${getTopicSlug(topic)}`)
  }

  return (
    <aside className="hidden lg:flex lg:w-80 lg:flex-col lg:gap-4 lg:sticky lg:top-[7rem] lg:self-start">
      <div className="w-full rounded-3xl bg-[#050608] p-4 shadow-[0_20px_70px_rgba(0,0,0,0.45)] ring-1 ring-white/10">
        <div className="mb-3 px-2 text-sm font-semibold uppercase tracking-[0.26em] text-gray-500">Contents</div>
        <nav className="space-y-2">
          {sidebarTopics.map((section, idx) => {
            const isOpen = openIndex === idx
            return (
              <div key={section.title} className="overflow-hidden rounded-3xl border border-white/5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm font-medium text-white transition-colors duration-200 hover:bg-white/5"
                >
                  <span className="truncate">{section.title}</span>
                  <span className="text-xs text-gray-400">{isOpen ? '▾' : '▸'}</span>
                </button>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="overflow-hidden px-2"
                >
                  <div className="mt-2 flex flex-col gap-1 pb-3">
                    {section.topics.map((topic, topicIndex) => {
                      const isActive = topic === selectedTopic
                      return (
                        <button
                          key={`${section.title}-${topic}-${topicIndex}`}
                          type="button"
                          onClick={() => handleTopicSelect(section.category,topic)}
                          className={`flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm transition duration-200 ${isActive
                              ? 'bg-white/10 text-white shadow-inner'
                              : 'text-gray-200 hover:bg-white/5'
                            }`}
                        >
                          <span className="truncate">{topic}</span>
                          {/* {topic === 'Execution Context' ? (
                            <span className="ml-2 rounded-full bg-yellow-400/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-yellow-300">
                              Coming soon
                            </span>
                          ) : null} */}
                        </button>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
