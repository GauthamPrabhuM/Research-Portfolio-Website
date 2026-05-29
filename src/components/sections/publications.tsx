import { ArrowUpRight, Quote } from 'lucide-react'
import { PUBLICATIONS, PROFILE } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { cn } from '@/lib/utils'

const AUTHOR_ME = 'G. M. Prabhu'

function Authors({ authors }: { authors: readonly string[] }) {
  return (
    <span>
      {authors.map((a, i) => (
        <span key={a}>
          <span className={cn(a === AUTHOR_ME && 'font-semibold text-foreground')}>{a}</span>
          {i < authors.length - 1 ? ', ' : ''}
        </span>
      ))}
    </span>
  )
}

export function Publications() {
  const sorted = [...PUBLICATIONS].sort((a, b) => b.year - a.year)

  return (
    <Section
      id="publications"
      eyebrow="Publications"
      title="Peer-reviewed publications"
      intro="Six peer-reviewed papers across journals, conferences, and workshops. Author name in bold."
    >
      <ol className="space-y-3">
        {sorted.map((pub, i) => {
          const Wrapper = pub.link ? 'a' : 'div'
          return (
            <FadeIn as="li" key={pub.id} delay={Math.min(i * 0.04, 0.2)}>
              <Wrapper
                {...(pub.link
                  ? { href: pub.link, target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className={cn(
                  'group block rounded-lg border border-border bg-card p-5 transition-colors sm:p-6',
                  pub.link && 'hover:border-accent/40',
                  pub.selected && 'border-l-2 border-l-accent',
                )}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="accent">{pub.venue}</Badge>
                  <Badge variant="outline">{pub.venueType}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">{pub.year}</span>
                  {pub.citations ? (
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-muted-foreground">
                      <Quote className="h-3 w-3" />
                      {pub.citations} citations
                    </span>
                  ) : null}
                  {pub.selected ? (
                    <span className="font-mono text-[11px] uppercase tracking-wider text-accent">
                      Selected
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 text-pretty font-medium leading-snug text-foreground">
                  {pub.title}
                  {pub.link ? (
                    <ArrowUpRight className="ml-1 inline h-4 w-4 -translate-y-0.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                  ) : null}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  <Authors authors={pub.authors} />
                </p>
                <p className="mt-1 text-sm italic text-muted-foreground">
                  {pub.venue}, {pub.venueDetail}, {pub.year}.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{pub.note}</p>
                {pub.doi ? (
                  <p className="mt-2 font-mono text-xs text-muted-foreground">doi:{pub.doi}</p>
                ) : null}
              </Wrapper>
            </FadeIn>
          )
        })}
      </ol>

      <p className="mt-6 text-sm text-muted-foreground">
        Full list and citation metrics on{' '}
        <a
          href={PROFILE.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline text-foreground"
        >
          Google Scholar
        </a>
        .
      </p>
    </Section>
  )
}
