import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-95 touch-manipulation',
                    {
                        'bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]': variant === 'primary',
                        'bg-graphite text-white hover:bg-graphite/90': variant === 'secondary',
                        'border-2 border-graphite text-graphite hover:bg-graphite hover:text-white': variant === 'outline',
                        'hover:bg-graphite/5 text-graphite': variant === 'ghost',
                        'h-9 px-4 text-sm rounded-lg': size === 'sm',
                        'h-12 px-8 text-base rounded-xl': size === 'md',
                        'h-14 px-10 text-lg rounded-2xl': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, cn }
