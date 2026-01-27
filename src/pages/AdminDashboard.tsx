import { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import { useNavigate } from 'react-router-dom';
import { User, Briefcase, LogOut } from 'lucide-react';

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string;
    created_at: string;
}

interface Application {
    id: number;
    role: string;
    department: string;
    name: string;
    email: string;
    linkedin: string;
    created_at: string;
}

export default function AdminDashboard() {
    const [leads, setLeads] = useState<Lead[]>([]);
    const [applications, setApplications] = useState<Application[]>([]);
    const [activeTab, setActiveTab] = useState<'leads' | 'applications'>('leads');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('admin_token');
        if (!token) {
            navigate('/admin/login');
            return;
        }

        const headers = { 'Authorization': `Bearer ${token}` };

        fetch('http://localhost:5000/api/leads', { headers })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('admin_token');
                    navigate('/admin/login');
                }
                return res.json();
            })
            .then(data => Array.isArray(data) ? setLeads(data) : setLeads([]))
            .catch(err => console.error('Error fetching leads:', err));

        fetch('http://localhost:5000/api/applications', { headers })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    localStorage.removeItem('admin_token');
                    navigate('/admin/login');
                }
                return res.json();
            })
            .then(data => Array.isArray(data) ? setApplications(data) : setApplications([]))
            .catch(err => console.error('Error fetching applications:', err));
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
    };

    return (
        <div className="min-h-screen bg-gray-50 text-graphite font-sans">
            <Navbar theme="light" />

            <main className="pt-24 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-12 flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl font-display font-bold mb-4">Admin Dashboard</h1>
                            <p className="text-gray-500">View and manage form submissions and job applications.</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-red-100"
                        >
                            <LogOut size={16} />
                            Log Out
                        </button>
                    </header>

                    {/* Tabs */}
                    <div className="flex gap-6 border-b border-gray-200 mb-8">
                        <button
                            onClick={() => setActiveTab('leads')}
                            className={`pb-4 px-2 font-medium flex items-center gap-2 transition-colors ${activeTab === 'leads' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <User size={18} />
                            Request Access Leads
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs ml-1">{leads.length}</span>
                        </button>
                        <button
                            onClick={() => setActiveTab('applications')}
                            className={`pb-4 px-2 font-medium flex items-center gap-2 transition-colors ${activeTab === 'applications' ? 'border-b-2 border-primary text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                        >
                            <Briefcase size={18} />
                            Job Applications
                            <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs ml-1">{applications.length}</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        {activeTab === 'leads' ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium uppercase tracking-wider">
                                        <tr>
                                            <th className="p-6">ID</th>
                                            <th className="p-6">Name</th>
                                            <th className="p-6">Email</th>
                                            <th className="p-6">Phone</th>
                                            <th className="p-6">Submitted At</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {leads.map(lead => (
                                            <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-6 text-gray-400">#{lead.id}</td>
                                                <td className="p-6 font-medium">{lead.name}</td>
                                                <td className="p-6 text-blue-600">{lead.email}</td>
                                                <td className="p-6">{lead.phone || '-'}</td>
                                                <td className="p-6 text-gray-500">{new Date(lead.created_at).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        {leads.length === 0 && (
                                            <tr>
                                                <td colSpan={5} className="p-12 text-center text-gray-400">No leads found.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium uppercase tracking-wider">
                                        <tr>
                                            <th className="p-6">ID</th>
                                            <th className="p-6">Role</th>
                                            <th className="p-6">Candidate</th>
                                            <th className="p-6">Contact</th>
                                            <th className="p-6">LinkedIn</th>
                                            <th className="p-6">Applied At</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {applications.map(app => (
                                            <tr key={app.id} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-6 text-gray-400">#{app.id}</td>
                                                <td className="p-6">
                                                    <div className="font-medium text-graphite">{app.role}</div>
                                                    <div className="text-xs text-gray-400">{app.department}</div>
                                                </td>
                                                <td className="p-6 font-medium">{app.name}</td>
                                                <td className="p-6 text-blue-600">{app.email}</td>
                                                <td className="p-6">
                                                    {app.linkedin ? (
                                                        <a href={app.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Profile</a>
                                                    ) : '-'}
                                                </td>
                                                <td className="p-6 text-gray-500">{new Date(app.created_at).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                        {applications.length === 0 && (
                                            <tr>
                                                <td colSpan={6} className="p-12 text-center text-gray-400">No applications received yet.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
