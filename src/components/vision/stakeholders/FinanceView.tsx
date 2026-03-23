import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import accountingImg from '../../sections/NEWADMINHDZUWOS/Copy of Accounting Finance web.png';
import balanceSheetImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Balance Sheet web.png';
import budgetImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Budget.png';
import chartOfAccountantImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Charts of Accounts web.png';
import gstPayableImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of GST Payable web.png';
import manualJournalImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Manual Journals Web.png';
import openingBalanceImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Opening Balance web.png';
import procurementImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Procurement Finance web.png';
import profitAndLossImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Profit & Loss Web.png';
import taxSummaryImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Tax Summary Web.png';
import transactionImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Transaction web.png';
import vendorImg from '../../sections/NEWFINANCEANDACCOUNTSHDZUWOS/Copy of Vendor Management (Finance web).png';

const features = [
    { title: 'Accounting', image: accountingImg },
    { title: 'Balance Sheet', image: balanceSheetImg },
    { title: 'Budget', image: budgetImg },
    { title: 'Chart of Accountant', image: chartOfAccountantImg },
    { title: 'GST Payable', image: gstPayableImg },
    { title: 'Manual Journal', image: manualJournalImg },
    { title: 'Opening Balance', image: openingBalanceImg },
    { title: 'Procurement', image: procurementImg },
    { title: 'Profit and Loss', image: profitAndLossImg },
    { title: 'Tax Summary', image: taxSummaryImg },
    { title: 'Transaction', image: transactionImg },
    { title: 'Vendor', image: vendorImg },
];

const FinanceView = () => {
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
        <div className="w-full lg:w-screen min-h-screen lg:h-screen flex-shrink-0 bg-rose-50 flex flex-col lg:flex-row relative overflow-hidden text-graphite">
            {/* Left Panel: Role & Features */}
            <div className="w-full lg:w-[320px] xl:w-[380px] 2xl:w-[420px] flex-shrink-0 h-auto lg:h-full px-8 lg:px-10 lg:pl-14 xl:pl-16 2xl:pl-20 flex flex-col justify-start bg-rose-50 border-b lg:border-b-0 lg:border-r border-rose-200 z-10 pt-[100px] lg:pt-[120px] pb-10">
                <div className="mb-6 xl:mb-8">
                    <h2 className="text-3xl xl:text-4xl font-display font-bold text-rose-950 mt-2">Finance</h2>
                    <p className="text-base xl:text-lg text-rose-800/80 mt-2">Real-Time Financial Truth.</p>
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
                                    <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? 'opacity-100 text-rose-600 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                </div>
                                <span className={`text-base md:text-lg lg:text-base xl:text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? 'text-rose-600' : 'text-rose-900/40 group-hover:text-rose-900/60'}`}>
                                    {item.title}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Right Panel: Content / Mockups */}
            <div className="flex-1 h-auto lg:h-full flex flex-col items-center lg:items-start justify-center p-6 lg:p-12 lg:pl-10 xl:pl-16 relative overflow-visible mt-8 lg:mt-0">
                <div className="w-full max-w-5xl 2xl:max-w-6xl relative aspect-video bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-rose-200/50 group">
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

export default FinanceView;
