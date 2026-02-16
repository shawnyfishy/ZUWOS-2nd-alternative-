import { Briefcase, Building2, Wallet, Package, ShieldCheck, type LucideIcon } from 'lucide-react'

export interface Section {
    head: string;
    body: string;
}

export interface DocCategory {
    title: string;
    subtitle?: string;
    description?: string;
    color: string;
    textColor: string;
    icon: LucideIcon;
    sections: Section[];
}

export const docData: Record<string, DocCategory> = {
    employees: {
        title: "Employees OS",
        color: "bg-[#1C3144]", // Fallback color if not used
        textColor: "text-white",
        icon: Briefcase,
        sections: [] // Empty as handled by EmployeeCarousel
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
