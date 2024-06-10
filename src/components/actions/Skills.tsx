import { useTranslation } from 'react-i18next'
import NextLogo from '@/assets/nextjs-icon-dark-background.svg?react'
import SpringLogo from '@/assets/springio.svg?react'
import FlutterLogo from '@/assets/flutter.svg?react'
import SymfonyLogo from '@/assets/symfony.svg?react'
import LaravelLogo from '@/assets/laravel.svg?react'
import ReactLogo from '@/assets/react.svg?react'
import Skill from '@/types/Skill'

function MySkills() {
  const { t } = useTranslation()
  const skills: Skill[] = [
    {
      title: 'Next.js',
      text: t('nextjs'),
      img: <NextLogo width={42} height={42} className='mb-3' />,
      link: 'https://nextjs.org/',
    },
    {
      title: 'Spring boot',
      text: t('spring'),
      img: <SpringLogo width={42} height={42} className='mb-3' />,
      link: 'https://spring.io/',
    },
    {
      title: 'Flutter',
      text: t('flutter'),
      img: <FlutterLogo width={42} height={42} className='mb-3' />,
      link: 'https://flutter.dev/',
    },
    {
      title: 'Symfony',
      text: t('symfony'),
      img: <SymfonyLogo width={42} height={42} className='mb-3' />,
      link: 'https://symfony.com/',
    },
    {
      title: 'Laravel',
      text: t('laravel'),
      img: <LaravelLogo width={42} height={42} className='mb-3' />,
      link: 'https://laravel.com/',
    },
    {
      title: 'React',
      text: t('react'),
      img: <ReactLogo width={42} height={42} className='mb-3' />,
      link: 'https://react.dev/',
    },
  ]

  return (
    <div className='flex flex-wrap items-center md:justify-start md:items-start md:flex-row gap-6 md:gap-8 flex-col'>
      {skills.map((skill, index) => (
        <div
          key={index}
          className='bg-secondary-light dark:bgsecondary-dark p-6 w-72 rounded-lg cursor-pointer hover:bg-light hover:scale-105 transition-all duration-200 items-center'
        >
          <a href={skill.link} target='_blank'>
            {skill.img}
            <h3 className='font-bold mb-3'>{skill.title}</h3>
            <p className='text-onSecondary-light dark:text-onSecondary-dark font-medium text-sm'>
              {skill.text}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}

export default MySkills
