import { ShoppingCart, Package, Truck, AlertCircle, Search } from 'lucide-react';

const ProcurementView = () => {
    return (
        <div className="w-full lg:w-[100vw] min-h-screen lg:h-screen flex-shrink-0 bg-blue-100 flex flex-col lg:flex-row relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[30%] h-auto lg:h-full p-8 md:p-12 flex flex-col justify-center bg-blue-100 border-b lg:border-b-0 lg:border-r border-black/10 z-10">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-black mt-2">Procurement</h2>
                    <p className="text-lg md:text-xl text-black/70 mt-4">Demand to Delivery, Unified.</p>
                </div>

                <ul className="space-y-4">
                    {[
                        "Smart Inventory Management",
                        "Predictive Reordering",
                        "Vendor Discovery",
                        "Purchase Order Workflow",
                        "Delivery Tracking"
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
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden">

                    {/* Toolbar */}
                    <div className="bg-gray-50 p-4 border-b border-gray-100 flex justify-between items-center">
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 bg-white border border-gray-200 px-3 py-1.5 rounded-lg text-sm text-gray-500">
                                <Search size={16} /> Search Inventory...
                            </div>
                        </div>
                        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                            <ShoppingCart size={16} /> Create PO
                        </button>
                    </div>

                    {/* Inventory Grid */}
                    <div className="p-6">
                        <div className="grid grid-cols-4 gap-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                            <span>Item Name</span>
                            <span>Category</span>
                            <span>Stock Level</span>
                            <span>Action</span>
                        </div>

                        <div className="space-y-3">
                            {/* Item 1 */}
                            <div className="grid grid-cols-4 gap-4 items-center p-3 hover:bg-gray-50 rounded-lg transition-colors border border-transparent hover:border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600"><Package size={20} /></div>
                                    <span className="font-medium">Paper Reams A4</span>
                                </div>
                                <span className="text-sm text-gray-500">Office Supplies</span>
                                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-green-500 w-[80%]" />
                                </div>
                                <button className="text-gray-400 hover:text-emerald-600 text-sm font-medium text-left">Details</button>
                            </div>

                            {/* Item 2 (Low Stock) */}
                            <div className="grid grid-cols-4 gap-4 items-center p-3 bg-red-50/50 hover:bg-red-50 rounded-lg transition-colors border border-red-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600"><Package size={20} /></div>
                                    <span className="font-medium">Printer Toner (BLK)</span>
                                </div>
                                <span className="text-sm text-gray-500">Office Supplies</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden flex-1">
                                        <div className="h-full bg-red-500 w-[15%] animate-pulse" />
                                    </div>
                                    <AlertCircle size={14} className="text-red-500" />
                                </div>
                                <button className="text-red-600 text-sm font-bold text-left animate-bounce">Reorder</button>
                            </div>

                            {/* Delivery Visual */}
                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-gray-600 mb-4 flex items-center gap-2"><Truck size={18} /> Active Deliveries</h4>
                                <div className="relative h-2 bg-gray-100 rounded-full">
                                    <div className="absolute top-0 left-0 h-full bg-emerald-500 w-[60%]" />
                                    <div className="absolute top-1/2 left-[60%] transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow border-2 border-emerald-500 flex items-center justify-center text-emerald-600 z-10">
                                        <Truck size={14} />
                                    </div>
                                </div>
                                <div className="flex justify-between mt-2 text-xs text-gray-400 font-mono">
                                    <span>Ordered</span>
                                    <span>Out for Delivery</span>
                                    <span>Delivered</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcurementView;
