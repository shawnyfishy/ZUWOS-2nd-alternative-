import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import { ArrowLeft } from 'lucide-react'
import { GridSystem } from '../components/layout/GridSystem'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Scroll3DReveal from '../components/ui/Scroll3DReveal'
import EmployeeCarousel from '../components/sections/EmployeeCarousel'
import HROpsShowcase from '../components/sections/HROpsShowcase'
import FacilitiesShowcase from '../components/sections/FacilitiesShowcase'
import FinanceShowcase from '../components/sections/FinanceShowcase'
import ProcurementShowcase from '../components/sections/ProcurementShowcase'


import { docData } from '../data/docData'

export default function Documentation() {
    const { id } = useParams()

    // Default to employees if no ID, but specific handling for 'employees'
    const isEmployees = id === 'employees' || !id
    const isHR = id === 'hr'
    const isFinance = id === 'finance'
    const isFacilities = id === 'facilities'
    const isProcurement = id === 'procurement'

    if (isEmployees) {
        return (
            <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-16 md:py-24 flex flex-col items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>
                    </div>
                    <EmployeeCarousel />
                </main>
                <Footer />
            </PageTransition>
        )
    }

    if (isHR) {
        return (
            <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-16 md:py-24 flex flex-col items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>
                    </div>
                    <HROpsShowcase />
                </main>
                <Footer />
            </PageTransition>
        )
    }

    if (isFinance) {
        return (
            <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-16 md:py-24 flex flex-col items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>
                    </div>
                    <FinanceShowcase />
                </main>
                <Footer />
            </PageTransition>
        )
    }

    if (isFacilities) {
        return (
            <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-16 md:py-24 flex flex-col items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>
                    </div>
                    <FacilitiesShowcase />
                </main>
                <Footer />
            </PageTransition>
        )
    }

    if (isProcurement) {
        return (
            <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-grow py-16 md:py-24 flex flex-col items-center">
                    <div className="w-full max-w-7xl mx-auto px-6 mb-8">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>
                    </div>
                    <ProcurementShowcase />
                </main>
                <Footer />
            </PageTransition>
        )
    }

    const data = docData[id!]

    if (!data) return <div>Not Found</div>

    return (
        <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow py-16 md:py-24">
                <GridSystem>
                    {/* Header */}
                    <div className="col-span-12 lg:col-span-8 mb-24">
                        <Link to="/" className="inline-flex items-center gap-2 text-graphite/50 hover:text-graphite mb-8 transition-colors">
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-medium">Back to Overview</span>
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                        >
                            <div className={`inline-block p-4 rounded-xl ${data.color} ${data.textColor} mb-6`}>
                                <data.icon className="w-12 h-12" />
                            </div>
                            <h1 className="text-display-md font-display font-bold tracking-tighter mb-6">{data.title}</h1>
                            <p className="text-3xl font-medium leading-tight opacity-90">{data.subtitle}</p>
                        </motion.div>
                    </div>

                    {/* Main Content Split */}
                    <div className="col-span-12 lg:col-span-8">
                        <Scroll3DReveal>
                            <p className="text-xl leading-relaxed opacity-80 mb-16 max-w-2xl">
                                {data.description}
                            </p>
                        </Scroll3DReveal>

                        <div className="space-y-16">
                            {data.sections.map((section: any, idx: number) => (
                                <Scroll3DReveal
                                    key={idx}
                                    delay={idx * 0.1}
                                    className="border-t border-graphite/20 pt-8"
                                >
                                    <h3 className="text-2xl font-bold mb-4 font-display">{section.head}</h3>
                                    <p className="text-lg opacity-70 leading-relaxed">{section.body}</p>
                                </Scroll3DReveal>
                            ))}
                        </div>
                    </div>

                    {/* Abstract Sidebar */}
                    <div className="hidden lg:block col-span-4 relative">
                        <div className={`sticky top-32 w-full aspect-square ${data.color} rounded-full opacity-20 blur-3xl`}></div>
                    </div>

                </GridSystem>
            </main>

            <Footer />
        </PageTransition>
    )
}
