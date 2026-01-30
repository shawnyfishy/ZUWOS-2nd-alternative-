import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// Unused icons removed

gsap.registerPlugin(ScrollTrigger);

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

    // SVG Text Ring implementation - No external steps data needed

    return (
        <section ref={containerRef} className="py-32 bg-coconut overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-primary mb-6">The Game Changer</h2>
                    <h3 className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-graphite via-primary to-finance">Engagement Cycle</h3>
                </div>

                <div className="relative w-full max-w-2xl mx-auto aspect-square flex items-center justify-center">
                    {/* Golden/Premium Glow at Center */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

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

                        {/* Center Icon (Optional, keeping it clean as per reference or adding a subtle center anchor) */}
                        {/* <div className="absolute w-4 h-4 bg-primary rounded-full" /> */}
                    </div>
                </div>

                {/* Background Ambience stays same but cleaner */}
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-primary/5 to-transparent -z-0 pointer-events-none" />
        </section >
    );
}
