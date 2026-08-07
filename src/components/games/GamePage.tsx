import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Game } from '@/lib/games'
import { publishers } from '@/lib/games'
import { GamesNav } from './GamesNav'
import { Footer } from '../sections/Footer'
import { StatusTag } from '../Tag'
import { PlayBadge } from './PlayBadge'
import { BrandBullet } from '../BrandBullet'
import { Button } from '../Button'
import { Reveal } from '../Reveal'

/** Placeholder frames so a game page is presentable before the art lands. */
const PLACEHOLDER_SHOTS = 3

export function GamePage({ game }: { game: Game }) {
  const shots = game.shots

  return (
    <>
      <GamesNav />

      <main className="games-surface">
        {/* Title block */}
        <section className="game-hero">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Link href="/games" className="game-back">
              <ArrowLeft size={15} strokeWidth={2.4} aria-hidden />
              Seedcraft Games
            </Link>

            <h1 className="font-display game-hero__name">{game.name}</h1>
            <p className="game-hero__tagline">{game.tagline}</p>

            <div className="game-hero__meta">
              <StatusTag status={game.status} />
              <span className="game-hero__platforms">{game.platforms.join(', ')}</span>
            </div>

            {game.storeHref && (
              <div className="game-hero__store">
                <PlayBadge href={game.storeHref} />
              </div>
            )}
          </div>
        </section>

        {/* Screens */}
        <section className="game-shots">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            {/* Plain rectangles on purpose: a store screenshot cropped on the
                brand slant loses UI at the corners. */}
            <div className="game-shots__row">
              {shots.length > 0
                ? shots.map((s, i) => (
                    <Reveal key={s.src} delay={i * 0.06}>
                      <div className="game-shot">
                        {/* Store screens are 1080x2160 PNGs. next/image resizes
                            and re-encodes them, which keeps the page from
                            shipping several megabytes of artwork. `contain` so
                            a screen with a different ratio letterboxes rather
                            than losing the headline off its top. */}
                        <Image
                          src={s.src}
                          alt={s.alt}
                          fill
                          sizes="(max-width: 700px) 45vw, 230px"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                    </Reveal>
                  ))
                : Array.from({ length: PLACEHOLDER_SHOTS }).map((_, i) => (
                    <Reveal key={i} delay={i * 0.06}>
                      <div className="game-shot game-shot--empty" />
                    </Reveal>
                  ))}
            </div>
            {shots.length === 0 && (
              <p className="game-shots__note">
                Screens coming shortly. Drop files into{' '}
                <code>public/Images/games/{game.slug}/</code> and list them in{' '}
                <code>src/lib/games.ts</code>.
              </p>
            )}
          </div>
        </section>

        {/* The pitch */}
        <section className="game-body">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <div className="game-body__grid">
              <Reveal>
                <div className="game-body__copy">
                  {game.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}

                  {game.privacyHref && (
                    <Link href={game.privacyHref} className="game-body__legal">
                      Privacy policy
                      <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
                    </Link>
                  )}
                </div>
              </Reveal>

              <div className="game-highlights">
                {game.highlights.map((h, i) => (
                  <Reveal key={h.title} delay={0.06 + i * 0.07}>
                    <div className="game-highlight">
                      <BrandBullet tone="games" />
                      <h3 className="font-display game-highlight__title">{h.title}</h3>
                      <p className="game-highlight__body">{h.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publisher CTA */}
        <section className="game-cta">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <div className="shape game-cta__slab">
                <h2 className="font-display game-cta__title">
                  Interested in {game.name}?
                </h2>
                <p className="game-cta__body">
                  {game.storeHref
                    ? 'It is out there and you can play it now. We are also open to publishing conversations, about this one and about what comes next.'
                    : 'We are open to publishing conversations and happy to get a build in your hands.'}
                </p>
                {game.storeHref && (
                  <div style={{ marginBottom: 26 }}>
                    <PlayBadge href={game.storeHref} height={88} align="centre" />
                  </div>
                )}
                <Button href={publishers.cta.href} variant="cream" size="lg">
                  {publishers.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
