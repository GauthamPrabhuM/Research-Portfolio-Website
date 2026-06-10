import Image from 'next/image'
import { PROFILE, RESEARCH_INTERESTS, HERO_STATS } from '@/lib/data'
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
    <section id="top" className="scroll-mt-24 pb-14 pt-28 sm:pt-36">
      <div className="wrap">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <FadeIn className="max-w-2xl">
            <h1 className="text-balance font-serif text-[2.1rem] font-medium tracking-tight text-foreground sm:text-[2.6rem]">
              {PROFILE.name}
            </h1>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              {PROFILE.currentLine}
            </p>

            <p className="mt-6 text-pretty font-serif text-[1.2rem] leading-[1.65] text-foreground/90">
              {PROFILE.subhead}
            </p>

            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/60">
                Interests
              </span>
              <span className="mx-2 text-border">—</span>
              {RESEARCH_INTERESTS.join(' · ')}
            </p>

            <nav className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px]">
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
            <figure className="shrink-0">
              <Image
                src={asset(PROFILE.photo)}
                alt={PROFILE.name}
                width={144}
                height={144}
                sizes="144px"
                priority
                className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-border sm:h-36 sm:w-36"
              />
              <figcaption className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {PROFILE.location}
              </figcaption>
            </figure>
          </FadeIn>
        </div>

        {/* At-a-glance scholarly record */}
        <FadeIn delay={0.14}>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-5 border-y border-border py-5 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <dt className="order-2 mt-0.5 text-[13px] leading-snug text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="order-1 font-serif text-xl font-medium text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  )
}
