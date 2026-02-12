import { Route, Routes } from 'react-router-dom'
import App from './App'
import { HomePage } from './pages/HomePage'
import { RitualsPage } from './pages/RitualsPage'
import { RitualDetailPage } from './pages/RitualDetailPage'
import { PriestsPage } from './pages/PriestsPage'
import { BookingPage } from './pages/BookingPage'
import { DashboardPage } from './pages/DashboardPage'
import { AboutPage } from './pages/AboutPage'

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="rituals" element={<RitualsPage />} />
      <Route path="rituals/:id" element={<RitualDetailPage />} />
      <Route path="priests" element={<PriestsPage />} />
      <Route path="booking" element={<BookingPage />} />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route path="about" element={<AboutPage />} />
    </Route>
  </Routes>
)

