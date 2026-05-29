import { Github, Linkedin, GraduationCap, Mail, FileText } from 'lucide-react'
import { PROFILE, METHODS } from '@/lib/data'
import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'

const channels = [
  { label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'Google Scholar', value: 'Publications & metrics', href: PROFILE.links.scholar, icon: GraduationCap },
  { label: 'GitHub', value: 'GauthamPrabhuM', href: PROFILE.links.github, icon: Github },
  { label: 'LinkedIn', value: 'gautham-prabhu', href: PROFILE.links.linkedin, icon: Linkedin },
]

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title="Contact"
      intro="I'm applying to MS/PhD programs in computer science and am glad to discuss research, collaboration, or potential advising fit."
    >
      {/* Methods strip — supporting detail, kept compact */}
      <FadeIn>
        <div className="mb-10 grid gap-6 rounded-lg border border-border bg-card p-6 sm:grid-cols-3">
          {METHODS.map((m) => (
            <div key={m.label}>
              <p className="font-mono text-[11px] uppercase tracking-wider text-accent">
                {m.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {m.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-3 sm:grid-cols-2">
        {channels.map(({ label, value, href, icon: Icon }, i) => (
          <FadeIn key={label} delay={i * 0.04}>
            <a
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="focus-ring group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:border-accent/40"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted text-foreground">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-medium text-foreground">{label}</span>
                <span className="block text-sm text-muted-foreground">{value}</span>
              </span>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.1}>
        <a
          href={PROFILE.links.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-3 flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/10 p-4 text-sm font-medium text-accent transition-colors hover:bg-accent/15"
        >
          <FileText className="h-4 w-4" />
          Download full Curriculum Vitae (PDF)
        </a>
      </FadeIn>
    </Section>
  )
}
