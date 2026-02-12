import { motion } from 'framer-motion'

const cards = [
  {
    id: 'health-protection',
    image: '/images/health-protection.png',
    title: 'Health & Protection',
    subtitle: 'Mahamrityunjay Jaap, Navagraha Puja',
    tagline: 'Divine protection and healing energy'
  },
  {
    id: 'new-beginnings',
    image: '/images/new-beginnings.png',
    title: 'New Beginnings',
    subtitle: 'Griha Pravesh, Vastu Shanti',
    tagline: 'Blessed starts for home and life'
  },
  {
    id: 'special-occasions',
    image: '/images/special-occasions.png',
    title: 'Special Occasions',
    subtitle: 'Shashtipoorthi, Satyanarayan Puja',
    tagline: 'Grace-filled milestones and celebrations'
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
          Health, new beginnings, or special occasions—start with what you need
          most.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.5 }}
            className="flex flex-col rounded-[2.2rem] bg-[#f8f0e7] p-3"
          >
            <div className="overflow-hidden rounded-[1.8rem] bg-[#8C1C24]/5">
              <img
                src={card.image}
                alt={card.title}
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

