'use client'

import { useState } from 'react'
import { Hero } from '../sections/Hero'
import { Button } from '../Button'
import type { AssembleStyle } from '../Mark'

const STYLES: { key: AssembleStyle; label: string }[] = [
  { key: 'snap', label: 'Snap' },
  { key: 'flip', label: 'Flip' },
  { key: 'spin', label: 'Spin' },
  { key: 'pop', label: 'Pop' },
  { key: 'cascade', label: 'Cascade' },
  { key: 'fan', label: 'Fan' },
]

export function HeroMotionLab() {
  const [style, setStyle] = useState<AssembleStyle>('pop')
  const [run, setRun] = useState(0)

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 10,
          padding: '16px 18px',
          background: 'var(--d)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        {STYLES.map((s) => (
          <Button
            key={s.key}
            variant={style === s.key ? 'cream' : 'ghost'}
            size="sm"
            onClick={() => {
              setStyle(s.key)
              setRun((r) => r + 1)
            }}
          >
            {s.label}
          </Button>
        ))}
        <span style={{ marginLeft: 'auto' }}>
          <Button variant="ghost" size="sm" onClick={() => setRun((r) => r + 1)}>
            Replay ↻
          </Button>
        </span>
      </div>

      <Hero key={`${style}-${run}`} assembleStyle={style} minHeight="74vh" />
    </div>
  )
}
