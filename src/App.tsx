import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="font-sans text-graphite bg-coconut selection:bg-primary selection:text-white">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs/:id" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
