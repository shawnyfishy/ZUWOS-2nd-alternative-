"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface GooeyTextProps {
    texts: string[];
    morphTime?: number;
    cooldownTime?: number;
    className?: string;
    textClassName?: string;
}

export function GooeyText({
    texts,
    morphTime = 1,
    cooldownTime = 0.25,
    className,
    textClassName
}: GooeyTextProps) {
    const text1Ref = React.useRef<HTMLSpanElement>(null);
    const text2Ref = React.useRef<HTMLSpanElement>(null);

    React.useEffect(() => {
        let textIndex = texts.length - 1;
        let time = new Date();
        let morph = 0;
        let cooldown = cooldownTime;
        let frameId: number;

        // Initialize text content immediately so it's not blank
        if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[0];
            text2Ref.current.textContent = texts[0];
        }

        const setMorph = (fraction: number) => {
            // @ts-ignore
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
            morph = 0;
            // @ts-ignore
            if (text1Ref.current && text2Ref.current) {
                text2Ref.current.style.filter = "blur(0px)";
                text2Ref.current.style.opacity = "100%";
                text1Ref.current.style.filter = "blur(0px)";
                text1Ref.current.style.opacity = "0%";
            }
        };

        const doMorph = () => {
            morph -= cooldown;
            cooldown = 0;
            let fraction = morph / morphTime;

            if (fraction > 1) {
                cooldown = cooldownTime;
                fraction = 1;
            }

            setMorph(fraction);
        };

        function animate() {
            frameId = requestAnimationFrame(animate);
            const newTime = new Date();
            const shouldIncrementIndex = cooldown > 0;
            let dt = (newTime.getTime() - time.getTime()) / 1000;
            time = newTime;

            // Clamp delta time to avoid huge jumps on frame drops (max 0.1s)
            if (dt > 0.1) dt = 0.1;

            cooldown -= dt;

            if (cooldown <= 0) {
                if (shouldIncrementIndex) {
                    textIndex = (textIndex + 1) % texts.length;
                    // @ts-ignore
                    if (text1Ref.current && text2Ref.current) {
                        text1Ref.current.textContent = texts[textIndex % texts.length];
                        text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
                    }
                }
                doMorph();
            } else {
                doCooldown();
            }
        }

        animate();

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [texts, morphTime, cooldownTime]);

    return (
        <div className={cn("relative h-40 w-full filter-[url(#threshold)]", className)}>
            <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
                <defs>
                    <filter id="threshold">
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

            <div
                className="flex items-center justify-start h-full w-full relative"
            >
                <span
                    ref={text1Ref}
                    className={cn(
                        "absolute inline-block select-none text-left font-display font-bold tracking-tighter w-full",
                        "text-primary",
                        textClassName
                    )}
                />
                <span
                    ref={text2Ref}
                    className={cn(
                        "absolute inline-block select-none text-left font-display font-bold tracking-tighter w-full",

                        textClassName
                    )}
                />
            </div>
        </div>
    );
}
