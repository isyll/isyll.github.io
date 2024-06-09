import { useTranslation } from 'react-i18next'
import NextLogo from '@/assets/nextjs-icon-dark-background.svg?react'
import SpringLogo from '@/assets/springio.svg?react'
import FlutterLogo from '@/assets/flutter.svg?react'
import Skill from '@/types/Skill'

function MySkills({ className }: { className?: string }) {
  const { t } = useTranslation()
  const skills: Skill[] = [
    {
      title: 'Next.js',
      text: t('nextjs'),
      img: <NextLogo width={42} height={42} className='mb-3' />,
      link: 'https://spring.io/',
    },
    {
      title: 'Spring boot',
      text: t('spring'),
      img: <SpringLogo width={42} height={42} className='mb-3' />,
      link: 'https://nextjs.org/',
    },
    {
      title: 'Flutter',
      text: t('flutter'),
      img: <FlutterLogo width={42} height={42} className='mb-3' />,
      link: 'https://flutter.dev/',
    },
  ]

  return (
    <div className={`${className}`}>
      {/* <h1 className='font-bold text-xl pb-10'>{t('skills')}</h1> */}
      <div className='flex gap-5 md:gap-10'>
        {skills.map((skill) => (
          <div className='bg-secondary-light dark:bgsecondary-dark p-6 w-72 rounded-md cursor-pointer hover:bg-light hover:scale-105 transition-all duration-200'>
            <a href={skill.link}>
              {skill.img}
              <h3 className='font-bold mb-3'>{skill.title}</h3>
              <p className='text-onSecondary-light dark:text-onSecondary-dark font-medium text-sm'>
                {skill.text}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MySkills