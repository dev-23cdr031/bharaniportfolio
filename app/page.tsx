import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Achievements } from '@/components/achievements'
import { Publications } from '@/components/publications'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { PageShell } from '@/components/motion-shell'
import { EchoChatbot } from '@/components/echo-chatbot'

export default function Home() {
  return (
    <PageShell>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Publications />
      <Achievements />
      <Contact />
      <Footer />
      <EchoChatbot />
    </PageShell>
  )
}
