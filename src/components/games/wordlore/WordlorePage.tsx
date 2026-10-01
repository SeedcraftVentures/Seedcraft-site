import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Game } from '@/lib/games'
import { publishers } from '@/lib/games'
import { GamesNav } from '../GamesNav'
import { Footer } from '../../sections/Footer'
import { PlayBadge } from '../PlayBadge'
import { Reveal } from '../../Reveal'
import { WORDLORE, realms, screens, toRunes } from './content'
import { Glow, RuneRing } from './parts'
import { WordloreMusic } from './WordloreMusic'
import { WordloreTrailer } from './WordloreTrailer'

/**
 * Wordlore: Norse Saga. Unlike the shared GamePage, this one is dressed in the
 * game's own identity (navy ground, limestone, runelight, Cinzel) while keeping
 * the Seedcraft Games header and footer, so it reads as a room in the house.
 */

const TURN = [
  {
    rune: 'ᚱ',
    verb: 'Roll',
    body: 'The dice reveal which rune is which letter. Every roll teaches you a little more of the stone.',
  },
  {
    rune: 'ᚲ',
    verb: 'Carve',
    body: 'Carve a letter into the grid for points. Each one you place makes the words around it easier to read.',
  },
  {
    rune: 'ᛚ',
    verb: 'Read',
    body: 'Read a whole word for more. Carve its last letter carelessly, though, and your rival reads it first.',
  },
]

const BEYOND = [
  {
    src: '/Images/games/wordlore/daily.jpg',
    title: 'The Daily Rune',
    body: 'A sliding-stone puzzle, new every day and the same for everyone. Beat par, keep the streak, collect the spoils.',
  },
  {
    src: '/Images/games/wordlore/raid.jpg',
    title: 'Barrow Raids',
    body: 'Light a torch and descend. Three chambers against the draugr and a six minute clock, with a hoard at the bottom.',
  },
  {
    src: '/Images/games/wordlore/prepare.jpg',
    title: 'Patrons, relics and wards',
    body: 'Every realm you free lends you its god. Forge relics from raid shards and carry wards against the usurpers’ curses.',
  },
]

