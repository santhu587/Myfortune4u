import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { PriestCard } from '../components/priests/PriestCard'
import { PriestsCarousel } from '../components/priests/PriestsCarousel'
import { priests } from '../shared/data/priests'

export const PriestsPage = () => {
  const { t } = useTranslation()
  return (
    <div className="space-y-6">
      <Helmet>
        <title>Verified Pandits | My Fortune 4U</title>
        <meta name="description" content="Meet verified, experienced pandits who perform homas, poojas and life ceremonies with full Vedic discipline." />
        <link rel="canonical" href="https://www.myfortune4u.com/priests" />
      </Helmet>
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t('priests.title')}
        </h1>
        <p className="text-base text-slate-700">
          {t('priests.subtitle')}
        </p>
      </header>

      <PriestsCarousel />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {priests.map((priest) => (
          <PriestCard key={priest.id} priest={priest} />
        ))}
      </section>
    </div>
  )
}

