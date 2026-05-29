import Image from 'next/image'
import { Github, Linkedin, GraduationCap, Mail, FileText } from 'lucide-react'
import { PROFILE, RESEARCH_INTERESTS } from '@/lib/data'
import { Badge } from '@/components/ui/badge'
import { FadeIn } from '@/components/ui/fade-in'
import { asset } from '@/lib/utils'

const socials = [
  { label: 'Email', href: `mailto:${PROFILE.email}`, icon: Mail },
  { label: 'Google Scholar', href: PROFILE.links.scholar, icon: GraduationCap },
  { label: 'GitHub', href: PROFILE.links.github, icon: Github },
  { label: 'LinkedIn', href: PROFILE.links.linkedin, icon: Linkedin },
]

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 pb-8 pt-28 sm:pt-32">
      <div className="container">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-14">
          <FadeIn className="order-2 max-w-prose md:order-1">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {PROFILE.headline}
            </p>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {PROFILE.name}
            </h1>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-foreground/90">
              {PROFILE.subhead}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {PROFILE.currentLine}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {RESEARCH_INTERESTS.map((interest) => (
                <Badge key={interest} variant="outline">
                  {interest}
                </Badge>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={PROFILE.links.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <FileText className="h-4 w-4" />
                Curriculum Vitae
              </a>
              <div className="flex items-center gap-1">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="order-1 md:order-2">
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-border sm:h-40 sm:w-40 md:h-44 md:w-44">
              <Image
                src={asset(PROFILE.photo)}
                alt={PROFILE.name}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
