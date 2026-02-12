import * as Toast from '@radix-ui/react-toast'
import type { ReactNode } from 'react'
import { createContext, useContext, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

type ToastContextValue = {
  showToast: (message: string, description?: string) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export const useAppToast = () => {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useAppToast must be used within <Toaster />')
  return ctx
}

type ToastData = {
  title: string
  description?: string
}

export const Toaster = ({ children }: { children?: ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [toast, setToast] = useState<ToastData | null>(null)

  const showToast = (title: string, description?: string) => {
    setToast({ title, description })
    setOpen(false)
    requestAnimationFrame(() => setOpen(true))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast.Provider swipeDirection="right">
        <Toast.Root
          className="glass-panel fixed bottom-4 left-4 right-4 z-50 flex max-w-sm items-start gap-3 border border-emerald-100 bg-white/80 px-4 py-3 shadow-xl sm:left-auto"
          open={open}
          onOpenChange={setOpen}
        >
          <div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
          </div>
          <div className="flex flex-1 flex-col gap-0.5">
            <Toast.Title className="text-sm font-semibold text-slate-900">
              {toast?.title}
            </Toast.Title>
            {toast?.description && (
              <Toast.Description className="text-xs text-slate-500">
                {toast.description}
              </Toast.Description>
            )}
          </div>
        </Toast.Root>
        <Toast.Viewport className="fixed bottom-0 right-0 z-40 flex w-full max-w-md flex-col gap-2 p-4 outline-none" />
      </Toast.Provider>
    </ToastContext.Provider>
  )
}

