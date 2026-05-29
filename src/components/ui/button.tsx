import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: 'solid' | 'outline' | 'ghost'
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  solid: 'bg-primary text-primary-foreground hover:opacity-90',
  outline: 'border border-border bg-transparent hover:bg-muted',
  ghost: 'bg-transparent hover:bg-muted',
}

/** Anchor-based button — the site is link-driven, so this stays an <a>. */
const LinkButton = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'outline', ...props }, ref) => (
    <a
      ref={ref}
      className={cn(
        'focus-ring inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors',
        variants[variant],
        className,
      )}
      {...props}
    />
  ),
)
LinkButton.displayName = 'LinkButton'

export { LinkButton }
