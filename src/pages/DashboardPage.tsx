import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export const DashboardPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <Helmet>
        <title>My Dashboard | My Fortune 4U</title>
        <meta name="description" content="View your upcoming bookings, past rituals and saved favourites." />
        <link rel="canonical" href="https://www.myfortune4u.com/dashboard" />
      </Helmet>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {t('dashboard.title')}
      </h1>
      <p className="text-sm text-slate-500">
        {t('dashboard.description')}
      </p>
    </div>
  )
}

