'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { cta } from '@/lib/content'
import { Mark } from '../Mark'
import { Button } from '../Button'
import { Reveal } from '../Reveal'

export function Cta() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <div
            ref={ref}
            className="shape glow-slab cta-glow"
            data-cursor="light"
            style={{ maxWidth: 1000, margin: '0 auto' }}
          >
          {inView || reduce ? (
            <Mark variant={reduce ? 'static' : 'assemble'} assembleStyle="pop" size={64} color="#fff" shadow />
          ) : (
            <div style={{ width: 64, height: 64 }} />
          )}
          <h2
            className="font-display"
            style={{ color: '#fff', fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', letterSpacing: '-1.5px', margin: '22px 0 14px' }}
          >
            {cta.title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.15rem', maxWidth: 480, marginBottom: 30 }}>
            {cta.body}
          </p>
            <Button href={cta.button.href} variant="cream" size="lg">
              {cta.button.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
