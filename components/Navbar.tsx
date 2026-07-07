"use client"

import React from 'react'

export default function Navbar() {
  return (
    <header style={{ position: 'fixed', top: 16, left: 16, right: 16, zIndex: 50 }}>
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: '#0B1220', display: 'grid', placeItems: 'center', border: '1px solid rgba(255,255,255,0.03)' }}>N</div>
          <div style={{ fontWeight: 700, color: 'white' }}>JS Concepts</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input placeholder="Search" style={{ padding: '8px 12px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.03)', background: 'rgba(255,255,255,0.02)', color: 'white' }} />
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', color: 'white' }}>Progress</button>
            <button style={{ padding: '8px 12px', borderRadius: 999, background: 'rgba(255,255,255,0.06)', color: 'white' }}>Theme</button>
            <div style={{ width: 36, height: 36, borderRadius: 999, background: '#111827', display: 'grid', placeItems: 'center' }}>U</div>
          </div>
        </div>
      </nav>
    </header>
  )
}
