import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MagneticProps {
    children: ReactNode
    strength?: number // Prop kept for compatibility but unused
    className?: string
}

export default function Magnetic({ children, className = "" }: MagneticProps) {
    return (
        <motion.div
            className={className}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
            {children}
        </motion.div>
    )
}
