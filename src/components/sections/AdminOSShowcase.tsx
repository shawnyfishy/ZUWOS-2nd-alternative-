import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

const modules = [
    { name: 'Community', description: 'Engage with internal communities and interest groups', image: '/assets/admin-slides/community.png' },
    { name: 'Department', description: 'Configure organizational structure.', image: '/assets/admin-slides/department.png' },
    { name: 'F & B', description: 'Oversee cafeteria menus and orders.', image: '/assets/admin-slides/fnb.png' },
    { name: 'Finance', description: 'Monitor budgets and expenses.', image: '/assets/admin-slides/finance.png' },
    { name: 'Project & Task', description: 'Track company-wide initiatives.', image: '/assets/admin-slides/project.png' },
    { name: 'Security', description: 'Access logs and incident reports.', image: '/assets/admin-slides/security.png' },
    { name: 'Space', description: 'Floor plans and seat allocation.', image: '/assets/admin-slides/space.png' },
    { name: 'Ticket', description: 'Centralized helpdesk resolution.', image: '/assets/admin-slides/tickets.png' },
];

export default function AdminOSShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // 4 Second Cycle (Pauses on Interaction)
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % modules.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const currentModule = modules[currentIndex];

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img = new Image();
        img.src = modules[nextIndex].image;
    }, [currentIndex]);

    return (
        <section className="w-full min-h-screen py-8 md:py-12 2xl:py-20 bg-coconut flex flex-col justify-between items-center relative overflow-hidden">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-4 md:mb-0">
                <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Admin
                </h2>
                <span className="text-lg md:text-xl lg:text-2xl font-medium text-graphite/60 block">
                    Total System Command
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
                    <div className="w-full max-w-2xl 2xl:max-w-3xl transform scale-90 lg:scale-90 transition-all duration-500 hover:scale-95 pointer-events-auto">
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

            {/* 3. Footer (Bottom) */}
            <div className="shrink-0 w-full flex justify-center pt-8 pb-4 md:pb-8 z-20 px-6 relative z-20">
                <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] tracking-tight leading-none text-center">
                    <span className="whitespace-nowrap text-sm md:text-lg lg:text-xl font-medium text-graphite/80">India's Most Unified</span>

                    {/* Morphing Word Container */}
                    <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentModule.name}
                                initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(10px)' }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="text-xl md:text-2xl lg:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.name}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span className="whitespace-nowrap text-sm md:text-lg lg:text-xl font-medium text-graphite/80">Management System</span>
                </h3>
            </div>
        </section>
    );
}
