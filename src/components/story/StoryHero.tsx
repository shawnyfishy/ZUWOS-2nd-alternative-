import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { BeamsBackground } from '../ui/BeamsBackground'
import TextRevealer from '../utils/TextRevealer'

export default function StoryHero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
    const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"])

    return (
        <div ref={ref} className="h-[150vh] bg-black text-white relative">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
                <BeamsBackground />

                <motion.div
                    style={{ opacity, scale, filter: `blur(${blur})` }}
                    className="relative z-10 text-center px-4"
                >
                    <div className="text-display-md md:text-display-lg font-display font-bold mb-12 tracking-tighter leading-[1.05] flex flex-col items-center">
                        <TextRevealer text="Work has changed." duration={1.2} className="justify-center" />
                        <TextRevealer text="Why hasn't your software?" className="text-white/40 justify-center" delay={0.2} duration={1.2} />
                    </div>

                    <TextRevealer
                        text="Breaking free from Big Tech. Built for India's Gen Z. The first Indigenous Workplace OS."
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto justify-center text-center"
                        delay={0.6}
                        stagger={0.01}
                    />
                </motion.div>
            </div>
        </div>
    )
}
