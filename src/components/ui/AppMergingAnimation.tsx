import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_DURATION } from '../../utils/constants';

gsap.registerPlugin(ScrollTrigger);

/**
 * AppMergingAnimation
 * 
 * Refined for "Organic" Feel:
 * - Placement: True Random distribution with Collision Detection (No Overlap).
 * - Motion: Fluid "Float" phase before merging.
 * - Speed: Slower, cinematic timing.
 * - Perf: Hardware accelerated.
 */
const AppMergingAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

    // 24 High-Quality Inline SVGs
    const apps = [
        // 1. Communication
        { name: 'Slack', color: '#4A154B', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.042 15.165a2.528 2.528 0 01-2.52 2.523A2.528 2.528 0 010 15.165a2.527 2.527 0 012.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 012.521-2.52 2.527 2.527 0 012.521 2.52v6.313A2.528 2.528 0 018.834 24a2.528 2.528 0 01-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 01-2.521-2.52A2.528 2.528 0 018.834 0a2.528 2.528 0 012.521 2.522v2.52H8.834zM8.834 6.313a2.527 2.527 0 012.521 2.521 2.527 2.527 0 01-2.521 2.521H2.522A2.528 2.528 0 010 8.834a2.528 2.528 0 012.522-2.521h6.312zM18.958 8.834a2.528 2.528 0 012.522-2.521A2.528 2.528 0 0124 8.834a2.527 2.527 0 01-2.52 2.521h-2.522v-2.521zM17.687 8.834a2.528 2.528 0 01-2.521 2.521 2.527 2.527 0 01-2.521-2.521V2.522A2.528 2.528 0 0115.166 0a2.528 2.528 0 012.521 2.522v6.312zM15.166 18.958a2.528 2.528 0 012.521 2.521 2.528 2.528 0 01-2.521 2.521v-2.521h2.521zM15.166 17.687a2.527 2.527 0 01-2.521-2.521 2.527 2.527 0 012.521-2.521h6.312A2.528 2.528 0 0124 15.166a2.528 2.528 0 01-2.52 2.521h-6.314z" /></svg> },
        { name: 'Microsoft Teams', color: '#6264A7', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 5.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h10zm-10 1a.5.5 0 0 0-.5.5v2.5h2.5v-3h-2zm4.5 0h-2.5v3h3v-2.5a.5.5 0 0 0-.5-.5zm4.5 0h-2.5v3h2.5v-3zm0 4.5h-2.5v3h2.5v-3zm-4.5 0h-3v3h3v-3zm-4.5 0h-2.5v3h3v-3zm0 4.5h-2.5v2.5a.5.5 0 0 0 .5.5h2v-3zm4.5 0h-3v3h3v-3zm4.5 0h-3v3h2.5a.5.5 0 0 0 .5-.5v-2.5z" /></svg> },
        { name: 'Zoom', color: '#2D8CFF', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 8C4 5.79086 5.79086 4 8 4H16C18.2091 4 20 5.79086 20 8V16C20 18.2091 18.2091 20 16 20H8C5.79086 20 4 18.2091 4 16V8Z" opacity="0.1" /><path d="M14.5 11L19 7.5V16.5L14.5 13V16C14.5 17.1046 13.6046 18 12.5 18H6.5C5.39543 18 4.5 17.1046 4.5 16V8C4.5 6.89543 5.39543 6 6.5 6H12.5C13.6046 6 14.5 6.89543 14.5 8V11Z" /></svg> },
        { name: 'Google Meet', color: '#00897B', svg: <svg viewBox="0 0 24 24"><path fill="#00897b" d="M12.5 12.5H20V20c0 .3-.1.6-.4.8l-7.1-8.3z" /><path fill="#00b248" d="M20 4v8.5h-7.5l-7.1 8.3c-.2-.2-.4-.5-.4-.8V4c0-1.1.9-2 2-2h11c1.1 0 2 .9 2 2z" /><path fill="#ff9100" d="M12.5 12.5l7.1 8.3c-.2.2-.5.4-.8-.4h-6.3c-.3 0-.6-.1-.8-.4l-.8-1.1L12.5 12.5z" /><path fill="#f44336" d="M5 20.8V12.5l7.5 0-1.6 7.1-.8 1.2c-.2.2-.5.4-.8.4H6c1.1 0 2-.9 2-2z" transform="scale(-1,1) translate(-10,0)" /><polygon fill="#f44336" points="5,12.5 5,20.8 5.4,21.2 12.5,12.5" /><path fill="#4285f4" d="M23 18l-3-2.5v-7l3-2.5c.6-.5 1.5-.1 1.5.7v10.6c0 .8-.9 1.2-1.5.7z" /></svg> },

        // 2. Productivity
        { name: 'Notion', color: '#000000', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.539.314.819.537 1.15.537.33 0 .44-.11.839-.537l2.87-3.085c.668-.616 1.341-1.121 2.379-1.121h7.842c.88 0 1.54.493 1.54 1.39v18.175c0 .584-.33 1.054-1.054 1.054-.373 0-.74-.156-1.077-.38L16.29 18.23c-.33-.223-.518-.337-.881-.337s-.603.111-.99.336L9.894 21.62c-.77.447-1.343.336-1.343-.674V4.94c0-.606-.188-.853-.66-.853-.33 0-.64.135-1.054.405l-2.486 1.63L4.459 4.208zm1.094 15.688l2.992-1.854V4.207L5.553 6.062v13.834zm3.957-1.854l4.958-3.09V3.535l-4.958 3.146v11.353zm5.923-3.652l3.414 2.133V3.029l-3.414 2.133v9.221z" /></svg> },
        { name: 'Asana', color: '#273347', svg: <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="5" r="3" fill="#F06A6A" /><circle cx="17" cy="12" r="3" fill="#FCBD01" /><circle cx="7" cy="12" r="3" fill="#F99B7D" /></svg> },
        { name: 'Trello', color: '#0052CC', svg: <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="2" fill="#0079BF" /><rect x="6" y="6" width="5" height="9" rx="1" fill="white" /><rect x="13" y="6" width="5" height="6" rx="1" fill="white" /></svg> },
        { name: 'Monday.com', color: '#FF3D57', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H8v-9h2v9zm4 0h-2v-6h2v6zm4 0h-2V7h2v10z" fill="#00C875" /></svg> },
        { name: 'Jira', color: '#0052CC', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.5 10.5l-6-6c-1-1-2.5-1-3.5 0s-1 2.5 0 3.5l6 6c1 1 2.5 1 3.5 0s1-2.5 0-3.5z" fill="#2684FF" /><path d="M17.5 4.5l-6 6c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l6-6c1-1 1-2.5 0-3.5s-2.5-1-3.5 0z" fill="#0052CC" /><path d="M17.5 12.5l-6 6c-1 1-1 2.5 0 3.5s2.5 1 3.5 0l6-6c1-1 1-2.5 0-3.5s-2.5-1-3.5 0z" fill="#0052CC" /></svg> },
        { name: 'Airtable', color: '#18BFFF', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 6l10 4 10-4-10-4zm0 6l-10 4 10 4 10-4-10-4zm0 6l-10 4 10 4 10-4-10-4z" transform="rotate(180 12 12)" fill="#FCB400" /><path d="M11 11H3v8h8v-8zm10 0h-8v8h8v-8zm0-10H3v8h18V1z" fill="currentColor" /></svg> },

        // 3. Design
        { name: 'Figma', color: '#F24E1E', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M8 12a4 4 0 1 1 0-8h4v8H8z" fill="#F24E1E" /><path d="M8 12a4 4 0 1 1 0 8h4v-8H8z" fill="#0ACF83" /><path d="M12 4h4a4 4 0 0 1 0 8h-4V4z" fill="#FF7262" /><path d="M12 12h4a4 4 0 0 1 0 8 4 4 0 0 1-4-4v-4z" fill="#1ABCFE" /><circle cx="12" cy="12" r="4" fill="#A259FF" /></svg> },
        { name: 'Canva', color: '#00C4CC', svg: <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="12" fill="#00C4CC" /><path d="M7 12c0-2.5 2-5 5-5s5 2.5 5 5-2 5-5 5-5-2.5-5-5z" fill="white" transform="scale(0.6) translate(8,8)" /></svg> },
        { name: 'Miro', color: '#050038', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 19h4V5H4v14zm6 0h4V9h-4v10zm6 0h4v-6h-4v6z" fill="#FFD02F" /></svg> },

        // 4. Storage & Enterprise
        { name: 'Dropbox', color: '#0061FE', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 3l5 3.5L17 3v5.5l-5 3.5-5-3.5V3zM7 11.5l5 3.5 5-3.5V17l-5 3.5-5-3.5v-5.5z" /></svg> },
        { name: 'Google Drive', color: '#4285F4', svg: <svg viewBox="0 0 24 24"><path fill="#FFC107" d="M8.5 17h7L12 11 8.5 17zM12 6.5l-3.5 6 3.5 6 3.5-6-3.5-6z" /><path fill="#4CAF50" d="M15.5 17L12 23h7c1.1 0 2-.9 2-2v-4h-5.5z" /><path fill="#1976D2" d="M19 13v-4h-7l-3.5 6h7l3.5-2z" /><path fill="#FF5722" d="M8.5 17l-3.5-6L1.5 17h7z" /></svg> },
        { name: 'OneDrive', color: '#0078D4', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 7.5a3.5 3.5 0 0 0-3.5 3.5c0 .3.05.6.15.9L9 14.5 5.5 11 2 14.5 6.5 19h11a4.5 4.5 0 0 0 0-9h-1.5c0-1.4-1.1-2.5-2.5-2.5z" /></svg> },

        // 5. Enterprise
        { name: 'Salesforce', color: '#00A1E0', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.125 6.094c-.282.844-.844 1.5-1.594 1.875A3.85 3.85 0 0 0 12 7.031c-2.156 0-3.938 1.781-3.938 3.938 0 .469.094.844.281 1.219A4.75 4.75 0 0 0 4.5 14.25c0 2.625 2.156 4.781 4.781 4.781h9.188c2.438 0 4.406-1.969 4.406-4.406 0-2.344-1.781-4.219-4.031-4.406-.188-2.344-2.156-4.125-4.594-4.125-.094 0-.141 0-.125 0z" /></svg> },
        { name: 'Workday', color: '#005CB9', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5h4v14H2V5zm16 0h4v14h-4V5zm-8 4h4v10h-4V9z" /></svg> },
        { name: 'Oracle', color: '#F80000', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" /></svg> },
        { name: 'SAP', color: '#008FD3', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12l-9-9-9 9 9 9 9 9 9 9 9-9z" /></svg> },
        { name: 'BambooHR', color: '#61A60E', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-7v4h3l-4 7z" /></svg> },
        { name: 'ADP', color: '#D0271D', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" /></svg> },
        { name: 'Zendesk', color: '#03363D', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zm-9 9h7v7H4v-7zm9 0h7v7h-7v-7z" /></svg> },
        { name: 'Shopify', color: '#96BF48', svg: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6l2-2 14 2-2 14-10 2L4 6z" /></svg> },
    ];

    useEffect(() => {
        if (!containerRef.current || !logoRef.current) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add({
                isDesktop: "(min-width: 1024px)",
                isMobile: "(max-width: 1023px)",
            }, (context) => {
                const { isDesktop } = context.conditions as any;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 60%",
                        end: "bottom center",
                        toggleActions: "play none none reverse",
                    },
                    defaults: { ease: "power2.inOut" }
                });

                // --- PLACEMENT ALGORITHM ---
                const width = containerRef.current!.offsetWidth;
                const height = isDesktop ? 600 : 400; // Match container height

                const positions: { x: number, y: number }[] = [];
                const minDistance = isDesktop ? 100 : 60;

                for (let i = 0; i < apps.length; i++) {
                    let check = false;
                    let x = 0, y = 0;
                    let attempts = 0;

                    while (!check && attempts < 100) {
                        if (isDesktop) {
                            // True Random Scatter for Desktop
                            // Increased margins to prevent clipping at edges
                            x = (Math.random() - 0.5) * (width - 180);
                            y = (Math.random() - 0.5) * (height - 150);
                        } else {
                            // Constrained Scatter for Mobile (Vertical Bias)
                            // Keep X within narrow bounds to prevent horizontal overflow
                            x = (Math.random() - 0.5) * (Math.min(width, 240) - 80);
                            y = (Math.random() - 0.5) * (height - 140);
                        }

                        // Check collision
                        check = true;
                        for (const pos of positions) {
                            const dist = Math.hypot(pos.x - x, pos.y - y);
                            if (dist < minDistance) {
                                check = false;
                                break;
                            }
                        }
                        attempts++;
                    }
                    positions.push({ x, y });
                }

                // --- ANIMATION SETUP ---
                elementsRef.current.forEach((el, i) => {
                    if (!el) return;
                    gsap.set(el, {
                        x: positions[i].x,
                        y: positions[i].y,
                        opacity: 0,
                        scale: 0,
                        rotation: (Math.random() - 0.5) * 20,
                        force3D: true,
                    });
                });

                // LOGO initial state
                gsap.set(logoRef.current, { opacity: 0, scale: 0 });

                // --- SEQUENCE ---
                tl.to(elementsRef.current, {
                    opacity: 1,
                    scale: isDesktop ? 1 : 0.6, // Smaller on mobile to prevent clipping
                    duration: ANIMATION_DURATION.SLOW,
                    stagger: {
                        from: "random",
                        amount: 0.4
                    },
                    ease: "power3.out",
                })
                    .to(elementsRef.current, {
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 0,
                        duration: 1.3,
                        ease: "expo.in",
                        stagger: {
                            from: "center",
                            amount: 0.05
                        }
                    }, "+=0.2")
                    .to(logoRef.current, {
                        opacity: 1,
                        scale: 1,
                        duration: ANIMATION_DURATION.EPIC,
                        ease: "elastic.out(1, 0.3)",
                    }, "-=0.1");
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] flex items-center justify-center overflow-hidden bg-transparent perspective-1000 pb-10 md:pb-32"
        >
            {/* NO Singularity Dot anymore */}

            {apps.map((app, i) => (
                <div
                    key={`app-${i}`}
                    ref={(el) => { elementsRef.current[i] = el; }}
                    className="absolute z-10 w-14 h-14 bg-white rounded-xl flex items-center justify-center p-3 will-change-transform shadow-md"
                    title={app.name}
                    style={{ color: app.color }}
                >
                    {app.svg}
                </div>
            ))}

            <div
                ref={logoRef}
                className="absolute z-20 flex flex-col items-center justify-center text-center will-change-transform"
            >
                <div className="bg-primary p-6 md:p-8 rounded-[2.5rem] shadow-xl mb-6 md:mb-8">
                    <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 fill-white">
                        <path d="M20 20 L80 20 L80 35 L45 75 L80 75 L80 90 L20 90 L20 75 L55 35 L20 35 Z" />
                    </svg>
                </div>
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-graphite uppercase">
                    ZUWOS
                </h2>
                {/* REMOVED BLUE LINE */}
            </div>
        </div>
    );
};

export default AppMergingAnimation;
