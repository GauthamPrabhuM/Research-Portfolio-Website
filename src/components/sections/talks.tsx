import { TALKS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export function Talks() {
  return (
    <Section
      id="talks"
      eyebrow="Talks"
      title="Talks & presentations"
      intro="Workshop talks, symposium presentations, and finalist presentations at national and international venues."
    >
      <ul className="space-y-5">
        {TALKS.map((talk, i) => (
          <FadeIn as="li" key={talk.title} delay={Math.min(i * 0.03, 0.15)}>
            <div className="grid grid-cols-[3.25rem_1fr] gap-x-4">
              <span className="pt-0.5 font-mono text-[13px] text-muted-foreground">
                {talk.year}
              </span>
              <div>
                <p className="text-pretty font-medium leading-snug text-foreground">
                  {talk.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  <span className="italic">{talk.venue}</span> · {talk.type}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </ul>
    </Section>
  )
}
