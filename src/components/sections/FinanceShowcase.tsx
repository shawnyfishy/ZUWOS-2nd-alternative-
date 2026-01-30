import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame } from '../ui/DeviceFrames';

const modules = [
    { name: 'Accounting', mac: '/assets/finance/accounting-mac.png' },
    { name: 'Balance Sheet', mac: '/assets/finance/balance-sheet-mac.png' },
    { name: 'Budget', mac: '/assets/finance/budget-mac.png' },
    { name: 'Chart of Accountant', mac: '/assets/finance/chart-of-accountant-mac.png' },
    { name: 'GST Payable', mac: '/assets/finance/gst-payable-mac.png' },
    { name: 'Manual Journal', mac: '/assets/finance/manual-journal-mac.png' },
    { name: 'Opening Balance', mac: '/assets/finance/opening-balance-mac.png' },
    { name: 'Procurement', mac: '/assets/finance/procurement-mac.png' },
    { name: 'Profit and Loss', mac: '/assets/finance/profit-and-loss-mac.png' },
    { name: 'Tax Summary', mac: '/assets/finance/tax-summary-mac.png' },
    { name: 'Transaction', mac: '/assets/finance/transaction-mac.png' },
    { name: 'Vendor', mac: '/assets/finance/vendor-mac.png' },
];

export default function FinanceShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // 4 Second Cycle
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % modules.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const currentModule = modules[currentIndex];

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img = new Image();
        img.src = modules[nextIndex].mac;
    }, [currentIndex]);

    return (
        <section className="w-full h-screen max-h-[1080px] py-0 bg-coconut overflow-hidden flex flex-col justify-center relative">
            <div className="container mx-auto px-6 h-full flex flex-col justify-between py-4 md:py-6">

                {/* Header Text - Spacious Gap */}
                <div className="text-center shrink-0 mb-20 md:mb-32">
                    <h2 className="text-5xl md:text-7xl font-display font-black text-accent-pink-dark tracking-tighter uppercase mb-2">
                        Finance and Accounts OS
                    </h2>
                    <span className="text-xl md:text-2xl font-medium text-graphite/60 block">
                        Real-time Truth & Compliance.
                    </span>
                </div>

                {/* Device Showcase Grid - MacBook Only */}
                <div className="flex-grow flex items-center justify-center min-h-0 shrink">
                    <div className="w-full max-w-4xl flex justify-center relative">
                        {/* MacBook Frame - Centered */}
                        <div className="w-full transform transition-all duration-500 hover:scale-105">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mac-${currentIndex}`}
                                            src={currentModule.mac}
                                            alt={currentModule.name}
                                            className="absolute inset-0 w-full h-full object-contain"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 1.2, ease: "easeInOut" }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </MacBookFrame>
                        </div>
                    </div>
                </div>

                {/* Dynamic Morphing Footer */}
                <div className="mt-20 md:mt-32 shrink-0 relative z-20 pb-4 md:pb-8 w-full flex justify-center">
                    <h3 className="flex flex-wrap items-baseline justify-center gap-[0.4em] px-4 tracking-tight leading-none text-center">
                        <span className="whitespace-nowrap text-xl md:text-3xl font-medium text-graphite/80">Centralized</span>

                        {/* Morphing Word Container */}
                        <span className="relative inline-flex flex-col items-center justify-center min-w-[3ch]">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentModule.name}
                                    initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="text-3xl md:text-5xl text-accent-pink-dark font-black whitespace-nowrap"
                                >
                                    {currentModule.name}
                                </motion.span>
                            </AnimatePresence>
                        </span>

                        <span className="whitespace-nowrap text-xl md:text-3xl font-medium text-graphite/80">Management System</span>
                    </h3>
                </div>

            </div>
        </section>
    );
}
