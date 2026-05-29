import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Prefix internal asset paths with the deployment base path so static assets
 * resolve correctly when the site is served from a GitHub Pages subdirectory.
 */
export function asset(path: string) {
  const raw = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/+$/, '')
  const base = raw === '/' ? '' : raw
  return `${base}${path}`
}
