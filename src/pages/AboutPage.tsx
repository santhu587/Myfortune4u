import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

export const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-4">
      <Helmet>
        <title>About &amp; Trust | My Fortune 4U</title>
        <meta name="description" content="My Fortune 4U brings authentic, scripture-aligned Pooja and Homa rituals to modern devotees with verified pandits and complete guidance." />
        <link rel="canonical" href="https://www.myfortune4u.com/about" />
      </Helmet>
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {t('about.title')}
      </h1>
      <p className="text-sm text-slate-500">
        {t('about.description')}
      </p>
    </div>
  )
}

