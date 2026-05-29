'use client'

import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, PROFILE } from '@/lib/data'
import { ThemeToggle } from '@/components/theme-toggle'
import { cn } from '@/lib/utils'

export function Nav() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors',
        scrolled
          ? 'border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70'
          : 'border-b border-transparent',
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="focus-ring rounded text-sm font-semibold tracking-tight text-foreground"
        >
          {PROFILE.shortName}
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring rounded px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PROFILE.links.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring ml-1 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            CV
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-1 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PROFILE.links.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring rounded px-1 py-3 text-sm font-medium text-foreground"
            >
              Curriculum Vitae →
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
