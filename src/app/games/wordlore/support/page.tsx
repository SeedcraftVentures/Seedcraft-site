/**
 * Wordlore: Norse Saga player support. Linked from the app's Settings and the
 * Play Console listing, so this URL must never move.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DocFooter, DocHeader } from '@/components/games/wordlore/parts'
import { WORDLORE } from '@/components/games/wordlore/content'

const CONTACT = WORDLORE.contact

export const metadata: Metadata = {
  title: 'Support · Wordlore: Norse Saga',
  description:
    'Help with Wordlore: Norse Saga: missing purchases, deleting your data, ad consent, and how to contact us.',
  alternates: { canonical: '/games/wordlore/support' },
}

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: 'I bought hacksilver and it has not arrived',
    a: (
      <>
        <p>
          Open <strong>Settings</strong> and tap <strong>Restore purchases</strong>, signed in to
          the same Google account you bought with. Payments can take a few minutes to clear, so
          if restoring does not bring it back straight away, try again shortly.
        </p>
        <p>
          Still missing? Email us with your Google Play order number. It starts with{' '}
          <em>GPA.</em> and is in the receipt email Google sent you.
        </p>
      </>
    ),
  },
  {
    q: 'How do I delete my data?',
    a: (
      <>
        <p>
          Open <strong>Settings</strong> and tap <strong>Delete my data</strong>. This erases your
          saga, stars, hacksilver, items and settings from your phone, and it cannot be undone.
          Uninstalling the game does the same.
        </p>
        <p>
          Your progress is never stored on our servers, so there is nothing else of it to delete.
          Records of any purchases are kept so you can restore them. If you want those deleted
          too, email us, knowing that restoring will then no longer work.
        </p>
      </>
    ),
  },
  {
    q: 'How do I change my ad consent?',
    a: (
      <>
        <p>
          Open <strong>Settings → Privacy</strong> to review or change your choice at any time.
          Ads in Wordlore are always optional: you only see one when you choose to watch it for a
          reward.
        </p>
        <p>
          You can also reset or delete your advertising ID in your phone&apos;s settings. On
          iPhone and iPad, tracking permission is under Settings → Privacy &amp; Security →
          Tracking.
        </p>
      </>
    ),
  },
  {
    q: 'Will I keep my progress if I change phone?',
    a: (
      <p>
        Not yet. Progress is stored only on the device you play on, so it does not move to a new
        phone. Hacksilver you bought can be brought across with{' '}
        <strong>Restore purchases</strong> on the new phone.
      </p>
    ),
  },
  {
    q: 'Do I have to watch ads or pay to play?',
    a: (
      <p>
        No. Wordlore is free to play. Hacksilver is earned by playing, and rewarded ads and
        purchases are both optional extras.
      </p>
    ),
  },
]

export default function WordloreSupportPage() {
  return (
    <main className="wl-doc">
      <DocHeader current="support" />

      <section className="wl-doc__body">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="wl-legal">
            <p className="wl-legal__kicker">Wordlore: Norse Saga</p>
            <h1>Player support</h1>
            <p>
              Wordlore: Norse Saga is a turn-based word duel of dice, runes and words: carve runes,
              read hidden words and free the Nine Realms. It is made by Seedcraft Games, part of{' '}
              {WORDLORE.company}.
            </p>

            <div className="wl-contact">
              <p className="wl-contact__label">Email us</p>
              <a href={`mailto:${CONTACT}?subject=Wordlore%20support`} className="wl-contact__email">
                {CONTACT}
              </a>
              <p className="wl-contact__note">
                We reply within 30 days, usually much sooner. It helps to include your phone model
                and the game version, which is shown at the bottom of Settings.
              </p>
            </div>

            <h2>Common questions</h2>
            <div className="wl-faq">
              {FAQ.map((f) => (
                <details key={f.q} className="wl-faq__item">
                  <summary>{f.q}</summary>
                  <div className="wl-faq__answer">{f.a}</div>
                </details>
              ))}
            </div>

            <p style={{ marginTop: 40 }}>
              <Link href={WORDLORE.privacyHref} className="wl-link">
                Read the privacy policy
                <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
              </Link>
            </p>
          </article>
        </div>
      </section>

      <DocFooter />
    </main>
  )
}
