import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Check } from 'lucide-react';

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

            // Right Column: Phone Reveal
            if (rightColRef.current) {
                gsap.from(rightColRef.current, {
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 60%",
                    }
                });
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

                <ul className="flex flex-col gap-5 text-xl text-graphite font-normal">
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
                        <img 
                            src="/performance-ios.png" 
                            alt="Performance Interface on iOS" 
                            className="w-full h-full object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TheShiftSection;
