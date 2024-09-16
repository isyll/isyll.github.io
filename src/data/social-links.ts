import { IconType } from 'react-icons'
import {
  FaGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
} from 'react-icons/fa6'
import { MdOutlineAlternateEmail } from 'react-icons/md'

interface SocialLink {
  name: string
  link: string
  icon: IconType
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    link: 'https://github.com/isyll/',
    icon: FaGithub,
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/ibrahima-sylla-9931a61ba/',
    icon: FaLinkedin,
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/isyll711',
    icon: FaSquareFacebook,
  },
  {
    name: 'X',
    link: 'https://x.com/ibrahimasylla_',
    icon: FaXTwitter,
  },
  {
    name: 'Email',
    link: 'mailto:isyll711@gmail.com',
    icon: MdOutlineAlternateEmail
  }
]

export default socialLinks
