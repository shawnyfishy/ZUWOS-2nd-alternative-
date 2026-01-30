import { motion } from 'framer-motion'

export default function TheShift() {
    return (
        <section className="py-24 bg-graphite text-coconut relative overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-display font-bold text-5xl md:text-7xl mb-8 leading-none">
                            The<br />Workforce<br /><span className="text-primary">Has Changed.</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-coconut/80 max-w-md leading-relaxed">
                            Gen Z expects instant access, real-time recognition, and zero friction. One app, not ten.
                        </p>
                    </motion.div>
                </div>

                <div className="relative h-[600px] w-full flex items-center justify-center">
                    {/* Abstract representation of speed/connectivity */}
                    <motion.div
                        className="absolute w-64 h-64 border-2 border-primary rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute w-48 h-48 border-2 border-primary/50 rounded-full"
                        animate={{ scale: [1.2, 1, 1.2], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    />

                    <div className="relative z-10 p-8 bg-atlas rounded-2xl border border-coconut/10 max-w-sm">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-xl">🚀</div>
                            <div>
                                <div className="font-bold">Instant Reward</div>
                                <div className="text-sm text-coconut/60">Just now</div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="h-2 bg-coconut/20 rounded-full w-3/4"></div>
                            <div className="h-2 bg-coconut/20 rounded-full w-1/2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
