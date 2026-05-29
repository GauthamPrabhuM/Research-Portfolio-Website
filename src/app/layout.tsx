import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { PROFILE, RESEARCH_INTERESTS } from '@/lib/data'

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_URL = 'https://gauthamprabhum.github.io/Research-Portfolio-Website'
const description =
  'Gautham Manuru Prabhu — machine learning researcher studying scalable representation learning on graphs, with a focus on the efficiency of temporal graph neural networks. PhD applicant in computer science.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PROFILE.name} — ML Researcher`,
    template: `%s · ${PROFILE.name}`,
  },
  description,
  keywords: [
    PROFILE.name,
    'machine learning research',
    'graph neural networks',
    'temporal graph neural networks',
    'GraphML',
    'representation learning',
    'PhD applicant',
    ...RESEARCH_INTERESTS,
  ],
  authors: [{ name: PROFILE.name }],
  creator: PROFILE.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: `${PROFILE.name} — Machine Learning Researcher`,
    description,
    siteName: PROFILE.name,
  },
  twitter: {
    card: 'summary',
    title: `${PROFILE.name} — Machine Learning Researcher`,
    description,
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: PROFILE.name,
  jobTitle: 'Machine Learning Researcher',
  email: `mailto:${PROFILE.email}`,
  url: SITE_URL,
  knowsAbout: RESEARCH_INTERESTS,
  sameAs: [PROFILE.links.scholar, PROFILE.links.github, PROFILE.links.linkedin],
  affiliation: [
    { '@type': 'Organization', name: 'MiCoSys Lab, San José State University' },
    { '@type': 'Organization', name: 'Cisco Systems' },
  ],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Manipal Institute of Technology' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Skip link for keyboard / screen-reader users */}
          <a
            href="#main"
            className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
          >
            Skip to content
          </a>
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}
