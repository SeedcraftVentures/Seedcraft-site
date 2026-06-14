'use client'

import { useEffect, useRef, useState } from 'react'
import { howWeWork } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { Mark } from '../Mark'
import { Card } from '../Card'
import { Reveal } from '../Reveal'
import type { PartId } from '../mark-parts'

// Each step lights the parts it maps to (cumulative).
const STEP_PARTS: PartId[][] = [
  ['barTop'], // 01 Build
  ['barTop', 'barMid', 'barBot'], // 02 Prove
  ['barTop', 'barMid', 'barBot', 'chevron'], // 03 Hand over
]

function StepCard({
  step,
  idx,
  onReach,
}: {
  step: (typeof howWeWork.steps)[number]
  idx: number
  onReach: (i: number) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setActive(e.isIntersecting), {
      threshold: 0.5,
      rootMargin: '-12% 0px -18% 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (active) onReach(idx)
  }, [active, idx, onReach])

  return (
    <div ref={ref}>
      <Card
        active={active}
        style={{
          padding: '40px 34px',
          height: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h3
          className="font-display"
          style={{ fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', letterSpacing: '-1px', margin: '0 0 14px', color: 'var(--f)' }}
        >
          {step.title}
        </h3>
        <p style={{ color: 'var(--read)', fontSize: 15.5, lineHeight: 1.55, maxWidth: 280 }}>
          {step.body}
        </p>
      </Card>
    </div>
  )
}

export function HowWeWork() {
  const [reached, setReached] = useState(0)
  const onReach = (i: number) => setReached((r) => Math.max(r, i))

  return (
    <section
      id="how-we-work"
      className="work-section"
      data-cursor="light"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* large glowing mark on the right — lights part-by-part as steps activate */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          right: '-130px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <Mark
          variant="lit"
          litParts={STEP_PARTS[reached]}
          size="min(560px, 58vw)"
          glow
        />
      </div>

      <div
        className="mx-auto px-6 md:px-10"
        style={{ maxWidth: 'var(--maxw)', position: 'relative', zIndex: 1 }}
      >
        {/* heading sits on the left — we read left to right */}
        <Reveal style={{ maxWidth: 580 }}>
          <SectionLabel
            color="var(--a)"
            labelColor="rgba(255,255,255,0.7)"
            ruleColor="rgba(255,255,255,0.18)"
          >
            {howWeWork.label}
          </SectionLabel>
          <h2
            className="font-display"
            style={{
              color: '#fff',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              margin: '24px 0 16px',
            }}
          >
            {howWeWork.title}
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: 'clamp(1.02rem, 1.6vw, 1.18rem)',
              lineHeight: 1.55,
            }}
          >
            {howWeWork.sub}
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: 24,
            marginTop: 56,
          }}
        >
          {howWeWork.steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.12}>
              <StepCard step={s} idx={i} onReach={onReach} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
