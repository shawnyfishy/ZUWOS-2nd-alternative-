import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-coconut/90 backdrop-blur-md' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[1920px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <span className="font-display font-bold text-3xl tracking-tighter text-graphite">
                        ZUWOS
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    <a href="#solutions" className="text-graphite font-medium text-lg hover:opacity-50 transition-opacity">Solutions</a>
                    <a href="#features" className="text-graphite font-medium text-lg hover:opacity-50 transition-opacity">Features</a>
                    <a href="#manifesto" className="text-graphite font-medium text-lg hover:opacity-50 transition-opacity">Manifesto</a>
                    <Button variant="primary" size="md" className="rounded-none">Get Started</Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-graphite"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden absolute top-24 left-0 right-0 bg-coconut border-b border-graphite/10 p-6 flex flex-col gap-6 h-screen"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a href="#solutions" className="text-3xl font-display font-bold text-graphite">Solutions</a>
                    <a href="#features" className="text-3xl font-display font-bold text-graphite">Features</a>
                    <a href="#manifesto" className="text-3xl font-display font-bold text-graphite">Manifesto</a>
                    <Button variant="primary" className="w-full mt-4 py-6 text-xl">Get Started</Button>
                </motion.div>
            )}
        </motion.header>
    )
}
