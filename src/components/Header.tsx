import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Button from './ui/Button'
import { useState } from 'react'
import Overlay from './Overlay'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => setIsOpen(!isOpen)

  return (
    <>
      {isOpen && <Overlay />}
      <header
        className={`backdrop-blur-sm flex justify-between px-12 py-3 md:py-0 w-full items-center border-b border-tertiary bg-opacity-40 fixed top-0 left-0 z-50`}
      >
        <a href='/'>
          <Logo />
        </a>
        <div className='flex gap-4 md:gap-32 items-center'>
          {/* Desktop menu */}
          <nav className='group hidden md:block'>
            <ul className='list-none flex gap-10'>
              {navLinks.map((item, index) => (
                <li key={index}>
                  <a
                    className='child cursor-pointer py-5 border-b-2 border-t-2 border-transparent hover:border-b-primary transition-all duration-300 ease-out'
                    href={`#${item.href}`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href='/ibrahima-sylla-resume.pdf'>
            <Button className='font-[600]'>CV</Button>
          </a>
          <div className='hidden'>
            <button onClick={toggleNavbar}>
              <AlignJustify />
            </button>
            {isOpen && (
              /* Mobile menu */
              <nav className='bg-white absolute z-50'>
                <ul className='list-none flex flex-col'>
                  {navLinks.map((item, index) => (
                    <li key={index} className='text-black'>
                      <a href={item.href}>{item.text}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </header>
    </>
  )
}

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
