import type { Metadata } from 'next'
import Link from 'next/link'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Ticker! Privacy Policy · Seedcraft',
  description: 'Privacy policy for Ticker!, a game by Seedcraft Ventures.',
}

const UPDATED = '15 June 2026'
const CONTACT = 'andre@seedcraft.co'

export default function TickerPrivacyPolicy() {
  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* minimal top bar */}
      <div style={{ borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
        <div
          className="mx-auto px-6 md:px-10"
          style={{ maxWidth: 'var(--maxw)', display: 'flex', alignItems: 'center' }}
        >
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Mark variant="static" size={22} color="var(--f)" />
            <span
              className="font-display"
              style={{ color: 'var(--f)', fontSize: 19, letterSpacing: '-0.5px' }}
            >
              Seedcraft
            </span>
          </Link>
        </div>
      </div>

      <section style={{ padding: '72px 0 100px' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="legal">
            <p className="muted">Ticker!, a game by Seedcraft Ventures</p>
            <h1>Privacy Policy</h1>
            <p className="muted">Effective date: {UPDATED}</p>
            <p className="muted">Last updated: {UPDATED}</p>

            <p style={{ marginTop: 24 }}>
              This Privacy Policy explains how the Ticker! mobile application (&quot;the App&quot;,
              &quot;the Game&quot;) handles your information. It applies only to the Ticker! app. By
              playing the Game, you agree to the practices described here.
            </p>

            <h2>The short version</h2>
            <p>
              Ticker! is a local-first, offline game. We do not ask you to create an account, we do
              not ask for your name or email, and we do not collect or transmit personal information
              about you. Your game progress lives on your device.
            </p>

            <h2>Who we are</h2>
            <p>
              Ticker! is developed and published by Seedcraft Ventures (&quot;we&quot;,
              &quot;us&quot;, &quot;our&quot;), based in Auchterarder, Scotland, United Kingdom. For
              any question about this policy or your data, contact us at{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
            </p>

            <h2>Information we collect</h2>
            <p>We do not collect personal data. In particular, the App does not:</p>
            <ul>
              <li>require an account, login, name, email address, or phone number;</li>
              <li>collect or transmit your contacts, photos, location, or files;</li>
              <li>track you across other apps or websites;</li>
              <li>
                contain third-party advertising or analytics (at the date of this version; see
                Third-party services below).
              </li>
            </ul>

            <h2>Data stored on your device</h2>
            <p>
              The App saves your game progress locally on your device: scores, statistics,
              achievements, streaks, daily-puzzle history, and your settings (such as sound,
              haptics, and accessibility preferences). This information never leaves your device,
              is not visible to us, and is not backed up to any server (we have none). If you set a
              display name for a local leaderboard, it is stored on your device only.
            </p>

            <h2>Data collected by Google Play</h2>
            <p>
              We distribute the App through the Google Play Store. Google independently collects
              certain data as the store operator (for example, download and crash statistics and
              aggregated, anonymised usage information). This is governed by Google&apos;s own
              privacy policy, not ours. Any statistics we can see in the Play Console are aggregated
              and anonymised, and we cannot identify individual users from them.
            </p>
            <ul>
              <li>
                Google Privacy Policy:{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  policies.google.com/privacy
                </a>
              </li>
            </ul>

            <h2>Children</h2>
            <p>
              Ticker! is a words and numbers puzzle game intended for a general audience aged 13 and
              over. It is not directed at children under 13, and we do not knowingly collect any
              personal information from children. If you believe a child has provided us with
              personal information, contact us and we will delete it.
            </p>

            <h2>Retention and deletion</h2>
            <p>
              Because your data is stored only on your device, you control it entirely. To delete
              everything the App has stored, clear the App&apos;s data in your Android settings or
              uninstall the App. This permanently removes your local progress, statistics, and
              settings. We hold no copy.
            </p>

            <h2>Third-party services</h2>
            <p>
              The current version of the App contains no third-party advertising, analytics, or
              tracking SDKs. In future we may work with a publishing partner and introduce
              advertising or in-app purchases, which would involve a third-party SDK and its
              partners processing some data (such as a device advertising identifier). If and when
              that happens, we will update this policy and our Google Play Data safety disclosures
              in the same release, and, where required, ask for your consent before any personalised
              advertising data is processed. Purchases would be handled entirely by Google Play; we
              would never see or store your payment details.
            </p>

            <h2>Legal basis (UK GDPR)</h2>
            <p>
              Because the current version of the App does not process personal data, no legal basis
              is required. Where we later process data for advertising (see Third-party services), we
              will rely on your consent, and on our legitimate interests for fraud prevention and the
              security of the service.
            </p>

            <h2>Your rights</h2>
            <p>
              Under UK GDPR you have the right to access, rectify, erase, restrict, port, and object
              to the processing of your personal data. As we do not hold personal data about you,
              in practice there is nothing for us to disclose or delete, but you may contact us at{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a> at any time. You also have the right to
              complain to the Information Commissioner&apos;s Office (ICO), the UK supervisory
              authority, at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                ico.org.uk
              </a>
              .
            </p>

            <h2>Security</h2>
            <p>
              Your game data never leaves your device, which removes most transmission and storage
              risk. Your device&apos;s own security (screen lock, operating-system updates) protects
              it.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy, for example when we add new features or third-party
              services. Material changes will be posted here with a new &quot;Last updated&quot; date,
              and where required we will seek your consent before any new processing begins. Please
              review this page from time to time.
            </p>

            <h2>Contact</h2>
            <p>
              Seedcraft Ventures, Auchterarder, Scotland, United Kingdom.
              <br />
              Email: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
            </p>
          </article>
        </div>
      </section>

      <footer
        style={{
          background: 'var(--d)',
          color: 'rgba(255,255,255,0.6)',
          padding: '28px 0',
          fontSize: 13,
        }}
      >
        <div
          className="mx-auto px-6 md:px-10"
          style={{
            maxWidth: 'var(--maxw)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 10,
          }}
        >
          <span>© 2026 Seedcraft Ventures</span>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>
            seedcraft.co
          </Link>
        </div>
      </footer>
    </main>
  )
}
