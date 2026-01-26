import { motion } from 'framer-motion';

export const EmployeesVisual = () => (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-48 h-32 opacity-30 group-hover:opacity-60 transition-opacity">
        {/* Nodes connecting - abstract network */}
        <svg viewBox="0 0 200 100" className="w-full h-full">
            <motion.circle cx="50" cy="50" r="10" fill="currentColor" variants={{ hover: { scale: 1.2 } }} />
            <motion.circle cx="150" cy="20" r="10" fill="currentColor" variants={{ hover: { scale: 1.2, y: 10 } }} />
            <motion.circle cx="150" cy="80" r="10" fill="currentColor" variants={{ hover: { scale: 1.2, y: -10 } }} />
            <motion.path
                d="M60 50 L140 25"
                stroke="currentColor"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                variants={{ hover: { pathLength: 1 } }}
                transition={{ duration: 0.5 }}
            />
            <motion.path
                d="M60 50 L140 75"
                stroke="currentColor"
                strokeWidth="4"
                initial={{ pathLength: 0 }}
                variants={{ hover: { pathLength: 1 } }}
                transition={{ duration: 0.5, delay: 0.1 }}
            />
        </svg>
    </div>
);

export const HROpsVisual = () => (
    <div className="absolute right-4 bottom-4 w-24 h-24 opacity-20 group-hover:opacity-50 transition-opacity">
        {/* Checklist items sliding in */}
        <div className="flex flex-col gap-2">
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className="h-4 bg-current rounded-full"
                    variants={{
                        hover: {
                            x: [0, 10, 0],
                            width: ["80%", "100%", "80%"],
                            transition: { delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }
                        }
                    }}
                />
            ))}
        </div>
    </div>
);

export const FacilitiesVisual = () => (
    <div className="absolute right-0 bottom-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
        {/* Wireframe building block */}
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            <motion.rect
                x="20" y="20" width="60" height="60"
                stroke="currentColor" strokeWidth="4" fill="none"
                initial={{ rotate: 0 }}
                variants={{ hover: { rotate: 90 } }}
                transition={{ type: "spring", stiffness: 50 }}
            />
            <motion.rect
                x="30" y="30" width="40" height="40"
                fill="currentColor"
                initial={{ scale: 0 }}
                variants={{ hover: { scale: 1 } }}
                transition={{ delay: 0.2 }}
            />
        </svg>
    </div>
);

export const FinanceVisual = () => (
    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-40 h-24 opacity-30 group-hover:opacity-60 transition-opacity">
        {/* Graph line drawing */}
        <svg viewBox="0 0 200 100" className="w-full h-full">
            <motion.path
                d="M10 90 L50 60 L90 80 L130 40 L190 10"
                stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round"
                initial={{ pathLength: 0 }}
                variants={{ hover: { pathLength: 1 } }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            />
        </svg>
    </div>
);

export const AccountantsVisual = () => (
    <div className="absolute right-4 bottom-4 opacity-20 group-hover:opacity-40 transition-opacity">
        {/* Floating Symbols */}
        <div className="relative w-24 h-24 font-display font-bold text-6xl flex justify-center items-center">
            <motion.span
                className="absolute"
                variants={{ hover: { y: -20, opacity: 0 } }}
                transition={{ duration: 1, repeat: Infinity }}
            >+</motion.span>
            <motion.span
                className="absolute"
                variants={{ hover: { y: -20, opacity: 0 } }}
                transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
            >%</motion.span>
            <motion.span
                className="absolute"
                variants={{ hover: { y: -20, opacity: 0 } }}
                transition={{ duration: 1, delay: 0.6, repeat: Infinity }}
            >=</motion.span>
        </div>
    </div>
);

export const ProcurementVisual = () => (
    <div className="absolute right-8 top-1/2 -translate-y-1/2 w-32 h-32 opacity-30 group-hover:opacity-60 transition-opacity perspective-1000">
        {/* Box opening/closing */}
        <motion.div
            className="w-20 h-20 border-4 border-current mx-auto"
            variants={{
                hover: {
                    rotateY: 180,
                    scale: 1.1
                }
            }}
            transition={{ duration: 0.8 }}
        />
        <motion.div
            className="w-20 h-4 bg-current mx-auto mt-2"
            variants={{ hover: { y: 5 } }}
        />
    </div>
);

export const AdminsVisual = () => (
    <div className="absolute right-4 bottom-4 w-32 h-32 opacity-20 group-hover:opacity-50 transition-opacity flex items-center justify-center">
        {/* Shield/Lock pulsing */}
        <motion.div
            className="w-16 h-20 border-4 border-current rounded-b-full rounded-t-lg"
            variants={{
                hover: {
                    scale: [1, 1.1, 1],
                    borderWidth: ["4px", "8px", "4px"]
                }
            }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        >
            <motion.div
                className="w-4 h-4 bg-current rounded-full mx-auto mt-6"
                variants={{ hover: { scale: [1, 1.5, 1] } }}
            />
        </motion.div>
    </div>
);
