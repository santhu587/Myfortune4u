import { motion } from 'framer-motion'

type Props = {
  pricing: {
    basic: number
    premium: number
    deluxe: number
  }
}

const tiers = ['basic', 'premium', 'deluxe'] as const

export const PriceComparison = ({ pricing }: Props) => {
  return (
    <div className="grid gap-3">
      <h2 className="text-sm font-semibold text-slate-900">
        Packages &amp; pricing
      </h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {tiers.map((tier) => (
          <motion.div
            key={tier}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`glass-panel flex flex-col gap-1 p-3 ${
              tier === 'premium'
                ? 'border-saffron-300/70 bg-gradient-to-b from-amber-50/70 via-white to-white'
                : ''
            }`}
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              {tier}
            </span>
            <span className="text-lg font-semibold text-slate-900">
              ₹{pricing[tier].toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500">
              Includes samagri, priest dakshina and guidance.
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

