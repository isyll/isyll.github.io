import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Button from './ui/Button'
import { useState } from 'react'
import Overlay from './Overlay'
import clsx from 'clsx'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => setIsOpen(!isOpen)
  // fixed top-0 left-0
  return (
    <>
      {isOpen && <Overlay onClick={toggleNavbar} />}
      <header
        className={`fixed top-0 z-40 backdrop-blur-sm flex items-stretch justify-between px-12 py-0 md:py-0 w-full border-b border-tertiary bg-opacity-40 h-20`}
      >
        <div className='flex gap-10 items-center'>
          <div className='md:hidden flex items-center'>
            <button onClick={toggleNavbar}>
              <AlignJustify size={28} />
            </button>
          </div>
          <a href='/' className='flex items-center'>
            <Logo />
          </a>
        </div>
        <div className='flex gap-4 md:gap-32 items-stretch'>
          {/* Desktop menu */}
          <nav className='group hidden md:flex md:items-stretch'>
            <ul className='list-none flex items-stretch gap-12'>
              {navLinks.map((item, index) => (
                <li key={index} className='flex items-stretch'>
                  <a
                    className='flex items-center child cursor-pointer py-5 border-b-2 border-t-2 border-transparent hover:border-b-primary transition-all duration-300 ease-out'
                    href={`#${item.href}`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {!isOpen && CV}
        </div>
        {/* Mobile menu */}
        <aside
          className={clsx(
            'fixed top-0 left-0 z-40 flex flex-col gap-16 px-6 w-52 h-screen bg-tertiary duration-300 transition-all',
            isOpen ? 'translate-x-0' : '-translate-x-full',
          )}
        >
          <a href='/' className='flex items-center'>
            <Logo />
          </a>
          <nav className='flex flex-col mt-10'>
            <ul className='list-none flex flex-col gap-4'>
              {navLinks.map((item, index) => (
                <li key={index} className='text-white font-bold'>
                  <a href={item.href} onClick={toggleNavbar}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {CV}
        </aside>
      </header>
    </>
  )
}

const CV = (
  <a href='/ibrahima-sylla-resume.pdf' className='flex items-center'>
    <Button className='font-[600]'>CV</Button>
  </a>
)

const navLinks = [
  {
    text: 'Home',
    href: '',
  },
  {
    text: 'About me',
    href: 'about',
  },
  {
    text: 'My projects',
    href: 'projects',
  },
  {
    text: 'Contact',
    href: 'contact',
  },
]

export default Header
