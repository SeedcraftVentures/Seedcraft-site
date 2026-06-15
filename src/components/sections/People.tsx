import { team } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { SlantFrame } from '../SlantFrame'
import { Reveal } from '../Reveal'

const U = (id: string, w = 600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export function People() {
  return (
    <section id="team" style={{ background: 'var(--cream)', padding: '110px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <div style={{ maxWidth: 640, margin: '0 auto 44px', textAlign: 'center' }}>
          <SectionLabel>{team.label}</SectionLabel>
          <h2
            className="font-display"
            style={{
              color: 'var(--f)',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              margin: '24px 0 14px',
            }}
          >
            {team.title}
          </h2>
          <p style={{ color: 'var(--read)', fontSize: '1.08rem', lineHeight: 1.55, maxWidth: 540, margin: '0 auto' }}>
            {team.sub}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 22,
            maxWidth: 980,
            margin: '0 auto',
          }}
        >
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06} style={{ marginTop: i % 2 === 1 ? 30 : 0 }}>
              <SlantFrame
                ratio="4 / 5"
                src={m.src ?? (m.photo ? U(m.photo) : undefined)}
                alt={`${m.name}, ${m.role}`}
                title={m.name}
                sub={m.role}
              />
            </Reveal>
          ))}

          {/* open invitation card */}
          <Reveal delay={team.members.length * 0.06} style={{ marginTop: team.members.length % 2 === 1 ? 30 : 0 }}>
            <div
              className="shape-frame"
              style={{
                aspectRatio: '4 / 5',
                background: 'transparent',
                border: '1.5px dashed rgba(22, 86, 47, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  transform: 'skewX(calc(var(--skew) * -1))',
                  textAlign: 'center',
                  padding: '0 24px',
                }}
              >
                <div
                  className="font-display"
                  style={{ fontSize: '2.6rem', letterSpacing: '-1.5px', color: 'var(--f)' }}
                >
                  You?
                </div>
                <p style={{ fontSize: 13.5, lineHeight: 1.5, color: 'var(--read)', marginTop: 10 }}>
                  Got a skill set worth lending? We are always after the right people to build with.
                </p>
                <a
                  href="#partnerships"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    marginTop: 14,
                    fontWeight: 600,
                    fontSize: 13.5,
                    color: 'var(--f)',
                  }}
                >
                  Get in touch
                  <span aria-hidden>&rsaquo;</span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
