import { motion, useScroll, useVelocity, useSpring, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface VelocitySkewProps {
    children: ReactNode
    className?: string
}

export default function VelocitySkew({ children, className = "" }: VelocitySkewProps) {
    const { scrollY } = useScroll()
    const scrollVelocity = useVelocity(scrollY)
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })

    // Convert velocity to a skew angle.
    // Max skew is limited to avoid text becoming unreadable
    const skewY = useTransform(smoothVelocity, [-1000, 0, 1000], [-3, 0, 3])

    return (
        <motion.div style={{ skewY }} className={className}>
            {children}
        </motion.div>
    )
}
