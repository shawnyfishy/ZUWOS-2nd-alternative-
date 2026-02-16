
import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X, Check, ArrowLeft } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { useNavigate } from 'react-router-dom';

// --- Card Configuration for Explore Page ---
// Mapped types to existing visual components from ZuwosEcosystem for consistency:
// list -> kanban (vertical lines)
// doc -> type (text lines)
// check -> type or kanban, using type for checklist look
// shield -> lock (security)
// alert -> waves (signal/pulse)
// recycle -> nodes (network/cycle)
// poll -> funnel (collection)
// gauge -> chart (metrics)
// map -> nodes (points)
// id-card -> people (identity)
// ticket -> mail (pass/envelope)
// calendar -> grid (cells)
// droplet -> waves (liquid)
// lightning -> chart (energy/spikes)

const items = [
    // --- ROW 1 ---
    {
        id: 'hoto', label: 'HOTO', sub: '(Handover Takeover)', color: 'bg-[#1C3144]', text: 'text-white', className: 'lg:col-start-1 lg:row-start-1', type: 'grid',
        desc: "Seamless transition of assets and responsibilities.",
        features: ["Asset Verification", "Documentation", "Sign-offs"]
    },
    {
        id: 'fitout', label: 'Fitout', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', className: 'lg:col-start-2 lg:row-start-1', type: 'kanban',
        desc: "Manage workspace fit-out projects start to finish.",
        features: ["Design Approval", "Vendor Coordination", "Progress Tracking"]
    },
    {
        id: 'snagging', label: 'Snagging', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', className: 'lg:col-start-3 lg:row-start-1', type: 'kanban', // Was list
        desc: "Identify and resolve defects efficiently.",
        features: ["Photo Capture", "Location Tagging", "Closure Workflow"]
    },
    {
        id: 'amc', label: 'AMC', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', className: 'lg:col-start-4 lg:row-start-1', type: 'type', // Was doc
        desc: "Track Annual Maintenance Contracts comprehensively.",
        features: ["Renewals", "SLA Monitoring", "Vendor Performance"]
    },
    {
        id: 'audits', label: 'Audits', sub: '', color: 'bg-[#2962FF]', text: 'text-white', className: 'lg:col-start-5 lg:row-start-1', type: 'type', // Was check
        desc: "Conduct systematic inspections and audits.",
        features: ["Checklists", "Compliance", "Scoring"]
    },

    // --- ROW 2 ---
    {
        id: 'ptw', label: 'Permit', sub: 'to Work', color: 'bg-[#D81B60]', text: 'text-white', className: 'lg:col-start-1 lg:row-start-2', type: 'lock',
        desc: "Ensure safety with digital work permits.",
        features: ["Approvals", "Risk Assessment", "Validity Tracking"]
    },
    {
        id: 'safety', label: 'Safety', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', className: 'lg:col-start-2 lg:row-start-2', type: 'lock', // Was shield
        desc: "Prioritize workplace safety protocols.",
        features: ["Incident Reporting", "Training", "Emergency Plans"]
    },
    {
        id: 'incident', label: 'Incident', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', className: 'lg:col-start-3 lg:row-start-2', type: 'waves', // Was alert
        desc: "Rapid response and resolution for incidents.",
        features: ["Logging", "Investigation", "CAPA"]
    },
    {
        id: 'waste', label: 'Waste', sub: 'Management', color: 'bg-[#2962FF]', text: 'text-white', className: 'lg:col-start-4 lg:row-start-2', type: 'nodes', // Was recycle
        desc: "Track and optimize waste disposal processes.",
        features: ["Categorization", "Recycling", "Vendor Manifests"]
    },
    {
        id: 'survey', label: 'Survey', sub: '', color: 'bg-[#D50000]', text: 'text-white', className: 'lg:col-start-5 lg:row-start-2', type: 'funnel', // Was poll
        desc: "Gather feedback to improve workplace experience.",
        features: ["Custom Forms", "Analytics", "Anonymous Feedback"]
    },

    // --- ROW 3 ---
    {
        id: 'todo', label: 'To Do', sub: 'Management', color: 'bg-[#00C853]', text: 'text-white', className: 'lg:col-start-1 lg:row-start-3', type: 'kanban', // Was list
        desc: "Organize tasks and priorities effectively.",
        features: ["Deadlines", "Reminders", "Collaboration"]
    },
    {
        id: 'utility-meter', label: 'Utility', sub: 'Meter Reading', color: 'bg-[#C6FF00]', text: 'text-[#1C3144]', className: 'lg:col-start-2 lg:row-start-3', type: 'chart', // Was gauge
        desc: "Automated and manual utility meter tracking.",
        features: ["Electricity", "Water", "Gas"]
    },
    {
        id: 'patrolling', label: 'Patrolling', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', className: 'lg:col-start-3 lg:row-start-3', type: 'nodes', // Was map
        desc: "Monitor security patrols and guard tours.",
        features: ["Checkpoints", "QR Scanning", "Incident Reporting"]
    },
    {
        id: 'staff-entry', label: 'Staff Entry', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', className: 'lg:col-start-4 lg:row-start-3', type: 'people', // Was id-card
        desc: "Secure and streamlined staff access control.",
        features: ["Biometrics", "Attendance", "Access Logs"]
    },
    {
        id: 'gatepass', label: 'Gatepass', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', className: 'lg:col-start-5 lg:row-start-3', type: 'mail', // Was ticket
        desc: "Control movement of materials and visitors.",
        features: ["Returnable", "Non-Returnable", "Digital Approvals"]
    },

    // --- ROW 4 ---
    {
        id: 'osr', label: 'OSR', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', className: 'lg:col-start-1 lg:row-start-4', type: 'grid',
        desc: "Occupancy Service Request management.",
        features: ["Request Flow", "SLA Tracking", "Feedback"]
    },
    {
        id: 'booking', label: 'Booking', sub: 'Management', color: 'bg-[#2962FF]', text: 'text-white', className: 'lg:col-start-2 lg:row-start-4', type: 'grid', // Was calendar
        desc: "Universal booking system for all resources.",
        features: ["Desks", "Rooms", "Parking"]
    },
    {
        id: 'lease', label: 'Lease', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', className: 'lg:col-start-3 lg:row-start-4', type: 'type', // Was doc
        desc: "Manage property leases and critical dates.",
        features: ["Contracts", "Renewals", "Payments"]
    },
    {
        id: 'water', label: 'Water', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', className: 'lg:col-start-4 lg:row-start-4', type: 'waves', // Was droplet
        desc: "Monitor water compatibility and usage.",
        features: ["Quality Checks", "Consumption", "Alerts"]
    },
    {
        id: 'energy', label: 'Energy', sub: 'Management', color: 'bg-[#D50000]', text: 'text-white', className: 'lg:col-start-5 lg:row-start-4', type: 'chart', // Was lightning
        desc: "Track and optimize energy consumption.",
        features: ["Real-time Monitoring", "Savings Analysis", "Carbon Footprint"]
    },
];

