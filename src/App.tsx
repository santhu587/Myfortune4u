import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { MainNav } from './components/layout/MainNav'
import { SanskritShlokaCarousel } from './components/home/SanskritShlokaCarousel'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-white to-[#faf5ff] text-slate-900">
      <div className="page-padding pt-4 sm:pt-6 lg:pt-8">
        <header className="sticky top-0 z-30 mb-4 bg-gradient-to-b from-white/90 via-white/80 to-transparent backdrop-blur-md pt-[env(safe-area-inset-top)]">
          <div className="page-width flex items-center justify-between gap-2 py-2 sm:gap-4">
            <MainNav />
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          </div>
        </header>

        {isHome && (
          <div className="page-width mb-4 sm:mb-5">
            <SanskritShlokaCarousel />
          </div>
        )}

        <main className="page-width mt-4 sm:mt-6 lg:mt-8 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </main>
      </div>

      <footer className="page-width page-padding pb-6 pt-4 text-sm text-slate-700 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="flex flex-col gap-4 border-t border-slate-100 pt-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
            <p className="text-slate-600">
              © {new Date().getFullYear()} MyFortune. All rituals performed with Vedic discipline.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="tel:+917022168488" className="min-h-[44px] min-w-[44px] flex items-center font-medium hover:text-slate-900">
              Phone: +91 70221 68488
            </a>
            <a
              href="https://wa.me/917022168488"
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center font-medium hover:text-slate-900"
            >
              WhatsApp
            </a>
            <a
              href="mailto:dmkerimath46@gmail.com"
              className="min-h-[44px] min-w-[44px] flex items-center font-medium hover:text-slate-900"
            >
              Email
            </a>
            <a
              href="https://www.instagram.com/madic__saint442k?igsh=dTRqOW43ZnR1a2s3"
              target="_blank"
              rel="noreferrer"
              className="min-h-[44px] min-w-[44px] flex items-center font-medium hover:text-slate-900"
            >
              Instagram
            </a>
          </div>
          </div>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-500 sm:justify-start">
            <span>Design and developed by Santhosh Chandra</span>
            <a
              href="https://github.com/santhu587/Myfortune4u"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-800"
              aria-label="View source on GitHub"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
