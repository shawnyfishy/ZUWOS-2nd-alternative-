

import { Link } from 'react-router-dom';

const FinalCTA = () => {
    return (
        <section className="w-full h-[70vh] flex flex-col items-center justify-center bg-graphite relative overflow-hidden text-center px-4">
            {/* Background Particles (CSS only for perf) */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="relative z-10 max-w-4xl">
                <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-8 leading-tight">
                    This is not software. <br />
                    <span className="text-gray-500 text-2xl md:text-5xl block mt-4 font-normal">
                        This is how modern Indian <br /> workplaces operate.
                    </span>
                </h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
                    <Link to="/request-access">
                        <button className="group relative px-8 py-4 bg-white text-graphite rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95">
                            <span className="relative z-10">Experience the Workplace OS</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-saffron to-terracotta opacity-0 group-hover:opacity-10 transition-opacity" />
                        </button>
                    </Link>
                </div>
            </div>

            <footer className="absolute bottom-8 text-gray-600 text-sm">
                &copy; 2026 ZUWOS. Built in India for the World.
            </footer>
        </section>
    );
};

export default FinalCTA;
