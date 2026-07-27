/**
 * Canonical Tick Down legal page. This is the URL compiled into the app build
 * and submitted to the Play Console, so it is the one that must never move.
 */
import type { Metadata } from 'next'
import { TickDownLegal } from '@/components/games/TickDownLegal'

export const metadata: Metadata = {
  title: 'Tick Down Terms and Privacy Policy · Seedcraft Games',
  description:
    'Terms of Use and Privacy Policy for Tick Down, a game by Seedcraft Games.',
  alternates: { canonical: '/games/tick-down/privacy' },
}

export default function TickDownLegalPage() {
  return <TickDownLegal />
}
