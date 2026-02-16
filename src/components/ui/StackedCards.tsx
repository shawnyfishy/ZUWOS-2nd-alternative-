"use client";

import { useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface CardProps {
    className?: string;
    icon?: React.ElementType; // Using Lucide icons instead of avatars
    title?: string; // Replaces 'username'
    subtitle?: string; // Replaces 'handle'
    description?: string; // Replaces 'content'
    onHover?: () => void;
    onLeave?: () => void;
    isActive?: boolean;
    onTap?: () => void;
}

function StackedCard({
    className,
    icon: Icon,
    title,
    subtitle,
    description,
    onHover,
    onLeave,
    isActive,
    onTap,
}: CardProps) {
    const handleClick = (e: React.MouseEvent | React.TouchEvent) => {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) {
            if (!isActive) {
                e.preventDefault();
                onTap?.();
            }
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const fakeEvent = { preventDefault: () => { } } as React.MouseEvent; // Mock for compatibility if needed
            handleClick(fakeEvent);
            if (!isActive && onTap) onTap();
        }
    };

    return (
        <div
            role="button"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={cn(
                "relative flex h-auto min-h-[220px] w-[300px] sm:w-[380px] -skew-y-[8deg] select-none flex-col rounded-2xl border border-graphite/10 bg-white backdrop-blur-xl px-6 py-6 transition-all duration-500 hover:border-primary/50 hover:shadow-brutalist cursor-pointer shadow-xl",
                isActive && "ring-2 ring-primary/50",
                className
            )}
        >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    {Icon && <Icon className="w-6 h-6" />}
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-xl text-graphite truncate">{title}</h3>
                    <p className="text-sm text-graphite/60">{subtitle}</p>
                </div>
            </div>

            {/* Content */}
            <p className="text-graphite/80 text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export interface StackedCardsProps {
    items?: CardProps[];
}

export default function StackedCards({ items }: StackedCardsProps) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const getCardClassName = (index: number, baseClassName: string) => {
        const focusedIndex = hoveredIndex ?? activeIndex;

        if (focusedIndex === 0 && index === 1) {
            return baseClassName + " !translate-y-20 sm:!translate-y-32 !-translate-x-14 sm:!-translate-x-24";
        }
        if (focusedIndex === 0 && index === 2) {
            return baseClassName + " !translate-y-28 sm:!translate-y-44 !-translate-x-24 sm:!-translate-x-40";
        }
        if (focusedIndex === 1 && index === 2) {
            return baseClassName + " !translate-y-24 sm:!translate-y-40 !-translate-x-24 sm:!-translate-x-40";
        }
        return baseClassName;
    };

    const handleTap = (index: number) => {
        if (activeIndex === index) return;
        setActiveIndex(index);
    };

    if (!items) return null;

    return (
        <div className="relative h-[500px] flex items-center justify-center">
            <div className="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700">
                {items.map((item, index) => (
                    <StackedCard
                        key={index}
                        {...item}
                        className={cn(
                            getCardClassName(index, item.className || ""),
                            hoveredIndex === index ? "z-[60]" : "" // Bring to front on hover
                        )}
                        onHover={() => setHoveredIndex(index)}
                        onLeave={() => setHoveredIndex(null)}
                        isActive={activeIndex === index}
                        onTap={() => handleTap(index)}
                    />
                ))}
            </div>
        </div>
    );
}
