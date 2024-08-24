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
    <>
      <main>
        <Header />
        <AnimatedBg />
        <div className='h-[75px]'></div>
        <Hero />
        <About />
        <Skills />
        <MyProjects />
        <Contact />
      </main>
      <div className='h-[200px]'></div>
      <Footer />
    </>
  )
}

export default App
