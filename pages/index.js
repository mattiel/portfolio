import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

import manifest from '../project-manifest'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Projects manifest={manifest} />
    </Layout>
  )
}
