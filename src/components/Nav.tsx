'use client'

import { nav } from '@/lib/content'
import { Mark } from './Mark'
import { Button } from './Button'

export function Nav() {
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
        data-cursor="light"
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
              letterSpacing: '-0.5px',
              lineHeight: 1,
              transform: 'translateY(1px)',
            }}
          >
            Seedcraft
          </span>
        </a>

        <ul
          style={{
            display: 'flex',
            gap: 26,
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="max-md:hidden"
        >
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                style={{
                  color: 'rgba(255,255,255,0.78)',
                  fontSize: 14,
                  fontWeight: 500,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'rgba(255,255,255,0.78)')
                }
              >
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
