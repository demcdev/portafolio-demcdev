import { Header } from './components/header'
import { Hero } from './components/hero'
import { Experience } from './components/experience'
import { TechStack } from './components/tech-stack'
import { Projects } from './components/projects'
import { Footer } from './components/footer'
import { About } from './components/about'
import { useScrollReveal } from './hooks/useScrollReveal'

function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
      </main>
      <Footer />
    </>
  )
}

export default App
