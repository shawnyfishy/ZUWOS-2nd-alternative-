import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { GridSystem } from '../components/layout/GridSystem'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import TextRevealer from '../components/utils/TextRevealer'
import CinematicReveal from '../components/utils/CinematicReveal'
import { Button } from '../components/ui/Button'

export default function RequestAccess() {
    return (
        <div className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
                <GridSystem>
                    {/* Left Column: Context/Pitch */}
                    <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0 relative z-10">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite mb-8 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Home</span>
                        </Link>

                        <div className="mb-12">
                            <TextRevealer
                                text="Join the Workplace Revolution."
                                className="text-display-md font-display font-bold tracking-tighter leading-tight mb-6"
                            />
                            <p className="text-xl opacity-80 leading-relaxed max-w-md">
                                ZUWOS is currently inviting select forward-thinking organisations to transition to the future of work.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {[
                                "Full Platform Access",
                                "White-Glove Onboarding",
                                "Priority Strategy Support"
                            ].map((item, idx) => (
                                <CinematicReveal key={idx} delay={0.2 + (idx * 0.1)} direction="left">
                                    <div className="flex items-center gap-4 text-lg font-medium">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        {item}
                                    </div>
                                </CinematicReveal>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="col-span-12 lg:col-span-6 lg:col-start-7 relative z-10">
                        <CinematicReveal delay={0.4} direction="up">
                            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-graphite/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                                <h3 className="font-display font-bold text-3xl mb-8 relative z-10">Request Early Access</h3>

                                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider opacity-60">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            placeholder="John Doe"
                                            className="w-full bg-coconut border border-graphite/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider opacity-60">Work Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="john@company.com"
                                            className="w-full bg-coconut border border-graphite/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm font-bold uppercase tracking-wider opacity-60">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            placeholder="+91 99999 99999"
                                            className="w-full bg-coconut border border-graphite/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
                                        />
                                    </div>

                                    <div className="pt-4">
                                        <Button variant="primary" size="lg" className="w-full justify-center text-lg py-6">
                                            Submit Request
                                        </Button>
                                    </div>

                                    <p className="text-center text-sm opacity-50 pt-4">
                                        Limited spots available for the beta program.
                                    </p>
                                </form>
                            </div>
                        </CinematicReveal>
                    </div>
                </GridSystem>

                {/* Background Decor */}
                <div className="absolute top-1/4 left-[-10%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
            </main>

            <Footer />
        </div>
    )
}
