import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'health',
    image: '/images/health-protection.png',
    caption: 'Health & Protection',
    sub: 'Mahamrityunjay Jaap, Navagraha Puja'
  },
  {
    id: 'new-beginnings',
    image: '/images/new-beginnings.png',
    caption: 'New Beginnings',
    sub: 'Griha Pravesh, Vastu Shanti'
  },
  {
    id: 'special',
    image: '/images/special-occasions.png',
    caption: 'Special Occasions',
    sub: 'Shashtipoorthi, Satyanarayan Puja'
  },
  {
    id: 'past-setup',
    image: '/images/past/past-setup.png',
    caption: 'Vedic homa setup',
    sub: 'Complete mandala & samagri'
  },
  {
    id: 'krishna',
    image: '/images/past/krishna-deity.png',
    caption: 'Krishna Archana',
    sub: 'Flower seva & kirtana'
  },
  {
    id: 'priest',
    image: '/images/priests/main-priest-alt.png',
    caption: 'Verified priests',
    sub: 'Traditional Vedic discipline'
  }
]

export const HeroRitualsCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  const active = slides[index]

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative h-64 overflow-hidden rounded-[2rem] border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.18)] lg:h-[340px]"
      aria-label="Vedic rituals carousel"
    >
      <div className="absolute inset-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.caption}
            className={`absolute inset-0 h-full w-full ${
              active.id === 'krishna' ? 'object-contain object-center' : 'object-cover'
            }`}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            loading="eager"
          />
        </AnimatePresence>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />

      {/* Bottom caption */}
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/90">
          {active.caption}
        </p>
        <p className="mt-1 text-balance text-lg font-semibold drop-shadow-md sm:text-xl">
          {active.sub}
        </p>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
