import { ACHIEVEMENTS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Awards & leadership"
      intro="Competitive recognition, scholarships, selective schools, and the teams I've built and led."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {ACHIEVEMENTS.map((group, i) => (
          <FadeIn key={group.group} delay={Math.min(i * 0.05, 0.2)}>
            <Card className="h-full">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                  {group.group}
                </h3>
                <ul className="mt-4 space-y-4">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-sm font-medium leading-snug text-foreground">
                          {item.title}
                        </p>
                        <span className="shrink-0 font-mono text-xs text-muted-foreground">
                          {item.year}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
