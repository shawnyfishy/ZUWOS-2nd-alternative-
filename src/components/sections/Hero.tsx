import { Link } from 'react-router-dom'
import { GridSystem } from '../layout/GridSystem'
import CinematicReveal from '../utils/CinematicReveal'
import Magnetic from '../utils/Magnetic'
import { Button } from '../ui/Button'
import TextRevealer from '../utils/TextRevealer'
import { GooeyText } from '../ui/GooeyText'

export default function Hero() {
    return (
        <section className="w-full bg-coconut text-graphite pt-32 pb-12 md:pt-40 md:pb-12 overflow-hidden relative">
            <GridSystem>
                <div className="col-span-12 lg:col-span-10">
                    <div className="text-display-md md:text-display-lg font-display mb-12 tracking-tighter leading-[1.05] flex flex-col items-start">
                        <TextRevealer
                            text="India’s Integrated"
                        />
                        <div className="h-16 md:h-32 w-full relative -mt-2 md:-mt-4">
                            <GooeyText
                                texts={["Workplace Management OS", "Employee Super-App", "Smart Facility Control"]}
                                textClassName="text-blue-600 leading-tight text-[clamp(1.5rem,7vw,4.5rem)]"
                                morphTime={1.5}
                                cooldownTime={0.5}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-7">
                    <TextRevealer
                        text="ZUWOS is the Indigenous Workplace OS defined by precision, transparency, and unity. One platform for the new age workforce."
                        className="text-2xl md:text-3xl font-medium leading-relaxed tracking-tight mb-12 text-graphite/80"
                        delay={0.3}
                        stagger={0.01}
                    />

                    <CinematicReveal direction="up" delay={0.5}>
                        <div className="flex flex-wrap gap-6">
                            <Magnetic strength={0.4}>
                                <Link to="/request-access">
                                    <Button
                                        size="lg"
                                        variant="primary"
                                        className="rounded-none px-12"
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
        </section>
    )
}
