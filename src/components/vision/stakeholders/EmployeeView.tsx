import { Award, Calendar } from 'lucide-react';

const EmployeeView = () => {
    return (
        <div className="w-full min-h-screen flex-shrink-0 bg-blue-600 flex flex-col md:flex-row relative overflow-hidden text-white">
            {/* Left Panel: Role & Features */}
            <div className="w-full md:w-[30%] h-auto md:h-full p-8 md:p-12 flex flex-col justify-center bg-blue-600 border-b md:border-b-0 md:border-r border-white/20 z-10 pt-20 md:pt-0">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-2">Employees</h2>
                    <p className="text-lg md:text-xl text-blue-100 mt-4">One App for Everything.</p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Community & Feed",
                        "Performance & Incentives",
                        "Helpdesk & Support",
                        "Meeting Room Booking",
                        "Visitor Management"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80 text-sm md:text-base">
                            <div className="w-2 h-2 rounded-full bg-white" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="w-full md:w-[70%] h-full flex flex-col md:flex-row items-center justify-center p-8 md:p-20 relative overflow-visible mt-8 md:mt-0">
                {/* Decorative BG */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-200/20 rounded-full blur-3xl" />

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center scale-90 md:scale-100 origin-top md:origin-center">
                    {/* Phone 1: Feed */}
                    <div className="w-[260px] md:w-[280px] h-[540px] md:h-[580px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden relative transform md:translate-y-12 shrink-0">
                        <div className="absolute top-0 w-full h-[60px] bg-white z-10 flex items-center justify-center pt-4 font-bold">ZUWOS</div>
                        <div className="p-4 pt-16 bg-gray-50 h-full">
                            <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                <div className="flex gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                                    <div>
                                        <div className="text-xs font-bold">HR Team</div>
                                        <div className="text-[10px] text-gray-500">2h ago</div>
                                    </div>
                                </div>
                                <div className="h-20 bg-gray-100 rounded-lg" />
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-sm">
                                <div className="flex gap-3 mb-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center"><Award size={14} /></div>
                                    <div>
                                        <div className="text-xs font-bold">Recognition</div>
                                        <div className="text-[10px] text-gray-500">Just now</div>
                                    </div>
                                </div>
                                <p className="text-xs text-gray-600">Congrats on the launch!</p>
                            </div>
                        </div>
                    </div>

                    {/* Phone 2: Wallet */}
                    <div className="w-[260px] md:w-[280px] h-[540px] md:h-[580px] bg-black rounded-[40px] border-[8px] border-gray-900 shadow-2xl overflow-hidden relative md:-translate-y-8 z-20 shrink-0">
                        <div className="p-6 bg-gradient-to-b from-blue-600 to-blue-500 h-full text-white pt-12">
                            <div className="text-sm opacity-80 mb-1">Wallet Balance</div>
                            <div className="text-3xl font-bold mb-8">₹ 12,450</div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                                    <Award className="mb-2" />
                                    <span className="text-xs">Incentives</span>
                                </div>
                                <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                                    <Calendar className="mb-2" />
                                    <span className="text-xs">Cafeteria</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EmployeeView;
