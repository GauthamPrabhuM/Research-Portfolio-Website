'use client'

import { motion, useReducedMotion } from 'framer-motion'
import * as React from 'react'

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}

/**
 * Subtle, accessibility-aware entrance animation. Triggers once on scroll into
 * view and collapses to a no-op for users who prefer reduced motion.
 */
export function FadeIn({ children, delay = 0, className, as = 'div' }: FadeInProps) {
  const reduce = useReducedMotion()
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
