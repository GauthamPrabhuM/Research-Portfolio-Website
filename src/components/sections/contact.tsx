import { PROFILE, METHODS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { FadeIn } from '@/components/ui/fade-in'
import { asset } from '@/lib/utils'

const channels = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { label: 'Google Scholar', value: 'Publications & metrics', href: PROFILE.links.scholar },
  { label: 'GitHub', value: 'GauthamPrabhuM', href: PROFILE.links.github },
  { label: 'LinkedIn', value: 'gautham-prabhu', href: PROFILE.links.linkedin },
  { label: 'Curriculum Vitae', value: 'PDF', href: asset(PROFILE.links.cv) },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Contact"
      intro="I'm applying to PhD and research-focused master's programs in computer science for Fall 2027. I'm always glad to talk through research directions, possible collaborations, or whether we'd be a good advising fit — just reach out."
    >
      {/* Methods — compact, inline, supporting only */}
      <FadeIn>
        <dl className="mb-10 space-y-3 border-l border-border pl-4">
          {METHODS.map((m) => (
            <div key={m.label} className="text-sm leading-relaxed">
              <dt className="inline font-mono text-[11px] uppercase tracking-wide text-muted-foreground">
                {m.label} —{' '}
              </dt>
              <dd className="inline text-foreground/85">{m.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </FadeIn>

      <FadeIn delay={0.06}>
        <dl className="space-y-2.5">
          {channels.map(({ label, value, href }) => (
            <div key={label} className="flex flex-wrap items-baseline gap-x-3 text-[15px]">
              <dt className="w-36 shrink-0 text-muted-foreground">{label}</dt>
              <dd>
                <a
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="focus-ring link rounded-sm"
                >
                  {value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </Section>
  )
}
