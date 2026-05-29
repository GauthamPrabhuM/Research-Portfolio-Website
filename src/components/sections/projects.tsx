import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{label}</p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/85">{children}</p>
    </div>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Research"
      title="Selected research projects"
      intro="Each framed by its motivation, approach, and contribution — the questions matter more than the demos."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <FadeIn as="article" key={project.id} delay={Math.min(i * 0.05, 0.2)}>
            <Card className="flex h-full flex-col hover:border-accent/40">
              <CardContent className="flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <Badge variant="outline">{project.status}</Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.period}
                  </span>
                </div>

                <h3 className="mt-3 text-pretty text-lg font-semibold leading-snug text-foreground">
                  {project.title}
                </h3>

                <div className="mt-4 space-y-3.5">
                  <Field label="Motivation">{project.motivation}</Field>
                  <Field label="Approach">{project.approach}</Field>
                  <Field label="Contribution">{project.contribution}</Field>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <Badge key={s}>{s}</Badge>
                  ))}
                </div>

                {project.links.length > 0 ? (
                  <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4">
                    {project.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="focus-ring group inline-flex items-center gap-1 rounded text-sm font-medium text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-accent" />
                      </a>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
