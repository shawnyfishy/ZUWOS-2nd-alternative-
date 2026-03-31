
import { useRef, useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { X, Check, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { TiltCard } from '../ui/TiltCard';
import { useNavigate } from 'react-router-dom';

// ============================================================
// COMBINED CARD DATA: 35 Ecosystem + 20 Explore = 55 Total
// ============================================================

// --- Original Ecosystem Cards (34 data cards + 1 LOGO) ---
const ecosystemItems = [
    {
        id: 'asset', label: 'Asset', sub: '(Lifecycle Management)', color: 'bg-[#1C3144]', text: 'text-white', type: 'grid',
        desc: "Manage entire asset lifecycle from acquisition to disposal.",
        features: ["Tracking", "Maintenance", "Depreciation"]
    },
    {
        id: 'chat', label: 'Chat', sub: '', color: 'bg-[#FF6D00]', text: 'text-white', type: 'quotes',
        desc: "Omni-Channel communication platform that aligns individuals and teams towards larger organizational goals.",
        features: ["Instantly convert messages into internal and external tickets.", "NLP based conversion of chats into tasks & to-dos in project & task management", "Share & access channel-specific multimedia supported by a central repository"]
    },
    {
        id: 'accounting', label: 'Accounting', sub: '& Finance', color: 'bg-[#00897B]', text: 'text-white', type: 'grid',
        desc: "Unified accounting, book-keeping, finance, and cash flow management.",
        features: ["Clear end-to-end financial visibility", "Customize as per your business ecosystem", "Multi-device enablement (mobile, laptop, tab)"]
    },
    {
        id: 'hrms', label: 'HRMS', sub: '', color: 'bg-[#6200EA]', text: 'text-white', type: 'people',
        desc: "Complete employee lifecycle management from hire to retire.",
        features: ["Employee Experience Management", "Seamless Recruitment Journey", "Strategic Compliance Management"]
    },
    {
        id: 'crm', label: 'CRM', sub: '', color: 'bg-[#2962FF]', text: 'text-white', type: 'chart',
        desc: "Manage relationships and interactions via built-in CRM connected to workplace operations alternate to salesforce and zoho",
        features: ["End to end sales journey visualization", "Real time analytics & revenue forecasting", "360° Customer view"]
    },
    {
        id: 'procurement-eco', label: 'Procurement', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', type: 'kanban',
        desc: "Streamline purchasing and supplier management.",
        features: ["PO Generation", "Approval Workflows", "Spend Analysis"]
    },
    {
        id: 'material', label: 'Material', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', type: 'grid',
        desc: "Optimize material flow and availability.",
        features: ["Stock Tracking", "Reordering", "Usage Reports"]
    },
    {
        id: 'inventory', label: 'Inventory', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', type: 'grid',
        desc: "Track and control inventory levels efficiently.",
        features: ["Real-time Stock", "Audits", "Transfers"]
    },
    {
        id: 'channel', label: 'Channel', sub: '', color: 'bg-[#2962FF]', text: 'text-white', type: 'waves',
        desc: "Manage partner and distribution channels.",
        features: ["Partner Portal", "Incentives", "Performance"]
    },
    {
        id: 'community', label: 'Community', sub: '', color: 'bg-[#D50000]', text: 'text-white', type: 'nodes',
        desc: "Build engagement and connection via an internal community space alternate to meta for business",
        features: ["Foster a thriving work culture", "Analytics for Employees' Positive Reinforcement", "Hall of Fame / Leaderboard"]
    },
    {
        id: 'projects', label: 'Project & Task', sub: 'Management', color: 'bg-[#00C853]', text: 'text-white', type: 'kanban',
        desc: "Plan, assign, track, and execute projects and tasks with complete visibility like jira",
        features: ["Enhanced productivity", "Clear ownership and accountability", "Direct linkage to performance dashboards"]
    },
    {
        id: 'sheets', label: 'Spreadsheets', sub: '', color: 'bg-[#C6FF00]', text: 'text-[#1C3144]', type: 'grid',
        desc: "Powerful Spreadsheets for data analysis and reporting as you do with excel",
        features: ["License free operations with ZUWOS", "Sovereign AI integration", "Easy collaboration & real-time synchronization"]
    },
    {
        id: 'contract', label: 'Contract and', sub: 'RFQ', color: 'bg-[#FF6D00]', text: 'text-white', type: 'lock',
        desc: "Manage contracts and RFQ processes.",
        features: ["Lifecycle Mgmt", "Templates", "Compliance"]
    },
    {
        id: 'utility', label: 'Utility', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', type: 'shapes',
        desc: "Monitor and manage utility consumption.",
        features: ["Energy", "Water", "Cost Tracking"]
    },
    {
        id: 'digital-card', label: 'Digital', sub: 'Business Card', color: 'bg-[#6200EA]', text: 'text-white', type: 'type',
        desc: "Share your professional identity digitally.",
        features: ["QR Code", "Contact Save", "Branding"]
    },
    {
        id: 'personal-perf', label: 'Personal', sub: 'Performance', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', type: 'chart',
        desc: "Track your individual and team performance metrics and productivity outcomes.",
        features: ["Real-time performance visibility", "Tracking To-do's, Task and Tickets", "Individual and team goals aligned"]
    },
    {
        id: 'calendar', label: 'Calendar', sub: '', color: 'bg-[#2962FF]', text: 'text-white', type: 'grid',
        desc: "Sync work, meetings, and workplace activities in one unified calendar.",
        features: ["Ai enabled smart scheduling", "Device-agnostic interface", "Synchronized across devices and platforms"]
    },
    {
        id: 'presentations', label: 'Presentations', sub: '', color: 'bg-[#D81B60]', text: 'text-white', type: 'mail',
        desc: "Create and share engaging presentations without any hassles just like you do in powerpoint",
        features: ["License free operations with ZUWOS", "Integration with Sovereign AI", "Real-time Collaboration across teams"]
    },
    {
        id: 'vendor', label: 'Vendor', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', type: 'people',
        desc: "Manage vendors, services, and relationships from one unified platform the way you do at SAP Ariba",
        features: ["Advanced Vendor analytics driving efficiency, SLA compliance, accelerated RFQs", "AI based automated workflows for contracts, supplier discovery and compliances", "Multi-device control", "Set ESG criteria to align with sustainability commitments"]
    },
    {
        id: 'mailroom', label: 'Mailroom', sub: 'Management', color: 'bg-[#D50000]', text: 'text-white', type: 'mail',
        desc: "Track incoming and outgoing mail.",
        features: ["Scanning", "Notifications", "Routing"]
    },
    {
        id: 'admin-eco', label: 'Admin', sub: '', color: 'bg-[#00C853]', text: 'text-white', type: 'lock',
        desc: "System administration and configuration.",
        features: ["Users", "Permissions", "Settings"]
    },
    {
        id: 'data-privacy', label: 'Data Privacy', sub: '& Access Control', color: 'bg-[#1C3144]', text: 'text-white', type: 'lock',
        desc: "Control data & access across one centralized system, made just for your enterprise.",
        features: ["Stored On-Premise or in Private Cloud", "Secured Governance & DPDP Act complied", "Zero Lock-ins"]
    },
    {
        id: 'collaboration', label: 'Collaboration', sub: '', color: 'bg-[#FF6D00]', text: 'text-white', type: 'nodes',
        desc: "Work together seamlessly across teams.",
        features: ["Real-time", "Sharing", "Sync"]
    },
    {
        id: 'wallet', label: 'Wallets', sub: 'Redemption & Rewards', color: 'bg-[#00897B]', text: 'text-white', type: 'lock',
        desc: "Redefined incentive experience through live visibility via built-in wallet.",
        features: ["Real-time gratification", "Task-linked rewards", "Seamless redemption"]
    },
    {
        id: 'documents', label: 'Docs', sub: '', color: 'bg-[#2962FF]', text: 'text-white', type: 'kanban',
        desc: "Create, manage, and collaborate on documents, without friction, Alternate to word",
        features: ["License free operations with ZUWOS", "Sovereign AI integration", "Built-in Templates"]
    },
    {
        id: 'cafeteria', label: 'F&B', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', type: 'funnel',
        desc: "Seamlessly manage Cafeteria and F&B services like HungerBox",
        features: ["Integrated with meeting rooms for quick ordering", "Hassle-free ordering without waiting", "Data-driven inventory management"]
    },
    {
        id: 'parking', label: 'Parking', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', type: 'grid',
        desc: "Smart parking slot allocation.",
        features: ["Booking", "Real-time", "Allocations"]
    },
    // --- LOGO PLACEHOLDER (will be inserted at center) ---
    {
        id: 'role', label: 'Role and', sub: 'Access Control', color: 'bg-[#D50000]', text: 'text-white', type: 'lock',
        desc: "Manage user roles and access permissions.",
        features: ["RBAC", "Security", "Audit"]
    },
    {
        id: 'cloud', label: 'Storage', sub: 'Drive', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', type: 'cloud',
        desc: "Keep all your files and documents secure, organised, and instantly accessible. Gdrive",
        features: ["Role Based Access Control", "Centralized Multimedia repository", "Data Sovereignty, hosted in private infrastructure"]
    },
    {
        id: 'tickets', label: 'Tickets', sub: '', color: 'bg-[#304FFE]', text: 'text-white', type: 'type',
        desc: "Track and resolve issues efficiently.",
        features: ["Logging", "Status", "Resolution"]
    },
    {
        id: 'helpdesk', label: 'Helpdesk', sub: '', color: 'bg-[#00C853]', text: 'text-white', type: 'shapes',
        desc: "Raise, track, and resolve admin, HR, IT, and facility support requests seamlessly the way you do in freshdesk",
        features: ["Built in AI with Live chatbot", "Advanced analytics for Ticket Response", "Omnichannel support"]
    },
    {
        id: 'visitor', label: 'Visitor', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', type: 'people',
        desc: "Deliver seamless visitor experiences, from entry to exit similar to veris",
        features: ["Auto Check-Ins & Check-Outs", "AI-based live movement tracking", "Automated host & security notifications"]
    },
    {
        id: 'meeting', label: 'Meeting Room', sub: 'Booking', color: 'bg-[#1C3144]', text: 'text-white', type: 'curve',
        desc: "Book meeting spaces effortlessly.",
        features: ["Scheduling", "Availability", "Display"]
    },
    {
        id: 'seat', label: 'Space', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', type: 'shapes',
        desc: "Plan, allocate, and manage workplace seating and spaces intelligently.",
        features: ["Space occupancy & utilization tracking", "Auto check-ins & reservation systems", "Create or self-book roasters (Seats)"]
    },
];

// --- Original Explore Page Cards (20 cards) ---
const exploreItems = [
    {
        id: 'hoto', label: 'HOTO', sub: '(Handover Takeover)', color: 'bg-[#1C3144]', text: 'text-white', type: 'grid',
        desc: "Seamless transition of assets and responsibilities.",
        features: ["Asset Verification", "Documentation", "Sign-offs"]
    },
    {
        id: 'fitout', label: 'Fitout', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', type: 'kanban',
        desc: "Manage workspace fit-out projects start to finish.",
        features: ["Design Approval", "Vendor Coordination", "Progress Tracking"]
    },
    {
        id: 'snagging', label: 'Snagging', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', type: 'kanban',
        desc: "Identify and resolve defects efficiently.",
        features: ["Photo Capture", "Location Tagging", "Closure Workflow"]
    },
    {
        id: 'amc', label: 'AMC', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', type: 'type',
        desc: "Track Annual Maintenance Contracts comprehensively.",
        features: ["Renewals", "SLA Monitoring", "Vendor Performance"]
    },
    {
        id: 'audits', label: 'Audits', sub: '', color: 'bg-[#2962FF]', text: 'text-white', type: 'type',
        desc: "Conduct systematic inspections and audits.",
        features: ["Checklists", "Compliance", "Scoring"]
    },
    {
        id: 'ptw', label: 'Permit', sub: 'to Work', color: 'bg-[#D81B60]', text: 'text-white', type: 'lock',
        desc: "Ensure safety with digital work permits.",
        features: ["Approvals", "Risk Assessment", "Validity Tracking"]
    },
    {
        id: 'safety', label: 'Safety', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', type: 'lock',
        desc: "Prioritize workplace safety protocols.",
        features: ["Incident Reporting", "Training", "Emergency Plans"]
    },
    {
        id: 'incident', label: 'Incident', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', type: 'waves',
        desc: "Rapid response and resolution for incidents.",
        features: ["Logging", "Investigation", "CAPA"]
    },
    {
        id: 'waste', label: 'Waste', sub: 'Management', color: 'bg-[#2962FF]', text: 'text-white', type: 'nodes',
        desc: "Track and optimize waste disposal processes.",
        features: ["Categorization", "Recycling", "Vendor Manifests"]
    },
    {
        id: 'survey', label: 'Survey', sub: '', color: 'bg-[#D50000]', text: 'text-white', type: 'funnel',
        desc: "Gather feedback to improve workplace experience.",
        features: ["Custom Forms", "Analytics", "Anonymous Feedback"]
    },
    {
        id: 'todo', label: 'To Do', sub: 'Management', color: 'bg-[#00C853]', text: 'text-white', type: 'kanban',
        desc: "Organize tasks and priorities effectively.",
        features: ["Deadlines", "Reminders", "Collaboration"]
    },
    {
        id: 'utility-meter', label: 'Utility', sub: 'Meter Reading', color: 'bg-[#C6FF00]', text: 'text-[#1C3144]', type: 'chart',
        desc: "Automated and manual utility meter tracking.",
        features: ["Electricity", "Water", "Gas"]
    },
    {
        id: 'patrolling', label: 'Patrolling', sub: 'Management', color: 'bg-[#FF6D00]', text: 'text-white', type: 'nodes',
        desc: "Monitor security patrols and guard tours.",
        features: ["Checkpoints", "QR Scanning", "Incident Reporting"]
    },
    {
        id: 'staff-entry', label: 'Staff Entry', sub: 'Management', color: 'bg-[#00897B]', text: 'text-white', type: 'people',
        desc: "Secure and streamlined staff access control.",
        features: ["Biometrics", "Attendance", "Access Logs"]
    },
    {
        id: 'gatepass', label: 'Gatepass', sub: 'Management', color: 'bg-[#6200EA]', text: 'text-white', type: 'mail',
        desc: "Control movement of materials and visitors.",
        features: ["Returnable", "Non-Returnable", "Digital Approvals"]
    },
    {
        id: 'osr', label: 'OSR', sub: 'Management', color: 'bg-[#FFD600]', text: 'text-[#1C3144]', type: 'grid',
        desc: "Occupancy Service Request management.",
        features: ["Request Flow", "SLA Tracking", "Feedback"]
    },
    {
        id: 'booking', label: 'Booking', sub: 'Management', color: 'bg-[#2962FF]', text: 'text-white', type: 'grid',
        desc: "Universal booking system for all resources.",
        features: ["Desks", "Rooms", "Parking"]
    },
    {
        id: 'lease', label: 'Lease', sub: 'Management', color: 'bg-[#D81B60]', text: 'text-white', type: 'type',
        desc: "Manage property leases and critical dates.",
        features: ["Contracts", "Renewals", "Payments"]
    },
    {
        id: 'water-mgmt', label: 'Water', sub: 'Management', color: 'bg-[#00E5FF]', text: 'text-[#1C3144]', type: 'waves',
        desc: "Monitor water compatibility and usage.",
        features: ["Quality Checks", "Consumption", "Alerts"]
    },
    {
        id: 'energy-mgmt', label: 'Energy', sub: 'Management', color: 'bg-[#D50000]', text: 'text-white', type: 'chart',
        desc: "Track and optimize energy consumption.",
        features: ["Real-time Monitoring", "Savings Analysis", "Carbon Footprint"]
    },
];

// Build final combined array: first half of ecosystem, LOGO, second half of ecosystem, then explore cards
// Total: 34 ecosystem + 1 LOGO + 20 explore = 55
const LOGO_ITEM = { id: 'LOGO', isLogo: true };

// Insert logo at center position
// 7-column grid: 55 items = 8 rows. Center = row 4, col 4 = index 24 (0-indexed)
const allDataCards = [...ecosystemItems, ...exploreItems];
const getLogoIndex = (width: number) => {
    if (width < 640) return 28; // cols-3, row 10, col 2 -> (9*3 + 1)
    if (width < 768) return 26; // cols-4, row 7, col 3 -> (6*4 + 2)
    if (width < 1024) return 27; // cols-5, row 6, col 3 -> (5*5 + 2)
    return 24; // cols-7, row 4, col 4 -> (3*7 + 3)
};

// --- GSAP Animated Content Components ---
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
                    <div className="quote-left text-5xl font-serif absolute -top-4 -left-4">\u201C</div>
                    <div className="quote-right text-5xl font-serif absolute top-0 left-0">\u201D</div>
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
            layoutId={`explore-card-${item.id}`}
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

// --- Rotating ZUWOS Logo Card ---
const ZuwosLogoCard = () => {
    return (
        <div
            className="z-10 relative perspective-1000 group w-full h-full"
            style={{ perspective: '1200px' }}
        >
            {/* Ambient Aura */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2962FF]/40 to-[#00C853]/30 blur-3xl opacity-60 rounded-full transform scale-125 -z-10" />

            <motion.div
                className="w-full h-full relative transform-style-3d text-center"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: [0, -360] }}
                transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "linear"
                }}
            >
                {/* Clay Slab Stack */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 bg-[#0047FF] rounded-[2rem] border-[0.5px] border-white/5"
                        style={{
                            transform: `translateZ(${(i - 15) * 0.4}px)`,
                            width: '100%',
                            height: '100%',
                        }}
                    />
                ))}

                {/* FRONT FACE */}
                <div
                    className="absolute inset-0 bg-blue-600 rounded-[2rem] flex items-center justify-center overflow-hidden backface-hidden"
                    style={{
                        transform: 'translateZ(6px)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0057FF] to-[#0038A8]" />
                    <div className="relative z-10 flex items-center justify-center transform-style-3d">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white tracking-widest drop-shadow-md">
                            ZUWOS
                        </h2>
                    </div>
                </div>

                {/* BACK FACE */}
                <div
                    className="absolute inset-0 bg-blue-700 rounded-[2rem] flex items-center justify-center overflow-hidden backface-hidden"
                    style={{
                        transform: 'rotateY(180deg) translateZ(6px)',
                        backfaceVisibility: 'hidden'
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-bl from-[#0038A8] to-[#001f5c]" />
                    <div className="relative z-10 text-center px-4 transform-style-3d">
                        <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold text-white tracking-tight leading-none mb-1">
                            One OS.
                        </h3>
                        <p className="text-xs md:text-sm font-medium text-white/80 mt-1">
                            Infinite Possibilities
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default function ZuwosEcosystemExplore() {
    const [activeId, setActiveId] = useState<string | null>(null);
    const navigate = useNavigate();

    const [logoIndex, setLogoIndex] = useState(() => getLogoIndex(typeof window !== 'undefined' ? window.innerWidth : 1024));

    useEffect(() => {
        const handleResize = () => setLogoIndex(getLogoIndex(window.innerWidth));
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const allItems: any[] = useMemo(() => [
        ...allDataCards.slice(0, logoIndex),
        LOGO_ITEM,
        ...allDataCards.slice(logoIndex),
    ], [logoIndex]);

    return (
        <div className="w-full max-w-[1400px] mx-auto px-4 py-16 md:py-24 font-sans">
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

            {/* Title */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tighter text-[#162A4C]">
                    The Complete ZUWOS Ecosystem
                </h1>
                <p className="text-lg md:text-xl text-graphite/60 mt-4 max-w-2xl mx-auto">
                    55 integrated modules. One unified platform.
                </p>
            </div>

            {/* Grid: 7 columns for desktop, 55 cards + logo in exact center */}
            <motion.div
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 auto-rows-[90px] md:auto-rows-[100px] gap-2"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.03,
                        }
                    }
                }}
            >
                {allItems.map((item) => {
                    // Logo card
                    if (item.isLogo) {
                        return (
                            <motion.div
                                key="LOGO"
                                className="col-span-1 row-span-1 z-20"
                                variants={{
                                    hidden: { scale: 0, opacity: 0 },
                                    visible: {
                                        scale: 1,
                                        opacity: 1,
                                        transition: { type: "spring", bounce: 0.5, duration: 1.2 }
                                    }
                                }}
                            >
                                <ZuwosLogoCard />
                            </motion.div>
                        );
                    }

                    return (
                        <motion.div
                            key={item.id}
                            className="col-span-1 row-span-1 relative z-10"
                            variants={{
                                hidden: { y: 40, opacity: 0, scale: 0.9 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
                                }
                            }}
                        >
                            <AnimatedCard
                                item={item}
                                onClick={() => item.label && setActiveId(item.id)}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Modal */}
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
                            {allItems.map((item) => {
                                if (item.id !== activeId || item.isLogo) return null;
                                return (
                                    <motion.div
                                        key={item.id}
                                        layoutId={`explore-card-${item.id}`}
                                        className={`
                                            pointer-events-auto w-full max-w-md p-5 md:p-8
                                            ${item.color} ${item.text}
                                            shadow-2xl rounded-2xl max-h-[80vh] overflow-y-auto
                                            flex flex-col gap-5 relative
                                        `}
                                    >
                                        <div className="flex justify-between items-start relative z-10">
                                            <div>
                                                <h3 className="text-4xl font-display font-black tracking-tight mb-1">{item.label}</h3>
                                                <p className="text-lg opacity-80 font-medium">{item.sub}</p>
                                            </div>
                                            <button onClick={() => setActiveId(null)} className="p-2 hover:bg-black/10 rounded-full transition-colors"><X size={32} /></button>
                                        </div>

                                        <div className="h-px w-full bg-current opacity-20" />

                                        <p className="text-xl font-medium leading-relaxed opacity-90 relative z-10">
                                            {item.desc}
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 relative z-10 w-full">
                                            {item.features?.map((feat: string, i: number) => (
                                                <div key={i} className={`flex items-start gap-3 opacity-90 font-medium ${feat.length > 40 ? 'col-span-1 md:col-span-2' : ''}`}>
                                                    <div className="mt-1 shrink-0">
                                                        <Check size={18} strokeWidth={3} />
                                                    </div>
                                                    <span className="leading-snug">{feat}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center justify-between mt-auto pt-4 relative z-20 w-full border-t border-current/10">
                                            <div className="flex items-center gap-2 opacity-60 font-mono text-sm uppercase tracking-widest hidden md:flex">
                                                <span>ZUWOS OS</span>
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate('/request-access');
                                                }}
                                                className="
                                                    flex items-center justify-center gap-2 
                                                    px-6 py-2.5 
                                                    bg-black/10 hover:bg-black/20 backdrop-blur-md 
                                                    text-current text-sm font-semibold tracking-wide
                                                    rounded-full transition-all duration-300
                                                    shadow-[0_4px_16px_rgba(0,0,0,0.1)]
                                                    group/cta border border-white/10
                                                    ml-auto
                                                "
                                            >
                                                <span>Get Started</span>
                                                <ArrowUpRight size={18} className="group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                                            </button>
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
