import * as React from 'react'
import { cn } from '@/lib/utils'

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'outline' | 'accent'
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-muted text-muted-foreground',
  outline: 'border border-border text-muted-foreground',
  accent: 'border border-accent/30 bg-accent/10 text-accent',
}

function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-tight',
        variants[variant],
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
