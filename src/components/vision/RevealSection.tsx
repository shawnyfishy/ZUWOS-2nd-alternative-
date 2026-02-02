import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { LayoutDashboard, Users, Wallet } from 'lucide-react';

const RevealSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const osRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pinned Section for the transformation
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=150%", // Pin for 1.5 screen heights
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1
                }
            });

            // 1. Boxes merge animation
            // We assume there are scattered elements that come together
            // For simplicity in this demo, we start with them scattered and scale/move them in

            // Initial state set via CSS or .from() - but here we sequence the "merge"

            // Text Reveal (3D Rotation)
            tl.fromTo(textRef.current,
                { rotationX: 90, opacity: 0, scale: 1.2 },
                { rotationX: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
            );

            // OS Build
            tl.fromTo(osRef.current,
                { scale: 0.8, opacity: 0, y: 100 },
                { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out" },
                "-=0.5"
            );

            // Golden light pass / Indian flag accent
            tl.fromTo('.flag-accent',
                { width: "0%" },
                { width: "100%", duration: 1, ease: "power1.inOut" }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-dvh relative bg-graphite text-white flex flex-col items-center justify-center overflow-hidden pt-20 md:pt-72 px-4 md:px-0"
        >
            {/* Background Radial Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-graphite z-0" />

            <div ref={containerRef} className="relative z-10 max-w-6xl w-full flex flex-col items-center gap-6 text-center px-4">

                <div className="perspective-1000">
                    <h2 ref={textRef} className="text-3xl md:text-6xl font-display font-bold leading-tight tracking-tight">
                        One Workplace. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            One Operating System.
                        </span>
                    </h2>
                </div>

                <div className="relative w-16 h-1 bg-gray-700 rounded-full overflow-hidden my-2">
                    {/* Indian Flag Gradient Line */}
                    <div className="flag-accent absolute top-0 left-0 h-full w-0 bg-gradient-to-r from-saffron via-white to-india-green" />
                </div>

                <p className="text-lg md:text-xl text-gray-400 font-light tracking-wide mb-4">
                    Built in India. Built for <span className="text-white font-medium">real workplaces.</span>
                </p>

                {/* The OS Visual */}
                <div ref={osRef} className="w-full max-w-4xl aspect-video bg-gray-900/50 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative group">
                    {/* Header */}
                    <div className="h-12 border-b border-white/10 flex items-center px-4 justify-between bg-white/5">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/20" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                            <div className="w-3 h-3 rounded-full bg-green-500/20" />
                        </div>
                        <div className="text-xs text-gray-500 font-mono tracking-widest">
                            ZUWOS v2.0
                        </div>
                    </div>

                    {/* Dashboard Grind */}
                    <div className="p-6 grid grid-cols-3 grid-rows-2 gap-4 h-[calc(100%-3rem)]">
                        {/* Module Cards */}
                        <div className="col-span-2 row-span-2 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <LayoutDashboard className="text-blue-400" />
                                <span className="font-medium text-blue-100">Performance Overview</span>
                            </div>
                            <div className="h-32 flex items-end gap-2">
                                {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                    <div key={i} className="flex-1 bg-blue-500/20 hover:bg-blue-500/40 transition-colors rounded-t-sm" style={{ height: `${h}%` }} />
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-colors flex flex-col justify-between">
                            <div className="flex items-center gap-3">
                                <Users className="text-saffron" />
                                <span className="font-medium text-orange-100">Workforce</span>
                            </div>
                            <div className="text-3xl font-bold">1,240</div>
                        </div>

                        <div className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/20 transition-colors flex flex-col justify-between">
                            <div className="flex items-center gap-3">
                                <Wallet className="text-india-green" />
                                <span className="font-medium text-green-100">Procurement</span>
                            </div>
                            <div className="text-3xl font-bold">₹ 4.2L</div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RevealSection;
