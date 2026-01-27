import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            const data = await res.json();

            if (res.ok) {
                localStorage.setItem('admin_token', data.token);
                navigate('/admin');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError('Server connection failed');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-coconut text-graphite font-sans">
            <Navbar theme="light" />

            <main className="flex items-center justify-center pt-28 px-6">
                <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border border-graphite/5 animate-in fade-in zoom-in duration-300">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                        <Lock size={32} />
                    </div>

                    <div className="text-center mb-10">
                        <h1 className="text-3xl font-display font-bold mb-2">Admin Access</h1>
                        <p className="text-gray-500">Enter your credentials to manage ZUWOS.</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-wider opacity-60">Admin Password</label>
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-coconut border border-graphite/10 rounded-xl px-4 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-lg"
                                placeholder="••••••••"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
                                {error}
                            </div>
                        )}

                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full justify-center text-lg py-6"
                            disabled={loading}
                        >
                            {loading ? 'Authenticating...' : 'Sign In'}
                            {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                        </Button>
                    </form>

                    <p className="text-center text-xs text-gray-400 mt-8">
                        Securely managed by ZUWOS Backend Service.
                    </p>
                </div>
            </main>
        </div>
    );
}
