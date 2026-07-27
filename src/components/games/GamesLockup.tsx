import Link from 'next/link'
import { Mark } from '../Mark'

/**
 * The Seedcraft Games lockup: the parent mark and wordmark, a hairline, then
 * "Games" in the games accent. Same house, its own room.
 */
export function GamesLockup({
  size = 'md',
  color = '#fff',
  href = '/games',
}: {
  size?: 'sm' | 'md' | 'lg'
  color?: string
  href?: string | null
}) {
  const dims = {
    sm: { mark: 20, word: 19, rule: 20 },
    md: { mark: 28, word: 26, rule: 26 },
    lg: { mark: 44, word: 42, rule: 40 },
  }[size]

  const inner = (
    <span className="games-lockup" style={{ color }}>
      <Mark variant="static" size={dims.mark} color={color} shadow />
      <span
        className="font-display games-lockup__word"
        style={{ fontSize: dims.word }}
      >
        Seedcraft
      </span>
      <span
        aria-hidden
        className="games-lockup__rule"
        style={{ height: dims.rule }}
      />
      <span
        className="font-display games-lockup__games"
        style={{ fontSize: dims.word }}
      >
        Games
      </span>
    </span>
  )

  if (!href) return inner
  return (
    <Link href={href} aria-label="Seedcraft Games, home">
      {inner}
    </Link>
  )
}