export function WordlorePage({ game }: { game: Game }) {
  return (
    <>
      <GamesNav />

      <main className="wl-surface">
        {/* Hero */}
        <section className="wl-hero">
          <RuneRing className="wl-hero__ring" />
          <div className="mx-auto px-6 md:px-10 wl-hero__inner" style={{ maxWidth: 'var(--maxw)' }}>
            <div className="wl-hero__copy">
              <Link href="/games" className="wl-back">
                <ArrowLeft size={15} strokeWidth={2.4} aria-hidden />
                Seedcraft Games
              </Link>

              <h1 className="wl-hero__title">
                <Image
                  src="/Images/games/wordlore/wordmark.png"
                  alt="Wordlore: Norse Saga"
                  width={1148}
                  height={329}
                  priority
                  sizes="(max-width: 700px) 90vw, 520px"
                  className="wl-hero__wordmark"
                />
              </h1>

              <p className="wl-hero__tagline">
                Carve runes. <span className="wl-glow">Read words.</span>
                <br />
                Free the Nine Realms.
              </p>
              <p className="wl-hero__lede">
                The gods of shadow hold the Nine Realms. Win them back one stone at a time, in a
                turn-based duel of dice, runes and words.
              </p>

              <div className="wl-hero__meta">
                <span className="wl-chip">{game.status.label}</span>
                <span className="wl-hero__platforms">{game.platforms.join(' · ')}</span>
              </div>

              <Link href={WORDLORE.betaHref} className="wl-btn wl-hero__cta">
                Join the beta
              </Link>

              {game.storeHref && (
                <div className="wl-hero__store">
                  <PlayBadge href={game.storeHref} height={80} />
                </div>
              )}
            </div>

            <div className="wl-hero__art">
              <div className="wl-frame">
                <Image
                  src="/Images/games/wordlore/stone.jpg"
                  alt={game.shots[0]?.alt ?? ''}
                  width={1600}
                  height={739}
                  priority
                  sizes="(max-width: 920px) 92vw, 620px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The trailer */}
        <section className="wl-trailer-section">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <p className="wl-eyebrow">The trailer</p>
              <WordloreTrailer />
            </Reveal>
          </div>
        </section>

        {/* A turn */}
        <section className="wl-turn">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <p className="wl-eyebrow">The ancient games</p>
              <h2 className="wl-h2">Two actions a turn. One rival reading over your shoulder.</h2>
              <p className="wl-lede">
                Every stone is a small crossword written in runes. You and a rival take turns
                working it out, and whoever reads the stone holds the realm.
              </p>
            </Reveal>

            <ol className="wl-turn__grid">
              {TURN.map((t, i) => (
                <Reveal key={t.verb} delay={i * 0.07}>
                  <li className="wl-slab wl-turn__step">
                    <span className="wl-turn__rune" aria-hidden>
                      {t.rune}
                    </span>
                    <h3 className="wl-h3">{t.verb}</h3>
                    <p>{t.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Screens */}
        <section className="wl-screens" aria-label="Screenshots">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <p className="wl-eyebrow">From the saga</p>
            </Reveal>
          </div>
          {/* A snap strip rather than a grid: the screens are landscape and read
              best large. Tab-focusable so it scrolls from the keyboard. */}
          <div className="wl-screens__strip" tabIndex={0}>
            {screens.map((s, i) => (
              <figure key={s.src} className="wl-screen">
                <div className="wl-frame">
                  <Image
                    src={s.src}
                    alt={game.shots[i]?.alt ?? ''}
                    width={1600}
                    height={739}
                    sizes="(max-width: 700px) 86vw, 640px"
                  />
                </div>
                <figcaption>
                  <span className="wl-screen__title">
                    <Glow text={s.title} />
                  </span>
                  <span className="wl-screen__line">{s.line}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* The realms */}
        <section className="wl-realms">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <p className="wl-eyebrow">130 stones, Midgard to Helheim</p>
              <h2 className="wl-h2">Nine realms. Nine usurpers.</h2>
              <p className="wl-lede">
                Each realm is held by a usurper of the shadow and guarded by their lieutenants.
                Win stars on its stones to earn the right to face them, and free the god they
                hold.
              </p>
            </Reveal>

            <div className="wl-realms__grid">
              {realms.map((r, i) => (
                <Reveal key={r.name} delay={(i % 3) * 0.06}>
                  <article
                    className="wl-realm"
                    style={
                      {
                        '--r-ground': r.ground,
                        '--r-stone': r.stone,
                        '--r-accent': r.accent,
                      } as React.CSSProperties
                    }
                  >
                    <div className="wl-realm__top">
                      <span className="wl-realm__numeral">{r.numeral}</span>
                      <span className="wl-realm__stones">{r.stones} stones</span>
                    </div>
                    <p className="wl-realm__runes" aria-hidden>
                      {toRunes(r.name)}
                    </p>
                    <h3 className="wl-realm__name">{r.name}</h3>
                    <p className="wl-realm__who">
                      Held by <strong>{r.usurper}</strong>
                    </p>
                    <p className="wl-realm__who">Fight for {r.patron}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond the saga */}
        <section className="wl-beyond">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <p className="wl-eyebrow">Beyond the saga</p>
              <h2 className="wl-h2">A reason to come back tomorrow.</h2>
            </Reveal>
            <div className="wl-beyond__grid">
              {BEYOND.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.07}>
                  <article className="wl-beyond__item">
                    <div className="wl-frame wl-frame--sm">
                      <Image src={b.src} alt="" width={1600} height={739} sizes="(max-width: 860px) 92vw, 380px" />
                    </div>
                    <h3 className="wl-h3">{b.title}</h3>
                    <p>{b.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Straight about free to play */}
        <section className="wl-fair">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <div className="wl-slab wl-fair__slab">
              <Reveal>
                <div>
                  <p className="wl-eyebrow">Free to play, and straight about it</p>
                  <h2 className="wl-h2 wl-fair__title">No account. No forced ads.</h2>
                  <ul className="wl-fair__list">
                    <li>
                      <strong>Your saga stays on your phone.</strong> No sign-up, no sign-in, and
                      nothing to hand over to start playing.
                    </li>
                    <li>
                      <strong>Ads only when you ask for one.</strong> Watch a rewarded ad for an
                      extra key, a Thunderstone or doubled spoils. Skip them and nothing is
                      lost.
                    </li>
                    <li>
                      <strong>Hacksilver is earned by playing.</strong> Buying more is optional,
                      goes through Google Play, and can be restored from Settings.
                    </li>
                  </ul>
                </div>
              </Reveal>
              <div className="wl-fair__links">
                <Link href={WORDLORE.supportHref} className="wl-link">
                  Player support
                  <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
                </Link>
                <Link href={WORDLORE.privacyHref} className="wl-link">
                  Privacy policy
                  <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Publishers */}
        <section className="wl-pub">
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <div className="wl-pub__inner">
                <span className="wl-pub__rune" aria-hidden>
                  ᛟ
                </span>
                <h2 className="wl-h2">Interested in Wordlore?</h2>
                <p className="wl-lede">
                  Norse Saga is the first book, on an engine built to carry more mythologies. We
                  are open to publishing conversations and happy to put a build in your hands.
                </p>
                <a href={publishers.cta.href} className="wl-btn">
                  {publishers.cta.label}
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <WordloreMusic />
      <Footer />
    </>
  )
}
