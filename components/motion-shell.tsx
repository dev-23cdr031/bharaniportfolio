'use client'

import type { ReactNode } from 'react'
import type { Variants } from 'framer-motion'
import { motion, useReducedMotion } from 'framer-motion'
import { cn } from '@/lib/utils'

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

const pageVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: smoothEase,
    },
  },
}

interface PageShellProps {
  children: ReactNode
}

export function PageShell({ children }: PageShellProps) {
  return (
    <motion.main
      className="relative overflow-hidden bg-background text-foreground"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.14),transparent_28%),linear-gradient(to_bottom,rgba(10,14,39,0.18),transparent_20%,rgba(10,14,39,0.08),transparent_85%)]"
        animate={{ opacity: [0.45, 0.6, 0.45] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.03)_45%,transparent_75%)] opacity-30"
        animate={{ x: ['-10%', '10%', '-10%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      {children}
    </motion.main>
  )
}

interface AnimatedSectionProps {
  children: ReactNode
  id?: string
  className?: string
  contentClassName?: string
  maxWidthClassName?: string
}

export function AnimatedSection({
  children,
  id,
  className,
  contentClassName,
  maxWidthClassName = 'max-w-6xl',
}: AnimatedSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      className={cn('relative overflow-hidden', className)}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        animate={
          reduceMotion
            ? { opacity: 0.7 }
            : { opacity: [0.3, 0.55, 0.3], scale: [1, 1.03, 1] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={cn(maxWidthClassName, 'mx-auto px-4 sm:px-6 lg:px-8', contentClassName)}>
        {children}
      </div>
    </motion.section>
  )
}

interface SectionHeaderProps {
  title: ReactNode
  description?: ReactNode
  eyebrow?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeader({
  title,
  description,
  eyebrow,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <motion.div
      className={cn('flex flex-col space-y-4', alignment, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
    >
      {eyebrow ? (
        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
        >
          {eyebrow}
        </motion.div>
      ) : null}
      <motion.h2
        variants={staggerItem}
        className="text-4xl lg:text-5xl font-bold text-balance leading-tight"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={staggerItem}
          className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  )
}
