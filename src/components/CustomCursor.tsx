'use client'

import { useEffect, useRef } from 'react'
import { MARK_PARTS, MARK_VIEWBOX } from './mark-parts'

const LIGHT = '#ffffff' // over green / dark surfaces
const DARK = '#16562f' // over light surfaces (forest green)

/**
 * Custom cursor: the mark follows the pointer and recolours by the surface it's
 * over — white on green/dark sections (tagged data-cursor="light"), forest
 * green on light ones. Fine-pointer devices only; native cursor hidden while
 * active; instant follow under reduced motion.
 */
export function CustomCursor() {
  const outer = useRef<HTMLDivElement>(null)
  const svg = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.matchMedia('(pointer: fine)').matches) return
    const o = outer.current
    const s = svg.current
    if (!o || !s) return

    const root = document.documentElement
    root.classList.add('has-custom-cursor')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y
    let raf = 0
    let color = DARK

    const apply = () => {
      o.style.transform = `translate(${x}px, ${y}px)`
    }
    const recolour = (cx: number, cy: number) => {
      const el = document.elementFromPoint(cx, cy)
      const tag = el?.closest('[data-cursor]')?.getAttribute('data-cursor')
      const next = tag === 'light' ? LIGHT : DARK
      if (next !== color) {
        color = next
        s.style.fill = color
      }
    }
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      o.style.opacity = '1'
      recolour(tx, ty)
      if (reduce) {
        x = tx
        y = ty
        apply()
      }
    }
    const loop = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      apply()
      raf = requestAnimationFrame(loop)
    }
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element &&
      !!t.closest('a, button, [role="button"], input, textarea, select, label')
    const grow = (e: PointerEvent) => {
      if (isInteractive(e.target)) s.style.transform = 'scale(1.9)'
    }
    const shrink = (e: PointerEvent) => {
      if (isInteractive(e.target)) s.style.transform = 'scale(1)'
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', grow)
    document.addEventListener('pointerout', shrink)
    if (!reduce) raf = requestAnimationFrame(loop)

    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', grow)
      document.removeEventListener('pointerout', shrink)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={outer}
      aria-hidden
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        opacity: 0,
        transition: 'opacity 0.25s',
        willChange: 'transform',
      }}
    >
      <svg
        ref={svg}
        viewBox={MARK_VIEWBOX}
        width={26}
        height={26}
        style={{
          display: 'block',
          fill: DARK,
          marginLeft: -13,
          marginTop: -13,
          transformOrigin: 'center',
          transition: 'transform 0.18s ease, fill 0.2s ease',
        }}
      >
        {MARK_PARTS.map((p) => (
          <path key={p.id} d={p.d} />
        ))}
      </svg>
    </div>
  )
}
