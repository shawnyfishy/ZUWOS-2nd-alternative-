import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

import calendarImg from '../ui/MOBILEEMPLOYEESHD/Calendar ios.png';
import chatImg from '../ui/MOBILEEMPLOYEESHD/Chat ios.png';
import communityImg from '../ui/MOBILEEMPLOYEESHD/Community ios.png';
import digitalCardImg from '../ui/MOBILEEMPLOYEESHD/Digital card.png';
import documentsImg from '../ui/MOBILEEMPLOYEESHD/Documents ios.png';
import fnbImg from '../ui/MOBILEEMPLOYEESHD/F&B.jpg';
import helpdeskImg from '../ui/MOBILEEMPLOYEESHD/Helpdesk ios.png';
import hrmsImg from '../ui/MOBILEEMPLOYEESHD/HRMS.jpg';
import meetingsImg from '../ui/MOBILEEMPLOYEESHD/Meetings.jpg';
import parkingImg from '../ui/MOBILEEMPLOYEESHD/Parking Management.jpg';
import performanceImg from '../ui/MOBILEEMPLOYEESHD/Performance ios.png';
import projectsDesktopImg from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/KANBANNN3.jpeg'; // Desktop: KANBANNN3.jpeg
import projectsMobileImg from '../ui/MOBILEEMPLOYEESHD/Project & Task.jpg'; // Mobile: Reverted to Project & Task.jpg
import seatSpaceImg from '../ui/MOBILEEMPLOYEESHD/Space Management.jpg';
import todoImg from '../ui/MOBILEEMPLOYEESHD/To-Do.jpg';
import visitorImg from '../ui/MOBILEEMPLOYEESHD/Visitor.png';
import walletMacImg from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Wallet web NEWWWW.png';
import walletImg from '../ui/MOBILEEMPLOYEESHD/Wallet ios.png';

const modules = [
    { name: 'Calendar', description: 'Sync meetings, leaves, and events instantly.', mac: '/employees-new/calendar.png', mobile: calendarImg },
    { name: 'Chat', description: 'Team Collaborations on the go', mac: '/employees-new/chat.png', mobile: chatImg },
    { name: 'Community', description: 'Engage with internal communities and interest groups', mac: '/employees-new/community.png', mobile: communityImg },
    { name: 'Digital Card', description: 'Contact details shared in a single tap.', mac: '/employees-new/digital-card.png', mobile: digitalCardImg },
    { name: 'Documents', description: 'Create, upload, and store files on the go.', mac: '/employees-new/documents.png', mobile: documentsImg },
    { name: 'F & B', description: 'Order food directly from the cafeteria.', mac: '/employees-new/fnb.png', mobile: fnbImg },
    { name: 'Helpdesk', description: 'Raise and track IT or Admin tickets.', mac: '/assets/employee-os/helpdesk-mac.png', mobile: helpdeskImg },
    { name: 'HRMS', description: 'Leaves, attendance, and payroll in one tab.', mac: '/employees-new/hrms.png', mobile: hrmsImg },
    { name: 'Meetings', description: 'Book rooms and invite attendees seamlessly.', mac: '/employees-new/meetings.png', mobile: meetingsImg },
    { name: 'Parking', description: 'Reserve spots and manage vehicle logs.', mac: '/employees-new/parking.png', mobile: parkingImg },
    { name: 'Performance', description: 'Track goals, reviews, and feedback.', mac: '/employees-new/performance.jpeg', mobile: performanceImg },
    { name: 'Projects and Tasks', description: 'Manage tasks, sprints, and deadlines.', mac: projectsDesktopImg, mobile: projectsMobileImg },
    { name: 'Seat Mgmt', description: 'Book desks in a hybrid workspace.', mac: '/employees-new/seat-space.png', mobile: seatSpaceImg },
    { name: 'To-Do', description: 'Personal task manager for daily focus.', mac: '/employees-new/todo.png', mobile: todoImg },
    { name: 'Visitor', description: 'Pre-approve guests and get entry codes.', mac: '/employees-new/visitor.jpeg', mobile: visitorImg },
    { name: 'Wallet', description: 'Manage reimbursements and credits.', mac: walletMacImg, mobile: walletImg },
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
        img.src = typeof modules[nextIndex].mac === 'string' ? modules[nextIndex].mac : '';
        const imgMobile = new Image();
        imgMobile.src = modules[nextIndex].mobile;
    }, [currentIndex]);

    return (
        <section ref={containerRef} className="w-full min-h-screen py-8 md:py-12 2xl:py-20 bg-coconut flex flex-col justify-between items-center relative overflow-hidden">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-10 md:mb-12">
                <h2 className="text-4xl md:text-6xl 2xl:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Zuwos's smart workplace
                </h2>
                <span className="text-lg md:text-xl lg:text-2xl font-medium text-graphite/80 block uppercase">
                    built for EMPLOYEES
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
                        className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-center gap-6 xl:gap-16 md:scale-100 transition-all duration-500 hover:scale-[1.02] pointer-events-auto"
                    >

                        {/* MacBook - More Smaller (max-w-2xl now) */}
                        <div className="w-full max-w-lg md:max-w-xl 2xl:max-w-4xl">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mac-${currentIndex}`}
                                            src={currentModule.mac}
                                            alt={`${currentModule.name} Desktop`}
                                            className="absolute inset-0 w-full h-full object-cover object-top image-pixel-perfect"
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
                        <div className="w-[200px] md:w-[130px] lg:w-[170px] shrink-0">
                            <IPhoneFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mobile-${currentIndex}`}
                                            src={currentModule.mobile}
                                            alt={`${currentModule.name} Mobile`}
                                            className="absolute inset-0 w-full h-full object-cover object-top image-pixel-perfect"
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
            <div className="shrink-0 w-full flex justify-center pt-16 pb-4 md:pb-8 z-20 px-4 md:px-6 relative z-20">
                <h3 className="flex items-baseline justify-center gap-1 sm:gap-[0.4em] tracking-tight leading-none text-center whitespace-nowrap w-full overflow-hidden">
                    <span className="text-[min(3.8vw,1.125rem)] md:text-lg lg:text-xl font-medium text-graphite/80">Integrates</span>

                    {/* Morphing Word Container */}
                    <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={currentModule.name}
                                initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="text-[min(4.5vw,1.5rem)] md:text-2xl lg:text-3xl text-primary font-black"
                            >
                                {currentModule.name}
                            </motion.span>
                        </AnimatePresence>
                    </span>

                    <span className="text-[min(3.8vw,1.125rem)] md:text-lg lg:text-xl font-medium text-graphite/80">into one unified platform</span>
                </h3>
            </div>
        </section >
    );
}
