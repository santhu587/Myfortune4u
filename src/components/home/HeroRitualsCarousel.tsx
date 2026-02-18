import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'ritual-priest-setup',
    image: '/images/carousel/ritual-priest-setup.png',
    caption: 'Vedic ritual',
    sub: 'Traditional pooja with pandit and deity altar',
    fit: 'cover' as const,
    position: '50% 22%'
  },
  {
    id: 'satyanarayana-pooja',
    image: '/images/carousel/satyanarayana-pooja.png',
    caption: 'Satyanarayana Pooja',
    sub: 'Elaborate homa setup with fire ceremony',
    fit: 'contain' as const,
    position: '50% 50%'
  },
  {
    id: 'navagraha-mandala',
    image: '/images/carousel/navagraha-mandala.png',
    caption: 'Navagraha Pooja',
    sub: 'Nine-planet mandala and offerings',
    fit: 'cover' as const,
    position: '50% 50%'
  },
  {
    id: 'krishna-archana',
    image: '/images/carousel/krishna-archana.png',
    caption: 'Krishna Archana',
    sub: 'Flower seva and devotional worship',
    fit: 'contain' as const,
    position: '50% 50%'
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
      className="relative h-[200px] min-h-[180px] overflow-hidden rounded-2xl border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:h-56 sm:rounded-[1.75rem] md:h-64 lg:h-[320px] lg:rounded-[2rem] xl:h-[340px]"
      aria-label="Vedic rituals carousel"
    >
      <div className="absolute inset-0 bg-slate-900">
        <AnimatePresence mode="wait">
          <motion.img
            key={active.id}
            src={active.image}
            alt={active.caption}
            className={`absolute inset-0 h-full w-full ${
              active.fit === 'contain'
                ? 'object-contain'
                : 'object-cover'
            } object-center`}
            style={{ objectPosition: active.position }}
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
      <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/90 sm:text-[11px]">
          {active.caption}
        </p>
        <p className="mt-0.5 line-clamp-2 text-balance text-base font-semibold drop-shadow-md sm:mt-1 sm:text-lg md:text-xl">
          {active.sub}
        </p>
      </div>

      {/* Dots indicator - touch-friendly tap area on mobile */}
      <div className="absolute bottom-3 right-3 flex gap-0.5 sm:bottom-4 sm:right-4 sm:gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`rounded-full transition-all min-h-[44px] min-w-[44px] flex items-center justify-center sm:min-h-0 sm:min-w-0 ${
              i === index ? 'h-1.5 w-5 bg-amber-400' : 'h-1.5 w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </motion.div>
  )
}
