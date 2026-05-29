import { Nav } from '@/components/nav'
import { Hero } from '@/components/sections/hero'
import { Research } from '@/components/sections/research'
import { Publications } from '@/components/sections/publications'
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
        <Research />
        <Publications />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
