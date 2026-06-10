import { NEWS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

/** Dated one-line updates — the canonical first section of a researcher's page. */
export function News() {
  return (
    <Section id="news" eyebrow="Updates" title="News">
      <ul className="space-y-3.5">
        {NEWS.map((item, i) => (
          <FadeIn as="li" key={`${item.date}-${i}`} delay={Math.min(i * 0.025, 0.15)}>
            <div className="grid grid-cols-[5.25rem_1fr] gap-x-4">
              <span className="pt-px font-mono text-[13px] text-muted-foreground">
                {item.date}
              </span>
              <p className="text-pretty text-[15px] leading-relaxed text-foreground/85">
                {item.text}
              </p>
            </div>
          </FadeIn>
        ))}
      </ul>
    </Section>
  )
}
