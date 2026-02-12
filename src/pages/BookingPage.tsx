import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { BookingWizard } from '../components/booking/BookingWizard'

const WHATSAPP_NUMBER = '917022168488'

export const BookingPage = () => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const ritualId = searchParams.get('ritualId') ?? undefined
  const service = searchParams.get('service')

  const isKundli = service === 'kundli'

  useEffect(() => {
    if (!isKundli) return
    const text = encodeURIComponent(
      'Hi, I would like to get Kundli matching service. Please share details and pricing.'
    )
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    window.open(waUrl, '_blank', 'noreferrer')
  }, [isKundli])

  if (isKundli) {
    return (
      <div className="space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {t('booking.kundliTitle')}
          </h1>
          <p className="text-base text-slate-700">
            {t('booking.kundliIntro')}
          </p>
        </header>
        <div className="glass-panel flex flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center">
          <p className="text-sm text-slate-600">
            {t('booking.kundliNote')}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              'Hi, I would like to get Kundli matching service. Please share details and pricing.'
            )}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-[#20BD5A]"
          >
            <span className="text-2xl" aria-hidden="true">
              💬
            </span>
            {t('booking.contactWhatsApp')}
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          {t('booking.title')}
        </h1>
        <p className="text-sm text-slate-500">
          {t('booking.subtitle')}
        </p>
      </header>
      <BookingWizard initialRitualId={ritualId} />
    </div>
  )
}

