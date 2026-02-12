import { useForm, FormProvider, Controller, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useAppToast } from '../ui/Toaster'
import { BookingSuccessOverlay } from './BookingSuccessOverlay'
import { DateTimePicker } from './DateTimePicker'
import { rituals } from '../../shared/data/rituals'

const stepKeys = ['booking.steps.ritual', 'booking.steps.datetime', 'booking.steps.details', 'booking.steps.review'] as const

type BookingFormValues = {
  ritualId: string
  date: Date
  time: string
  locationType: 'home' | 'temple'
  addressLine1: string
  city: string
  specialNotes?: string
}

type BookingWizardProps = {
  initialRitualId?: string
}

export const BookingWizard = ({ initialRitualId }: BookingWizardProps) => {
  const { t, i18n } = useTranslation()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false)
  const { showToast } = useAppToast()

  const bookingSchema = useMemo(
    () =>
      z.object({
        ritualId: z.string().min(1, t('booking.validationSelectRitual')),
        date: z.date(),
        time: z.string().min(1, t('booking.validationSelectTime')),
        locationType: z.enum(['home', 'temple']),
        addressLine1: z.string().min(5, t('booking.validationAddress')),
        city: z.string().min(2, t('booking.validationCity')),
        specialNotes: z.string().max(500).optional()
      }),
    [t]
  )

  const steps = useMemo(() => stepKeys.map((key) => t(key)), [t])

  const methods = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      ritualId: initialRitualId || '',
      time: '',
      locationType: 'home',
      addressLine1: '',
      city: '',
      specialNotes: ''
    }
  })

  const stepFields: (keyof BookingFormValues)[][] = [
    ['ritualId'],
    ['date', 'time'],
    ['locationType', 'addressLine1', 'city'],
    []
  ]

  const next = async () => {
    const fields = stepFields[step]
    const valid = await methods.trigger(fields)
    if (!valid) return
    if (step < steps.length - 1) setStep((s) => s + 1)
  }

  const prev = () => {
    if (step > 0) setStep((s) => s - 1)
  }

  const onSubmit = (values: BookingFormValues) => {
    console.log('Booking confirmed', values)

    const ritual = rituals.find((r) => r.id === values.ritualId)
    const ritualName = ritual ? ritual.name[i18n.language as keyof typeof ritual.name] ?? ritual.name.en : '(not set)'
    const messageLines = [
      'New MyFortune ritual booking:',
      '',
      `Ritual: ${ritualName}`,
      `Date: ${values.date ? values.date.toDateString() : 'not set'}`,
      `Time: ${values.time || 'not set'}`,
      `Location: ${values.locationType === 'temple' ? t('booking.atTemple') : t('booking.atHome')}`,
      `Address: ${values.addressLine1}, ${values.city}`,
      values.specialNotes ? `Special notes: ${values.specialNotes}` : ''
    ]
      .filter(Boolean)
      .join('\n')

    // WhatsApp
    const whatsappNumber = '917022168488'
    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageLines)}`
    window.open(waUrl, '_blank', 'noreferrer')

    // Email
    const mailto = `mailto:dmkerimath46@gmail.com?subject=${encodeURIComponent(
      'New MyFortune ritual booking'
    )}&body=${encodeURIComponent(messageLines)}`
    window.open(mailto, '_blank', 'noreferrer')

    setSubmitted(true)
    setShowSuccessOverlay(true)
    showToast(t('booking.toastTitle'), t('booking.toastMessage'))
  }

  return (
    <FormProvider {...methods}>
      <AnimatePresence>
        {showSuccessOverlay && (
          <BookingSuccessOverlay
            key="booking-success"
            onClose={() => setShowSuccessOverlay(false)}
          />
        )}
      </AnimatePresence>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="glass-panel space-y-6 p-4 sm:p-6"
      >
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-emerald-50 px-3 py-2 text-xs text-emerald-700"
          >
            {t('booking.bookingConfirmed')}
          </motion.div>
        )}
        <ProgressSteps current={step} steps={steps} />
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {step === 0 && <RitualStep />}
          {step === 1 && <DateTimeStep />}
          {step === 2 && <DetailsStep />}
          {step === 3 && <ReviewStep />}
        </motion.div>
        <div className="flex items-center justify-between gap-2 pt-2">
          <button
            type="button"
            onClick={prev}
            disabled={step === 0}
            className="min-h-[44px] min-w-[44px] rounded-full border border-slate-200 px-4 py-2 text-xs font-medium text-slate-600 disabled:opacity-40 sm:py-1.5"
          >
            {t('booking.back')}
          </button>
          {step < steps.length - 1 ? (
            <button
              type="button"
              onClick={next}
              className="min-h-[44px] rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white sm:py-1.5"
            >
              {t('booking.next')}
            </button>
          ) : (
            <button
              type="submit"
              className="min-h-[44px] flex-1 rounded-full bg-gradient-to-tr from-[#FF6B35] via-[#F7931E] to-[#D4AF37] px-5 py-2 text-xs font-semibold text-white shadow sm:flex-none sm:py-1.5"
            >
              {t('booking.confirmBooking')}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  )
}

const ProgressSteps = ({ current, steps }: { current: number; steps: string[] }) => (
  <div className="-mx-1 overflow-x-auto px-1 pb-1 md:overflow-visible">
    <ol className="flex min-w-max items-center gap-2 py-1 text-xs text-slate-500 sm:gap-3">
      {steps.map((label, index) => {
        const isActive = index === current
        const isCompleted = index < current
        return (
          <li key={`${index}-${label}`} className="flex shrink-0 items-center gap-1.5">
          <span
            className={`flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${
              isCompleted
                ? 'bg-emerald-500 text-white'
                : isActive
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-500'
            }`}
          >
            {index + 1}
          </span>
          <span className={isActive ? 'font-semibold text-slate-900' : ''}>
            {label}
          </span>
          {index < steps.length - 1 && (
            <span className="mx-0.5 h-px w-4 shrink-0 rounded bg-slate-200 sm:mx-1 sm:w-5" />
          )}
        </li>
        )
      })}
    </ol>
  </div>
)

const RitualStep = () => {
  const { register, formState } = useFormContext<BookingFormValues>()
  const { i18n, t } = useTranslation()
  const error = formState.errors.ritualId?.message

  return (
    <div className="space-y-3 text-sm">
      <div>
        <label className="text-xs font-semibold text-slate-700">
          {t('booking.selectRitual')}
        </label>
        <select
          {...register('ritualId')}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        >
          <option value="">{t('booking.chooseRitual')}</option>
          {rituals.map((r) => (
            <option key={r.id} value={r.id}>
              {r.name[i18n.language as keyof typeof r.name] ?? r.name.en}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  )
}

const DateTimeStep = () => {
  const { control, register, formState } = useFormContext<BookingFormValues>()
  const { t } = useTranslation()
  const dateError = formState.errors.date?.message
  const timeError = formState.errors.time?.message

  return (
    <div className="space-y-4 text-sm">
      <div>
        <label className="text-xs font-semibold text-slate-700">
          {t('booking.preferredDate')}
        </label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <DateTimePicker
              selectedDate={field.value}
              onSelectDate={(date) => field.onChange(date)}
            />
          )}
        />
        {dateError && <p className="mt-1 text-xs text-red-500">{dateError as string}</p>}
      </div>
      <div>
        <label className="text-xs font-semibold text-slate-700">
          {t('booking.preferredTime')}
        </label>
        <select
          {...register('time')}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        >
          <option value="">{t('booking.chooseTime')}</option>
          <option value="06:00-08:00">6:00 – 8:00 AM</option>
          <option value="08:00-10:00">8:00 – 10:00 AM</option>
          <option value="16:00-18:00">4:00 – 6:00 PM</option>
        </select>
        {timeError && <p className="mt-1 text-xs text-red-500">{timeError as string}</p>}
      </div>
    </div>
  )
}

const DetailsStep = () => {
  const { register, watch, formState } = useFormContext<BookingFormValues>()
  const { t } = useTranslation()
  const locationError = formState.errors.locationType?.message
  const addressError = formState.errors.addressLine1?.message
  const cityError = formState.errors.city?.message
  const location = watch('locationType') || 'home'

  return (
    <div className="space-y-4 text-sm">
      <div>
        <p className="text-xs font-semibold text-slate-700">
          {t('booking.wherePerform')}
        </p>
        <div className="mt-2 flex gap-3">
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs">
            <input
              type="radio"
              value="home"
              {...register('locationType')}
              className="h-3 w-3"
            />
            {t('booking.atHome')}
          </label>
          <label className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs">
            <input
              type="radio"
              value="temple"
              {...register('locationType')}
              className="h-3 w-3"
            />
            {t('booking.atTemple')}
          </label>
        </div>
        {locationError && <p className="mt-1 text-xs text-red-500">{locationError as string}</p>}
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">
          {t('booking.addressDetails')} ({location === 'home' ? t('booking.atHome') : t('booking.atTemple')})
        </label>
        <input
          type="text"
          {...register('addressLine1')}
          placeholder={t('booking.addressPlaceholder')}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        />
        {addressError && <p className="mt-1 text-xs text-red-500">{addressError as string}</p>}
        <input
          type="text"
          {...register('city')}
          placeholder={t('booking.city')}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        />
        {cityError && <p className="mt-1 text-xs text-red-500">{cityError as string}</p>}
      </div>

      <div>
        <label className="text-xs font-semibold text-slate-700">
          {t('booking.specialReqs')}
        </label>
        <textarea
          {...register('specialNotes')}
          rows={3}
          placeholder={t('booking.specialReqsPlaceholder')}
          className="mt-1 w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-saffron-500"
        />
      </div>
    </div>
  )
}

const ReviewStep = () => {
  const { watch } = useFormContext<BookingFormValues>()
  const { t, i18n } = useTranslation()
  const values = watch()

  const ritual = rituals.find((r) => r.id === values.ritualId)
  const ritualName = ritual ? ritual.name[i18n.language as keyof typeof ritual.name] ?? ritual.name.en : t('booking.notSelected')

  return (
    <div className="space-y-3 text-sm text-slate-600">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {t('booking.reviewTitle')}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2">
          <p className="text-[11px] font-semibold text-slate-500">{t('booking.ritualLabel')}</p>
          <p className="text-sm text-slate-900">
            {ritualName}
          </p>
        </div>
        <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2">
          <p className="text-[11px] font-semibold text-slate-500">{t('booking.datetimeLabel')}</p>
          <p className="text-sm text-slate-900">
            {values.date ? values.date.toDateString() : t('booking.notSelected')} •{' '}
            {values.time || t('booking.timeNotSelected')}
          </p>
        </div>
        <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2">
          <p className="text-[11px] font-semibold text-slate-500">{t('booking.locationLabel')}</p>
          <p className="text-sm text-slate-900">
            {values.locationType === 'temple' ? t('booking.atTemple') : t('booking.atHome')} –{' '}
            {values.addressLine1 || t('booking.addressNotProvided')}, {values.city || ''}
          </p>
        </div>
        {values.specialNotes && (
          <div className="space-y-1 rounded-xl bg-slate-50 px-3 py-2 sm:col-span-2">
            <p className="text-[11px] font-semibold text-slate-500">
              {t('booking.specialReqs')}
            </p>
            <p className="text-sm text-slate-900">{values.specialNotes}</p>
          </div>
        )}
      </div>
    </div>
  )
}

