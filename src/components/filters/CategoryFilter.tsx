import { motion } from 'framer-motion'

type Props = {
  value: string
  onChange: (value: string) => void
}

const OPTIONS: { value: string; label: string }[] = [
  { value: 'all', label: 'All rituals' },
  { value: 'homa', label: 'Homas' },
  { value: 'pooja', label: 'Poojas' },
  { value: 'special', label: 'Special occasions' }
]

export const CategoryFilter = ({ value, onChange }: Props) => {
  return (
    <div className="glass-panel overflow-x-auto rounded-2xl bg-white/70 px-1.5 py-1 text-xs shadow-sm sm:inline-flex sm:rounded-full">
      <div className="flex min-w-max items-center gap-1 py-1 sm:py-0">
      {OPTIONS.map((option) => {
        const isActive = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`relative inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full px-3 py-2 font-medium transition sm:min-h-0 sm:min-w-0 sm:py-1 ${
              isActive
                ? 'text-slate-900'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            aria-pressed={isActive}
          >
            {isActive && (
              <motion.span
                layoutId="category-pill"
                className="absolute inset-0 rounded-full bg-slate-900 text-white"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{option.label}</span>
          </button>
        )
      })}
      </div>
    </div>
  )
}

