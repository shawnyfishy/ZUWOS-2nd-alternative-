import { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const StickyScroll = ({
    content,
    contentClassName,
    titleClassName,
    descriptionClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.floor(latest * cardLength),
            cardLength - 1
        );
        if (index !== activeCard) {
            setActiveCard(Math.max(0, index));
        }
    });



    return (
        <div ref={ref} className="relative py-20">
            <div className="flex justify-between items-start">
                <div className="w-full md:w-1/2">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="min-h-[60vh] flex flex-col justify-center">
                            <motion.h2
                                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                                transition={{ duration: 0.5 }}
                                className={cn(
                                    "text-3xl md:text-5xl font-bold font-display tracking-tight",
                                    titleClassName || "text-slate-100"
                                )}
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                animate={{ opacity: activeCard === index ? 1 : 0.2 }}
                                transition={{ duration: 0.5 }}
                                className={cn(
                                    "text-xl max-w-lg mt-8 leading-relaxed",
                                    descriptionClassName || "text-slate-400"
                                )}
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                </div>

                <div className="hidden md:block sticky top-[20vh] h-[60vh] w-1/2 flex items-center justify-center">
                    <motion.div
                        key={activeCard}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 1.1, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={cn(
                            "w-full h-full rounded-3xl overflow-hidden glass shadow-2xl relative",
                            contentClassName
                        )}
                    >
                        {/* Soft glow behind content */}
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2" />
                        <div className="relative z-10 w-full h-full flex items-center justify-center p-0">
                            {content[activeCard].content ?? null}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
