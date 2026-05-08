'use client'

import React, { useEffect, useRef, useState, MouseEvent as ReactMouseEvent } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { AnimatedSection } from './motion-shell'
import { ProfilePhoto } from './profile-photo'

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 9999) * 10000
  return value - Math.floor(value)
}

// ============================================================================
// PREMIUM BACKGROUND SYSTEM
// ============================================================================

function PremiumCinematicBackground() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {/* Animated Floating Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Top-right blob */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/25 rounded-full blur-3xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        />

        {/* Bottom-left blob */}
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 1, type: 'tween' }}
        />

        {/* Center subtle blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [0.9, 1.1, 0.9],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        />
      </div>

      {/* Aurora Light Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{ top: `${25 + i * 25}%` }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: 'easeInOut',
              type: 'tween',
            }}
          />
        ))}
      </div>

      {/* Animated Particle Field */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {isMounted &&
          Array.from({ length: 25 }).map((_, i) => {
            const duration = seededRandom(i + 1) * 20 + 25
            const delay = seededRandom(i + 26) * 5
            const size = seededRandom(i + 51) * 2.5 + 0.5
            const width = `${size.toFixed(2)}px`
            const left = `${(seededRandom(i + 101) * 100).toFixed(2)}%`
            const top = `${(seededRandom(i + 126) * 100).toFixed(2)}%`
            const colors = [
              'rgba(6, 182, 212, 0.6)',
              'rgba(14, 165, 233, 0.5)',
              'rgba(168, 85, 247, 0.4)',
              'rgba(236, 72, 153, 0.3)',
            ]
            const color = colors[Math.floor(seededRandom(i + 76) * colors.length)]

            return (
              <div
                key={i}
                className="absolute rounded-full blur-sm"
                style={{
                  width,
                  height: width,
                  background: color,
                  left,
                  top,
                  boxShadow: `0 0 ${(size * 2).toFixed(2)}px ${color}`,
                }}
              />
            )
          })}
      </div>

      {/* Subtle Animated Grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none -z-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="premium-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#premium-grid)" className="text-cyan-400" />
        </svg>
      </div>

      {/* Radial Spotlight Effects */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-radial-gradient from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          type: 'tween',
        }}
      />
    </>
  )
}

// ============================================================================
// PREMIUM ANIMATED COUNTER
// ============================================================================

