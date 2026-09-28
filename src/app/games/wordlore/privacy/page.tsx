/**
 * Wordlore: Norse Saga privacy policy. This URL is compiled into the app and
 * submitted to the Play Console, so it must never move.
 *
 * Written for what the game does at launch: progress on the device only, no
 * accounts, no cloud save, no crash reporting; purchases through Google Play
 * Billing and RevenueCat; optional rewarded ads through AdMob with UMP/ATT
 * consent. When any of that changes (sign-in, cloud save, Sentry), update this
 * page and the Play data-safety form before the release that ships it.
 */
import type { Metadata } from 'next'
import { DocFooter, DocHeader } from '@/components/games/wordlore/parts'
import { WORDLORE } from '@/components/games/wordlore/content'

const UPDATED = '28 September 2026'
const { contact: CONTACT, company: COMPANY } = WORDLORE

export const metadata: Metadata = {
  title: 'Privacy Policy · Wordlore: Norse Saga',
  description: 'How Wordlore: Norse Saga, a game by Seedcraft Games, handles your data.',
  alternates: { canonical: '/games/wordlore/privacy' },
}

const PROVIDERS = [
  {
    name: 'Google Play',
    role: 'App distribution and payments (Google Play Billing).',
    href: 'https://policies.google.com/privacy',
  },
  {
    name: 'RevenueCat',
    role: 'Checks and records purchases so we can deliver and restore them.',
    href: 'https://www.revenuecat.com/privacy/',
  },
  {
    name: 'Google AdMob',
    role: 'Serves and measures the optional rewarded ads.',
    href: 'https://policies.google.com/privacy',
    extra: {
      label: 'How Google uses data from apps that use its services',
      href: 'https://policies.google.com/technologies/partner-sites',
    },
  },
]

