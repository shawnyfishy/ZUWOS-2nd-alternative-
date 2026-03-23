import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import projectsDesktopImg from '../../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/KANBANNN3.jpeg';
import walletMacImg from '../../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Wallet web NEWWWW.png';

const features = [
    { title: 'Calendar', image: '/employees-new/calendar.png' },
    { title: 'Chat', image: '/employees-new/chat.png' },
    { title: 'Community', image: '/employees-new/community.png' },
    { title: 'Digital Card', image: '/employees-new/digital-card.png' },
    { title: 'Documents', image: '/employees-new/documents.png' },
    { title: 'F & B', image: '/employees-new/fnb.png' },
    { title: 'Helpdesk', image: '/assets/employee-os/helpdesk-mac.png' },
    { title: 'HRMS', image: '/employees-new/hrms.png' },
    { title: 'Meetings', image: '/employees-new/meetings.png' },
    { title: 'Parking', image: '/employees-new/parking.png' },
    { title: 'Performance', image: '/employees-new/performance.jpeg' },
    { title: 'Projects and Tasks', image: projectsDesktopImg },
    { title: 'Seat Mgmt', image: '/employees-new/seat-space.png' },
    { title: 'To-Do', image: '/employees-new/todo.png' },
    { title: 'Visitor', image: '/employees-new/visitor.jpeg' },
    { title: 'Wallet', image: walletMacImg },
];

const EmployeeView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Auto-scroll list to keep active item visible without triggering native browser scroll jumps
    useEffect(() => {
        const list = listRef.current;
        const item = itemRefs.current[activeIndex];
        if (list && item) {
            const targetScroll = item.offsetTop - (list.clientHeight / 2) + (item.clientHeight / 2);
            
            const startScroll = list.scrollTop;
            const distance = targetScroll - startScroll;
            const duration = 400; // ms
            let startTime: number | null = null;

            const animateScroll = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const elapsed = currentTime - startTime;
                
                if (elapsed < duration) {
                    // Ease-out cubic
                    const progress = elapsed / duration;
                    const ease = 1 - Math.pow(1 - progress, 3);
                    list.scrollTop = startScroll + (distance * ease);
                    requestAnimationFrame(animateScroll);
                } else {
                    list.scrollTop = targetScroll;
                }
            };
            
            requestAnimationFrame(animateScroll);
        }
    }, [activeIndex]);

    return (
        <div className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-slate-100 flex flex-col lg:flex-row relative overflow-hidden text-slate-800">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] flex-shrink-0 h-auto lg:h-full px-8 lg:px-10 lg:pl-14 xl:pl-16 2xl:pl-20 flex flex-col justify-start bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 z-10 pt-[100px] lg:pt-[120px] pb-10">
                <div className="mb-6 xl:mb-8">
                    <h2 className="text-3xl xl:text-4xl font-display font-bold text-slate-900 mt-2">Employees</h2>
                    <p className="text-base xl:text-lg text-slate-500 mt-2">One App for Everything.</p>
                </div>

                <ul ref={listRef} className="relative space-y-2 xl:space-y-4 max-h-[40vh] lg:max-h-[calc(100vh-320px)] overflow-y-auto pr-4 minimal-scrollbar mask-gradient" style={{ overscrollBehavior: 'contain' }}>
                    {features.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <li
                                key={i}
                                ref={(el) => { itemRefs.current[i] = el; }}
                                className={`flex items-center gap-3 cursor-pointer group w-full`}
                                onClick={() => {
                                    setActiveIndex(i);
                                    setIsAutoPlaying(false);
                                }}
                            >
                                <div className="w-6 flex justify-center shrink-0">
                                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'opacity-100 text-blue-600 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                </div>
                                <span className={`text-base md:text-lg lg:text-base xl:text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                    {item.title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="flex-1 h-auto lg:h-full flex flex-col items-center lg:items-start justify-center p-6 lg:p-12 lg:pl-10 xl:pl-16 relative overflow-visible mt-8 lg:mt-0">
                {/* Decorative BG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/20 rounded-full blur-3xl" />

                <div className="w-full max-w-4xl 2xl:max-w-6xl relative aspect-video bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 group">
                    {features.map((item, i) => (
                        <img
                            key={i}
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
