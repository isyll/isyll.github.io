import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import EnglishTranslations from './translations/en.json'
import FrenchTranslations from './translations/fr.json'
import getUserLocale from 'get-user-locale'
import { explodeByDash } from './lib/utils'

export const availableLanguages: { code: string; name: string }[] = [
  {
    code: 'en',
    name: 'english',
  },
  {
    code: 'fr',
    name: 'french',
  },
]

const resources = {
  fr: {
    translation: FrenchTranslations,
  },
  en: {
    translation: EnglishTranslations,
  },
} as const

if (!localStorage.getItem('lng')) {
  const userLocale = explodeByDash(getUserLocale(), 0) as string
  localStorage.setItem('lng', userLocale)
}

i18next.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('lng')!,
})

i18next.on('languageChanged', (lng) => localStorage.setItem('lng', lng))

export default i18next
