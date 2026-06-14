'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Gentle fade-up on entry. Content is readable immediately (CSS handles the
 * still fallback under prefers-reduced-motion); motion is a grace note.
 */
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
  id,
  style,
}: {
  children: React.ReactNode
  as?: React.ElementType
  delay?: number
  className?: string
  id?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true)
            io.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ ...style, transitionDelay: shown ? `${delay}s` : '0s' }}
    >
      {children}
    </Tag>
  )
}
