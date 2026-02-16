import { useState, useRef, useEffect } from 'react';
import { SyncedGooeyText } from '../ui/SyncedGooeyText';

const EmployeeVideoShowcase = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const videos = [
        {
            name: "Employees",
            src: "/videos/employee.mp4"
        },
        {
            name: "Calendar",
            src: "/videos/calendar.mp4"
        },
        {
            name: "Help Desk",
            src: "/videos/helpdesk.mp4"
        }
    ];

    const handleVideoEnd = () => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
    };

    // Ensure video plays when index changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(() => { });
        }
    }, [currentIndex]);

    return (
        <div className="w-full min-h-[85vh] flex relative overflow-hidden bg-coconut border-y border-graphite/10">
            {/* Left Panel: Dynamic Text */}
            <div className="w-[30%] flex flex-col justify-center px-8 md:px-12 relative z-20 py-20">
                <div className="mb-8">
                    <h2 className="text-lg font-bold uppercase tracking-widest text-primary mb-6">Empower Workforce</h2>
                    {/* The text changes based on the current video */}
                    <div className="h-40 relative">
                        <SyncedGooeyText
                            text={videos[currentIndex].name}
                            className="h-full"
                            textClassName="text-graphite text-4xl md:text-6xl lg:text-7xl leading-none"
                        />
                    </div>
                </div>
                <div className="h-1 w-24 bg-primary rounded-full mt-4" />

                {/* Progress Indicators */}
                <div className="flex gap-3 mt-12">
                    {videos.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 duration-500 rounded-full transition-all ${i === currentIndex ? "w-16 bg-primary" : "w-4 bg-gray-300 hover:bg-primary/50"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Panel: Cinematic Video Player */}
            <div className="w-[70%] relative bg-gray-900 overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-90 scale-105"
                        muted
                        playsInline
                        autoPlay
                        onEnded={handleVideoEnd}
                    >
                        <source src={videos[currentIndex].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Overlay Gradient for seamless blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-coconut via-transparent to-transparent opacity-30" />
                </div>
            </div>
        </div>
    );
};

export default EmployeeVideoShowcase;
