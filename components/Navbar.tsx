"use client"

import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 pointer-events-auto">
      <div className="mx-auto flex max-w-7xl px-4 sm:px-6">
        <nav className="flex w-full flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#0B1220] border border-white/5 text-base font-bold text-white">N</div>
            <div className="text-sm font-semibold text-white">JS Concepts</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <input
              placeholder="Search"
              className="min-w-[200px] rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-[#58A6FF] focus:bg-white/10"
            />
            <div className="flex flex-wrap items-center gap-2">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/10">
                Progress
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/10">
                Theme
              </button>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-sm text-white">U</div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
