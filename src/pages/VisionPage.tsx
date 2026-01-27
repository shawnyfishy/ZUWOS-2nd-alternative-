import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactLenis from 'lenis/react';
import HeroSection from '../components/vision/HeroSection';
import FragmentationSection from '../components/vision/FragmentationSection';
import TheShiftSection from '../components/vision/TheShiftSection';
import RevealSection from '../components/vision/RevealSection';
import StakeholderSection from '../components/vision/StakeholderSection';
import IndigenousSection from '../components/vision/IndigenousSection';
import FinalCTA from '../components/vision/FinalCTA';
import Navbar from '../components/layout/Navbar';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const VisionPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <ReactLenis root>
            <div
                ref={containerRef}
                className="w-full min-h-screen bg-coconut text-graphite font-sans overflow-x-hidden selection:bg-saffron selection:text-white"
            >
                <Navbar />
                <HeroSection />
                <FragmentationSection />
                <TheShiftSection />
                <RevealSection />
                <StakeholderSection />
                <IndigenousSection />
                <FinalCTA />
            </div>
        </ReactLenis>
    );
};

export default VisionPage;
