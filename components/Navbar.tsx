"use client"


import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { sidebarTopics } from "@/components/sidebarTopics"

export default function Navbar() {
  const router = useRouter()

  const [query, setQuery] = useState("")
  const [open, setOpen] = useState(false)
  const [themeOpen, setThemeOpen] = useState(false)

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

  const progressPage = () => {
    router.push("/progress")
  }


  return (
    <>
      {themeOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">

          <div className="
          w-[320px]
          rounded-2xl
          border border-white/10
          bg-[#111827]
          p-6
          shadow-2xl
        ">

            <div className="flex items-center justify-between mb-5">

              <h2 className="text-lg font-semibold text-white">
                Choose Theme
              </h2>

              <button
                onClick={() => setThemeOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>

            </div>


            <div className="space-y-3">

              <button
                className="
                w-full rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                text-left
                text-white
                hover:bg-white/10
              "
              >
                🌙 Dark
              </button>


              <button
                className="
                w-full rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                text-left
                text-white
                hover:bg-white/10
              "
              >
                ☀️ Light
              </button>


              <button
                className="
                w-full rounded-xl
                border border-white/10
                bg-white/5
                px-4 py-3
                text-left
                text-white
                hover:bg-white/10
              "
              >
                💻 System
              </button>

            </div>

          </div>

        </div>
      )}

      <header className="fixed inset-x-0 top-0 z-50 pointer-events-auto bg-[#02040b] border-b border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.16)]">

        <div className="mx-auto flex max-w-7xl px-4 py-4 sm:px-6">

          <nav className="flex w-full flex-wrap items-center justify-between gap-3 rounded-3xl border border-white/5 bg-[#0B1220] px-4 py-3 transition-all duration-300 shadow-lg sm:px-5">

            <div className="flex items-center gap-3" onClick={() => router.push("/")}>

              <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-[#111827]">
                <img
                  src="/vectorized-vectorized.svg"
                  alt="Code With B@B@ Logo"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <div className="text-sm font-semibold text-white">
                Code With B@B@
              </div>

            </div>


            <div className="flex flex-wrap items-center gap-3">

              <div className="relative w-80">

                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value)
                    setOpen(true)
                  }}
                  placeholder="What do you want to learn today?"
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


              {/* <div className="flex flex-wrap items-center gap-2">

              <button
                onClick={() => progressPage()}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                Progress
              </button>


              <button
                onClick={() => setThemeOpen(true)}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-white/10"
              >
                Theme
              </button>


              <div className="grid h-9 w-9 place-items-center rounded-full bg-[#111827] text-sm text-white">
                U
              </div>

            </div> */}

            </div>

          </nav>

        </div>

      </header>
    </>
  )
}