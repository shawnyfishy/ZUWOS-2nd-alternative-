import React from 'react';
import macbookSvg from './macbookSVG/macbook-pro.svg';

interface FrameProps {
    children: React.ReactNode;
    className?: string;
}

export const MacBookFrame: React.FC<FrameProps> = ({ children, className = '' }) => {
    return (
        <div className={`relative mx-auto ${className}`} style={{ maxWidth: '1000px', width: '100%', aspectRatio: '4096/2378' }}>
            {/* The SVG Frame Layer */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <img
                    src={macbookSvg}
                    alt="MacBook Pro Frame"
                    width="4096"
                    height="2378"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* The Screen Content Area */}
            {/* Coordinates calibrated for the specific SVG asset (4096x2378) */}
            <div
                className="absolute overflow-hidden bg-black z-0"
                style={{
                    top: '4.8%',
                    left: '11.8%',
                    width: '76.4%',
                    height: '79.2%',
                    borderRadius: '0.4% / 0.7%' // Subtle rounding for the screen corners
                }}
            >
                <div className="w-full h-full relative">
                    {children}
                </div>
            </div>

            {/* Glossy Overlay Shimmer */}
            <div
                className="absolute z-20 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-30"
                style={{
                    top: '4.8%',
                    left: '11.8%',
                    width: '76.4%',
                    height: '79.2%',
                }}
            />
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
