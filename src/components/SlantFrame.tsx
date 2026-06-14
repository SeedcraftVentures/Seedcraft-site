/**
 * SlantFrame — a parallelogram media card cut in the brand slant. Holds an
 * image (counter-skewed + overscaled to fill) or a stubbed gradient when no
 * imagery is supplied yet. Optional caption overlay.
 */
export function SlantFrame({
  src,
  alt = '',
  ratio = '4 / 3',
  from = '#2e7d32',
  to = '#0b3d0b',
  title,
  sub,
  className = '',
  style,
}: {
  src?: string
  alt?: string
  ratio?: string
  from?: string
  to?: string
  title?: string
  sub?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div className={`shape-frame ${className}`} style={{ aspectRatio: ratio, ...style }}>
      <div
        className="shape-frame__inner"
        style={
          src ? undefined : { background: `linear-gradient(135deg, ${from}, ${to})` }
        }
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} />
        ) : null}
      </div>
      {(title || sub) && (
        <div className="shape-frame__cap">
          {title && <b>{title}</b>}
          {sub && <span>{sub}</span>}
        </div>
      )}
    </div>
  )
}
