import { Award, TrendingUp } from 'lucide-react';

const HRView = () => {
    return (
        <div className="w-[100vw] h-screen flex-shrink-0 bg-[#FFD700] flex relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-[30%] h-full p-12 flex flex-col justify-center bg-[#FFD700] border-r border-black/10 z-10">
                <div className="mb-8">
                    <h2 className="text-4xl font-display font-bold text-black mt-2">HR Managers</h2>
                    <p className="text-xl text-black/70 mt-4">From Administration to Impact.</p>
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
            <div className="w-[70%] h-full flex flex-col items-center justify-center p-20 relative">
                {/* Laptop Mockup */}
                <div className="w-[800px] h-[500px] bg-gray-900 rounded-t-2xl p-4 relative shadow-2xl border-b-[20px] border-gray-800">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-b-lg flex items-center justify-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                    </div>

                    {/* Screen Content */}
                    <div className="w-full h-full bg-gray-50 rounded-lg overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="h-14 bg-white border-b border-gray-100 flex items-center justify-between px-6">
                            <span className="font-bold text-teal-600">Workforce OS</span>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span>Overview</span>
                                <span>People</span>
                                <span className="text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">Performance</span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 grid grid-cols-3 gap-6 flex-1 bg-slate-50">
                            {/* Performance Grid */}
                            <div className="col-span-2 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                <div className="flex justify-between mb-4">
                                    <h4 className="font-bold text-gray-700">Team Performance</h4>
                                    <TrendingUp size={16} className="text-green-500" />
                                </div>
                                <div className="space-y-3">
                                    {[1, 2, 3].map((_, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-gray-200" />
                                            <div className="flex-1">
                                                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-teal-500" style={{ width: `${85 - (i * 15)}%` }} />
                                                </div>
                                            </div>
                                            <span className="text-xs font-mono text-gray-500">{85 - i * 15}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Incentive Modal (Floating) */}
                            <div className="bg-white rounded-xl p-4 shadow-md border border-teal-100 flex flex-col animate-pulse">
                                <Award className="text-yellow-500 mb-2" />
                                <h4 className="font-bold text-gray-800 text-sm">Spot Award</h4>
                                <p className="text-xs text-gray-500 mb-3">Allocating ₹5,000 for accurate project delivery.</p>
                                <button className="mt-auto w-full py-2 bg-teal-600 text-white text-xs font-bold rounded-lg relative overflow-hidden">
                                    Allocate Now
                                    <div className="absolute inset-0 bg-white/20 hover:animate-ping" />
                                </button>
                            </div>

                            {/* Live Map (Bottom) */}
                            <div className="col-span-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100 h-32 relative overflow-hidden group">
                                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-xs font-bold text-gray-600 uppercase">Live Floor Map</span>
                                </div>
                                {/* Simple Map Visual */}
                                <div className="absolute inset-0 grid grid-cols-12 grid-rows-4 opacity-10 pointer-events-none">
                                    {[...Array(48)].map((_, i) => (
                                        <div key={i} className="border border-gray-400" />
                                    ))}
                                </div>
                                {/* Avatars */}
                                <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 group-hover:left-1/3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white shadow-sm" />
                                </div>
                                <div className="absolute top-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-100 group-hover:right-1/4">
                                    <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white shadow-sm" />
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
