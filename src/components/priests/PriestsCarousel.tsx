import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Users } from 'lucide-react'

const slides = [
  {
    id: 'group',
    image: '/images/priests/group-performers.png',
    title: 'Our ritual performers',
    subtitle: 'Verified pandits in traditional Vedic discipline'
  },
  {
    id: 'team',
    image: '/images/priests/team-priests.png',
    title: 'Ritual team',
    subtitle: 'Experienced in homas, poojas and life ceremonies'
  },
  {
    id: 'lead',
    image: '/images/priests/main-priest.png',
    title: 'Lead ritualist',
    subtitle: 'Chief pandit guiding families through sacred ceremonies'
  }
]

export const PriestsCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const active = slides[index]

  const goTo = (dir: 'prev' | 'next') => {
    setIndex((i) => {
      if (dir === 'next') return (i + 1) % slides.length
      return (i - 1 + slides.length) % slides.length
    })
  }

  return (
    <section className="space-y-3">
      <div className="glass-panel relative overflow-hidden rounded-2xl">
        <div className="relative flex aspect-[16/9] min-h-[200px] w-full items-center justify-center overflow-hidden bg-slate-100 sm:min-h-[280px] sm:aspect-auto sm:h-[320px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.id}
              src={active.image}
              alt={active.title}
              className="absolute inset-0 h-full w-full object-cover object-center sm:object-contain"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              loading="lazy"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                <Users className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">{active.title}</p>
                <p className="text-xs text-amber-100/90">{active.subtitle}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo('prev')}
                aria-label="Previous"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:h-8 sm:w-8 sm:min-h-0 sm:min-w-0"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo('next')}
                aria-label="Next"
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 sm:h-8 sm:w-8 sm:min-h-0 sm:min-w-0"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 border-t border-slate-100/80 bg-white/40 px-3 py-2 sm:gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-all sm:min-h-0 sm:min-w-0 ${
                i === index ? 'h-2 w-6 bg-amber-500' : 'h-2 w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
