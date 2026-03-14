import { useState, useEffect } from 'react';

const features = [
    { title: "Vendor Payment Processing", image: "/features/fin_vendor.png" },
    { title: "Budget vs. Actuals", image: "/features/fin_budget.png" },
    { title: "Utility Cost Tracking", image: "/features/fin_utility.png" },
    { title: "Automated Accounting", image: "/features/fin_accounting.png" },
    { title: "Lease Management", image: "/features/fin_lease.png" }
];

const FinanceView = () => {
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
        <div className="w-full lg:w-full min-h-screen lg:h-screen flex-shrink-0 bg-rose-50 flex flex-col lg:flex-row relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-rose-50 border-b lg:border-b-0 lg:border-r border-rose-200 z-10">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-950 mt-2">Finance</h2>
                    <p className="text-lg md:text-xl text-rose-800/80 mt-4">Real-Time Financial Truth.</p>
                </div>

                <ul className="space-y-4">
                    {features.map((item, i) => (
                        <li
                            key={i}
                            className={`flex items-center gap-3 text-sm md:text-base cursor-pointer transition-all duration-300 ${activeIndex === i ? 'text-rose-600 font-medium translate-x-1' : 'text-rose-900/80 hover:text-rose-900'}`}
                            onClick={() => {
                                setActiveIndex(i);
                                setIsAutoPlaying(false);
                            }}
                        >
                            <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${activeIndex === i ? 'bg-rose-500' : 'bg-rose-300'}`} />
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="w-full lg:w-[70%] h-auto lg:h-full flex flex-col items-center justify-center p-6 md:p-12 relative overflow-visible mt-8 md:mt-0">
                <div className="w-full max-w-5xl relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-rose-200/50 bg-white group">
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

export default FinanceView;
