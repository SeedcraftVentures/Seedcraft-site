'use client'

/**
 * Shape explorations (brief §7) — reusable components built on the slanted
 * brand shape, for the ventures / about / venture-detail pages. Not placed on
 * the v1 homepage; imagery is stubbed via <ShapeMedia> placeholders.
 */
import { useState } from 'react'
import { Card } from './Card'
import { ShapeMedia } from './ShapeMedia'
import type { PartId } from './mark-parts'

/* ------------------------------------------------------------------
   1. Slanted bento grid — mixed-size <Card> cells, never plain rects.
   ------------------------------------------------------------------ */
export interface BentoCell {
  span?: 1 | 2
  rowSpan?: 1 | 2
  content: React.ReactNode
  active?: boolean
  dark?: boolean
}

export function Bento({
  cells,
  dark = false,
  className = '',
}: {
  cells: BentoCell[]
  dark?: boolean
  className?: string
}) {
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gridAutoRows: 'minmax(160px, auto)',
        gap: 26,
      }}
    >
      {cells.map((c, i) => (
        <Card
          key={i}
          dark={c.dark ?? dark}
          active={c.active}
          style={{
            gridColumn: c.span === 2 ? 'span 2' : undefined,
            gridRow: c.rowSpan === 2 ? 'span 2' : undefined,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {c.content}
        </Card>
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------
   3. Stat block — big Cal Sans number in a slanted cell, accent tint.
   ------------------------------------------------------------------ */
export function StatBlock({
  value,
  label,
  accent = false,
  dark = false,
  media,
}: {
  value: string
  label: string
  accent?: boolean
  dark?: boolean
  media?: { part: PartId; src?: string }
}) {
  if (media) {
    return (
      <Card dark={dark} active={accent} style={{ overflow: 'hidden' }}>
        <ShapeMedia part={media.part} src={media.src} />
      </Card>
    )
  }
  return (
    <Card dark={dark} active={accent}>
      <div
        className="font-display"
        style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
          letterSpacing: '-2px',
          lineHeight: 1,
          color: dark ? '#fff' : 'var(--f)',
        }}
      >
        {value}
      </div>
      <div
        className="eyebrow"
        style={{ marginTop: 12, color: dark ? 'rgba(255,255,255,0.6)' : 'var(--ink)' }}
      >
        {label}
      </div>
    </Card>
  )
}

/* ------------------------------------------------------------------
   5. Card selector — a row of slanted cards as a chooser, one active.
   ------------------------------------------------------------------ */
export interface SelectorOption {
  key: string
  title: string
  desc?: string
}

export function CardSelector({
  options,
  defaultKey,
  dark = false,
  onChange,
}: {
  options: SelectorOption[]
  defaultKey?: string
  dark?: boolean
  onChange?: (key: string) => void
}) {
  const [active, setActive] = useState(defaultKey ?? options[0]?.key)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 18 }}>
      {options.map((o) => (
        <Card
          key={o.key}
          dark={dark}
          active={active === o.key}
          role="button"
          tabIndex={0}
          aria-pressed={active === o.key}
          onClick={() => {
            setActive(o.key)
            onChange?.(o.key)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              setActive(o.key)
              onChange?.(o.key)
            }
          }}
          style={{ cursor: 'pointer', flex: '1 1 200px', minWidth: 200 }}
        >
          <div
            className="font-display"
            style={{ fontSize: '1.4rem', letterSpacing: '-1px', color: dark ? '#fff' : 'var(--f)' }}
          >
            {o.title}
          </div>
          {o.desc && (
            <p
              style={{
                marginTop: 8,
                fontSize: 14,
                lineHeight: 1.5,
                color: dark ? 'rgba(255,255,255,0.7)' : 'var(--read)',
              }}
            >
              {o.desc}
            </p>
          )}
        </Card>
      ))}
    </div>
  )
}
