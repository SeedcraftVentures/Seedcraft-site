import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/sections/Footer'
import { HeatGlow } from '@/components/HeatGlow'
import { Button } from '@/components/Button'
import { Mark } from '@/components/Mark'
import { applyHref, getRole, roles } from '@/lib/careers'

/** One open role, written to be shared on its own: /careers/<slug>. */

export function generateStaticParams() {
  return roles.map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const role = getRole((await params).slug)
  if (!role) return {}
  const title = `${role.title} · Seedcraft Ventures`
  return {
    title,
    description: role.lede,
    alternates: { canonical: `/careers/${role.slug}` },
    openGraph: { title, description: role.lede, url: `https://www.seedcraft.co/careers/${role.slug}`, siteName: 'Seedcraft Ventures', locale: 'en_GB', type: 'website' },
  }
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const role = getRole((await params).slug)
  if (!role) notFound()

  return (
    <>
      <Nav />
      <main id="top">
        <HeatGlow className="careers-hero careers-hero--role" noise={false}>
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <Link href="/careers" className="careers-back">
              <ArrowLeft size={15} strokeWidth={2.4} aria-hidden />
              All roles
            </Link>
            {/* Non-breaking hyphens, so Go-to-Market never splits across lines */}
            <h1 className="font-display careers-hero__title">{role.title.replaceAll('-', '\u2011')}</h1>
            <p className="careers-hero__meta">
              <span>Seedcraft Ventures</span>
              <span>{role.location}</span>
              <span>{role.terms}</span>
            </p>
            <p className="careers-hero__sub">{role.lede}</p>
            <div style={{ marginTop: 34 }}>
              <Button href={applyHref(role)} variant="cream" size="md">
                Apply by email
              </Button>
            </div>
          </div>
        </HeatGlow>

        <section style={{ background: 'var(--paper)', padding: '90px 0 110px' }}>
          <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
            <article className="job">
              {role.sections.map((s) => (
                <section key={s.title} className="job__section">
                  <h2 className="font-display job__h2">{s.title}</h2>
                  {s.intro?.map((p) => <p key={p}>{p}</p>)}
                  {s.items && (
                    <ul className="job__list">
                      {s.items.map((it) => (
                        <li key={it}>
                          <Mark variant="static" size={14} color="var(--a)" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.outro?.map((p) => <p key={p}>{p}</p>)}
                </section>
              ))}

              <div className="shape job__apply">
                <h2 className="font-display job__h2">Ready when you are.</h2>
                <p>One page is plenty. Send it to Andre and we will set up a time to talk it through.</p>
                <Button href={applyHref(role)} variant="solid" size="md">
                  Apply by email
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
