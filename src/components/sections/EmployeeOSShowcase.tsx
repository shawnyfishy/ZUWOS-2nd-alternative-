import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'Calendar', mac: '/assets/employee-os/calendar-mac.png', mobile: '/assets/employee-os/calendar-mobile.png' },
    { name: 'Chat', mac: '/assets/employee-os/chat-mac.png', mobile: '/assets/employee-os/chat-mobile.png' },
    { name: 'Community', mac: '/assets/employee-os/community-mac.png', mobile: '/assets/employee-os/community-mobile.png' },
    { name: 'Digital Card', mac: '/assets/employee-os/digital-card-mac.png', mobile: '/assets/employee-os/digital-card-mobile.png' },
    { name: 'Documents', mac: '/assets/employee-os/documents-mac.png', mobile: '/assets/employee-os/documents-mobile.png' },
    { name: 'F & B', mac: '/assets/employee-os/fnb-mac.png', mobile: '/assets/employee-os/fnb-mobile.png' },
    { name: 'Helpdesk', mac: '/assets/employee-os/helpdesk-mac.png', mobile: '/assets/employee-os/helpdesk-mobile.png' },
    { name: 'HRMS', mac: '/assets/employee-os/hrms-mac.png', mobile: '/assets/employee-os/hrms-mobile.png' },
    { name: 'Meetings', mac: '/assets/employee-os/meeting-room-mac.png', mobile: '/assets/employee-os/meeting-room-mobile.png' },
    { name: 'Parking', mac: '/assets/employee-os/parking-mac.png', mobile: '/assets/employee-os/parking-mobile.png' },
    { name: 'Performance', mac: '/assets/employee-os/performance-mac.png', mobile: '/assets/employee-os/performance-mobile.png' },
    { name: 'Projects', mac: '/assets/employee-os/projects-mac.png', mobile: '/assets/employee-os/projects-mobile.png' },
    { name: 'Seat Mgmt', mac: '/assets/employee-os/seat-space-mac.png', mobile: '/assets/employee-os/seat-space-mobile.png' },
    { name: 'To-Do', mac: '/assets/employee-os/todo-mac.png', mobile: '/assets/employee-os/todo-mobile.png' },
    { name: 'Visitor', mac: '/assets/employee-os/visitor-mac.png', mobile: '/assets/employee-os/visitor-mobile.png' },
    { name: 'Wallet', mac: '/assets/employee-os/wallet-mac.png', mobile: '/assets/employee-os/wallet-mobile.png' },
];

export default function EmployeeOSShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

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

                {/* Header Text - Pushed to Top Edge */}
                <div className="text-center shrink-0 mb-12 md:mb-16">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                        Employee OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        One App for Everything
                    </span>
                </div>

                {/* Device Showcase Grid */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-40 w-full max-w-7xl mx-auto">

                        {/* MacBook Column - Scaled Down for Visiblity */}
                        <div className="w-full max-w-xl lg:max-w-3xl flex justify-center lg:justify-end relative">
                            <div className="w-full transform scale-80 lg:scale-90 transition-all duration-500 origin-center lg:origin-right">
                                <MacBookFrame>
                                    <div className="relative w-full h-full bg-white">
                                        <AnimatePresence mode="popLayout">
                                            <motion.img
                                                key={`mac-${currentIndex}`}
                                                src={currentModule.mac}
                                                alt="Desktop"
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

                        {/* iPhone Column - Scaled Down */}
                        <div className="w-[150px] lg:w-[200px] flex justify-center lg:justify-start relative z-10 lg:mt-8 shrink-0">
                            <div className="w-full transform transition-transform duration-500">
                                <IPhoneFrame>
                                    <div className="relative w-full h-full bg-white">
                                        <AnimatePresence mode="popLayout">
                                            <motion.img
                                                key={`mobile-${currentIndex}`}
                                                src={currentModule.mobile}
                                                alt="Mobile"
                                                className="absolute inset-0 w-full h-full object-contain"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.8 }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                </IPhoneFrame>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dynamic Morphing Text Footer - Pushed to Bottom Edge */}
                <div className="mt-12 md:mt-24 shrink-0 relative z-20 pb-4 md:pb-8 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none">
                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">India's most unified</span>

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

                        <span className="whitespace-nowrap text-2xl md:text-4xl font-medium text-graphite/80">management system.</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
