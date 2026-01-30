import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'AMC', mac: '/assets/facilities/amc-mac.png', mobile: '/assets/facilities/amc-mobile.png' },
    { name: 'Assets', mac: '/assets/facilities/assets-mac.png', mobile: '/assets/facilities/assets-mobile.png' },
    { name: 'Audit', mac: '/assets/facilities/audits-mac.png', mobile: '/assets/facilities/audits-mobile.png' },
    { name: 'Booking', mac: '/assets/facilities/booking-mac.png', mobile: '/assets/facilities/booking-mobile.png' },
    { name: 'Fitout', mac: '/assets/facilities/fitout-mac.png', mobile: '/assets/facilities/fitout-mobile.png' },
    { name: 'Hotoweb', mac: '/assets/facilities/hotoweb-mac.png', mobile: '/assets/facilities/hotoweb-mobile.png' },
    { name: 'Inventory', mac: '/assets/facilities/inventory-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { name: 'Patrolling', mac: '/assets/facilities/patrolling-mac.png', mobile: '/assets/facilities/patrolling-mobile.png' },
    { name: 'Safety', mac: '/assets/facilities/safety-mac.png', mobile: '/assets/facilities/safety-mobile.png' },
    { name: 'Snag', mac: '/assets/facilities/snag-mac.png', mobile: '/assets/facilities/snag-mobile.png' },
    { name: 'Space', mac: '/assets/facilities/space-mac.png', mobile: '/assets/facilities/space-mobile.png' },
    { name: 'Staff Entry', mac: '/assets/facilities/staff-entry-mac.png', mobile: '/assets/facilities/staff-entry-mobile.png' },
    { name: 'Tickets', mac: '/assets/facilities/tickets-mac.png', mobile: '/assets/facilities/tickets-mobile.png' },
    { name: 'Visitor', mac: '/assets/facilities/visitor-mac.png', mobile: '/assets/facilities/visitor-mobile.png' },
];

export default function FacilitiesShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 4 Second Cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % modules.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentModule = modules[currentIndex];

    // Preload next images
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img1 = new Image();
        img1.src = modules[nextIndex].mac;
        const img2 = new Image();
        img2.src = modules[nextIndex].mobile;
    }, [currentIndex]);

    return (
        <section className="w-full h-screen max-h-[1080px] py-0 bg-coconut overflow-hidden flex flex-col justify-center relative">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-4 md:py-6">

                {/* Header Text - Spacious Gap */}
                <div className="text-center shrink-0 mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-atlas tracking-tighter uppercase mb-2">
                        Facilities OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        Total Operational Control.
                    </span>
                </div>

                {/* Device Showcase Grid - Mac + Mobile */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-40 w-full max-w-7xl mx-auto">

                        {/* MacBook Column */}
                        <div className="w-full max-w-xl lg:max-w-3xl flex justify-center lg:justify-end relative">
                            <div className="w-full transform scale-80 lg:scale-90 transition-all duration-500 origin-center lg:origin-right">
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
                                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                </MacBookFrame>
                            </div>
                        </div>

                        {/* iPhone Column */}
                        <div className="w-[150px] lg:w-[200px] flex justify-center lg:justify-start relative z-10 lg:mt-8 shrink-0">
                            <div className="w-full transform transition-transform duration-500">
                                <IPhoneFrame>
                                    <div className="relative w-full h-full bg-white">
                                        <AnimatePresence mode="popLayout">
                                            <motion.img
                                                key={`mobile-${currentIndex}`}
                                                src={currentModule.mobile}
                                                alt={currentModule.name}
                                                className="absolute inset-0 w-full h-full object-contain"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                </IPhoneFrame>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Morphing Footer */}
                <div className="mt-20 md:mt-32 shrink-0 relative z-20 pb-4 md:pb-8 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none text-center">
                        <span className="whitespace-nowrap text-xl md:text-3xl font-medium text-graphite/80">One Stop Solution For</span>

                        {/* Morphing Word Container */}
                        <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentModule.name}
                                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="text-3xl md:text-5xl text-atlas font-black whitespace-nowrap"
                                >
                                    {currentModule.name}
                                </motion.span>
                            </AnimatePresence>
                        </span>

                        <span className="whitespace-nowrap text-xl md:text-3xl font-medium text-graphite/80">management</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
