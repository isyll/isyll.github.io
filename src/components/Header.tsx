import { AlignJustify } from 'lucide-react'
import Logo from './Logo'
import Button from './ui/Button'
import { useEffect, useState } from 'react'
import Overlay from './Overlay'
import { Link } from 'react-scroll'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => setIsOpen(!isOpen)
  const [stickyClass, setStickyClass] = useState('relative')

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)

    return () => {
      window.removeEventListener('scroll', stickNavbar)
    }
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY
      windowHeight > 200
        ? setStickyClass('fixed top-0 left-0 z-50')
        : setStickyClass('relative')
    }
  }

  return (
    <>
      {isOpen && <Overlay />}
      <header
        className={`backdrop-blur-sm	flex justify-between px-12 py-3 md:py-0 w-full items-center border-b border-tertiary bg-opacity-40 ${stickyClass}`}
      >
        <a href='/'>
          <Logo />
        </a>
        <div className='flex gap-16 md:gap-32 items-center'>
          {/* Desktop menu */}
          <nav className='group hidden md:block'>
            <ul className='list-none flex gap-10'>
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className='child cursor-pointer py-6 border-b-2 border-t-2 border-transparent hover:border-b-primary transition-all ease-out'
                >
                  <Link
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='transition-all'
                    to={item.href}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a href='/ibrahima-sylla-resume.pdf'>
            <Button className='font-[600]'>CV</Button>
          </a>
          <div className='block md:hidden'>
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
    href: 'home',
  },
  {
    text: 'About me',
    href: 'about',
  },
  {
    text: 'Skills',
    href: 'skills',
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
