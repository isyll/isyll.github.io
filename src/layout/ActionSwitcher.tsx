import Bio from '@/components/actions/Bio'
import Projects from '@/components/actions/Projects'
import Resume from '@/components/actions/Resume'
import MySkills from '@/components/actions/Skills'
import MenuItem from '@/types/MenuItem'
import { Contact } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const actions: MenuItem[] = [
  {
    element: <MySkills />,
    name: 'home',
  },
  {
    element: <Resume />,
    name: 'resume',
  },
  {
    element: <Projects />,
    name: 'all_projects',
  },
  {
    name: 'bio',
    element: <Bio />,
  },
  {
    name: 'contact',
    element: <Contact />,
  },
]

function ActionSwitcher({ className }: { className?: string }) {
  const { t } = useTranslation()
  const [action, setAction] = useState('home')

  return (
    <div className={`${className}`}>
      <div className='flex gap-4 flex-wrap'>
        {actions.map((element, index) => {
          const title = t(element.name)

          return (
            <button
              key={index}
              onClick={() => setAction(element.name)}
              className={`hover:bg-lightest font-medium bg-light rounded-3xl p-3 px-4 transition-all duration-200 text-nowrap ${
                action == element.name &&
                'bg-lightGreen text-primary-light dark:text-primary-dark'
              }`}
            >
              {title}
            </button>
          )
        })}
      </div>
      <div className='mt-20'>
        {actions.find((item) => item.name == action)!.element}
      </div>
    </div>
  )
}

export default ActionSwitcher
