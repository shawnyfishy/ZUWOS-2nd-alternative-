import { useEffect, useState, useRef } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [cursorText, setCursorText] = useState('')
    const cursorRef = useRef<HTMLDivElement>(null)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Physics settings for that "weighty" feel
    const springConfig = { damping: 25, stiffness: 200 }
    const springX = useSpring(mouseX, springConfig)
    const springY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const hoverElement = target.closest('[data-cursor]')

            if (hoverElement) {
                setIsHovered(true)
                setCursorText(hoverElement.getAttribute('data-cursor') || '')
            } else {
                setIsHovered(false)
                setCursorText('')
            }
        }

        window.addEventListener('mousemove', moveMouse)
        window.addEventListener('mouseover', handleHover)

        return () => {
            window.removeEventListener('mousemove', moveMouse)
            window.removeEventListener('mouseover', handleHover)
        }
    }, [mouseX, mouseY])

    return (
        <motion.div
            ref={cursorRef}
            className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2"
            style={{
                x: springX,
                y: springY,
                translateX: '-50%',
                translateY: '-50%'
            }}
        >
            <motion.div
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 1)',
                    border: isHovered ? '1px solid rgba(59, 130, 246, 0.5)' : 'none',
                    backdropFilter: isHovered ? 'blur(4px)' : 'none',
                }}
                className="w-full h-full rounded-full relative flex items-center justify-center transition-colors duration-300"
            >
                {isHovered && cursorText && (
                    <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 0.4 }}
                        className="text-white font-bold text-[10px] uppercase tracking-tighter whitespace-nowrap"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </motion.div>

            {/* The core dot */}
            <motion.div
                animate={{
                    scale: isHovered ? 0 : 1,
                    opacity: isHovered ? 0 : 1
                }}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
            />
        </motion.div>
    )
}
