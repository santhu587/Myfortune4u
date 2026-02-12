import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from '../locales/en.json'
import kn from '../locales/kn.json'
import hi from '../locales/hi.json'

export const supportedLanguages = ['en', 'kn', 'hi'] as const
export type SupportedLanguage = (typeof supportedLanguages)[number]

const resources = {
  en: { translation: en },
  kn: { translation: kn },
  hi: { translation: hi },
} as const

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: supportedLanguages,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'myfortune-language',
      caches: ['localStorage'],
    },
  })

export default i18n

