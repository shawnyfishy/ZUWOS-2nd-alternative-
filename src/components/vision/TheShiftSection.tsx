import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Check, Zap, MessageCircle, LayoutGrid, Users } from 'lucide-react';

const TheShiftSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const rightColRef = useRef<HTMLDivElement>(null);
    const phoneScreenRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left Column: Text Reveal
            const textElements = leftColRef.current?.children;
            if (textElements) {
                gsap.from(textElements, {
                    opacity: 0,
                    x: -50,
                    stagger: 0.2,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                });
            }

            // Right Column: Phone Screen Switch
            // Simulate rapid app switching (Chaos) -> Unified App (Clarity)
            const screens = phoneScreenRef.current?.children;
            if (screens) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%", // Start earlier
                        end: "center center", // Finish by the time the section is centered
                        scrub: 0.5, // More responsive
                    }
                });

                // Cycle through "messy" apps
                tl.to(screens[0], { opacity: 0, duration: 0.2 }) // Hide app 1
                    .to(screens[1], { opacity: 1, duration: 0.2 }) // Show app 2
                    .to(screens[1], { opacity: 0, duration: 0.2, delay: 0.2 }) // Hide app 2
                    .to(screens[2], { opacity: 1, duration: 0.2 }) // Show app 3 (The OS)
                    .fromTo(screens[2].querySelector('.os-content'),
                        { y: 20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.5 }, "<"); // Animate OS content
            }

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center bg-white py-16 px-6 md:py-24 md:px-20 overflow-hidden"
        >
            {/* Left Side: Content */}
            <div ref={leftColRef} className="w-full md:w-1/2 flex flex-col gap-8 md:pr-16 mb-16 md:mb-0">
                <h2 className="text-5xl md:text-6xl font-display font-bold text-graphite tracking-tight leading-tight">
                    The workforce has <br />
                    <span className="text-blue-500">changed.</span>
                </h2>

                <ul className="flex flex-col gap-5 text-xl text-atlas/70 font-light">
                    {[
                        "Gen Z expects instant access",
                        "Real-time recognition",
                        "Transparency and mobility",
                        "One app, not ten"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4">
                            <div className="bg-blue-50 p-1.5 rounded-full text-blue-600 flex-shrink-0">
                                <Check size={20} />
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side: Visual (Phone) */}
            <div ref={rightColRef} className="w-full md:w-1/2 flex items-center justify-center">
                <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden ring-4 ring-gray-900/50">
                    {/* Dynamic Island */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

                    {/* Screen Container */}
                    <div ref={phoneScreenRef} className="relative w-full h-full bg-white text-graphite">

                        {/* App 1: Chaos/Generic List */}
                        <div className="absolute inset-0 bg-gray-50 flex flex-col p-6 z-10 opacity-100">
                            <div className="w-full h-8 bg-gray-200 rounded mb-4 animate-pulse"></div>
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map(j => (
                                    <div key={j} className="h-10 bg-gray-100 rounded border border-gray-200"></div>
                                ))}
                            </div>
                            <div className="mt-auto flex justify-around text-gray-400">
                                <MessageCircle /> <Zap /> <LayoutGrid />
                            </div>
                        </div>

                        {/* App 2: Another Silo */}
                        <div className="absolute inset-0 bg-blue-50 flex flex-col p-6 z-10 opacity-0">
                            <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-6"></div>
                            <div className="w-full h-4 bg-blue-200 rounded mb-2"></div>
                            <div className="w-2/3 h-4 bg-blue-200 rounded mb-8 mx-auto"></div>
                        </div>

                        {/* App 3: The Unified OS */}
                        <div className="absolute inset-0 bg-gradient-to-b from-coconut to-white flex flex-col p-0 z-10 opacity-0 os-content">
                            {/* Header */}
                            <div className="pt-14 px-6 pb-4 bg-white/50 backdrop-blur-sm border-b border-gray-100">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-lg">Workplace OS</span>
                                    <div className="w-8 h-8 rounded-full bg-saffron/20 border border-saffron text-saffron flex items-center justify-center text-xs">
                                        Me
                                    </div>
                                </div>
                            </div>

                            {/* Grid of Apps */}
                            <div className="p-6 grid grid-cols-2 gap-4 overflow-y-auto">
                                {[
                                    { name: "HRMS", color: "bg-blue-500" },
                                    { name: "Tasks", color: "bg-green-500" },
                                    { name: "Wallet", color: "bg-saffron" },
                                    { name: "Trips", color: "bg-purple-500" }
                                ].map((app, k) => (
                                    <div key={k} className="aspect-square bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col justify-between group">
                                        <div className={`w-10 h-10 ${app.color} rounded-xl text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                            <LayoutGrid size={20} />
                                        </div>
                                        <span className="font-medium text-sm text-gray-600">{app.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Nav */}
                            <div className="mt-auto bg-white border-t border-gray-100 p-4 flex justify-around text-gray-400">
                                <div className="text-saffron"><LayoutGrid /></div>
                                <MessageCircle />
                                <Users />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheShiftSection;
