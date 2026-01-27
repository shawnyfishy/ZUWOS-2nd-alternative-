import { motion, AnimatePresence } from 'framer-motion'
import { Layers, Zap, Unlock, X, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'
import CinematicReveal from '../utils/CinematicReveal'
import TextRevealer from '../utils/TextRevealer'

const features = [
    {
        icon: Layers,
        title: "Integrated Ecosystem",
        description: "16+ modules working in perfect harmony. No more siloed data or broken workflows.",
        detail: "ZUWOS unifies your entire workplace into a single operating system. From employee engagement to facility management, every module communicates in real-time."
    },
    {
        icon: Zap,
        title: "Real-time Operations",
        description: "Instant updates from the field to the boardroom. Decisions based on now, not yesterday.",
        detail: "Our event-driven architecture ensures that every swipe, every ticket, and every transaction is processed instantly, giving you a live pulse of your organisation."
    },
    {
        icon: Unlock,
        title: "Sovereign Infrastructure",
        description: "Built in India for Indian realities. Own your data, control your costs, and secure your future.",
        detail: "We believe in data sovereignty. ZUWOS can be deployed on your private cloud or on-premise, ensuring your sensitive workplace data never leaves your control."
    }
]

export default function ValueProposition() {
    const [selectedFeature, setSelectedFeature] = useState<typeof features[0] | null>(null)

    return (
        <section className="section-padding bg-coconut relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <TextRevealer
                        text="Why ZUWOS?"
                        className="font-display font-bold text-4xl md:text-display-sm text-graphite mb-6 justify-center"
                    />
                    <TextRevealer
                        text="We are not just another SaaS. We are a fundamental shift in how work happens."
                        className="text-xl md:text-2xl text-graphite/60 max-w-2xl mx-auto tracking-tight justify-center"
                        delay={0.2}
                        stagger={0.01}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {features.map((feature, idx) => (
                        <CinematicReveal key={idx} delay={0.3 + (idx * 0.15)}>
                            <motion.div
                                whileHover={{
                                    y: -16,
                                    scale: 1.02,
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                                onClick={() => setSelectedFeature(feature)}
                                className="group cursor-pointer h-full"
                                data-cursor="View"
                            >
                                <div className="h-full p-8 md:p-10 bg-white border border-graphite/5 rounded-3xl shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/10 transition-shadow duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-3xl transition-colors duration-300 pointer-events-none" />

                                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="font-display font-bold text-2xl text-graphite mb-4 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-graphite/70 leading-relaxed">
                                        {feature.description}
                                    </p>

                                    <div className="mt-8 flex items-center text-primary font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm">
                                        <span>Visit Details</span>
                                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </motion.div>
                        </CinematicReveal>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedFeature && (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFeature(null)}
                            className="absolute inset-0 bg-graphite/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="w-full max-w-lg bg-white p-8 md:p-12 rounded-3xl shadow-2xl relative z-10"
                        >
                            <button
                                onClick={() => setSelectedFeature(null)}
                                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-graphite/40" />
                            </button>

                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                                <selectedFeature.icon className="w-10 h-10" />
                            </div>

                            <h3 className="text-3xl font-display font-bold text-graphite mb-6">{selectedFeature.title}</h3>
                            <p className="text-xl text-graphite/60 leading-relaxed mb-8">
                                {selectedFeature.detail}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-success font-bold">
                                    <CheckCircle2 className="w-6 h-6" />
                                    <span>Indigenous Sovereignty</span>
                                </div>
                                <div className="flex items-center gap-3 text-success font-bold">
                                    <CheckCircle2 className="w-6 h-6" />
                                    <span>Zero Data Friction</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    )
}
