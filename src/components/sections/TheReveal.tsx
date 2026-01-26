import TextRevealer from '../utils/TextRevealer'

export default function TheReveal() {
    return (
        <section className="py-40 bg-coconut text-center relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-8 block">The Transformation</span>
                <div className="font-display font-bold text-5xl md:text-8xl text-graphite mb-12 tracking-tighter leading-none flex flex-col items-center">
                    <TextRevealer text="One Workplace." duration={1.2} className="justify-center" />
                    <TextRevealer text="One Operating System." delay={0.2} duration={1.2} className="justify-center" />
                </div>
                <TextRevealer
                    text="Built in India. Engineered for the future of distributed work."
                    className="text-2xl md:text-3xl text-graphite/40 max-w-3xl mx-auto font-medium justify-center"
                    delay={0.6}
                    stagger={0.01}
                />
            </div>
            {/* Soft decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        </section>
    )
}
