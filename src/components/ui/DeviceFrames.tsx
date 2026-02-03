import React from 'react';

interface FrameProps {
    children: React.ReactNode;
    className?: string;
}

export const MacBookFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '1000px', width: '100%' }}>
            {/* 1. Main Outer Chassis (The Lid - Space Black) */}
            <div className="relative aspect-[16/10.3] bg-[#1a1a1b] rounded-[24px] p-[1.2%] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] ring-1 ring-white/5 overflow-hidden">

                {/* Subtle Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>

                {/* Metallic Chamfer Highlight (Machine-cut Edge) */}
                <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-[24px] pointer-events-none z-10 transition-opacity duration-500 group-hover:opacity-100"></div>

                {/* The Display Assembly (Black Bezel - Thinner) */}
                <div className="relative h-full w-full bg-black rounded-[14px] shadow-[inset_0_2px_10px_rgba(0,0,0,1)] overflow-hidden flex flex-col">

                    {/* Top Bezel / Camera Notch Container */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[16%] h-[2.5%] bg-black rounded-b-[6px] z-30 flex items-center justify-center pointer-events-none">
                        {/* Realistic Camera Lens */}
                        <div className="relative w-1.2 h-1.2 rounded-full bg-[#050505] ring-[0.3px] ring-white/5 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900/10 to-transparent opacity-40"></div>
                        </div>
                    </div>

                    {/* Screen Content Area */}
                    <div className="flex-grow relative bg-[#050505] overflow-hidden rounded-[6px]">
                        {children}
                    </div>
                </div>

                {/* Subtle Space Black surface shimmer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-black/20 pointer-events-none"></div>
            </div>

            {/* 2. The Hinge Mechanism (Stealth Black) */}
            <div className="relative h-1.5 w-[82%] mx-auto bg-gradient-to-b from-[#18181b] to-[#27272a] z-20 shadow-lg -mt-[2px]">
                {/* Ambient Occlusion Shadow */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-black/60"></div>
            </div>

            {/* 3. The Bottom Chassis (The Deck - Space Black) */}
            <div className="relative w-[104%] -ml-[2%] h-3.5">
                {/* Upper Deck Face */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#27272a] via-[#18181b] to-[#09090b] rounded-b-[16px] shadow-2xl overflow-hidden">

                    {/* Polished Edge Highlight (Very subtle for Space Black) */}
                    <div className="absolute top-0 inset-x-0 h-[1px] bg-white/[0.07] z-10"></div>

                    {/* Thumb Scoop Indentation */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[14%] h-[35%] bg-black/40 rounded-b-lg border-x border-b border-white/5 shadow-inner"></div>

                    {/* Depth Material Highlights */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>
                </div>

                {/* Base Shadow */}
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[88%] h-3 bg-black/30 blur-xl -z-10 rounded-full"></div>
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
