import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckSquare, Gift, Wallet, ShoppingBag } from 'lucide-react'

// Layout component inline or imported? 
// The original used SplitScreen. Let's try to reuse SplitScreen if possible or recreate the layout.
// Since SplitScreen component might be simple, I'll import it.
import SplitScreen from '../layout/SplitScreen'

const tabs = [
    {
        id: 'projects',
        label: 'Projects and Tasks',
        icon: CheckSquare,
        tagline: 'Gamified Productivity',
        features: [
            { title: 'Quest-Based Workflow', desc: 'Turn mundane tasks into exciting quests with clear objectives.' },
            { title: 'Level Up', desc: 'Gain XP for every completed project and unlock new capabilities.' },
            { title: 'Leaderboards', desc: 'Compete with teams on delivery speed and quality.' }
        ]
    },
    {
        id: 'rewards',
        label: 'Rewards',
        icon: Gift,
        tagline: 'Instant Recognition',
        features: [
            { title: 'Spot Bonuses', desc: 'Receive instant token rewards for exceptional work.' },
            { title: 'Badges & Trophies', desc: 'Collect digital assets that showcase your achievements.' },
            { title: 'Peer-to-Peer Giving', desc: 'Empower teams to reward each other for help and support.' }
        ]
    },
    {
        id: 'wallet',
        label: 'Wallet',
        icon: Wallet,
        tagline: 'Your Digital Asset Hub',
        features: [
            { title: 'Real-time Balance', desc: 'View your earned tokens and rewards instantly.' },
            { title: 'Transaction History', desc: 'Transparent record of all your earnings and spendings.' },
            { title: 'Secure Vault', desc: 'Enterprise-grade security for your digital assets.' }
        ]
    },
    {
        id: 'redemption',
        label: 'Redemption',
        icon: ShoppingBag,
        tagline: 'Spend Your Earnings',
        features: [
            { title: 'Company Store', desc: 'Redeem tokens for branded merchandise and gadgets.' },
            { title: 'Experience Marketplace', desc: 'Buy extra time off, lunch with the CEO, or gym passes.' },
            { title: 'Gift Cards', desc: 'Convert tokens to vouchers for your favorite brands.' }
        ]
    }
]

export default function GratificationTabs() {
    const [activeTab, setActiveTab] = useState(tabs[0].id)
    const activeData = tabs.find(s => s.id === activeTab) || tabs[0]

    // Left Content: The Menu
    const LeftContent = (
        <div className="space-y-6 md:space-y-8">
            <div className="mb-8 md:mb-12">
                <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6 leading-tight">Experience Work<br className="hidden md:block" /> Like a Game.</h2>
                <p className="text-lg md:text-xl opacity-60">Select a module to explore the mechanics.</p>
            </div>

            <div className="flex flex-col items-start gap-3 md:gap-4 overflow-x-auto pb-4 -mx-2 px-2 no-scrollbar">
                {tabs.map((t) => (
                    <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={`text-xl md:text-2xl font-display font-bold transition-all duration-300 flex items-center gap-3 md:gap-4 group whitespace-nowrap ${activeTab === t.id ? 'text-graphite translate-x-1 md:translate-x-4' : 'text-graphite/30 hover:text-graphite/60'
                            }`}
                    >
                        {activeTab === t.id && <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />}
                        {t.label}
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
                    <span className="font-bold tracking-widest uppercase mb-2 block text-primary">
                        {activeData.label}
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
        <section id="gratification-tabs">
            <SplitScreen left={LeftContent} right={RightContent} />
        </section>
    )
}
