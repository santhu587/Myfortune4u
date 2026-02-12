import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Flame, Sparkles, Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '../LanguageSwitcher'
import { motion, AnimatePresence } from 'framer-motion'

const navLinkClass =
  'relative text-sm font-medium text-slate-800 hover:text-slate-900 transition-colors px-2 py-1'

const navLinkClassMobile =
  'block w-full rounded-xl px-4 py-3.5 text-left text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-slate-900 transition-colors'

export const MainNav = () => {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  useEffect(() => {
    if (!mobileMenuOpen) return
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && closeMobileMenu()
    window.addEventListener('keydown', onEscape)
    return () => window.removeEventListener('keydown', onEscape)
  }, [mobileMenuOpen])

  return (
    <>
      <nav className="flex w-full items-center justify-between gap-2 sm:gap-6">
        <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <div className="glass-panel flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl shadow-sm">
            <span className="relative inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] shadow-[0_0_0_1px_rgba(255,255,255,0.9)]">
              <Flame className="h-3.5 w-3.5 text-white" aria-hidden="true" />
              <Sparkles className="absolute -bottom-1 -right-1 h-3 w-3 text-yellow-200" aria-hidden="true" />
            </span>
          </div>
          <div className="min-w-0 flex flex-col">
            <span className="truncate text-base font-semibold tracking-tight text-slate-900">
              {t('brand.name')}
            </span>
            <span className="hidden text-sm font-medium text-slate-600 sm:inline">
              {t('brand.tagline')}
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 rounded-full bg-white/70 px-2 py-1 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md sm:flex">
          <NavLink to="/" className={navLinkClass}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/rituals" className={navLinkClass}>
            {t('nav.rituals')}
          </NavLink>
          <NavLink to="/priests" className={navLinkClass}>
            {t('nav.priests')}
          </NavLink>
          <NavLink to="/booking" className={navLinkClass}>
            {t('nav.booking')}
          </NavLink>
          <NavLink to="/dashboard" className={navLinkClass}>
            {t('nav.dashboard')}
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            {t('nav.about')}
          </NavLink>
        </div>

        {/* Mobile: hamburger + language */}
        <div className="flex shrink-0 items-center gap-2 sm:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70 text-slate-700 shadow-sm backdrop-blur-md hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay + drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm sm:hidden"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
              className="fixed right-0 top-0 z-50 flex h-full w-full max-w-[280px] flex-col bg-white shadow-2xl sm:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <span className="text-sm font-semibold text-slate-900">{t('brand.name')}</span>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
                <NavLink to="/" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.home')}
                </NavLink>
                <NavLink to="/rituals" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.rituals')}
                </NavLink>
                <NavLink to="/priests" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.priests')}
                </NavLink>
                <NavLink to="/booking" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.booking')}
                </NavLink>
                <NavLink to="/dashboard" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.dashboard')}
                </NavLink>
                <NavLink to="/about" className={navLinkClassMobile} onClick={closeMobileMenu}>
                  {t('nav.about')}
                </NavLink>
              </div>
              <div className="border-t border-slate-100 p-3">
                <p className="mb-2 text-xs font-medium text-slate-500">{t('language.label')}</p>
                <LanguageSwitcher />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

