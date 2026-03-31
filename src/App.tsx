import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollToTop from './components/utils/ScrollToTop'
import SmoothScroll from './components/utils/SmoothScroll'
import GlobalCTA from './components/ui/GlobalCTA'

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'))
const Documentation = lazy(() => import('./pages/Documentation'))
const ProductStory = lazy(() => import('./pages/ProductStory'))
const RequestAccess = lazy(() => import('./pages/RequestAccess'))
const VisionPage = lazy(() => import('./pages/VisionPage'))
const ZuwosEcosystemExplore = lazy(() => import('./components/sections/ZuwosEcosystemExplore'))
const ValueDetailPage = lazy(() => import('./pages/ValueDetailPage'))
const PlatformPage = lazy(() => import('./pages/PlatformPage'))
const LegalPage = lazy(() => import('./pages/LegalPage'))
const CareersPage = lazy(() => import('./pages/CareersPage'))
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'))
const AdminLogin = lazy(() => import('./pages/AdminLogin'))

// Simple Loading Component
const Loading = () => (
  <div className="flex items-center justify-center min-h-screen bg-coconut">
    <div className="w-8 h-8 border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
  </div>
)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/docs/:id" element={<Documentation />} />
          <Route path="/story" element={<ProductStory />} />
          <Route path="/request-access" element={<RequestAccess />} />
          <Route path="/vision" element={<VisionPage />} />
          <Route path="/ecosystem-explore" element={<ZuwosEcosystemExplore />} />

          {/* New Routes */}
          <Route path="/values/:id" element={<ValueDetailPage />} />
          <Route path="/platform/:role" element={<PlatformPage />} />
          <Route path="/legal/:doc" element={<LegalPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Suspense>
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
          <GlobalCTA />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
