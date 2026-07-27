import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { games, gamesBrand } from '@/lib/games'
import { GamesLockup } from '../games/GamesLockup'
import { StatusTag } from '../Tag'
import { Button } from '../Button'
import { Reveal } from '../Reveal'

/**
 * The Games band on the home page. Not a sidebar and not an aside: its own
 * surface, so a publisher landing here sees a studio, not a hobby.
 */
export function GamesBand() {
  return (
    <section id="games" className="games-band">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <div className="games-band__head">
          <Reveal>
            <GamesLockup size="lg" href={null} />
            <p className="games-band__tagline">{gamesBrand.tagline}</p>
            <p className="games-band__intro">{gamesBrand.intro}</p>
          </Reveal>
        </div>

        <div className="games-band__grid">
          {games.map((g, i) => {
            const inner = (
              <>
                <div className="game-teaser__top">
                  <StatusTag status={g.status} />
                  <span className="game-teaser__platforms">
                    {g.platforms.join(', ')}
                  </span>
                </div>
                <h3 className="font-display game-teaser__name">{g.name}</h3>
                <p className="game-teaser__tagline">{g.tagline}</p>
                <p className="game-teaser__blurb">{g.blurb}</p>
                {g.pageReady ? (
                  <span className="game-teaser__link">
                    See the game
                    <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
                  </span>
                ) : (
                  <span className="game-teaser__soon">Game page coming soon</span>
                )}
              </>
            )
            const cls = 'shape card card--dark game-teaser'

            return (
              <Reveal key={g.slug} delay={i * 0.08}>
                {g.pageReady ? (
                  <Link href={`/games/${g.slug}`} className={cls}>
                    {inner}
                  </Link>
                ) : (
                  <div className={`${cls} game-teaser--soon`}>{inner}</div>
                )}
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.16}>
          <div className="games-band__foot">
            <Button href="/games" variant="cream" size="lg">
              Visit Seedcraft Games
            </Button>
            <Link href="/games#publishers" className="games-band__pub-link">
              For publishers
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
