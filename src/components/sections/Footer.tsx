import { footer } from '@/lib/content'
import { Mark } from '../Mark'

export function Footer() {
  return (
    <footer className="site-footer" data-cursor="light">
      <div className="mx-auto px-6 md:px-10" style={{ maxWidth: 'var(--maxw)' }}>
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 18 }}>
              <Mark variant="static" size={30} color="#fff" shadow />
              <span
                className="font-display"
                style={{ color: '#fff', fontSize: 22, letterSpacing: '-0.5px' }}
              >
                Seedcraft Ventures
              </span>
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 15,
                lineHeight: 1.55,
                maxWidth: 300,
              }}
            >
              {footer.blurb}
            </p>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              {col.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  {...(l.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: 12,
            marginTop: 64,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.55)',
            fontSize: 13,
          }}
        >
          <span>{footer.legal.copyright}</span>
          <span>{footer.legal.location}</span>
        </div>
      </div>
    </footer>
  )
}
