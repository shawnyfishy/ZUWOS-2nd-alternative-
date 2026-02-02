import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import TextRevealer from '../utils/TextRevealer';


// --- Card Configuration ---
// Grid: 5x5. Center (3,3) is Logo.
// Layout designed to mimic a "Bentot/Masonry" style with mixed aspect ratios.
// 25 Cells Total. 18 Items.
// - 1 Big (2x2)
// - 2 Wide (2x1)
// - 2 Tall (1x2)
// - 13 Small (1x1) - including Logo

const items = [
    // --- ROW 1 & 2 ---
    {
        // BIG CARD: 2x2
        id: 'community', label: 'Community', sub: 'Connect', color: 'bg-[#162A4C]', text: 'text-white', className: 'md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2', type: 'nodes',
        desc: "Build a thriving workplace culture with forums, groups, and events.",
        features: ["Interest Groups", "Events Calendar"]
    },
    {
        id: 'dashboard', label: 'Performance', sub: 'Dashboard', color: 'bg-[#FFD166]', text: 'text-[#162A4C]', className: 'md:col-start-3 md:row-start-1', type: 'chart',
        desc: "Real-time insights into individual and team productivity metrics.",
        features: ["KPI Tracking", "Goal Alignment", "360° Reviews"]
    },
    {
        // WIDE CARD: 2x1
        id: 'chat', label: 'Chat', sub: 'Messaging', color: 'bg-[#FF5A1F]', text: 'text-white', className: 'md:col-start-4 md:col-span-2 md:row-start-1', type: 'quotes',
        desc: "Secure, real-time messaging designed for the enterprise.",
        features: ["Channels", "Direct Messages", "File Sharing"]
    },
    {
        id: 'project', label: 'Project', sub: 'Management', color: 'bg-[#FF4F00]', text: 'text-white', className: 'md:col-start-3 md:row-start-2', type: 'kanban',
        desc: "Manage agile projects from sprint planning to delivery.",
        features: ["Sprints", "Gantt Charts", "Resource Loading"]
    },
    {
        // Dark Grey to avoid looking like empty space
        id: 'collab', label: 'Collaboration', sub: 'Sync', color: 'bg-[#0097A7]', text: 'text-white', className: 'md:col-start-4 md:row-start-2', type: 'waves',
        desc: "Real-time collaboration on documents, presentations and sheets.",
        features: ["Co-authoring", "Version History", "Live Comments"]
    },
    {
        id: 'calendar', label: 'Calendar', sub: 'Schedule', color: 'bg-[#0061FE]', text: 'text-white', className: 'md:col-start-5 md:row-start-2', type: 'grid',
        desc: "Unified scheduling for meetings, events, and resource planning.",
        features: ["Smart Sync", "Time Blocking"]
    },

    // --- ROW 3 & 4  ---
    {
        // TALL CARD: 1x2 (Row 3-4)
        id: 'drive', label: 'Doc Drive', sub: 'Storage', color: 'bg-[#8A1C52]', text: 'text-white', className: 'md:col-start-1 md:row-start-3 md:row-span-2', type: 'cloud',
        desc: "Secure cloud storage repository for all your enterprise assets.",
        features: ["Access Control", "Versioning", "Smart Search"]
    },
    {
        id: 'visitor', label: 'Visitor', sub: 'Management', color: 'bg-[#AD1457]', text: 'text-white', className: 'md:col-start-2 md:row-start-3', type: 'people',
        desc: "Seamless digital reception and security for your office guests.",
        features: ["Pre-registration", "Digital Badges", "Host Alerts"]
    },
    // LOGO - FIXED CENTER (3,3)
    { id: 'LOGO', isLogo: true, className: 'md:col-start-3 md:col-span-1 md:row-start-3' },
    {
        id: 'meeting', label: 'Meeting Room', sub: 'Booking', color: 'bg-[#B4DC19]', text: 'text-[#162A4C]', className: 'md:col-start-4 md:row-start-3', type: 'curve',
        desc: "Book meeting spaces effortlessly with real-time display integration.",
        features: ["Book Rooms", "Schedule Facilities", "Availability View"]
    },
    {
        // TALL CARD: 1x2 (Row 3-4)
        id: 'seat', label: 'Seat & Space', sub: 'Floorplan', color: 'bg-[#0057FF]', text: 'text-white', className: 'md:col-start-5 md:row-start-3 md:row-span-2', type: 'shapes',
        desc: "Optimize workspace utilization with flexible desk booking.",
        features: ["Hot Desking", "Floor Plans", "Occupancy Sensors"]
    },

    // Row 4 specific
    {
        id: 'wallet', label: 'Wallet', sub: 'Rewards', color: 'bg-[#D4C5F9]', text: 'text-[#162A4C]', className: 'md:col-start-2 md:row-start-4', type: 'lock',
        desc: "Real-time task tracking & transparent incentives.",
        features: ["Performance-linked", "Automated"]
    },
    {
        id: 'todo', label: 'TO DO', sub: 'Productivity', color: 'bg-[#5E35B1]', text: 'text-white', className: 'md:col-start-3 md:row-start-4', type: 'type',
        desc: "Personal task management system to keep you on track.",
        features: ["Reminders", "Prioritization", "Checklists"]
    },
    {
        id: 'helpdesk', label: 'Helpdesk', sub: 'Support', color: 'bg-[#00E5FF]', text: 'text-[#162A4C]', className: 'md:col-start-4 md:row-start-4', type: 'mail',
        desc: "Streamline support with an integrated ticketing and resolution system.",
        features: ["Ticket Mgmt", "Knowledge Base", "SLA Tracking"]
    },

    // --- ROW 5 ---
    {
        // WIDE CARD: 2x1
        id: 'hrms', label: 'HRMS', sub: 'People', color: 'bg-[#CCFF00]', text: 'text-[#162A4C]', className: 'md:col-start-1 md:col-span-2 md:row-start-5', type: 'people',
        desc: "Complete employee lifecycle management from hire to retire.",
        features: ["Onboarding", "Payroll", "Leave Mgmt"]
    },
    {
        // Purple to avoid looking like empty space
        id: 'parking', label: 'Parking', sub: 'Vehicle Management System', color: 'bg-[#5B3A9B]', text: 'text-white', className: 'md:col-start-3 md:row-start-5', type: 'grid',
        desc: "Smart parking slot allocation and management for employees.",
        features: ["Slot Booking", "Real-time View"]
    },
    {
        id: 'task', label: 'Task', sub: 'Tracking', color: 'bg-[#FF9900]', text: 'text-white', className: 'md:col-start-4 md:row-start-5', type: 'kanban',
        desc: "Collaborative team task tracking and assignment system.",
        features: ["Assignments", "Deadlines", "Dependencies"]
    },
    {
        id: 'cafeteria', label: 'F&B', sub: 'Cafeteria', color: 'bg-[#009933]', text: 'text-white', className: 'md:col-start-5 md:row-start-5', type: 'funnel',
        desc: "Order food and manage cafeteria operations seamlessly.",
        features: ["Hassle-free Ordering", "Cashless Pay", "Inventory Control"]
    },

    // --- ROW 6 ---
    {
        // WIDE CARD: 2x1
        id: 'documents', label: 'Documents', sub: 'Files', color: 'bg-[#FF0080]', text: 'text-white', className: 'md:col-start-1 md:col-span-2 md:row-start-6', type: 'type',
        desc: "Centralized document management and version control.",
        features: ["Real-time Collaboration", "Version History", "Sharing"]
    },
    {
        // WIDE CARD: 2x1
        id: 'presentations', label: 'Presentations', sub: 'Slides', color: 'bg-[#7928CA]', text: 'text-white', className: 'md:col-start-3 md:col-span-2 md:row-start-6', type: 'shapes',
        desc: "Create and share engaging presentations with your team.",
        features: ["Templates", "Live Mode", "Multimedia", "Real-time Collaboration"]
    },
    {
        id: 'fetch-sheet', label: 'Sheets', sub: 'Data', color: 'bg-[#0070F3]', text: 'text-white', className: 'md:col-start-5 md:row-start-6', type: 'grid',
        desc: "Powerful spreadsheets for data analysis and reporting.",
        features: ["Formulas", "Pivot Tables", "Macros", "Real-time Collaboration"]
    },
];

