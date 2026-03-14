import { useState, useEffect } from 'react';

const features = [
    { title: "Community Updates", image: "/features/emp_community.png" },
    { title: "Performance Metrics", image: "/features/emp_performance.png" },
    { title: "Helpdesk & Support", image: "/features/emp_helpdesk.png" },
    { title: "Meeting Room Booking", image: "/features/emp_meetings.png" },
    { title: "Visitor Access", image: "/features/emp_visitor.png" }
];

const EmployeeView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    return (
        <div className="w-full lg:w-full min-h-screen lg:h-screen flex-shrink-0 bg-slate-100 flex flex-col lg:flex-row relative overflow-hidden text-slate-800">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-slate-100 border-b lg:border-b-0 lg:border-r border-slate-200 z-10 pt-20 md:pt-0">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mt-2">Employees</h2>
                    <p className="text-lg md:text-xl text-slate-500 mt-4">One App for Everything.</p>
                </div>

                <ul className="space-y-4">
                    {features.map((item, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-3 text-sm md:text-base cursor-pointer transition-all duration-300 ${activeIndex === i ? 'text-blue-600 font-medium translate-x-1' : 'text-slate-500 hover:text-slate-700'}`}
                            onClick={() => {
                                setActiveIndex(i);
                                setIsAutoPlaying(false);
                            }}
                        >
                            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-blue-600' : 'bg-slate-300'}`} />
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="w-full lg:w-[70%] h-auto lg:h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-12 relative overflow-visible mt-8 md:mt-0">
                {/* Decorative BG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/20 rounded-full blur-3xl" />

                <div className="w-full max-w-4xl relative aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white group">
                    {features.map((item, i) => (
                        <img
                            key={i}
                            src={item.image}
                            srcSet={`${item.image} 1x, ${item.image.replace(/\.(png|jpe?g)$/i, '@2x.$1')} 2x, ${item.image.replace(/\.(png|jpe?g)$/i, '@3x.$1')} 3x`}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-contain p-4 md:p-8 transition-opacity duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
