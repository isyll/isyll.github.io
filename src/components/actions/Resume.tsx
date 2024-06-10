import { Download } from 'lucide-react'
import { useTranslation } from 'react-i18next'

function Resume() {
  const { t } = useTranslation()
  const versions = [
    {
      name: t('in_french'),
      link: '/Ibrahima_sylla_CV-en.pdf',
    },
    {
      name: t('in_english'),
      link: '/Ibrahima_sylla_CV-en.pdf',
    },
  ]

  return (
    <div className='md:flex-row flex gap-5 ms-5 flex-col'>
      {versions.map((item, index) => {
        return (
          <a href={item.link} target='_blank' key={index}>
            <button className='flex gap-2 bg-light opacity-90 hover:opacity-100 border p-5 py-2 rounded-xl border-[rgba(235,235,245,0.6)]'>
              {item.name}
              <Download />
            </button>
          </a>
        )
      })}
    </div>
  )
}

export default Resume
