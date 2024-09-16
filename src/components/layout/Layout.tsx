import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='grow shrink basis-[0%] border border-red-700'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
