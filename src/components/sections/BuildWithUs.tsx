import { ArrowRight } from 'lucide-react'
import { buildWithUs } from '@/lib/content'
import { SectionLabel } from '../SectionLabel'
import { BrandBullet } from '../BrandBullet'
import { Card } from '../Card'
import { Button } from '../Button'
import { Reveal } from '../Reveal'

/**
 * Build with us. Replaces the old Partnerships section: sweat-equity seats and
 * craft partnerships are the two public tracks. Harika now has its own section
 * below this one.
 */
export function BuildWithUs() {
  return (
    <section
      id="build-with-us"
      style={{ background: 'var(--paper2)', padding: '120px 0' }}
    >
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <Reveal>
          <SectionLabel>{buildWithUs.label}</SectionLabel>
          <h2 className="font-display section-title" style={{ margin: '24px 0 16px' }}>
            {buildWithUs.title}
          </h2>
          <p className="section-sub">{buildWithUs.sub}</p>
        </Reveal>

        <div className="tracks-grid">
          {buildWithUs.tracks.map((t, i) => (
            <Reveal key={t.key} delay={0.06 + i * 0.08} style={{ height: '100%' }}>
              <Card className="track-card" style={{ padding: '40px 52px 36px' }}>
                <BrandBullet />
                <h3 className="font-display track-card__title">{t.title}</h3>
                <p className="track-card__body">{t.body}</p>
                {t.note && <p className="track-card__note">{t.note}</p>}
                <div style={{ marginTop: 'auto' }}>
                  <Button href={t.cta.href} variant="solid" size="md">
                    {t.cta.label}
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        {/* The named seats. Full width so each one gets room for the project,
            the scope and the terms, which a badge on a card could not carry. */}
        <div className="roles-block">
          <Reveal>
            <h3 className="font-display roles-block__title">
              {buildWithUs.roles.title}
            </h3>
            <p className="roles-block__sub">{buildWithUs.roles.sub}</p>
          </Reveal>

          <div className="roles-list">
            {buildWithUs.roles.items.map((r, i) => (
              <Reveal key={r.role} delay={0.06 + i * 0.08}>
                <a href={r.href} className="shape role-row">
                  <div className="role-row__main">
                    <span className="role-row__project">{r.project}</span>
                    <h4 className="font-display role-row__role">{r.role}</h4>
                    <p className="role-row__body">{r.body}</p>
                  </div>
                  <div className="role-row__side">
                    <span className="role-row__equity-label">Equity</span>
                    <span className="role-row__equity">{r.equity}</span>
                    <span className="role-row__cta">
                      Get in touch
                      <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
