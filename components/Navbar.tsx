"use client"


import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { sidebarTopics } from "@/components/sidebarTopics"

export default function Navbar() {
  const router = useRouter()

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)

  const allTopics = sidebarTopics.flatMap((section) =>
    section.topics.map((topic) => ({
      title: topic,
      category: section.category,

      slug: topic
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, ""),
    }))
  )

  const filtered = useMemo(() => {
    if (!query.trim()) return []

    return allTopics.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
  }, [query])

  const handleSelect = (item: {
    category: string
    slug: string
  }) => {
    setQuery("")
    setOpen(false)

    router.push(
      `/learn/${item.category}/${item.slug}`
    )
  }
  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-auto bg-[#02040b] border-b border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.16)]">
      <div className="mx-auto flex max-w-7xl px-4 py-4 sm:px-6">
        <nav className="flex w-full flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/5 bg-[#0B1220] px-4 py-3 transition-all duration-300 shadow-lg sm:px-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-[#0B1220] border border-white/5 text-base font-bold text-white">N</div>
            <div className="text-sm font-semibold text-white">Code With B@B@</div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative w-80">

              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setOpen(true)
                }}
                placeholder="Search JS Concept..."
                className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white outline-none"
              />

              {open && filtered.length > 0 && (
                <div className="absolute mt-2 w-full overflow-hidden rounded-xl border border-white/10 bg-[#111827] shadow-xl">

                  {filtered.map((item) => (
                    <button
                      key={item.slug}
                      onClick={() => handleSelect(item)}
                      className="flex w-full flex-col px-4 py-3 text-left hover:bg-white/10"
                    >
                      <span className="text-white">
                        {item.title}
                      </span>

                      <span className="text-xs text-gray-400">
                        {item.category}
                      </span>
                    </button>
                  ))}

                </div>
              )}

            </div>
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
