'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * The Wordlore trailer, click to play. Until someone presses play the page
 * loads only the poster, so YouTube's player (and its scripts) never slows the
 * page or reaches the visitor. Then the privacy-enhanced player loads in place
 * and starts. Pressing play also pauses the page's own music.
 */

const VIDEO_ID = 'rb9LGUTdag0'
export const TRAILER_PLAY_EVENT = 'wordlore:trailer-play'

export function WordloreTrailer() {
  const [playing, setPlaying] = useState(false)

  const play = () => {
    window.dispatchEvent(new Event(TRAILER_PLAY_EVENT))
    setPlaying(true)
  }

  return (
    <div className="wl-frame wl-trailer">
      <div className="wl-trailer__screen">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title="Wordlore: Norse Saga, official trailer"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <button type="button" className="wl-trailer__poster" onClick={play} aria-label="Play the Wordlore: Norse Saga trailer">
            <Image
              src="/Images/games/wordlore/trailer-poster.jpg"
              alt=""
              fill
              sizes="(max-width: 1000px) 92vw, 960px"
              style={{ objectFit: 'cover' }}
            />
            <span className="wl-trailer__play" aria-hidden>
              <svg viewBox="0 0 24 24" width="34" height="34">
                <path d="M8 5.5v13l10.5-6.5L8 5.5z" fill="currentColor" />
              </svg>
            </span>
            <span className="wl-trailer__label">Watch the trailer</span>
          </button>
        )}
      </div>
    </div>
  )
}
