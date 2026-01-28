import { Link } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import StoryHero from '../components/story/StoryHero'
import { StickyScroll } from '../components/story/StickyScroll'
import { EmployeeAppVisual, FacilityDashboardVisual, AdminNetworkVisual } from '../components/story/FeatureVisuals'
import CinematicReveal from '../components/utils/CinematicReveal'
import Magnetic from '../components/utils/Magnetic'
import TextRevealer from '../components/utils/TextRevealer'

const philosophy = [
    "They sold you licenses. We give you sovereignty.",
    "They gave you silos. We give you a Super-App.",
    "They track time. We reward performance."
]

const storyContent = [
    {
        title: "The New Age Employee",
        description: "For the Gen Z workforce, ease is everything. ZUWOS consolidates 16+ modules—from Community to Cafeteria, Meeting Rooms to Parking—into one pocket-sized super-app. Performance isn't just a rating; it's 'Karma Points' in a Cold Wallet you can cash out.",
        content: <EmployeeAppVisual />
    },
    {
        title: "The Facility Command Center",
        description: "From Handover (Hoto) to Operations. Watch your facility come alive with live heatmaps, ticket tracking, and predictive maintenance. Snagging, Fitouts, and Assets—all in one single pane of glass.",
        content: <FacilityDashboardVisual />
    },
    {
        title: "The Admin & HR Architects",
        description: "Break down the walls between departments. Managing Access Control, CRM, Finance, and Procurement in a unified ecosystem. Live budget tracking means zero reconciliation lag.",
        content: <AdminNetworkVisual />
    }
]

export default function ProductStory() {
    return (
        <PageTransition className="bg-black text-coconut min-h-screen font-sans selection:bg-primary selection:text-white">
            <Navbar theme="dark" />

            <main>
                <StoryHero />

                {/* Philosophy Section */}
                <section className="relative z-10 py-48 bg-black px-6 rounded-t-[3.5rem] -mt-24 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="container mx-auto max-w-6xl text-center">
                        {philosophy.map((text, i) => {
                            const [they, we] = text.split(". ")
                            return (
                                <div key={i} className="mb-24 last:mb-0">
                                    <div className="flex flex-col items-center gap-4">
                                        <TextRevealer
                                            text={they + "."}
                                            className="text-2xl md:text-4xl font-display font-medium text-white/40 tracking-tight justify-center"
                                            duration={1.2}
                                            delay={i * 0.2}
                                        />
                                        <TextRevealer
                                            text={we}
                                            className="text-4xl md:text-8xl font-display font-bold text-white tracking-tighter justify-center leading-none"
                                            duration={1.5}
                                            delay={i * 0.2 + 0.3}
                                        />
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ delay: i * 0.2 + 0.6, duration: 1 }}
                                            className="h-px w-24 bg-primary/30 mt-8"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>

                {/* Sticky Scroll Experience */}
                <section className="relative z-20 bg-black pt-24 pb-48 rounded-t-[3.5rem] -mt-24 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="container mx-auto px-4">
                        <CinematicReveal>
                            <h3 className="text-center text-primary font-bold uppercase tracking-[0.3em] mb-12 text-sm">One Platform. All Stakeholders.</h3>
                        </CinematicReveal>
                        <StickyScroll content={storyContent} />
                    </div>
                </section>

                {/* Comparison / Value Section */}
                <section className="relative z-30 py-40 bg-neutral-900 rounded-t-[3.5rem] -mt-24 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="container mx-auto px-6 text-center">
                        <div className="mb-20">
                            <TextRevealer
                                text="The Shift is Here."
                                className="text-5xl md:text-7xl font-display font-bold tracking-tighter justify-center"
                                duration={1.2}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                            <CinematicReveal direction="right" delay={0.2}>
                                <div className="p-12 rounded-[2rem] bg-white/5 border border-white/5 text-left h-full group" data-cursor="OBSOLETE">
                                    <h4 className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-widest">The Old Way</h4>
                                    <ul className="space-y-6 text-gray-400 text-xl">
                                        <li>• 10+ Disconnected Apps</li>
                                        <li>• Monthly Per-User Licensing Fees</li>
                                        <li>• Data Hosted Overseas</li>
                                        <li>• Manual Reconciliation</li>
                                    </ul>
                                </div>
                            </CinematicReveal>

                            <CinematicReveal direction="left" delay={0.4}>
                                <div className="p-12 rounded-[2rem] bg-primary/10 border border-primary/20 text-left relative overflow-hidden h-full shadow-2xl group" data-cursor="THE FUTURE">
                                    <div className="absolute inset-0 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors duration-500"></div>
                                    <h4 className="text-sm font-bold text-primary mb-8 uppercase tracking-widest relative z-10">The ZUWOS Way</h4>
                                    <ul className="space-y-6 text-white/90 text-xl relative z-10">
                                        <li className="font-bold">• One Unified OS</li>
                                        <li className="font-bold">• Flat Enterprise Fee</li>
                                        <li className="font-bold">• 100% Sovereign & Local</li>
                                        <li className="font-bold">• Real-time Org Sync</li>
                                    </ul>
                                </div>
                            </CinematicReveal>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="relative z-40 py-48 bg-black text-center relative overflow-hidden rounded-t-[3.5rem] -mt-24 border-t border-white/10 shadow-[0_-30px_60px_rgba(0,0,0,0.8)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#3b82f6_0%,_transparent_60%)] opacity-10"></div>
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="mb-12">
                            <TextRevealer
                                text="ZUWOS"
                                className="text-7xl md:text-[10rem] font-display font-bold tracking-tighter text-white leading-none justify-center"
                            />
                        </div>
                        <TextRevealer
                            text="Join the Indigenous WorkTech Movement."
                            className="text-2xl md:text-3xl text-gray-400 mb-16 tracking-tight justify-center"
                            delay={0.4}
                        />
                        <CinematicReveal delay={0.8}>
                            <Magnetic strength={0.4}>
                                <Link to="/request-access">
                                    <button
                                        className="bg-white text-black px-16 py-6 rounded-none text-2xl font-bold hover:bg-primary hover:text-white transition-all duration-300 shadow-xl active:scale-95"
                                        data-cursor="ACCESS"
                                    >
                                        Request Early Access
                                    </button>
                                </Link>
                            </Magnetic>
                        </CinematicReveal>
                    </div>
                </section>
            </main>

            <Footer />
        </PageTransition>
    )
}
