import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RitualCard } from '../components/rituals/RitualCard'
import { CategoryFilter } from '../components/filters/CategoryFilter'
import { rituals } from '../shared/data/rituals'

export const RitualsPage = () => {
  const { i18n, t } = useTranslation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('q') ?? '')

  const category = searchParams.get('category') ?? 'all'

  const filtered = useMemo(() => {
    return rituals.filter((ritual) => {
      if (category !== 'all' && ritual.category !== category) return false

      if (!search) return true

      const text =
        ritual.name[i18n.language as keyof typeof ritual.name] ??
        ritual.name.en

      return text.toLowerCase().includes(search.toLowerCase())
    })
  }, [category, search, i18n.language])

  const handleCategoryChange = (next: string) => {
    const nextParams = new URLSearchParams(searchParams)
    if (next === 'all') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', next)
    }
    setSearchParams(nextParams, { replace: true })
  }

  return (
    <div className="space-y-8">
      <header className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 flex-1">
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {t('rituals.title')}
          </h1>
          <p className="mt-1 text-sm text-slate-700 sm:text-base">
            {t('rituals.subtitle')}
          </p>
        </div>
        <div className="w-full min-w-0 sm:w-64 sm:shrink-0">
          <input
            type="search"
            placeholder={t('rituals.searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="glass-panel min-h-[44px] w-full min-w-0 rounded-full px-3 py-2.5 text-base outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
          />
        </div>
      </header>

      <CategoryFilter value={category} onChange={handleCategoryChange} />

      <section className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((ritual) => (
          <RitualCard key={ritual.id} ritual={ritual} />
        ))}
      </section>
    </div>
  )
}

