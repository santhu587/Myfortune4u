import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  id: string
  image: string
  title: string
  subtitle: string
  caption: string
}

const slides: Slide[] = [
  {
    id: 'multi-devi',
    image: '/images/past/past-setup.png',
    title: 'Navagraha & Devi Alankara',
    subtitle: 'Full home mandala setup',
    caption: 'Complete samagri, alankara and homa performed for the family at home.'
  },
  {
    id: 'office-pooja',
    image: '/images/past/office-pooja.png',
    title: 'Office Pooja',
    subtitle: 'Indoor ceremony with deities & offerings',
    caption: 'Traditional pooja with adorned deities, flowers, fruits and our pandits performing the ceremony.'
  },
  {
    id: 'main-priest',
    image: '/images/priests/main-priest-alt.png',
    title: 'Lead ritual performer',
    subtitle: 'Chief pandit in action',
    caption: 'Guiding families through Mahamrityunjay Jaap, Satyanarayan Puja and more.'
  },
  {
    id: 'krishna',
    image: '/images/past/krishna-deity.png',
    title: 'Krishna Archana',
    subtitle: 'Flower seva & kirtana',
    caption: 'Beautifully decorated deity with pushpa archana and traditional chanting.'
  }
]

export const PastRitualsCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 6000)
    return () => window.clearInterval(id)
  }, [])

  const goTo = (direction: 'prev' | 'next') => {
    setIndex((i) => {
      if (direction === 'next') return (i + 1) % slides.length
      return (i - 1 + slides.length) % slides.length
    })
  }

  const active = slides[index]

  return (
    <section className="space-y-4">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Past poojas performed
        </h2>
        <p className="hidden text-xs text-slate-500 sm:inline">
          Glimpses from real homas, poojas and seva done by our team.
        </p>
      </div>

      <div className="glass-panel relative overflow-hidden p-3 sm:p-4">
        <div className="grid gap-4 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          <div className="relative aspect-[4/3] w-full min-h-[200px] overflow-hidden rounded-xl bg-black sm:min-h-0 sm:aspect-auto sm:h-80 sm:rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.title}
                className={`absolute inset-0 h-full w-full ${
                  active.id === 'main-priest' || active.id === 'krishna' || active.id === 'office-pooja'
                    ? 'object-contain object-center'
                    : 'object-cover object-center'
                }`}
                style={
                  active.id === 'office-pooja'
                    ? { objectPosition: '50% 40%' }
                    : undefined
                }
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                loading="lazy"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-3 pb-3 text-amber-50">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-100/80">
                  Real client ritual
                </p>
                <p className="text-sm font-semibold">{active.title}</p>
                <p className="text-xs text-amber-100/90">{active.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 text-sm text-slate-600">
            <p>{active.caption}</p>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[10px] font-semibold text-white">
                  {index + 1}
                </span>
                <span>
                  Slide {index + 1} of {slides.length}
                </span>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white/70 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => goTo('prev')}
                  aria-label="Previous ritual"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 sm:min-h-0 sm:min-w-0 sm:h-7 sm:w-7"
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo('next')}
                  aria-label="Next ritual"
                  className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-slate-600 hover:bg-slate-100 sm:min-h-0 sm:min-w-0 sm:h-7 sm:w-7"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

