import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './services/i18n'
import { AppRoutes } from './router'
import { Toaster } from './components/ui/Toaster'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <Toaster>
          <AppRoutes />
        </Toaster>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
