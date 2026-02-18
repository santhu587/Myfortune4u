import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { Ritual } from '../../shared/data/rituals'
import { ArrowRight, Clock, Users } from 'lucide-react'

type Props = {
  ritual: Ritual
}

export const RitualCard = ({ ritual }: Props) => {
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  const title =
    ritual.name[i18n.language as keyof typeof ritual.name] ?? ritual.name.en

  const handleViewDetails = () => {
    navigate(`/rituals/${ritual.id}`)
  }

  const handleBook = () => {
    navigate(`/booking?ritualId=${ritual.id}`)
  }

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="group glass-panel flex flex-col overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-slate-100">
        {ritual.images[0] && (
          <img
            src={ritual.images[0]}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        <div className="relative flex h-full flex-col justify-between p-3 text-amber-50">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em]">
            {ritual.category.toUpperCase()}
          </span>
          <p className="text-sm font-semibold leading-snug text-amber-50 drop-shadow">
            {title}
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-3 sm:p-3.5">
        <div className="flex items-center justify-between text-[11px] text-slate-500">
          <div className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span>{ritual.duration} mins</span>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 shrink-0 text-slate-400" />
            <span>1–2 pandits</span>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
          <div className="text-xs text-slate-500">
            Starting from
            <div className="text-base font-semibold text-slate-900">
              ₹{ritual.pricing.basic.toLocaleString('en-IN')}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:gap-2">
            <button
              type="button"
              onClick={handleBook}
              className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] px-4 py-2.5 text-[11px] font-semibold text-white shadow-sm sm:py-1.5 sm:px-3"
            >
              Book this pooja
            </button>
            <button
              type="button"
              onClick={handleViewDetails}
              className="inline-flex min-h-[44px] items-center justify-center gap-1 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-[11px] font-semibold text-slate-700 hover:bg-slate-50 sm:py-1 sm:px-3"
            >
              View details
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

