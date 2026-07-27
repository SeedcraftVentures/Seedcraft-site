import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getGame } from '@/lib/games'
import { GamePage } from '@/components/games/GamePage'

const game = getGame('tick-down')

export const metadata: Metadata = {
  title: 'Tick Down · Seedcraft Games',
  description:
    'Tick Down is a brain game of letters, numbers and conundrums, played against the clock and a CPU that plays to win. By Seedcraft Games.',
  openGraph: {
    title: 'Tick Down · Seedcraft Games',
    description:
      'Letters, numbers and conundrums, against the clock and the CPU.',
    url: 'https://www.seedcraft.co/games/tick-down',
    siteName: 'Seedcraft Games',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function TickDownPage() {
  if (!game) notFound()
  return <GamePage game={game} />
}
