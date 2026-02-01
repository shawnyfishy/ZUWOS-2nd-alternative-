import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface StickySectionProps {
    children: React.ReactNode
    className?: string
    zIndex?: number
    isTall?: boolean
}

export function StickySection({
    children,
    className,
    zIndex = 0,
    isTall = false
}: StickySectionProps) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        // For tall content, we want to animate as we finish scrolling it
        offset: isTall ? ["end end", "end start"] : ["start start", "end start"]
    })

    // Animation values
    const opacity = useTransform(scrollYProgress, isTall ? [0, 1] : [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, isTall ? [0, 1] : [0, 0.5], [1, 0.9])
    const blur = useTransform(scrollYProgress, isTall ? [0, 1] : [0, 0.5], ["0px", "10px"])

    return (
        <div
            ref={ref}
            className={cn("relative bg-coconut", className)}
            style={{ zIndex }}
        >
            <div className={cn(
                "w-full",
                // If tall, stick to bottom so we can scroll the whole content. 
                // If short, stick to top to hold it in place.
                isTall ? "sticky bottom-0 min-h-screen" : "sticky top-0 h-screen overflow-hidden"
            )}>
                <motion.div
                    style={{ opacity, scale, filter: `blur(${blur})` }}
                    className="w-full h-full flex flex-col justify-center"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    )
}
