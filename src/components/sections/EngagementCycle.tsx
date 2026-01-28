import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, TrendingUp, Gift, Zap, Repeat, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function EngagementCycle() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wheelRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(wheelRef.current, {
                rotation: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const steps = [
        { icon: CheckCircle2, label: "Complete Task", color: "text-blue-600", bg: "bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/30" },
        { icon: TrendingUp, label: "Earn Points", color: "text-emerald-600", bg: "bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-emerald-500/30" },
        { icon: Gift, label: "Redeem Rewards", color: "text-purple-600", bg: "bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/30" },
        { icon: Zap, label: "Get Motivated", color: "text-amber-600", bg: "bg-gradient-to-br from-amber-500 to-amber-600 shadow-amber-500/30" },
    ];

    return (
        <section ref={containerRef} className="py-32 bg-coconut overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-primary mb-6">The Game Changer</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-graphite">Engagement Cycle</h3>
                </div>

                <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
                    <div ref={wheelRef} className="absolute inset-0 rounded-full border border-dashed border-graphite/10 flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-white rounded-full shadow-xl flex items-center justify-center z-20 border border-graphite/5">
                            <Repeat className="w-12 h-12 text-primary" />
                        </div>

                        {steps.map((step, i) => {
                            const angle = (i * 360) / steps.length;
                            const radius = 42;
                            const nextAngle = angle + 45; // Halfway to next item

                            return (
                                <div key={i}>
                                    {/* Card */}
                                    <div
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: `${50 + radius * Math.cos((angle - 90) * (Math.PI / 180))}%`,
                                            top: `${50 + radius * Math.sin((angle - 90) * (Math.PI / 180))}%`,
                                            transform: `translate(-50%, -50%) rotate(${angle}deg)`
                                        }}
                                    >
                                        <div className={`p-6 rounded-2xl shadow-xl border border-white/20 backdrop-blur-sm ${step.bg} w-52 flex flex-col items-center text-center gap-3 transition-transform hover:scale-110`}>
                                            <div className={`p-4 rounded-xl bg-white ${step.color} shadow-sm`}>
                                                <step.icon size={28} />
                                            </div>
                                            <span className="font-bold text-lg text-white tracking-wide">{step.label}</span>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: `${50 + radius * Math.cos((nextAngle - 90) * (Math.PI / 180))}%`,
                                            top: `${50 + radius * Math.sin((nextAngle - 90) * (Math.PI / 180))}%`,
                                            transform: `translate(-50%, -50%) rotate(${nextAngle}deg)`
                                        }}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-graphite/5 flex items-center justify-center text-primary">
                                            <ArrowRight size={18} />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        <div className="absolute inset-4 rounded-full border border-graphite/5 -z-10" />
                        <div className="absolute inset-32 rounded-full border border-graphite/5 -z-10" />
                    </div>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/5 to-transparent -z-0 pointer-events-none" />
        </section>
    );
}
