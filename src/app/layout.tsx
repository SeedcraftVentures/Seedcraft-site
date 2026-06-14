import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import { SmoothScroll } from '@/components/SmoothScroll'
import { ScrollProgress } from '@/components/ScrollProgress'
import { CustomCursor } from '@/components/CustomCursor'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://seedcraft.co'),
  title: 'Seedcraft Ventures · Here for the everyday hero',
  description:
    'A studio for the everyday hero. We build the products that clear the obstacles, and open new pathways to the lives people are trying to live.',
  openGraph: {
    title: 'Seedcraft Ventures · Here for the everyday hero',
    description:
      'We build the products that clear the obstacles, and open new pathways to the lives people are trying to live.',
    url: 'https://seedcraft.co',
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
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
