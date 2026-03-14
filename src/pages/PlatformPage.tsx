
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReactLenis from 'lenis/react';
import PageTransition from '../components/layout/PageTransition';

const content = {
    employees: {
        title: "The Employee Super-App",
        subtitle: "One App for Everything.",
        description: "Empower your workforce with a single, unified interface for all their workplace needs. From checking cafe menus to booking meeting rooms, engaging with community posts to tracking performance incentives—it's all here.",
        features: ["Community Feed", "Helpdesk", "Meeting Booking", "Visitor Management", "Personal Dashboard"],
        color: "bg-blue-600",
        textColor: "text-white"
    },
    hr: {
        title: "HR & Operations",
        subtitle: "From Administration to Impact.",
        description: "Transform HR from a support function to a strategic powerhouse. Real-time visibility into workforce distribution, automated attendance, and seamless policy management.",
        features: ["Live Rosters", "Performance Analytics", "Instant Incentives", "Policy Deployment", "Onboarding Flows"],
        color: "bg-yellow-400",
        textColor: "text-black"
    },
    facilities: {
        title: "Facility Management",
        subtitle: "Total Operational Control.",
        description: "Manage your physical assets with digital precision. Track energy consumption, predictive maintenance, and vendor performance in real-time.",
        features: ["Asset Tracking", "Energy Monitoring", "Vendor SLAs", "Preventive Maintenance", "Smart Parking"],
        color: "bg-gray-900",
        textColor: "text-white"
    },
    finance: {
        title: "Finance Control",
        subtitle: "Real-Time Financial Truth.",
        description: "No more month-end surprises. Track Opex, manage budgets, and oversee vendor payments with complete transparency and real-time data.",
        features: ["Cost Allocation", "Budget Tracking", "Invoice Processing", "Audit Trails", "Variance Analysis"],
        color: "bg-pink-200",
        textColor: "text-black"
    }
};

const PlatformPage = () => {
    const { role } = useParams();
    // Default to 'employees' if undefined or invalid key
    const validRole = (role && content[role as keyof typeof content]) ? (role as keyof typeof content) : 'employees';
    const data = content[validRole];

    return (
        <ReactLenis root>
            <PageTransition>
                <div className={`min-h-screen ${data.color} ${data.textColor} font-sans selection:bg-black selection:text-white`}>
                    <Navbar theme={data.textColor === 'text-white' ? 'dark' : 'light'} />

                    <main className="pt-24 pb-20 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="max-w-4xl mb-16 md:mb-24">
                                <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 tracking-tighter leading-none">
                                    {data.title}
                                </h1>
                                <p className="text-2xl md:text-3xl font-medium opacity-80 max-w-2xl leading-relaxed">
                                    {data.subtitle}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                                <div>
                                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8 opacity-70">Overview</h3>
                                    <p className="text-lg md:text-2xl leading-relaxed opacity-90">
                                        {data.description}
                                    </p>

                                    <div className="mt-8 md:mt-12">
                                        <Link to="/request-access">
                                            <button className={`w-full md:w-auto px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 ${data.textColor === 'text-white' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                                Book a Demo
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                <div className={`p-8 md:p-12 rounded-3xl ${data.textColor === 'text-white' ? 'bg-white/10 border border-white/20' : 'bg-black/5 border border-black/10'}`}>
                                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest mb-6 md:mb-8 opacity-70">Key Capabilities</h3>
                                    <ul className="space-y-4 md:space-y-6">
                                        {data.features.map((feature, i) => (
                                            <li key={i} className="text-lg md:text-xl flex items-start gap-4">
                                                <div className={`w-3 h-3 rounded-full mt-2 shrink-0 ${data.textColor === 'text-white' ? 'bg-white' : 'bg-black'}`} />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </PageTransition>
        </ReactLenis>
    );
};

export default PlatformPage;
