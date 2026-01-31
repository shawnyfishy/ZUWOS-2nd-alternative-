import React from 'react';

interface FrameProps {
    children: React.ReactNode;
    className?: string;
}

export const MacBookFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '800px', aspectRatio: '16/9' }}>
            {/* Simple CSS/SVG based MacBook Frame */}
            <div className="relative h-full w-full bg-gray-900 rounded-t-xl border-[4px] border-neutral-800 shadow-2xl overflow-hidden ring-1 ring-black">
                {/* Camera Notch Area */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-4 bg-black rounded-b-lg z-20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800 border border-gray-600"></div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
                    {children}
                </div>
            </div>
            {/* Bottom Keyboard Deck Edge */}
            <div className="relative -mt-[2px] h-3 w-[110%] -ml-[5%] bg-neutral-800 rounded-b-lg shadow-xl flex items-center justify-center border-t border-neutral-700">
                <div className="w-20 h-1 bg-neutral-600 rounded-full opacity-50"></div>
            </div>
        </div>
    );
};

export const IPhoneFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '300px', aspectRatio: '9/19.5' }}>
            <div className="relative h-full w-full bg-gray-900 rounded-[2.5rem] border-[6px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/20">
                {/* Dynamic Island - Smaller & Less Intrusive */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20 flex items-center justify-center gap-2 pointer-events-none">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1c1c1e]"></div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-white overflow-hidden rounded-[2rem]">
                    {children}
                </div>
            </div>
            {/* Side Buttons REMOVED per user request */}
        </div>
    );
};
