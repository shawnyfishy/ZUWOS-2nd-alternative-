import { motion } from 'framer-motion'

export default function GrainBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-overlay">
            {/* SVG Noise Filter */}
            <svg className="invisible w-0 h-0">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                        numOctaves="3"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
            </svg>

            {/* Moving Noise Layer */}
            <motion.div
                className="absolute inset-[-50%] w-[200%] h-[200%]"
                style={{
                    filter: 'url(#noiseFilter)',
                    background: 'transparent'
                }}
                animate={{
                    x: ['0%', '-5%'],
                    y: ['0%', '-5%']
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear"
                }}
            />

            {/* Subtle Gradient Spots */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent-blue/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
            </div>
        </div>
    )
}
