import { About } from './components/About'
import AnimatedBg from './components/AnimatedBg'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MyProjects from './components/MyProjects'
import Skills from './components/Skills'

function App() {
  return (
    <main id='home'>
      <AnimatedBg />
      <Header />
      <Hero />
      <About />
      <Skills />
      <MyProjects />
      <Contact />
      <div className='h-[200px]'></div>
      <Footer />
    </main>
  )
}

export default App
