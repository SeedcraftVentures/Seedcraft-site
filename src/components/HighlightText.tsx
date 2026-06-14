/**
 * Nura-style readable emphasis: body text where chosen keywords get an accent
 * highlight, the rest stays solid (never faded into illegibility).
 */
export type HLSeg = string | { hl: string } | { dim: string }

export function HighlightText({
  segments,
  className = '',
}: {
  segments: HLSeg[]
  className?: string
}) {
  return (
    <p className={`hl-body ${className}`.trim()}>
      {segments.map((s, i) => {
        if (typeof s === 'string') return <span key={i}>{s}</span>
        if ('hl' in s)
          return (
            <span key={i} className="hl">
              {s.hl}
            </span>
          )
        return <mark key={i}>{s.dim}</mark>
      })}
    </p>
  )
}
