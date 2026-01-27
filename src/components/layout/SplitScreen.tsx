import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SplitScreenProps {
    left: ReactNode
    right: ReactNode
    bg?: string
    textColor?: string
}

export default function SplitScreen({ left, right, bg = 'bg-coconut', textColor = 'text-graphite' }: SplitScreenProps) {
    return (
        <div className={`min-h-screen ${bg} ${textColor} relative`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Sticky Left Panel */}
                <div className="lg:h-screen lg:sticky lg:top-0 p-6 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-graphite/10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {left}
                    </motion.div>
                </div>

                {/* Scrollable Right Panel */}
                <div className="p-6 md:p-16 flex flex-col justify-center">
                    {right}
                </div>
            </div>
        </div>
    )
}
