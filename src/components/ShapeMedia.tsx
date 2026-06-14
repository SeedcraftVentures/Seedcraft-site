'use client'

import { useId } from 'react'
import { MARK_PARTS, type PartId } from './mark-parts'

/**
 * Image-through-shape: clips a photo/video frame to one of the mark's parts,
 * turning the logo parts into media frames. Imagery isn't final yet, so this
 * stubs with a placeholder gradient when no `src` is given.
 */
export function ShapeMedia({
  part = 'barTop',
  src,
  alt = '',
  className = '',
  style,
}: {
  part?: PartId
  src?: string
  alt?: string
  className?: string
  style?: React.CSSProperties
}) {
  const id = useId().replace(/:/g, '')
  const clipId = `clip-${id}`
  const p = MARK_PARTS.find((x) => x.id === part)!
  const [bx, by, bw, bh] = p.box
  const pad = Math.max(bw, bh) * 0.03
  const vb = `${bx - pad} ${by - pad} ${bw + pad * 2} ${bh + pad * 2}`

  return (
    <svg
      viewBox={vb}
      className={className}
      style={{ display: 'block', width: '100%', height: 'auto', ...style }}
      role={alt ? 'img' : 'presentation'}
      aria-label={alt || undefined}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={p.d} />
        </clipPath>
        {!src && (
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5fb14a" />
            <stop offset="55%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#0b3d0b" />
          </linearGradient>
        )}
      </defs>
      {src ? (
        <image
          href={src}
          x={bx - pad}
          y={by - pad}
          width={bw + pad * 2}
          height={bh + pad * 2}
          preserveAspectRatio="xMidYMid slice"
          clipPath={`url(#${clipId})`}
        />
      ) : (
        <rect
          x={bx - pad}
          y={by - pad}
          width={bw + pad * 2}
          height={bh + pad * 2}
          fill={`url(#g-${id})`}
          clipPath={`url(#${clipId})`}
        />
      )}
    </svg>
  )
}