function PremiumAnimatedCounter({ end, label, icon }: { end: number; label: string; icon: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let current = 0
    const increment = end / 50
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 25)
    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' as const, type: 'spring' }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 relative"
        animate={{
          textShadow: [
            '0 0 0px rgba(6, 182, 212, 0)',
            '0 0 20px rgba(6, 182, 212, 0.5)',
            '0 0 0px rgba(6, 182, 212, 0)',
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
      >
        {count}+
      </motion.div>
      <div className="text-xs font-bold text-cyan-300/80 mt-1">{label}</div>
      <motion.div
        className="text-lg mt-2"
        animate={{
          y: [0, -6, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          type: 'tween',
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// 3D TILT PROFILE CARD
// ============================================================================

function TiltProfileCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [shinePos, setShinePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const rotX = ((e.clientY - centerY) / (rect.height / 2)) * 12
    const rotY = ((e.clientX - centerX) / (rect.width / 2)) * 12

    setRotateX(-rotX)
    setRotateY(rotY)
    setShinePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="relative"
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-md transition-colors duration-300 group dark:border-cyan-300/20 dark:bg-[#101827]/95 dark:shadow-[0_18px_55px_rgba(0,0,0,0.32)]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        animate={{
          y: [0, -8, 0],
          boxShadow: [
            '0 18px 45px rgba(0, 0, 0, 0.28)',
            '0 24px 60px rgba(8, 145, 178, 0.16)',
            '0 18px 45px rgba(0, 0, 0, 0.28)',
          ],
        }}
        transition={{
          default: { duration: 0.7, ease: 'easeOut' as const, type: 'spring' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut', type: 'tween' },
          boxShadow: { duration: 4, repeat: Infinity, ease: 'easeInOut', type: 'tween' },
        }}
        whileHover={{
          borderColor: 'rgba(6, 182, 212, 0.8)',
        }}
      >
        {/* Soft focus ring */}
        <motion.div
          className="absolute inset-0 rounded-2xl border border-cyan-300/0 opacity-0 transition-opacity duration-500 group-hover:border-cyan-300/35 group-hover:opacity-100"
          style={{
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        />

        {/* Breathing Glow Background */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/8 to-blue-500/6 opacity-0 transition-all duration-500 group-hover:opacity-100"
          animate={{
            opacity: [0, 0.05, 0],
            scale: [0.98, 1.02, 0.98],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        />

        {/* Glass Reflection Sweep */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
          style={{
            background: `radial-gradient(circle at ${shinePos.x}px ${shinePos.y}px, rgba(125,211,252,0.13) 0%, transparent 48%)`,
          }}
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// CARD WITH SHINE EFFECT
// ============================================================================

function PremiumCard({
  children,
  delay,
  accent = 'cyan',
}: {
  children: React.ReactNode
  delay?: number
  accent?: string
}) {
  const borderColor = {
    cyan: 'border-cyan-200/80 dark:border-cyan-300/18',
    purple: 'border-violet-200/80 dark:border-violet-300/18',
    green: 'border-emerald-200/80 dark:border-emerald-300/18',
    blue: 'border-blue-200/80 dark:border-blue-300/18',
  }[accent]

  const hoverBorder = {
    cyan: 'group-hover:border-cyan-300/90 dark:group-hover:border-cyan-300/45',
    purple: 'group-hover:border-violet-300/90 dark:group-hover:border-violet-300/45',
    green: 'group-hover:border-emerald-300/90 dark:group-hover:border-emerald-300/45',
    blue: 'group-hover:border-blue-300/90 dark:group-hover:border-blue-300/45',
  }[accent]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay || 0,
        ease: 'easeOut' as const,
        type: 'spring',
      }}
      viewport={{ once: true, margin: '-50px' }}
      className="group relative"
    >
      <motion.div
        className={`relative overflow-hidden rounded-lg border bg-white/92 p-4 shadow-[0_14px_34px_rgba(15,23,42,0.07)] backdrop-blur-md transition-all duration-300 dark:bg-[#111a2b]/92 dark:shadow-[0_14px_36px_rgba(0,0,0,0.24)] ${borderColor} ${hoverBorder}`}
        whileHover={{
          y: -5,
          boxShadow: `0 18px 42px rgba(8, 145, 178, 0.13)`,
        }}
      >
        {/* Animated Border Glow */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          animate={{
            boxShadow: [
              `inset 0 0 10px rgba(6, 182, 212, 0)`,
              `inset 0 0 18px rgba(125, 211, 252, 0.08)`,
              `inset 0 0 18px rgba(125, 211, 252, 0.08)`,
              `inset 0 0 10px rgba(6, 182, 212, 0)`,
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />

        {/* Shine Sweep */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(125,211,252,0.14), transparent)',
          }}
        />

        <div className="relative z-10">{children}</div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// CINEMATIC HERO TITLE
// ============================================================================

function CinematicHeroTitle() {
  return (
    <motion.div className="text-center mb-14 relative">
      {/* Background aurora effect */}
      <motion.div
        className="absolute inset-0 blur-3xl opacity-0"
        style={{
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3), rgba(168, 85, 247, 0.2))',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          type: 'tween',
        }}
      />

      {/* Title */}
      <motion.h2
        className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-400 relative"
        initial={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        animate={{
          textShadow: [
            '0 0 20px rgba(6, 182, 212, 0)',
            '0 0 40px rgba(6, 182, 212, 0.5)',
            '0 0 20px rgba(6, 182, 212, 0)',
          ],
        }}
        transition={{
          default: { duration: 0.9, ease: 'easeOut' as const, type: 'spring' },
          textShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut', type: 'tween' },
        }}
      >
        About Me
      </motion.h2>

      {/* Animated Underline */}
      <motion.div
        className="h-1.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mx-auto mt-4"
        initial={{ scaleX: 0, opacity: 0 }}
        style={{ maxWidth: '180px', transformOrigin: 'center' }}
        animate={{
          scaleX: [0, 1, 1, 0],
          opacity: [0, 1, 1, 0],
          boxShadow: [
            '0 0 0 rgba(6, 182, 212, 0)',
            '0 0 20px rgba(6, 182, 212, 1)',
            '0 0 20px rgba(6, 182, 212, 1)',
            '0 0 0 rgba(6, 182, 212, 0)',
          ],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 0.45,
          ease: 'easeOut' as const,
          type: 'tween',
        }}
      />
    </motion.div>
  )
}

// ============================================================================
// ANIMATED TIMELINE
// ============================================================================

function PremiumTimeline() {
  const items = [
    { year: '2025', title: 'POC Runner', desc: 'Runner' },
  ]

  return (
    <motion.div className="space-y-3 relative">
      {/* Animated Progress Line */}
      <motion.div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 origin-top">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-cyan-400 to-transparent opacity-0"
          animate={{
            opacity: [0, 0.5, 0],
            boxShadow: ['0 0 0 0 rgba(6, 182, 212, 0)', '0 0 20px 5px rgba(6, 182, 212, 0.5)', '0 0 0 0 rgba(6, 182, 212, 0)'],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
            type: 'tween',
          }}
        />
      </motion.div>

      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            delay: idx * 0.12,
            ease: 'easeOut' as const,
            type: 'spring',
          }}
          viewport={{ once: true }}
          className="relative pl-6 group"
        >
          {/* Timeline Dot */}
          <motion.div className="absolute -left-2 top-3 w-4 h-4 rounded-full border-2 border-cyan-400 bg-slate-900">
            <motion.div
              className="absolute inset-1 rounded-full bg-cyan-400 scale-0"
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: idx * 0.25,
                ease: 'easeOut' as const,
                type: 'tween',
              }}
            />
          </motion.div>

          {/* Timeline Card */}
          <PremiumCard delay={idx * 0.08} accent="blue">
            <div className="flex justify-between items-start gap-3">
              <div className="flex-1">
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">{item.year}</p>
                <p className="text-sm font-black text-white mt-1">{item.title}</p>
              </div>
              <p className="text-xs text-muted-foreground text-right whitespace-nowrap">{item.desc}</p>
            </div>
          </PremiumCard>
        </motion.div>
      ))}
    </motion.div>
  )
}

// ============================================================================
// MAIN ABOUT COMPONENT
// ============================================================================

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <AnimatedSection
      id="about"
      className="relative bg-gradient-to-b from-background via-background/98 to-background py-16 lg:py-20 overflow-hidden"
      contentClassName="relative"
    >
      <PremiumCinematicBackground />

      <div className="max-w-6xl mx-auto px-6">
        {/* HERO TITLE */}
        <CinematicHeroTitle />

        {/* MAIN 2-COLUMN LAYOUT */}
        <motion.div
          className="grid md:grid-cols-5 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* LEFT COLUMN - PROFILE, INTRO, STATS */}
          <motion.div className="md:col-span-2 space-y-5">
            <ProfilePhoto delay={0.12} />
            {/* Intro Card */}
            <PremiumCard delay={0.1} accent="cyan">
              <p className="text-sm leading-relaxed text-muted-foreground">
                I’m Bharani N, a passionate and dedicated aspiring software developer with a strong enthusiasm for web development, modern technologies, and innovative digital solutions. As a recipient of the POC 2nd Prize, I have gained valuable experience in problem-solving, teamwork, and building impactful technology-driven solutions in competitive environments. I enjoy transforming ideas into interactive and user-friendly applications while continuously strengthening my technical expertise in React, HTML, CSS, Bootstrap, Python, MySQL, and modern UI/UX design. Along with technical knowledge, I possess strong leadership, communication, and collaboration skills, enabling me to work effectively within teams, manage responsibilities confidently, and contribute positively to project development and execution.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                I am deeply interested in building technology that creates real-world impact and enhances user experiences. Over time, I have worked on multiple projects ranging from responsive web platforms to innovative solutions such as the HackConnect project and sales data analysis platforms. I believe that combining creativity, consistency, leadership, and technical knowledge is the key to building meaningful digital products. I continuously explore emerging technologies, improve my problem-solving abilities, and challenge myself through innovation, teamwork, and continuous learning. My goal is to grow into a skilled full-stack developer and technology professional who contributes to future-focused projects while creating impactful and inspiring digital experiences.
              </p>
            </PremiumCard>

          </motion.div>

          {/* RIGHT COLUMN - EXPERTISE, ACHIEVEMENTS, JOURNEY */}
          <motion.div className="md:col-span-3 space-y-5">
            {/* Technical Expertise */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-cyan-700 dark:text-cyan-200">
                <motion.span
                  className="w-1 h-1 rounded-full bg-cyan-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
                />
                Technical Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { cat: 'Frontend', items: ['React', 'Next.js', 'TypeScript'] },
                  { cat: 'Backend', items: ['Node.js', 'Python', 'GraphQL'] },
                  { cat: 'AI/ML', items: ['TensorFlow', 'PyTorch', 'LLMs'] },
                  { cat: 'DevOps', items: ['Docker', 'Kubernetes', 'AWS'] },
                ].map((group, i) => (
                  <PremiumCard key={group.cat} delay={0.15 + i * 0.08} accent="purple">
                    <p className="mb-3 text-xs font-bold text-violet-700 dark:text-violet-200">{group.cat}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, idx) => (
                        <motion.span
                          key={item}
                          className="rounded border border-violet-200 bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 dark:border-violet-300/20 dark:bg-violet-300/8 dark:text-violet-100"
                          whileHover={{
                            scale: 1.1,
                            boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)',
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: idx * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </PremiumCard>
                ))}
              </div>
            </motion.div>

            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-emerald-700 dark:text-emerald-200">
                <motion.span
                  className="w-1 h-1 rounded-full bg-green-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5, ease: 'easeInOut', type: 'tween' }}
                />
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🏆', title: 'Excellence', desc: 'Built scalable solutions' },
                  { icon: '🚀', title: 'Innovation', desc: 'Pioneered AI adoption' },
                  { icon: '📚', title: 'Knowledge', desc: 'Published research' },
                  { icon: '🌍', title: 'Impact', desc: 'Open source leader' },
                ].map((achievement, i) => (
                  <PremiumCard key={achievement.title} delay={0.2 + i * 0.08} accent="green">
                    <motion.div
                      className="text-3xl mb-2"
                      animate={{
                        rotate: [0, 8, -8, 0],
                        y: [0, -4, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                        type: 'tween',
                      }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <p className="text-xs font-bold text-emerald-700 dark:text-emerald-200">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{achievement.desc}</p>
                  </PremiumCard>
                ))}
              </div>
            </motion.div>

            {/* Personal Details */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-blue-700 dark:text-blue-200">
                <motion.span
                  className="w-1 h-1 rounded-full bg-blue-400"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1, ease: 'easeInOut', type: 'tween' }}
                />
                Personal Details
              </h3>
              <PremiumCard delay={0.25} accent="blue">
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { label: 'Name', value: 'BHARANI N' },
                    { label: 'Father Name', value: 'S NALLATHAMBI' },
                    { label: 'Mother Name', value: 'N NAGRATHINAM' },
                    { label: 'DOB', value: '13.07.2005' },
                    { label: 'Birth Place', value: 'NAMAKKAL, TAMIL NADU' },
                    { label: 'Phone No', value: '+91 79045 80284' },
                    { label: 'College Mail ID', value: 'bharanin.23csd@kongu.edu' },
                    { label: 'Personal Mail ID', value: 'bharaninagarathinam@gmail.com' },
                    { label: 'HSC Percentage', value: '69%' },
                    { label: 'SSLC Percentage', value: 'Pass' },
                    { label: 'College', value: 'KONGU ENGINEERING COLLEGE' },
                    { label: 'Current CGPA', value: '7.14 CGPA' },
                    { label: 'Languages Known', value: 'ENGLISH, TAMIL, HINDI' },
                  ].map((detail) => (
                    <div
                      key={detail.label}
                      className="rounded-lg border border-blue-200 bg-slate-50/90 px-3 py-2 shadow-sm dark:border-slate-700/80 dark:bg-slate-950/35"
                    >
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {detail.label}
                      </p>
                      <p className="mt-1 break-words text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>

          </motion.div>
        </motion.div>

        {/* BOTTOM DIVIDER */}
        <motion.div
          className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        />
      </div>
    </AnimatedSection>
  )
}
