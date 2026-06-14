import { Mark } from './Mark'
import type { PartId } from './mark-parts'

/**
 * The four parts as fill segments — a progress mechanic built from the mark
 * itself. Driven by `partsOn` (count) or `litParts` (explicit set).
 */
export function ProgressBar({
  partsOn = 0,
  litParts,
  size = 48,
  color = 'var(--a)',
  className = '',
}: {
  partsOn?: number
  litParts?: PartId[]
  size?: number
  color?: string
  className?: string
}) {
  return (
    <Mark
      variant="lit"
      partsOn={partsOn}
      litParts={litParts}
      size={size}
      color={color}
      className={className}
    />
  )
}
