import ScrollSpy from 'react-scrollspy-navigation'

function Sidenav() {
  return (
    <div className=' fixed top-0 left-0 flex flex-col items-stretch gap-10 pt-4 w-[64px] h-full bg-dark'>
      <div className='flex flex-col items-center justify-center'>
        <a href='/'>
          <img src='/favicon.png' alt='' width={42} />
        </a>
      </div>
      <ScrollSpy
        activeClass='bg-secondary border border-transparent border-r-primary transition-colors'
        behavior='smooth'
      >
        <nav>
          <ul className='flex flex-col items-stretch list-none'>
            {navLinks.map((item) => {
              return (
                <li
                  className='flex items-stretch'
                  style={{
                    writingMode: 'vertical-rl',
                  }}
                >
                  <a
                    href={`#${item.href}`}
                    className='flex items-center py-5 hover:bg-secondary hover:border border-transparent border-r-primary transition-colors'
                  >
                    {item.text}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </ScrollSpy>
    </div>
  )
}

export default Sidenav

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
    text: 'My projects',
    href: 'projects',
  },
  {
    text: 'Contact',
    href: 'contact',
  },
]
