/// <reference types="vite-plugin-svgr/client" />

import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../i18n'
import GithubLogo from '@/assets/github-logo.svg?react'
import LinkedinLogo from '@/assets/linkedin-logo.svg?react'
import socials from '../data/socials'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function Header() {
  const [t, i18n] = useTranslation()

  return (
    <header className='flex items-center justify-between py-5 px-11'>
      <h1 className='text-3xl font-bold'>
        <a href='/'>Porfolio</a>
      </h1>
      <div className='flex gap-16'>
        <div className='flex self-center gap-8'>
          <a href={socials.github} target='__blank'>
            <GithubLogo className='fill-white h-6 opacity-60' />
          </a>
          <a href={socials.linkedin} target='__blank'>
            <LinkedinLogo className='fill-white h-6 opacity-60' />
          </a>
        </div>
        <Select
          onValueChange={i18n.changeLanguage}
          value={localStorage.getItem('lng')!}
        >
          <SelectTrigger className='w-[100px]'>
            <SelectValue placeholder={t('lang')} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {availableLanguages.map((item, index) => (
                <SelectItem
                  key={index}
                  value={item.code}
                  className='cursor-pointer'
                >
                  {t(item.name)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}

export default Header
