import { Link } from 'react-router-dom'
import CinematicReveal from '../utils/CinematicReveal'
import Magnetic from '../utils/Magnetic'
import { Button } from '../ui/Button'
import { CheckCircle2 } from 'lucide-react'
import TextRevealer from '../utils/TextRevealer'

export default function AntiBigTech() {
    return (
        <section className="py-32 bg-graphite text-coconut relative overflow-hidden" id="manifesto">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
                <div>
                    <div className="font-display font-bold text-4xl md:text-6xl mb-12 tracking-tighter leading-tight flex flex-col items-start">
                        <TextRevealer text="Big Tech sells software licenses." />
                        <TextRevealer text="We build workplace infrastructure." className="text-primary italic" delay={0.1} />
                    </div>

                    <div className="space-y-8 text-xl text-coconut/60 mb-14">
                        {[
                            "No per-user licensing dependency. Own your data, control your costs.",
                            "Built for Indian compliance & realities. GST, TDS, and local workflows native.",
                            "Customisable, extensible, sovereign. Your OS, your rules."
                        ].map((text, i) => (
                            <CinematicReveal key={i} delay={0.4 + (i * 0.1)}>
                                <div className="flex items-start gap-6 group">
                                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0 transition-transform group-hover:scale-110" />
                                    <p className="group-hover:text-coconut transition-colors">{text}</p>
                                </div>
                            </CinematicReveal>
                        ))}
                    </div>

                    <CinematicReveal delay={0.8}>
                        <Magnetic strength={0.3}>
                            <Link to="/request-access">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 text-xl rounded-none font-bold"
                                    data-cursor="JOIN"
                                >
                                    Join the Movement
                                </Button>
                            </Link>
                        </Magnetic>
                    </CinematicReveal>
                </div>

                <CinematicReveal direction="left" delay={0.3}>
                    <div
                        className="bg-atlas p-10 md:p-14 rounded-3xl border border-coconut/10 relative overflow-hidden shadow-2xl"
                        data-cursor="The Promise"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[120px] rounded-full"></div>

                        <h3 className="font-bold text-2xl mb-12 relative z-10 tracking-widest uppercase text-primary/80">The ZUWOS Promise</h3>

                        <div className="space-y-8 relative z-10">
                            {[
                                { label: "Data Sovereignty", value: "100% Sovereign Cloud" },
                                { label: "Licensing Model", value: "Enterprise Flat Fee" },
                                { label: "Implementation", value: "Standard 4-Week Sync" }
                            ].map((item, i) => (
                                <div key={i} className="flex justify-between items-center border-b border-white/5 pb-6">
                                    <span className="text-lg text-coconut/40">{item.label}</span>
                                    <span className="text-lg font-bold text-primary">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-10 border-t border-white/5 text-center">
                            <p className="font-display text-4xl font-bold tracking-tighter leading-tight">
                                This is not software.<br />
                                <span className="text-primary opacity-80">This is how modern Indian workplaces operate.</span>
                            </p>
                        </div>
                    </div>
                </CinematicReveal>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.05)_0%,_transparent_50%)] pointer-events-none"></div>
        </section>
    )
}
