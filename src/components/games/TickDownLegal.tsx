import Link from 'next/link'
import { GamesLockup } from './GamesLockup'

/**
 * Tick Down combined Terms and Privacy Policy.
 *
 * Source of truth is the document supplied on 27 July 2026, which supersedes
 * the earlier local-first-only policy: the App now has optional online
 * leaderboards backed by Supabase. Wording is kept as supplied, with em-dashes
 * rewritten to commas, colons or full stops for the brand rule. No clause,
 * obligation or disclosure has been altered. The one correction since is the
 * legal name: Seedcraft Ventures Ltd, confirmed on 28 September 2026.
 *
 * Rendered by both the canonical route and the legacy /games/ticker/privacy
 * path that went to the Play Console, so no published link can break.
 */

const UPDATED = '27 July 2026'
const CONTACT = 'admin@seedcraft.co'

export function TickDownLegal() {
  return (
    <main style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div style={{ borderBottom: '1px solid var(--line)', padding: '18px 0' }}>
        <div
          className="mx-auto px-6 md:px-10"
          style={{ maxWidth: 'var(--maxw)', display: 'flex', alignItems: 'center' }}
        >
          <GamesLockup size="sm" color="var(--f)" />
        </div>
      </div>

      <section style={{ padding: '72px 0 100px' }}>
        <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
          <article className="legal">
            <p className="muted">Tick Down, a game by Seedcraft Games</p>
            <h1>Terms and Privacy Policy</h1>
            <p className="muted">Last updated: {UPDATED}</p>

            <p style={{ marginTop: 24 }}>
              Tick Down (the &quot;App&quot;) is developed by{' '}
              <strong>Seedcraft Ventures Ltd</strong> (&quot;we&quot;, &quot;us&quot;). This policy
              explains what information the App does and does not handle. In short: the App is{' '}
              <strong>free, offline, and stores your game progress only on your device</strong>.
              The one exception is the <strong>optional online leaderboards</strong>. If you
              choose to join them, a display name and your scores are shared publicly. We do not
              use advertising, analytics, or any third-party tracking.
            </p>

            <h2 className="legal-part">Privacy Policy</h2>

            <h3>Information we collect</h3>
            <p>
              By default, <strong>none</strong>. The App has no accounts, no login, and no
              analytics. It does not ask for your email, contacts, or location.
            </p>
            <p>
              If you <strong>opt in to the online leaderboards</strong> by choosing a display
              name, we collect and store, on our leaderboard service:
            </p>
            <ul>
              <li>
                the <strong>display name</strong> you enter (shown publicly);
              </li>
              <li>
                your <strong>game scores</strong> and the game length they were set at (shown
                publicly);
              </li>
              <li>
                an <strong>anonymous ID</strong> automatically created for your device, so we can
                attribute and update your entry. It is not linked to your real identity, email, or
                any account.
              </li>
            </ul>

            <h3>Data stored on your device</h3>
            <p>
              Your game data, meaning settings, best scores, daily streaks, achievement progress
              and similar, is saved <strong>locally on your device only</strong>. It never leaves
              your device and is not transmitted to us or to anyone else. Uninstalling the App
              removes this data.
            </p>

            <h3>Leaderboards (optional)</h3>
            <p>
              The online leaderboards are powered by <strong>Supabase</strong> (a database and
              authentication service acting as our processor). Joining is entirely optional. You
              only appear if you choose a display name. Your name and scores are then visible to
              other players. We do not share this data with advertisers or any other third
              parties, and the App contains no advertising or analytics SDKs.
            </p>
            <p>
              You can <strong>remove your leaderboard data at any time</strong> in the App under{' '}
              <em>Settings, Delete my leaderboard data</em>, which deletes your name and scores
              from the service. Your on-device progress is kept.
            </p>

            <h3>Permissions</h3>
            <ul>
              <li>
                <strong>Vibration</strong>: for haptic feedback during play.
              </li>
              <li>
                <strong>Audio playback</strong>: for sound effects.
              </li>
            </ul>
            <p>
              The App does <strong>not</strong> request microphone, camera, location, storage, or
              contacts access.
            </p>

            <h3>Children</h3>
            <p>
              Tick Down is intended for a general audience aged 13 and over and is not directed at
              children under 13.
            </p>

            <h3>Changes to this policy</h3>
            <p>
              If we add features in future (for example optional in-app purchases or advertising),
              we will update this policy and the App&apos;s Play Store data-safety details before
              those features are released, and we will revise the &quot;Last updated&quot; date
              above.
            </p>

            <h3>Contact</h3>
            <p>
              Questions about this policy? Email{' '}
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
            </p>

            <h2 className="legal-part">Terms of Use</h2>
            <p>
              By downloading or using Tick Down (the &quot;App&quot;) you agree to these terms. If
              you do not agree, please do not use the App.
            </p>

            <h3>The App</h3>
            <p>
              Tick Down is a free puzzle game provided by <strong>Seedcraft Ventures Ltd</strong> for
              your personal, non-commercial entertainment. We may add, change or remove features at
              any time.
            </p>

            <h3>Leaderboards and fair play</h3>
            <p>
              Taking part in the online leaderboards is optional. When you join, you agree to:
            </p>
            <ul>
              <li>
                choose a{' '}
                <strong>display name that is not offensive, impersonating, or infringing</strong>.
                Names are filtered and validated, and we may remove or reset a name that breaks
                this;
              </li>
              <li>
                not cheat, automate, tamper with, or otherwise submit scores you did not genuinely
                achieve in normal play.
              </li>
            </ul>
            <p>
              We may remove leaderboard entries, reset scores, or bar a device from the
              leaderboards if we reasonably believe these rules have been broken. Leaderboards are
              provided for fun; we do not guarantee their accuracy, availability, or that they are
              free of others&apos; manipulation.
            </p>

            <h3>Your content</h3>
            <p>
              The only content you provide is a display name, which is shown publicly alongside
              your scores. You are responsible for the name you choose. You can remove your name
              and scores at any time in <em>Settings, Delete my leaderboard data</em>.
            </p>

            <h3>Acceptable use</h3>
            <p>
              Do not use the App to break the law, infringe anyone&apos;s rights, or attempt to
              disrupt, reverse-engineer, or gain unauthorised access to the App or its leaderboard
              service.
            </p>

            <h3>No warranty</h3>
            <p>
              The App is provided &quot;as is&quot;, without warranties of any kind. To the fullest
              extent permitted by law, Seedcraft Ventures Ltd is not liable for any indirect or
              consequential loss arising from your use of the App. Nothing in these terms limits
              liability that cannot be limited by law.
            </p>

            <h3>Changes</h3>
            <p>
              We may update these terms from time to time; continued use of the App means you
              accept the current version. We will revise the &quot;Last updated&quot; date above.
            </p>

            <h3>Contact</h3>
            <p>
              Questions about these terms? Email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>.
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
          <span>© 2026 Seedcraft Ventures Ltd</span>
          <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>
            seedcraft.co
          </Link>
        </div>
      </footer>
    </main>
  )
}
