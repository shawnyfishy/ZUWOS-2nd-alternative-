import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { GridSystem } from '../layout/GridSystem'
import { Users, Building2, Wallet, Briefcase, X } from 'lucide-react'

// Bento Grid Items
const silos = [
    {
        id: "employees",
        title: "Employees",
        subtitle: "One App, Zero Friction",
        icon: Users,
        bg: "bg-primary",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-8",
        aspect: "aspect-[16/9]",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Unify the Employee Experience</h4>
                <p className="text-xl opacity-90">Stop forcing your people to use 10 different apps for leave, payroll, assets, and tickets.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Unified Profile & Identity</li>
                    <li>Instant Service Requests</li>
                    <li>Digital Asset Wallet</li>
                </ul>
            </div>
        )
    },
    {
        id: "hr",
        title: "HR Ops",
        subtitle: "Impact over Admin",
        icon: Briefcase,
        bg: "bg-accent-yellow",
        text: "text-graphite",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-square",
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
        bg: "bg-atlas",
        text: "text-white",
        colSpan: "col-span-12 md:col-span-4",
        aspect: "aspect-square",
        content: (
            <div className="space-y-6">
                <h4 className="text-2xl font-bold">Asset Lifecycle Management</h4>
                <p className="text-xl opacity-90">Track every chair, laptop, and vehicle from procurement to disposal.</p>
                <ul className="list-disc pl-5 space-y-2 opacity-80">
                    <li>Preventive Maintenance Schedules</li>
                    <li>Space Utilization Tracking</li>
                    <li>Vendor Management</li>
                </ul>
            </div>
        )
    },
    {
        id: "finance",
        title: "Finance",
        subtitle: "Real-time Truth",
        icon: Wallet,
        bg: "bg-accent-pink",
        text: "text-graphite",
        colSpan: "col-span-12 md:col-span-8",
        aspect: "aspect-[16/9]",
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
    }
]

export default function BentoGrid() {
    const [selectedId, setSelectedId] = useState<string | null>(null)
    const navigate = useNavigate()

    return (
        <section className="py-24 bg-coconut relative" id="solutions">
            <GridSystem>
                <div className="col-span-12 mb-12">
                    <h2 className="text-display-sm font-display font-bold tracking-tighter">
                        One OS. <span className="text-graphite/40">Infinite Possibilities.</span>
                    </h2>
                </div>
            </GridSystem>

            {/* The Grid */}
            <GridSystem className="gap-6">
                {silos.map((item) => (
                    <motion.div
                        key={item.id}
                        layoutId={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className={`${item.colSpan} relative z-10`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <motion.div
                            className={`w-full ${item.aspect} ${item.bg} ${item.text} p-8 md:p-12 rounded-none md:rounded-lg flex flex-col justify-between group cursor-pointer hover:shadow-brutalist transition-shadow duration-300`}
                        >
                            <motion.div layoutId={`content-${item.id}`} className="flex justify-between items-start">
                                <item.icon className="w-12 h-12" />
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-sm font-bold uppercase tracking-widest border border-current px-3 py-1 rounded-full">Explore</span>
                                </div>
                            </motion.div>

                            <motion.div layoutId={`title-${item.id}`}>
                                <h3 className="text-3xl md:text-5xl font-display font-bold mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-lg opacity-80 font-medium">{item.subtitle}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </GridSystem>

            {/* The Overlay (Expanded Card) */}
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-graphite/60 backdrop-blur-sm"
                        />

                        {/* Expanded Card */}
                        {silos.filter(item => item.id === selectedId).map(item => (
                            <motion.div
                                key={item.id}
                                layoutId={item.id}
                                className={`w-full max-w-2xl ${item.bg} ${item.text} p-8 md:p-16 rounded-lg shadow-2xl relative overflow-hidden`}
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 p-2 hover:bg-black/10 rounded-full transition-colors"
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

                                {/* Revealed Content */}
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
                                        className="mt-8 bg-black/10 hover:bg-black/20 text-current px-8 py-4 font-bold rounded text-lg transition-colors w-full md:w-auto"
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
