import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'
import Hero from '../components/sections/Hero'
import ValueProposition from '../components/sections/ValueProposition'
import BentoGrid from '../components/sections/BentoGrid'
import TheReveal from '../components/sections/TheReveal'
import AntiBigTech from '../components/sections/AntiBigTech'
import Footer from '../components/layout/Footer'
import { StickySection } from '../components/utils/StickySection'

export default function Home() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const backgroundColor = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        ["#F7F5F2", "#E4E4E7", "#F7F5F2"] // Coconut -> Zinc-200 -> Coconut
    )

    return (
        <PageTransition>
            <Navbar />
            <motion.main ref={containerRef} style={{ backgroundColor }}>
                <Hero />

                <StickySection zIndex={10} isTall className="-mt-24 rounded-t-[3.5rem] bg-coconut border-t border-graphite/5 shadow-[0_-30px_60px_rgba(0,0,0,0.1)] pt-24 md:pt-32">
                    <div id="solutions">
                        <ValueProposition />
                    </div>
                </StickySection>

                <StickySection zIndex={20} isTall className="-mt-24 rounded-t-[3.5rem] bg-coconut border-t border-graphite/5 shadow-[0_-30px_60px_rgba(0,0,0,0.1)] pt-24 md:pt-32">
                    <div id="features">
                        <BentoGrid />
                    </div>
                </StickySection>

                <StickySection zIndex={30} className="-mt-24 rounded-t-[3.5rem] bg-coconut border-t border-graphite/5 shadow-[0_-30px_60px_rgba(0,0,0,0.1)] pt-24 md:pt-32 h-[150vh]">
                    <div id="vision">
                        <TheReveal />
                    </div>
                </StickySection>

                <StickySection zIndex={40} isTall className="-mt-24 rounded-t-[3.5rem] bg-graphite border-t border-coconut/10 shadow-[0_-30px_60px_rgba(0,0,0,0.4)] pt-24 md:pt-32 text-coconut">
                    <div id="manifesto">
                        <AntiBigTech />
                    </div>
                </StickySection>
            </motion.main>
            <Footer />
        </PageTransition>
    )
}
