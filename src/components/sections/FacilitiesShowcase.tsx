import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

const modules = [
    // 1. Transitioning
    { category: 'Transitioning', name: 'Hotoweb', description: 'Handover and Takeover documentation.', mac: '/assets/hotoweb-new.jpeg', mobile: '/assets/facilities/hotoweb-mobile.png' },
    { category: 'Transitioning', name: 'Snagging', description: 'Track defects and resolution status.', mac: '/assets/facilities/snag-mac.png', mobile: '/assets/facilities/snag-mobile.png' },
    { category: 'Transitioning', name: 'Fitout Management', description: 'Manage construction and renovations.', mac: '/assets/facilities/fitout-mac.png', mobile: '/assets/facilities/fitout-mobile.png' },

    // 2. Maintenance
    { category: 'Maintenance', name: 'Tickets/ Helpdesk', description: 'Helpdesk for facility issues.', mac: '/assets/facilities/tickets-mac.png', mobile: '/assets/facilities/tickets-mobile.png' },
    { category: 'Maintenance', name: 'Assets (Lifecyle)', description: 'Lifecycle management of physical assets.', mac: '/assets/facilities/assets-mac.png', mobile: '/assets/facilities/assets-mobile.png' },
    { category: 'Maintenance', name: 'Schedule & Task', description: 'Manage schedules and recurring tasks.', mac: '/assets/facilities/schedule-mac.png', mobile: '/assets/facilities/schedule-mobile.png' },
    { category: 'Maintenance', name: 'Inventory', description: 'Track stock for consumables.', mac: '/assets/facilities/inventory-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Maintenance', name: 'AMC Services', description: 'Track Annual Maintenance Contracts.', mac: '/assets/facilities/amc-mac.png', mobile: '/assets/facilities/amc-mobile.png' },
    { category: 'Maintenance', name: 'Audit', description: 'Operational, Asset, and Vendor audits.', mac: '/assets/facilities/audits-mac.png', mobile: '/assets/facilities/audits-mobile.png' },
    { category: 'Maintenance', name: 'Waste Mgmt', description: 'Track waste disposal and recycling.', mac: '/assets/facilities/waste-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Maintenance', name: 'Survey', description: 'Conduct facility surveys and feedback.', mac: '/assets/facilities/survey-mac.png', mobile: '/assets/facilities/survey-mobile.png' },

    // 3. Safety
    { category: 'Safety', name: 'Permit to Work', description: 'Manage work permits and safety checks.', mac: '/assets/facilities/safety-mac.png', mobile: '/assets/facilities/safety-mobile.png' },
    { category: 'Safety', name: 'Incident Mgmt', description: 'Log and track safety incidents.', mac: '/assets/facilities/incident-mac.png', mobile: '/assets/facilities/incident-mobile.png' },
    { category: 'Safety', name: 'M-safe', description: 'Safety training and compliance.', mac: '/assets/facilities/msafe-mac.png', mobile: '/assets/facilities/msafe-mobile.png' },

    // 4. Finance
    { category: 'Finance', name: 'Vendor Mgmt', description: 'Manage vendor profiles and contracts.', mac: '/assets/facilities/vendor-mac.png', mobile: '/assets/facilities/amc-mobile.png' },
    { category: 'Finance', name: 'Procurement', description: 'Streamline purchasing processes.', mac: '/assets/facilities/procurement-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Finance', name: 'Material Mgmt', description: 'Track material usage and stock.', mac: '/assets/facilities/material-mac.png', mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Finance', name: 'Accounting', description: 'Track facility-related expenses.', mac: '/assets/facilities/accounting-mac.png', mobile: '/assets/facilities/amc-mobile.png' },

    // 5. Utility
    { category: 'Utility', name: 'Energy Management', description: 'Monitor energy consumption.', mac: '/assets/facilities/energy-mac.png', mobile: '/assets/facilities/energy-mobile.png' },
    { category: 'Utility', name: 'Water Management', description: 'Track water usage and quality.', mac: '/assets/facilities/water-mac.png', mobile: '/assets/facilities/water-mobile.png' },
    { category: 'Utility', name: 'Utility Meter Reading Management', description: 'Automated utility meter tracking.', mac: '/assets/facilities/meter-mac.png', mobile: '/assets/facilities/meter-mobile.png' },

    // 6. Security
    { category: 'Security', name: 'Visitor Management', description: 'Streamline guest entry management.', mac: '/assets/facilities/visitor-mac.png', mobile: '/assets/facilities/visitor-mobile.png' },
    { category: 'Security', name: 'Gatepass Management', description: 'Manage material movement gate passes.', mac: '/assets/facilities/gatepass-mac.png', mobile: '/assets/facilities/gatepass-mobile.png' },
    { category: 'Security', name: 'Staff Entry Management', description: 'Manage staff access and attendance.', mac: '/assets/facilities/staff-entry-mac.png', mobile: '/assets/facilities/staff-entry-mobile.png' },
    { category: 'Security', name: 'Patrolling', description: 'Monitor security guard routes.', mac: '/assets/facilities/patrolling-mac.png', mobile: '/assets/facilities/patrolling-mobile.png' },

    // 7. Value Added Services
    { category: 'Value Added Services', name: 'F&B Management', description: 'Food and beverage management.', mac: '/assets/facilities/fnb-mac.png', mobile: '/assets/facilities/fnb-mobile.png' },
    { category: 'Value Added Services', name: 'Parking Management', description: 'Manage parking spaces and allocation.', mac: '/assets/facilities/parking-mac.png', mobile: '/assets/facilities/parking-mobile.png' },
    { category: 'Value Added Services', name: 'OSR Management', description: 'Occupancy Service Request management.', mac: '/assets/facilities/space-mac.png', mobile: '/assets/facilities/space-mobile.png' },
    { category: 'Value Added Services', name: 'Space Management', description: 'Analyze floor plans and utilization.', mac: '/assets/facilities/space-mac.png', mobile: '/assets/facilities/space-mobile.png' },
    { category: 'Value Added Services', name: 'Booking Management', description: 'Reserve meeting rooms and desks.', mac: '/assets/facilities/booking-mac.png', mobile: '/assets/facilities/booking-mobile.png' },
    { category: 'Value Added Services', name: 'Mailroom Management', description: 'Track incoming and outgoing mail.', mac: '/assets/facilities/mailroom-mac.png', mobile: '/assets/facilities/mailroom-mobile.png' },
    { category: 'Value Added Services', name: 'Lease Management', description: 'Track property lease agreements.', mac: '/assets/facilities/lease-mac.png', mobile: '/assets/facilities/amc-mobile.png' },
];

export default function FacilitiesShowcase() {
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
        img.src = modules[nextIndex].mac;
        const imgMobile = new Image();
        imgMobile.src = modules[nextIndex].mobile;
    }, [currentIndex]);

    return (
        <section className="w-full min-h-screen py-8 md:py-12 2xl:py-20 bg-coconut flex flex-col justify-between items-center relative">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-8 md:mb-0">
                <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Facilities
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
                        <div className="w-full max-w-lg md:max-w-xl 2xl:max-w-2xl">
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

                                    {/* Logo Patch for Hotoweb to hide Godrej Logo */}
                                    {currentModule.name === 'Hotoweb' && (
                                        <div className="absolute top-[2%] left-[1.5%] w-[15%] h-[9%] bg-[#FFF] z-20" />
                                    )}
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
                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">One Solution for</span>

                    {/* Morphing Category */}
                    <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`cat-${currentModule.category}`}
                                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-xl md:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.category}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">offering</span>

                    {/* Morphing Module Name */}
                    <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={`mod-${currentModule.name}`}
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
                </h3>
            </div>
        </section>
    );
}
