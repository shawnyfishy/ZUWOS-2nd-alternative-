import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Users, Building2, Briefcase, FileSpreadsheet, ShoppingCart, AlertCircle } from 'lucide-react';

const FragmentationSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    const silos = [
        { title: "Employees", icon: Users, color: "bg-blue-100 text-blue-600", shake: "hover:animate-spin" },
        { title: "HR", icon: Briefcase, color: "bg-teal-100 text-teal-600", shake: "" },
        { title: "Facilities", icon: Building2, color: "bg-orange-100 text-orange-600", shake: "" },
        { title: "Finance", icon: FileSpreadsheet, color: "bg-purple-100 text-purple-600", shake: "" },
        { title: "Procurement", icon: ShoppingCart, color: "bg-green-100 text-green-600", shake: "" },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Entry Animation: Chaotic scatter
            // We start them somewhat organized, then scatter them on enter/scroll

            const boxes = gridRef.current?.children;
            if (boxes) {
                // Initial state: Start slightly off and shakey
                gsap.from(boxes, {
                    opacity: 0,
                    scale: 0.8,
                    y: 100,
                    stagger: 0.1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                });

                // Scroll Progress: Move apart
                gsap.to(boxes, {
                    x: (i) => (i - 2) * 50, // Spread out horizontally
                    y: () => (Math.random() - 0.5) * 50, // Random vertical jitter
                    rotation: () => (Math.random() - 0.5) * 15,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1
                    }
                });
            }

            // Headline Text scaling down/fading in
            gsap.fromTo(headlineRef.current,
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%"
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full min-h-dvh relative bg-coconut flex flex-col items-center justify-center p-6 overflow-hidden md:p-8"
        >
            <div className="max-w-6xl w-full text-center z-10">
                <h2 ref={headlineRef} className="text-4xl md:text-6xl font-display font-bold text-graphite mb-16">
                    Too many stakeholders. <br />
                    <span className="text-terracotta">Too many systems.</span>
                </h2>

                {/* Chaos Grid */}
                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-5 gap-8 place-items-center">
                    {silos.map((silo, idx) => (
                        <div
                            key={idx}
                            className={`relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center bg-white shadow-sm hover:shadow-md transition-shadow ${idx % 2 === 0 ? 'mt-8' : '-mt-4'}`}
                        >
                            {/* Disconnect indicator */}
                            <div className="absolute -top-3 -right-3 bg-red-50 text-red-500 rounded-full p-1 border border-red-100">
                                <AlertCircle size={16} />
                            </div>

                            <div className={`p-3 rounded-xl mb-2 ${silo.color} mb-3`}>
                                <silo.icon size={32} />
                            </div>
                            <span className="font-medium text-sm text-gray-600">{silo.title}</span>
                        </div>
                    ))}
                </div>

                <p className="mt-20 text-xl text-atlas/70 font-light">
                    When systems don&apos;t talk, people <span className="border-b-2 border-red-400 text-red-500 font-medium">suffer.</span>
                </p>
            </div>
        </section>
    );
};

export default FragmentationSection;
