import { ArrowRight } from 'lucide-react'
import { partnership } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { Reveal } from '../Reveal'

/**
 * Harika Labs, on its own surface. It was previously folded into the
 * partnerships block; as a standing engineering relationship it carries more
 * weight given a section of its own.
 */
export function Partnership() {
  return (
    <section id="partnership" style={{ background: 'var(--cream)', padding: '110px 0' }}>
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <SectionLabel>{partnership.label}</SectionLabel>
        </Reveal>

        <div className="partner-grid">
          <Reveal>
            <h2 className="font-display partner-title">{partnership.title}</h2>
            <a
              href={partnership.href}
              target="_blank"
              rel="noopener noreferrer"
              className="arrow-link"
            >
              {partnership.link}
              <ArrowRight size={16} strokeWidth={2.4} aria-hidden />
            </a>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="partner-body">{partnership.body}</p>
            <p className="partner-body" style={{ marginTop: 18 }}>
              {partnership.recommend}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
