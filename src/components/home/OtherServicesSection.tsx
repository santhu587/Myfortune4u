import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookOpen, MessageCircle, CalendarCheck } from 'lucide-react'

const services = [
  {
    id: 'kundli-matching',
    icon: BookOpen,
    path: '/booking?service=kundli'
  },
  {
    id: 'guidance',
    icon: MessageCircle,
    path: '/booking?service=guidance'
  },
  {
    id: 'muhurta',
    icon: CalendarCheck,
    path: '/booking?service=muhurta'
  }
] as const

export const OtherServicesSection = () => {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-700">
          {t('otherServices.title')}
        </h2>
        <p className="mt-1 text-base text-slate-600">
          {t('otherServices.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, index) => {
          const titleKey = `otherServices.items.${item.id}.title`
          const descriptionKey = `otherServices.items.${item.id}.description`
          const ctaKey = `otherServices.items.${item.id}.cta`

          return (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
              className="glass-panel flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="flex flex-1 flex-col gap-3 p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-slate-900">
                  {t(titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {t(descriptionKey)}
                </p>
                <button
                  type="button"
                  onClick={() => navigate(item.path)}
                  className="mt-auto inline-flex w-fit items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
                >
                  {t(ctaKey)}
                </button>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}
