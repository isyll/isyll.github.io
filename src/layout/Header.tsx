import { useTranslation } from 'react-i18next'
import { availableLanguages } from '../i18n'
import { ChangeEvent } from 'react'

function Header() {
  return (
    <header>
      <LanguageSwitcher />
    </header>
  )
}

function LanguageSwitcher() {
  /* @ts-ignore */
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

export default Header
