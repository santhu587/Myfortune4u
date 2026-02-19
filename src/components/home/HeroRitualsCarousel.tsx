import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 'ritual-priest-setup',
    type: 'image' as const,
    image: '/images/carousel/ritual-priest-setup.png',
    caption: 'Vedic ritual',
    sub: 'Traditional pooja with pandit',
    fit: 'cover' as const,
    position: '50% 22%'
  },
  {
    id: 'video-glimpse',
    type: 'video' as const,
    src: '/videos/rituals-overview.mp4',
    caption: 'A glimpse',
    sub: 'Our sacred rituals'
  },
  {
    id: 'satyanarayana-pooja',
    type: 'image' as const,
    image: '/images/carousel/satyanarayana-pooja.png',
    caption: 'Satyanarayana Pooja',
    sub: 'Elaborate homa setup with fire ceremony',
    fit: 'contain' as const,
    position: '50% 50%'
  },
  {
    id: 'navagraha-mandala',
    type: 'image' as const,
    image: '/images/carousel/navagraha-mandala.png',
    caption: 'Navagraha Pooja',
    sub: 'Nine-planet mandala',
    fit: 'cover' as const,
    position: '50% 50%'
  },
  {
    id: 'krishna-archana',
    type: 'image' as const,
    image: '/images/carousel/krishna-archana.png',
    caption: 'Krishna Archana',
    sub: 'Flower seva and devotional worship',
    fit: 'contain' as const,
    position: '50% 50%'
  }
]

export const HeroRitualsCarousel = () => {
  const [index, setIndex] = useState(0)
  const [videoWithSound, setVideoWithSound] = useState(false)
  const [isInView, setIsInView] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => setIsInView(e.isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView && slides[index].type === 'video') {
      videoRef.current?.pause()
    } else if (isInView && slides[index].type === 'video') {
      videoRef.current?.play()
    }
  }, [isInView, index])

  useEffect(() => {
    if (videoWithSound) return
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 4000)
    return () => clearInterval(id)
  }, [videoWithSound])

  const handleSlideSelect = (i: number) => {
    setVideoWithSound(false)
    setIndex(i)
  }

  const handleVideoClick = () => setVideoWithSound(true)

  const handleStopVideo = () => {
    setVideoWithSound(false)
    setIndex((i) => (i + 1) % slides.length)
  }

  const active = slides[index]
  const isVideo = active.type === 'video'

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative h-[200px] min-h-[180px] overflow-hidden rounded-2xl border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.18)] sm:h-56 sm:rounded-[1.75rem] md:h-64 lg:h-[320px] lg:rounded-[2rem] xl:h-[340px]"
      aria-label="Vedic rituals carousel"
    >
      {isVideo ? (
        <div
          className="absolute inset-0 cursor-pointer overflow-hidden bg-black"
          onClick={handleVideoClick}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && handleVideoClick()}
          aria-label="Click to play video with sound"
        >
          <AnimatePresence mode="wait">
            <motion.video
              ref={videoRef}
              key={active.id}
              className="absolute left-1/2 top-1/2 min-h-full min-w-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
              src={active.src}
              autoPlay
              muted={!videoWithSound}
              loop
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          {!videoWithSound && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm">
                Tap for sound
              </span>
            </div>
          )}
          {videoWithSound && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                handleStopVideo()
              }}
              className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white/90 backdrop-blur-sm hover:bg-black/80 sm:right-4 sm:top-4"
              aria-label="Stop video and continue carousel"
            >
              Stop video
            </button>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/90 sm:text-[11px]">
              {active.caption}
            </p>
            <p className="mt-0.5 text-base font-semibold drop-shadow-md sm:text-lg md:text-xl">
              {active.sub}
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.image}
                alt={active.caption}
                className={`absolute inset-0 h-full w-full ${
                  active.fit === 'contain' ? 'object-contain' : 'object-cover'
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
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5">
            <p className="text-[10px] uppercase tracking-[0.2em] text-amber-100/90 sm:text-[11px]">
              {active.caption}
            </p>
            <p className="mt-0.5 line-clamp-2 text-balance text-base font-semibold drop-shadow-md sm:mt-1 sm:text-lg md:text-xl">
              {active.sub}
            </p>
          </div>
        </>
      )}

      <div className="absolute bottom-3 right-3 flex gap-0.5 sm:bottom-4 sm:right-4 sm:gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => handleSlideSelect(i)}
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
