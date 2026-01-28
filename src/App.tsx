import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import ScrollToTop from './components/utils/ScrollToTop'
import ProductStory from './pages/ProductStory'
import RequestAccess from './pages/RequestAccess'
import SmoothScroll from './components/utils/SmoothScroll'
import VisionPage from './pages/VisionPage'

import PlatformPage from './pages/PlatformPage'
import LegalPage from './pages/LegalPage'
import CareersPage from './pages/CareersPage'
import AdminDashboard from './pages/AdminDashboard'
import AdminLogin from './pages/AdminLogin'
import ValueDetailPage from './pages/ValueDetailPage'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/docs/:id" element={<Documentation />} />
        <Route path="/story" element={<ProductStory />} />
        <Route path="/request-access" element={<RequestAccess />} />
        <Route path="/vision" element={<VisionPage />} />

        {/* New Routes */}
        <Route path="/values/:id" element={<ValueDetailPage />} />
        <Route path="/platform/:role" element={<PlatformPage />} />
        <Route path="/legal/:doc" element={<LegalPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="bg-coconut min-h-screen text-graphite font-sans selection:bg-primary selection:text-white">
          <AnimatedRoutes />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