// --- GSAP Animated Content Components ---
// Reusing same content components for visual consistency
const CardContent = ({ type }: { type: string }) => {
    switch (type) {
        case 'nodes':
            return (
                <svg className="w-full h-full absolute bottom-0 right-0 p-4" viewBox="0 0 100 100">
                    <circle className="node-1" cx="20" cy="50" r="4" fill="currentColor" opacity="0.5" />
                    <circle className="node-2" cx="80" cy="20" r="4" fill="currentColor" opacity="0.5" />
                    <circle className="node-3" cx="80" cy="80" r="4" fill="currentColor" opacity="0.5" />
                    <path className="line-1" d="M20 50 L80 20" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                    <path className="line-2" d="M20 50 L80 80" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            );
        case 'quotes':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="quote-left text-7xl font-serif absolute top-2 left-2 opacity-50">“</div>
                    <div className="quote-right text-7xl font-serif absolute bottom-2 right-2 opacity-50">”</div>
                </div>
            );
        case 'type':
            return (
                <div className="absolute inset-0 flex items-end justify-end p-4">
                    <div className="flex flex-col gap-2 items-end opacity-50">
                        <div className="type-line w-16 h-2 bg-current rounded-full" />
                        <div className="type-line w-12 h-2 bg-current rounded-full" />
                        <div className="type-line w-20 h-2 bg-current rounded-full" />
                    </div>
                </div>
            );
        case 'lock':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect className="lock-body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path className="lock-shackle" d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" />
                    </svg>
                </div>
            );
        case 'curve':
            return (
                <svg className="w-full h-full absolute inset-0 p-4" viewBox="0 0 100 100">
                    <path className="bezier-curve" d="M10 90 Q 50 10 90 90" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            );
        case 'grid':
            return (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-4">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`grid-cell-${i} bg-current opacity-30 rounded-[1px]`} />
                    ))}
                </div>
            );
        case 'waves':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="wave-ring absolute w-20 h-20 border-2 border-current rounded-full opacity-0" />
                    <div className="wave-ring absolute w-12 h-12 border-2 border-current rounded-full opacity-0" />
                </div>
            )
        case 'kanban':
            return (
                <div className="absolute inset-0 flex gap-2 p-4 items-end justify-center">
                    <div className="kanban-col w-4 h-12 bg-current opacity-30 rounded-sm" />
                    <div className="kanban-col w-4 h-16 bg-current opacity-50 rounded-sm" />
                    <div className="kanban-col w-4 h-10 bg-current opacity-30 rounded-sm" />
                </div>
            )
        case 'chart':
            return (
                <svg className="w-full h-full absolute inset-0 p-4" viewBox="0 0 100 100">
                    <path className="chart-line" d="M10 90 L30 60 L50 70 L70 30 L90 50" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            )
        case 'cloud':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="cloud-icon w-16 h-16 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C11.6667 2 11.3333 2.01667 11 2.05C10.7 7.55 6.2 12 0.75 12C0.25 12 0 12.25 0 12.75V17C0 20.3 2.7 23 6 23H18C21.3 23 24 20.3 24 17V14C24 10.7 21.3 8 18 8H17C17 4.7 14.3 2 12 2Z" />
                    </svg>
                </div>
            )
        case 'people':
            return (
                <div className="absolute inset-0 flex items-end justify-center gap-1 p-4">
                    <div className="person-1 w-4 h-6 bg-current opacity-50 rounded-t-full" />
                    <div className="person-2 w-4 h-8 bg-current opacity-70 rounded-t-full" />
                    <div className="person-3 w-4 h-5 bg-current opacity-50 rounded-t-full" />
                </div>
            )
        case 'mail':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mail-env w-12 h-8 border-2 border-current rounded-sm relative overflow-hidden">
                        <div className="mail-flap absolute top-0 left-0 w-full h-full border-b-2 border-current origin-top transform rotate-0" />
                    </div>
                </div>
            )
        case 'funnel':
            return (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-50">
                    <div className="funnel-level w-12 h-2 bg-current rounded-full" />
                    <div className="funnel-level w-8 h-2 bg-current rounded-full" />
                    <div className="funnel-level w-4 h-2 bg-current rounded-full" />
                </div>
            )
        case 'shapes':
            return (
                <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-50">
                    <div className="shape-1 w-6 h-6 border-2 border-current rounded-sm" />
                    <div className="shape-2 w-6 h-6 border-2 border-current rounded-full" />
                </div>
            )
        default: return null;
    }
}


