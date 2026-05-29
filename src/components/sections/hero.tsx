import Image from 'next/image'
import { PROFILE, RESEARCH_INTERESTS } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { asset } from '@/lib/utils'

const links = [
  { label: 'Email', href: `mailto:${PROFILE.email}` },
  { label: 'Google Scholar', href: PROFILE.links.scholar },
  { label: 'GitHub', href: PROFILE.links.github },
  { label: 'LinkedIn', href: PROFILE.links.linkedin },
  { label: 'CV (PDF)', href: asset(PROFILE.links.cv) },
]

export function Hero() {
  return (
    <section id="top" className="scroll-mt-24 pb-12 pt-28 sm:pt-32">
      <div className="wrap">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
          <FadeIn className="max-w-2xl">
            <h1 className="text-balance text-[1.7rem] font-semibold tracking-tight text-foreground sm:text-3xl">
              {PROFILE.name}
            </h1>
            <p className="mt-1.5 text-[15px] text-muted-foreground">{PROFILE.currentLine}</p>

            <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-foreground/90">
              {PROFILE.subhead}
            </p>

            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              <span className="text-foreground/70">Interests — </span>
              {RESEARCH_INTERESTS.join(' · ')}
            </p>

            <nav className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="focus-ring link rounded-sm"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </FadeIn>

          <FadeIn delay={0.08}>
            <Image
              src={asset(PROFILE.photo)}
              alt={PROFILE.name}
              width={132}
              height={132}
              sizes="132px"
              priority
              className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-border sm:h-32 sm:w-32"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
