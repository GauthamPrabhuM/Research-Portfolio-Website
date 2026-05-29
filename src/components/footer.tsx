import { PROFILE } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {year} {PROFILE.name}
        </p>
        <p className="font-mono">
          Built with Next.js · Tailwind · deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}
