import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MacBookFrame, IPhoneFrame } from '../ui/DeviceFrames';
import { ShowcaseSidebar } from '../ui/ShowcaseSidebar';

import accountingImg from './NEWADMINHDZUWOS/Copy of Accounting Finance web.png';
import amcImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of AMC for Assets & Services web.png';
import assetsImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Assets (Lifecyle Management) web.png';
import auditImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Audit (Operational, Asset, Vendor) web.png';
import bookingImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Booking management web.png';
import energyImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Energy Web.png';
import fnbImg from './NEWADMINHDZUWOS/Copy of F & B web.png';
import fitoutImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Fitout Management web.png';
import gatepassImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Gatepass web.png';
import hotoImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of HOTO web.png';
import incidentImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Incident Management web.png';
import inventoryImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Inventory management web.png';
import leaseImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Lease Management web.png';
import msafeImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of M safe web.png';
import mailroomImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Mailroom management web.png';
import materialImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Material Management Web..png';
import osrImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of OSR Management web.png';
import parkingImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Parking Management web.png';
import patrollingImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Patrolling web.png';
import permitImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Permit to work web.png';
import procurementImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of procurement web..png';
import scheduleImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Schedule & task Management web.png';
import snaggingImg from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/snagging NEWWWWWWW.png'; // Updated import path
import spaceImg from './NEWADMINHDZUWOS/Copy of Space management web.png';
import staffEntryImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Staff Entry Management web.png';
import surveyImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Survey Management Web.png';
import ticketImg from './NEWADMINHDZUWOS/Copy of ticket helpdesk web.png';
import utilityImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Utility Meter Reading web.png';
import vendorImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Vendor Management Web.png';
import visitorImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Visitor Management web.png';
import wasteImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Waste Management web.png';
import waterImg from './NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of water asset list web..png';

import amcMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/AMC ios.jpg';
import assetMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Asset ios.jpg';
import auditMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Audit ios.jpg';
import energyMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Energy Management ios.jpg';
import fnbMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/F&B ios.jpg';
import fitoutMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Fitout ios.png';
import gatepassMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Gatepass ios.jpg';
import hotoMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/HOTO ios.png';
import incidentMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Incident Management ios.jpg';
import inventoryMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Inventory ios.jpg';
import mailroomMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Mailroom ios.jpg';
import bookingMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Meetings ios.jpg';
import meterMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Meter reading ios.jpg';
import osrMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/OSR ios.jpg';
import parkingMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Parking Management ios.jpg';
import patrollingMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Patrolling ios.jpg';
import ptwMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/PTW ios.jpg';
import scheduleMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Schedule & Task ios.jpg';
import snagMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Snag ios.png';
import spaceMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Space Management ios.jpg';
import staffEntryMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Staff Entry Management ios.jpg';
import surveyMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Survey ios.jpg';
import ticketMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Ticket_Helpdesk ios.jpg';
import visitorMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Visitor management   ios.jpg';
import waterMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/Water Management ios.jpg';
import msafeMobile from '../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/m safe ios.png';

// ... existing imports ...

