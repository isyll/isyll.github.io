import { useTranslation } from 'react-i18next'
import NextLogo from '@/assets/nextjs-icon-dark-background.svg?react'

function MySkills({ className }: { className?: string }) {
  const { t } = useTranslation()

  return (
    <div className={`${className}`}>
      <h1 className='font-bold text-xl pb-10'>{t('skills')}</h1>
      <div className='flex'>
        <div className='bg-secondary-light dark:bgsecondary-dark p-6 w-72'>
          <NextLogo width={42} height={42} className='mb-3' />
          <h3 className='font-bold mb-3'>Next.js</h3>
          <p className='text-onSecondary-light dark:text-onSecondary-dark font-medium text-sm'>
            {t('nextjs')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MySkills
