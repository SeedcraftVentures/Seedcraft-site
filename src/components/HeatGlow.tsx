/**
 * Heat Glow wrapper — base gradient + highlight layer + noise layer + content.
 * Use ONLY on the hero and primary CTA boxes. Never as a generic section bg.
 */
export function HeatGlow({
  children,
  className = '',
  rounded = false,
  noise = true,
  ...rest
}: {
  children: React.ReactNode
  className?: string
  rounded?: boolean
  noise?: boolean
  [dataAttr: `data-${string}`]: unknown
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`heatglow ${className}`}
      style={rounded ? { borderRadius: 'var(--radius)' } : undefined}
      {...rest}
    >
      <span className="heatglow__highlight" aria-hidden />
      {noise && <span className="heatglow__noise" aria-hidden />}
      {children}
    </div>
  )
}
