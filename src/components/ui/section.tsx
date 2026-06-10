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

/** Anchored content section: hairline top rule, quiet header, single measure. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-t border-border py-14 sm:py-20', className)}>
      <div className="wrap">
        <FadeIn>
          <header className="mb-9">
            {eyebrow ? (
              <p className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="text-pretty font-serif text-[1.45rem] font-medium tracking-tight text-foreground sm:text-[1.8rem]">
              {title}
            </h2>
            {intro ? (
              <p className="mt-3 max-w-prose text-pretty text-[15px] leading-relaxed text-muted-foreground">
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
