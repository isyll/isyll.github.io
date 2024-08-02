import Github from '../assets/github.svg'
import Facebbok from '../assets/facebook.svg'

function Footer() {
  return (
    <footer className='flex justify-between items-center border-t border-tertiary w-full pt-[40px] px-20'>
      <p className='text-dark'>
        &copy; 2024 Ibrahima Sylla. All rights reserved
      </p>
      <div className='flex gap-6'>
        {socials.map((item, index) => (
          <a key={index} href={item.href} target='_blank'>
            <img src={item.logo} width={28} alt={item.alt} />
          </a>
        ))}
      </div>
    </footer>
  )
}

const socials = [
  {
    logo: Github,
    href: 'https://github.com/isyll',
    alt: 'GitHub',
  },
  {
    logo: Facebbok,
    href: 'https://www.facebook.com/isyll711',
    alt: 'Facebook',
  },
]

export default Footer
