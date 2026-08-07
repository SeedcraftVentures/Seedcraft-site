import Image from 'next/image'

/**
 * The Google Play badge.
 *
 * This is Google's own artwork, downloaded from their badge endpoint, not a
 * redrawing. Their brand guidelines require the badge unmodified, so it is not
 * recoloured, cropped or restyled to fit the site. The only thing we control is
 * the size and the clear space around it.
 *
 * Guidelines followed here: minimum height 40px, and clear space on every side
 * of at least a quarter of the badge height.
 */
export function PlayBadge({
  href,
  height = 56,
  label = 'Get it on Google Play',
}: {
  href: string
  height?: number
  label?: string
}) {
  // Google's badge asset is 646 x 250.
  const width = Math.round(height * (646 / 250))

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="play-badge"
      aria-label={label}
      style={{ padding: Math.round(height / 4) }}
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
