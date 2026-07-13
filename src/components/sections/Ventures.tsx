import { ventures } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { StatusTag } from '../Tag'
import { Mark } from '../Mark'
import { Reveal } from '../Reveal'

export function Ventures() {
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
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              margin: '24px 0 48px',
              maxWidth: 760,
            }}
          >
            {ventures.title}
          </h2>
        </Reveal>

        <div className="ventures-cols">
          {ventures.groups.map((group) => (
            <div key={group.heading}>
              <div className="ventures-group-head">
                <h3>{group.heading}</h3>
                {group.note && <span>{group.note}</span>}
              </div>

              <div role="list" className="venture-list">
                {group.items.map((v, i) => {
                  const Row = (
                    <>
                      <span
                        aria-hidden
                        style={{ display: 'flex', alignItems: 'center', color: 'var(--a)' }}
                      >
                        <Mark variant="static" size={22} />
                      </span>
                      <div>
                        <span className="venture-name">{v.name}</span>
                        <p className="venture-desc">{v.desc}</p>
                      </div>
                      <span className="venture-status">
                        <StatusTag status={v.status} />
                      </span>
                    </>
                  )

                  const inner = v.href ? (
                    <a
                      href={v.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="venture-row"
                      role="listitem"
                    >
                      {Row}
                    </a>
                  ) : (
                    <div className="venture-row" role="listitem">
                      {Row}
                    </div>
                  )

                  return (
                    <Reveal key={v.name} delay={i * 0.06}>
                      {inner}
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
