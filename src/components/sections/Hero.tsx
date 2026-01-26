import { motion, useScroll, useTransform } from 'framer-motion'
import { GridSystem } from '../layout/GridSystem'
import VariableHeading from '../ui/VariableHeading'

export default function Hero() {
    const { scrollY } = useScroll()
    const y = useTransform(scrollY, [0, 500], [0, 200])

    return (
        <section className="min-h-screen bg-coconut text-graphite pt-32 pb-20 overflow-hidden relative">
            <GridSystem>
                <div className="col-span-12 lg:col-span-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "snappy" feel
                    >
                        {/* Variable Font Heading */}
                        <div className="text-display-md md:text-display-lg font-display mb-12 tracking-tighter leading-[1.05]">
                            <VariableHeading
                                text="India’s Integrated"
                                fromWeight={400}
                                toWeight={700}
                            />
                            <br />
                            <VariableHeading
                                text="Workplace Management OS"
                                fromWeight={400}
                                toWeight={700}
                                className="text-primary"
                            />
                        </div>
                    </motion.div>
                </div>

                <div className="col-span-12 lg:col-span-6">
                    <motion.p
                        className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        ZUWOS is the Indigenous Workplace OS defined by precision, transparency, and unity. One platform for the new age workforce.
                    </motion.p>
                </div>

                {/* Abstract Floating Element */}
                <motion.div
                    style={{ y }}
                    className="absolute top-20 right-[-10%] w-[40vw] h-[40vw] bg-accent-blue rounded-full blur-[100px] opacity-50 pointer-events-none"
                />
            </GridSystem>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-coconut to-transparent pointer-events-none"></div>
        </section>
    )
}
