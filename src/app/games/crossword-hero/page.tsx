import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGame } from '@/lib/games'
import { GamePage } from '@/components/games/GamePage'

const game = getGame('crossword-hero')

export const metadata: Metadata = {
  title: 'Crossword Hero · Seedcraft Games',
  description:
    'Crossword Hero is an anagram crossword in development at Seedcraft Games. Unscramble the letters, fill the grid.',
  openGraph: {
    title: 'Crossword Hero · Seedcraft Games',
    description: 'An anagram crossword. Unscramble the letters, fill the grid.',
    url: 'https://www.seedcraft.co/games/crossword-hero',
    siteName: 'Seedcraft Games',
    locale: 'en_GB',
    type: 'website',
  },
  // Nothing links here yet: the game is too early to show. Keep it out of the
  // index until the hub starts pointing at it again.
  robots: { index: false, follow: true },
}

export default function CrosswordHeroPage() {
  if (!game) notFound()
  return <GamePage game={game} />
}
