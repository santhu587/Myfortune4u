import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { rituals } from '../shared/data/rituals'
import { PriceComparison } from '../components/rituals/PriceComparison'

export const RitualDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const { i18n } = useTranslation()
  const ritual = rituals.find((r) => r.id === id) ?? rituals[0]

  const title =
    ritual.name[i18n.language as keyof typeof ritual.name] ?? ritual.name.en

  return (
    <div className="space-y-8">
      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          {/* Hero image gallery */}
          <div className="glass-panel overflow-hidden">
            <div className="relative h-56 w-full overflow-hidden bg-slate-100 sm:h-64">
              {ritual.images[0] && (
                <img
                  src={ritual.images[0]}
                  alt={title}
                  className="h-full w-full object-cover object-center"
                />
              )}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/80">
                  Ritual
                </p>
                <h1 className="mt-1 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {title}
                </h1>
              </div>
            </div>
            {ritual.images.length > 1 && (
              <div className="flex gap-2 border-t border-white/60 bg-white/60 px-3 py-2">
                {ritual.images.slice(1).map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt={title}
                    className="h-12 w-16 rounded-lg object-cover object-center"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Overview */}
          <div className="glass-panel overflow-hidden p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Overview
            </p>
            <p className="mt-2 text-sm text-slate-500">
              {
                ritual.description[
                  i18n.language as keyof typeof ritual.description
                ]
              }
            </p>
          </div>

          {/* Significance / benefits */}
          <div className="glass-panel p-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Significance &amp; benefits
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
              {ritual.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What is included */}
          <div className="glass-panel p-4">
            <h2 className="text-sm font-semibold text-slate-900">
              What&apos;s included
            </h2>
            <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
              {ritual.requirements.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing & packages */}
        <PriceComparison pricing={ritual.pricing} />
      </section>
    </div>
  )
}

