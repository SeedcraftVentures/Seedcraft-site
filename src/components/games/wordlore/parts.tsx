import Link from 'next/link'
import Image from 'next/image'
import { WORDLORE } from './content'

/** Renders a store caption, lighting the `*...*` words in runelight. */
export function Glow({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith('*') ? (
          <span key={i} className="wl-glow">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  )
}

const RING = 'ᚠᚢᚦᚨᚱᚲᚷᚹ ᚺᚾᛁᛃᛇᛈᛉᛊ ᛏᛒᛖᛗᛚᛜᛞᛟ '

/**
 * The slowly turning rune ring from the game's home backdrop, drawn as SVG
 * text on a circle. Purely decorative.
 */
export function RuneRing({ className = '' }: { className?: string }) {
  return (
    <svg className={`wl-ring ${className}`.trim()} viewBox="0 0 600 600" aria-hidden focusable="false">
      <defs>
        <path id="wl-ring-path" d="M300,300 m-250,0 a250,250 0 1,1 500,0 a250,250 0 1,1 -500,0" />
      </defs>
      <circle cx="300" cy="300" r="280" className="wl-ring__line" />
      <circle cx="300" cy="300" r="222" className="wl-ring__line" />
      <text className="wl-ring__runes">
        <textPath href="#wl-ring-path" textLength="1560">
          {RING.repeat(3)}
        </textPath>
      </text>
    </svg>
  )
}

/** Header for the policy and support pages: the wordmark and the three routes. */
export function DocHeader({ current }: { current: 'privacy' | 'support' | 'beta' }) {
  return (
    <header className="wl-dochead">
      <div className="mx-auto px-6 md:px-10 wl-dochead__inner" style={{ maxWidth: 'var(--maxw)' }}>
        <Link href={WORDLORE.href} aria-label="Wordlore: Norse Saga, game page">
          <Image
            src="/Images/games/wordlore/wordmark.png"
            alt="Wordlore: Norse Saga"
            width={574}
            height={165}
            className="wl-dochead__mark"
          />
        </Link>
        <nav aria-label="Wordlore" className="wl-dochead__links">
          <Link href={WORDLORE.href}>The game</Link>
          <Link href={WORDLORE.betaHref} aria-current={current === 'beta' ? 'page' : undefined}>
            Beta
          </Link>
          <Link href={WORDLORE.supportHref} aria-current={current === 'support' ? 'page' : undefined}>
            Support
          </Link>
          <Link href={WORDLORE.privacyHref} aria-current={current === 'privacy' ? 'page' : undefined}>
            Privacy
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function DocFooter() {
  return (
    <footer className="wl-docfoot">
      <div className="mx-auto px-6 md:px-10 wl-docfoot__inner" style={{ maxWidth: 'var(--maxw)' }}>
        <span>© 2026 {WORDLORE.company}</span>
        <span className="wl-docfoot__links">
          <Link href="/games">Seedcraft Games</Link>
          <a href={`mailto:${WORDLORE.contact}`}>{WORDLORE.contact}</a>
        </span>
      </div>
    </footer>
  )
}
