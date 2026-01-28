import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/layout/PageTransition'
import { ArrowLeft, Users, Briefcase, Building2, Wallet, Calculator, Package, ShieldCheck } from 'lucide-react'
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
            // Productivity & Collaboration
            {
                head: "Productivity & Collaboration",
                body: "Everything an employee needs to get work done: Community Page, Project & Task Management, Chat & Collaboration, To Do Management, Calendar, Document Drive, and Personal Performance Dashboard."
            },
            // Workplace Services
            {
                head: "Smart Workplace Services",
                body: "Seamless utilization of office resources: Visitor Management, Meeting Room Booking, Seat & Space Management, Parking Management, F&B Cafeteria Management, and Helpdesk (Admin, HR & IT)."
            },
            // Identity & HR
            {
                head: "Identity, HR & Perks",
                body: "Manage your professional life: Digital Business Card, HRMS integration, and the Employee Incentive Cold Wallet for rewards."
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
    },
    accountants: {
        title: "Accountants OS",
        subtitle: "Audit Ready, Always.",
        description: "Designed for precision and compliance. ZUWOS empowers accountants with automated tools that ensure every penny is accounted for and every regulation met.",
        color: "bg-accent-blue",
        textColor: "text-graphite",
        icon: Calculator,
        sections: [
            {
                head: "Smart Reconciliation",
                body: "Automatically match bank transactions with internal records using AI-powered pattern recognition to spot discrepancies instantly."
            },
            {
                head: "Tax Compliance Engine",
                body: "Stay ahead of regulations with built-in tax rule updates that automatically flag potential compliance issues before they become penalties."
            },
            {
                head: "Continuous Audit Trail",
                body: "Every transaction is logged with timestamps, user IDs, and change history, making year-end audits a seamless, stress-free process."
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
    const data = docData[id || 'employees']

    if (!data) return <div>Not Found</div>

    return (
        <PageTransition className="font-sans text-graphite bg-coconut min-h-screen flex flex-col">
            <Navbar />
            {/* Use Global Navbar but maybe we want a back button too? Navbar has links to home anchors which might fail.
           Actually, let's keep it for visual consistency.
       */}

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
