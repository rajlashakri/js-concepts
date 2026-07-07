import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JS Concepts Studio',
  description: 'Premium interactive JavaScript learning platform',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
