import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'Department', mac: '/assets/hr-ops/department-mac.png' },
    { name: 'Lock Function', mac: '/assets/hr-ops/lock-mac.png' },
    { name: 'Role', mac: '/assets/hr-ops/role-mac.png' },
];

export default function HROpsShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 4 Second Cycle
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
        img.src = modules[nextIndex].mac;
    }, [currentIndex]);

    return (
        <section className="w-full h-screen max-h-[1080px] py-0 bg-coconut overflow-hidden flex flex-col justify-center relative">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-4 md:py-6">

                {/* Header Text - Pushed to Top Edge */}
                <div className="text-center shrink-0 mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-accent-yellow tracking-tighter uppercase mb-2">
                        HR Operations OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        From Admin to Impact.
                    </span>
                </div>

                {/* Device Showcase Grid - MacBook Only */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="w-full max-w-4xl flex justify-center relative">
                        {/* MacBook Frame - Centered and Larger since it's solo */}
                        <div className="w-full transform transition-all duration-500 hover:scale-105">
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
                                            transition={{ duration: 1.2, ease: "easeInOut" }} // Cinematic smooth transition
                                        />
                                    </AnimatePresence>
                                </div>
                            </MacBookFrame>
                        </div>
                    </div>
                </div>

                {/* Dynamic Morphing Text Footer */}
                <div className="mt-20 md:mt-32 shrink-0 relative z-20 pb-4 md:pb-8 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none">
                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">Seamless</span>

                        {/* Morphing Word Container */}
                        <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentModule.name}
                                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="text-4xl md:text-6xl text-accent-yellow font-black whitespace-nowrap"
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
