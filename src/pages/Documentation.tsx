import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Users, Briefcase, Building2, Wallet } from 'lucide-react'
import { GridSystem } from '../components/layout/GridSystem'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Scroll3DReveal from '../components/ui/Scroll3DReveal'


const docData: Record<string, any> = {
    employees: {
        title: "Employees OS",
        subtitle: "One App for Everything.",
        description: "The average employee switches between 10+ apps daily. ZUWOS unifies culture, admin, and performance into a single mobile-first interface.",
        color: "bg-primary",
        textColor: "text-white",
        icon: Users,
        sections: [
            {
                head: "Unified Profile",
                body: "A single digital identity for access control, payroll, and internal reputation. No more scattered data across HRMS and Slack."
            },
            {
                head: "Performance Wallet",
                body: "Real-time tracking of tasks, goals, and incentives. Employees see exactly what they earn as they work."
            },
            {
                head: "Service Requests",
                body: "Raise tickets for IT, Admin, or HR in seconds. Track resolution status in real-time."
            }
        ]
    },
    hr: {
        title: "HR Operations OS",
        subtitle: "From Admin to Impact.",
        description: "Automate the mundane. Free your HR team from spreadsheets and let them focus on building a world-class culture.",
        color: "bg-accent-yellow",
        textColor: "text-graphite",
        icon: Briefcase,
        sections: [
            {
                head: "Automated Onboarding",
                body: "Digital document collection, asset provisioning, and team intros—all triggered automatically upon offer acceptance."
            },
            {
                head: "Live Workforce Visibility",
                body: "See who is in the office, who is remote, and who is on leave in a single map-based view."
            },
            {
                head: "Sentiment Analysis",
                body: "AI-driven pulse checks to understand team morale before burnout happens."
            }
        ]
    },
    facilities: {
        title: "Facilities OS",
        subtitle: "Total Operational Control.",
        description: "Manage the physical world with digital precision. From procurement to disposal, track every asset's lifecycle.",
        color: "bg-atlas",
        textColor: "text-white",
        icon: Building2,
        sections: [
            {
                head: "Asset Lifecycle",
                body: "Track procurement, assignment, maintenance, and depreciation of every chair, laptop, and vehicle."
            },
            {
                head: "Preventive Maintenance",
                body: "Schedule recurring tasks for HVAC, electrical, and plumbing. avoiding costly breakdowns."
            },
            {
                head: "Space Utilization",
                body: "Understand how your office is actually used with sensor-based heatmaps."
            }
        ]
    },
    finance: {
        title: "Finance OS",
        subtitle: "Real-time Financial Truth.",
        description: "Eliminate the lag between operations and accounting. Capture costs as they happen.",
        color: "bg-accent-pink",
        textColor: "text-graphite",
        icon: Wallet,
        sections: [
            {
                head: "Live Budget Tracking",
                body: " Budgets update in real-time as purchase orders are raised, not when invoices are paid."
            },
            {
                head: "Automated Reconciliation",
                body: "Ops data syncs directly with finance ledgers, eliminating manual data entry errors."
            },
            {
                head: "Cost Center Allocation",
                body: "Automatically map expenses to the right teams and projects based on usage."
            }
        ]
    }
}

export default function Documentation() {
    const { id } = useParams()
    const data = docData[id || 'employees']

    if (!data) return <div>Not Found</div>

    return (
        <div className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
            <Navbar />
            {/* Use Global Navbar but maybe we want a back button too? Navbar has links to home anchors which might fail.
           Actually, let's keep it for visual consistency.
       */}

            <main className="flex-grow pt-32 pb-24">
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
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
        </div>
    )
}
