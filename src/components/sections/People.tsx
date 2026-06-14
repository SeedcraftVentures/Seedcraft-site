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
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 22,
            maxWidth: 820,
            margin: '0 auto',
          }}
        >
          {team.members.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06} style={{ marginTop: i === 1 ? 32 : 0 }}>
              <SlantFrame
                ratio="4 / 5"
                src={U(m.photo)}
                alt={`${m.name}, ${m.role}`}
                title={m.name}
                sub={m.role}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
