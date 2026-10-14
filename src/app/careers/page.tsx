import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { HeatGlow } from '@/components/HeatGlow'
import { SectionLabel } from '@/components/SectionLabel'
import { Button } from '@/components/Button'
import { Reveal } from '@/components/Reveal'
import { careers, roles } from '@/lib/careers'

export const metadata: Metadata = {
  title: 'Careers · Seedcraft Ventures',
  description: careers.sub,
  alternates: { canonical: '/careers' },
  openGraph: {
    title: 'Careers · Seedcraft Ventures',
    description: careers.sub,
    url: 'https://www.seedcraft.co/careers',
    siteName: 'Seedcraft Ventures',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function CareersPage() {
  return (
    <>
      <Nav />
      <main id="top">
        <HeatGlow className="careers-hero" noise={false}>
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <p className="eyebrow careers-hero__eyebrow">{careers.label}</p>
            <h1 className="font-display careers-hero__title">{careers.title}</h1>
            <p className="careers-hero__sub">{careers.sub}</p>
          </div>
        </HeatGlow>

        <section style={{ background: 'var(--paper)', padding: '96px 0 110px' }}>
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <SectionLabel>{careers.openTitle}</SectionLabel>
            </Reveal>
            <div className="roles-list" style={{ marginTop: 34 }}>
              {roles.map((r, i) => (
                <Reveal key={r.slug} delay={0.06 + i * 0.08}>
                  <Link href={`/careers/${r.slug}`} className="shape role-row">
                    <div className="role-row__main">
                      <span className="role-row__project">
                        {r.location} · {r.terms}
                      </span>
                      <h2 className="font-display role-row__role">{r.title}</h2>
                      <p className="role-row__body">{r.summary}</p>
                    </div>
                    <div className="role-row__side">
                      <span className="role-row__equity-label">Equity</span>
                      <span className="role-row__equity">{r.equity}</span>
                      <span className="role-row__cta">
                        Read the role
                        <ArrowRight size={15} strokeWidth={2.4} aria-hidden />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'var(--paper2)', padding: '96px 0' }}>
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Reveal>
              <h2 className="font-display section-title" style={{ marginBottom: 16 }}>
                {careers.noneTitle}
              </h2>
              <p className="section-sub" style={{ marginBottom: 30 }}>
                {careers.noneBody}
              </p>
              <Button href={careers.noneCta.href} variant="solid" size="md">
                {careers.noneCta.label}
              </Button>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
