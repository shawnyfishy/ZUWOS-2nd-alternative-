import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GridSystem } from '../layout/GridSystem'
import CinematicReveal from '../utils/CinematicReveal'
import Magnetic from '../utils/Magnetic'
import { Button } from '../ui/Button'
import TextRevealer from '../utils/TextRevealer'
import { GooeyText } from '../ui/GooeyText'

export default function Hero() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
    const blur = useTransform(scrollYProgress, [0, 0.5], ["0px", "10px"])

    return (
        <div ref={ref} className="min-h-0 md:min-h-[90vh] pb-0 md:pb-12 bg-coconut relative z-0">
            <div className="sticky top-0">
                <motion.div
                    style={{ opacity, scale, filter: `blur(${blur})` }}
                    className="w-full h-full pt-20 md:pt-32 pb-12 md:pb-12 flex flex-col justify-start md:justify-center"
                >
                    <GridSystem>
                        <div className="col-span-12 lg:col-span-10">
                            <div className="text-4xl sm:text-display-sm md:text-display-md lg:text-display-lg font-display mb-4 md:mb-12 tracking-tighter leading-[1.05] flex flex-col items-start">
                                <TextRevealer
                                    text="India’s Integrated"
                                />
                                <div className="h-20 md:h-32 w-full relative -mt-1 md:-mt-4">
                                    <GooeyText
                                        texts={["Workplace Management OS", "Employee Super-App", "Smart Facility Control"]}
                                        textClassName="text-blue-600 leading-tight text-[clamp(1.75rem,6vw,4.5rem)] pb-2"
                                        morphTime={1.5}
                                        cooldownTime={0.5}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-7 -mt-4 md:-mt-12">
                            <TextRevealer
                                text="ZUWOS is an Indigenous Workplace Operating System, built for the new-age workforce, that seamlessly manages workflows with data sovereignty and unifies every stakeholder on one platform"
                                className="text-lg md:text-3xl font-medium leading-relaxed tracking-tight mb-4 md:mb-12 text-graphite/80"
                                delay={0.3}
                                stagger={0.01}
                            />

                            <CinematicReveal direction="up" delay={0.5} viewportMargin="0px">
                                <div className="flex flex-wrap gap-6">
                                    <Magnetic strength={0.4}>
                                        <Link to="/request-access">
                                            <Button
                                                size="lg"
                                                variant="primary"
                                                className="w-full sm:w-auto rounded-full px-12 py-4 text-lg"
                                                data-cursor="Get Started"
                                            >
                                                Get Started
                                            </Button>
                                        </Link>
                                    </Magnetic>
                                </div>
                            </CinematicReveal>
                        </div>
                    </GridSystem>

                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-coconut to-transparent pointer-events-none"></div>
                </motion.div>
            </div>
        </div>
    )
}
