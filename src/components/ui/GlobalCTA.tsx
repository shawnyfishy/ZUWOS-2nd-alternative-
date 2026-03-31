import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function GlobalCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Optional: Only show after a short delay or scroll, 
    // but for now, we'll just fade it in smoothly on mount.
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
        >
          <Link to="/request-access" aria-label="Request Access">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex h-14 w-14 md:h-12 md:w-auto items-center justify-center overflow-hidden rounded-full bg-primary p-0 md:px-6 text-white shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="hidden md:inline-block mr-2 text-sm font-medium tracking-wide">Get Started</span>
              <ArrowRight className="h-6 w-6 md:h-4 md:w-4 transition-transform group-hover:-rotate-45 md:group-hover:rotate-0 md:group-hover:translate-x-1" />
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
