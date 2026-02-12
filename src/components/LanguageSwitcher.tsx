import { useTranslation } from 'react-i18next'
import type { SupportedLanguage } from '../services/i18n'
import { Languages } from 'lucide-react'

const LANGUAGE_LABEL: Record<SupportedLanguage, string> = {
  en: 'EN',
  kn: 'ಕನ್',
  hi: 'हि'
}

const LANGUAGE_NAME_KEY: Record<SupportedLanguage, string> = {
  en: 'language.english',
  kn: 'language.kannada',
  hi: 'language.hindi'
}

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation()
  const current = (i18n.language as SupportedLanguage) || 'en'

  const changeLanguage = (lng: SupportedLanguage) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('myfortune-language', lng)
  }

  return (
    <div className="glass-panel inline-flex items-center gap-2 px-3 py-2 text-sm shadow-sm">
      <Languages className="h-4 w-4 text-orange-600" aria-hidden="true" />
      <span className="hidden sm:inline font-medium text-slate-700">
        {t('language.label')}
      </span>
      <div className="flex rounded-full bg-slate-100/60 p-0.5">
        {(Object.keys(LANGUAGE_LABEL) as SupportedLanguage[]).map((lng) => {
          const isActive = current.startsWith(lng)
          return (
            <button
              key={lng}
              type="button"
              onClick={() => changeLanguage(lng)}
              className={`relative inline-flex items-center justify-center px-2.5 py-1 text-sm font-semibold rounded-full transition-all ${
                isActive
                  ? 'bg-white text-orange-700 shadow-sm'
                  : 'text-slate-700 hover:text-orange-600'
              }`}
              aria-pressed={isActive}
              aria-label={t(LANGUAGE_NAME_KEY[lng])}
            >
              {LANGUAGE_LABEL[lng]}
            </button>
          )
        })}
      </div>
    </div>
  )
}

