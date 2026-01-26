import { motion } from 'framer-motion'
import { Users, Briefcase, ShieldCheck, TrendingUp, MessageSquare, MapPin } from 'lucide-react'

export const EmployeeAppVisual = () => (
    <div className="w-full h-full bg-black rounded-3xl border-8 border-graphite overflow-hidden relative flex flex-col items-center justify-start pt-8">
        <div className="absolute top-0 w-32 h-6 bg-graphite rounded-b-xl z-20"></div>
        {/* Dynamic Island Area */}

        {/* App Grid */}
        <div className="grid grid-cols-4 gap-4 px-4 mt-8 w-full">
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="w-12 h-12 bg-gray-800 rounded-xl"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                />
            ))}
        </div>

        {/* Incentive Card */}
        <motion.div
            className="w-11/12 bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-4 mt-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            <div className="flex justify-between items-center mb-2">
                <span className="text-xs opacity-80">Karma Points</span>
                <TrendingUp className="w-4 h-4" />
            </div>
            <div className="text-3xl font-bold font-display">2,450</div>
            <div className="text-xs opacity-60 mt-1">+150 this week</div>
        </motion.div>

        {/* Bottom Nav */}
        <div className="absolute bottom-4 w-11/12 h-16 bg-gray-900 rounded-full flex justify-around items-center px-2">
            <Users className="w-6 h-6 text-primary" />
            <MessageSquare className="w-6 h-6 text-gray-500" />
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center -mt-8 border-4 border-black">
                <span className="text-xl font-bold">+</span>
            </div>
            <MapPin className="w-6 h-6 text-gray-500" />
            <Briefcase className="w-6 h-6 text-gray-500" />
        </div>
    </div>
)

export const FacilityDashboardVisual = () => (
    <div className="w-full h-full bg-graphite rounded-xl border border-gray-700 overflow-hidden relative bg-neutral-900 p-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b border-gray-700 pb-4">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-gray-400 text-xs">Facility Ops Center</div>
        </div>

        <div className="grid grid-cols-2 gap-4 h-[calc(100%-4rem)]">
            {/* Map View */}
            <div className="bg-black/50 rounded-lg p-2 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_0%,_transparent_50%)]"></div>
                <div className="text-xs text-gray-400 mb-2">Live Floor Map</div>
                {/* Ping animations */}
                <motion.div
                    className="absolute top-1/2 left-1/3 w-2 h-2 bg-green-500 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div
                    className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-500 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </div>

            {/* Stats Column */}
            <div className="flex flex-col gap-2">
                <div className="flex-1 bg-black/50 rounded-lg p-2 flex flex-col justify-center items-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-[10px] text-gray-500">Uptime</div>
                </div>
                <div className="flex-1 bg-black/50 rounded-lg p-2 flex flex-col justify-center items-center">
                    <div className="text-2xl font-bold text-yellow-500">12</div>
                    <div className="text-[10px] text-gray-500">Open Tickets</div>
                </div>
            </div>
        </div>
    </div>
)

export const AdminNetworkVisual = () => (
    <div className="w-full h-full bg-black rounded-lg border border-gray-800 p-4 flex items-center justify-center relative overflow-hidden">
        {/* Central Hub */}
        <motion.div
            className="w-16 h-16 bg-primary rounded-full flex items-center justify-center z-10 relative"
            animate={{ boxShadow: ["0 0 0 0px rgba(59, 130, 246, 0.4)", "0 0 0 20px rgba(59, 130, 246, 0)"] }}
            transition={{ repeat: Infinity, duration: 2 }}
        >
            <ShieldCheck className="text-white w-8 h-8" />
        </motion.div>

        {/* Orbiting Nodes */}
        {[0, 90, 180, 270].map((deg, i) => (
            <motion.div
                key={i}
                className="absolute w-2 h-32 bg-gradient-to-b from-transparent via-blue-900/50 to-transparent"
                style={{ rotate: deg, transformOrigin: "center" }}
            />
        ))}

        {/* Nodes */}
        <motion.div className="absolute top-10 left-10 w-8 h-8 bg-gray-800 rounded-full border border-gray-600" animate={{ y: [0, -5, 0] }} transition={{ duration: 3, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-8 h-8 bg-gray-800 rounded-full border border-gray-600" animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="absolute bottom-10 left-20 w-8 h-8 bg-gray-800 rounded-full border border-gray-600" animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity }} />

    </div>
)
