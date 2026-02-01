import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { StickyScroll } from '../story/StickyScroll';
import StaggerText from '../ui/StaggerText';

// Images
import projectImg from '/ADMINPICS/project and task management admin, mac.png';
import rewardsImg from '/EmployeeImages/rewards.png';
import walletImg from '/EmployeeImages/wallet.png';
import redemptionImg from '/EmployeeImages/redemption.png';

gsap.registerPlugin(ScrollTrigger);

const content = [
    {
        title: "Projects & Tasks",
        description: "Stay on top of your game with intuitive project tracking. Assign tasks, set deadlines, and monitor progress in real-time. Experience a workflow that adapts to you, not the other way around.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-zinc-100/50">
                <img
                    src={projectImg}
                    alt="Projects and Tasks"
                    className="w-full h-full object-contain rounded-3xl"
                />
            </div>
        ),
    },
    {
        title: "Rewards",
        description: "Gamify your workspace. Earn points for every milestone achieved, task completed, or initiative taken. Recognition isn't just a pat on the back; it's tangible value in your pocket.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-purple-100/50">
                <img
                    src={rewardsImg}
                    alt="Rewards"
                    className="w-full h-full object-contain rounded-3xl"
                />
            </div>
        ),
    },
    {
        title: "Wallet",
        description: "Your hard-earned points, securely stored. The Zuwos Cold Wallet gives you complete transparency and control over your workplace currency. Track your earnings and plan your next redemption.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-emerald-100/50">
                <img
                    src={walletImg}
                    alt="Wallet"
                    className="w-full h-full object-contain rounded-3xl"
                />
            </div>
        ),
    },
    {
        title: "Redemption",
        description: "Instant gratification, redefined. Redeem your points for real-world rewards, gift cards, or experiences instantly. No waiting periods, no friction—just the rewards you deserve.",
        content: (
            <div className="h-full w-full flex items-center justify-center bg-orange-100/50">
                <img
                    src={redemptionImg}
                    alt="Redemption"
                    className="w-full h-full object-contain rounded-3xl"
                />
            </div>
        ),
    },
];

export default function EngagementCycle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(wheelRef.current, {
                rotation: 360,
                duration: 30, // Slow continuous spin
                repeat: -1,
                ease: "linear",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-32 bg-coconut relative" id="engagement">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-primary mb-6">
                        <StaggerText>The Game Changer</StaggerText>
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-graphite via-primary to-finance">
                        Engagement Cycle
                    </h3>
                </div>

                {/* --- ORIGINAL WHEEL SECTION --- */}
                <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center mb-32">
                    {/* Golden/Premium Glow at Center - Adjusted for light theme visibility */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

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
                </div>

                {/* --- NEW REAL-TIME GRATIFICATION SECTION (Sticky Scroll) --- */}
                <div className="w-full mt-20">
                    <h4 className="text-5xl md:text-7xl font-bold text-center mb-16 text-primary font-display tracking-tight">
                        <StaggerText>Real-Time Gratification</StaggerText>
                    </h4>
                    <StickyScroll
                        content={content}
                        contentClassName="bg-white/50 backdrop-blur-sm border border-black/5 shadow-xl"
                        titleClassName="text-slate-900"
                        descriptionClassName="text-slate-600"
                    />
                </div>
            </div>

            {/* Background Ambience - Keeps light theme feeling */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/5 to-transparent -z-0 pointer-events-none" />
        </section>
    );
}
