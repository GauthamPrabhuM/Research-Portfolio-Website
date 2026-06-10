import { Nav } from '@/components/nav'
import { Hero } from '@/components/sections/hero'
import { News } from '@/components/sections/news'
import { Research } from '@/components/sections/research'
import { Publications } from '@/components/sections/publications'
import { Talks } from '@/components/sections/talks'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Achievements } from '@/components/sections/achievements'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <News />
        <Research />
        <Publications />
        <Talks />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
