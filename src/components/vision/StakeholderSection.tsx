import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import EmployeeView from './stakeholders/EmployeeView';
import HRView from './stakeholders/HRView';
import FacilitiesView from './stakeholders/FacilitiesView';
import FinanceView from './stakeholders/FinanceView';
import ProcurementView from './stakeholders/ProcurementView';

const StakeholderSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const totalWidth = container.scrollWidth;
            const viewportWidth = window.innerWidth;

            const mm = gsap.matchMedia();

            // Desktop Horizontal Scroll
            mm.add("(min-width: 1024px)", () => {
                gsap.to(container, {
                    x: () => -(totalWidth - viewportWidth),
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        pin: true,
                        scrub: 1,
                        // Tune end value: More scroll space per screen improves "stickiness" feeling
                        end: () => "+=" + (totalWidth),
                        invalidateOnRefresh: true,
                    }
                });
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden">
            {/* Horizontal Container */}
            <div ref={containerRef} className="flex flex-col lg:flex-row w-full lg:w-fit h-auto lg:h-screen">
                <EmployeeView />
                <HRView />
                <FacilitiesView />
                <FinanceView />
                <ProcurementView />
            </div>

            {/* Sticky Navigation Title Overlay */}
            <div className="absolute top-20 left-8 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-gray-100 z-50">
                <span className="font-bold text-graphite uppercase tracking-widest text-xs">Workplace Ecosystem</span>
            </div>
        </section>
    );
};

export default StakeholderSection;
