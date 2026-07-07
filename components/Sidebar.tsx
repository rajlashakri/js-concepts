"use client"

import React from 'react'

export default function Sidebar() {
  return (
    <aside style={{ width: 260, padding: 18 }}>
      <div style={{ fontWeight: 700, marginBottom: 12 }}>Concepts</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
        <li style={{ padding: 10, borderRadius: 8, background: 'rgba(255,255,255,0.02)' }}>> Execution</li>
        <li style={{ padding: 10, borderRadius: 8 }}>Hoisting</li>
        <li style={{ padding: 10, borderRadius: 8 }}>Scope</li>
        <li style={{ padding: 10, borderRadius: 8 }}>Closure</li>
        <li style={{ padding: 10, borderRadius: 8 }}>Promise</li>
      </ul>
    </aside>
  )
}
