import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ShieldCheck, Server, IndianRupee, CloudOff } from 'lucide-react';

const IndigenousSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Split Reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // Tuned for earlier visibility
                    end: "bottom center",
                    scrub: 1
                }
            });

            // Big Tech Side (Left) - Chaos
            if (leftRef.current) {
                gsap.fromTo(leftRef.current.children,
                    { y: 0 },
                    { y: -50, stagger: 0.1, duration: 1 }
                );
            }

            // Indigenous Side (Right) - Stability
            tl.fromTo(rightRef.current,
                { opacity: 0.8 },
                { opacity: 1, duration: 1 },
                "<"
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-coconut overflow-hidden">

            {/* Left: The Problem */}
            <div ref={leftRef} className="p-6 md:p-24 flex flex-col justify-center border-r border-gray-200/50 relative">
                <div className="max-w-xl mx-auto w-full">
                    <h2 className="text-display-sm font-display font-bold text-gray-300 mb-12 tracking-tighter leading-tight relative">
                        <span className="absolute -left-12 top-0 text-9xl text-gray-100 -z-10 select-none hidden md:block">?</span>
                        Big Tech sells <br />
                        <span className="text-gray-900 decoration-wavy decoration-red-400/30 underline-offset-8 line-through decoration-2">software licenses.</span>
                    </h2>

                    <div className="space-y-6">
                        <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <IndianRupee size={24} />
                            </div>
                            <span className="text-xl font-medium text-gray-600">Per-user pricing traps</span>
                        </div>
                        <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default group">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <CloudOff size={24} />
                            </div>
                            <span className="text-xl font-medium text-gray-600">Rigid, foreign compliance</span>
                        </div>
                        <div className="flex items-center gap-6 p-4 rounded-2xl hover:bg-white/50 transition-colors cursor-default group">
                            <div className="w-12 h-12 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Server size={24} />
                            </div>
                            <span className="text-xl font-medium text-gray-600">Data sovereignty risks</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: The Solution */}
            <div ref={rightRef} className="p-6 md:p-24 bg-white flex flex-col justify-center relative">
                <div className="max-w-xl mx-auto w-full">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-saffron/10 rounded-full text-saffron text-sm font-bold tracking-wider mb-8">
                        <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" /> BUILT IN INDIA
                    </div>

                    <h2 className="text-display-sm font-display font-bold text-graphite mb-12 tracking-tighter leading-tight">
                        We build workplace <br />
                        <span className="text-saffron">infrastructure.</span>
                    </h2>

                    <div className="space-y-4 mb-12">
                        {[
                            "No per-user licensing dependency",
                            "Built for Indian compliance & realities",
                            "Customizable, extensible, sovereign"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-coconut rounded-2xl border border-transparent hover:border-saffron/20 transition-all duration-300">
                                <div className="text-india-green">
                                    <ShieldCheck size={24} />
                                </div>
                                <span className="font-medium text-graphite text-lg">{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
                        <div className="bg-white p-6">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Cost Efficiency</div>
                            <div className="text-3xl font-bold text-graphite">Save 60%</div>
                        </div>
                        <div className="bg-white p-6">
                            <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">Implementation</div>
                            <div className="text-3xl font-bold text-graphite">2 Weeks</div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default IndigenousSection;
