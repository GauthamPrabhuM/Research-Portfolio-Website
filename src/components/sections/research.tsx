import { NARRATIVE } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Research statement">
      <div className="max-w-prose">
        {/* Lead — the thesis question, set slightly larger */}
        <FadeIn>
          <p className="text-pretty text-lg leading-relaxed text-foreground">
            {NARRATIVE.thesis}
          </p>
        </FadeIn>

        <div className="mt-8 space-y-7">
          {NARRATIVE.paragraphs.map((para, i) => (
            <FadeIn as="div" key={para.heading} delay={i * 0.04}>
              <h3 className="mb-1.5 text-[13px] font-semibold uppercase tracking-wide text-foreground/80">
                {para.heading}
              </h3>
              <p className="text-pretty leading-relaxed text-foreground/85">{para.body}</p>
            </FadeIn>
          ))}

          <FadeIn as="div" delay={0.1}>
            <h3 className="mb-1.5 text-[13px] font-semibold uppercase tracking-wide text-foreground/80">
              Future directions
            </h3>
            <p className="border-l-2 border-accent/50 pl-4 text-pretty leading-relaxed text-foreground/85">
              {NARRATIVE.future}
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
