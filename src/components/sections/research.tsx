import { NARRATIVE, THREADS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Card, CardContent } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'

export function Research() {
  return (
    <Section
      id="research"
      eyebrow="Research Overview"
      title="A research journey"
      intro={NARRATIVE.thesis}
    >
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        {/* Narrative prose */}
        <div className="max-w-prose space-y-8">
          {NARRATIVE.paragraphs.map((para, i) => (
            <FadeIn as="article" key={para.heading} delay={i * 0.05}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                {para.heading}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-foreground/90">
                {para.body}
              </p>
            </FadeIn>
          ))}

          <FadeIn as="article" delay={0.1}>
            <Card className="bg-muted/40">
              <CardContent className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Where I&apos;m headed
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-foreground/90">
                  {NARRATIVE.future}
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Recurring threads */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Recurring threads
          </p>
          <div className="space-y-3">
            {THREADS.map((thread, i) => (
              <FadeIn key={thread.title} delay={i * 0.06}>
                <Card className="hover:border-accent/40">
                  <CardContent className="p-5">
                    <h4 className="text-sm font-semibold text-foreground">
                      {thread.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {thread.body}
                    </p>
                    <p className="mt-3 font-mono text-[11px] leading-relaxed text-accent">
                      {thread.evidence}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
