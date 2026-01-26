import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface TextRevealerProps {
    text: string
    className?: string
    delay?: number
    duration?: number
    stagger?: number
    once?: boolean
}

export default function TextRevealer({
    text,
    className = "",
    delay = 0,
    duration = 0.5,
    stagger = 0.02,
    once = true
}: TextRevealerProps) {
    if (!text || typeof text !== 'string') return null

    // Split text into words, keeping spaces
    const words = text.split(" ")

    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay
            }
        }
    }

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                duration: duration,
                ease: [0.2, 0.65, 0.3, 0.9],
                type: "tween"
            }
        }
    }

    return (
        <motion.div
            style={{
                display: "flex",
                flexWrap: "wrap",
            }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-10%" }}
            className={className}
        >
            {words.map((word, index) => (
                <span key={index} className="inline-block whitespace-pre mr-[0.25em] relative">
                    <motion.span
                        variants={child}
                        className="inline-block"
                        style={{ display: "inline-block" }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    )
}
