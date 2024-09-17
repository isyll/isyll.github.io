import { motion } from 'framer-motion'
import menuItems from '@/data/menu-items'
import Logo from './Logo'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { MdOutlineDarkMode, MdOutlineSearch } from 'react-icons/md'
import { IoSunnySharp } from 'react-icons/io5'
import { useDarkMode } from 'usehooks-ts'
import { Cross as Hamburger } from 'hamburger-react'
import classes from '@/data/classes'

interface Props {
  className?: string
}

export default function Header({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const { isDarkMode } = useDarkMode()
  const [dark, setDark] = useState(isDarkMode)
  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleDarkMode = () => {
    setDark(!dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }
  const handleSearch = () => {}

  return (
    <>
      <header
        className={cn(
          'z-[10] flex fixed top-0 left-0 w-full justify-center items-center transition-all md:h-[58px] bg-white dark:bg-black text-primary-light dark:text-primary-dark border-b-2 dark:border-primary-light border-primary-dark',
          className,
          classes.rootPadding,
        )}
      >
        <Logo
          className='mr-auto hover:dark:bg-primary-light hover:bg-primary-dark py-4 px-2'
          textClass='transition-all hidden md:inline'
        />
        <div className='absolute block md:hidden text-md'>Ibrahima Sylla</div>
        <nav className='absolute hidden md:block'>
          <ul className='list-none flex'>
            {menuItems.map((menu, index) => (
              <li key={index} className='flex'>
                <a
                  href={`#/${menu.link}`}
                  className='flex gap-1 items-center px-5 py-4 transition-all hover:dark:bg-primary-light hover:bg-primary-dark'
                >
                  <menu.icon size={20} />{' '}
                  <span className='hidden lg:inline'>{menu.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='ml-auto block md:hidden'>
          <button
            className='py-2 px-1 hover:bg-primary-dark hover:dark:bg-primary-light'
            onClick={toggleMenu}
          >
            <Hamburger toggled={isOpen} toggle={setIsOpen} size={32} />
          </button>
        </div>
        <div className='gap-2 ml-auto hidden md:flex'>
          <button onClick={handleSearch} className='header-btn'>
            <MdOutlineSearch size={24} />
          </button>
          <button onClick={toggleDarkMode} className='header-btn'>
            {dark ? (
              <MdOutlineDarkMode size={24} />
            ) : (
              <IoSunnySharp size={24} />
            )}
          </button>
        </div>
      </header>
      <motion.div
        initial={{ y: '-100%' }}
        animate={{ y: isOpen ? 0 : '-100%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
        className='fixed md:hidden z-[5] inset-0 pt-16 bg-white dark:bg-black'
        onClick={toggleMenu}
      >
        <nav className='my-5 mb-6 transition-all duration-200'>
          <ul>
            {menuItems.map((menu, index) => (
              <li key={index}>
                <a
                  href={`#/${menu.link}`}
                  className='flex px-6 py-3 gap-5 hover:text-primary-dark hover:dark:bg-primary-light'
                >
                  <menu.icon size={20} /> {menu.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='flex flex-col'>
          <button onClick={handleSearch} className='header-btn-mobile'>
            <MdOutlineSearch size={24} /> Rechercher
          </button>
          <button onClick={toggleDarkMode} className='header-btn-mobile'>
            {dark ? (
              <MdOutlineDarkMode size={24} />
            ) : (
              <IoSunnySharp size={24} />
            )}
            {dark ? 'Dark mode' : 'Light mode'}
          </button>
        </div>
      </motion.div>
    </>
  )
}
