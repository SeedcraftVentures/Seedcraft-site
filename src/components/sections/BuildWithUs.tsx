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

      </div>
    </section>
  )
}
