import menuItems from '../../data/menu-items'
import Logo from './Logo'
import ThemeSwitcher from '../ThemeSwitcher'
import Search from '../Search'
import { HiMenuAlt4 } from 'react-icons/hi'

export default function Header() {
  return (
    <header className='flex relative justify-center items-center transition-all md:h-[58px] text-primary-light dark:text-primary-dark lg:px-24 md:px-16 px-12 border-b-2 dark:border-primary-light border-primary-dark'>
      <Logo className='mr-auto' textClass='transition-all hidden md:inline' />
      <div className='absolute block md:hidden text-md'>Ibrahima Sylla</div>
      <nav className='absolute hidden md:block'>
        <ul className='list-none flex'>
          {menuItems.map((menu, index) => (
            <li key={index} className='flex'>
              <a
                href={menu.link}
                className='flex gap-1 items-center px-5 py-4 transition-all hover:dark:bg-primary-light hover:bg-primary-dark'
              >
                <menu.icon size={20} />{' '}
                <span className='hidden lg:inline'>{menu.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className='ml-auto'>
        <button className='py-4 px-2 hover:bg-primary-dark hover:dark:bg-primary-light' onClick={undefined}>
          <HiMenuAlt4 size={24} />
        </button>
      </div>
      <div className='gap-2 ml-auto hidden md:flex'>
        <Search />
        <ThemeSwitcher />
      </div>
    </header>
  )
}