const CardContent = ({ type }: { type: string }) => {
    switch (type) {
        case 'nodes':
            return (
                <svg className="w-full h-full absolute bottom-0 right-0 p-3" viewBox="0 0 100 100">
                    <circle className="node-1" cx="20" cy="50" r="3" fill="currentColor" opacity="0.5" />
                    <circle className="node-2" cx="80" cy="20" r="3" fill="currentColor" opacity="0.5" />
                    <circle className="node-3" cx="80" cy="80" r="3" fill="currentColor" opacity="0.5" />
                    <path className="line-1" d="M20 50 L80 20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                    <path className="line-2" d="M20 50 L80 80" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            );
        case 'type':
            return (
                <div className="absolute inset-0 flex items-end justify-end p-3">
                    <div className="flex flex-col gap-1.5 items-end opacity-50">
                        <div className="type-line w-12 h-1.5 bg-current rounded-full" />
                        <div className="type-line w-8 h-1.5 bg-current rounded-full" />
                        <div className="type-line w-16 h-1.5 bg-current rounded-full" />
                    </div>
                </div>
            );
        case 'lock':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect className="lock-body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path className="lock-shackle" d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" />
                    </svg>
                </div>
            );
        case 'grid':
            return (
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-3">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`grid-cell-${i} bg-current opacity-30 rounded-[1px]`} />
                    ))}
                </div>
            );
        case 'waves':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="wave-ring absolute w-14 h-14 border-2 border-current rounded-full opacity-0" />
                    <div className="wave-ring absolute w-8 h-8 border-2 border-current rounded-full opacity-0" />
                </div>
            )
        case 'kanban':
            return (
                <div className="absolute inset-0 flex gap-1.5 p-3 items-end justify-center">
                    <div className="kanban-col w-3 h-8 bg-current opacity-30 rounded-sm" />
                    <div className="kanban-col w-3 h-12 bg-current opacity-50 rounded-sm" />
                    <div className="kanban-col w-3 h-6 bg-current opacity-30 rounded-sm" />
                </div>
            )
        case 'chart':
            return (
                <svg className="w-full h-full absolute inset-0 p-3" viewBox="0 0 100 100">
                    <path className="chart-line" d="M10 90 L30 60 L50 70 L70 30 L90 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            )
        case 'people':
            return (
                <div className="absolute inset-0 flex items-end justify-center gap-1 p-3">
                    <div className="person-1 w-3 h-5 bg-current opacity-50 rounded-t-full" />
                    <div className="person-2 w-3 h-7 bg-current opacity-70 rounded-t-full" />
                    <div className="person-3 w-3 h-4 bg-current opacity-50 rounded-t-full" />
                </div>
            )
        case 'mail':
            return (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="mail-env w-8 h-5 border-2 border-current rounded-sm relative overflow-hidden">
                        <div className="mail-flap absolute top-0 left-0 w-full h-full border-b-2 border-current origin-top transform rotate-0" />
                    </div>
                </div>
            )
        case 'funnel':
            return (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-50">
                    <div className="funnel-level w-8 h-1.5 bg-current rounded-full" />
                    <div className="funnel-level w-6 h-1.5 bg-current rounded-full" />
                    <div className="funnel-level w-3 h-1.5 bg-current rounded-full" />
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

        // Ensure animations are available if the user hovers
        const tl = gsap.timeline({ paused: true, defaults: { ease: "power2.out", duration: 0.5 } });

        if (item.type === 'nodes') {
            tl.to(card.querySelectorAll('.line-1, .line-2'), { strokeDashoffset: 0, duration: 0.8 }, 0)
                .to(card.querySelectorAll('.node-1, .node-2, .node-3'), { scale: 1.5, opacity: 1, stagger: 0.1 }, 0);
        }
        if (item.type === 'type') {
            tl.to(card.querySelectorAll('.type-line'), { width: "100%", stagger: 0.1 }, 0);
        }
        if (item.type === 'lock') {
            tl.to(card.querySelectorAll('.lock-shackle'), { y: -2 }, 0);
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
        if (item.type === 'people') {
            tl.to(card.querySelectorAll('[class^="person-"]'), { height: 24, stagger: 0.1 }, 0);
        }
        if (item.type === 'mail') {
            tl.to(card.querySelectorAll('.mail-flap'), { rotateX: 180, transformOrigin: 'top' }, 0);
        }
        if (item.type === 'funnel') {
            tl.to(card.querySelectorAll('.funnel-level'), { width: '100%', stagger: 0.1 }, 0);
        }

        const onEnter = () => tl.play();
        const onLeave = () => { tl.reverse(); if (item.type === 'waves') tl.seek(0).pause(); };

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
                <div ref={cardRef} className="w-full h-full flex flex-col justify-between p-3 md:p-4">
                    <div className="relative z-10 flex flex-col items-start gap-0.5">
                        <span className="font-bold text-xs md:text-sm tracking-tight leading-[0.95]">{item.label}</span>
                        {item.sub && <span className="font-bold text-xs md:text-sm tracking-tight leading-[0.95] opacity-90">{item.sub}</span>}
                    </div>

                    <div className="absolute inset-0 pointer-events-none">
                        <CardContent type={item.type} />
                    </div>
                </div>
            </TiltCard>
        </motion.div>
    );
};

export default function ZuwosEcosystemExplore() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 my-12 md:my-16 font-sans">
            <div className="flex justify-between items-center mb-10">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-graphite font-medium"
                >
                    <ArrowLeft size={20} />
                    Back to Ecosystem
                </button>
                <div className="w-[100px]" /> {/* Spacer for centering */}
            </div>

            <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 auto-rows-[100px] gap-2"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className={`${item.className} col-span-1 row-span-1`}
                    >
                        <AnimatedCard
                            item={item}
                            onClick={() => setActiveId(item.id)}
                        />
                    </div>
                ))}
            </motion.div>

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
                                if (item.id !== activeId) return null;
                                return (
                                    <motion.div
                                        key={item.id}
                                        layoutId={`card-${item.id}`}
                                        className={`
                                            pointer-events-auto w-full max-w-lg p-8 md:p-12
                                            ${item.color} ${item.text}
                                            shadow-2xl rounded-lg
                                            flex flex-col gap-6 relative overflow-hidden
                                        `}
                                    >
                                        <div className="flex justify-between items-start relative z-10">
                                            <div>
                                                <h3 className="text-4xl font-display font-black tracking-tight mb-2">{item.label}</h3>
                                                <p className="text-xl opacity-80 font-medium">{item.sub}</p>
                                            </div>
                                            <button onClick={() => setActiveId(null)} className="p-2 hover:bg-black/10 rounded-full transition-colors"><X size={32} /></button>
                                        </div>

                                        <div className="h-px w-full bg-current opacity-20" />

                                        <p className="text-2xl font-medium leading-relaxed opacity-90 relative z-10">
                                            {item.desc}
                                        </p>

                                        <div className="grid grid-cols-1 gap-3 mt-4 relative z-10 w-full">
                                            {item.features?.map((feat, i) => (
                                                <div key={i} className="flex items-start gap-3 opacity-90 font-medium">
                                                    <div className="mt-1 shrink-0">
                                                        <Check size={18} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-snug">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
