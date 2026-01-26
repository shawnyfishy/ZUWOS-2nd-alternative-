import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import type { ReactNode } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null)
    const { pathname } = useLocation()

    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.8,
            lerp: 0.08, // Very smooth, luxurious feel
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        })

        lenisRef.current = lenis

        // Sync with RequestAnimationFrame
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Prevent history scroll restoration
        if (typeof window !== 'undefined') {
            window.history.scrollRestoration = 'manual'
        }

        return () => {
            lenis.destroy()
        }
    }, [])

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true })
        }
    }, [pathname])

    return <>{children}</>
}
