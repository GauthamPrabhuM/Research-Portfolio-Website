import { ACHIEVEMENTS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Awards & leadership"
      intro="Competitive recognition, scholarships, selective schools, and the teams I've built and led."
    >
      <div className="space-y-9">
        {ACHIEVEMENTS.map((group, i) => (
          <FadeIn as="div" key={group.group} delay={Math.min(i * 0.04, 0.16)}>
            <h3 className="mb-3 text-[13px] font-semibold uppercase tracking-wide text-foreground/80">
              {group.group}
            </h3>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[1fr_auto] gap-x-4 border-l border-border pl-4"
                >
                  <div>
                    <p className="text-sm font-medium leading-snug text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                  <span className="pt-0.5 font-mono text-[13px] text-muted-foreground">
                    {item.year}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </Section>
  )
}
