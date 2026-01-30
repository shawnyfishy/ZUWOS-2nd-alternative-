import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import { ArrowLeft, Briefcase, Building2, Wallet, Calculator, Package, ShieldCheck } from 'lucide-react'
import { GridSystem } from '../components/layout/GridSystem'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Scroll3DReveal from '../components/ui/Scroll3DReveal'
import EmployeeCarousel from '../components/sections/EmployeeCarousel'
import HROpsShowcase from '../components/sections/HROpsShowcase'
import FacilitiesShowcase from '../components/sections/FacilitiesShowcase'
import FinanceShowcase from '../components/sections/FinanceShowcase'
import ProcurementShowcase from '../components/sections/ProcurementShowcase'


const docData: Record<string, any> = {
    // employees data removed from here effectively as we handle it separately, 
    // or kept for fallback but not used.
    employees: {
        title: "Employees OS",
        // ... (data kept just in case, but won't be used for rendering)
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
            },
            {
                head: "Transitioning & Projects",
                body: "Seamlessly manage site takeovers and fitouts: Hoto (Handover Takeover), Snagging, and Fitout Management."
            },
            {
                head: "Operations & Maintenance",
                body: "End-to-end control: Helpdesk/Tickets, Asset Lifecycle, Inventory, AMC Management, Scheduling, Audits, Waste Mgmt, and Surveys."
            },
            {
                head: "Safety & Security (EHS)",
                body: "Protect your people and premises: Permit to Work, Incident Mgmt, M-Safe Training, Visitor/Staff Entry, Gatepass, and Patrolling."
            },
            {
                head: "Utilities & Services (VAS)",
                body: "Manage Energy, Water, and Soft Services: F&B, Parking, Mailroom, Lease Mgmt, Space Booking, and OSR."
            }
        ]
    },
    finance: {
        title: "Finance and Accounts OS",
        subtitle: "Real-time Truth & Compliance.",
        description: "From real-time budget tracking to audit-ready books, manage your entire financial lifecycle in one place. Eliminate reconciliation lag and ensure every penny is accounted for.",
        color: "bg-accent-pink",
        textColor: "text-graphite",
        icon: Wallet,
        sections: [
            {
                head: "Live Budget Tracking",
                body: "Budgets update in real-time as purchase orders are raised, not when invoices are paid."
            },
            {
                head: "Automated Reconciliation",
                body: "Ops data syncs directly with finance ledgers, eliminating manual data entry errors. Match bank transactions with internal records instantly."
            },
            {
                head: "Cost Center Allocation",
                body: "Automatically map expenses to the right teams and projects based on usage."
            },
            {
                head: "Tax Compliance Engine",
                body: "Stay ahead of regulations with built-in tax rule updates that automatically flag potential compliance issues."
            },
            {
                head: "Continuous Audit Trail",
                body: "Every transaction is logged with timestamps, user IDs, and change history, making year-end audits a seamless process."
            }
        ]
    },
    procurement: {
        title: "Procurement OS",
        subtitle: "Sourcing Intelligence.",
        description: "Transform procurement from a bottleneck into a strategic advantage. Manage vendors, optimize spend, and streamline purchasing in one unified platform.",
        color: "bg-graphite",
        textColor: "text-white",
        icon: Package,
        sections: [
            {
                head: "Vendor & Material Management",
                body: "Centralized Vendor Portal and detailed Material Management to track stock levels, quality, and consumption."
            },
            {
                head: "Intelligent Purchase Orders",
                body: "Automate PO generation based on inventory levels and historical data, with customizable approval workflows to maintain budget control."
            },
            {
                head: "Spend Analytics & Insights",
                body: "Visualize spending patterns across departments and categories to identify cost-saving opportunities and negotiate better terms."
            }
        ]
    },
    admins: {
        title: "Admin OS",
        subtitle: "Total System Command.",
        description: "The control center for your entire operation. Manage users, security, and configurations with granular precision and complete visibility.",
        color: "bg-primary",
        textColor: "text-white",
        icon: ShieldCheck,
        sections: [
            {
                head: "CRM & Stakeholder Management",
                body: "Manage relationships with tenants, employees, and clients in a unified CRM module."
            },
            {
                head: "Role-Based Access Control (RBAC)",
                body: "Define and enforce access levels with granular permissions, ensuring employees only see what they need to do their jobs securely."
            },
            {
                head: "System Configuration Manager",
                body: "Customize workflows, fields, and notifications globally or per-department without writing a single line of code."
            },
            {
                head: "Comprehensive Activity Logs",
                body: "Monitor system health and user activity with detailed logs that provide actionable insights into usage patterns and security events."
            }
        ]
    }
}

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
                <main className="flex-grow pt-24 pb-24 flex flex-col items-center">
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
                <main className="flex-grow pt-24 pb-24 flex flex-col items-center">
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
                <main className="flex-grow pt-24 pb-24 flex flex-col items-center">
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
                <main className="flex-grow pt-24 pb-24 flex flex-col items-center">
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
                <main className="flex-grow pt-24 pb-24 flex flex-col items-center">
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
            <main className="flex-grow pt-24 pb-24">
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