export default function WordlorePrivacyPage() {
  return (
    <main className="wl-doc">
      <DocHeader current="privacy" />

      <section className="wl-doc__body">
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="wl-legal">
            <p className="wl-legal__kicker">Wordlore: Norse Saga</p>
            <h1>Privacy Policy</h1>
            <p className="wl-legal__muted">Last updated: {UPDATED}</p>

            <p>
              Wordlore: Norse Saga (&quot;the game&quot;) is made by <strong>{COMPANY}</strong>,
              a company based in the {WORDLORE.country} (&quot;we&quot;, &quot;us&quot;). We are
              responsible for the personal data described here. Questions go to{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
            </p>

            <div className="wl-legal__short">
              <h2>The short version</h2>
              <ul>
                <li>There is no account and no sign-in. Your progress lives on your phone.</li>
                <li>
                  If you buy hacksilver, Google Play takes the payment. We get a record of the
                  purchase, never your card details.
                </li>
                <li>
                  Ads are optional rewarded ads from Google AdMob. Where the law requires it, we
                  ask for your consent first.
                </li>
                <li>We do not sell your personal data.</li>
              </ul>
            </div>

            <h2>What stays on your device</h2>
            <p>
              Your saga progress, stars, hacksilver balance, items and settings are stored{' '}
              <strong>only on your device</strong>. They are not sent to us. The game has no
              accounts, no cloud save, no sign-in, no analytics and no crash reporting.
            </p>
            <p>
              To remove it, use <strong>Delete my data</strong> in the game&apos;s Settings, or
              uninstall the game. Either one erases it for good, and we cannot recover it for you.
            </p>

            <h2>Purchases</h2>
            <p>
              You can buy hacksilver, the game&apos;s currency, with real money. Payment is handled
              by <strong>Google Play Billing</strong>, and purchases are checked and recorded by{' '}
              <strong>RevenueCat</strong> on our behalf. For each purchase we receive:
            </p>
            <ul>
              <li>the product you bought and when you bought it;</li>
              <li>the store&apos;s transaction ID;</li>
              <li>
                an anonymous RevenueCat user ID, a random identifier that is not linked to your
                name or email address.
              </li>
            </ul>
            <p>
              We use this only to deliver what you bought and to let you restore it with{' '}
              <strong>Restore purchases</strong> in Settings. We never see your card or bank
              details. Google processes your payment under its own privacy policy.
            </p>

            <h2>Advertising</h2>
            <p>
              The game offers <strong>optional rewarded ads</strong>: you choose to watch one in
              return for something in the game. Ads are served by <strong>Google AdMob</strong>.
              To show and measure ads, AdMob may collect:
            </p>
            <ul>
              <li>your device&apos;s advertising ID;</li>
              <li>your IP address, which gives an approximate location;</li>
              <li>information about the ads you see and tap.</li>
            </ul>
            <p>
              Where the law requires it (the EEA, the UK and some US states), the game shows
              Google&apos;s consent message before any ads, and you can choose whether ads are
              personalised. On iOS, the game asks your permission before any tracking (App
              Tracking Transparency). You can change your choice at any time in{' '}
              <strong>Settings → Privacy</strong>. You can also reset or delete your advertising
              ID in your phone&apos;s own settings.
            </p>

            <h2>Why we use your data, and our legal basis</h2>
            <ul>
              <li>
                <strong>Purchases:</strong> to deliver and restore what you paid for (performing
                our contract with you) and to keep records that tax law requires (legal
                obligation).
              </li>
              <li>
                <strong>Personalised ads:</strong> with your consent, where consent is required.
              </li>
              <li>
                <strong>Non-personalised ads:</strong> our legitimate interest in funding a free
                game, limited to what is needed to show, measure and protect ads against fraud.
              </li>
            </ul>

            <h2>Who we share it with</h2>
            <p>
              Only the service providers that run these features. Each processes data under its
              own privacy policy:
            </p>
            <ul className="wl-legal__providers">
              {PROVIDERS.map((p) => (
                <li key={p.name}>
                  <strong>{p.name}</strong>: {p.role}{' '}
                  <a href={p.href} target="_blank" rel="noopener noreferrer">
                    Privacy policy
                  </a>
                  {p.extra && (
                    <>
                      {' · '}
                      <a href={p.extra.href} target="_blank" rel="noopener noreferrer">
                        {p.extra.label}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <p>
              These providers may process data outside the UK and EEA, for example in the United
              States. Where they do, it is protected by safeguards such as standard contractual
              clauses.
            </p>
            <p>
              <strong>We do not sell your personal data.</strong> Under some US state laws,
              personalised advertising can count as &quot;sharing&quot; personal data. You can opt
              out of it through the consent choices above.
            </p>

            <h2>Children</h2>
            <p>
              The game is not directed at children under 13, and we do not knowingly collect
              personal data from them. If you believe a child has made a purchase or seen
              personalised ads, contact us and we will help.
            </p>

            <h2>How long we keep it</h2>
            <ul>
              <li>
                <strong>Progress, items and settings:</strong> on your device until you delete
                them or uninstall the game.
              </li>
              <li>
                <strong>Purchase records:</strong> for as long as you might need to restore a
                purchase, and as long as UK tax and accounting law requires (usually six years).
              </li>
              <li>
                <strong>Advertising data:</strong> held by Google under its own retention rules.
              </li>
            </ul>

            <h2>Your rights</h2>
            <p>
              If you are in the UK or EU, you have the right to access, correct, delete or export
              your personal data, to object to or restrict how we use it, and to withdraw consent
              at any time. You can also complain to the UK Information Commissioner&apos;s Office
              (
              <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              ) or your local data protection authority.
            </p>
            <p>
              If you are in California, you have the right to know what personal data we hold,
              to delete or correct it, to opt out of its sale or sharing, and not to be treated
              differently for using these rights.
            </p>
            <p>
              To use any of these rights, email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
              Because there is no account, include your Google Play order number (it starts with{' '}
              <em>GPA.</em> and is in your purchase receipt email) if your request is about a
              purchase. We will reply within 30 days.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              If this policy changes, we will update the date at the top. For significant
              changes, such as adding accounts or cloud saves, we will also tell you in the game
              before the change takes effect.
            </p>

            <h2>Contact</h2>
            <p>
              {COMPANY}, {WORDLORE.country}.
              <br />
              Email: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
            </p>
          </article>
        </div>
      </section>

      <DocFooter />
    </main>
  )
}
