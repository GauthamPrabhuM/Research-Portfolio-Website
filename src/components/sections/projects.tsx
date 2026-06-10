import { PROJECTS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p className="text-pretty text-sm leading-relaxed text-foreground/85">
      <span className="font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
        {label}.{' '}
      </span>
      {children}
    </p>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Research Projects"
      title="Selected projects"
      intro="Each stated in terms of its motivation, methods, and contribution."
    >
      <div className="divide-y divide-border">
        {PROJECTS.map((project, i) => (
          <FadeIn as="div" key={project.id} delay={Math.min(i * 0.04, 0.16)}>
            <article className="py-7 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-pretty font-serif text-[1.15rem] font-medium tracking-tight text-foreground">
                  {project.title}
                </h3>
                <span className="font-mono text-[13px] text-muted-foreground">
                  {project.period}
                </span>
              </div>

              <p className="mt-0.5 text-[13px] text-accent">{project.status}</p>

              <div className="mt-3 space-y-2">
                <Row label="Motivation">{project.motivation}</Row>
                <Row label="Approach">{project.approach}</Row>
                <Row label="Contribution">{project.contribution}</Row>
              </div>

              <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                {project.stack.join(' · ')}
              </p>

              {project.links.length > 0 ? (
                <p className="mt-2 flex flex-wrap gap-x-4 text-[13px]">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring link-accent rounded-sm"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
