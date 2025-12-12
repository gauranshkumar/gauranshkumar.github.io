import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost'
    size?: 'sm' | 'md' | 'lg'
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    {
                        'bg-foreground text-background hover:bg-foreground/90 shadow': variant === 'default',
                        'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground': variant === 'outline',
                        'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
                        'h-8 px-3 text-xs': size === 'sm',
                        'h-9 px-4 py-2 text-sm': size === 'md',
                        'h-10 px-8 text-md': size === 'lg',
                    },
                    className
                )}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"
