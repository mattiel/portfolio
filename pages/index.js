import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

import manifest from '../project-manifest'

export default function Home() {
  return (
    <section className="container mx-auto xl:max-w-screen-xl px-4">
      <Navbar />
      <Hero />
      <Projects manifest={manifest} />
    </section>
  )
}
