'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { hero } from '@/lib/content'
import { HeatGlow } from '../HeatGlow'
import { GhostTexture } from '../GhostTexture'
import { Mark, type AssembleStyle } from '../Mark'
import { Button } from '../Button'

const DOCK_SIZE = 196
const SCALE = 2.2
const EASE = [0.22, 1, 0.36, 1] as const // smooth ease-out (fast to slow)
const DOCK_DUR = 1.3

type Phase = 'measuring' | 'assembling' | 'docking' | 'done'

/**
 * Hero: the mark assembles large and centred on the heat glow, then shrinks and
 * docks to its resting spot top-left, after which the headline copy fades up.
 * Static docked mark + visible copy under prefers-reduced-motion.
 */
export function Hero({
  minHeight = '100vh',
  assembleStyle = 'pop',
}: {
  minHeight?: string
  assembleStyle?: AssembleStyle
}) {
  const reduce = useReducedMotion()
  const hostRef = useRef<HTMLDivElement>(null)
  const markRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState<{ x: number; y: number } | null>(null)
  const [scale, setScale] = useState(SCALE)
  const [phase, setPhase] = useState<Phase>(reduce ? 'done' : 'measuring')

  useLayoutEffect(() => {
    if (reduce) return
    const mk = markRef.current
    const host = hostRef.current
    if (!mk || !host) return
    const r = mk.getBoundingClientRect()
    const hr = host.getBoundingClientRect()
    setOffset({
      x: hr.left + hr.width / 2 - (r.left + r.width / 2),
      y: hr.top + hr.height / 2 - (r.top + r.height / 2),
    })
    // keep the centred mark inside the viewport on small screens
    const maxCentre = Math.min(window.innerWidth * 0.72, window.innerHeight * 0.5)
    setScale(Math.min(SCALE, maxCentre / DOCK_SIZE))
  }, [reduce])

  useEffect(() => {
    if (reduce || !offset) return
    const raf = requestAnimationFrame(() => setPhase('assembling'))
    const t1 = setTimeout(() => setPhase('docking'), 2350)
    const t2 = setTimeout(() => setPhase('done'), 3700)
    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [offset, reduce])

  const centred = phase === 'assembling'
  const showText = phase === 'docking' || phase === 'done'

  const markAnimate =
    phase === 'measuring'
      ? { opacity: 0 }
      : centred && offset
        ? { x: offset.x, y: offset.y, scale, opacity: 1 }
        : { x: 0, y: 0, scale: 1, opacity: 1 }

  return (
    <HeatGlow
      className="relative flex items-center"
      noise={false}
      style={{ minHeight }}
      data-cursor="light"
    >
      <div ref={hostRef} style={{ position: 'absolute', inset: 0 }} aria-hidden />
      <GhostTexture corner="bottom-right" width="42%" opacity={0.07} color="#fff" />

      <div
        className="relative mx-auto w-full px-6 md:px-10"
        style={{ maxWidth: 'var(--maxw)', zIndex: 1, paddingTop: 120, paddingBottom: 80 }}
      >
        <div style={{ maxWidth: 880 }}>
          {reduce ? (
            <div style={{ width: DOCK_SIZE, height: DOCK_SIZE, marginBottom: 30 }}>
              <Mark variant="static" size={DOCK_SIZE} color="#fff" shadow />
            </div>
          ) : (
            <motion.div
              ref={markRef}
              initial={false}
              animate={markAnimate}
              transition={centred ? { duration: 0 } : { duration: DOCK_DUR, ease: EASE }}
              style={{
                width: DOCK_SIZE,
                height: DOCK_SIZE,
                marginBottom: 30,
                transformOrigin: 'center',
                willChange: 'transform',
              }}
            >
              {phase !== 'measuring' && (
                <Mark
                  variant="assemble"
                  assembleStyle={assembleStyle}
                  size={DOCK_SIZE}
                  color="#fff"
                  shadow
                  delay={0}
                />
              )}
            </motion.div>
          )}

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={reduce || showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            transition={{ duration: DOCK_DUR, ease: EASE }}
          >
            <p
              className="eyebrow"
              style={{ color: 'rgba(255,255,255,0.85)', marginBottom: 20 }}
            >
              {hero.eyebrow}
            </p>

            <h1
              className="font-display"
              style={{
                color: '#fff',
                fontSize: 'clamp(3.1rem, 8.4vw, 6.4rem)',
                lineHeight: 0.96,
                letterSpacing: '-2.5px',
                marginBottom: 26,
                textShadow: '0 2px 24px rgba(8, 30, 18, 0.22)',
              }}
            >
              {hero.h1Lines.map((line) => (
                <span key={line} style={{ display: 'block' }}>
                  {line}
                </span>
              ))}
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'clamp(1.05rem, 2.2vw, 1.4rem)',
                lineHeight: 1.5,
                maxWidth: 600,
                marginBottom: 38,
                textShadow: '0 1px 16px rgba(8, 30, 18, 0.18)',
              }}
            >
              {hero.lede.map((seg, i) =>
                seg.strong ? (
                  <strong key={i} style={{ fontWeight: 700, color: '#fff' }}>
                    {seg.text}
                  </strong>
                ) : (
                  <span key={i}>{seg.text}</span>
                )
              )}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              {hero.buttons.map((b) => (
                <Button key={b.label} href={b.href} variant={b.variant} size="lg">
                  {b.label}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </HeatGlow>
  )
}
