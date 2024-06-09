import Bio from '@/components/actions/Bio'
import Projects from '@/components/actions/Projects'
import Resume from '@/components/actions/Resume'
import MySkills from '@/components/actions/Skills'
import MenuItem from '@/types/MenuItem'
import { Contact } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function ActionSwitcher({ className }: { className?: string }) {
  const { t } = useTranslation()

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

  return (
    <div className={className}>
      {actions.map((element) => {
        const title = t(element.name)
        return <button className=' rounded-md '>{title}</button>
      })}
    </div>
  )
}

export default ActionSwitcher
