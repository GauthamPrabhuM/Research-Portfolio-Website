import { PROFILE } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-8">
      <div className="wrap flex flex-col items-start justify-between gap-2 text-[13px] text-muted-foreground sm:flex-row sm:items-center">
        <p>
          © {year} {PROFILE.name}
        </p>
        <p className="font-mono">Built with Next.js · Tailwind · GitHub Pages</p>
      </div>
    </footer>
  )
}
