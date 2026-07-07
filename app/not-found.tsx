import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0D1117] px-6 text-[#E6EDF3]">
      <div className="w-full max-w-lg rounded-[28px] border border-[#2D333B]/80 bg-[#161B22]/90 p-8 text-center shadow-[0_0_90px_rgba(88,166,255,0.12)] backdrop-blur-xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#58A6FF]">404</p>
        <h1 className="mb-3 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mb-6 text-[#8B949E]">The page you’re looking for doesn’t exist, or it may have moved.</p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-[#F7DF1E] px-5 py-3 font-semibold text-[#0D1117] transition-all duration-300 hover:-translate-y-1"
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
