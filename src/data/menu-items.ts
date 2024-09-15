import { IconType } from 'react-icons'
import { AiOutlineDeploymentUnit } from 'react-icons/ai'
import { HiOutlineCube } from 'react-icons/hi'
import { MdOutlineLightbulb } from 'react-icons/md'
import { PiReadCvLogoBold } from 'react-icons/pi'
import { RiGraduationCapLine } from 'react-icons/ri'

export interface MenuItem {
  text: string
  link: string
  icon: IconType
}

const menuItems: MenuItem[] = [
  {
    text: 'Skills',
    link: 'skills',
    icon: MdOutlineLightbulb,
  },
  {
    text: 'Projects',
    link: 'projects',
    icon: HiOutlineCube,
  },
  {
    text: 'Experiences',
    link: 'experiences',
    icon: AiOutlineDeploymentUnit,
  },
  {
    text: 'Education',
    link: 'education',
    icon: RiGraduationCapLine,
  },
  {
    text: 'CV',
    link: 'cv',
    icon: PiReadCvLogoBold,
  },
]

export default menuItems
