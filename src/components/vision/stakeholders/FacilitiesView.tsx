import { AlertTriangle, CheckSquare } from 'lucide-react';

const FacilitiesView = () => {
    return (
        <div className="w-full lg:w-[100vw] min-h-screen lg:h-screen flex-shrink-0 bg-gray-900 flex flex-col lg:flex-row relative overflow-hidden text-white">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-gray-900 border-b lg:border-b-0 lg:border-r border-white/20 z-10">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">Facility Managers</h2>
                    <p className="text-lg md:text-xl text-gray-400 mt-4">Total Operational Control.</p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Energy & Utilities",
                        "Space Optimization",
                        "Vendor SLAs",
                        "Asset Maintenance",
                        "Safety & Security"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-gray-300">
                            <div className="w-2 h-2 rounded-full bg-white" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="w-full lg:w-[70%] h-auto lg:h-full flex flex-col items-center justify-center p-6 md:p-20 relative perspective-1000 min-h-[500px]">

                {/* Isometric Map Card */}
                <div className="relative w-full max-w-[600px] h-[300px] md:h-[400px] bg-white rounded-3xl shadow-2xl border-4 border-white transform md:rotate-x-12 md:rotate-y-12 md:rotate-z-2 transition-transform hover:rotate-0 duration-700 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

                    {/* Live Pins */}
                    <div className="absolute top-1/3 left-1/4 animate-bounce">
                        <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                            <AlertTriangle size={12} /> AC Malfunction
                        </div>
                        <div className="w-2 h-8 bg-red-500 mx-auto rounded-full mt-1 opacity-50" />
                    </div>

                    <div className="absolute bottom-1/3 right-1/3">
                        <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                            <CheckSquare size={12} /> Cleaning Done
                        </div>
                    </div>

                    {/* Dashboard Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-3 md:p-4 flex justify-between items-center shadow-lg">
                        <div className="flex gap-4">
                            <div className="text-center">
                                <div className="text-[10px] md:text-xs text-gray-500 uppercase">Open Tickets</div>
                                <div className="text-lg md:text-xl font-bold text-red-500">12</div>
                            </div>
                            <div className="w-px bg-gray-300" />
                            <div className="text-center">
                                <div className="text-[10px] md:text-xs text-gray-500 uppercase">Assets</div>
                                <div className="text-lg md:text-xl font-bold text-graphite">450</div>
                            </div>
                        </div>
                        <button className="bg-orange-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-bold text-xs md:text-sm hover:bg-orange-600 transition-colors">
                            View 3D Model
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilitiesView;
