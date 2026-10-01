'use client'

import { useState } from 'react'
import { joinBeta, type BetaPlatform } from '@/lib/supabase-public'
import { WORDLORE } from './content'

const PLATFORMS: { id: BetaPlatform; label: string }[] = [
  { id: 'android', label: 'Android' },
  { id: 'ios', label: 'iPhone or iPad' },
  { id: 'both', label: 'Both' },
]

/** The Wordlore beta sign-up. `?ref=` on the page's URL is kept, so you can see which shared links work. */
export function BetaForm() {
  const [email, setEmail] = useState('')
  const [platform, setPlatform] = useState<BetaPlatform | null>(null)
  const [consent, setConsent] = useState(false)
  const [state, setState] = useState<'idle' | 'sending' | 'joined' | 'already' | 'invalid' | 'failed'>('idle')

  const ready = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim()) && platform && consent
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ready || state === 'sending') return
    setState('sending')
    // Where the link was shared from, if it says (seedcraft.co/wordlore/beta?ref=linkedin)
    const source = new URLSearchParams(window.location.search).get('ref')
    setState(await joinBeta({ product: 'wordlore', email, platform: platform!, source }))
  }

  if (state === 'joined' || state === 'already')
    return (
      <div className="wl-beta__done" role="status">
        <p className="wl-beta__done-rune" aria-hidden>
          ᛟ
        </p>
        <h2>{state === 'joined' ? 'You’re on the list.' : 'You’re already on the list.'}</h2>
        <p>
          We’ll email you when the beta opens on {platform === 'ios' ? 'iPhone and iPad' : platform === 'both' ? 'Android and iOS' : 'Android'}. Until then, the
          realms wait.
        </p>
      </div>
    )

  return (
    <form className="wl-beta" onSubmit={submit} noValidate>
      <label className="wl-beta__field">
        <span>Email</span>
        <input type="email" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
      </label>

      <fieldset className="wl-beta__field">
        <legend>What will you play on?</legend>
        <div className="wl-beta__choices">
          {PLATFORMS.map((p) => (
            <label key={p.id} className={`wl-beta__choice${platform === p.id ? ' is-on' : ''}`}>
              <input type="radio" name="platform" value={p.id} checked={platform === p.id} onChange={() => setPlatform(p.id)} />
              {p.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="wl-beta__consent">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
        <span>
          Email me about the Wordlore beta and launch. Nothing else, and I can leave any time by emailing{' '}
          <a href={`mailto:${WORDLORE.contact}`}>{WORDLORE.contact}</a>.
        </span>
      </label>

      <button type="submit" className="wl-btn wl-beta__submit" disabled={!ready || state === 'sending'}>
        {state === 'sending' ? 'Joining…' : 'Join the beta'}
      </button>

      {state === 'invalid' && <p className="wl-beta__error">That email doesn’t look right. Check it and try again.</p>}
      {state === 'failed' && (
        <p className="wl-beta__error">
          Something went wrong. Try again, or email <a href={`mailto:${WORDLORE.contact}?subject=Wordlore%20beta`}>{WORDLORE.contact}</a>.
        </p>
      )}
    </form>
  )
}
