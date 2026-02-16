import { Award, TrendingUp } from 'lucide-react';

const HRView = () => {
    return (
        <div className="w-full lg:w-[100vw] min-h-screen lg:h-screen flex-shrink-0 bg-[#FFD700] flex flex-col lg:flex-row relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-[#FFD700] border-b lg:border-b-0 lg:border-r border-black/10 z-10">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-black mt-2">HR Managers</h2>
                    <p className="text-lg md:text-xl text-black/70 mt-4">From Administration to Impact.</p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Performance Dashboards",
                        "Instant Incentives",
                        "Live Workforce Visibility",
                        "Policy Management",
                        "Automated Onboarding"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-black/80">
                            <div className="w-2 h-2 rounded-full bg-black" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="w-full lg:w-[70%] h-auto lg:h-full flex flex-col items-center justify-center p-6 md:p-20 relative min-h-[500px]">
                {/* Laptop Mockup */}
                <div className="w-full max-w-[800px] h-auto md:h-[500px] bg-gray-900 rounded-t-2xl p-2 md:p-4 relative shadow-2xl border-b-[10px] md:border-b-[20px] border-gray-800">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 md:w-32 h-3 md:h-4 bg-gray-800 rounded-b-lg flex items-center justify-center gap-2">
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-red-500" />
                        <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-blue-500/50" />
                    </div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="h-12 md:h-14 bg-white border-b border-gray-100 flex items-center justify-between px-3 md:px-6">
                            <span className="font-bold text-teal-600 text-sm md:text-base">Workforce OS</span>
                            <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500">
                                <span className="hidden md:inline">Overview</span>
                                <span>People</span>
                                <span className="text-teal-600 font-medium bg-teal-50 px-2 py-0.5 md:px-3 md:py-1 rounded-full">Performance</span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-3 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 flex-1 bg-slate-50 overflow-y-auto md:overflow-hidden">
                            {/* Performance Grid */}
                            <div className="col-span-1 md:col-span-2 bg-white rounded-xl p-3 md:p-4 shadow-sm border border-gray-100">
                                <div className="flex justify-between mb-3 md:mb-4">
                                    <h4 className="font-bold text-gray-700 text-sm md:text-base">Team Performance</h4>
                                    <TrendingUp size={16} className="text-green-500" />
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-2 md:gap-3">
                                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-200" />
                                            <div className="flex-1">
                                                <div className="h-1.5 md:h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-teal-500" style={{ width: `${85 - (i * 15)}%` }} />
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">{85 - i * 15}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Incentive Modal (Floating) */}
                            <div className="bg-white rounded-xl p-3 md:p-4 shadow-md border border-teal-100 flex flex-col animate-pulse">
                                <Award className="text-yellow-500 mb-1 md:mb-2 w-5 h-5 md:w-6 md:h-6" />
                                <h4 className="font-bold text-gray-800 text-xs md:text-sm">Spot Award</h4>
                                <p className="text-[10px] md:text-xs text-gray-500 mb-2 md:mb-3">Allocating ₹5,000 for accurate project delivery.</p>
                                <button className="mt-auto w-full py-1.5 md:py-2 bg-teal-600 text-white text-[10px] md:text-xs font-bold rounded-lg relative overflow-hidden">
                                    Allocate Now
                                    <div className="absolute inset-0 bg-white/20 hover:animate-ping" />
                                </button>
                            </div>

                            {/* Live Map (Bottom) */}
                            <div className="col-span-1 md:col-span-3 bg-white rounded-xl p-3 md:p-4 shadow-sm border border-gray-100 h-24 md:h-32 relative overflow-hidden group">
                                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-[10px] md:text-xs font-bold text-gray-600 uppercase">Live Floor Map</span>
                                </div>
                                {/* Simple Map Visual */}
                                <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 opacity-10 pointer-events-none">
                                    {[...Array(48)].map((_, i) => (
                                        <div key={i} className="border border-gray-400" />
                                    ))}
                                </div>
                                {/* Avatars */}
                                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 group-hover:left-1/3">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                                </div>
                                <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-100 group-hover:right-1/4">
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-500 border-2 border-white shadow-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HRView;
