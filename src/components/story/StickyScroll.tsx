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
                <div className="w-full md:w-[35%] flex flex-col items-center">
                    <div className="max-w-xs">
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
                </div>

                <div className="hidden md:block sticky top-[20vh] h-[60vh] w-[65%] rounded-md overflow-hidden bg-transparent">
                    {content.map((item, index) => (
                        <motion.div
                            key={item.title + index}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: activeCard === index ? 1 : 0,
                                zIndex: activeCard === index ? 10 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                            className={cn(
                                "absolute inset-0 h-full w-full flex items-center justify-center",
                                contentClassName
                            )}
                        >
                            {item.content ?? null}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
