import { Link, useNavigate, useParams } from 'react-router-dom'
import PageTransition from '../components/layout/PageTransition'
import { features } from '../data/valueProps'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import StakeholderSection from '../components/vision/StakeholderSection'
import { Button } from '../components/ui/Button'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useEffect } from 'react'
import EngagementCycle from '../components/sections/EngagementCycle'
import AppMergingAnimation from '../components/ui/AppMergingAnimation'
import EmployeeOSShowcase from '../components/sections/EmployeeOSShowcase'
import AdminOSShowcase from '../components/sections/AdminOSShowcase'
import SovereignCloudAnimation from '../components/vision/sovereign/SovereignCloudAnimation'

export default function ValueDetailPage() {
    const { id } = useParams()
    const navigate = useNavigate()
    const feature = features.find(f => f.id === id)

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    if (!feature) {
        return (
            <div className="min-h-screen bg-coconut flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Value Proposition Not Found</h1>
                <Button onClick={() => navigate('/')}>Return Home</Button>
            </div>
        )
    }

    // Helper to render content based on ID
    const renderContent = () => {
        if (id === 'integrated-ecosystem') {
            return (
                <div className="w-full relative mt-[-2rem]">
                    <div className="py-16 md:py-24">
                        <AppMergingAnimation />
                    </div>
                    <StakeholderSection />
                </div>
            )
        }

        if (id === 'real-time-gratification') {
            return (
                <div className="w-full space-y-12 md:space-y-16">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <EngagementCycle />
                    </div>
                </div>
            )
        }

        if (id === 'employees') {
            return (
                <div className="w-full">
                    <EmployeeOSShowcase />
                </div>
            )
        }

        if (id === 'admins') {
            return (
                <div className="w-full">
                    <AdminOSShowcase />
                </div>
            )
        }

        if (id === 'sovereign-infrastructure') {
            return (
                <div className="container mx-auto px-6 max-w-7xl"> {/* Increased max-width */}
                    <div className="w-full">
                        {/* Main Content Area - Full Width */}
                        <div className="w-full">
                            <SovereignCloudAnimation />
                        </div>
                    </div>

                    {/* NEW: Enriching Content */}
                    <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Benefit Cards */}
                        <div className="bg-white p-8 rounded-3xl border border-graphite/5 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-3">Data Residency</h3>
                            <p className="text-graphite/60 leading-relaxed">
                                Your data stays within Indian borders. Fully compliant with local regulations including strict adherence to the DPDP Act 2023.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-graphite/5 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-success/10 rounded-2xl flex items-center justify-center mb-6 text-success">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-2"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-3">Total Control</h3>
                            <p className="text-graphite/60 leading-relaxed">
                                Deploy on-premise or in your private cloud. You hold the encryption keys, ensuring no third-party access to your sensitive information.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-graphite/5 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-unlock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 9.9-1" /></svg>
                            </div>
                            <h3 className="text-xl font-bold text-graphite mb-3">Zero Lock-in</h3>
                            <p className="text-graphite/60 leading-relaxed">
                                Built on open standards. Export your complete dataset in standard formats anytime without penalties or technical barriers.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-graphite/10 pt-16 mb-16">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">Security First Architecture</h2>
                            <p className="text-xl text-graphite/70 leading-relaxed">
                                ZUWOS is engineered with a "Zero Stress" security model. We separate the application layer from the data layer, giving you the flexibility to update the software while keeping the database isolated in your secure environment.
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        // Default Layout for other pages
        return (
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-8">
                        <div className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-a:text-primary max-w-none">
                            <p className="text-xl leading-relaxed mb-8">
                                {feature.detail}
                            </p>

                            {/* Render HTML content safely */}
                            <div dangerouslySetInnerHTML={{ __html: feature.longContent || '' }} />
                        </div>
                    </div>

                    <div className="md:col-span-4 space-y-8">
                        {/* Key Benefits Sidebar */}
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-graphite/80">Key Benefits</h3>
                            <ul className="space-y-4">
                                {[1, 2, 3].map((_, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckCircle2 className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-graphite/80 text-sm font-medium">
                                            Enterprise-grade reliability and scale
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-graphite text-white p-8 rounded-2xl text-center">
                            <h3 className="font-bold text-xl mb-4">Ready to upgrade?</h3>
                            <p className="mb-6 opacity-80 text-sm">Get full access to the ZUWOS operating system today.</p>
                            <div className="text-center">
                                <Link to="/request-access" className="block w-full">
                                    <Button variant="primary" className="w-full justify-center">
                                        Request Access
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <PageTransition className="min-h-screen bg-coconut flex flex-col">
            <Navbar />

            <main className="flex-grow pt-32 pb-20">
                {/* Header Container - Always Visible & Constrained - EXCEPT for Employee OS which has its own header internal to component? NO, user said "Now it should say "Employee OS" and under that, one app for everything." This sounds like it should REPLACE the header on the page or be part of the showcase. 
                   Looking at my implementation of EmployeeOSShowcase: it HAS a header "Employee OS" / "One App for Everything". 
                   So I probably should HIDE the default header for 'employees' also to avoid duplication. 
                   Let's check the request again: "The current pictures that are there, I want them removed. And the current text as well... Now it should say "Employee OS"..." 
                   This implies complete replacement of content.
                */}

                {/* Conditional Header Rendering */}
                {id !== 'employees' && id !== 'admins' && (
                    <div className="container mx-auto px-6 max-w-4xl">
                        {/* Back Button */}
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-graphite/60 hover:text-primary transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Overview
                        </button>

                        {/* Standard Header Section */}
                        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-graphite/5 mb-12">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary">
                                <feature.icon className="w-10 h-10" />
                            </div>

                            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">
                                {feature.title}
                            </h1>

                            <p className="text-xl md:text-2xl text-graphite/70 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                )}

                {/* For Employees, maybe we just want the Back Button? Or include it in the showcase? 
                    Let's include just back button for employees separately or let them navigate via browser? 
                    Better UX: Keep a specialized simplified header or back button for employees.
                */}
                {(id === 'employees' || id === 'admins') && (
                    <div className="container mx-auto px-6 max-w-7xl mb-8">
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center text-graphite/60 hover:text-primary transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Overview
                        </button>
                    </div>
                )}


                {/* Dynamic Content Section */}
                {renderContent()}

            </main>

            <Footer />
        </PageTransition>
    )
}
