import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-graphite text-coconut py-16 md:py-24 px-6 md:px-12">
            <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h3 className="font-display font-bold text-2xl mb-6">ZUWOS</h3>
                    <p className="text-coconut/60 max-w-xs">
                        The Indigenous Workplace Management Operating System for the new age workforce.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Platform</h4>
                    <ul className="space-y-2 text-coconut/60">
                        <li><Link to="/platform/employees" className="hover:text-white transition-colors">Employees</Link></li>
                        <li><Link to="/platform/hr" className="hover:text-white transition-colors">HR Managers</Link></li>
                        <li><Link to="/platform/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                        <li><Link to="/platform/finance" className="hover:text-white transition-colors">Finance</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-coconut/60">
                        <li><Link to="/story" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link to="/vision" className="hover:text-white transition-colors">Manifesto</Link></li>
                        <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link to="/request-access" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-coconut/60">
                        <li><Link to="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/legal/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        <li><Link to="/legal/security" className="hover:text-white transition-colors">Security</Link></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-[1920px] mx-auto mt-20 pt-8 border-t border-coconut/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-coconut/40">
                <p>© 2026 ZUWOS. All rights reserved.</p>
                <p>Made in India. Built for the World.</p>
            </div>
        </footer>
    )
}
