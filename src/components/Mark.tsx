'use client'

import { useId } from 'react'
import { motion, useReducedMotion, type Variants } from 'framer-motion'
import { MARK_PARTS, MARK_VIEWBOX, LIT_ORDER, type PartId } from './mark-parts'

type Variant = 'static' | 'assemble' | 'loop' | 'lit'
export type AssembleStyle = 'snap' | 'flip' | 'spin' | 'pop' | 'cascade' | 'fan'

export interface MarkProps {
  variant?: Variant
  /** for `lit`/`assemble`: how many parts (in LIT_ORDER) are on */
  partsOn?: number
  /** explicit set of lit parts (overrides partsOn) — used by how-we-work */
  litParts?: PartId[]
  /** how the parts animate in for variant="assemble" */
  assembleStyle?: AssembleStyle
  /** fill the parts with the Heat Glow gradient instead of a flat colour */
  glow?: boolean
  /** marginal drop shadow for lift */
  shadow?: boolean
  color?: string
  size?: number | string
  className?: string
  /** delay before assemble begins (s) */
  delay?: number
  'aria-hidden'?: boolean
  title?: string
}

const EASE_ASSEMBLE = [0.16, 1, 0.3, 1] as const

/** Per-style hidden/shown variants for a single part. Chevron lands last with
 *  a touch of overshoot in every style. */
function assembleChild(
  style: AssembleStyle,
  from: { x: number; y: number },
  isChevron: boolean
): Variants {
  const shownBase = { x: 0, y: 0, scale: 1, opacity: 1, rotate: 0, rotateX: 0, rotateY: 0 }
  const overshoot = isChevron
    ? { type: 'spring' as const, stiffness: 110, damping: 13, mass: 1.2 }
    : { duration: 0.95, ease: EASE_ASSEMBLE }

  const hidden: Record<AssembleStyle, Record<string, number>> = {
    snap: { x: from.x, y: from.y, opacity: 0, scale: 0.9 },
    flip: { rotateX: -92, opacity: 0, y: -10 },
    spin: { rotate: -150, scale: 0.25, opacity: 0 },
    pop: { scale: 0, opacity: 0 },
    cascade: { y: -46, opacity: 0 },
    fan: { rotate: isChevron ? 26 : -22, x: from.x * 0.45, opacity: 0, scale: 0.85 },
  }

  return {
    hidden: hidden[style],
    shown: { ...shownBase, transition: overshoot },
  }
}

export function Mark({
  variant = 'static',
  partsOn = 4,
  litParts,
  assembleStyle = 'snap',
  glow = false,
  shadow = false,
  color = 'currentColor',
  size = 40,
  className,
  delay = 0,
  title,
  ...rest
}: MarkProps) {
  const reduce = useReducedMotion()
  const dim = typeof size === 'number' ? `${size}px` : size
  const gid = useId().replace(/:/g, '')

  const litSet = new Set<PartId>(
    litParts ?? LIT_ORDER.slice(0, Math.max(0, Math.min(4, partsOn)))
  )

  const glowDefs = glow ? (
    <defs>
      <linearGradient id={`glow-${gid}`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#5fb14a" />
        <stop offset="50%" stopColor="#2e7d32" />
        <stop offset="100%" stopColor="#0b3d0b" />
      </linearGradient>
    </defs>
  ) : null

  const common = {
    viewBox: MARK_VIEWBOX,
    width: dim,
    height: dim,
    fill: glow ? `url(#glow-${gid})` : color,
    className,
    role: title ? 'img' : 'presentation',
    'aria-hidden': rest['aria-hidden'] ?? !title,
    style: {
      display: 'block',
      overflow: 'visible',
      ...(shadow ? { filter: 'drop-shadow(0 4px 10px rgba(8, 30, 18, 0.28))' } : {}),
    } as React.CSSProperties,
  }

  // ---- lit: opacity/scale driven purely by props (CSS transition) ----
  if (variant === 'lit') {
    return (
      <svg {...common}>
        {glowDefs}
        {title ? <title>{title}</title> : null}
        {MARK_PARTS.map((p) => {
          const on = litSet.has(p.id)
          return (
            <path
              key={p.id}
              id={p.id}
              d={p.d}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                opacity: on ? 1 : 0.14,
                transform: on ? 'scale(1)' : 'scale(0.84)',
                transition: reduce
                  ? 'none'
                  : 'opacity 0.5s ease, transform 0.5s ease',
              }}
            />
          )
        })}
      </svg>
    )
  }

  // ---- static / reduced-motion: just render the mark ----
  if (variant === 'static' || reduce) {
    return (
      <svg {...common}>
        {glowDefs}
        {title ? <title>{title}</title> : null}
        {MARK_PARTS.map((p) => (
          <path key={p.id} id={p.id} d={p.d} />
        ))}
      </svg>
    )
  }

  // ---- assemble: parts animate in; chevron lands last ----
  if (variant === 'assemble') {
    const container: Variants = {
      hidden: {},
      shown: {
        transition: { staggerChildren: 0.22, delayChildren: delay },
      },
    }
    return (
      <motion.svg
        {...common}
        variants={container}
        initial="hidden"
        animate="shown"
        style={{ ...common.style, perspective: 700 }}
      >
        {glowDefs}
        {title ? <title>{title}</title> : null}
        {MARK_PARTS.map((p) => {
          const isChevron = p.id === 'chevron'
          const child = assembleChild(assembleStyle, p.from, isChevron)
          return (
            <motion.path
              key={p.id}
              id={p.id}
              d={p.d}
              variants={child}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'center',
                transformPerspective: 700,
              }}
            />
          )
        })}
      </motion.svg>
    )
  }

  // ---- loop: sequential flick loader ----
  return (
    <motion.svg {...common}>
      {glowDefs}
      {title ? <title>{title}</title> : null}
      {MARK_PARTS.map((p, i) => (
        <motion.path
          key={p.id}
          id={p.id}
          d={p.d}
          initial={{ opacity: 0.14, scale: 0.84 }}
          animate={{ opacity: [0.14, 1, 0.14], scale: [0.84, 1, 0.84] }}
          transition={{
            duration: 1.6,
            times: [0, 0.3, 1],
            repeat: Infinity,
            delay: i * 0.18,
            ease: 'easeInOut',
          }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        />
      ))}
    </motion.svg>
  )
}

/** A single part used alone as a UI atom (marker bar, forward chevron).
 *  Cropped tightly to the part's own bounding box so it reads as a clean glyph. */
export function MarkPartGlyph({
  part,
  color = 'currentColor',
  size = 14,
  className,
}: {
  part: PartId
  color?: string
  size?: number | string
  className?: string
}) {
  const p = MARK_PARTS.find((x) => x.id === part)!
  const [x, y, w, h] = p.box
  const pad = Math.max(w, h) * 0.04
  const vb = `${x - pad} ${y - pad} ${w + pad * 2} ${h + pad * 2}`
  const ratio = (w + pad * 2) / (h + pad * 2)
  const dim = typeof size === 'number' ? size : parseFloat(size)
  return (
    <svg
      viewBox={vb}
      width={ratio >= 1 ? dim : dim * ratio}
      height={ratio >= 1 ? dim / ratio : dim}
      fill={color}
      className={className}
      aria-hidden
      style={{ display: 'block', overflow: 'visible' }}
    >
      <path d={p.d} />
    </svg>
  )
}
