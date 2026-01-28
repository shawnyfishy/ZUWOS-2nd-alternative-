import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * AppMergingAnimation
 * A premium GSAP animation where actual brand icons merge into the ZUWOS identity.
 * fast, fluid, and scroll-triggered.
 */
const AppMergingAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
    const singularityRef = useRef<HTMLDivElement>(null);

    // Authentic Brand Icons (Using SVGs for sharpness and performance)
    const apps = [
        {
            name: 'Notion',
            color: '#000000',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M4.459 4.208c.539.314.819.537 1.15.537.33 0 .44-.11.839-.537l2.87-3.085c.668-.616 1.341-1.121 2.379-1.121h7.842c.88 0 1.54.493 1.54 1.39v18.175c0 .584-.33 1.054-1.054 1.054-.373 0-.74-.156-1.077-.38L16.29 18.23c-.33-.223-.518-.337-.881-.337s-.603.111-.99.336L9.894 21.62c-.77.447-1.343.336-1.343-.674V4.94c0-.606-.188-.853-.66-.853-.33 0-.64.135-1.054.405l-2.486 1.63L4.459 4.208zm1.094 15.688l2.992-1.854V4.207L5.553 6.062v13.834zm3.957-1.854l4.958-3.09V3.535l-4.958 3.146v11.353zm5.923-3.652l3.414 2.133V3.029l-3.414 2.133v9.221z" />
                </svg>
            )
        },
        {
            name: 'Google Meet',
            color: '#ffffff',
            svg: (
                <svg viewBox="0 0 24 24" className="w-8 h-8">
                    <path fill="#00897b" d="M12.5 12.5H20V20c0 .3-.1.6-.4.8l-7.1-8.3z" />
                    <path fill="#00b248" d="M20 4v8.5h-7.5l-7.1 8.3c-.2-.2-.4-.5-.4-.8V4c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2z" />
                    <path fill="#ff9100" d="M12.5 12.5l7.1 8.3c-.2.2-.5.4-.8-.4h-6.3c-.3 0-.6-.1-.8-.4l-.8-1.1L12.5 12.5z" />
                    <path fill="#f44336" d="M5 20.8V12.5l7.5 0-1.6 7.1-.8 1.2c-.2.2-.5.4-.8.4H6c1.1 0 2-.9 2-2z" transform="scale(-1,1) translate(-10,0)" />
                    <polygon fill="#f44336" points="5,12.5 5,20.8 5.4,21.2 12.5,12.5" />
                    <path fill="#4285f4" d="M23 18l-3-2.5v-7l3-2.5c.6-.5 1.5-.1 1.5.7v10.6c0 .8-.9 1.2-1.5.7z" />
                </svg>
            )
        },
        {
            name: 'Zoom',
            color: '#2D8CFF',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M14.5 11l4.5-3.5v9l-4.5-3.5v3a2 2 0 01-2 2h-8a2 2 0 01-2-2v-8a2 2 0 012-2h8a2 2 0 012 2v3z" />
                </svg>
            )
        },
        {
            name: 'Meta',
            color: '#0668E1',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M17.1 5.3c-1.5 0-3 .7-4 1.7-.1.1-.1.1-.2.1-.1 0-.1 0-.2-.1-1.1-1-2.6-1.7-4-1.7-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1c1.5 0 3-.7 4-1.7.1-.1.1-.1.2-.1.1 0 .1 0 .2.1 1 1 2.5 1.7 4 1.7 3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6.1-6.1zm-10.2 10.3c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2c1 0 2 .4 2.8 1-1.2 1-2 2.5-2 4.2 0 .5.1 1.1.2 1.6-.3.9-.6 1.6-1 1.6zm10.2 0c-.4 0-.7-.7-1-1.6.1-.5.2-1.1.2-1.6 0-1.7-.8-3.2-2-4.2.8-.6 1.8-1 2.8-1 2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2z" />
                </svg>
            )
        },
        {
            name: 'Google Forms',
            color: '#673AB7',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm1 7V3.5L18.5 9H15z M8 16h8v2H8v-2zm0-4h8v2H8v-2zm0-4h5v2H8V8z" />
                </svg>
            )
        },
        {
            name: 'Slack',
            color: '#4A154B',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.52 2.521h-2.522v-2.521zM17.687 8.834a2.528 2.528 0 01-2.521 2.521 2.527 2.527 0 01-2.521-2.521V2.522A2.528 2.528 0 0115.166 0a2.528 2.528 0 012.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521 2.528 2.528 0 01-2.521-2.521v-2.521h2.521zM15.166 17.687a2.527 2.527 0 01-2.521-2.521 2.527 2.527 0 012.521-2.521h6.312A2.528 2.528 0 0124 15.166a2.528 2.528 0 01-2.52 2.521h-6.314z" />
                </svg>
            )
        },
        {
            name: 'Microsoft Teams',
            color: '#6264A7',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.667 10.606c1.667 4.545 6.061 7.788 11.212 7.788 6.667 0 12.121-5.303 12.121-11.97V0H11.667v10.606zm.909-1.97l-9.394 1.97A6.818 6.818 0 0 1 7.424 6.667h30.606a6.818 6.818 0 0 1 6.818 6.818v30.606c0 12.273-9.848 22.121-22.121 22.121a22.121 22.121 0 0 1-15.303-6.212l3.485-3.485a17.273 17.273 0 0 0 11.818 4.848c9.545 0 17.273-7.727 17.273-17.273S29.727 6.515 20.182 6.515a17.273 17.273 0 0 0-11.818 4.848l-2.121 1.394L12.576 8.636z" transform="scale(0.5) translate(12,12)" />
                    <path d="M23 5.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h10zm-10 1a.5.5 0 0 0-.5.5v2.5h2.5v-3h-2zm4.5 0h-2.5v3h3v-2.5a.5.5 0 0 0-.5-.5zm4.5 0h-2.5v3h2.5v-3zm0 4.5h-2.5v3h2.5v-3zm-4.5 0h-3v3h3v-3zm-4.5 0h-2.5v3h3v-3zm0 4.5h-2.5v2.5a.5.5 0 0 0 .5.5h2v-3zm4.5 0h-3v3h3v-3zm4.5 0h-3v3h2.5a.5.5 0 0 0 .5-.5v-2.5z" />
                </svg>
            )
        },
        {
            name: 'Jira',
            color: '#0052CC',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M11.53 16V8.38a.63.63 0 00-.19-.45L5.35.32a.64.64 0 00-.7-.14.65.65 0 00-.39.42L.03 14.16a.63.63 0 00.33.72l8.83 4.25a.63.63 0 00.86-.33.64.64 0 00-.02-.55l-2.79-5.75L11.53 16zM11.53 23.68v-7.29l-3.32 3.16a.63.63 0 00.04.91.64.64 0 00.9.04l2.38-2.27v5.45a.62.62 0 001.07.44l8.36-8.36a.63.63 0 00-.44-1.07l-5.92-.01V23.01a.63.63 0 00.67.67h-3.74z" transform="translate(4,0) scale(0.8)" />
                    <path d="M11.47 11.53L5.82 5.88a.64.64 0 00-1.09.45v11.34a.64.64 0 001.09.45l5.65-5.65a.64.64 0 000-.91z" />
                </svg>
            )
        },
        {
            name: 'Figma',
            color: '#F24E1E',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M8.5 12c0 1.933 1.567 3.5 3.5 3.5 1.933 0 3.5-1.567 3.5-3.5 0-1.933-1.567-3.5-3.5-3.5-1.933 0-3.5 1.567-3.5 3.5z" />
                    <path d="M12 19c-1.933 0-3.5-1.567-3.5-3.5S10.067 12 12 12s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5z" />
                    <path d="M5 12c0 1.933 1.567 3.5 3.5 3.5S12 13.933 12 12c0-1.933-1.567-3.5-3.5-3.5S5 10.067 5 12z" fill="#0ACF83" />
                    <path d="M5 5c0 1.933 1.567 3.5 3.5 3.5S12 6.933 12 5c0-1.933-1.567-3.5-3.5-3.5S5 3.067 5 5z" fill="#A259FF" />
                    <path d="M12 5c0 1.933 1.567 3.5 3.5 3.5s3.5-1.567 3.5-3.5S17.433 1.5 15.5 1.5 12 3.067 12 5z" fill="#1ABCFE" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.5 1.5h-7C6.567 1.5 5 3.067 5 5s1.567 3.5 3.5 3.5H12V5c0-1.933 1.567-3.5 3.5-3.5z" fill="#F24E1E" />
                </svg>
            )
        },
        {
            name: 'Asana',
            color: '#F06A6A',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25zm5.625-2.25a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0zm-11.25 0a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0z" />
                    <circle cx="12" cy="12" r="3" fill="#FFF" fillOpacity="0.2" />
                    <path d="M18.78 12.653a5.22 5.22 0 1 0 0 10.44 5.22 5.22 0 0 0 0-10.44zm-13.56 0a5.22 5.22 0 1 0 .001 10.439 5.22 5.22 0 0 0-.001-10.439zm12-6.525a5.22 5.22 0 1 1-10.44 0 5.22 5.22 0 0 1 10.44 0z" />
                </svg>
            )
        },
        {
            name: 'Salesforce',
            color: '#00A1E0',
            svg: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M16.125 6.094c-.282.844-.844 1.5-1.594 1.875A3.85 3.85 0 0 0 12 7.031c-2.156 0-3.938 1.781-3.938 3.938 0 .469.094.844.281 1.219A4.75 4.75 0 0 0 4.5 14.25c0 2.625 2.156 4.781 4.781 4.781h9.188c2.438 0 4.406-1.969 4.406-4.406 0-2.344-1.781-4.219-4.031-4.406-.188-2.344-2.156-4.125-4.594-4.125-.094 0-.141 0-.125 0z" />
                </svg>
            )
        },
    ];

    useEffect(() => {
        if (!containerRef.current || !logoRef.current || !singularityRef.current) return;

        const ctx = gsap.context(() => {
            // Timeline plays automatically when triggered (No scrub)
            const tl = gsap.timeline({
                paused: true, // Wait for ScrollTrigger to play it
                defaults: { ease: "power2.inOut" }
            });

            // 0. Setup Initial Pos (Scattered)
            gsap.set(iconsRef.current, {
                x: (i) => Math.cos((i / apps.length) * Math.PI * 2) * 140, // 140px scatter
                y: (i) => Math.sin((i / apps.length) * Math.PI * 2) * 140,
                opacity: 0,
                scale: 0.5,
                rotation: 0,
            });

            gsap.set(singularityRef.current, {
                scale: 0,
                opacity: 0,
            });

            gsap.set(logoRef.current, {
                opacity: 0,
                scale: 0,
                y: 0,
            });

            // --- Animation Sequence (The Clean Fusion with Singularity) ---

            // 1. Singularity Appears (The Target)
            tl.to(singularityRef.current, {
                scale: 1,
                opacity: 1,
                duration: 0.6, // Slower, more elegant appear
                ease: "back.out(1.5)",
            })

                // 2. Icons Appear (Around the Singularity)
                .to(iconsRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.04, // Slightly faster ripple
                    ease: "power2.out",
                })

                // 3. The VORTEX (Liquid Absorption)
                .to(iconsRef.current, {
                    x: 0,
                    y: 0,
                    scale: 0.1,
                    rotation: 180, // THE VORTEX SWIRL
                    duration: 0.8, // Smoother duration
                    ease: "expo.in", // Fluid acceleration (starts slow, ends fast)
                }, "+=0.1") // Tiny organic pause

                // Singularity absorbs mass (Pulses up)
                .to(singularityRef.current, {
                    scale: 2.0, // Absorb more mass
                    duration: 0.8,
                    ease: "expo.in",
                }, "<")

                // 4. The Impact (Instant Vanish)
                .to(iconsRef.current, {
                    opacity: 0,
                    scale: 0,
                    duration: 0.01,
                })

                // 5. Creation (ZUWOS Explodes from Singularity)
                .to(singularityRef.current, {
                    scale: 25, // Expansion
                    opacity: 0,
                    duration: 0.4,
                    ease: "power2.out",
                })
                .to(logoRef.current, {
                    opacity: 1,
                    scale: 1,
                    duration: 1, // Luxurious reveal time
                    ease: "elastic.out(1, 0.75)", // Refined, professional elasticity
                }, "<");

            // ScrollTrigger Binding
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse",
                animation: tl,
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-64 flex items-center justify-center overflow-visible">
            {/* The Singularity (Visual Merge Target) */}
            <div
                ref={singularityRef}
                className="absolute w-4 h-4 bg-primary rounded-full z-0 pointer-events-none"
                style={{
                    boxShadow: "0 0 20px rgba(0, 112, 244, 0.6)" // Hardcoded primary blue glow for safety
                }}
            />

            {/* Scattered App Icons */}
            {apps.map((app, i) => (
                <div
                    key={app.name}
                    ref={(el) => { iconsRef.current[i] = el; }}
                    className="absolute w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-xl border border-gray-100/50 backdrop-blur-sm group hover:scale-110 transition-transform duration-300 z-10"
                    style={{
                        color: app.color,
                        boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)'
                    }}
                >
                    {app.svg}
                </div>
            ))}

            {/* ZUWOS Full Brand Name Reveal */}
            <div
                ref={logoRef}
                className="absolute z-20 flex flex-col items-center justify-center text-center"
            >
                <div className="bg-primary p-4 rounded-3xl shadow-2xl mb-4">
                    <svg viewBox="0 0 100 100" className="w-16 h-16 fill-white">
                        <path d="M20 20 L80 20 L80 35 L45 75 L80 75 L80 90 L20 90 L20 75 L55 35 L20 35 Z" />
                    </svg>
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-black tracking-tightest text-graphite uppercase">
                    ZUWOS
                </h2>
                <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
            </div>

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-radial-gradient from-primary/5 via-transparent to-transparent pointer-events-none scale-150 -z-10" />
        </div>
    );
};

export default AppMergingAnimation;
