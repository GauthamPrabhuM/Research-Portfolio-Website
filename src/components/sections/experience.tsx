import { RESEARCH_EXPERIENCE, PROFESSIONAL, EDUCATION } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

type Entry = {
  role: string
  org: string
  meta?: string
  period: string
  points: readonly string[]
}

function EntryItem({ entry, delay }: { entry: Entry; delay: number }) {
  return (
    <FadeIn as="div" delay={delay}>
      <article className="py-6 first:pt-0">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <h4 className="font-medium text-foreground">
            {entry.role} <span className="text-muted-foreground">· {entry.org}</span>
          </h4>
          <span className="font-mono text-[13px] text-muted-foreground">{entry.period}</span>
        </div>
        {entry.meta ? (
          <p className="mt-0.5 text-[13px] text-muted-foreground">{entry.meta}</p>
        ) : null}
        <ul className="mt-2.5 space-y-1.5">
          {entry.points.map((point, j) => (
            <li
              key={j}
              className="relative pl-4 text-sm leading-relaxed text-foreground/80 before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
            >
              {point}
            </li>
          ))}
        </ul>
      </article>
    </FadeIn>
  )
}

function GroupHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-1 text-[13px] font-semibold uppercase tracking-wide text-foreground/80">
      {children}
    </h3>
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
      <GroupHeading>Research</GroupHeading>
      <div className="divide-y divide-border">
        {RESEARCH_EXPERIENCE.map((exp, i) => (
          <EntryItem
            key={`${exp.institution}-${exp.period}`}
            delay={i * 0.03}
            entry={{
              role: exp.role,
              org: `${exp.group}, ${exp.institution}`,
              meta: `Advisor: ${exp.advisor} · ${exp.location}`,
              period: exp.period,
              points: exp.points,
            }}
          />
        ))}
      </div>

      <div className="mt-12">
        <GroupHeading>Professional</GroupHeading>
        <p className="mb-1 max-w-prose text-sm leading-relaxed text-muted-foreground">
          {PROFESSIONAL.summary}
        </p>
        <div className="divide-y divide-border">
          {PROFESSIONAL.roles.map((role, i) => (
            <EntryItem
              key={role.period}
              delay={i * 0.03}
              entry={{
                role: role.title,
                org: `${role.org} · ${role.team}`,
                period: role.period,
                points: role.points,
              }}
            />
          ))}
        </div>
      </div>

      <div className="mt-12">
        <GroupHeading>Education</GroupHeading>
        {EDUCATION.map((edu) => (
          <FadeIn key={edu.school}>
            <div className="py-2">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                <h4 className="font-medium text-foreground">
                  {edu.degree} <span className="text-muted-foreground">· {edu.school}</span>
                </h4>
                <span className="font-mono text-[13px] text-muted-foreground">{edu.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {edu.minor} · {edu.detail}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
