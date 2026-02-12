import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import TextRevealer from '../utils/TextRevealer';
import { useNavigate } from 'react-router-dom';


// --- Card Configuration ---
// Grid: 5x5. Center (3,3) is Logo.
// Layout designed to mimic a "Bentot/Masonry" style with mixed aspect ratios.
// 25 Cells Total. 18 Items.
// - 1 Big (2x2)
// - 2 Wide (2x1)
// - 2 Tall (1x2)
// - 13 Small (1x1) - including Logo

// --- Hook for Media Query ---
function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    });

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query, matches]);

    return matches;
}

const items = [
    // --- ROW 1 ---
    // (1,1)
    {
        id: 'asset', label: 'Asset', sub: '(Lifecycle Management)', color: 'bg-[#1C3144]', text: 'text-white', className: 'col-start-1 row-start-1', type: 'grid',
        desc: "Manage entire asset lifecycle from acquisition to disposal.",
        features: ["Tracking", "Maintenance", "Depreciation"]
    },
    // (1,2)
    {
        id: 'chat', label: 'Chat', sub: '', color: 'bg-[#FF6D00]', text: 'text-white', className: 'col-start-2 row-start-1', type: 'quotes',
        desc: "Omni-Channel communication platform that aligns individuals and teams towards larger organizational goals.",
        features: ["Instantly convert messages into internal and external tickets.", "NLP based conversion of chats into tasks & to-dos in project & task management", "Share & access channel-specific multimedia supported by a central repository"]
    },
    // (1,3)
    {
        id: 'accounting', label: 'Accounting', sub: '& Finance', color: 'bg-[#00897B]', text: 'text-white', className: 'col-start-3 row-start-1', type: 'grid',
        desc: "Unified accounting, book-keeping, finance, and cash flow management.",
        features: ["Clear end-to-end financial visibility", "Customize as per your business ecosystem", "Multi-device enablement (mobile, laptop, tab)"]
    },
    // (1,4)
    {
        id: 'hrms', label: 'HRMS', sub: '', color: 'bg-[#6200EA]', text: 'text-white', className: 'col-start-4 row-start-1', type: 'people',
        desc: "Complete employee lifecycle management from hire to retire.",
        features: ["Employee Experience Management", "Seamless Recruitment Journey", "Strategic Compliance Management"]
    },
    // (1,5)
    {
        id: 'crm', label: 'CRM', sub: '', color: 'bg-[#2962FF]', text: 'text-white', className: 'col-start-5 row-start-1', type: 'chart',
        desc: "Manage relationships and interactions via built-in CRM connected to workplace operations alternate to salesforce and zoho",
        features: ["End to end sales journey visualization", "Real time analytics & revenue forecasting", "360° Customer view"]
    },
    // (1,6)
    {
        id: 'procurement', label: 'Procurement', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', className: 'col-start-6 row-start-1', type: 'kanban',
        desc: "Streamline purchasing and supplier management.",
        features: ["PO Generation", "Approval Workflows", "Spend Analysis"]
    },
    // (1,7)
    {
        id: 'material', label: 'Material', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', className: 'col-start-7 row-start-1', type: 'grid',
        desc: "Optimize material flow and availability.",
        features: ["Stock Tracking", "Reordering", "Usage Reports"]
    },


    // --- ROW 2 ---
    // (2,1)
    {
        id: 'inventory', label: 'Inventory', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', className: 'col-start-1 row-start-2', type: 'grid',
        desc: "Track and control inventory levels efficiently.",
        features: ["Real-time Stock", "Audits", "Transfers"]
    },
    // (2,2)
    {
        id: 'channel', label: 'Channel', sub: '', color: 'bg-[#2962FF]', text: 'text-white', className: 'col-start-2 row-start-2', type: 'waves',
        desc: "Manage partner and distribution channels.",
        features: ["Partner Portal", "Incentives", "Performance"]
    },
    // (2,3)
    {
        id: 'community', label: 'Community', sub: '', color: 'bg-[#D50000]', text: 'text-white', className: 'col-start-3 row-start-2', type: 'nodes',
        desc: "Build engagement and connection via an internal community space alternate to meta for business",
        features: ["Foster a thriving work culture", "Analytics for Employees’ Positive Reinforcement", "Hall of Fame / Leaderboard"]
    },
    // (2,4)
    {
        id: 'projects', label: 'Project & Task', sub: 'Management', color: 'bg-[#00C853]', text: 'text-white', className: 'col-start-4 row-start-2', type: 'kanban',
        desc: "Plan, assign, track, and execute projects and tasks with complete visibility like jira",
        features: ["Enhanced productivity", "Clear ownership and accountability", "Direct linkage to performance dashboards"]
    },
    // (2,5)
    {
        id: 'sheets', label: 'Spreadsheets', sub: '', color: 'bg-[#C6FF00]', text: 'text-[#1C3144]', className: 'col-start-5 row-start-2', type: 'grid',
        desc: "Powerful Spreadsheets for data analysis and reporting as you do with excel",
        features: ["License free operations with ZUWOS", "Sovereign AI integration", "Easy collaboration & real-time synchronization"]
    },
    // (2,6)
    {
        id: 'contract', label: 'Contract and', sub: 'RFQ', color: 'bg-[#FF6D00]', text: 'text-white', className: 'col-start-6 row-start-2', type: 'lock',
        desc: "Manage contracts and RFQ processes.",
        features: ["Lifecycle Mgmt", "Templates", "Compliance"]
    },
    // (2,7)
    {
        id: 'utility', label: 'Utility', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', className: 'col-start-7 row-start-2', type: 'shapes',
        desc: "Monitor and manage utility consumption.",
        features: ["Energy", "Water", "Cost Tracking"]
    },


    // --- ROW 3 ---
    // (3,1)
    {
        id: 'digital-card', label: 'Digital', sub: 'Business Card', color: 'bg-[#6200EA]', text: 'text-white', className: 'col-start-1 row-start-3', type: 'type',
        desc: "Share your professional identity digitally.",
        features: ["QR Code", "Contact Save", "Branding"]
    },
    // (3,2)
    {
        id: 'personal-perf', label: 'Personal', sub: 'Performance', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', className: 'col-start-2 row-start-3', type: 'chart',
        desc: "Track your individual and team performance metrics and productivity outcomes.",
        features: ["Real-time performance visibility", "Tracking To-do’s, Task and Tickets", "Individual and team goals aligned"]
    },
    // (3,3)
    {
        id: 'calendar', label: 'Calendar', sub: '', color: 'bg-[#2962FF]', text: 'text-white', className: 'col-start-3 row-start-3', type: 'grid',
        desc: "Sync work, meetings, and workplace activities in one unified calendar.",
        features: ["Ai enabled smart scheduling", "Device-agnostic interface", "Synchronized across devices and platforms"]
    },
    // (3,4) - LOGO
    { id: 'LOGO', isLogo: true, className: 'col-start-4 col-span-1 row-start-3' },

    // (3,5)
    {
        id: 'presentations', label: 'Presentations', sub: '', color: 'bg-[#D81B60]', text: 'text-white', className: 'col-start-5 row-start-3', type: 'mail',
        desc: "Create and share engaging presentations without any hassles just like you do in powerpoint",
        features: ["License free operations with ZUWOS", "Integration with Sovereign AI", "Real-time Collaboration across teams"]
    },
    // (3,6)
    {
        id: 'vendor', label: 'Vendor', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', className: 'col-start-6 row-start-3', type: 'people',
        desc: "Manage vendors, services, and relationships from one unified platform the way you do at SAP Ariba",
        features: ["Advanced Vendor analytics driving efficiency, SLA compliance, accelerated RFQs", "AI based automated workflows for contracts, supplier discovery and compliances", "Multi-device control", "Set ESG criteria to align with sustainability commitments"]
    },
    // (3,7)
    {
        id: 'mailroom', label: 'Mailroom', sub: 'Management', color: 'bg-[#D50000]', text: 'text-white', className: 'col-start-7 row-start-3', type: 'mail',
        desc: "Track incoming and outgoing mail.",
        features: ["Scanning", "Notifications", "Routing"]
    },


    // --- ROW 4 ---
    // (4,1)
    {
        id: 'admin', label: 'Admin', sub: '', color: 'bg-[#00C853]', text: 'text-white', className: 'col-start-1 row-start-4', type: 'lock',
        desc: "System administration and configuration.",
        features: ["Users", "Permissions", "Settings"]
    },
    // (4,2)
    {
        id: 'data-privacy', label: 'Data Privacy', sub: '& Access Control', color: 'bg-[#1C3144]', text: 'text-white', className: 'col-start-2 row-start-4', type: 'lock',
        desc: "Control data & access across one centralized system, made just for your enterprise.",
        features: ["Stored On-Premise or in Private Cloud", "Secured Governance & DPDP Act complied", "Zero Lock-ins"]
    },
    // (4,3)
    {
        id: 'collaboration', label: 'Collaboration', sub: '', color: 'bg-[#FF6D00]', text: 'text-white', className: 'col-start-3 row-start-4', type: 'nodes',
        desc: "Work together seamlessly across teams.",
        features: ["Real-time", "Sharing", "Sync"]
    },
    // (4,4)
    {
        id: 'wallet', label: 'Wallets', sub: 'Redemption & Rewards', color: 'bg-[#00897B]', text: 'text-white', className: 'col-start-4 row-start-4', type: 'lock',
        desc: "Redefined incentive experience through live visibility via built-in wallet.",
        features: ["Real-time gratification", "Task-linked rewards", "Seamless redemption"]
    },
    // (4,5)
    {
        id: 'documents', label: 'Docs', sub: '', color: 'bg-[#2962FF]', text: 'text-white', className: 'col-start-5 row-start-4', type: 'kanban',
        desc: "Create, manage, and collaborate on documents, without friction, Alternate to word",
        features: ["License free operations with ZUWOS", "Sovereign AI integration", "Built-in Templates"]
    },
    // (4,6)
    {
        id: 'cafeteria', label: 'F&B', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', className: 'col-start-6 row-start-4', type: 'funnel',
        desc: "Seamlessly manage Cafeteria and F&B services like HungerBox",
        features: ["Integrated with meeting rooms for quick ordering", "Hassle-free ordering without waiting", "Data-driven inventory management"]
    },
    // (4,7)
    {
        id: 'parking', label: 'Parking', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', className: 'col-start-7 row-start-4', type: 'grid',
        desc: "Smart parking slot allocation.",
        features: ["Booking", "Real-time", "Allocations"]
    },


    // --- ROW 5 ---
    // (5,1)
    {
        id: 'role', label: 'Role and', sub: 'Access Control', color: 'bg-[#D50000]', text: 'text-white', className: 'col-start-1 row-start-5', type: 'lock',
        desc: "Manage user roles and access permissions.",
        features: ["RBAC", "Security", "Audit"]
    },
    // (5,2)
    {
        id: 'cloud', label: 'Storage', sub: 'Drive', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', className: 'col-start-2 row-start-5', type: 'cloud',
        desc: "Keep all your files and documents secure, organised, and instantly accessible. Gdrive",
        features: ["Role Based Access Control", "Centralized Multimedia repository", "Data Sovereignty, hosted in private infrastructure"]
    },
    // (5,3)
    {
        id: 'tickets', label: 'Tickets', sub: '', color: 'bg-[#304FFE]', text: 'text-white', className: 'col-start-3 row-start-5', type: 'type',
        desc: "Track and resolve issues efficiently.",
        features: ["Logging", "Status", "Resolution"]
    },
    // (5,4)
    {
        id: 'helpdesk', label: 'Helpdesk', sub: '', color: 'bg-[#00C853]', text: 'text-white', className: 'col-start-4 row-start-5', type: 'shapes',
        desc: "Raise, track, and resolve admin, HR, IT, and facility support requests seamlessly the way you do in freshdesk",
        features: ["Built in AI with Live chatbot", "Advanced analytics for Ticket Response", "Omnichannel support"]
    },
    // (5,5)
    {
        id: 'visitor', label: 'Visitor', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', className: 'col-start-5 row-start-5', type: 'people',
        desc: "Deliver seamless visitor experiences, from entry to exit similar to veris",
        features: ["Auto Check-Ins & Check-Outs", "AI-based live movement tracking", "Automated host & security notifications"]
    },
    // (5,6)
    {
        id: 'meeting', label: 'Meeting Room', sub: 'Booking', color: 'bg-[#1C3144]', text: 'text-white', className: 'col-start-6 row-start-5', type: 'curve',
        desc: "Book meeting spaces effortlessly.",
        features: ["Scheduling", "Availability", "Display"]
    },
    // (5,7)
    {
        id: 'seat', label: 'Space', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', className: 'col-start-7 row-start-5', type: 'shapes',
        desc: "Plan, allocate, and manage workplace seating and spaces intelligently.",
        features: ["Space occupancy & utilization tracking", "Auto check-ins & reservation systems", "Create or self-book roasters (Seats)"]
    },
];

