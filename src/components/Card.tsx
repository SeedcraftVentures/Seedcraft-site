/**
 * Card — the slanted brand slab via ::before. No plain rectangular cards.
 * Skew leans taller cards more, so default to generous horizontal padding.
 */
export function Card({
  children,
  active = false,
  dark = false,
  className = '',
  style,
  ...rest
}: {
  children: React.ReactNode
  active?: boolean
  dark?: boolean
  className?: string
  style?: React.CSSProperties
} & React.HTMLAttributes<HTMLDivElement>) {
  const cls = [
    'shape',
    'card',
    dark ? 'card--dark' : '',
    active ? 'card--active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={cls} style={{ padding: '30px 32px', ...style }} {...rest}>
      {children}
    </div>
  )
}
