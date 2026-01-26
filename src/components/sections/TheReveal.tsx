import { motion } from 'framer-motion'

export default function TheReveal() {
    return (
        <section className="py-32 bg-coconut text-center">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Solution</span>
                    <h2 className="font-display font-bold text-5xl md:text-8xl text-graphite mb-8">
                        One Workplace.<br />
                        One Operating System.
                    </h2>
                    <p className="text-2xl text-graphite/60 max-w-2xl mx-auto">
                        Built in India. Built for real workplaces.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
