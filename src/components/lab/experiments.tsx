'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import {
  Crosshair,
  BadgeCheck,
  Handshake,
  Hammer,
  TrendingUp,
  Anchor,
  type LucideIcon,
} from 'lucide-react'
import { Card } from '../Card'
import { SlantFrame } from '../SlantFrame'
import { ShapeMedia } from '../ShapeMedia'
import { HeatGlow } from '../HeatGlow'
import { HighlightText } from '../HighlightText'
import { Mark } from '../Mark'
import { SectionLabel } from '../SectionLabel'
import { Button } from '../Button'
import type { PartId } from '../mark-parts'
import { howWeWork, mission } from '@/lib/content'

/* Unsplash placeholders so the photo-frame concepts read with real imagery. */
const U = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

/* tiny in-view hook */
function useInView<T extends HTMLElement>(threshold = 0.5) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold,
      rootMargin: '-12% 0px -18% 0px',
    })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ============================================================
   A. Slanted media row — parts/parallelograms as photo frames
   ============================================================ */
const PEOPLE = [
  { id: '1507003211169-0a1dd7228f2d', name: 'Andre', role: 'Founder' },
  { id: '1494790108377-be9c29b29330', name: 'Partner', role: 'Co-founder' },
  { id: '1500648767791-00dcc994a43e', name: 'Builder', role: 'Product' },
]

