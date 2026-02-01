import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

const modules = [
    { name: 'AMC', description: 'Track Annual Maintenance Contracts.', mac: '/assets/facilities/amc-mac.png', mobile: '/assets/facilities/amc-mobile.png' },
    { name: 'Assets', description: 'Lifecycle management of physical assets.', mac: '/assets/facilities/assets-mac.png', mobile: '/assets/facilities/assets-mobile.png' },
    { name: 'Audit', description: 'Conduct regular facility inspections.', mac: '/assets/facilities/audits-mac.png', mobile: '/assets/facilities/audits-mobile.png' },
    { name: 'Booking', description: 'Reserve meeting rooms and desks.', mac: '/assets/facilities/booking-mac.png', mobile: '/assets/facilities/booking-mobile.png' },
    { name: 'Fitout', description: 'Manage construction and renovations.', mac: '/assets/facilities/fitout-mac.png', mobile: '/assets/facilities/fitout-mobile.png' },
    { name: 'Hotoweb', description: 'Handover and Takeover documentation.', mac: '/assets/facilities/hotoweb-mac.png', mobile: '/assets/facilities/hotoweb-mobile.png' },
    { name: 'Inventory', description: 'Track stock for consumables.', mac: '/assets/facilities/inventory-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { name: 'Patrolling', description: 'Monitor security guard routes.', mac: '/assets/facilities/patrolling-mac.png', mobile: '/assets/facilities/patrolling-mobile.png' },
    { name: 'Safety', description: 'EHS compliance and incident logs.', mac: '/assets/facilities/safety-mac.png', mobile: '/assets/facilities/safety-mobile.png' },
    { name: 'Snag', description: 'Track defects and resolution status.', mac: '/assets/facilities/snag-mac.png', mobile: '/assets/facilities/snag-mobile.png' },
    { name: 'Space', description: 'Analyze floor plans and utilization.', mac: '/assets/facilities/space-mac.png', mobile: '/assets/facilities/space-mobile.png' },
    { name: 'Staff Entry', description: 'Manage gate passes and access.', mac: '/assets/facilities/staff-entry-mac.png', mobile: '/assets/facilities/staff-entry-mobile.png' },
    { name: 'Tickets', description: 'Helpdesk for facility issues.', mac: '/assets/facilities/tickets-mac.png', mobile: '/assets/facilities/tickets-mobile.png' },
    { name: 'Visitor', description: 'Streamline guest entry management.', mac: '/assets/facilities/visitor-mac.png', mobile: '/assets/facilities/visitor-mobile.png' },
];

export default function FacilitiesShowcase() {
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
        const imgMobile = new Image();
        imgMobile.src = modules[nextIndex].mobile;
    }, [currentIndex]);

    return (
        <section className="w-full min-h-screen py-20 bg-coconut flex flex-col justify-between items-center relative">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-8 md:mb-0">
                <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Facilities OS
                </h2>
                <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                    Total Operational Control.
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
                {/* Added lg:pl-80 to shift center right and avoid sidebar overlap */}
                <div className="col-start-1 row-start-1 justify-self-center w-full max-w-[90rem] flex justify-center relative px-4 lg:pl-80 pointer-events-none">
                    <div className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-8 transform scale-100 transition-all duration-500 hover:scale-[1.02] pointer-events-auto">

                        {/* MacBook - More Smaller */}
                        <div className="w-full max-w-2xl">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mac-${currentIndex}`}
                                            src={currentModule.mac}
                                            alt={`${currentModule.name} Dashboard`}
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

                        {/* iPhone Separated & Even Smaller */}
                        <div className="w-[140px] md:w-[170px] shrink-0">
                            <IPhoneFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mobile-${currentIndex}`}
                                            src={currentModule.mobile}
                                            alt={`${currentModule.name} App`}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -50, opacity: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </IPhoneFrame>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Footer (Bottom) */}
            <div className="shrink-0 w-full flex justify-center pt-8 pb-4 md:pb-8 z-20 px-6 relative z-20">
                <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] tracking-tight leading-none text-center">
                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">One Stop Solution For</span>

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

                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">Management.</span>
                </h3>
            </div>
        </section>
    );
}
