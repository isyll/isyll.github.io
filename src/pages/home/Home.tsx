import Header from '@/layout/Header'
import Hero from '@/layout/Hero'

function Home() {
  return (
    <>
      <Header currentRoute="home" />
      <main>
        <Hero />
      </main>
    </>
  )
}

export default Home