const AnimatedCard = ({ item, onClick }: { item: any, onClick: () => void }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out", duration: 0.5 } });

        // Base Card Pop - Handled by TiltCard now, but we can keep inner animations
        // tl.to(card, { scale: 0.98, duration: 0.2 }, 0); // Removed scale here, handled by framer motion on root

        // Specific Content Animations - KEEPING ALL ANIMATIONS
        if (item.type === 'nodes') {
            tl.to(card.querySelectorAll('.line-1, .line-2'), { strokeDashoffset: 0, duration: 0.8 }, 0)
                .to(card.querySelectorAll('.node-1, .node-2, .node-3'), { scale: 1.5, opacity: 1, stagger: 0.1 }, 0);
        }
        if (item.type === 'quotes') {
            tl.to(card.querySelectorAll('.quote-left'), { x: 5, y: 5 }, 0)
                .to(card.querySelectorAll('.quote-right'), { x: -5, y: -5 }, 0);
        }
        if (item.type === 'type') {
            tl.to(card.querySelectorAll('.type-line'), { width: "100%", stagger: 0.1 }, 0);
        }
        if (item.type === 'lock') {
            tl.to(card.querySelectorAll('.lock-shackle'), { y: -4 }, 0);
        }
        if (item.type === 'curve') {
            tl.fromTo(card.querySelectorAll('.bezier-curve'), { attr: { d: "M10 90 Q 10 90 90 90" } }, { attr: { d: "M10 90 Q 50 10 90 90" }, duration: 0.8, ease: "back.out(1.7)" }, 0);
        }
        if (item.type === 'grid') {
            tl.to(card.querySelectorAll('[class^="grid-cell-"]'), { scale: 0.5, opacity: 0.8, stagger: { amount: 0.3, grid: [3, 3], from: "center" } }, 0);
        }
        if (item.type === 'waves') {
            tl.fromTo(card.querySelectorAll('.wave-ring'), { scale: 0, opacity: 1 }, { scale: 1.5, opacity: 0, duration: 1, stagger: 0.3, repeat: -1 }, 0);
        }
        if (item.type === 'kanban') {
            tl.to(card.querySelectorAll('.kanban-col'), { height: '100%', stagger: 0.1 }, 0);
        }
        if (item.type === 'chart') {
            tl.to(card.querySelectorAll('.chart-line'), { strokeDashoffset: 0, duration: 1 }, 0);
        }
        if (item.type === 'cloud') {
            tl.to(card.querySelectorAll('.cloud-icon'), { scale: 1.2, y: -5 }, 0);
        }
        if (item.type === 'people') {
            tl.to(card.querySelectorAll('[class^="person-"]'), { height: 40, stagger: 0.1 }, 0);
        }
        if (item.type === 'mail') {
            tl.to(card.querySelectorAll('.mail-flap'), { rotateX: 180, transformOrigin: 'top' }, 0);
        }
        if (item.type === 'funnel') {
            tl.to(card.querySelectorAll('.funnel-level'), { width: '100%', stagger: 0.1 }, 0);
        }
        if (item.type === 'shapes') {
            tl.to(card.querySelectorAll('.shape-1'), { rotate: 90 }, 0)
                .to(card.querySelectorAll('.shape-2'), { scale: 1.2 }, 0);
        }

        const onEnter = () => tl.play();
        const onLeave = () => { tl.reverse(); if (item.type === 'waves') tl.seek(0).pause(); };

        // Attach listeners to the cardRef which will be the inner div
        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);

        return () => {
            card.removeEventListener('mouseenter', onEnter);
            card.removeEventListener('mouseleave', onLeave);
        };
    }, [item.type]);

    return (
        <motion.div
            layoutId={`card-${item.id}`}
            onClick={onClick}
            className="w-full h-full cursor-pointer relative z-10"
            whileHover={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
            <TiltCard
                className={`
                    w-full h-full 
                    ${item.color} ${item.text}
                    rounded-lg shadow-sm hover:shadow-brutalist
                    transition-shadow duration-300
                    overflow-hidden relative
                `}
            >
                {/* Inner Content Wrapper for GSAP references */}
                <div ref={cardRef} className="w-full h-full flex flex-col justify-between p-4 md:p-6">
                    <div className="relative z-10 flex flex-col items-start gap-1">
                        <span className="font-bold text-lg md:text-xl tracking-tight leading-none">{item.label}</span>
                        <span className="text-xs md:text-sm uppercase tracking-widest opacity-60 font-medium">{item.sub}</span>
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        <CardContent type={item.type} />
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
};

const ZuwosLogoCard = ({ item }: { item: any }) => {
    // State for Flip Interaction
    const [isFlipped, setIsFlipped] = useState(false);

    // 3D Depth Logic (Mouse Tilt)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        if (isFlipped) return; // Optional: Disable tilt when flipped
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = event.clientX - rect.left;
        const mouseYVal = event.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    // Parallax depth for text (only active on front face normally)
    const textZ = useTransform(mouseY, [-0.5, 0.5], ["40px", "60px"]);

    const handleCardClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            key="LOGO"
            className={`
                col-start-1 col-span-2 row-start-3 
                ${item.className}
                z-10 relative overflow-visible group perspective-1000 cursor-pointer
            `}
            style={{ perspective: 1000 }}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                duration: 0.8
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleCardClick}
        >
            {/* Tilt Container (Handles Mouse Movement) */}
            <motion.div
                className="w-full h-full relative transform-style-3d transition-all duration-300"
                style={{
                    rotateX: isFlipped ? 0 : rotateX, // Reset tilt when flipped to avoid weird angles
                    rotateY: isFlipped ? 0 : rotateY,
                    transformStyle: "preserve-3d",
                    zIndex: isFlipped ? 50 : 10 // Pop forward z-index
                }}
                animate={{
                    // scale: isFlipped ? 1.1 : 1, // Removed Pop out scale to prevent overlap
                }}
            >
                {/* Flip Container (Handles Click Rotation) */}
                <motion.div
                    className="w-full h-full relative transform-style-3d shadow-2xl rounded-lg"
                    animate={{
                        rotateY: isFlipped ? 180 : 0
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.68, -0.55, 0.265, 1.55] // Custom bezier for a bit of "spring/bounce"
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* ================= FRONT FACE (Logo) ================= */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-lg overflow-hidden flex items-center justify-center p-[2px]"
                        style={{ backfaceVisibility: 'hidden' }}
                    >
                        {/* Front Content Wrapper */}
                        <div className="w-full h-full relative rounded-[6px] overflow-hidden bg-black flex items-center justify-center">

                            {/* 1. Pulse Background (Back Layer) */}
                            <motion.div
                                className="absolute inset-0 bg-[#0061FE]"
                                style={{ transform: "translateZ(-20px)" }}
                                animate={{
                                    opacity: [0.3, 0.6, 0.3],
                                    scale: [0.95, 1.05, 0.95]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            {/* Rotating Gradient Border (Middle) */}
                            <motion.div
                                className="absolute inset-[-50%]"
                                style={{
                                    background: "conic-gradient(from 0deg, transparent 0deg, #39D3FA 90deg, transparent 180deg, #0061FE 270deg, transparent 360deg)",
                                    transform: "translateZ(0px)"
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Black Card */}
                            <div className="absolute inset-[2px] bg-black rounded-[5px] z-10" />

                            {/* Main Card Content (Front) */}
                            <motion.div
                                className="relative z-20 w-full h-full flex items-center justify-center rounded-[6px] overflow-hidden transform-style-3d"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                {/* Subtle Moving Gradient Orb */}
                                <motion.div
                                    className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_#0061FE15_0%,_transparent_70%)] blur-2xl z-0"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                />

                                {/* Tech Grid Pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-60 z-0" />

                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#111] z-0" />

                                {/* Text Masking Effect for 'ZUWOS' */}
                                <div className="relative z-30 overflow-visible transform-style-3d">
                                    <motion.h2
                                        className="text-2xl md:text-4xl font-display font-black text-white select-none tracking-widest drop-shadow-xl"
                                        style={{
                                            transform: "translateZ(30px)", // Base Z
                                            z: textZ // Dynamic Parallax Z
                                        }}
                                    >
                                        ZUWOS
                                    </motion.h2>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* ================= BACK FACE (Text) ================= */}
                    <div
                        className="absolute inset-0 backface-hidden rounded-lg overflow-hidden flex items-center justify-center p-[2px] bg-[#0061FE]" // Blue border/bg for back
                        style={{
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                        }}
                    >
                        <div className="w-full h-full bg-[#0a0a0a] rounded-[6px] flex flex-col items-center justify-center relative overflow-hidden">
                            {/* Back Background Effects */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
                            <motion.div
                                className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,_#39D3FA10_0%,_transparent_70%)] blur-3xl"
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />

                            <div className="text-center z-10 px-4">
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight mb-1">
                                    OneOS.
                                </h3>
                                <p className="text-lg md:text-xl font-medium text-white/80 tracking-wide">
                                    InfinitePossibilities.
                                </p>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </motion.div>
    );
};


export default function ZuwosEcosystem() {
    const [activeId, setActiveId] = useState<string | null>(null);

    return (
        <div className="w-full max-w-6xl mx-auto px-4 my-16 md:my-24 font-sans">
            <div className="flex justify-center mb-16">
                <TextRevealer
                    text="One OS. Infinite Possibilities."
                    className="text-display-sm md:text-display-md font-display font-bold tracking-tighter text-[#162A4C] text-center justify-center"
                />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 auto-rows-[120px] md:auto-rows-[160px] gap-2">
                {items.map((item, index) => {
                    // Determine Side for Animation Direction
                    let startX = 0;
                    let startY = 30;

                    if (item.className?.includes('col-start-1') || item.className?.includes('col-start-2')) {
                        startX = -100; // From Left
                        startY = 0;
                    } else if (item.className?.includes('col-start-4') || item.className?.includes('col-start-5')) {
                        startX = 100; // From Right
                        startY = 0;
                    }

                    // Logo Specifics
                    if (item.isLogo) {
                        return <ZuwosLogoCard key="LOGO" item={item} />;
                    }

                    // Standard Cards Animation
                    // Calculate delay: Logo (0) -> Wait 0.4s -> Then items flow
                    // Distance from center could dictate delay? 
                    // Simple logic: Left/Right items delay based on index
                    const standardDelay = 0.1; // FAST!
                    const stagger = index * 0.02; // FAST STAGGER!

                    return (
                        <motion.div
                            key={item.id}
                            className={`${item.className} col-span-1 row-span-1`}
                            initial={{ x: startX, y: startY, opacity: 0 }}
                            whileInView={{ x: 0, y: 0, opacity: 1 }}
                            viewport={{ once: true, margin: "-5%" }}
                            transition={{
                                delay: standardDelay + stagger,
                                duration: 0.6,
                                ease: "easeOut"
                            }}
                        >
                            <AnimatedCard
                                item={item}
                                onClick={() => setActiveId(item.id)}
                            />
                        </motion.div>
                    );
                })}
            </div>



            <AnimatePresence>
                {activeId && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveId(null)}
                            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-md"
                        />
                        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
                            {items.map((item) => {
                                if (item.id !== activeId || item.isLogo) return null;
                                return (
                                    <motion.div
                                        key={item.id}
                                        layoutId={`card-${item.id}`}
                                        className={`
                                            pointer-events-auto w-full max-w-lg p-8 md:p-12
                                            ${item.color} ${item.text}
                                            shadow-2xl rounded-none
                                            flex flex-col gap-6 relative overflow-hidden
                                        `}
                                    >
                                        <div className="flex justify-between items-start relative z-10">
                                            <div>
                                                <h3 className="text-5xl font-display font-black tracking-tight mb-2">{item.label}</h3>
                                                <p className="text-xl opacity-80 font-medium">{item.sub}{item.id === 'parking' ? '' : ' Platform'}</p>
                                            </div>
                                            <button onClick={() => setActiveId(null)} className="p-2 hover:bg-black/10 rounded-full transition-colors"><X size={32} /></button>
                                        </div>

                                        <div className="h-px w-full bg-current opacity-20" />

                                        {/* SPECIFIC CONTENT RENDERED HERE */}
                                        <p className="text-2xl font-medium leading-relaxed opacity-90 relative z-10">
                                            {item.desc}
                                        </p>

                                        {/* FEATURES LIST */}
                                        <div className="grid grid-cols-2 gap-3 mt-4 relative z-10">
                                            {item.features?.map((feat, i) => (
                                                <div key={i} className="flex items-center gap-2 opacity-80 font-medium">
                                                    <Check size={16} strokeWidth={3} />
                                                    <span>{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 mt-auto opacity-60 font-mono text-sm uppercase tracking-widest hidden">
                                            <span>ZUWOS 2.0</span>
                                            <ArrowUpRight size={16} />
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div >
    );
}
