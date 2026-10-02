/**
 * Wordlore: Norse Saga on iOS, the wishlist. A shareable link (also
 * /wordlore/ios); add ?ref=<where> when sharing to see which places bring
 * people in. Sign-ups go to the Seedcraft Site Supabase project
 * (beta_signups, platform 'ios').
 */
import type { Metadata } from 'next'
import { DocFooter, DocHeader } from '@/components/games/wordlore/parts'
import { IosWishlist } from '@/components/games/wordlore/IosWishlist'
import { PlayBadge } from '@/components/games/PlayBadge'
import { WORDLORE } from '@/components/games/wordlore/content'

export const metadata: Metadata = {
  title: 'Wordlore on iPhone and iPad · Wordlore: Norse Saga',
  description: 'Wordlore: Norse Saga is out now on Android and coming soon to iPhone and iPad. Get an email the day it launches.',
  alternates: { canonical: '/games/wordlore/ios' },
  openGraph: {
    title: 'Wordlore: Norse Saga is coming to iPhone and iPad',
    description: 'Carve runes. Read words. Free the Nine Realms. Get an email the day it lands on the App Store.',
    url: 'https://www.seedcraft.co/games/wordlore/ios',
    siteName: 'Seedcraft Games',
    images: [{ url: '/Images/games/wordlore/trailer-poster.jpg', width: 1280, height: 720 }],
  },
}

export default function WordloreIosPage() {
  return (
    <main className="wl-doc">
      <DocHeader current="ios" />
      <section className="wl-doc__body">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="wl-legal">
            <p className="wl-legal__kicker">Wordlore: Norse Saga</p>
            <h1>Coming to iPhone and iPad</h1>
            <p>
              Wordlore is out now on Android, and the iPhone and iPad version is a few weeks
              behind. Leave your email and we’ll send you one message, the day it lands on the
              App Store.
            </p>
            <IosWishlist />
            <p className="wl-legal__muted">
              We keep your email only to tell you about the iOS launch, stored securely with our
              database provider, Supabase. We never share or sell it.
            </p>
            <p className="wl-legal__muted">On Android? Play it now:</p>
            <div style={{ marginTop: -24 }}>
              <PlayBadge href={WORDLORE.playHref} height={64} />
            </div>
          </article>
        </div>
      </section>
      <DocFooter />
    </main>
  )
}
