import { mission } from '@/lib/content'
import { HighlightText } from '../HighlightText'
import { Mark } from '../Mark'
import { Reveal } from '../Reveal'

/**
 * Mission — one uniform Figtree paragraph with highlighted keywords, centred
 * inside a slanted, button-style Heat Glow slab (one mark at the top). The glow
 * is angled so the copy sits on the darker corner and stays readable.
 * Em-dash free.
 */
export function Mission() {
  return (
    <section id="mission" style={{ background: 'var(--paper)', padding: '120px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <div
            className="shape glow-slab"
            data-cursor="light"
            style={{
              position: 'relative',
              padding: 'clamp(48px, 7vw, 88px)',
              maxWidth: 1000,
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Mark variant="static" size={64} color="#fff" shadow />

            <span
              className="eyebrow"
              style={{
                color: 'rgba(255,255,255,0.8)',
                marginTop: 26,
                fontSize: 14,
                letterSpacing: '3.5px',
              }}
            >
              {mission.label}
            </span>

            <div style={{ marginTop: 26, maxWidth: 800 }}>
              <HighlightText
                className="hl-body--glow"
                segments={[
                  'Everyone wants to live a good life. To create, to inspire, to do what they think is important, and to spend time with those who matter. ',
                  { dim: 'And yet the world, somehow, finds a way to ' },
                  { hl: 'slow us down' },
                  { dim: '. Our mission is to ' },
                  { hl: 'remove those obstacles' },
                  { dim: ', and create ' },
                  { hl: 'new pathways' },
                  { dim: ', so people have the ' },
                  { hl: 'freedom to be who they want to be' },
                  { dim: '. That is what we stand for.' },
                ]}
              />

              <p
                className="hl-body hl-body--glow"
                style={{ marginTop: 30, fontWeight: 700, color: '#fff' }}
              >
                We are Seedcraft, here for the everyday hero.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
