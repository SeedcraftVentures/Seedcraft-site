import { partnerships } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { Card } from '../Card'
import { Button } from '../Button'
import { Reveal } from '../Reveal'

export function Partnerships() {
  return (
    <section id="partnerships" style={{ background: 'var(--paper2)', padding: '120px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <SectionLabel>{partnerships.label}</SectionLabel>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 48,
            alignItems: 'start',
            marginTop: 40,
          }}
        >
          <Reveal>
            <h2
              className="font-display"
              style={{
                color: 'var(--f)',
                fontSize: 'clamp(2rem, 4.2vw, 2.9rem)',
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                marginBottom: 20,
                maxWidth: 520,
              }}
            >
              {partnerships.title}
            </h2>
            <p style={{ color: 'var(--read)', fontSize: '1.12rem', lineHeight: 1.6, maxWidth: 520 }}>
              {partnerships.harika.body}
            </p>
            <p style={{ color: 'var(--read)', fontSize: '1.12rem', lineHeight: 1.6, maxWidth: 520, marginTop: 18, marginBottom: 24 }}>
              {partnerships.harika.recommend}
            </p>
            <a
              href={partnerships.harika.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                color: 'var(--f)',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {partnerships.harika.link}
              <span aria-hidden>&rsaquo;</span>
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <Card
              style={{
                padding: '40px 36px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h3
                className="font-display"
                style={{ color: 'var(--f)', fontSize: '1.5rem', letterSpacing: '-0.8px', marginBottom: 14 }}
              >
                {partnerships.open.title}
              </h3>
              <p style={{ color: 'var(--read)', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: 26, maxWidth: 360 }}>
                {partnerships.open.body}
              </p>
              <Button href={partnerships.open.cta.href} variant="solid" size="md">
                {partnerships.open.cta.label}
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
