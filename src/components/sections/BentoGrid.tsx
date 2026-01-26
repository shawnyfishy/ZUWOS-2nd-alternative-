import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GridSystem } from '../layout/GridSystem'
import { TiltCard } from '../ui/TiltCard'
import { Users, Building2, Wallet, Briefcase, X, Calculator, Package, ShieldCheck } from 'lucide-react'
import CinematicReveal from '../utils/CinematicReveal'
import TextRevealer from '../utils/TextRevealer'
import {
    EmployeesVisual,
    HROpsVisual,
    FacilitiesVisual,
    FinanceVisual,
    AccountantsVisual,
    ProcurementVisual,
    AdminsVisual
} from './BentoVisuals'

// Bento Grid Items
const silos = [
    {
        id: "employees",
        title: "Employees",
        subtitle: "One App, Zero Friction",
        icon: Users,
        visual: EmployeesVisual,
        bg: "bg-primary",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-6",
        aspect: "aspect-[2/1]",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Unify the Employee Experience</h4>
                <p className="text-xl opacity-90">Stop forcing your people to use 10 different apps. ZUWOS replaces them with <strong>16+ integrated modules</strong> in one super-app.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>360° Productivity Suite</li>
                    <li>Workspace & Seat Management</li>
                    <li>HRMS & Digital Wallet</li>
                </ul>
            </div>
        )
    },
    {
        id: "hr",
        title: "HR Ops",
        subtitle: "Impact over Admin",
        icon: Briefcase,
        visual: HROpsVisual,
        bg: "bg-accent-yellow",
        text: "text-graphite",
        colSpan: "col-span-12 md:col-span-6",
        aspect: "aspect-[2/1]",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Automate the Mundane</h4>
                <p className="text-xl opacity-90">Free your HR team from spreadsheets and focus on culture.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Automated Onboarding</li>
                    <li>Real-time Performance Data</li>
                    <li>Employee Sentiment Analysis</li>
                </ul>
            </div>
        )
    },
    {
        id: "facilities",
        title: "Facilities",
        subtitle: "Preventive Control",
        icon: Building2,
        visual: FacilitiesVisual,
        bg: "bg-atlas",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-square",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Asset Lifecycle Management</h4>
                <p className="text-xl opacity-90">Track every chair, laptop, and vehicle from procurement to disposal.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Transition & Fitouts</li>
                    <li>Asset, AMC & Inventory</li>
                    <li>Audits & Waste Mgmt</li>
                </ul>
            </div>
        )
    },
    {
        id: "finance",
        title: "Finance",
        subtitle: "Real-time Truth",
        icon: Wallet,
        visual: FinanceVisual,
        bg: "bg-accent-pink",
        text: "text-graphite",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-square",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Financial Precision</h4>
                <p className="text-xl opacity-90">Eliminate reconciliation lag. See costs as they happen.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Live Budget Tracking</li>
                    <li>Automated Expense Approvals</li>
                    <li>Cost Center Allocation</li>
                </ul>
            </div>
        )
    },
    {
        id: "accountants",
        title: "Accountants",
        subtitle: "Audit Ready",
        icon: Calculator,
        visual: AccountantsVisual,
        bg: "bg-accent-blue",
        text: "text-graphite",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-square",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Error-Free Accounting</h4>
                <p className="text-xl opacity-90">Keep your books balanced with automated tools and real-time syncing.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Automated Reconciliation</li>
                    <li>Tax Compliance</li>
                    <li>Audit Trails</li>
                </ul>
            </div>
        )
    },
    {
        id: "procurement",
        title: "Procurement",
        subtitle: "Smart Sourcing",
        icon: Package,
        visual: ProcurementVisual,
        bg: "bg-graphite",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-6",
        aspect: "aspect-[2/1]",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Efficient Sourcing</h4>
                <p className="text-xl opacity-90">Streamline your purchasing process and manage vendors effectively.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Vendor Portal</li>
                    <li>Purchase Order Management</li>
                    <li>Spend Analysis</li>
                </ul>
            </div>
        )
    },
    {
        id: "admins",
        title: "Admins",
        subtitle: "System Control",
        icon: ShieldCheck,
        visual: AdminsVisual,
        bg: "bg-primary",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-6",
        aspect: "aspect-[2/1]",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Complete Oversight</h4>
                <p className="text-xl opacity-90">Manage users, permissions, and system configurations with ease.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Role-Based Access Control</li>
                    <li>System Configuration</li>
                    <li>Comprehensive Logs</li>
                </ul>
            </div>
        )
    }
]

export default function BentoGrid() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const navigate = useNavigate()

    return (
        <section className="py-24 bg-coconut relative" id="solutions">
            <GridSystem>
                <div className="col-span-12 mb-20 flex flex-col items-center">
                    <TextRevealer
                        text="One OS. Infinite Possibilities."
                        className="text-display-md font-display font-bold tracking-tighter justify-center"
                    />
                </div>
            </GridSystem>

            {/* The Grid */}
            <GridSystem className="gap-6">
                {silos.map((item, idx) => (
                    <CinematicReveal
                        key={item.id}
                        className={item.colSpan}
                        delay={idx * 0.1}
                    >
                        <motion.div
                            layoutId={item.id}
                            onClick={() => setSelectedId(item.id)}
                            className="relative z-10 w-full"
                            data-cursor="Experience"
                        >
                            <TiltCard
                                whileHover="hover"
                                className={`w-full ${item.aspect} ${item.bg} ${item.text} p-6 md:p-8 rounded-none md:rounded-lg flex flex-col justify-between group cursor-pointer hover:shadow-brutalist transition-shadow duration-300 overflow-hidden relative`}
                            >
                                {/* Visual Background */}
                                {item.visual && <item.visual />}

                                <motion.div layoutId={`content-${item.id}`} className="flex justify-between items-start relative z-10">
                                    <item.icon className="w-10 h-10" />
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="text-xs font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full">Explore</span>
                                    </div>
                                </motion.div>

                                <motion.div layoutId={`title-${item.id}`} className="relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-1 tracking-tight">{item.title}</h3>
                                    <p className="text-base opacity-80 font-medium">{item.subtitle}</p>
                                </motion.div>
                            </TiltCard>
                        </motion.div>
                    </CinematicReveal>
                ))}
            </GridSystem>

            {/* The Overlay (Expanded Card) */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-graphite/60 backdrop-blur-sm"
                        />

                        {silos.filter(item => item.id === selectedId).map(item => (
                            <motion.div
                                key={item.id}
                                layoutId={item.id}
                                className={`w-full max-w-2xl ${item.bg} ${item.text} p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden`}
                            >
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-full transition-colors"
                                    data-cursor="Close"
                                >
                                    <X className="w-8 h-8" />
                                </button>

                                <motion.div layoutId={`content-${item.id}`} className="mb-8">
                                    <item.icon className="w-16 h-16" />
                                </motion.div>

                                <motion.div layoutId={`title-${item.id}`} className="mb-8">
                                    <h3 className="text-5xl font-display font-bold mb-2 tracking-tight">{item.title}</h3>
                                    <p className="text-2xl opacity-80 font-medium">{item.subtitle}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <div className="border-t border-current/20 pt-8 mt-8">
                                        {item.content}
                                    </div>

                                    <button
                                        onClick={() => navigate(`/docs/${item.id}`)}
                                        className="mt-8 bg-black/10 hover:bg-black/20 text-current px-8 py-4 font-bold rounded-2xl text-lg transition-colors w-full md:w-auto"
                                        data-cursor="Action"
                                    >
                                        View Documentation
                                    </button>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
