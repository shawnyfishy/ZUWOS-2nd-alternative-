import { motion } from 'framer-motion'
import { useState } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface VariableHeadingProps {
    text: string
    className?: string
    fromWeight?: number
    toWeight?: number
    highlightMap?: { [key: string]: string } // word -> color class
}

export default function VariableHeading({
    text,
    className,
    fromWeight = 300,
    toWeight = 600,
    highlightMap = {}
}: VariableHeadingProps) {
    return (
        <span className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}>
            {text.split(' ').map((word, i) => (
                <VariableWord
                    key={i}
                    word={word}
                    from={fromWeight}
                    to={toWeight}
                    colorClass={highlightMap[word] || 'text-current'}
                />
            ))}
        </span>
    )
}

function VariableWord({ word, from, to, colorClass }: { word: string, from: number, to: number, colorClass: string }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.span
            className={`cursor-default ${colorClass}`}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={{ fontWeight: from }}
            animate={{ fontWeight: isHovered ? to : from }}
            // We use 'fontVariationSettings' if standard fontWeight isn't granular enough, 
            // but for Google Fonts range import, standard fontWeight works well.
            transition={{ duration: 0.3, ease: "linear" }}
        >
            {word}
        </motion.span>
    )
}
