import type { Metadata } from 'next'
import Link from 'next/link'
import { games, gamesBrand, publishers } from '@/lib/games'
import { GamesNav } from '@/components/games/GamesNav'
import { GamesLockup } from '@/components/games/GamesLockup'
import { Footer } from '@/components/sections/Footer'
import { ArrowRight } from 'lucide-react'
import { StatusTag } from '@/components/Tag'
import { BrandBullet } from '@/components/BrandBullet'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Seedcraft Games · Short sessions, real craft',
  description:
    'Seedcraft Games is the games house inside Seedcraft Ventures. Tick Down, Wordlore: Norse Saga and Crossword Hero, built by the studio that ships.',
  openGraph: {
    title: 'Seedcraft Games · Short sessions, real craft',
    description:
      'The games house inside Seedcraft Ventures. Tick Down, Wordlore: Norse Saga and Crossword Hero.',
    url: 'https://www.seedcraft.co/games',
    siteName: 'Seedcraft Games',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function GamesHub() {
  return (
    <>
      <GamesNav />

      <main className="games-surface">
        {/* Front door */}
        <section className="games-hero">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <GamesLockup size="lg" href={null} />
            <h1 className="font-display games-hero__title">{gamesBrand.tagline}</h1>
            <p className="games-hero__intro">{gamesBrand.intro}</p>
            <p className="games-hero__parent">{gamesBrand.parent}</p>
          </div>
        </section>

        {/* The catalogue */}
        <section className="games-list">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            {games.map((g, i) => {
              const inner = (
                <>
                  <div className="game-row__meta">
                    <StatusTag status={g.status} />
                    <span className="game-row__platforms">{g.platforms.join(', ')}</span>
                  </div>
                  <div>
                    <h2 className="font-display game-row__name">{g.name}</h2>
                    <p className="game-row__tagline">{g.tagline}</p>
                    <p className="game-row__blurb">{g.blurb}</p>
                  </div>
                  {g.pageReady ? (
                    <span className="game-row__link" aria-hidden>
                      <ArrowRight size={22} strokeWidth={2.2} />
                    </span>
                  ) : (
                    <span className="game-row__soon">Game page coming soon</span>
                  )}
                </>
              )

              return (
                <Reveal key={g.slug} delay={i * 0.06}>
                  {g.pageReady ? (
                    <Link href={`/games/${g.slug}`} className="game-row">
                      {inner}
                    </Link>
                  ) : (
                    <div className="game-row game-row--soon">{inner}</div>
                  )}
                </Reveal>
              )
            })}
          </div>
        </section>

        {/* Publishers */}
        <section id="publishers" className="games-publishers">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <div className="games-publishers__grid">
              <Reveal>
                <div>
                  <p className="eyebrow games-publishers__label">{publishers.label}</p>
                  <h2 className="font-display games-publishers__title">
                    {publishers.title}
                  </h2>
                  {publishers.body.map((p, i) => (
                    <p key={i} className="games-publishers__body">
                      {p}
                    </p>
                  ))}
                  <div style={{ marginTop: 30 }}>
                    <Button href={publishers.cta.href} variant="cream" size="lg">
                      {publishers.cta.label}
                    </Button>
                  </div>
                </div>
              </Reveal>

              <div className="games-publishers__points">
                {publishers.points.map((p, i) => (
                  <Reveal key={p.title} delay={0.06 + i * 0.07}>
                    <div className="game-highlight">
                      <BrandBullet tone="games" />
                      <h3 className="font-display game-highlight__title">{p.title}</h3>
                      <p className="game-highlight__body">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
