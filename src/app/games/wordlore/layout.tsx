import { Cinzel, Noto_Sans_Runic, Source_Sans_3 } from 'next/font/google'
import './wordlore.css'

/**
 * Wordlore room: the game's own type (Cinzel for carved headings, Source Sans 3
 * for reading, Noto Sans Runic for the glyphs), loaded only on these routes and
 * scoped under `.wl` so the rest of the site keeps the house fonts.
 */
const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

const runic = Noto_Sans_Runic({
  subsets: ['runic'],
  weight: '400',
  variable: '--font-runic',
  display: 'swap',
})

export default function WordloreLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`wl ${cinzel.variable} ${sourceSans.variable} ${runic.variable}`}>
      {children}
    </div>
  )
}
