"use client"

import React from 'react'

const topics = [
  { label: 'Execution', active: true },
  { label: 'Hoisting' },
  { label: 'Scope' },
  { label: 'Closure' },
  { label: 'Promise' },
]

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:gap-4">
      <div className="glass-panel p-6">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b949e]">Concepts</div>
        <div className="space-y-2">
          {topics.map((topic) => (
            <button
              key={topic.label}
              className={`w-full rounded-2xl border px-4 py-3 text-left transition ${
                topic.active
                  ? 'border-[color:var(--secondary)] bg-[rgba(88,166,255,0.12)] text-white shadow-soft-ring'
                  : 'border-[color:var(--border)] bg-[rgba(255,255,255,0.02)] text-[#cbd5e1] hover:border-[color:var(--secondary)] hover:bg-[rgba(88,166,255,0.08)]'
              }`}
            >
              <span className="text-sm font-semibold">{topic.label}</span>
              {topic.active ? <span className="ml-2 text-[0.8rem] text-[#58A6FF]">›</span> : null}
            </button>
          ))}
        </div>
      </div>
      <div className="glass-panel p-6">
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#8b949e]">Lesson Progress</div>
        <div className="h-2 rounded-full bg-[rgba(255,255,255,0.08)]">
          <div className="h-full rounded-full bg-gradient-to-r from-[#58A6FF] to-[#a78bfa]" style={{ width: '40%' }} />
        </div>
        <p className="mt-3 text-sm text-[#94a3b8]">Execution Context is selected. Keep going to unlock the next concept.</p>
      </div>
    </aside>
  )
}
