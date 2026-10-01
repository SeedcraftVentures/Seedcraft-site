/**
 * Wordlore: Norse Saga beta sign-up. A shareable link (also /wordlore/beta);
 * add ?ref=<where> when sharing to see which places bring people in.
 * Sign-ups go to the Seedcraft Site Supabase project (beta_signups).
 */
import type { Metadata } from 'next'
import { DocFooter, DocHeader } from '@/components/games/wordlore/parts'
import { BetaForm } from '@/components/games/wordlore/BetaForm'

export const metadata: Metadata = {
  title: 'Join the beta · Wordlore: Norse Saga',
  description: 'Play Wordlore: Norse Saga before launch. Join the beta for Android and iOS.',
  alternates: { canonical: '/games/wordlore/beta' },
  openGraph: {
    title: 'Join the Wordlore: Norse Saga beta',
    description: 'Carve runes. Read words. Free the Nine Realms, before anyone else.',
    url: 'https://www.seedcraft.co/games/wordlore/beta',
    siteName: 'Seedcraft Games',
    images: [{ url: '/Images/games/wordlore/trailer-poster.jpg', width: 1280, height: 720 }],
  },
}

export default function WordloreBetaPage() {
  return (
    <main className="wl-doc">
      <DocHeader current="beta" />
      <section className="wl-doc__body">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="wl-legal">
            <p className="wl-legal__kicker">Wordlore: Norse Saga</p>
            <h1>Join the beta</h1>
            <p>
              Play Wordlore before anyone else. Beta players get early builds of the saga, the
              Daily Rune and Barrow Raids, and a direct line to us: what you tell us shapes the
              game before it launches.
            </p>
            <p className="wl-legal__muted">
              Android first, through Google Play. iPhone and iPad to follow, through TestFlight.
            </p>
            <BetaForm />
            <p className="wl-beta__small">
              We keep your email and platform only to invite you to the beta and tell you about
              launch, stored securely with our database provider, Supabase. We never share or
              sell it. To be removed, email us and we’ll delete it.
            </p>
          </article>
        </div>
      </section>
      <DocFooter />
    </main>
  )
}
