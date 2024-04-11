/// <reference types="vite-plugin-svgr/client" />

import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../i18n'
import { ChangeEvent } from 'react'
import MenuItem, { hasSubItems } from '@/types/MenuItem'
import GithubLogo from '@/assets/github-logo.svg?react'
import LinkedinLogo from '@/assets/linkedin-logo.svg?react'
import socials from '../data/socials'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { ChevronDown, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

function Header() {
  const [t, i18n] = useTranslation()
  const menuItems: MenuItem[] = [
    {
      url: '/cv',
      name: t('resume'),
      subItems: [
        {
          name: t('in_french'),
          url: '/cv?version=french',
        },
        {
          name: t('in_english'),
          url: '/cv?version=english',
        },
      ],
    },
    {
      name: t('all_projects'),
      url: '/projects',
    },
    {
      name: t('bio'),
      url: '/bio',
    },
    {
      name: t('blog'),
      url: '/blog',
    },
    {
      name: t('contact'),
      url: '/contact',
    },
  ]
  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value
    i18n.changeLanguage(language)
  }

  return (
    <header className="flex items-center justify-between py-5 px-11">
      <h1 className="text-3xl font-bold">
        <a href="/">Porfolio</a>
      </h1>

      <nav className="flex gap-8">
        {menuItems.map((item, index) => {
          if (hasSubItems(item)) {
            return (
              <HoverCard key={index} openDelay={0} closeDelay={0}>
                <HoverCardTrigger className="cursor-pointer flex items-center font-semibold hover-color">
                  {item.name}
                  <ChevronDown />
                </HoverCardTrigger>
                <HoverCardContent className="w-50 border-none shadow-sm">
                  {item.subItems?.map((sub, index) => (
                    <div key={index} className="flex gap-2 hover-color pb-3">
                      <FileText size={20} />
                      <Link to={sub.url}>{sub.name}</Link>
                    </div>
                  ))}
                </HoverCardContent>
              </HoverCard>
            )
          }
          return (
            <Link
              to={item.url}
              key={index}
              className="items-center font-semibold hover-color"
            >
              {t(item.name)}
            </Link>
          )
        })}
      </nav>
      <div className="flex self-center gap-8">
        <a href={socials.github} target="__blank">
          <GithubLogo className="fill-white h-6 opacity-60" />
        </a>
        <a href={socials.linkedin} target="__blank">
          <LinkedinLogo className="fill-white h-6 opacity-60" />
        </a>
      </div>
      <select onChange={onChangeLanguage} value={localStorage.getItem('lng')!}>
        {availableLanguages.map((item, index) => (
          <option key={index} value={item.code}>
            {t(item.name)}
          </option>
        ))}
      </select>
    </header>
  )
}

export default Header
