import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import accountingImg from '../../sections/NEWADMINHDZUWOS/Copy of Accounting Finance web.png';
import amcImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of AMC for Assets & Services web.png';
import assetsImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Assets (Lifecyle Management) web.png';
import auditImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Audit (Operational, Asset, Vendor) web.png';
import bookingImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Booking management web.png';
import energyImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Energy Web.png';
import fnbImg from '../../sections/NEWADMINHDZUWOS/Copy of F & B web.png';
import fitoutImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Fitout Management web.png';
import gatepassImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Gatepass web.png';
import hotoImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of HOTO web.png';
import incidentImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Incident Management web.png';
import inventoryImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Inventory management web.png';
import leaseImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Lease Management web.png';
import msafeImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of M safe web.png';
import mailroomImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Mailroom management web.png';
import materialImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Material Management Web..png';
import osrImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of OSR Management web.png';
import parkingImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Parking Management web.png';
import patrollingImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Patrolling web.png';
import permitImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Permit to work web.png';
import procurementImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of procurement web..png';
import scheduleImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Schedule & task Management web.png';
import snaggingImg from '../../ui/MOBILEEMPLOYEESHD/MOBILEFACILITIESHD/snagging NEWWWWWWW.png';
import spaceImg from '../../sections/NEWADMINHDZUWOS/Copy of Space management web.png';
import staffEntryImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Staff Entry Management web.png';
import surveyImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Survey Management Web.png';
import ticketImg from '../../sections/NEWADMINHDZUWOS/Copy of ticket helpdesk web.png';
import utilityImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Utility Meter Reading web.png';
import vendorImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Vendor Management Web.png';
import visitorImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Visitor Management web.png';
import wasteImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of Waste Management web.png';
import waterImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/NEWFACILITIESHDZUWOS/Copy of water asset list web..png';

const features = [
    { title: 'Hotoweb', image: hotoImg },
    { title: 'Snagging', image: snaggingImg },
    { title: 'Fitout Management', image: fitoutImg },
    { title: 'Tickets/ Helpdesk', image: ticketImg },
    { title: 'Assets (Lifecyle)', image: assetsImg },
    { title: 'Schedule & Task', image: scheduleImg },
    { title: 'Inventory', image: inventoryImg },
    { title: 'AMC Services', image: amcImg },
    { title: 'Audit', image: auditImg },
    { title: 'Waste Mgmt', image: wasteImg },
    { title: 'Survey', image: surveyImg },
    { title: 'Permit to Work', image: permitImg },
    { title: 'Incident Mgmt', image: incidentImg },
    { title: 'M-safe', image: msafeImg },
    { title: 'Vendor Mgmt', image: vendorImg },
    { title: 'Procurement', image: procurementImg },
    { title: 'Material Mgmt', image: materialImg },
    { title: 'Accounting', image: accountingImg },
    { title: 'Energy Management', image: energyImg },
    { title: 'Water Management', image: waterImg },
    { title: 'Utility Meter Reading', image: utilityImg },
    { title: 'Visitor Management', image: visitorImg },
    { title: 'Gatepass Management', image: gatepassImg },
    { title: 'Staff Entry Management', image: staffEntryImg },
    { title: 'Patrolling', image: patrollingImg },
    { title: 'F&B Management', image: fnbImg },
    { title: 'Parking Management', image: parkingImg },
    { title: 'OSR Management', image: osrImg },
    { title: 'Space Management', image: spaceImg },
    { title: 'Booking Management', image: bookingImg },
    { title: 'Mailroom Management', image: mailroomImg },
    { title: 'Lease Management', image: leaseImg },
];

const FacilitiesView = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
    const listRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % features.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Auto-scroll list to keep active item visible without triggering native browser scroll jumps
    useEffect(() => {
        const list = listRef.current;
        const item = itemRefs.current[activeIndex];
        if (list && item) {
            const targetScroll = item.offsetTop - (list.clientHeight / 2) + (item.clientHeight / 2);
            
            const startScroll = list.scrollTop;
            const distance = targetScroll - startScroll;
            const duration = 400; // ms
            let startTime: number | null = null;

            const animateScroll = (currentTime: number) => {
                if (startTime === null) startTime = currentTime;
                const elapsed = currentTime - startTime;
                
                if (elapsed < duration) {
                    // Ease-out cubic
                    const progress = elapsed / duration;
                    const ease = 1 - Math.pow(1 - progress, 3);
                    list.scrollTop = startScroll + (distance * ease);
                    requestAnimationFrame(animateScroll);
                } else {
                    list.scrollTop = targetScroll;
                }
            };
            
            requestAnimationFrame(animateScroll);
        }
    }, [activeIndex]);

    return (
        <div className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-zinc-100 flex flex-col lg:flex-row relative overflow-hidden text-zinc-900">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] flex-shrink-0 h-auto lg:h-full px-8 lg:px-10 lg:pl-14 xl:pl-16 2xl:pl-20 flex flex-col justify-start bg-zinc-100 border-b lg:border-b-0 lg:border-r border-zinc-200 z-10 pt-[100px] lg:pt-[120px] pb-10">
                <div className="mb-6 xl:mb-8">
                    <h2 className="text-3xl xl:text-4xl font-display font-bold text-zinc-900 mt-2">Facility Managers</h2>
                    <p className="text-base xl:text-lg text-zinc-600 mt-2">Total Operational Control.</p>
                </div>

                <ul ref={listRef} className="relative space-y-2 xl:space-y-4 max-h-[40vh] lg:max-h-[calc(100vh-320px)] overflow-y-auto pr-4 minimal-scrollbar mask-gradient" style={{ overscrollBehavior: 'contain' }}>
                    {features.map((item, i) => {
                        const isActive = activeIndex === i;
                        return (
                            <li
                                key={i}
                                ref={(el) => { itemRefs.current[i] = el; }}
                                className={`flex items-center gap-3 cursor-pointer group w-full`}
                                onClick={() => {
                                    setActiveIndex(i);
                                    setIsAutoPlaying(false);
                                }}
                            >
                                <div className="w-6 flex justify-center shrink-0">
                                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'opacity-100 text-zinc-900 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                </div>
                                <span className={`text-base md:text-lg lg:text-base xl:text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-zinc-900' : 'text-zinc-500 group-hover:text-zinc-700'}`}>
                                    {item.title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="flex-1 h-auto lg:h-full flex flex-col items-center lg:items-start justify-center p-6 lg:p-12 lg:pl-10 xl:pl-16 relative overflow-visible mt-8 lg:mt-0">
                <div className="w-full max-w-5xl 2xl:max-w-6xl relative aspect-video bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/50 group">
                    {features.map((item, i) => (
                        <img
                            key={i}
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${activeIndex === i ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FacilitiesView;
