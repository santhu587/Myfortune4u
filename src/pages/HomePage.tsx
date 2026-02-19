import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { CalendarHeart, ScrollText, Sparkles, Users } from 'lucide-react'
import { FeaturedIntentCards } from '../components/home/FeaturedIntentCards'
import { HeroRitualsCarousel } from '../components/home/HeroRitualsCarousel'
import { OtherServicesSection } from '../components/home/OtherServicesSection'
import { PastRitualsCarousel } from '../components/home/PastRitualsCarousel'

const ORGANIZATION_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'My Fortune 4U',
  url: 'https://www.myfortune4u.com',
  description: 'Book authentic Pooja and Homa rituals with verified pandits. At home or temple.',
}

export const HomePage = () => {
  const { t } = useTranslation()
  const featuredRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>My Fortune 4U | Pooja &amp; Homa Rituals – Book Verified Pandits</title>
        <meta name="description" content="Book authentic Pooja and Homa rituals with verified pandits. Griha Pravesh, Satyanarayana Pooja, Navagraha and more. At home or temple." />
        <link rel="canonical" href="https://www.myfortune4u.com/" />
        <script type="application/ld+json">{JSON.stringify(ORGANIZATION_JSON_LD)}</script>
      </Helmet>
    <div className="space-y-10 lg:space-y-14">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50/80 px-3 py-1.5 text-sm font-medium text-orange-800 shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            <span>10,000+ {t('stats.ritualsCompleted')}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          >
            {t('hero.headline')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="max-w-xl text-base leading-relaxed text-slate-700"
          >
            {t('hero.subheadline')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.45)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              onClick={() =>
                featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              {t('hero.cta')}
            </button>
            <button
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur hover:bg-slate-50"
              onClick={() => navigate('/booking')}
            >
              {t('hero.secondaryCta')}
            </button>
          </motion.div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4 sm:max-w-md">
            <StatCard label={t('stats.ritualsCompleted')} value="10k+" />
            <StatCard label={t('stats.verifiedPriests')} value="500+" />
            <StatCard label={t('stats.citiesServed')} value="40+" />
          </div>
        </div>

        <HeroRitualsCarousel />
      </section>

      <section className="space-y-4">
        <div className="flex justify-start">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(249,115,22,0.45)]"
            onClick={() =>
              featuredRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          >
            {t('home.journeyTitle')}
          </button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <HomeQuickNavCard
            icon={ScrollText}
            title={t('home.browseRituals')}
            description={t('home.browseRitualsDesc')}
            onClick={() => navigate('/rituals')}
          />
          <HomeQuickNavCard
            icon={CalendarHeart}
            title={t('home.bookRitual')}
            description={t('home.bookRitualDesc')}
            onClick={() => navigate('/booking')}
          />
          <HomeQuickNavCard
            icon={Users}
            title={t('home.meetTeam')}
            description={t('home.meetTeamDesc')}
            onClick={() => navigate('/priests')}
          />
        </div>
      </section>

      <div ref={featuredRef}>
        <FeaturedIntentCards />
      </div>

      <PastRitualsCarousel />

      <section className="glass-panel overflow-hidden rounded-2xl p-3 sm:p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="space-y-2 sm:w-2/5">
            <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
              A glimpse of our rituals
            </h2>
            <p className="text-xs text-slate-600 sm:text-sm">
              Short video from recent poojas and homas performed by our pandits, with full Vedic
              discipline and traditional setup.
            </p>
          </div>
          <div className="sm:w-3/5">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/videos/rituals-overview.mp4"
                controls
                muted
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      <OtherServicesSection />
    </div>
    </>
  )
}

const StatCard = ({ label, value }: { label: string; value: string }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.01 }}
    className="glass-panel flex flex-col gap-1 px-3 py-2 text-left"
  >
    <span className="text-sm font-medium text-slate-600">{label}</span>
    <span className="text-lg font-semibold text-slate-900">{value}</span>
  </motion.div>
)

type HomeQuickNavCardProps = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
  onClick: () => void
}

const HomeQuickNavCard = ({
  icon: Icon,
  title,
  description,
  onClick
}: HomeQuickNavCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className="glass-panel flex w-full items-start gap-3 rounded-2xl border border-transparent bg-gradient-to-br from-white via-white to-orange-50 px-3.5 py-3 text-left transition hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-[0_18px_45px_rgba(15,23,42,0.16)]"
  >
    <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] text-white shadow-sm">
      <Icon className="h-4 w-4" aria-hidden="true" />
    </span>
    <span className="flex flex-1 flex-col">
      <span className="text-sm font-semibold text-slate-900">{title}</span>
      <span className="text-xs text-slate-600 sm:text-sm">{description}</span>
    </span>
  </button>
)

