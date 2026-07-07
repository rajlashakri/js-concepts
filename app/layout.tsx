import './globals.css'
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JS Concepts Studio',
  description: 'Premium interactive JavaScript learning platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
      </body>
    </html>
  )
}
