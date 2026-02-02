import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface CinematicRevealProps {
    children: ReactNode
    direction?: 'up' | 'down' | 'left' | 'right'
    delay?: number
    duration?: number
    distance?: number
    className?: string
    viewportMargin?: string
}

export default function CinematicReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.7,
    distance = 40,
    className = "",
    viewportMargin = "-10%"
}: CinematicRevealProps) {
    // Robust-V2 Architecture for safety
    // Uses simple transform transitions that don't interfere with layout projection

    // Calculate initial offset based on direction
    const xOffset = direction === 'left' ? distance : direction === 'right' ? -distance : 0
    const yOffset = direction === 'up' ? distance : direction === 'down' ? -distance : 0

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: xOffset,
                y: yOffset,
                filter: 'blur(8px)'
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                filter: 'blur(0px)'
            }}
            viewport={{ once: true, margin: viewportMargin as any }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.22, 1, 0.36, 1] // Professional cubic-bezier
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
