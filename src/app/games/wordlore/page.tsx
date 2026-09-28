import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGame } from '@/lib/games'
import { WordlorePage } from '@/components/games/wordlore/WordlorePage'

const game = getGame('wordlore')

export const metadata: Metadata = {
  title: 'Wordlore: Norse Saga · Seedcraft Games',
  description:
    'Carve runes, read hidden words and free the Nine Realms in a turn-based Norse word duel. 130 stones from Midgard to Helheim. By Seedcraft Games.',
  alternates: { canonical: '/games/wordlore' },
  openGraph: {
    title: 'Wordlore: Norse Saga · Seedcraft Games',
    description: 'Carve runes. Read words. Free the Nine Realms.',
    url: 'https://www.seedcraft.co/games/wordlore',
    siteName: 'Seedcraft Games',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/Images/games/wordlore/stone.jpg', width: 1600, height: 739 }],
  },
}

export default function WordloreRoute() {
  if (!game) notFound()
  return <WordlorePage game={game} />
}
