import Github from '../assets/github.svg'
import Facebook from '../assets/facebook.svg'
import Linkedin from '../assets/linkedin.svg'

function Footer() {
  return (
    <footer className='backdrop-blur-sm bg-opacity-40 flex flex-wrap flex-col md:flex-row gap-4 justify-between items-center border-t border-tertiary w-full py-[20px] px-6 md:px-20'>
      <p className='text-white text-opacity-75'>
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
    logo: Facebook,
    href: 'https://www.facebook.com/isyll711',
    alt: 'Facebook',
  },
  {
    logo: Linkedin,
    href: 'https://www.linkedin.com/in/ibrahima-sylla-9931a61ba/',
    alt: 'Linkedin',
  },
]

export default Footer
