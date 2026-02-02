import React from 'react';

interface FrameProps {
    children: React.ReactNode;
    className?: string;
}

export const MacBookFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '900px', aspectRatio: '16/10' }}>
            {/* Modern MacBook Frame - Thinner Bezels, Boxier */}
            <div className="relative h-full w-full bg-gray-950 rounded-t-2xl border-t-[5px] border-x-[5px] border-b-[2px] border-gray-800 shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Camera Notch Area - Smaller */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-3 bg-black rounded-b-md z-20 flex items-center justify-center pointer-events-none border-b border-x border-gray-900/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0b0b0b] ring-1 ring-white/5"></div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center rounded-t-xl">
                    {children}
                </div>
            </div>
            {/* Bottom Keyboard Deck Edge - Prominent */}
            <div className="relative h-4 w-[102%] -ml-[1%] bg-[#1a1a1a] rounded-b-lg shadow-xl border-t border-black/50 flex justify-center">
                {/* Thumb Scoop Detail */}
                <div className="w-[15%] h-[50%] bg-[#0f0f0f] rounded-b-md border-x border-b border-white/5 shadow-inner"></div>
            </div>
        </div>
    );
};

export const IPhoneFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '340px', aspectRatio: '9/19' }}>
            {/* iPhone 16/17 Pro Style - Boxier, Thinner Bezels, Titanium-like Border */}
            <div className="relative h-full w-full bg-black rounded-[2.5rem] border-[4px] border-[#3a3a3a] shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/*  Outer Metallic Ring Shim */}
                <div className="absolute inset-0 rounded-[2.2rem] border-[1px] border-gray-600/30 pointer-events-none z-30"></div>

                {/* Dynamic Island - Smaller, Pill Shape */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[22%] h-[2.5%] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
                    {/* Lens reflection */}
                    <div className="w-[30%] h-[30%] rounded-full bg-[#1a1a1a] ml-auto mr-2"></div>
                </div>

                {/* Screen Content */}
                <div className="absolute inset-0 bg-white overflow-hidden rounded-[2.2rem]">
                    {children}
                </div>
            </div>
        </div>
    );
};