const modules = [
    // 1. Transitioning
    { category: 'Transitioning', name: 'Hotoweb', description: 'Handover and Takeover documentation.', mac: hotoImg, mobile: hotoMobile },
    { category: 'Transitioning', name: 'Snagging', description: 'Track defects and resolution status.', mac: snaggingImg, mobile: snagMobile },
    { category: 'Transitioning', name: 'Fitout Management', description: 'Manage construction and renovations.', mac: fitoutImg, mobile: fitoutMobile },

    // 2. Maintenance
    { category: 'Maintenance', name: 'Tickets/ Helpdesk', description: 'Helpdesk for facility issues.', mac: ticketImg, mobile: ticketMobile },
    { category: 'Maintenance', name: 'Assets (Lifecyle)', description: 'Lifecycle management of physical assets.', mac: assetsImg, mobile: assetMobile },
    { category: 'Maintenance', name: 'Schedule & Task', description: 'Manage schedules and recurring tasks.', mac: scheduleImg, mobile: scheduleMobile },
    { category: 'Maintenance', name: 'Inventory', description: 'Track stock for consumables.', mac: inventoryImg, mobile: inventoryMobile },
    { category: 'Maintenance', name: 'AMC Services', description: 'Track Annual Maintenance Contracts.', mac: amcImg, mobile: amcMobile },
    { category: 'Maintenance', name: 'Audit', description: 'Operational, Asset, and Vendor audits.', mac: auditImg, mobile: auditMobile },
    { category: 'Maintenance', name: 'Waste Mgmt', description: 'Track waste disposal and recycling.', mac: wasteImg, mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Maintenance', name: 'Survey', description: 'Conduct facility surveys and feedback.', mac: surveyImg, mobile: surveyMobile },

    // 3. Safety
    { category: 'Safety', name: 'Permit to Work', description: 'Manage work permits and safety checks.', mac: permitImg, mobile: ptwMobile },
    { category: 'Safety', name: 'Incident Mgmt', description: 'Log and track safety incidents.', mac: incidentImg, mobile: incidentMobile },
    { category: 'Safety', name: 'M-safe', description: 'Safety training and compliance.', mac: msafeImg, mobile: msafeMobile },

    // 4. Finance
    { category: 'Finance', name: 'Vendor Mgmt', description: 'Manage vendor profiles and contracts.', mac: vendorImg, mobile: '/assets/facilities/amc-mobile.png' },
    { category: 'Finance', name: 'Procurement', description: 'Streamline purchasing processes.', mac: procurementImg, mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Finance', name: 'Material Mgmt', description: 'Track material usage and stock.', mac: materialImg, mobile: '/assets/facilities/inventory-mobile.png' },
    { category: 'Finance', name: 'Accounting', description: 'Track facility-related expenses.', mac: accountingImg, mobile: '/assets/facilities/amc-mobile.png' },

    // 5. Utility
    { category: 'Utility', name: 'Energy Management', description: 'Monitor energy consumption.', mac: energyImg, mobile: energyMobile },
    { category: 'Utility', name: 'Water Management', description: 'Track water usage and quality.', mac: waterImg, mobile: waterMobile },
    { category: 'Utility', name: 'Utility Meter Reading Management', description: 'Automated utility meter tracking.', mac: utilityImg, mobile: meterMobile },

    // 6. Security
    { category: 'Security', name: 'Visitor Management', description: 'Streamline guest entry management.', mac: visitorImg, mobile: visitorMobile },
    { category: 'Security', name: 'Gatepass Management', description: 'Manage material movement gate passes.', mac: gatepassImg, mobile: gatepassMobile },
    { category: 'Security', name: 'Staff Entry Management', description: 'Manage staff access and attendance.', mac: staffEntryImg, mobile: staffEntryMobile },
    { category: 'Security', name: 'Patrolling', description: 'Monitor security guard routes.', mac: patrollingImg, mobile: patrollingMobile },

    // 7. Value Added Services
    { category: 'Value Added Services', name: 'F&B Management', description: 'Food and beverage management.', mac: fnbImg, mobile: fnbMobile },
    { category: 'Value Added Services', name: 'Parking Management', description: 'Manage parking spaces and allocation.', mac: parkingImg, mobile: parkingMobile },
    { category: 'Value Added Services', name: 'OSR Management', description: 'Occupancy Service Request management.', mac: osrImg, mobile: osrMobile },
    { category: 'Value Added Services', name: 'Space Management', description: 'Analyze floor plans and utilization.', mac: spaceImg, mobile: spaceMobile },
    { category: 'Value Added Services', name: 'Booking Management', description: 'Reserve meeting rooms and desks.', mac: bookingImg, mobile: bookingMobile },
    { category: 'Value Added Services', name: 'Mailroom Management', description: 'Track incoming and outgoing mail.', mac: mailroomImg, mobile: mailroomMobile },
    { category: 'Value Added Services', name: 'Lease Management', description: 'Track property lease agreements.', mac: leaseImg, mobile: '/assets/facilities/amc-mobile.png' },
];

export default function FacilitiesShowcase() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // 4 Second Cycle (Pauses on Interaction)
    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % modules.length);
            }, 2000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    const currentModule = modules[currentIndex];

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % modules.length;
        const img = new Image();
        img.src = modules[nextIndex].mac;
        const imgMobile = new Image();
        imgMobile.src = modules[nextIndex].mobile;
    }, [currentIndex]);

    return (
        <section className="w-full min-h-screen py-8 md:py-12 2xl:py-20 bg-coconut flex flex-col justify-between items-center relative">

            {/* 1. Header (Top) */}
            <div className="shrink-0 text-center z-10 px-6 relative z-20 mb-12 md:mb-16">
                <h2 className="text-5xl md:text-7xl font-display font-black text-primary tracking-tighter uppercase mb-2">
                    Zuwos's smart workplace
                </h2>
                <span className="text-xl md:text-2xl font-medium text-graphite/80 block uppercase">
                    built for FACILITIES
                </span>
            </div>

            {/* 2. Main Content (Fluid Grid Overlay) */}
            <div className="flex-grow w-full max-w-[1600px] mx-auto grid grid-cols-1 items-center relative z-10 px-6 md:px-12">

                {/* Layer 1: Sidebar (Left Aligned) */}
                <div className="col-start-1 row-start-1 justify-self-start hidden lg:block w-[300px]">
                    <ShowcaseSidebar
                        items={modules}
                        currentIndex={currentIndex}
                        onSelect={(index) => {
                            setCurrentIndex(index);
                            setIsPaused(true);
                        }}
                    />
                </div>

                {/* Layer 2: Main Content (Centered) */}
                {/* Added lg:pl-80 to shift center right and avoid sidebar overlap */}
                <div className="col-start-1 row-start-1 justify-self-center w-full max-w-[90rem] flex justify-center relative px-4 lg:pl-80 pointer-events-none">
                    <div className="relative z-10 w-full flex flex-col xl:flex-row items-center justify-center gap-8 md:gap-12 xl:gap-16 transform scale-100 transition-all duration-500 hover:scale-[1.02] pointer-events-auto">

                        {/* MacBook - More Smaller */}
                        <div className="w-full max-w-lg md:max-w-xl 2xl:max-w-4xl">
                            <MacBookFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mac-${currentIndex}`}
                                            src={currentModule.mac}
                                            alt={`${currentModule.name} Dashboard`}
                                            className="absolute inset-0 w-full h-full object-cover object-top image-pixel-perfect"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </AnimatePresence>

                                    {/* Logo Patch for Hotoweb to hide Godrej Logo */}

                                </div>
                            </MacBookFrame>
                        </div>

                        {/* iPhone Separated & Even Smaller */}
                        <div className="w-[200px] md:w-[170px] shrink-0">
                            <IPhoneFrame>
                                <div className="relative w-full h-full bg-white">
                                    <AnimatePresence mode="popLayout">
                                        <motion.img
                                            key={`mobile-${currentIndex}`}
                                            src={currentModule.mobile}
                                            alt={`${currentModule.name} App`}
                                            className="absolute inset-0 w-full h-full object-cover object-top"
                                            initial={{ x: 50, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            exit={{ x: -50, opacity: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        />
                                    </AnimatePresence>
                                </div>
                            </IPhoneFrame>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. Footer (Bottom) */}
            <div className="shrink-0 w-full flex justify-center pt-16 pb-4 md:pb-8 z-20 px-6 relative z-20">
                <motion.h3 layout className="flex flex-wrap items-baseline justify-center gap-[0.4em] tracking-tight leading-none text-center">
                    <motion.span layout className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">Enables</motion.span>

                    {/* Morphing Category Container */}
                    <motion.span layout className="relative flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                layout
                                key={`cat-${currentModule.category}`}
                                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-xl md:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.category}
                            </motion.span>
                        </AnimatePresence>
                    </motion.span>

                    <motion.span layout className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">to manage</motion.span>

                    {/* Morphing Module Name Container */}
                    <motion.span layout className="relative flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            <motion.span
                                layout
                                key={`mod-${currentModule.name}`}
                                initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, y: -15, filter: 'blur(8px)' }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="text-xl md:text-3xl text-primary font-black whitespace-nowrap"
                            >
                                {currentModule.name}
                            </motion.span>
                        </AnimatePresence>
                    </motion.span>

                    <motion.span layout className="whitespace-nowrap text-base md:text-xl font-medium text-graphite/80">seamlessly</motion.span>
                </motion.h3>
            </div>
        </section>
    );
}
