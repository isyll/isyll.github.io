import Header from '@/layout/Header'
import Hero from '@/layout/Hero'
import ActionSwitcher from './layout/ActionSwitcher'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ActionSwitcher className='m-10 mx-24' />
      </main>
    </>
  )
}

export default Home
