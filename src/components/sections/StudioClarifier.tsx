import { studio } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { BrandBullet } from '../BrandBullet'
import { Reveal } from '../Reveal'

/**
 * The disambiguation band. Deliberately short and deliberately early: people
 * read "venture studio" as "venture capital", and the correction has to land
 * before the mission copy, not after it.
 *
 * Heading sits left on its own row, the three points run in a single row
 * beneath it, so nothing is left stranded in an empty quadrant.
 */
export function StudioClarifier() {
  return (
    <section
      id="what-we-are"
      style={{ background: 'var(--paper2)', padding: '96px 0' }}
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <div className="clarifier-head">
            <SectionLabel>{studio.label}</SectionLabel>
            <h2 className="font-display clarifier-title">{studio.title}</h2>
          </div>
        </Reveal>

        <div className="clarifier-points">
          {studio.points.map((p, i) => (
            <Reveal key={p.title} delay={0.06 + i * 0.08}>
              <div className="clarifier-point">
                <BrandBullet />
                <h3 className="font-display clarifier-point__title">{p.title}</h3>
                <p className="clarifier-point__body">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
