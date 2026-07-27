'use client'

import { useEffect, useState } from 'react'
import { nav } from '@/lib/content'
import { Mark } from './Mark'
import { Button } from './Button'

export function Nav() {
  const [open, setOpen] = useState(false)

  // Close on Escape, and never leave the panel open across a resize to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <nav
      aria-label="Primary"
      style={{
        position: 'fixed',
        top: 18,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 90,
        width: 'auto',
        maxWidth: 'calc(100% - 24px)',
      }}
    >
      <div
        className="shape nav-glass"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          padding: '11px 14px 11px 22px',
        }}
      >
        <a
          href="#top"
          style={{ display: 'flex', alignItems: 'center', gap: 9 }}
          aria-label="Seedcraft Ventures, home"
        >
          <Mark variant="static" size={18} color="#fff" shadow />
          <span
            className="font-display"
            style={{
              color: '#fff',
              fontSize: 18,
              letterSpacing: '-0.2px',
              lineHeight: 1,
              transform: 'translateY(1px)',
            }}
          >
            Seedcraft
          </span>
        </a>

        <ul className="nav-links max-md:hidden">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="max-md:hidden">
            <Button href={nav.cta.href} variant="cream" size="sm">
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile toggle: the desktop links were previously hidden with no
              fallback, which left small screens with no navigation at all. */}
          <button
            type="button"
            className="nav-burger md:hidden"
            aria-expanded={open}
            aria-controls="nav-mobile"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span data-open={open} />
            <span data-open={open} />
          </button>
        </div>
      </div>

      <div
        id="nav-mobile"
        className={`shape nav-glass nav-mobile md:hidden ${open ? 'is-open' : ''}`}
        hidden={!open}
      >
        <ul>
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href={nav.cta.href} variant="cream" size="sm">
          {nav.cta.label}
        </Button>
      </div>
    </nav>
  )
}