export function ShapeMediaRow() {
  return (
    <div>
      <div style={{ maxWidth: 760, marginBottom: 36 }}>
        <SectionLabel>Who we are</SectionLabel>
        <h3 className="font-display" style={{ ...headStyle, marginTop: 22, marginBottom: 10 }}>
          The people behind the pathways
        </h3>
        <p style={{ color: 'var(--read)', fontSize: '1.05rem', lineHeight: 1.55, maxWidth: 540 }}>
          A small team that builds the real thing, proves it, and stays in for the
          long run.
        </p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 22,
          maxWidth: 880,
        }}
      >
        {PEOPLE.map((p, i) => (
          <SlantFrame
            key={p.id}
            ratio="4 / 5"
            src={U(p.id, 600)}
            alt={`${p.name}, ${p.role}`}
            title={p.name}
            sub={p.role}
            style={{ marginTop: i === 1 ? 32 : 0 }}
          />
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   B. Feature columns — clean cropped mark-part glyph + title
   ============================================================ */
const FEATURES: { Icon: LucideIcon; title: string; body: string }[] = [
  { Icon: Crosshair, title: 'Find the gap', body: 'We look where everyone else walked past, then build the real thing in front of real people.' },
  { Icon: BadgeCheck, title: 'Prove it works', body: 'Real users, real revenue. A genuine proof point before anyone says the word scale.' },
  { Icon: Handshake, title: 'Hand it over', body: 'The right operators grow it. We keep a stake, stay close, and clear the next obstacle.' },
]

export function FeatureColumns({ dark = false }: { dark?: boolean }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
      {FEATURES.map((f) => (
        <div key={f.title}>
          <span
            className={`shape feat-chip ${dark ? 'feat-chip--dark' : ''}`.trim()}
            style={{ width: 52, height: 52 }}
          >
            <f.Icon size={22} strokeWidth={2} />
          </span>
          <h4
            className="font-display"
            style={{ fontSize: '1.3rem', letterSpacing: '-0.5px', marginBottom: 8, color: dark ? '#fff' : 'var(--f)' }}
          >
            {f.title}
          </h4>
          <p style={{ fontSize: 15, lineHeight: 1.55, color: dark ? 'rgba(255,255,255,0.72)' : 'var(--read)' }}>
            {f.body}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ============================================================
   C. Story grid — 3-up slanted media cards (with photos)
   ============================================================ */
const STORY = [
  { title: 'Problem we saw', sub: 'Good people slowed down by tools never built for them.', id: '1521737711867-e3b97375f902' },
  { title: 'Choice we made', sub: 'Build the real thing fast, put it in front of real people.', id: '1522071820081-009f0129c71c' },
  { title: 'Why we exist', sub: 'To clear obstacles and open pathways, one venture at a time.', id: '1600880292203-757bb62b4baf' },
]

export function StoryGrid() {
  return (
    <div>
      <h3 className="font-display" style={{ ...headStyle, textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
        Built from the obstacles people meet every day
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
        {STORY.map((s, i) => (
          <SlantFrame
            key={s.title}
            ratio="4 / 5"
            src={U(s.id, 700)}
            alt={s.title}
            title={s.title}
            sub={s.sub}
            style={{ marginTop: i === 1 ? 0 : 30 }}
          />
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   D. Mission v2 — centred statement, hierarchy reworked
   ============================================================ */
export function MissionCentred() {
  const lead = mission.blocks.find((b) => b.kind === 'lead')!
  const core = mission.blocks.find((b) => b.kind === 'core')!
  const truth = mission.blocks.find((b) => b.kind === 'truth')!
  const signoff = mission.blocks.find((b) => b.kind === 'signoff')!
  return (
    <div style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <SectionLabel>{mission.label}</SectionLabel>
      </div>

      <p className="font-display" style={{ ...lede, marginTop: 36 }}>
        {lead.text}
      </p>

      {/* the focal mission line — biggest */}
      <p className="font-display" style={{ ...focal, margin: '28px auto 0', maxWidth: 800 }}>
        {core.text}
      </p>

      {/* supporting human truth — readable body, not Cal Sans */}
      <p
        style={{
          color: 'var(--read)',
          fontWeight: 600,
          fontSize: 'clamp(1.05rem, 1.7vw, 1.25rem)',
          lineHeight: 1.55,
          margin: '28px auto 0',
          maxWidth: 560,
        }}
      >
        {truth.text}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '36px 0 28px' }}>
        <Mark variant="static" size={34} color="var(--a)" />
      </div>

      {/* sign-off — forest, never the light accent green */}
      <p className="font-display" style={{ ...lede, color: 'var(--f)' }}>
        {signoff.text}
      </p>
    </div>
  )
}

/* ============================================================
   E. Mission v2b — highlighted-keyword body (now readable Figtree)
   ============================================================ */
export function MissionHighlight() {
  return (
    <div style={{ maxWidth: 880, margin: '0 auto' }}>
      <SectionLabel>{mission.label}</SectionLabel>
      <div style={{ marginTop: 32 }}>
        <HighlightText
          segments={[
            'Everyone wants to live a good life. To create, to inspire, to do what they think is important. ',
            { dim: 'And yet the world, somehow, finds a way to ' },
            { hl: 'slow us down' },
            { dim: '. Our mission is to ' },
            { hl: 'remove those obstacles' },
            { dim: ', and create ' },
            { hl: 'new pathways' },
            { dim: ', so people have the freedom to be who they want to be.' },
          ]}
        />
      </div>
    </div>
  )
}

/* ============================================================
   F. How we work — cards, recoloured (forest slabs, accent edge)
   ============================================================ */
const STEP_PARTS: PartId[][] = [
  ['barTop'],
  ['barTop', 'barMid', 'barBot'],
  ['barTop', 'barMid', 'barBot', 'chevron'],
]

function WorkCard({
  step,
  idx,
  onReach,
}: {
  step: (typeof howWeWork.steps)[number]
  idx: number
  onReach: (i: number) => void
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.55)
  useEffect(() => {
    if (inView) onReach(idx)
  }, [inView, idx, onReach])
  return (
    <div ref={ref}>
      <Card dark active={inView} style={{ padding: '34px 32px', height: '100%' }}>
        <div className="work-step__num">{step.num}</div>
        <h4 className="font-display" style={{ fontSize: '1.7rem', letterSpacing: '-1px', margin: '10px 0 12px', color: '#fff' }}>
          {step.title}
        </h4>
        <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 15, lineHeight: 1.55 }}>{step.body}</p>
      </Card>
    </div>
  )
}

export function HowWeWorkCards() {
  const [reached, setReached] = useState(0)
  const onReach = (i: number) => setReached((r) => Math.max(r, i))
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 44 }}>
        <Mark variant="lit" litParts={STEP_PARTS[reached]} size={96} color="var(--a)" />
        <h3 className="font-display" style={{ ...headStyle, color: '#fff', textAlign: 'center', marginTop: 24, marginBottom: 0 }}>
          {howWeWork.title}
        </h3>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 26 }}>
        {howWeWork.steps.map((s, i) => (
          <WorkCard key={s.num} step={s} idx={i} onReach={onReach} />
        ))}
      </div>
    </div>
  )
}

/* ============================================================
   G. Icon mosaic — parts as structure (clean cropped glyphs)
   ============================================================ */
export function IconMosaic() {
  const rows: { Icon: LucideIcon; t: string; s: string }[] = [
    { Icon: Hammer, t: 'Build', s: 'the real thing, fast' },
    { Icon: TrendingUp, t: 'Prove', s: 'real users, real revenue' },
    { Icon: Anchor, t: 'Stay in', s: 'a stake for the long run' },
  ]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 26, alignItems: 'stretch' }}>
      <div style={{ display: 'grid', gap: 16 }}>
        {rows.map((r, i) => (
          <Card key={r.t} active={i === 0} style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '22px 28px' }}>
            <span style={{ display: 'flex', color: 'var(--a)' }}>
              <r.Icon size={26} strokeWidth={2} />
            </span>
            <div>
              <div className="font-display" style={{ fontSize: '1.3rem', letterSpacing: '-0.5px', color: 'var(--f)' }}>
                {r.t}
              </div>
              <div style={{ fontSize: 14, color: 'var(--read)' }}>{r.s}</div>
            </div>
          </Card>
        ))}
      </div>
      {/* the shape stays BIG here — used as a media window, not a tiny icon */}
      <div style={{ position: 'relative', minHeight: 280 }}>
        <ShapeMedia part="chevron" src={U('1454165804606-c3d57bc86b40', 800)} alt="" style={{ height: '100%' }} />
      </div>
    </div>
  )
}

