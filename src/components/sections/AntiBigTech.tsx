import { motion } from 'framer-motion'
import { Button } from '../ui/Button'
import { CheckCircle2 } from 'lucide-react'

export default function AntiBigTech() {
    return (
        <section className="py-24 bg-graphite text-coconut relative" id="manifesto">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        className="font-display font-bold text-4xl md:text-6xl mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Big Tech sells software licenses.<br />
                        <span className="text-primary">We build workplace infrastructure.</span>
                    </motion.h2>

                    <div className="space-y-6 text-lg text-coconut/80 mb-10">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-success mt-1" />
                            <p>No per-user licensing dependency. Own your data, control your costs.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-success mt-1" />
                            <p>Built for Indian compliance & realities. GST, TDS, and local workflows native.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-success mt-1" />
                            <p>Customisable, extensible, sovereign. Your OS, your rules.</p>
                        </div>
                    </div>

                    <Button size="lg" className="w-full sm:w-auto h-16 text-lg">
                        Join the Indigenous WorkTech Movement
                    </Button>
                </div>

                <div className="bg-atlas p-8 md:p-12 rounded-2xl border border-coconut/10 relative overflow-hidden">
                    {/* Abstract visual of Sovereign Tech */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>

                    <h3 className="font-bold text-2xl mb-8 relative z-10">The ZUWOS Promise</h3>

                    <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-center border-b border-coconut/10 pb-4">
                            <span className="text-coconut/60">Data Sovereignty</span>
                            <span className="font-bold text-success">100% On-Premise / Private Cloud</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-coconut/10 pb-4">
                            <span className="text-coconut/60">Licensing Model</span>
                            <span className="font-bold text-success">Enterprise Flat Fee</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-coconut/10 pb-4">
                            <span className="text-coconut/60">Implementation</span>
                            <span className="font-bold text-success">Weeks, not Months</span>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-coconut/10 text-center">
                        <p className="font-display text-3xl font-bold">This is not software.<br />This is how modern Indian workplaces operate.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
