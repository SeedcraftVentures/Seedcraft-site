import { Mark } from './Mark'

/**
 * The bullet used to head a point in a list of three.
 *
 * A single part of the mark on its own read as a thick apostrophe rather than
 * as brand, so this uses the whole mark, centred inside the slanted slab. The
 * slab does the work of separating it from the copy; the mark stays legible.
 */
export function BrandBullet({
  tone = 'light',
  size = 44,
}: {
  tone?: 'light' | 'dark' | 'games'
  size?: number
}) {
  return (
    <span
      className={`shape brand-bullet brand-bullet--${tone}`}
      aria-hidden
      style={{ width: size, height: size }}
    >
      <Mark variant="static" size={Math.round(size * 0.44)} />
    </span>
  )
}
