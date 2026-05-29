import * as React from 'react'
import { cn } from '@/lib/utils'
import { FadeIn } from './fade-in'

type SectionProps = {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  children: React.ReactNode
  className?: string
}

/** Standard anchored content section with a consistent academic header. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-16 sm:py-20', className)}>
      <div className="container">
        <FadeIn>
          <header className="mb-10 max-w-prose">
            {eyebrow ? (
              <p className="mb-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}
            </h2>
            {intro ? (
              <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted-foreground">
                {intro}
              </p>
            ) : null}
          </header>
        </FadeIn>
        {children}
      </div>
    </section>
  )
}