// --- GSAP Animated Content Components ---
// Reusing same content components for visual consistency
const CardContent = ({ type }: { type: string }) => {
    switch (type) {
        case 'nodes':
            return (
                <svg className="w-full h-full absolute bottom-0 right-0 p-3 opacity-60" viewBox="0 0 100 100" style={{ maskImage: 'linear-gradient(to top left, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top left, black 60%, transparent 100%)' }}>
                    <circle className="node-1" cx="20" cy="50" r="3" fill="currentColor" opacity="0.8" />
                    <circle className="node-2" cx="80" cy="20" r="3" fill="currentColor" opacity="0.8" />
                    <circle className="node-3" cx="80" cy="80" r="3" fill="currentColor" opacity="0.8" />
                    <path className="line-1" d="M20 50 L80 20" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                    <path className="line-2" d="M20 50 L80 80" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            );
        case 'quotes':
            return (
                <div className="absolute bottom-3 right-3 flex items-center justify-center opacity-40">
                    <div className="quote-left text-5xl font-serif absolute -top-4 -left-4">“</div>
                    <div className="quote-right text-5xl font-serif absolute top-0 left-0">”</div>
                </div>
            );
        case 'type':
            return (
                <div className="absolute inset-0 flex items-end justify-end p-4 opacity-70">
                    <div className="flex flex-col gap-1.5 items-end">
                        <div className="type-line w-12 h-1.5 bg-current rounded-full" />
                        <div className="type-line w-8 h-1.5 bg-current rounded-full" />
                        <div className="type-line w-16 h-1.5 bg-current rounded-full" />
                    </div>
                </div>
            );
        case 'lock':
            return (
                <div className="absolute bottom-4 right-4 flex items-center justify-center opacity-40">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect className="lock-body" x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path className="lock-shackle" d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" />
                    </svg>
                </div>
            );
        case 'curve':
            return (
                <svg className="w-full h-full absolute inset-0 p-3 opacity-60" viewBox="0 0 100 100" style={{ maskImage: 'linear-gradient(to top left, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top left, black 70%, transparent 100%)' }}>
                    <path className="bezier-curve" d="M10 90 Q 50 10 90 90" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            );
        case 'grid':
            return (
                <div className="absolute bottom-3 right-3 grid grid-cols-3 grid-rows-3 gap-1 p-1 opacity-50 transform scale-90 origin-bottom-right">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className={`grid-cell-${i} w-2 h-2 bg-current rounded-[1px]`} />
                    ))}
                </div>
            );
        case 'waves':
            return (
                <div className="absolute bottom-5 right-5 flex items-center justify-center opacity-40">
                    <div className="wave-ring absolute w-12 h-12 border-2 border-current rounded-full opacity-0" />
                    <div className="wave-ring absolute w-8 h-8 border-2 border-current rounded-full opacity-0" />
                </div>
            )
        case 'kanban':
            return (
                <div className="absolute inset-0 flex gap-1.5 p-3 items-end justify-end opacity-60">
                    <div className="kanban-col w-3 h-8 bg-current opacity-40 rounded-sm" />
                    <div className="kanban-col w-3 h-12 bg-current opacity-60 rounded-sm" />
                    <div className="kanban-col w-3 h-5 bg-current opacity-40 rounded-sm" />
                </div>
            )
        case 'chart':
            return (
                <svg className="w-full h-full absolute inset-0 p-3 opacity-60" viewBox="0 0 100 100" style={{ maskImage: 'linear-gradient(to top left, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to top left, black 70%, transparent 100%)' }}>
                    <path className="chart-line" d="M10 90 L30 60 L50 70 L70 30 L90 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1" strokeDasharray="1" strokeDashoffset="1" />
                </svg>
            )
        case 'cloud':
            return (
                <div className="absolute bottom-4 right-4 flex items-center justify-center opacity-50">
                    <svg className="cloud-icon w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C11.6667 2 11.3333 2.01667 11 2.05C10.7 7.55 6.2 12 0.75 12C0.25 12 0 12.25 0 12.75V17C0 20.3 2.7 23 6 23H18C21.3 23 24 20.3 24 17V14C24 10.7 21.3 8 18 8H17C17 4.7 14.3 2 12 2Z" />
                    </svg>
                </div>
            )
        case 'people':
            return (
                <div className="absolute inset-0 flex items-end justify-end gap-1 p-3 opacity-60">
                    <div className="person-1 w-3 h-5 bg-current opacity-60 rounded-t-full" />
                    <div className="person-2 w-3 h-8 bg-current opacity-80 rounded-t-full" />
                    <div className="person-3 w-3 h-4 bg-current opacity-60 rounded-t-full" />
                </div>
            )
        case 'mail':
            return (
                <div className="absolute bottom-4 right-4 flex items-center justify-center opacity-50">
                    <div className="mail-env w-8 h-5 border-2 border-current rounded-sm relative overflow-hidden">
                        <div className="mail-flap absolute top-0 left-0 w-full h-full border-b-2 border-current origin-top transform rotate-0" />
                    </div>
                </div>
            )
        case 'funnel':
            return (
                <div className="absolute bottom-4 right-4 flex flex-col items-center justify-center gap-1 opacity-50">
                    <div className="funnel-level w-8 h-1.5 bg-current rounded-full" />
                    <div className="funnel-level w-6 h-1.5 bg-current rounded-full" />
                    <div className="funnel-level w-3 h-1.5 bg-current rounded-full" />
                </div>
            )
        case 'shapes':
            return (
                <div className="absolute bottom-4 right-4 flex items-center justify-center gap-2 opacity-50">
                    <div className="shape-1 w-4 h-4 border-2 border-current rounded-sm" />
                    <div className="shape-2 w-4 h-4 border-2 border-current rounded-full" />
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

        const tl = gsap.timeline({ paused: true, defaults: { ease: "power3.out", duration: 0.8 } });

        // Specific Content Animations - SCALED DOWN FOR COMPACT GRID
        if (item.type === 'nodes') {
            tl.to(card.querySelectorAll('.line-1, .line-2'), { strokeDashoffset: 0, duration: 1.2 }, 0)
                .to(card.querySelectorAll('.node-1, .node-2, .node-3'), { scale: 1.5, opacity: 1, stagger: 0.1 }, 0);
        }
        if (item.type === 'quotes') {
            tl.to(card.querySelectorAll('.quote-left'), { x: 2, y: 2 }, 0)
                .to(card.querySelectorAll('.quote-right'), { x: -2, y: -2 }, 0);
        }
        if (item.type === 'type') {
            tl.to(card.querySelectorAll('.type-line'), { width: "100%", stagger: 0.1 }, 0);
        }
        if (item.type === 'lock') {
            tl.to(card.querySelectorAll('.lock-shackle'), { y: -2 }, 0);
        }
        if (item.type === 'curve') {
            tl.fromTo(card.querySelectorAll('.bezier-curve'), { attr: { d: "M10 90 Q 10 90 90 90" } }, { attr: { d: "M10 90 Q 50 10 90 90" }, duration: 1, ease: "back.out(1.2)" }, 0);
        }
        if (item.type === 'grid') {
            tl.to(card.querySelectorAll('[class^="grid-cell-"]'), { scale: 0.5, opacity: 0.8, stagger: { amount: 0.3, grid: [3, 3], from: "center" } }, 0);
        }
        if (item.type === 'waves') {
            tl.fromTo(card.querySelectorAll('.wave-ring'), { scale: 0, opacity: 1 }, { scale: 1.5, opacity: 0, duration: 1.5, stagger: 0.4, repeat: -1 }, 0);
        }
        if (item.type === 'kanban') {
            tl.to(card.querySelectorAll('.kanban-col'), { height: '100%', stagger: 0.1 }, 0);
        }
        if (item.type === 'chart') {
            tl.to(card.querySelectorAll('.chart-line'), { strokeDashoffset: 0, duration: 1.2 }, 0);
        }
        if (item.type === 'cloud') {
            tl.to(card.querySelectorAll('.cloud-icon'), { scale: 1.1, y: -2 }, 0);
        }
        if (item.type === 'people') {
            tl.to(card.querySelectorAll('[class^="person-"]'), { height: 16, stagger: 0.1 }, 0);
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

const ZuwosLogoCard = ({ item }: { item: any }) => {
    return (
        <div
            className={`
                ${item.className}
                z-10 relative perspective-1000 group
            `}
            style={{ perspective: '1200px' }}
        >
            <motion.div
                className="w-full h-full relative transform-style-3d text-center"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: [0, 360] }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear"
                }}
            >
                {/* --- CLAY SLAB STACK (Extra Thinner Version) --- */}
                {/* 
                    Reduced to 12 layers for an even thinner profile.
                    Spread: -6x to +6px.
                */}
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 bg-[#0047FF] rounded-[2rem] border-[0.5px] border-white/5"
                        style={{
                            transform: `translateZ(${(i - 6) * 1.2}px)`,
                            width: '100%',
                            height: '100%',
                        }}
                    />
                ))}

                {/* FRONT FACE (Cap) */}
                <div
                    className="absolute inset-0 bg-blue-600 rounded-[2rem] flex items-center justify-center overflow-hidden backface-hidden"
                    style={{
                        transform: 'translateZ(12px)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    {/* Soft Matte Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0057FF] to-[#0038A8]" />

                    <div className="relative z-10 flex items-center justify-center transform-style-3d">
                        <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-widest drop-shadow-md">
                            ZUWOS
                        </h2>
                    </div>
                </div>

                {/* BACK FACE (Cap) */}
                <div
                    className="absolute inset-0 bg-blue-700 rounded-[2rem] flex items-center justify-center overflow-hidden backface-hidden"
                    style={{
                        transform: 'rotateY(180deg) translateZ(12px)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#0038A8] to-[#001f5c]" />
                    <div className="relative z-10 text-center px-4 transform-style-3d">
                        <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight leading-none mb-1">
                            One OS.
                        </h3>
                        <p className="text-sm font-medium text-white/80 mt-1">
                            Infinite Possibilities
                        </p>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};



export default function ZuwosEcosystem() {
    const navigate = useNavigate();
    const [activeId, setActiveId] = useState<string | null>(null);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 my-12 md:my-16 font-sans">
            <div className="flex justify-center mb-10">
                <TextRevealer
                    text="One OS. Infinite Possibilities."
                    className="text-display-sm md:text-display-md font-display font-bold tracking-tighter text-[#162A4C] text-center justify-center"
                />
            </div>
            {/* ENTIRE GRID COORDINATED REVEAL */}
            {isDesktop ? (
                /* DESKTOP LAYOUT */
                <motion.div
                    className="grid grid-cols-7 auto-rows-[100px] gap-2"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {items.map((item) => {
                        // Logo Specifics
                        if (item.isLogo) {
                            return <ZuwosLogoCard key="LOGO" item={item} />;
                        }

                        return (
                            <div
                                key={item.id}
                                className={`${item.className} col-span-1 row-span-1`}
                            >
                                <AnimatedCard
                                    item={item}
                                    onClick={() => item.label && setActiveId(item.id)}
                                />
                            </div>
                        );
                    })}
                </motion.div>
            ) : (
                /* MOBILE LAYOUT (Stacked) */
                <div className="flex flex-col gap-4 pb-20">
                    {items.map((item) => {
                        // Mobile Logo
                        if (item.isLogo) {
                            return (
                                <div key="LOGO" className="w-full h-[180px] flex items-center justify-center">
                                    <ZuwosLogoCard item={{ className: 'w-full h-full' }} />
                                </div>
                            );
                        }

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="w-full h-[180px]"
                            >
                                <AnimatedCard
                                    item={item}
                                    onClick={() => item.label && setActiveId(item.id)}
                                />
                            </motion.div>
                        );
                    })}
                </div>
            )}



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
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 relative z-10 w-full">
                                            {item.features?.map((feat, i) => (
                                                <div key={i} className={`flex items-start gap-3 opacity-90 font-medium ${feat.length > 40 ? 'col-span-1 md:col-span-2' : ''}`}>
                                                    <div className="mt-1 shrink-0">
                                                        <Check size={18} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-snug">{feat}</span>
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

            <div className="flex justify-center mt-12 md:mt-16">
                <button
                    onClick={() => navigate('/ecosystem-explore')}
                    className="
                        group relative overflow-hidden rounded-full
                        px-8 py-3 bg-[#1C3144] text-white font-medium text-lg
                        transition-transform hover:scale-105 active:scale-95
                        flex items-center gap-2
                    "
                >
                    <span className="relative z-10">Explore More</span>
                    <ArrowUpRight className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={20} />
                    <div className="absolute inset-0 bg-[#FF6D00] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
                </button>
            </div>
        </div >
    );
}
