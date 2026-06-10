'use client'

import * as React from 'react'
import { Check, Copy } from 'lucide-react'

/**
 * Inline BibTeX disclosure for a publication entry. Renders a quiet "Cite"
 * toggle; the expanded state shows the entry in a bordered block with a
 * one-click copy affordance — the interaction every researcher expects.
 */
export function Cite({ bibtex }: { bibtex: string }) {
  const [open, setOpen] = React.useState(false)
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(bibtex)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard unavailable (e.g. insecure context) — leave the text selectable.
    }
  }

  return (
    <span className="contents">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="focus-ring link rounded-sm font-mono text-[13px] text-muted-foreground"
      >
        {open ? 'Hide BibTeX' : 'BibTeX'}
      </button>

      {open ? (
        <span className="relative mt-1.5 block w-full">
          <pre className="overflow-x-auto rounded-md border border-border bg-muted/60 p-3.5 pr-12 font-mono text-[12px] leading-relaxed text-foreground/80">
            {bibtex}
          </pre>
          <button
            type="button"
            onClick={copy}
            aria-label="Copy BibTeX to clipboard"
            className="focus-ring absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            {copied ? <Check className="h-3.5 w-3.5 text-accent" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </span>
      ) : null}
    </span>
  )
}
