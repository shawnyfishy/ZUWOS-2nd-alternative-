import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'Community', image: '/assets/admin-slides/community.png' },
    { name: 'Department', image: '/assets/admin-slides/department.png' },
    { name: 'F & B', image: '/assets/admin-slides/fnb.png' },
    { name: 'Finance', image: '/assets/admin-slides/finance.png' },
    { name: 'Project & Task', image: '/assets/admin-slides/project.png' },
    { name: 'Security', image: '/assets/admin-slides/security.png' },
    { name: 'Space', image: '/assets/admin-slides/space.png' },
    { name: 'Ticket', image: '/assets/admin-slides/tickets.png' },
];

export default function AdminOSShowcase() {
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
        img.src = modules[nextIndex].image;
    }, [currentIndex]);

    return (
        <section className="w-full h-screen max-h-[1080px] py-0 bg-coconut overflow-hidden flex flex-col justify-center relative">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-4 md:py-6">

                {/* Header Text */}
                <div className="text-center shrink-0 mb-8 md:mb-12">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                        Admin OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        Total System Command
                    </span>
                </div>

                {/* MacBook Showcase */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="w-full max-w-4xl flex justify-center relative">
                        <div className="w-full transform transition-all duration-500">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`admin-${currentIndex}`}
                                            src={currentModule.image}
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
                <div className="mt-8 md:mt-16 shrink-0 relative z-20 pb-4 md:pb-8 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none text-center">
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
                                    className="text-4xl md:text-6xl text-primary font-black whitespace-nowrap"
                                >
                                    {currentModule.name}
                                </motion.span>
                            </AnimatePresence>
                        </span>

                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">management.</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
