import { Star } from 'lucide-react'
import type { Priest } from '../../shared/data/priests'

type Props = {
  priest: Priest
}

export const PriestCard = ({ priest }: Props) => {
  return (
    <article className="glass-panel flex flex-col overflow-hidden">
      <div className="relative h-60 overflow-hidden sm:h-64">
        <img
          src={priest.primaryImage}
          alt={priest.name}
          className="h-full w-full object-cover object-top"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-3 pb-2">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-amber-100/90">
              Ritual performer
            </p>
            <p className="text-sm font-semibold text-white">{priest.name}</p>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2 py-0.5 text-[11px] text-amber-100">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{priest.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-3">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
          {priest.city} • {priest.yearsExperience}+ yrs
        </p>
        <p className="text-xs text-slate-500">
          {priest.specializations.slice(0, 3).join(' • ')}
        </p>
        <p className="mt-auto text-[11px] text-slate-400">
          Languages: {priest.languages.join(', ')}
        </p>
      </div>
    </article>
  )
}

