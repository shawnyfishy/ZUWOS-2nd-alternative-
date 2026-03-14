import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { X, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ReactLenis from 'lenis/react';
import TextRevealer from '../components/utils/TextRevealer';
import CinematicReveal from '../components/utils/CinematicReveal';
import PageTransition from '../components/layout/PageTransition';

const CareersPage = () => {
    const [selectedJob, setSelectedJob] = useState<{ role: string, dept: string } | null>(null);
    const [formState, setFormState] = useState({ name: '', email: '', linkedin: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleApply = (job: { role: string, dept: string }) => {
        setSelectedJob(job);
        setStatus('idle');
        setFormState({ name: '', email: '', linkedin: '' });
    };

    const submitApplication = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedJob) return;
        setStatus('loading');

        try {
            const res = await fetch('http://localhost:5000/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    role: selectedJob.role,
                    department: selectedJob.dept,
                    ...formState
                })
            });
            if (res.ok) {
                setStatus('success');
                setTimeout(() => setSelectedJob(null), 2000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <ReactLenis root>
            <PageTransition>
                <div className="min-h-screen bg-white text-graphite font-sans relative">
                    <Navbar theme="light" />

                    {/* Application Modal */}
                    {selectedJob && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSelectedJob(null)} />
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden animate-in fade-in zoom-in duration-200">
                                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                                    <div>
                                        <h3 className="font-bold text-lg">Apply for {selectedJob.role}</h3>
                                        <p className="text-sm text-gray-500">{selectedJob.dept}</p>
                                    </div>
                                    <button onClick={() => setSelectedJob(null)} className="p-2 hover:bg-gray-200 rounded-full transition-colors"><X size={20} /></button>
                                </div>

                                <div className="p-6">
                                    {status === 'success' ? (
                                        <div className="text-center py-8 text-green-600">
                                            <CheckCircle2 size={48} className="mx-auto mb-4" />
                                            <p className="font-bold text-xl">Application Sent!</p>
                                            <p className="text-sm opacity-80 mt-2">Good luck! We'll be in touch.</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={submitApplication} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Full Name</label>
                                                <input
                                                    required
                                                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Jane Doe"
                                                    value={formState.name}
                                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="jane@example.com"
                                                    value={formState.email}
                                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1">LinkedIn / Portfolio URL</label>
                                                <input
                                                    type="url"
                                                    className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    placeholder="https://linkedin.com/in/jane..."
                                                    value={formState.linkedin}
                                                    onChange={e => setFormState({ ...formState, linkedin: e.target.value })}
                                                />
                                            </div>
                                            {status === 'error' && <p className="text-red-500 text-sm">Failed to submit. Please try again.</p>}
                                            <div className="pt-2">
                                                <Button variant="primary" className="w-full justify-center" disabled={status === 'loading'}>
                                                    {status === 'loading' ? 'Sending...' : 'Submit Application'}
                                                </Button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    <main className="pt-28 pb-16 md:pb-24">

                        <div className="px-6 mb-16">
                            <div className="max-w-7xl mx-auto text-center">
                                <TextRevealer
                                    text="Build the Future of Work."
                                    className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 justify-center"
                                />
                                <p className="text-2xl md:text-3xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                                    Join the team that's redefining how India works. <br />
                                    We are looking for builders, thinkers, and rebels.
                                </p>
                            </div>
                        </div>

                        {/* Positions */}
                        <div className="bg-coconut py-24 px-6 md:px-12">
                            <div className="max-w-5xl mx-auto">
                                <h2 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-12">Open Positions</h2>

                                <div className="space-y-4">
                                    {[
                                        { role: "Full Stack Engineer", dept: "Engineering", loc: "Bangalore", type: "Full-Time" },
                                        { role: "Product Designer (UI/UX)", dept: "Design", loc: "Remote / Bangalore", type: "Full-Time" },
                                        { role: "Enterprise Sales Lead", dept: "Sales", loc: "Mumbai", type: "Full-Time" },
                                        { role: "Customer Success Manager", dept: "Operations", loc: "Delhi NCR", type: "Full-Time" }
                                    ].map((job, i) => (
                                        <CinematicReveal key={i} delay={i * 0.1}>
                                            <div onClick={() => handleApply(job)} className="group bg-white p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-saffron/30 cursor-pointer">
                                                <div>
                                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-saffron transition-colors">{job.role}</h3>

                                                    <div className="flex gap-4 text-sm text-gray-500">
                                                        <span>{job.dept}</span>
                                                        <span>•</span>
                                                        <span>{job.loc}</span>
                                                        <span>•</span>
                                                        <span>{job.type}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-6 md:mt-0">
                                                    <button className="px-6 py-2 rounded-full border border-gray-200 font-medium text-sm group-hover:bg-graphite group-hover:text-white transition-colors">
                                                        Apply Now
                                                    </button>
                                                </div>
                                            </div>
                                        </CinematicReveal>
                                    ))}
                                </div>


                                <div className="mt-16 text-center">
                                    <p className="text-gray-500 mb-6">Don't see your role? We're always hiring.</p>
                                    <a href="mailto:careers@zuwos.com" className="text-lg font-bold underline decoration-2 decoration-saffron underline-offset-4 hover:text-saffron transition-colors">
                                        Email us your portfolio
                                    </a>
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

export default CareersPage;
