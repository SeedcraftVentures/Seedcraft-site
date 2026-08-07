import Image from 'next/image'

/**
 * The Google Play badge.
 *
 * This is Google's own artwork, downloaded from their badge endpoint, not a
 * redrawing. Their brand guidelines require the badge unmodified, so it is not
 * recoloured, cropped or restyled to fit the site. The only things we control
 * are the size and the clear space around it.
 *
 * Guidelines followed here: minimum height 40px, and clear space on every side
 * of at least a quarter of the badge height.
 *
 * The clear space is real padding, which would otherwise indent the badge from
 * the copy above it. `align="left"` pulls it back by exactly the padding so the
 * artwork lines up with the text edge. Centred layouts leave it alone.
 */
export function PlayBadge({
  href,
  height = 110,
  align = 'left',
  label = 'Get it on Google Play',
}: {
  href: string
  height?: number
  align?: 'left' | 'centre'
  label?: string
}) {
  // Google's badge asset is 646 x 250.
  const width = Math.round(height * (646 / 250))
  const pad = Math.round(height / 4)

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="play-badge"
      aria-label={label}
      style={{ padding: pad, marginLeft: align === 'left' ? -pad : undefined }}
    >
      <Image
        src="/Images/badges/google-play.png"
        alt={label}
        width={width}
        height={height}
        style={{ display: 'block', width, height: 'auto' }}
        unoptimized
      />
    </a>
  )
}
