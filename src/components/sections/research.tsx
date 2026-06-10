import { NARRATIVE, RESEARCH_QUESTIONS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'

export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Research statement">
      <div className="max-w-prose">
        {/* Lead — the thesis question, set in the serif register of a paper */}
        <FadeIn>
          <p className="text-pretty font-serif text-[1.25rem] leading-[1.7] text-foreground">
            {NARRATIVE.thesis}
          </p>
        </FadeIn>

        {/* Formal statement of the agenda — numbered research questions */}
        <FadeIn as="div" delay={0.06}>
          <aside
            aria-label="Research questions"
            className="mt-9 rounded-md border border-border bg-muted/40 px-6 py-5"
          >
            <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Guiding questions
            </h3>
            <ol className="mt-3.5 space-y-3">
              {RESEARCH_QUESTIONS.map((rq) => (
                <li key={rq.id} className="grid grid-cols-[2.5rem_1fr] gap-x-3">
                  <span className="pt-px font-mono text-[12px] font-semibold text-accent">
                    {rq.id}
                  </span>
                  <p className="text-pretty text-sm leading-relaxed text-foreground/85">
                    {rq.question}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {NARRATIVE.paragraphs.map((para, i) => (
            <FadeIn as="div" key={para.heading} delay={i * 0.04}>
              <h3 className="mb-2 font-serif text-[1.1rem] font-medium tracking-tight text-foreground">
                <span className="mr-2 font-mono text-[12px] font-normal text-muted-foreground">
                  §{i + 1}
                </span>
                {para.heading}
              </h3>
              <p className="text-pretty leading-[1.75] text-foreground/85">{para.body}</p>
            </FadeIn>
          ))}

          <FadeIn as="div" delay={0.1}>
            <h3 className="mb-2 font-serif text-[1.1rem] font-medium tracking-tight text-foreground">
              <span className="mr-2 font-mono text-[12px] font-normal text-muted-foreground">
                §{NARRATIVE.paragraphs.length + 1}
              </span>
              Future directions
            </h3>
            <p className="border-l-2 border-accent/50 pl-4 text-pretty leading-[1.75] text-foreground/85">
              {NARRATIVE.future}
            </p>
          </FadeIn>
        </div>
      </div>
    </Section>
  )
}
