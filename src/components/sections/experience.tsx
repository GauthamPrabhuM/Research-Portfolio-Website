import { RESEARCH_EXPERIENCE, PROFESSIONAL, EDUCATION } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'

function TimelineItem({
  current,
  children,
}: {
  current?: boolean
  children: React.ReactNode
}) {
  return (
    <li className="relative border-l border-border pb-8 pl-6 last:pb-0">
      <span
        className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 ${
          current ? 'border-accent bg-accent' : 'border-border bg-background'
        }`}
        aria-hidden
      />
      {children}
    </li>
  )
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Research & professional experience"
      intro="Research first; engineering as applied research and research-to-production."
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Research */}
        <div>
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide text-accent">
            Research
          </h3>
          <ol>
            {RESEARCH_EXPERIENCE.map((exp, i) => (
              <FadeIn as="li" key={`${exp.institution}-${exp.period}`} delay={i * 0.04}>
                <TimelineItem current={exp.current}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h4 className="font-medium text-foreground">{exp.role}</h4>
                    <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-foreground/80">
                    {exp.group} · {exp.institution}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Advisor: {exp.advisor} · {exp.location}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              </FadeIn>
            ))}
          </ol>
        </div>

        {/* Professional + Education */}
        <div>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Professional
          </h3>
          <p className="mb-6 max-w-prose text-sm leading-relaxed text-muted-foreground">
            {PROFESSIONAL.summary}
          </p>
          <ol>
            {PROFESSIONAL.roles.map((role, i) => (
              <FadeIn as="li" key={role.period} delay={i * 0.04}>
                <TimelineItem current={role.current}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h4 className="font-medium text-foreground">{role.title}</h4>
                    <span className="font-mono text-xs text-muted-foreground">{role.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-foreground/80">
                    {role.org} · {role.team}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {role.points.map((point, j) => (
                      <li
                        key={j}
                        className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </TimelineItem>
              </FadeIn>
            ))}
          </ol>

          <h3 className="mb-5 mt-10 text-sm font-semibold uppercase tracking-wide text-accent">
            Education
          </h3>
          {EDUCATION.map((edu) => (
            <FadeIn key={edu.school}>
              <div className="rounded-lg border border-border bg-card p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h4 className="font-medium text-foreground">{edu.degree}</h4>
                  <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-foreground/80">{edu.school}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{edu.minor}</p>
                <div className="mt-3">
                  <Badge variant="accent">{edu.detail}</Badge>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  )
}
