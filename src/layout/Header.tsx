/// <reference types="vite-plugin-svgr/client" />

import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../i18n'
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

function Header({ currentRoute }: { currentRoute?: string }) {
  const [t, i18n] = useTranslation()
  const menuItems: MenuItem[] = [
    {
      url: '/',
      name: 'home',
    },
    {
      url: '/cv',
      name: 'resume',
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
      name: 'all_projects',
      url: '/projects',
    },
    {
      name: 'bio',
      url: '/bio',
    },
    {
      name: 'blog',
      url: '/blog',
    },
    {
      name: 'contact',
      url: '/contact',
    },
  ]

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
                <HoverCardTrigger
                  className={cn(
                    'cursor-pointer flex items-center font-semibold hover-color',
                    currentRoute === item.name ? 'text-green' : '',
                  )}
                >
                  {t(item.name)}
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
              className={cn(
                'items-center font-semibold hover-color',
                currentRoute === item.name ? 'text-green' : '',
              )}
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
      <Select
        onValueChange={i18n.changeLanguage}
        value={localStorage.getItem('lng')!}
      >
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder={t('lang')} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {availableLanguages.map((item, index) => (
              <SelectItem
                key={index}
                value={item.code}
                className="cursor-pointer"
              >
                {t(item.name)}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </header>
  )
}

export default Header