/* ============================================================
   H. NEW — CTA heat-glow box with an assembling mark
   ============================================================ */
export function CtaGlow() {
  const reduce = useReducedMotion()
  const { ref, inView } = useInView<HTMLDivElement>(0.4)
  return (
    <div ref={ref}>
      <HeatGlow className="cta-glow" noise={false}>
        {inView || reduce ? (
          <Mark variant={reduce ? 'static' : 'assemble'} assembleStyle="pop" size={64} color="#fff" />
        ) : (
          <div style={{ width: 64, height: 64 }} />
        )}
        <h3
          className="font-display"
          style={{ color: '#fff', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', letterSpacing: '-1.5px', margin: '22px 0 12px' }}
        >
          Spotted a gap we should clear?
        </h3>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', maxWidth: 460, marginBottom: 28 }}>
          We build with operators and guest co-founders. If you have seen the
          obstacle, we want to hear it.
        </p>
        <Button href="mailto:contact@seedcraft.co" variant="cream" size="lg">
          Get in touch
        </Button>
      </HeatGlow>
    </div>
  )
}

/* ============================================================
   I. NEW — image revealed through a pair of top bars
   ============================================================ */
export function SplitMedia() {
  const img = U('1531497865144-0464ef8fb9a9', 1000)
  return (
    <div>
      <h3 className="font-display" style={{ ...headStyle }}>
        Media framed by the mark
      </h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <ShapeMedia part="barTop" src={img} alt="" />
        <ShapeMedia part="barBot" src={img} alt="" />
      </div>
    </div>
  )
}

/* ---- shared inline styles ---- */
const headStyle: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
  letterSpacing: '-1px',
  color: 'var(--f)',
  marginBottom: 32,
}
const lede: React.CSSProperties = {
  fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)',
  letterSpacing: '-1px',
  lineHeight: 1.14,
  color: 'var(--f)',
}
const focal: React.CSSProperties = {
  fontSize: 'clamp(2rem, 5vw, 3.3rem)',
  letterSpacing: '-1.6px',
  lineHeight: 1.06,
  color: 'var(--f)',
}
