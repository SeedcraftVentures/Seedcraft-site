'use client'

import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { TRAILER_PLAY_EVENT } from './WordloreTrailer'

/**
 * The game's home loop, playing under the Wordlore page.
 *
 * Browsers block sound until a visitor has interacted with the site, so this
 * tries to start on load (allowed where the browser already trusts the site)
 * and otherwise starts on the first tap, click or key press. The toggle is
 * always there to stop it, and a visitor who turns it off stays off.
 *
 * Level and fade match the game (Runestone src/ui/music.tsx): home at 30%.
 */

const SRC = '/audio/wordlore/home.mp3'
const VOLUME = 0.3
const FADE_MS = 1200
const STORE_KEY = 'wordlore-music'

function readPref(): 'on' | 'off' | null {
  try {
    const v = localStorage.getItem(STORE_KEY)
    return v === 'on' || v === 'off' ? v : null
  } catch {
    return null
  }
}

function writePref(v: 'on' | 'off') {
  try {
    localStorage.setItem(STORE_KEY, v)
  } catch {
    // storage blocked: the choice just won't be remembered
  }
}

export function WordloreMusic() {
  const audio = useRef<HTMLAudioElement | null>(null)
  const button = useRef<HTMLButtonElement | null>(null)
  const fadeId = useRef<ReturnType<typeof setInterval> | null>(null)
  const [on, setOn] = useState(false)

  const fadeTo = (to: number, done?: () => void) => {
    const a = audio.current
    if (!a) return
    if (fadeId.current) clearInterval(fadeId.current)
    const from = a.volume
    const steps = Math.max(1, Math.round(FADE_MS / 50))
    let i = 0
    fadeId.current = setInterval(() => {
      i++
      a.volume = Math.min(1, Math.max(0, from + ((to - from) * i) / steps))
      if (i >= steps) {
        if (fadeId.current) clearInterval(fadeId.current)
        fadeId.current = null
        done?.()
      }
    }, 50)
  }

  const start = () => {
    const a = audio.current
    if (!a) return Promise.reject()
    a.volume = 0
    return a.play().then(() => {
      setOn(true)
      fadeTo(VOLUME)
    })
  }

  const stop = () => {
    setOn(false)
    fadeTo(0, () => audio.current?.pause())
  }

  useEffect(() => {
    const a = new Audio(SRC)
    a.loop = true
    a.preload = 'auto'
    audio.current = a

    // First interaction anywhere except the toggle itself, which handles its own click.
    const onFirst = (e: Event) => {
      if (button.current?.contains(e.target as Node)) return
      // Pressing play on the trailer shouldn't start the music it's about to pause
      if ((e.target as Element | null)?.closest?.('.wl-trailer')) return
      removeFirst()
      start().catch(() => {})
    }
    const events = ['pointerdown', 'keydown'] as const
    const removeFirst = () => events.forEach((t) => window.removeEventListener(t, onFirst))

    if (readPref() !== 'off') {
      start().catch(() => events.forEach((t) => window.addEventListener(t, onFirst)))
    }

    // Quiet while the tab is hidden, back when it returns.
    let resume = false
    const onVisibility = () => {
      if (document.hidden) {
        resume = !a.paused
        a.pause()
      } else if (resume) {
        a.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    // The trailer has its own sound: fade the music out (without remembering it as off).
    const onTrailer = () => {
      removeFirst()
      resume = false
      if (!a.paused) stop()
    }
    window.addEventListener(TRAILER_PLAY_EVENT, onTrailer)

    return () => {
      removeFirst()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener(TRAILER_PLAY_EVENT, onTrailer)
      if (fadeId.current) clearInterval(fadeId.current)
      a.pause()
      a.src = ''
      audio.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = () => {
    if (on) {
      writePref('off')
      stop()
    } else {
      writePref('on')
      start().catch(() => {})
    }
  }

  return (
    <button
      ref={button}
      type="button"
      className={`wl-music${on ? ' is-on' : ''}`}
      onClick={toggle}
      aria-pressed={on}
      aria-label={on ? 'Turn music off' : 'Turn music on'}
      title={on ? 'Music off' : 'Music on'}
    >
      {on ? <Volume2 size={20} strokeWidth={2.2} aria-hidden /> : <VolumeX size={20} strokeWidth={2.2} aria-hidden />}
      <span className="wl-music__label">Music</span>
    </button>
  )
}
