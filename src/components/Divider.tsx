import { Mark } from './Mark'

export function Divider({
  label,
  color = 'var(--line)',
  markColor = 'var(--a)',
  labelColor = 'var(--ink)',
}: {
  label?: string
  color?: string
  markColor?: string
  labelColor?: string
}) {
  return (
    <div className="flex items-center gap-3" style={{ width: '100%' }}>
      <Mark variant="static" size={18} color={markColor} />
      {label && (
        <span className="eyebrow" style={{ color: labelColor }}>
          {label}
        </span>
      )}
      <span aria-hidden style={{ flex: 1, height: 1, background: color }} />
    </div>
  )
}
