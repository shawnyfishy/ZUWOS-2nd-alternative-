import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SplitScreen from '../layout/SplitScreen'
import { User, Briefcase, Building, CreditCard, ShoppingCart, ArrowRight } from 'lucide-react'

const stakeholders = [
    {
        id: 'employees',
        label: 'Employees',
        icon: User,
        color: 'text-primary',
        tagline: 'One App for Everything',
        features: [
            { title: 'Everything in One App', desc: 'Work + Culture + Admin - All at one place.' },
            { title: 'Recognition & Rewards', desc: 'Real-time effort tracking & transparent incentives.' },
            { title: 'Belonging', desc: 'Community feed, recognition, and digital identity.' }
        ]
    },
    {
        id: 'hr',
        label: 'HR Managers',
        icon: Briefcase,
        color: 'text-accent-pink', // Using accent for visual logic
        tagline: 'From Administration to Impact',
        features: [
            { title: 'Live Workforce Visibility', desc: 'See your workforce in real-time.' },
            { title: 'Performance Rewards', desc: 'Automated, performance-linked incentives.' },
            { title: 'Gen Z Engagement', desc: 'Built-in engagement tools for the new generation.' }
        ]
    },
    {
        id: 'facilities',
        label: 'Facilities',
        icon: Building,
        color: 'text-warning',
        tagline: 'Total Operational Control',
        features: [
            { title: 'End-to-End Lifecycle', desc: 'Manage assets from procurement to disposal.' },
            { title: 'Preventive Ops', desc: 'Shift from reactive to preventive maintenance.' },
            { title: 'Unified View', desc: 'Physical and digital assets in one view.' }
        ]
    },
    {
        id: 'finance',
        label: 'Finance',
        icon: CreditCard,
        color: 'text-success',
        tagline: 'Real Time Financial Truth',
        features: [
            { title: 'Real-Time Cost Visibility', desc: 'Track expenses instantly as they occur.' },
            { title: 'No Reconciliation Delays', desc: 'Data stays automatically aligned—no manual follow-ups.' },
            { title: 'Ops–Finance Sync', desc: 'Operational data flows seamlessly into finance systems.' }
        ]
    },
    {
        id: 'procurement',
        label: 'Procurement',
        icon: ShoppingCart,
        color: 'text-atlas',
        tagline: 'Demand to Delivery, Unified',
        features: [
            { title: 'Centralized Intelligence', desc: 'Complete visibility into vendors, pricing, and performance.' },
            { title: 'Predictive Procurement', desc: 'Anticipate demand before shortages occur.' },
            { title: 'Inventory-Linked Ordering', desc: 'Stock levels automatically initiate procurement, with Human-in-loop' }
        ]
    }
]

export default function StakeholderTabs() {
    const [activeTab, setActiveTab] = useState(stakeholders[0].id)
    const activeData = stakeholders.find(s => s.id === activeTab) || stakeholders[0]

    // Left Content: The Menu
    const LeftContent = (
        <div className="space-y-6 md:space-y-8">
            <div className="mb-8 md:mb-12">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">Built for everyone<br className="hidden md:block" /> you work with.</h2>
                <p className="text-lg md:text-xl opacity-60">Select a stakeholder to explore their journey.</p>
            </div>

            <div className="flex flex-col items-start gap-3 md:gap-4 overflow-x-auto pb-4 -mx-2 px-2 no-scrollbar">
                {stakeholders.map((s) => (
                    <button
                        key={s.id}
                        onClick={() => setActiveTab(s.id)}
                        className={`text-xl md:text-2xl font-display font-bold transition-all duration-300 flex items-center gap-3 md:gap-4 group whitespace-nowrap ${activeTab === s.id ? 'text-graphite translate-x-1 md:translate-x-4' : 'text-graphite/30 hover:text-graphite/60'
                            }`}
                    >
                        {activeTab === s.id && <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />}
                        {s.label}
                    </button>
                ))}
            </div>
        </div>
    )

    // Right Content: The Deep Dive
    const RightContent = (
        <AnimatePresence mode='wait'>
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
            >
                <div className="border-b border-graphite/10 pb-8">
                    <span className={`font-bold tracking-widest uppercase mb-2 block ${activeData.id === 'employees' ? 'text-primary' : activeData.id === 'hr' ? 'text-pink-500' : 'text-graphite'}`}>
                        {activeData.label} OS
                    </span>
                    <h3 className="font-display font-bold text-4xl">{activeData.tagline}</h3>
                </div>

                <div className="grid gap-4 md:gap-8">
                    {activeData.features.map((feature, idx) => (
                        <div key={idx} className="bg-white p-6 md:p-8 border border-graphite/10 hover:shadow-brutalist transition-shadow duration-300">
                            <div className="font-bold text-lg mb-2">{feature.title}</div>
                            <p className="text-graphite/70 text-base">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    )

    return (
        <section id="features">
            <SplitScreen left={LeftContent} right={RightContent} />
        </section>
    )
}
