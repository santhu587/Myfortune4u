import { useTranslation } from 'react-i18next'

export const DashboardPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {t('dashboard.title')}
      </h1>
      <p className="text-sm text-slate-500">
        {t('dashboard.description')}
      </p>
    </div>
  )
}

