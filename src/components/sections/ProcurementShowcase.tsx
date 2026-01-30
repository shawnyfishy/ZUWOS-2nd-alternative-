import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'Events', img: '/assets/procurement/events.png' },
    { name: 'Material Issue Slip', img: '/assets/procurement/material-issue-slip.png' },
    { name: 'Material Order Approval', img: '/assets/procurement/material-order-approval.png' },
    { name: 'Material Transfer Request', img: '/assets/procurement/material-transfer-request.png' },
    { name: 'MOR', img: '/assets/procurement/mor-management.png' },
    { name: 'Purchase Order', img: '/assets/procurement/purchase-order.png' },
    { name: 'Service Intent', img: '/assets/procurement/service-intent.png' },
];

export default function ProcurementShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % modules.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentModule = modules[currentIndex];

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img = new Image();
        img.src = modules[nextIndex].img;
    }, [currentIndex]);

    return (
        <section className="w-full h-screen max-h-[1080px] py-0 bg-coconut overflow-hidden flex flex-col justify-center relative">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-4 md:py-6">

                {/* Header Text - Pushed to Top Edge */}
                <div className="text-center shrink-0 mb-16 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-graphite tracking-tighter uppercase mb-2">
                        Procurement OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        Sourcing Intelligence
                    </span>
                </div>

                {/* Device Showcase - MacBook Only */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="w-full max-w-3xl flex justify-center relative">
                        <div className="w-full transform scale-90 transition-all duration-500">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`proc-${currentIndex}`}
                                            src={currentModule.img}
                                            alt={currentModule.name}
                                            className="absolute inset-0 w-full h-full object-contain"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </MacBookFrame>
                        </div>
                    </div>
                </div>

                {/* Dynamic Morphing Text Footer */}
                <div className="mt-12 md:mt-24 shrink-0 relative z-20 pb-8 md:pb-12 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none">
                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">Centralized</span>

                        {/* Morphing Word Container */}
                        <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentModule.name}
                                    initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl text-graphite font-black whitespace-nowrap"
                                >
                                    {currentModule.name}
                                </motion.span>
                            </AnimatePresence>
                        </span>

                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">management</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
