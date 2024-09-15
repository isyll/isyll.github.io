import { About } from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import MyProjects from './components/MyProjects'
import Sidenav from './components/Sidenav'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className='flex'>
        <Sidenav />
        <main className='ml-[50px]' id='home'>
          <Header />
          <Hero />
          <About />
          <Skills />
          <MyProjects />
          <Contact />
          <div className='h-[200px]'></div>
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
