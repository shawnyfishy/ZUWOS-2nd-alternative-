import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ShowcaseItem {
    name: string
    description?: string // Make optional to support legacy items initially
}

interface ShowcaseSidebarProps {
    items: ShowcaseItem[]
    currentIndex: number
    onSelect: (index: number) => void
    color?: string // For custom colors if needed in future, but standardized to primary now
    className?: string
}

export function ShowcaseSidebar({ items, currentIndex, onSelect, className }: ShowcaseSidebarProps) {
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    // Auto-scroll to active item
    useEffect(() => {
        if (itemRefs.current[currentIndex]) {
            itemRefs.current[currentIndex]?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            })
        }
    }, [currentIndex])

    return (
        <div className={`hidden lg:flex flex-col items-start justify-start w-full pr-8 pt-2 max-h-[60vh] overflow-y-auto minimal-scrollbar mask-gradient ${className}`}>
            <div className="space-y-3 w-full">
                {items.map((item, idx) => {
                    const isActive = idx === currentIndex
                    return (
                        <div
                            key={idx}
                            ref={(el) => { itemRefs.current[idx] = el }}
                            onClick={() => onSelect(idx)}
                            className="group cursor-pointer w-full"
                        >
                            <div className="flex items-center gap-3 relative">
                                {/* Arrow Indicator */}
                                <div className="w-6 flex justify-center shrink-0">
                                    {isActive ? (
                                        <motion.div
                                            layoutId="activeArrow"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="text-primary"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    ) : (
                                        <div className="w-4 h-4" /> // Spacer
                                    )}
                                </div>

                                {/* Label */}
                                <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isActive
                                    ? 'text-primary'
                                    : 'text-graphite/30 group-hover:text-graphite/60'
                                    }`}>
                                    {item.name}
                                </span>
                            </div>

                            {/* Expanded Description */}
                            <AnimatePresence mode="wait">
                                {isActive && item.description && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden pl-9"
                                    >
                                        <p className="text-base font-medium text-graphite/85 pt-2 pb-1 leading-relaxed max-w-[280px]">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
