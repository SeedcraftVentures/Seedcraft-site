import Link from 'next/link'
import { games } from '@/lib/games'
import { GamesLockup } from './GamesLockup'

/**
 * Header for the /games pages. Sits on the games surface (deep forest), carries
 * the Games lockup, and always keeps a route back to the parent studio.
 */
export function GamesNav() {
  return (
    <header className="games-nav">
      <div
        className="mx-auto px-6 md:px-10 games-nav__inner"
        style={{ maxWidth: 'var(--maxw)' }}
      >
        <GamesLockup size="sm" />

        <nav aria-label="Seedcraft Games" className="games-nav__links">
          {/* Only titles with a page worth landing on */}
          {games
            .filter((g) => g.pageReady)
            .map((g) => (
              <Link key={g.slug} href={`/games/${g.slug}`}>
                {g.name}
              </Link>
            ))}
          <Link href="/games#publishers">Publishers</Link>
          <Link href="/" className="games-nav__parent">
            Seedcraft Ventures
          </Link>
        </nav>
      </div>
    </header>
  )
}
