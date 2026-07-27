import type { Metadata, Viewport } from 'next'
import { Figtree } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ScrollProgress } from '@/components/ScrollProgress'

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
  display: 'swap',
})

const calSans = localFont({
  src: '../../public/Fonts/CalSans-SemiBold.woff2',
  variable: '--font-cal',
  display: 'swap',
  weight: '600',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  // www is canonical: the host 307s the apex to www, so canonical tags and OG
  // URLs must use www or they point at a redirect.
  metadataBase: new URL('https://www.seedcraft.co'),
  title: 'Seedcraft Ventures · Here for the Everyday Hero',
  description:
    'A startup studio, not a fund. We build the products that make being who you want to be the easy option, with the fairness and the follow-through already in them.',
  openGraph: {
    title: 'Seedcraft Ventures · Here for the Everyday Hero',
    description:
      'We build the products that make being who you want to be the easy option.',
    url: 'https://www.seedcraft.co',
    siteName: 'Seedcraft Ventures',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${figtree.variable} ${calSans.variable}`}>
      <body>
        <ScrollProgress />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
