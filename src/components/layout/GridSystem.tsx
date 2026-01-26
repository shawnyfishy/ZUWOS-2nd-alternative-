import { type ReactNode } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface GridSystemProps {
    children: ReactNode
    className?: string
}

export function GridSystem({ children, className }: GridSystemProps) {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-12 px-6 md:px-12 max-w-[1920px] mx-auto", className)}>
            {children}
        </div>
    )
}
