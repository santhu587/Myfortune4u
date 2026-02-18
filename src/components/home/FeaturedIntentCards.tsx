import { motion } from 'framer-motion'

const cards = [
  {
    id: 'satyanarayana-ashtalakshmi',
    image: '/images/moments/satyanarayana-ashtalakshmi.png',
    title: 'Satyanarayana with Ashtalakshmi',
    subtitle: 'Elaborate deity worship and floral offerings',
    tagline: 'Abundance and divine grace',
    objectPosition: '50% 35%'
  },
  {
    id: 'varada-shankara-katha',
    image: '/images/moments/varada-shankara-katha.png',
    title: 'Varada Shankara Katha',
    subtitle: 'Traditional pooja with lamps and devotion',
    tagline: 'Sacred storytelling and blessings',
    objectPosition: '45% 50%'
  },
  {
    id: 'vivaha-vidi',
    image: '/images/moments/vivaha-vidi.png',
    title: 'Vivaha & Wedding Ceremonies',
    subtitle: 'Wedding pooja with deity and offerings',
    tagline: 'Blessed beginnings for couples',
    objectPosition: '50% 40%'
  }
]

export const FeaturedIntentCards = () => {
  return (
    <section className="space-y-5">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          Choose by life moment
        </h2>
        <p className="hidden text-xs text-slate-500 sm:inline">
          Deity worship, katha ceremonies, or wedding rituals—choose your moment.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.5 }}
            className="flex flex-col rounded-2xl bg-[#f8f0e7] p-2.5 sm:rounded-[2.2rem] sm:p-3"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200 sm:rounded-[1.8rem]">
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
                style={{ objectPosition: card.objectPosition ?? '50% 50%' }}
                loading="lazy"
              />
            </div>
            <div className="mt-2 px-0.5">
              <h3 className="text-sm font-semibold text-slate-900 sm:line-clamp-1">{card.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-2 sm:line-clamp-none">{card.subtitle}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

