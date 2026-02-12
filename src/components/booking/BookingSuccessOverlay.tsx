import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

const FLOWERS = ['🌸', '🌺', '🏵️', '💮', '🌼', '🌻', '🪷', '✨']
const COUNT = 28

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export const BookingSuccessOverlay = ({
  onClose
}: {
  onClose: () => void
}) => {
  const [flash, setFlash] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setFlash(false), 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        {/* Flash */}
        <AnimatePresence>
          {flash && (
            <motion.div
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute inset-0 bg-amber-100"
            />
          )}
        </AnimatePresence>

        {/* Floating flowers */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {Array.from({ length: COUNT }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl sm:text-3xl"
              style={{
                left: `${randomBetween(0, 100)}%`,
                top: `${randomBetween(0, 100)}%`
              }}
              initial={{
                opacity: 0,
                scale: 0,
                y: 0,
                rotate: 0
              }}
              animate={{
                opacity: [0, 0.95, 0.9],
                scale: [0, 1.3, 1.1],
                y: [0, randomBetween(-30, 30), randomBetween(-20, 20)],
                rotate: [0, randomBetween(-15, 15)]
              }}
              transition={{
                delay: randomBetween(0.05, 0.6),
                duration: 1.2,
                ease: 'easeOut'
              }}
            >
              {FLOWERS[i % FLOWERS.length]}
            </motion.span>
          ))}
        </div>

        {/* Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative mx-4 max-w-md rounded-3xl bg-white p-8 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100"
            >
              <CheckCircle2 className="h-12 w-12 text-emerald-600" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-bold text-slate-900 sm:text-3xl"
            >
              Booking confirmed!
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-3 text-base font-medium text-slate-700"
            >
              We will contact you soon on WhatsApp or email.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-2 text-sm text-slate-600"
            >
              Thanks for choosing us. 🙏
            </motion.p>

            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              onClick={onClose}
              className="mt-6 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-slate-800"
            >
              Done
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
