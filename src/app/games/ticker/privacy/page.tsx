import type { Metadata } from 'next'
import Link from 'next/link'
import { Mark } from '@/components/Mark'

export const metadata: Metadata = {
  title: 'Ticker Privacy Policy · Seedcraft',
  description: 'Privacy policy for Ticker, a game by Seedcraft Ventures.',
}

const UPDATED = '15 June 2026'
const CONTACT = 'andre@seedcraft.co'

export default function TickerPrivacyPolicy() {
  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      {/* minimal top bar */}
      <div
        style={{
          borderBottom: '1px solid var(--line)',
          padding: '18px 0',
        }}
      >
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
            <p className="muted">Ticker, a game by Seedcraft Ventures</p>
            <h1>Privacy Policy</h1>
            <p className="muted">Last updated: {UPDATED}</p>

            <p style={{ marginTop: 24 }}>
              This Privacy Policy explains how Seedcraft Ventures (&quot;Seedcraft&quot;,
              &quot;we&quot;, &quot;us&quot;) handles information in connection with Ticker (the
              &quot;Game&quot;). By playing the Game, you agree to the practices described here.
            </p>

            <h2>Information we collect</h2>
            <p>
              Ticker currently collects no personal information. The Game has no user accounts
              and includes no analytics, advertising, or other third-party SDKs. It does not
              transmit personal data to us or to any third party.
            </p>
            <p>
              Any device-level information handled by the app store or your device operating
              system (for example, Google Play) is governed by that provider&apos;s own privacy
              policy, not this one.
            </p>
            <p>
              If you choose to contact us for support by email, we will receive your email
              address and whatever you include in your message, and we use that only to reply.
            </p>

            <h2>Future changes and publishing partners</h2>
            <p>
              We may in future work with a publishing partner and introduce features such as
              advertising or in-app purchases, which may involve third-party services that
              collect data. If and when that happens, we will update this Privacy Policy and the
              Google Play data disclosures before those services go live.
            </p>

            <h2>How we use information</h2>
            <p>
              Because the Game does not collect personal information, we use information only when
              you contact us directly, and only to respond to your request.
            </p>

            <h2>How we share information</h2>
            <p>
              We do not sell your information and we do not currently share it with third
              parties, except where required by law or to protect the rights, safety, and
              property of Seedcraft and our users.
            </p>

            <h2>Children&apos;s privacy</h2>
            <p>
              The Game is not directed to children under the age of 13 (or the minimum age
              required in your country), and we do not knowingly collect personal information
              from them. If you believe a child has provided us with information, please contact
              us and we will delete it.
            </p>

            <h2>Data retention</h2>
            <p>
              We keep any support correspondence only for as long as needed to handle your
              request, after which it is deleted.
            </p>

            <h2>Security</h2>
            <p>
              We take reasonable measures to protect information against loss, misuse, and
              unauthorised access. No method of transmission or storage is completely secure,
              so we cannot guarantee absolute security.
            </p>

            <h2>Your rights</h2>
            <p>
              Depending on where you live, you may have the right to access, correct, or delete
              any information we hold about you. Since the Game itself collects no personal
              information, this generally applies only to support emails you have sent us. To
              make a request, contact us at <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
            </p>

            <h2>International users</h2>
            <p>
              Seedcraft Ventures is based in Scotland, United Kingdom. Your information may be
              processed in the United Kingdom and other countries where our service providers
              operate.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will revise the
              &quot;Last updated&quot; date above. Significant changes will be made clear within
              the Game or here.
            </p>

            <h2>Contact</h2>
            <p>
              If you have any questions about this policy, contact us at{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
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
