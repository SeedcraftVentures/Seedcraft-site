import { Mark } from './Mark'

/**
 * Large faded mark used as background texture. Anchored to BLEED OFF A CORNER
 * and kept behind everything at low opacity. Do not centre it behind headlines
 * or icons — its individual bars read as stray rounded boxes there.
 */
export function GhostTexture({
  corner = 'bottom-right',
  width = '38%',
  opacity = 0.06,
  color = 'currentColor',
}: {
  corner?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  width?: string
  opacity?: number
  color?: string
}) {
  const pos: React.CSSProperties = { position: 'absolute' }
  if (corner.includes('bottom')) pos.bottom = '-8%'
  if (corner.includes('top')) pos.top = '-8%'
  if (corner.includes('right')) pos.right = '-6%'
  if (corner.includes('left')) pos.left = '-6%'

  return (
    <div
      aria-hidden
      style={{
        ...pos,
        width,
        opacity,
        zIndex: 0,
        pointerEvents: 'none',
        color,
      }}
    >
      <Mark variant="static" size="100%" color="currentColor" />
    </div>
  )
}
