import { PUBLICATIONS, PROFILE } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { cn } from '@/lib/utils'

const ME = 'G. M. Prabhu'

function Authors({ authors }: { authors: readonly string[] }) {
  return (
    <span className="text-muted-foreground">
      {authors.map((a, i) => (
        <span key={a}>
          <span className={cn(a === ME && 'font-semibold text-foreground')}>{a}</span>
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
      title="Publications"
      intro="Six peer-reviewed papers across journals, conferences, and workshops. Authored name in bold; ★ marks selected work."
    >
      <ol className="space-y-7">
        {sorted.map((pub, i) => (
          <FadeIn as="li" key={pub.id} delay={Math.min(i * 0.03, 0.18)}>
            <div className="grid grid-cols-[2.75rem_1fr] gap-x-3">
              {/* Left rail: year + selected marker */}
              <div className="pt-0.5 text-right">
                <span className="font-mono text-[13px] text-muted-foreground">{pub.year}</span>
                {pub.selected ? (
                  <span className="mt-1 block text-[13px] leading-none text-accent" title="Selected">
                    ★
                  </span>
                ) : null}
              </div>

              {/* Reference body */}
              <div>
                <h3 className="text-pretty font-medium leading-snug text-foreground">
                  {pub.link ? (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring link rounded-sm decoration-border/0 hover:decoration-accent"
                    >
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h3>

                <p className="mt-1 text-sm leading-relaxed">
                  <Authors authors={pub.authors} />
                </p>

                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  <span className="italic">{pub.venue}</span>, {pub.venueDetail} ·{' '}
                  {pub.venueType}
                  {pub.citations ? ` · ${pub.citations} citations` : ''}
                </p>

                <p className="mt-1.5 text-sm leading-relaxed text-foreground/70">{pub.note}</p>

                {(pub.link || pub.doi) && (
                  <p className="mt-1.5 flex flex-wrap gap-x-4 text-[13px]">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring link-accent rounded-sm"
                      >
                        Read paper ↗
                      </a>
                    ) : null}
                    {pub.doi ? (
                      <a
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring link rounded-sm font-mono text-muted-foreground"
                      >
                        doi:{pub.doi}
                      </a>
                    ) : null}
                  </p>
                )}
              </div>
            </div>
          </FadeIn>
        ))}
      </ol>

      <p className="mt-9 text-sm text-muted-foreground">
        Full list and citation metrics on{' '}
        <a
          href={PROFILE.links.scholar}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent"
        >
          Google Scholar
        </a>
        .
      </p>
    </Section>
  )
}
