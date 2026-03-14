import { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useSpring, useMotionValue } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../ui/Button'

export default function Navbar({ theme = 'light' }: { theme?: 'light' | 'dark' }) {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { scrollY } = useScroll()
    const location = useLocation()
    const isHome = location.pathname === '/'

    // Logo Interactive Physics
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)
    const springConfig = { damping: 20, stiffness: 300 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    const handleLogoMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = (e.clientX - rect.left - rect.width / 2) * 0.4
        const y = (e.clientY - rect.top - rect.height / 2) * 0.4
        mouseX.set(x)
        mouseY.set(y)
    }

    const handleLogoMouseLeave = () => {
        mouseX.set(0)
        mouseY.set(0)
    }

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    const textColor = theme === 'dark' ? 'text-white' : 'text-graphite'
    const bgColor = theme === 'dark' ? 'bg-black/90' : 'bg-coconut/90'

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 pt-[var(--sat)] ${isScrolled ? `${bgColor} backdrop-blur-md` : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-[1920px] mx-auto px-4 md:px-12 h-16 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <motion.div
                        onMouseMove={handleLogoMouseMove}
                        onMouseLeave={handleLogoMouseLeave}
                        style={{ x: springX, y: springY }}
                        className="relative z-10"
                    >
                        <Link
                            to="/"
                            className={`font-display font-bold text-4xl md:text-[2.6rem] tracking-tighter ${textColor} block`}
                            data-cursor="Home"
                        >
                            ZUWOS
                        </Link>
                    </motion.div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-12">
                    <Link to="/vision" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="Vision">Vision</Link>

                    {isHome ? (
                        <>
                            <a href="#solutions" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="Solution">Solutions</a>
                            <a href="#features" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="Features">Features</a>
                            <a href="#manifesto" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="MANIFESTO">Manifesto</a>
                        </>
                    ) : (
                        <>
                            <Link to="/#solutions" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="Solution">Solutions</Link>
                            <Link to="/#features" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="Features">Features</Link>
                            <Link to="/#manifesto" className={`${textColor} font-medium text-lg hover:opacity-50 transition-opacity`} data-cursor="MANIFESTO">Manifesto</Link>
                        </>
                    )}

                    <Link to="/request-access">
                        <Button variant="primary" size="md" className="rounded-full font-bold shadow-lg shadow-primary/20" data-cursor="Action">Get Started</Button>
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`md:hidden ${textColor}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-8 h-[100dvh]"
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                >
                    <button 
                        onClick={() => setIsMobileMenuOpen(false)} 
                        className="absolute top-5 right-4 p-2 text-graphite z-50 bg-white/50 rounded-full"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    {isHome ? (
                        <a href="#vision" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold tracking-tight">Vision</a>
                    ) : (
                        <Link to="/vision" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold tracking-tight">Vision</Link>
                    )}
                    <a href="#solutions" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold tracking-tight">Solutions</a>
                    <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold tracking-tight">Features</a>
                    <a href="#manifesto" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-display font-bold tracking-tight">Manifesto</a>
                    <Link to="/request-access" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-auto mb-12">
                        <Button variant="primary" size="lg" className="w-full py-8 text-xl shadow-2xl">Get Started</Button>
                    </Link>
                </motion.div>
            )}
        </motion.header>
    )
}
