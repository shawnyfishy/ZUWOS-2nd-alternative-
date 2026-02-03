import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

const modules = [
    { name: 'Calendar', description: 'Sync meetings, leaves, and events instantly.', mac: '/assets/employee-os/calendar-mac.png', mobile: '/assets/employee-os/calendar-mobile.png' },
    { name: 'Chat', description: 'Team Collaborations on the go', mac: '/assets/employee-os/chat-mac.png', mobile: '/assets/employee-os/chat-mobile.png' },
    { name: 'Community', description: 'Engage with internal communities and interest groups', mac: '/assets/employee-os/community-mac.png', mobile: '/assets/employee-os/community-mobile.png' },
    { name: 'Digital Card', description: 'Contact details shared in a single tap.', mac: '/assets/employee-os/digital-card-mac.png', mobile: '/assets/employee-os/digital-card-mobile.png' },
    { name: 'Documents', description: 'Create, upload, and store files on the go.', mac: '/assets/employee-os/documents-mac.png', mobile: '/assets/employee-os/documents-mobile.png' },
    { name: 'F & B', description: 'Order food directly from the cafeteria.', mac: '/assets/employee-os/fnb-mac.png', mobile: '/assets/employee-os/fnb-mobile.png' },
    { name: 'Helpdesk', description: 'Raise and track IT or Admin tickets.', mac: '/assets/employee-os/helpdesk-mac.png', mobile: '/assets/employee-os/helpdesk-mobile.png' },
    { name: 'HRMS', description: 'Leaves, attendance, and payroll in one tab.', mac: '/assets/employee-os/hrms-mac.png', mobile: '/assets/employee-os/hrms-mobile.png' },
    { name: 'Meetings', description: 'Book rooms and invite attendees seamlessly.', mac: '/assets/employee-os/meeting-room-mac.png', mobile: '/assets/employee-os/meeting-room-mobile.png' },
    { name: 'Parking', description: 'Reserve spots and manage vehicle logs.', mac: '/assets/employee-os/parking-mac.png', mobile: '/assets/employee-os/parking-mobile.png' },
    { name: 'Performance', description: 'Track goals, reviews, and feedback.', mac: '/assets/employee-os/performance-mac.png', mobile: '/assets/employee-os/performance-mobile.png' },
    { name: 'Projects and Tasks', description: 'Manage tasks, sprints, and deadlines.', mac: '/assets/employee-os/projects-mac.png', mobile: '/assets/employee-os/projects-mobile.png' },
    { name: 'Seat Mgmt', description: 'Book desks in a hybrid workspace.', mac: '/assets/employee-os/seat-space-mac.png', mobile: '/assets/employee-os/seat-space-mobile.png' },
    { name: 'To-Do', description: 'Personal task manager for daily focus.', mac: '/assets/employee-os/todo-mac.png', mobile: '/assets/employee-os/todo-mobile.png' },
    { name: 'Visitor', description: 'Pre-approve guests and get entry codes.', mac: '/assets/employee-os/visitor-mac.png', mobile: '/assets/employee-os/visitor-mobile.png' },
    { name: 'Wallet', description: 'Manage reimbursements and credits.', mac: '/assets/employee-os/wallet-mac.png', mobile: '/assets/employee-os/wallet-mobile.png' },
];

export default function EmployeeOSShowcase() {
    const containerRef = useRef<HTMLElement>(null);

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
        <section ref={containerRef} className="w-full min-h-screen py-8 md:py-12 2xl:py-20 bg-coconut flex flex-col justify-between items-center relative overflow-hidden">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-4 md:mb-0">
                <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Employee
                </h2>
                <span className="text-lg md:text-xl lg:text-2xl font-medium text-graphite/60 block">
                    One App for Everything
                </span>
            </div>

            {/* 2. Main Content (Fluid Grid Overlay) */}
            <div className="flex-grow w-full max-w-[1600px] mx-auto grid grid-cols-1 items-center relative z-10 px-6 md:px-12">

                {/* Layer 1: Sidebar (Left Aligned, Flow Aware) */}
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

                {/* Layer 2: Main Content (Centered, Flow Aware) */}
                {/* Layer 2: Main Content (Centered, Flow Aware) */}
                {/* Device Pairing Display - Forced Center */}
                {/* Added lg:pl-80 to shift center right and avoid sidebar overlap */}
                <div className="col-start-1 row-start-1 justify-self-center w-full max-w-[90rem] flex justify-center relative px-4 lg:pl-80 pointer-events-none">
                    {/* Inner Wrapper for interaction if needed */}
                    <motion.div
                        className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-8 transform scale-90 md:scale-100 transition-all duration-500 hover:scale-[0.92] md:hover:scale-[1.02] pointer-events-auto"
                    >

                        {/* MacBook - More Smaller (max-w-2xl now) */}
                        <div className="w-full max-w-lg md:max-w-xl 2xl:max-w-2xl">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mac-${currentIndex}`}
                                            src={currentModule.mac}
                                            alt={`${currentModule.name} Desktop`}
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
                        <div className="w-[100px] md:w-[130px] lg:w-[170px] shrink-0">
                            <IPhoneFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mobile-${currentIndex}`}
                                            src={currentModule.mobile}
                                            alt={`${currentModule.name} Mobile`}
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
                    </motion.div>
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
                                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-lg md:text-2xl lg:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.name}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span className="whitespace-nowrap text-sm md:text-lg lg:text-xl font-medium text-graphite/80">Management System</span>
                </h3>
            </div>
        </section >
    );
}
