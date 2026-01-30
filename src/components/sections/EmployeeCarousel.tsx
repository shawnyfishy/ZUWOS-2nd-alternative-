import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const modules = [
    { name: 'Calendar', image: '/employee-images/calendar.png' },
    { name: 'Channels', image: '/employee-images/channels.png' },
    { name: 'CRM', image: '/employee-images/crm.png' },
    { name: 'Digital Business Card', image: '/employee-images/digital-business-card.png' },
    { name: 'Documents', image: '/employee-images/documents.png' },
    { name: 'Inventory', image: '/employee-images/inventory.png' },
    { name: 'Parking', image: '/employee-images/parking.png' },
    { name: 'Projects', image: '/employee-images/projects.png' },
    { name: 'Redemption', image: '/employee-images/redemption.png' },
    { name: 'Rewards', image: '/employee-images/rewards.png' },
    { name: 'Tasks', image: '/employee-images/tasks.png' },
    { name: 'To Do', image: '/employee-images/todo.png' },
    { name: 'Vendor Portal', image: '/employee-images/vendor-portal.png' },
    { name: 'Wallet', image: '/employee-images/wallet.png' },
]

export default function EmployeeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % modules.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col items-center justify-center w-full py-6 md:py-8">
            {/* Header Section */}
            <div className="text-center mb-8 space-y-2">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-display-sm md:text-display-md font-display font-bold tracking-tighter text-graphite"
                >
                    Employees OS
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-2xl md:text-3xl font-medium text-graphite/80"
                >
                    One App for Everything.
                </motion.p>
            </div>

            {/* Carousel Section */}
            <div className="relative w-full max-w-2xl aspect-[16/10] flex items-center justify-center mb-8">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={modules[currentIndex].image}
                        alt={modules[currentIndex].name}
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full object-contain rounded-2xl shadow-xl bg-white/50 backdrop-blur-sm ring-1 ring-black/5"
                        style={{ objectFit: 'contain' }}
                    />
                </AnimatePresence>
            </div>

            {/* Dynamic Footnote */}
            <div className="flex flex-col items-center gap-1 text-2xl md:text-3xl font-medium tracking-tight">
                <span className="text-graphite/60">Integrated</span>
                <div className="relative h-10 flex items-center justify-center overflow-visible">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={currentIndex}
                            initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                            exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
                            transition={{ duration: 0.5, ease: "circOut" }}
                            className="text-primary font-bold whitespace-nowrap absolute"
                        >
                            {modules[currentIndex].name}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
