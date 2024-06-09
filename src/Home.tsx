import Header from '@/layout/Header'
import Hero from '@/layout/Hero'
import ActionSwitcher from './layout/ActionSwitcher'

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ActionSwitcher className='m-10 md:mx-24 mt-24 md:-mt-12 md:ms-28' />
      </main>
    </>
  )
}

export default Home
