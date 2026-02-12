import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

const indianHolidays = [
  new Date(new Date().getFullYear(), 0, 26),
  new Date(new Date().getFullYear(), 7, 15),
  new Date(new Date().getFullYear(), 9, 31)
]

type Props = {
  selectedDate?: Date
  onSelectDate: (date: Date | undefined) => void
}

export const DateTimePicker = ({ selectedDate, onSelectDate }: Props) => {
  return (
    <div className="grid gap-4 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
      <div className="glass-panel p-3">
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={onSelectDate}
          modifiers={{ holiday: indianHolidays }}
          modifiersStyles={{
            holiday: {
              borderRadius: '999px',
              background:
                'linear-gradient(135deg,#FF6B35 0%,#F7931E 50%,#D4AF37 100%)',
              color: 'white'
            }
          }}
        />
      </div>
      <div className="glass-panel flex flex-col justify-between p-3 text-xs text-slate-500">
        <p>Select an auspicious date aligned with your family&apos;s schedule.</p>
      </div>
    </div>
  )
}

