"use client"

import { useState } from 'react'
import { useMobile } from '../../../hooks/useMobile'
import { motion, AnimatePresence } from 'framer-motion'
import { Server, Cloud, Shield, Lock, Database, CheckCircle, Network } from 'lucide-react'
import { ANIMATION_DURATION, ANIMATION_DELAY } from '../../../utils/constants'

export default function SovereignCloudAnimation() {
    const [activeNode, setActiveNode] = useState<string | null>(null)
    const isMobile = useMobile();

    return (
        <div className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-graphite/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />

            {/* Header Section */}
            <div className="relative z-10 mb-12 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-display font-bold text-graphite mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: ANIMATION_DURATION.SLOW }}
                >
                    Your Data, Your Rules
                </motion.h2>
                <motion.p
                    className="text-lg text-graphite/60 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: ANIMATION_DELAY.MEDIUM, duration: ANIMATION_DURATION.SLOW }}
                >
                    Complete sovereignty over your infrastructure. Choose where your data lives.
                </motion.p>
            </div>

            {/* Main Interactive Diagram */}
            <div className="relative z-10 min-h-[750px] md:min-h-[600px] w-full max-w-5xl mx-auto flex items-center justify-center mb-12 select-none">

                {/* Connection Lines Layer */}
                <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                    <defs>
                        {/* Gradient for Lines */}
                        <linearGradient id="lineGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                        </linearGradient>
                        <linearGradient id="lineGradientRight" x1="100%" y1="0%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
                        </linearGradient>

                        {/* Glow Filter */}
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    {/* Left Connection (On-Premise) */}
                    <motion.path
                        d="M 20% 50% Q 35% 50% 50% 50%"
                        stroke="url(#lineGradientLeft)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block"
                    />

                    {/* Right Connection (Private Cloud) */}
                    <motion.path
                        d="M 80% 50% Q 65% 50% 50% 50%"
                        stroke="url(#lineGradientRight)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="hidden md:block"
                    />

                    {/* Mobile Connections (Vertical) */}
                    <motion.line
                        x1="50%" y1="10%" x2="50%" y2="50%"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        className="md:hidden"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                    <motion.line
                        x1="50%" y1="90%" x2="50%" y2="50%"
                        stroke="#cbd5e1"
                        strokeWidth="2"
                        className="md:hidden"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </svg>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
                    <motion.div
                        className="relative cursor-default"
                        animate={{
                            scale: [1, 1.02, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {/* Outer Glow Ring */}
                        <motion.div
                            className="absolute inset-[-20px] rounded-full border border-primary/10"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        />
                        <motion.div
                            className="absolute inset-[-40px] rounded-full border border-primary/5"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.2, 0.05] }}
                            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        />

                        <div className="w-24 h-24 md:w-48 md:h-48 bg-white/50 backdrop-blur-xl rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.15)] border border-white/50 relative z-10 group overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <Shield className="w-10 h-10 md:w-20 md:h-20 text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                        </div>
                    </motion.div>

                    <div className="mt-4 md:mt-8 text-center">
                        <h3 className="font-display font-bold text-graphite text-lg md:text-xl tracking-wide">ZUWOS Secured Core</h3>
                        <div className="flex items-center justify-center gap-2 mt-2">
                            <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full border border-success/20 flex items-center">
                                <CheckCircle className="w-3 h-3 mr-1.5" /> DPDP Compliant
                            </span>
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20 flex items-center">
                                <Lock className="w-3 h-3 mr-1.5" /> AES-256
                            </span>
                        </div>
                    </div>
                </div>

                {/* Left Node: On-Premise */}
                <motion.div
                    className="absolute left-1/2 top-[5%] md:top-1/2 md:left-[20%] z-30 cursor-pointer"
                    initial={{ x: "-50%", y: isMobile ? 0 : "-50%" }}
                    animate={{
                        x: "-50%",
                        y: isMobile ? 0 : "-50%",
                        scale: activeNode === 'on-premise' ? 1.1 : 1,
                        opacity: activeNode === 'private-cloud' ? 0.3 : 1
                    }}
                    whileHover={{
                        scale: activeNode ? 1.1 : 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setActiveNode(activeNode === 'on-premise' ? null : 'on-premise')}
                >
                    <div className={`w-40 md:w-56 p-6 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border transition-all duration-300 group ${activeNode === 'on-premise' ? 'border-primary ring-4 ring-primary/5' : 'border-white/50 hover:border-primary/30'}`}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-graphite to-graphite/90 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white">
                                <Server className="w-8 h-8" />
                            </div>
                            <h3 className="text-base font-bold text-graphite mb-1">On-Premise</h3>
                            <p className="text-xs text-graphite/50 font-medium">Local Infrastructure</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Node: Private Cloud */}
                <motion.div
                    className="absolute left-1/2 bottom-[5%] md:bottom-auto md:top-1/2 md:left-[80%] md:right-auto z-30 cursor-pointer"
                    initial={{ x: "-50%", y: isMobile ? 0 : "-50%" }}
                    animate={{
                        x: "-50%",
                        y: isMobile ? 0 : "-50%",
                        scale: activeNode === 'private-cloud' ? 1.1 : 1,
                        opacity: activeNode === 'on-premise' ? 0.3 : 1
                    }}
                    whileHover={{
                        scale: activeNode ? 1.1 : 1.05,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onClick={() => setActiveNode(activeNode === 'private-cloud' ? null : 'private-cloud')}
                >
                    <div className={`w-40 md:w-56 p-6 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border transition-all duration-300 group ${activeNode === 'private-cloud' ? 'border-primary ring-4 ring-primary/5' : 'border-white/50 hover:border-primary/30'}`}>
                        <div className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 text-white">
                                <Cloud className="w-8 h-8" />
                            </div>
                            <h3 className="text-base font-bold text-graphite mb-1">Private Cloud</h3>
                            <p className="text-xs text-graphite/50 font-medium">Virtual Private Cloud</p>
                        </div>
                    </div>
                </motion.div>

                {/* Smooth Data Packets */}
                {/* Left Packet */}
                <motion.div
                    className="absolute hidden md:block w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{
                        offsetPath: "path('M 20% 50% Q 35% 50% 50% 50%')",
                        offsetRotate: "0deg"
                    }}
                />
                {/* Right Packet */}
                <motion.div
                    className="absolute hidden md:block w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-20"
                    initial={{ offsetDistance: "0%" }}
                    animate={{ offsetDistance: "100%" }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                    style={{
                        offsetPath: "path('M 80% 50% Q 65% 50% 50% 50%')",
                        offsetRotate: "0deg"
                    }}
                />

                {/* Active Info Modal - Now More Elegant */}
                <AnimatePresence>
                    {activeNode && (
                        <motion.div
                            className="absolute bottom-4 md:bottom-10 left-0 right-0 mx-auto w-[90%] md:w-auto md:max-w-xl bg-white/90 backdrop-blur-xl border border-primary/20 p-1 rounded-2xl shadow-2xl z-[100] overflow-hidden"
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        >
                            <div className="bg-white rounded-xl p-6 border border-graphite/5 relative">
                                <button onClick={(e) => { e.stopPropagation(); setActiveNode(null); }} className="absolute top-4 right-4 text-graphite/30 hover:text-graphite transition-colors">
                                    <span className="sr-only">Close</span>
                                    ✕
                                </button>
                                <div className="flex gap-4 items-start">
                                    <div className={`p-4 rounded-xl shrink-0 ${activeNode === 'on-premise' ? 'bg-graphite text-white' : 'bg-blue-500 text-white'}`}>
                                        {activeNode === 'on-premise' ? <Lock className="w-6 h-6" /> : <Network className="w-6 h-6" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-graphite text-lg mb-1">
                                            {activeNode === 'on-premise' ? 'Maximum Security Control' : 'Scalable Private Infrastructure'}
                                        </h4>
                                        <p className="text-sm text-graphite/60 leading-relaxed">
                                            {activeNode === 'on-premise'
                                                ? "Data resides physically on your hardware. Ideal for defense, banking, and government sectors requiring air-gapped security."
                                                : "Instant scalability on AWS/Azure/GCP within your own encrypted VPC. Benefit from cloud elasticity without compromising on data ownership."
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* Footer Indicators */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-graphite/5">
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-graphite/5">
                    <Lock className="w-5 h-5 text-primary mr-3" />
                    <span className="text-sm font-medium text-graphite">No Vendor Lock-in</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-graphite/5">
                    <CheckCircle className="w-5 h-5 text-success mr-3" />
                    <span className="text-sm font-medium text-graphite">Audit Ready</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-white rounded-xl shadow-sm border border-graphite/5">
                    <Database className="w-5 h-5 text-blue-500 mr-3" />
                    <span className="text-sm font-medium text-graphite">100% Data Export</span>
                </div>
            </div>

        </div>
    )
}
