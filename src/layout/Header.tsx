import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../i18n'
import { ChangeEvent } from 'react'
import { menuItems } from '../data/site-data'
import { hasSubItems } from '../types/MenuItem'
import { ReactComponent as GithubLogo } from '../svgs/github-logo.svg'
import { ReactComponent as LinkedinLogo } from '../svgs/linkedin-logo.svg'
import socials from '../data/socials'

function Header() {
  return (
    <header className="flex items-center justify-between py-5 px-11">
      <h1 className="text-3xl font-bold">
        <a href="/">Porfolio</a>
      </h1>
      <Menu />
      <Socials />
      <LanguageSwitcher />
    </header>
  )
}

function Menu() {
  const { t } = useTranslation()

  return (
    <nav className="flex gap-6">
      {menuItems.map((item, index) => {
        if (hasSubItems(item)) {
          return (
            <a key={index} href={item.url} className="items-center font-semibold">
              {t(item.name)}
            </a>
          )
        }
        return (
          <a key={index} href={item.url} className="items-center font-semibold">
            {t(item.name)}
          </a>
        )
      })}
    </nav>
  )
}

function LanguageSwitcher() {
  const [t, i18n] = useTranslation()
  const onChangeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value
    i18n.changeLanguage(language)
  }

  return (
    <select onChange={onChangeLanguage}>
      {availableLanguages.map((item, index) => (
        <option key={index} value={item.code}>
          {t(item.name)}
        </option>
      ))}
    </select>
  )
}

function Socials() {
  return (
    <div className="flex self-center gap-8">
      <a href={socials.github} target="__blank">
        <GithubLogo className="fill-white h-6 opacity-60" />
      </a>
      <a href={socials.linkedin} target="__blank">
        <LinkedinLogo className="fill-white h-6 opacity-60" />
      </a>
    </div>
  )
}

export default Header
