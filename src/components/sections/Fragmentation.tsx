import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { Users, Building2, Wallet, Briefcase } from 'lucide-react'

const silos = [
    {
        icon: Users,
        role: "Employees",
        pain: "Juggling 10+ Apps",
        color: "bg-blue-100"
    },
    {
        icon: Building2,
        role: "Facilities",
        pain: "Reactive Ops",
        color: "bg-orange-100"
    },
    {
        icon: Briefcase,
        role: "HR",
        pain: "Disconnected Sytems",
        color: "bg-pink-100"
    },
    {
        icon: Wallet,
        role: "Finance",
        pain: "Delayed Data",
        color: "bg-green-100"
    }
]

export default function Fragmentation() {
    return (
        <section className="py-24 bg-coconut relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        className="font-display font-bold text-4xl md:text-5xl mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Too many stakeholders.<br />Too many systems.
                    </motion.h2>
                    <motion.p
                        className="text-xl text-graphite/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        When systems don’t talk, people suffer.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {silos.map((silo, index) => (
                        <motion.div
                            key={silo.role}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card variant="brutalist" className="h-full flex flex-col items-center text-center py-12 bg-white">
                                <div className={`w-16 h-16 rounded-full ${silo.color} flex items-center justify-center mb-6`}>
                                    <silo.icon className="w-8 h-8 text-graphite" />
                                </div>
                                <h3 className="font-bold text-lg mb-2">{silo.role}</h3>
                                <p className="text-graphite/60">{silo.pain}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
