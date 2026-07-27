import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { StudioClarifier } from '@/components/sections/StudioClarifier'
import { Mission } from '@/components/sections/Mission'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Ventures } from '@/components/sections/Ventures'
import { GamesBand } from '@/components/sections/GamesBand'
import { People } from '@/components/sections/People'
import { BuildWithUs } from '@/components/sections/BuildWithUs'
import { Partnership } from '@/components/sections/Partnership'
import { Cta } from '@/components/sections/Cta'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <StudioClarifier />
        <Mission />
        <HowWeWork />
        <Ventures />
        <GamesBand />
        <People />
        <BuildWithUs />
        <Partnership />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
