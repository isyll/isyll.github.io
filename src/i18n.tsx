import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import EnglishTranslations from './translations/en.json'
import FrenchTranslations from './translations/fr.json'

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

i18next.use(initReactI18next).init({
  resources,
  lng: 'fr',
})

export default i18next
