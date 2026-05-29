/**
 * Static export for GitHub Pages.
 *
 * For a user/organization page (repo named `GauthamPrabhuM.github.io`) the site
 * is served from the domain root — leave NEXT_PUBLIC_BASE_PATH unset.
 *
 * For a project page (e.g. repo `research-site` served at
 * `GauthamPrabhuM.github.io/research-site`) set NEXT_PUBLIC_BASE_PATH=/research-site.
 * The GitHub Actions workflow sets this automatically for project repos.
 */
// configure-pages emits '' for a user/org site and '/repo' for a project site.
// Sanitize: drop a lone or trailing slash, which Next.js rejects as a basePath.
const raw = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '')
const basePath = raw === '/' ? '' : raw

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves files literally; disable the build-id-suffixed asset
  // prefix mismatch by keeping assetPrefix aligned with basePath.
  assetPrefix: basePath || undefined,
}

export default nextConfig
