import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from './Button'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'brutalist'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'bg-white p-6 md:p-8',
                    {
                        'shadow-sm border border-graphite/10': variant === 'default',
                        'transition-all hover:-translate-y-1 hover:shadow-brutalist border border-graphite': variant === 'brutalist',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Card.displayName = "Card"

export { Card }
