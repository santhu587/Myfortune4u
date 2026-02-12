import { useTranslation } from 'react-i18next'

export const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {t('about.title')}
      </h1>
      <p className="text-sm text-slate-500">
        {t('about.description')}
      </p>
    </div>
  )
}

