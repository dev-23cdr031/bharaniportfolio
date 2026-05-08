'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  label: string
  suffix?: string
  prefix?: string
  duration?: number
}

export function AnimatedCounter({ value, label, suffix = '', prefix = '', duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const increment = value / (duration * 60)
    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
      className="text-center"
    >
      <motion.div
        className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-text-glow"
        animate={isInView ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {prefix}
        {count}
        {suffix}
      </motion.div>
      <motion.p
        className="text-sm sm:text-base font-medium text-muted-foreground mt-2"
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {label}
      </motion.p>
    </motion.div>
  )
}
