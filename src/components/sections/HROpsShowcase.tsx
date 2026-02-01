import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

const modules = [
    { name: 'Department', description: 'Structure your organization by business units.', mac: '/assets/hr-ops/department-mac.png' },
    { name: 'Lock Function', description: 'Secure sensitive data with role-based restrictions.', mac: '/assets/hr-ops/lock-mac.png' },
    { name: 'Role', description: 'Define clear hierarchies and permissions.', mac: '/assets/hr-ops/role-mac.png' },
];

export default function HROpsShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // 4 Second Cycle (Pauses on Interaction)
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % modules.length);
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const currentModule = modules[currentIndex];

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img = new Image();
        img.src = modules[nextIndex].mac;
    }, [currentIndex]);

    return (
        <section className="w-full min-h-screen py-20 bg-coconut flex flex-col justify-between items-center relative">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-8 md:mb-0">
                <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    HR Operations OS
                </h2>
                <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                    From Admin to Impact.
                </span>
            </div>

            {/* 2. Main Content (Fluid Grid Overlay) */}
            <div className="flex-grow w-full max-w-[1600px] mx-auto grid grid-cols-1 items-center relative z-10 px-6 md:px-12">
                {/* Layer 1: Sidebar (Left Aligned) */}
                <div className="col-start-1 row-start-1 justify-self-start hidden lg:block w-[300px]">
                    <ShowcaseSidebar
                        items={modules}
                        currentIndex={currentIndex}
                        onSelect={(index) => {
                            setCurrentIndex(index);
                            setIsPaused(true);
                        }}
                    />
                </div>

                {/* Layer 2: Main Content (Centered) */}
                <div className="col-start-1 row-start-1 justify-self-center w-full max-w-5xl flex justify-center relative px-8 pointer-events-none">
                    <div className="w-full max-w-4xl transform scale-90 lg:scale-100 transition-all duration-500 hover:scale-105 pointer-events-auto">
                        <MacBookFrame>
                            <div className="relative w-full h-full bg-white">
                                <AnimatePresence mode="popLayout">
                                    <motion.img
                                        key={`mac-${currentIndex}`}
                                        src={currentModule.mac}
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

            {/* 3. Footer (Bottom) */}
            <div className="shrink-0 w-full flex justify-center pt-8 pb-4 md:pb-8 z-20 px-6 relative z-20">
                <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] tracking-tight leading-none text-center">
                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">Seamless</span>

                    {/* Morphing Word Container */}
                    <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentModule.name}
                                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-xl md:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.name}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">Operations.</span>
                </h3>
            </div>
        </section>
    );
}
