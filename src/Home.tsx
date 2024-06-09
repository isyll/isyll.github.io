import Header from '@/layout/Header'
import Hero from '@/layout/Hero'
import ActionSwitcher from './layout/ActionSwitcher'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ActionSwitcher className='m-10 mt-32' />
      </main>
    </>
  )
}

export default Home
