import { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StaggerText from '../ui/StaggerText';

// Images
import projectImg from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/KANBANNN3.jpeg';
import rewardsImg from '/gratification-new/rewards.png';
import walletImg from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Wallet web NEWWWW.png';
import redemptionImg from '/gratification-new/redemption.png';

gsap.registerPlugin(ScrollTrigger);

export default function EngagementCycle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);
    const horizontalSectionRef = useRef<HTMLDivElement>(null);
    const horizontalContainerRef = useRef<HTMLDivElement>(null);
    const [selectedFeature, setSelectedFeature] = useState<typeof content[0] | null>(null);

    const content = [
        {
            id: 'projects',
            title: "Projects & Tasks",
            description: "Stay on top of your game with intuitive project tracking. Assign tasks, set deadlines, and monitor progress in real-time. Experience a workflow that adapts to you, not the other way around.",
            image: projectImg,
        },
        {
            id: 'rewards',
            title: "Rewards",
            description: "Gamify your workspace. Earn points for every milestone achieved, task completed, or initiative taken. Recognition isn't just a pat on the back; it's tangible value in your pocket.",
            image: rewardsImg,
        },
        {
            id: 'wallet',
            title: "Wallet",
            description: "Your hard-earned points, securely stored. The Zuwos Cold Wallet gives you complete transparency and control over your workplace currency. Track your earnings and plan your next redemption.",
            image: walletImg,
        },
        {
            id: 'redemption',
            title: "Redemption",
            description: "Instant gratification, redefined. Redeem your points for real-world rewards, gift cards, or experiences instantly. No waiting periods, no friction—just the rewards you deserve.",
            image: redemptionImg,
        },
    ];

    // Content arrays are mapped directly in JSX

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(wheelRef.current, {
                rotation: 360,
                duration: 30, // Slow continuous spin
                repeat: -1,
                ease: "linear",
            });

            // Horizontal Scroll
            const hContainer = horizontalContainerRef.current;
            if (hContainer && horizontalSectionRef.current) {
                const mm = gsap.matchMedia();
                mm.add("(min-width: 1024px)", () => {
                    const totalWidth = hContainer.scrollWidth;
                    const viewportWidth = window.innerWidth;
                    
                    gsap.to(hContainer, {
                        x: () => -(totalWidth - viewportWidth),
                        ease: "none",
                        scrollTrigger: {
                            trigger: horizontalSectionRef.current,
                            pin: true,
                            scrub: 1,
                            end: () => "+=" + (totalWidth),
                            invalidateOnRefresh: true,
                        }
                    });
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-16 md:py-24 bg-coconut relative" id="engagement">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-primary mb-6">
                        <StaggerText>The Game Changer</StaggerText>
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-graphite via-primary to-finance">
                        Engagement Cycle
                    </h3>
                </div>

                {/* --- ORIGINAL WHEEL SECTION --- */}
                <div className="relative w-full max-w-[300px] lg:max-w-2xl mx-auto aspect-square flex items-center justify-center mb-12 lg:mb-24">
                    {/* Golden/Premium Glow at Center - Adjusted for light theme visibility */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-64 lg:h-64 bg-primary/20 rounded-full blur-3xl" />

                    <div ref={wheelRef} className="absolute inset-0 flex items-center justify-center">
                        <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
                            <defs>
                                <path
                                    id="circlePath"
                                    d="M 250, 250 m -220, 0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0"
                                />
                            </defs>
                            <text className="fill-graphite font-display font-bold text-2xl tracking-[0.15em] uppercase">
                                <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
                                    COMPLETE TASK &nbsp;→&nbsp; EARN POINTS &nbsp;→&nbsp; REDEEM INSTANTLY &nbsp;→&nbsp; GET MOTIVATED &nbsp;→&nbsp; REPEAT &nbsp;→&nbsp;
                                </textPath>
                            </text>
                        </svg>
                    </div>

                    {/* ZUWOS Logo Center (Desktop Only as requested) */}
                    <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center z-10 pointer-events-none">
                        <div className="w-40 h-40 bg-primary rounded-3xl flex items-center justify-center shadow-2xl shadow-primary/30 mb-5">
                            <span className="text-white font-display font-bold text-8xl select-none">Z</span>
                        </div>
                        <span className="font-display font-bold text-6xl tracking-tighter text-graphite select-none">ZUWOS</span>
                    </div>
                </div>

                {/* --- NEW REAL-TIME GRATIFICATION SECTION (Horizontal Slide) --- */}
            </div>

            <div ref={horizontalSectionRef} className="relative z-10 w-full overflow-hidden h-auto lg:h-screen lg:flex lg:flex-col lg:justify-center bg-slate-100">
                
                <div ref={horizontalContainerRef} className="flex flex-col lg:flex-row w-full lg:w-fit h-auto lg:h-full">
                    {content.map((item, i) => (
                        <div key={i} className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-slate-100 flex flex-col lg:flex-row relative overflow-hidden text-slate-800">
                            {/* Left Panel: Role & Features */}
                            <div className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] flex-shrink-0 h-auto lg:h-full px-8 lg:px-10 lg:pl-14 xl:pl-16 2xl:pl-20 flex flex-col justify-center bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 z-10 pt-20 lg:pt-0 pb-10">
                                <div className="mb-6 xl:mb-8">
                                    <p className="text-sm font-bold tracking-widest uppercase mb-4 text-primary">Real-Time Gratification</p>
                                    <h2 className="text-3xl xl:text-4xl font-display font-bold text-slate-900 mt-2">{item.title}</h2>
                                    <p className="text-base xl:text-lg text-slate-500 mt-4 leading-relaxed">{item.description}</p>
                                </div>
                            </div>

                            {/* Right Panel: Content / Mockups */}
                            <div className="flex-1 h-auto lg:h-full flex flex-col items-center justify-center p-6 lg:p-12 lg:pl-10 xl:pl-16 relative overflow-visible mt-8 lg:mt-0">
                                {/* Decorative BG */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/10 rounded-full blur-3xl z-0" />

                                <div className="w-full max-w-4xl 2xl:max-w-6xl relative aspect-video bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 flex flex-col justify-center items-center group cursor-zoom-in z-10" onClick={() => setSelectedFeature(item)}>
                                    <motion.img
                                        layoutId={`image-${item.id}`}
                                        src={item.image}
                                        alt={item.title}
                                        loading="eager"
                                        decoding="async"
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Ambience - Keeps light theme feeling */}
            <div className="absolute inset-0 w-full h-full bg-gradient-radial from-primary/5 to-transparent pointer-events-none" />

            {/* Lightbox / Modal */}
            <AnimatePresence>
                {
                    selectedFeature && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/60 backdrop-blur-md cursor-zoom-out"
                            onClick={() => setSelectedFeature(null)}
                        >
                            <motion.div
                                layoutId={`card-${selectedFeature.id}`}
                                className="relative w-full max-w-5xl aspect-video bg-zinc-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card itself? Actually user probably wants to close. Let's keep it simple.
                            >
                                <motion.img
                                    layoutId={`image-${selectedFeature.id}`}
                                    src={selectedFeature.image}
                                    alt={selectedFeature.title}
                                    className="w-full h-full object-cover p-0"
                                />

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-graphite p-2 rounded-full backdrop-blur-md transition-colors border border-black/5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </section >
    );
}
