'use client'

import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ventures, type Venture } from '@/lib/content'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '../SectionLabel'
import { StatusTag } from '../Tag'
import { Mark } from '../Mark'
import { Reveal } from '../Reveal'

function matches(v: Venture, key: string) {
  if (key === 'all') return true
  return v.stage === key
}

function VentureCard({ v }: { v: Venture }) {
  const body = (
    <>
      <div className="venture-card__top">
        <span aria-hidden style={{ display: 'flex', color: 'var(--a)' }}>
          <Mark variant="static" size={20} />
        </span>
        <StatusTag status={v.status} />
      </div>

      <h3 className="venture-card__name font-display">{v.name}</h3>
      <p className="venture-card__desc">{v.desc}</p>

      <div className="venture-card__foot">
        <span className="venture-card__meta">
          <span className="venture-card__category">{v.category}</span>
          <span className="venture-card__platform">{v.platform}</span>
        </span>
        {v.href && (
          <span className="venture-card__link">
            Visit
            <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
          </span>
        )}
      </div>
    </>
  )

  const cls = 'shape card venture-card'

  return v.href ? (
    <a href={v.href} target="_blank" rel="noopener noreferrer" className={cls}>
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  )
}

export function Ventures() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState('all')

  const shown = useMemo(
    () => ventures.items.filter((v) => matches(v, active)),
    [active]
  )

  const counts = useMemo(
    () =>
      Object.fromEntries(
        ventures.filters.map((f) => [
          f.key,
          ventures.items.filter((v) => matches(v, f.key)).length,
        ])
      ),
    []
  )

  return (
    <section id="ventures" style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <SectionLabel>{ventures.label}</SectionLabel>

        <Reveal>
          <h2
            className="font-display"
            style={{
              color: 'var(--f)',
              fontSize: 'clamp(2rem, 5vw, 3.2rem)',
              letterSpacing: '-0.8px',
              lineHeight: 1.05,
              margin: '24px 0 16px',
              maxWidth: 760,
            }}
          >
            {ventures.title}
          </h2>
          <p
            style={{
              color: 'var(--read)',
              fontSize: 'clamp(1.02rem, 1.6vw, 1.15rem)',
              lineHeight: 1.6,
              maxWidth: 620,
            }}
          >
            {ventures.sub}
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="venture-filters" role="group" aria-label="Filter ventures">
            {ventures.filters.map((f) => {
              const on = f.key === active
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setActive(f.key)}
                  aria-pressed={on}
                  className={`shape venture-filter ${on ? 'is-on' : ''}`}
                  disabled={counts[f.key] === 0}
                >
                  {f.label}
                  <span className="venture-filter__count">{counts[f.key]}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        <motion.div layout={!reduce} className="venture-grid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((v) => (
              <motion.div
                key={v.name}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              >
                <VentureCard v={v} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
