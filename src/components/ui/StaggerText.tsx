import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerTextProps {
    children: string
    className?: string
    delay?: number
}

// Word-by-word reveal animation component
export default function StaggerText({ children, className = '', delay = 0 }: StaggerTextProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-10%" })

    // Split text into words
    const words = children.split(" ")

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.04 * i + delay },
        }),
    }

    const child = {
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    }

    return (
        <motion.span
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className={`inline-block whitespace-pre-wrap ${className}`}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block overflow-hidden align-top mr-[0.25em]">
                    <motion.span variants={child} className="inline-block">
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.span>
    )
}
