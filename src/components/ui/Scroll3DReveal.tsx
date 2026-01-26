import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Scroll3DRevealProps {
    children: ReactNode
    className?: string
    delay?: number
}

export default function Scroll3DReveal({ children, className = "", delay = 0 }: Scroll3DRevealProps) {
    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                rotateX: 20,
                scale: 0.9,
                y: 60
            }}
            whileInView={{
                opacity: 1,
                rotateX: 0,
                scale: 1,
                y: 0
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1], // Ultra-smooth "Apple/Dropbox" ease
                delay: delay
            }}
            style={{
                transformPerspective: 1000,
                transformStyle: "preserve-3d"
            }}
        >
            {children}
        </motion.div>
    )
}
