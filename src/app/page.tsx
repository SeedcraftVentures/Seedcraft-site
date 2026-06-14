import { Nav } from '@/components/Nav'
import { Hero } from '@/components/sections/Hero'
import { Mission } from '@/components/sections/Mission'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Ventures } from '@/components/sections/Ventures'
import { People } from '@/components/sections/People'
import { Partnerships } from '@/components/sections/Partnerships'
import { Cta } from '@/components/sections/Cta'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Mission />
        <HowWeWork />
        <Ventures />
        <People />
        <Partnerships />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
