"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface SyncedGooeyTextProps {
    text: string;
    morphTime?: number;
    className?: string;
    textClassName?: string;
}

export function SyncedGooeyText({
    text,
    morphTime = 1,
    className,
    textClassName
}: SyncedGooeyTextProps) {
    const text1Ref = React.useRef<HTMLSpanElement>(null);
    const text2Ref = React.useRef<HTMLSpanElement>(null);
    const [currentText, setCurrentText] = React.useState(text);
    const [nextText, setNextText] = React.useState(text);
    const requestRef = React.useRef<number>(0);
    const startTimeRef = React.useRef<number | null>(null);
    const isMorphingRe = React.useRef(false);

    // Filter ID must be unique if used multiple times
    const filterId = React.useId();

    React.useEffect(() => {
        if (text !== currentText && !isMorphingRe.current) {
            setNextText(text);
            isMorphingRe.current = true;
            startTimeRef.current = null;
            requestRef.current = requestAnimationFrame(animate);
        }
    }, [text]);

    const animate = (time: number) => {
        if (!startTimeRef.current) startTimeRef.current = time;
        const progress = (time - startTimeRef.current) / 1000;

        let fraction = progress / morphTime;
        if (fraction > 1) fraction = 1;

        setMorph(fraction);

        if (fraction < 1) {
            requestRef.current = requestAnimationFrame(animate);
        } else {
            // Morph complete
            doCooldown();
        }
    };

    const setMorph = (fraction: number) => {
        if (text1Ref.current && text2Ref.current) {
            // Smoother blur: clamp to 12px max to keep text visible through filter
            const blurVal = Math.min(8 / fraction - 8, 12);

            text2Ref.current.style.filter = `blur(${blurVal}px)`;
            text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

            const inverseFraction = 1 - fraction;
            const inverseBlur = Math.min(8 / inverseFraction - 8, 12);

            text1Ref.current.style.filter = `blur(${inverseBlur}px)`;
            text1Ref.current.style.opacity = `${Math.pow(inverseFraction, 0.4) * 100}%`;
        }
    };

    const doCooldown = () => {
        // Swap text and reset styles
        setCurrentText(nextText);
        isMorphingRe.current = false;

        if (text1Ref.current && text2Ref.current) {
            text2Ref.current.style.filter = "blur(0px)";
            text2Ref.current.style.opacity = "100%";
            text1Ref.current.style.filter = "blur(0px)";
            text1Ref.current.style.opacity = "0%";

            // Note: In this logic text2 is the "entering" text (nextText) and text1 is "leaving" (currentText)
            // But we need to reset them for the next cycle.
            // Actually, simpler approach:
            // At start of morph: Text1 = Old, Text2 = New. Text2 fades IN, Text1 fades OUT.
            // At end: We effectively have New visible.
            // So we update state so Text1 = New, and reset their opacities so Text1 is visible, Text2 is hidden/ready.
        }
    };

    // Better implementation for React controlled flow:
    // We only need valid animation when prop changes.
    // Let's rely on standard state updates for content, but manual DOM manipulation for the fluid filter effect.

    return (
        <div className={cn("relative h-40 w-full", className)} style={{ filter: `url(#${filterId})` }}>
            <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
                <defs>
                    <filter id={filterId}>
                        <feColorMatrix
                            in="SourceGraphic"
                            type="matrix"
                            values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
                        />
                    </filter>
                </defs>
            </svg>

            <div className="flex items-center justify-start h-full relative">
                {/* Text 1: The 'Current' Text. Starts visible. Fades out during morph. */}
                <span
                    ref={text1Ref}
                    className={cn(
                        "absolute inline-block select-none text-left text-5xl md:text-7xl font-display font-bold tracking-tighter",
                        "text-graphite",
                        textClassName
                    )}
                    style={{ opacity: 1, filter: 'blur(0px)' }}
                >
                    {currentText}
                </span>

                {/* Text 2: The 'Next' Text. Starts invisible. Fades in during morph. */}
                <span
                    ref={text2Ref}
                    className={cn(
                        "absolute inline-block select-none text-left text-5xl md:text-7xl font-display font-bold tracking-tighter",
                        "text-graphite",
                        textClassName
                    )}
                    style={{ opacity: 0, filter: 'blur(0px)' }}
                >
                    {nextText}
                </span>
            </div>
        </div>
    );
}
