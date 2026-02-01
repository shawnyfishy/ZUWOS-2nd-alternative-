import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import TextRevealer from '../utils/TextRevealer'

export default function TheReveal() {
    const containerRef = useRef<HTMLElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
        const x = e.clientX - left - width / 2
        const y = e.clientY - top - height / 2
        mouseX.set(x)
        mouseY.set(y)
    }

    // Smooth mouse movement for spotlight
    const springX = useSpring(mouseX, { stiffness: 150, damping: 20 })
    const springY = useSpring(mouseY, { stiffness: 150, damping: 20 })

    // Parallax tilt for text
    const rotateX = useTransform(springY, [-300, 300], [5, -5])
    const rotateY = useTransform(springX, [-300, 300], [-5, 5])

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="pb-20 text-center relative overflow-hidden bg-coconut perspective-1000"
        >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none bg-[radial-gradient(#1E1919_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

            {/* Interactive Spotlight */}
            <motion.div
                style={{ x: springX, y: springY }}
                className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-multiply"
            />

            {/* Floating Orbs (for depth) */}
            <motion.div
                animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-12 w-32 h-32 bg-accent-yellow/10 blur-3xl rounded-full"
            />
            <motion.div
                animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-12 w-48 h-48 bg-accent-pink/10 blur-3xl rounded-full"
            />

            {/* Main Content with Parallax */}
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="container mx-auto px-6 relative z-10 pt-20"
            >
                <motion.div
                    initial={{ opacity: 0, z: 0 }}
                    whileInView={{ opacity: 1, z: 50 }}
                    transition={{ duration: 1 }}
                    className="mb-6 md:mb-8"
                >
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">The Vision</span>
                </motion.div>

                <div className="font-display font-bold text-3xl md:text-8xl text-graphite mb-10 md:mb-12 tracking-tighter leading-none flex flex-col items-center drop-shadow-sm">
                    <TextRevealer text="One Workplace." duration={1.2} className="justify-center" />
                    <div className="h-4 md:h-8" /> {/* Spacing */}
                    <TextRevealer text="One Operating System." delay={0.2} duration={1.2} className="justify-center" />
                </div>

                <motion.div
                    style={{ z: 20 }} // Slight depth lift
                >
                    <TextRevealer
                        text="Built in India. Engineered for the future of distributed work."
                        className="text-2xl md:text-3xl text-graphite/40 max-w-3xl mx-auto font-medium justify-center"
                        delay={0.6}
                        stagger={0.01}
                    />
                </motion.div>
            </motion.div>
        </section>
    )
}
