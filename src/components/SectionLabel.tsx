import { Mark } from './Mark'

/**
 * Kicker: a single small accent mark-part + uppercase Figtree label + a
 * hairline rule filling the row.
 */
export function SectionLabel({
  children,
  color = 'var(--a)',
  ruleColor = 'var(--line)',
  labelColor = 'var(--ink)',
  className = '',
}: {
  children: React.ReactNode
  color?: string
  ruleColor?: string
  labelColor?: string
  className?: string
}) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`.trim()}
      style={{ width: '100%' }}
    >
      <Mark variant="static" size={18} color={color} />
      <span className="eyebrow" style={{ color: labelColor }}>
        {children}
      </span>
      <span
        aria-hidden
        style={{ flex: 1, height: 1, background: ruleColor }}
      />
    </div>
  )
}
