import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()

  return (
    <div>
      <a
        href='https://github.com/isyll?tab=repositories'
        className=' text-blue-300 underline'
        target='_blank'
      >
        {t('goto_github')}
      </a>
    </div>
  )
}

export default Projects
