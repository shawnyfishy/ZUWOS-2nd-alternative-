
import { useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReactLenis from 'lenis/react';
import PageTransition from '../components/layout/PageTransition';

const content = {
    privacy: {
        title: "Privacy Policy",
        lastUpdated: "January 2026",
        sections: [
            {
                heading: "Data Sovereignty",
                body: "ZUWOS is committed to keeping Indian data in India. We do not store, process, or transmit your enterprise data outside of Indian borders, complying fully with the DPDP Act 2023."
            },
            {
                heading: "Information Collection",
                body: "We collect information necessary for the functioning of the Workplace OS, including but not limited to employee profiles, attendance logs, and facility usage data. This data is owned by the Client Enterprise."
            },
            {
                heading: "Usage of Information",
                body: "Data is used strictly to provide services as per the SLA. ZUWOS does not sell or monetize enterprise data to third parties."
            }
        ]
    },
    terms: {
        title: "Terms of Service",
        lastUpdated: "January 2026",
        sections: [
            {
                heading: "Acceptance of Terms",
                body: "By accessing or using ZUWOS, you agree to be bound by these Terms. If you are using the Service on behalf of an organization, you are agreeing to these Terms for that organization."
            },
            {
                heading: "Service Licensing",
                body: "ZUWOS is provided on a flat-fee enterprise license basis. Unauthorized redistribution or reverse engineering of the software is strictly prohibited."
            },
            {
                heading: "Termination",
                body: "We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms."
            }
        ]
    },
    security: {
        title: "Security Policy",
        lastUpdated: "January 2026",
        sections: [
            {
                heading: "Infrastructure",
                body: "Our infrastructure is hosted on secure, ISO 27001 certified data centers within India. We utilize industry-standard encryption for data in transit (TLS 1.2+) and data at rest (AES-256)."
            },
            {
                heading: "Access Control",
                body: "We implement strict Role-Based Access Control (RBAC). Only authorized personnel have access to production environments, and all access is logged and audited."
            },
            {
                heading: "Vulnerability Management",
                body: "We conduct regular vulnerability assessments and penetration testing. Security patches are applied promptly to maintain system integrity."
            }
        ]
    }
};

const LegalPage = () => {
    const { doc } = useParams();
    const validDoc = (doc && content[doc as keyof typeof content]) ? (doc as keyof typeof content) : 'privacy';
    const data = content[validDoc];

    return (
        <ReactLenis root>
            <PageTransition>
                <div className="min-h-screen bg-coconut text-graphite font-sans">
                    <Navbar theme="light" />

                    <main className="pt-40 pb-20 px-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-16 border-b border-graphite/10 pb-12">
                                <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 tracking-tight">
                                    {data.title}
                                </h1>
                                <p className="text-gray-500 font-mono text-sm">
                                    Last Updated: {data.lastUpdated}
                                </p>
                            </div>

                            <div className="space-y-16">
                                {data.sections.map((section, i) => (
                                    <div key={i}>
                                        <h3 className="text-2xl font-bold mb-4">{section.heading}</h3>
                                        <p className="text-lg text-graphite/80 leading-relaxed max-w-2xl">
                                            {section.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>

                    <Footer />
                </div>
            </PageTransition>
        </ReactLenis>
    );
};

export default LegalPage;
