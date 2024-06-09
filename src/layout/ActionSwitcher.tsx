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
      <div className='flex gap-4'>
        {actions.map((element) => {
          const title = t(element.name)
          return (
            <button
              onClick={() => setAction(element.name)}
              className={`font-medium bg-light rounded-3xl p-3 px-4 transition-all duration-200 ${
                action == element.name &&
                'bg-lightGreen text-primary-light dark:text-primary-dark'
              }`}
            >
              {title}
            </button>
          )
        })}
      </div>
      <div className='mt-12'>
        {actions.find((item) => item.name == action)!.element}
      </div>
    </div>
  )
}

export default ActionSwitcher
