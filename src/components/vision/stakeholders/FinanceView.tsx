import { TrendingUp, PieChart, Receipt, IndianRupee } from 'lucide-react';

const FinanceView = () => {
    return (
        <div className="w-full lg:w-[100vw] min-h-screen lg:h-screen flex-shrink-0 bg-pink-200 flex flex-col lg:flex-row relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-pink-200 border-b lg:border-b-0 lg:border-r border-black/10 z-10">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-black mt-2">Finance</h2>
                    <p className="text-lg md:text-xl text-black/70 mt-4">Real-Time Financial Truth.</p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Vendor Payment Processing",
                        "Budget vs. Actuals",
                        "Utility Cost Tracking",
                        "Automated Accounting",
                        "Lease Management"
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
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Main Metric */}
                    <div className="col-span-1 md:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-indigo-50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-0">
                        <div>
                            <div className="text-indigo-500 font-bold uppercase text-xs tracking-wider mb-2">Total Opex (YTD)</div>
                            <div className="text-4xl md:text-5xl font-display font-bold text-graphite flex items-center gap-1">
                                <IndianRupee size={32} className="text-gray-400" />
                                42,50,000
                            </div>
                            <div className="flex items-center gap-1 text-green-500 mt-2 font-medium">
                                <TrendingUp size={16} /> 12% under budget
                            </div>
                        </div>
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[8px] md:border-[12px] border-indigo-100 border-t-indigo-500 flex items-center justify-center self-center md:self-auto">
                            <span className="text-lg md:text-xl font-bold text-indigo-600">88%</span>
                        </div>
                    </div>

                    {/* Card 2: Cost Breakdown */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-indigo-50">
                        <div className="flex items-center gap-3 mb-6">
                            <PieChart className="text-indigo-500" />
                            <h3 className="font-bold text-lg">Category Split</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: 'Facilities', val: '40%', color: 'bg-indigo-500' },
                                { name: 'Incentives', val: '25%', color: 'bg-purple-500' },
                                { name: 'SaaS', val: '15%', color: 'bg-pink-500' }
                            ].map((cat, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm mb-1">
                                        <span>{cat.name}</span>
                                        <span className="font-bold">{cat.val}</span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full ${cat.color}`} style={{ width: cat.val }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 3: Pending Invoices */}
                    <div className="bg-white rounded-3xl p-6 shadow-lg border border-indigo-50 relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <Receipt className="text-indigo-500" />
                                <h3 className="font-bold text-lg">Pending Invoices</h3>
                            </div>
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-bold">3 Urgent</span>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div>
                                    <div className="font-bold text-sm">TechCorp Services</div>
                                    <div className="text-xs text-gray-500">Inv #0045</div>
                                </div>
                                <div className="font-mono font-bold">₹ 1.2L</div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <div>
                                    <div className="font-bold text-sm">Green Energy Co</div>
                                    <div className="text-xs text-gray-500">Inv #0046</div>
                                </div>
                                <div className="font-mono font-bold">₹ 45k</div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FinanceView;
