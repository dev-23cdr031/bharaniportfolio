'use client'

import { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut' as const,
    },
  },
}

const roleText = 'I am a Full Stack Developer'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Animated gradient background
    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Create gradient with animation
      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      )

      const hue = (time * 20) % 360

      gradient.addColorStop(
        0,
        `hsl(${hue + 260}, 80%, 15%)`
      )
      gradient.addColorStop(
        0.5,
        `hsl(${hue + 265}, 75%, 12%)`
      )
      gradient.addColorStop(
        1,
        `hsl(${hue + 270}, 70%, 10%)`
      )

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated particles
      const particleCount = 50
      for (let i = 0; i < particleCount; i++) {
        const x =
          Math.sin(time * 0.5 + i) * canvas.width * 0.3 +
          canvas.width * 0.5
        const y =
          Math.cos(time * 0.3 + i) * canvas.height * 0.3 +
          canvas.height * 0.5
        const size = Math.sin(time + i) * 1.5 + 2

        ctx.fillStyle = `rgba(103, 232, 249, ${0.3 + Math.sin(time + i) * 0.2})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background z-10" />
      
      {/* Animated gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-50 z-5 animate-aurora" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0 animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl z-0 animate-float-fast" />

      <motion.div
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-8" variants={heroItem}>
          <motion.div variants={heroItem} className="inline-block">
            <motion.div
              className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary backdrop-blur-sm hover:bg-primary/20 hover:border-primary/60 transition-all duration-300 hover:shadow-glow-blue animate-border-glow"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              Welcome to my portfolio
            </motion.div>
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-6xl sm:text-7xl lg:text-8xl font-black text-balance leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-gradient-fast inline-block" style={{ animationDelay: '0.3s' }}>
              BHARANI N
            </span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="min-h-[2.5rem] text-2xl font-bold text-foreground sm:min-h-[3rem] sm:text-3xl"
            aria-label={roleText}
          >
            <span aria-hidden="true" className="inline-flex flex-wrap justify-center gap-[0.04em]">
              {roleText.split('').map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className={
                    letter === ' '
                      ? 'inline-block w-[0.35em]'
                      : 'inline-block bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_16px_rgba(96,165,250,0.25)]'
                  }
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [16, 0, 0, -14],
                    filter: ['blur(8px)', 'blur(0px)', 'blur(0px)', 'blur(8px)'],
                  }}
                  transition={{
                    duration: 3.2,
                    delay: index * 0.045,
                    repeat: Infinity,
                    repeatDelay: 0.85,
                    ease: 'easeOut' as const,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.p>

          <motion.p
            variants={heroItem}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I build responsive, user-friendly web applications and high-performance systems. Specialized in modern web technologies, cloud infrastructure, and scalable solutions.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={heroItem}>
            <Link
              href="#projects"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105 active:scale-95 animate-fade-in-up duration-300"
              style={{ animationDelay: '0.5s' }}
            >
              View My Work
            </Link>
            <Link
              href="/files/bharani-n-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-muted-foreground/30 text-foreground hover:border-primary hover:bg-primary/10 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 animate-fade-in-up duration-300"
              style={{ animationDelay: '0.6s' }}
            >
              Download CV
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex justify-center gap-6 pt-8" variants={heroItem}>
            {[
              { href: 'https://github.com/Bharani312', Icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/bharani-nallathambi-182187373/', Icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:bharaninagarathinam@gmail.com', Icon: Mail, label: 'Email' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-3 bg-muted/50 border border-muted-foreground/20 rounded-lg text-muted-foreground hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 transition-all hover:scale-125 active:scale-95 animate-fade-in-up duration-300"
                aria-label={social.label}
                style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
              >
                <social.Icon size={20} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
