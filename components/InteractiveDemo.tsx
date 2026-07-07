"use client"

import React from 'react'

export default function InteractiveDemo() {
  const code = "var a = 10\nfunction greet(){\n  console.log('hello')\n}\n\ngreet()"
  return (
    <section style={{ display: 'grid', gridTemplateColumns: '1fr 200px 200px', gap: 12, marginTop: 24 }}>
      <div style={{ background: '#020617', padding: 12, borderRadius: 10 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>JS Code</div>
        <pre style={{ margin: 0 }}>{code}</pre>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.02)', padding: 12, borderRadius: 10 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Memory</div>
        <div>a</div>
        <div>greet()</div>
      </div>
      <div style={{ background: 'rgba(255,255,255,0.02)', padding: 12, borderRadius: 10 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>Call Stack</div>
        <div>Global</div>
        <div>greet()</div>
      </div>
    </section>
  )
}
