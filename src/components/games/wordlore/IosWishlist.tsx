'use client'

import { useState } from 'react'
import { joinBeta } from '@/lib/supabase-public'
import { WORDLORE } from './content'

/**
 * The iOS wishlist: one email field, for people who want to hear the day
 * Wordlore reaches the App Store. `?ref=` on the page's URL is kept, so you
 * can see which shared links work (seedcraft.co/wordlore/ios?ref=linkedin).
 */
export function IosWishlist({ variant = 'page' }: { variant?: 'hero' | 'page' }) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'sending' | 'joined' | 'already' | 'invalid' | 'failed'>('idle')

  const ready = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ready || state === 'sending') return
    setState('sending')
    const ref = new URLSearchParams(window.location.search).get('ref')
    const source = ref ?? (variant === 'hero' ? 'game-page' : null)
    setState(await joinBeta({ product: 'wordlore', email, platform: 'ios', source }))
  }

  if (state === 'joined' || state === 'already')
    return (
      <div className={`wl-notify__done wl-notify--${variant}`} role="status">
        <span className="wl-notify__done-rune" aria-hidden>
          ᛟ
        </span>
        <div>
          <p className="wl-notify__done-title">{state === 'joined' ? 'You’re on the list.' : 'You’re already on the list.'}</p>
          <p>We’ll email you the day Wordlore lands on the App Store.</p>
        </div>
      </div>
    )

  return (
    <form className={`wl-notify wl-notify--${variant}`} onSubmit={submit} noValidate>
      <label className="wl-notify__label" htmlFor={`wl-notify-${variant}`}>
        {variant === 'hero' ? 'Coming to iPhone and iPad' : 'Your email'}
      </label>
      <div className="wl-notify__row">
        <input
          id={`wl-notify-${variant}`}
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <button type="submit" className="wl-btn wl-notify__submit" disabled={!ready || state === 'sending'}>
          {state === 'sending' ? 'Adding…' : 'Notify me'}
        </button>
      </div>
      <p className="wl-notify__small">
        One email when it launches on iOS, nothing else. To be removed, email{' '}
        <a href={`mailto:${WORDLORE.contact}`}>{WORDLORE.contact}</a>.
      </p>
      {state === 'invalid' && <p className="wl-notify__error">That email doesn’t look right. Check it and try again.</p>}
      {state === 'failed' && (
        <p className="wl-notify__error">
          Something went wrong. Try again, or email <a href={`mailto:${WORDLORE.contact}?subject=Wordlore%20on%20iOS`}>{WORDLORE.contact}</a>.
        </p>
      )}
    </form>
  )
}
