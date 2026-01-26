import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import ScrollToTop from './components/utils/ScrollToTop'
import ProductStory from './pages/ProductStory'
import RequestAccess from './pages/RequestAccess'
import SmoothScroll from './components/utils/SmoothScroll'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="bg-coconut min-h-screen text-graphite font-sans selection:bg-primary selection:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs/:id" element={<Documentation />} />
            <Route path="/story" element={<ProductStory />} />
            <Route path="/request-access" element={<RequestAccess />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
