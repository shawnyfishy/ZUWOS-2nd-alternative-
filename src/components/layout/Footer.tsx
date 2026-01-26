export default function Footer() {
    return (
        <footer className="bg-graphite text-coconut py-20 px-6 md:px-12">
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
                        <li>Employees</li>
                        <li>HR Managers</li>
                        <li>Facilities</li>
                        <li>Finance</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Company</h4>
                    <ul className="space-y-2 text-coconut/60">
                        <li>About</li>
                        <li>Manifesto</li>
                        <li>Careers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Legal</h4>
                    <ul className="space-y-2 text-coconut/60">
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                        <li>Security</li>
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
