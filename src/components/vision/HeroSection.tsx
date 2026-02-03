import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from './ui/SplitText';

const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subheadRef = useRef<HTMLParagraphElement>(null);
    const shapesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Background Gradient Fade In
            gsap.fromTo(containerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2, ease: "power2.out" }
            );

            // 2. Headline Animation (Char by char)
            // Note: Since we are using a custom SplitText component, we assume the spans are already there.
            // We target the individual characters.
            const chars = headlineRef.current?.querySelectorAll('.char');
            if (chars) {
                gsap.fromTo(chars,
                    { opacity: 0, y: 50, rotateX: -90 },
                    {
                        opacity: 1,
                        y: 0,
                        rotateX: 0,
                        stagger: 0.03,
                        duration: 1,
                        ease: "back.out(1.7)"
                    }
                );
            }

            // 3. Subheadline Fade Up
            gsap.fromTo(subheadRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, delay: 0.8, duration: 1.2, ease: "power3.out" }
            );

            // 4. Logo Reveal
            if (shapesRef.current) {
                gsap.fromTo(shapesRef.current,
                    { scale: 0.8, opacity: 0, y: 20 },
                    { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden bg-white pt-32 pb-12 md:pt-40 md:pb-20"
        >
            {/* Background Pattern Overlay (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
            />

            <div className="z-10 text-center px-6 max-w-[1200px] mx-auto flex flex-col items-center gap-6 md:gap-10">
                {/* Visual: Logo */}
                <div ref={shapesRef} className="mb-2 md:mb-6 flex flex-col items-center">
                    {/* Placeholder for Logo - Using Typography as fallback since no SVG provided */}
                    <span className="font-display font-bold text-5xl md:text-7xl 2xl:text-8xl tracking-tighter text-graphite">ZUWOS</span>
                </div>

                <div className="max-w-5xl mx-auto">
                    <h1 ref={headlineRef} className="text-4xl md:text-6xl 2xl:text-7xl font-display font-bold tracking-tighter text-graphite leading-[1.1] mb-6 md:mb-8">
                        <SplitText charClass="char inline-block" className="overflow-hidden">
                            India&apos;s Integrated
                        </SplitText>
                        <br />
                        <SplitText charClass="char inline-block" className="overflow-hidden text-blue-600">
                            Workplace Management OS
                        </SplitText>
                    </h1>

                    <p ref={subheadRef} className="text-base md:text-xl text-graphite/70 font-medium tracking-tight max-w-2xl mx-auto leading-relaxed">
                        One platform for employees, operations, and enterprises. <br className="hidden md:block" />
                        Built for the new age workforce.
                    </p>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-6 md:bottom-10 animate-bounce hidden md:block">
                    <svg className="w-6 h-6 text-graphite/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
