import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const shlokas = [
  {
    id: 'shanti',
    text: 'ॐ सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै ।',
    meaning: 'May we be protected together. May we be nourished together. May we work with vigour together.',
    source: 'Shanti Mantra (Taittiriya Upanishad)'
  },
  {
    id: 'asato',
    text: 'ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ।',
    meaning: 'Lead me from untruth to truth, from darkness to light, from death to immortality.',
    source: 'Brihadaranyaka Upanishad'
  },
  {
    id: 'shanti3',
    text: 'ॐ शान्तिः शान्तिः शान्तिः ।',
    meaning: 'Om, peace, peace, peace.',
    source: 'Universal peace invocation'
  },
  {
    id: 'ganesha',
    text: 'ॐ गं गणपतये नमः ।',
    meaning: 'Om, salutations to Lord Ganesha (remover of obstacles).',
    source: 'Ganesha mantra'
  },
  {
    id: 'guru',
    text: 'गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः । गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥',
    meaning: 'The Guru is Brahma, Vishnu and Mahesh. The Guru is the supreme Brahman itself. Salutations to that Guru.',
    source: 'Guru Stotram'
  },
  {
    id: 'sarvam',
    text: 'ॐ सर्वं मङ्गलं माङ्गल्यं शिवे सर्वार्थसाधिके । शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥',
    meaning: 'Om, all auspiciousness to the most auspicious one, who accomplishes all purposes. O refuge, three-eyed Gauri, Narayani, salutations to you.',
    source: 'Devi mantra'
  }
]

export const SanskritShlokaCarousel = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % shlokas.length)
    }, 7000)
    return () => clearInterval(id)
  }, [])

  const active = shlokas[index]

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-r from-amber-50/90 via-orange-50/70 to-amber-50/90 px-4 py-3 shadow-[0_4px_24px_rgba(251,191,36,0.12)]"
      aria-label="Sanskrit shloka carousel"
    >
      <div className="relative flex min-h-[72px] w-full flex-col items-center justify-center gap-1 py-2 text-center sm:min-h-[80px] sm:gap-2 sm:py-3">
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-amber-600/70 sm:left-4">
          <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex max-w-3xl flex-col gap-0.5 pl-8 pr-8 sm:pl-12 sm:pr-12"
          >
            <p
              className="text-base leading-relaxed text-slate-800 sm:text-lg md:text-xl"
              style={{ fontFamily: 'var(--font-sanskrit), "Noto Sans Devanagari", serif' }}
              lang="sa"
            >
              {active.text}
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">{active.meaning}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="mt-1 flex items-center gap-1.5">
          {shlokas.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`rounded-full transition-all ${
                i === index
                  ? 'h-2 w-6 bg-amber-500'
                  : 'h-1.5 w-1.5 bg-amber-300/60 hover:bg-amber-400/80'
              }`}
              aria-label={`Shloka ${i + 1} of ${shlokas.length}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
