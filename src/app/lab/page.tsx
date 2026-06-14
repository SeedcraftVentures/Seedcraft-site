import type { Metadata } from 'next'
import { HeroMotionLab } from '@/components/lab/HeroMotionLab'
import {
  ShapeMediaRow,
  FeatureColumns,
  StoryGrid,
  MissionCentred,
  MissionHighlight,
  HowWeWorkCards,
  IconMosaic,
  CtaGlow,
  SplitMedia,
} from '@/components/lab/experiments'

export const metadata: Metadata = {
  title: 'Lab · Seedcraft',
  robots: { index: false, follow: false },
}

function LabFrame({
  no,
  title,
  note,
  bg = 'var(--paper)',
  padded = true,
  flush = false,
  children,
}: {
  no: string
  title: string
  note?: string
  bg?: string
  padded?: boolean
  flush?: boolean
  children: React.ReactNode
}) {
  return (
    <section className="lab-frame">
      <div className="lab-cap">
        <span className="lab-cap__no">{no}</span>
        <span>{title}</span>
        {note && (
          <span style={{ color: 'var(--ink)', fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>
            {note}
          </span>
        )}
        <span className="lab-cap__rule" />
      </div>
      <div className="lab-stage" style={{ background: bg, padding: flush ? 0 : padded ? '56px 40px' : 0 }}>
        {children}
      </div>
    </section>
  )
}

export default function LabPage() {
  return (
    <main className="lab-wrap">
      <header className="lab-head">
        <div className="lab-cap" style={{ marginBottom: 18 }}>
          <span className="lab-cap__no">SCV</span>
          <span>The Lab · v2</span>
          <span className="lab-cap__rule" />
        </div>
        <h1 className="font-display" style={{ fontSize: 'clamp(2.4rem, 6vw, 4rem)', letterSpacing: '-2px', lineHeight: 1, color: 'var(--f)' }}>
          Pushing the boat out with the mark.
        </h1>
        <p style={{ color: 'var(--read)', fontSize: '1.15rem', lineHeight: 1.55, marginTop: 18 }}>
          Layout, shape and motion experiments built from the four parts of the
          icon. Nothing here is final. Pick the ones that land and we promote
          them into the live site. Photos are stock placeholders.
        </p>
      </header>

      <LabFrame no="01" title="Hero motion" note="try each assemble style, then watch it dock" bg="var(--d)" flush>
        <HeroMotionLab />
      </LabFrame>

      <LabFrame no="02" title="People as photo frames" note="needs real photos to shine">
        <ShapeMediaRow />
      </LabFrame>

      <LabFrame no="03" title="Feature columns" note="real icons in brand-shaped chips">
        <FeatureColumns />
      </LabFrame>

      <LabFrame no="04" title="Story grid" note="3-up slanted photo frames">
        <StoryGrid />
      </LabFrame>

      <LabFrame no="05" title="Mission — centred statement" note="hierarchy reworked">
        <MissionCentred />
      </LabFrame>

      <LabFrame no="06" title="Mission — highlighted keywords" note="now readable Figtree" bg="var(--paper2)">
        <MissionHighlight />
      </LabFrame>

      <LabFrame no="07" title="How we work — cards" note="recoloured; parts light on enter" bg="var(--d)">
        <HowWeWorkCards />
      </LabFrame>

      <LabFrame no="08" title="Rows + shape window" note="icons for UI, the shape stays big as media">
        <IconMosaic />
      </LabFrame>

      <LabFrame no="09" title="NEW · CTA heat-glow box" note="correct non-hero use of Heat Glow" bg="var(--paper2)">
        <CtaGlow />
      </LabFrame>

      <LabFrame no="10" title="NEW · Image through the mark" note="paired part-shaped frames">
        <SplitMedia />
      </LabFrame>

      <LabFrame no="11" title="Feature columns on dark" bg="var(--d)">
        <FeatureColumns dark />
      </LabFrame>
    </main>
  )
}
