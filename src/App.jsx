import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
