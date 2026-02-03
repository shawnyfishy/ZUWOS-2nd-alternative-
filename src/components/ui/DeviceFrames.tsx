import React from 'react';

interface FrameProps {
    children: React.ReactNode;
    className?: string;
}

export const MacBookFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '900px', aspectRatio: '16/10' }}>
            {/* Modern MacBook Pro 16 Style - Silver Body, Black Bezel */}

            {/* 1. The Screen Lid (Silver Aluminum Backing + Black Bezel) */}
            <div className="relative h-full w-full bg-black rounded-[18px] border-[6px] border-black shadow-2xl overflow-hidden ring-1 ring-white/20">
                {/* Outer Silver Rim (Subtle) */}
                <div className="absolute inset-[-2px] rounded-[20px] border-[2px] border-[#d4d4d8] pointer-events-none z-30 opacity-80"></div>

                {/* Camera Notch Area - Integrated into black bezel */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black rounded-b-lg z-20 flex items-center justify-center pointer-events-none">
                    {/* Camera Lens */}
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a] ring-1 ring-white/10 blur-[0.5px]"></div>
                </div>

                {/* Screen Content - Corner Radius matching bezel */}
                <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center rounded-[12px]">
                    {children}
                </div>
            </div>

            {/* 2. Bottom Base (Silver Aluminum - Bigger & Darker) */}
            <div className="relative h-4 w-[104%] -ml-[2%] bg-gradient-to-b from-[#d4d4d8] to-[#a1a1aa] rounded-b-xl shadow-2xl border-t border-[#71717a] flex justify-center items-start pt-1">
                {/* Thumb Scoop Detail - Deeper */}
                <div className="w-[15%] h-[40%] bg-[#a1a1aa] rounded-b-lg border-x border-b border-[#52525b]/50 shadow-inner"></div>
            </div>
        </div>
    );
};

export const IPhoneFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '340px', aspectRatio: '9/19' }}>
            {/* iPhone 16/17 Pro Style - Boxier, Thinner Bezels, Titanium-like Border */}
            <div className="relative h-full w-full bg-black rounded-3xl border-[4px] border-[#3a3a3a] shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/*  Outer Metallic Ring Shim */}
                <div className="absolute inset-0 rounded-[1.3rem] border-[1px] border-gray-600/30 pointer-events-none z-30"></div>

                {/* Dynamic Island - Smaller, Pill Shape */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-[22%] h-[2.5%] bg-black rounded-full z-20 flex items-center justify-center pointer-events-none">
                    {/* Lens reflection */}
                    <div className="w-[30%] h-[30%] rounded-full bg-[#1a1a1a] ml-auto mr-2"></div>
                </div>

                {/* Screen Content - Matching adjust radius */}
                <div className="absolute inset-0 bg-white overflow-hidden rounded-[1.3rem]">
                    {children}
                </div>
            </div>
        </div>
    );
};
