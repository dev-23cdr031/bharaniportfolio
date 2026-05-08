'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Award, Calendar, GraduationCap, Sparkles } from 'lucide-react'
import { AnimatedSection } from './motion-shell'

interface Education {
  id: number
  course: string
  institution: string
  period: string
  location?: string
  score: string
  tag: string
}

const educationData: Education[] = [
  {
    id: 1,
    course: 'B.E Computer Science and Design',
    institution: 'Kongu Engineering College',
    location: 'Erode',
    period: '2023 - 2027',
    score: 'CGPA: 7.14 (5th Semester)',
    tag: 'Degree',
  },
  {
    id: 2,
    course: 'HSC',
    institution: 'Vani Vidyalaya Matric Higher Secondary School',
    location: 'Namakkal',
    period: '2022 - 2023',
    score: 'Passed with 69%',
    tag: 'Higher Secondary',
  },
  {
    id: 3,
    course: 'SSLC',
    institution: 'Vani Vidyalaya Matric Higher Secondary School',
    location: 'Namakkal',
    period: '2021 - 2022',
    score: 'Pass',
    tag: 'Secondary',
  },
]

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -34, y: 24 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  },
}

const educationTitleWords = ['My', 'Education']

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 82%', 'end 45%'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <AnimatedSection
      id="experience"
      className="bg-[#070b1f] py-20 lg:py-32"
      contentClassName="relative"
      maxWidthClassName="max-w-4xl"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:44px_44px]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute -left-24 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ x: [0, 34, 0], y: [0, 24, 0], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
        animate={{ x: [0, -32, 0], y: [0, -20, 0], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden="true" className="absolute left-[8%] top-32 -z-10 h-1 w-1 rounded-full bg-cyan-200/80 shadow-[130px_32px_0_rgba(125,211,252,0.44),320px_-14px_0_rgba(96,165,250,0.36),590px_68px_0_rgba(34,211,238,0.34),820px_12px_0_rgba(147,197,253,0.3)] animate-pulse" />
      <div aria-hidden="true" className="absolute bottom-28 right-[12%] -z-10 h-1 w-1 rounded-full bg-blue-200/70 shadow-[-110px_-24px_0_rgba(34,211,238,0.34),-330px_22px_0_rgba(96,165,250,0.32),-600px_-16px_0_rgba(125,211,252,0.28)] animate-pulse" />

      <div className="space-y-12">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.75, ease: 'easeOut' as const }}
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            animate={{ y: [0, -4, 0], boxShadow: ['0 0 22px rgba(34,211,238,0.12)', '0 0 34px rgba(34,211,238,0.28)', '0 0 22px rgba(34,211,238,0.12)'] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            Academic Path
          </motion.div>

          <h2
            aria-label="My Education"
            className="relative text-4xl font-black leading-tight lg:text-5xl"
          >
            <motion.span
              aria-hidden="true"
              className="absolute left-0 top-1/2 -z-10 h-14 w-full max-w-[520px] -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl lg:h-20"
              animate={{ opacity: [0.2, 0.48, 0.2], scale: [0.92, 1.05, 0.92] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span aria-hidden="true" className="relative inline-flex flex-wrap gap-x-4 overflow-hidden">
              {educationTitleWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="relative inline-block bg-[linear-gradient(100deg,#f8fafc_0%,#67e8f9_42%,#60a5fa_72%,#dbeafe_100%)] bg-[length:220%_auto] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_22px_rgba(103,232,249,0.22)]"
                  initial={{ opacity: 0, y: 32, rotateX: -55, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: 'easeOut' as const }}
                  whileHover={{ y: -5, scale: 1.035 }}
                >
                  {word}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 transition-all duration-700 hover:left-[120%] hover:opacity-100" />
                </motion.span>
              ))}
            </span>
          </h2>

          <motion.div
            aria-hidden="true"
            className="mt-5 h-px w-48 bg-gradient-to-r from-cyan-300/80 via-blue-400/70 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              boxShadow: [
                '0 0 0 rgba(34,211,238,0)',
                '0 0 18px rgba(34,211,238,0.7)',
                '0 0 18px rgba(34,211,238,0.7)',
                '0 0 0 rgba(34,211,238,0)',
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              repeatDelay: 0.45,
              ease: 'easeOut' as const,
            }}
            style={{ transformOrigin: 'left' }}
          />

          <motion.p
            className="mt-4 max-w-2xl text-base leading-7 text-slate-300/85"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' as const }}
          >
            A timeline of my academic journey and qualifications.
          </motion.p>
        </motion.div>

        <motion.div
          ref={timelineRef}
          className="relative space-y-6"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="absolute left-[7px] top-2 bottom-8 w-px bg-cyan-300/12" />
          <motion.div
            className="absolute left-[7px] top-2 bottom-8 w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent shadow-[0_0_18px_rgba(34,211,238,0.75)]"
            style={{ scaleY: lineScale }}
          />

          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ x: 4 }}
            >
              <div className="flex gap-6">
                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    className="mt-1 h-4 w-4 rounded-full border border-cyan-100/70 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]"
                    animate={{ scale: [1, 1.22, 1], opacity: [0.78, 1, 0.78] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: idx * 0.16, ease: 'easeInOut' }}
                  />
                </div>

                <div className="flex-1 pb-6">
                  <motion.div
                    className="relative overflow-hidden rounded-2xl border border-cyan-200/10 bg-white/[0.055] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/45 hover:bg-white/[0.075] hover:shadow-[0_28px_100px_rgba(34,211,238,0.18)] sm:p-6"
                    whileHover={{ y: -8, scale: 1.012, rotateX: 1.5, rotateY: -1.5 }}
                    transition={{ duration: 0.25, ease: 'easeOut' as const }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_18%_0%,rgba(34,211,238,0.18),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/16 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-100">
                            {item.course}
                          </h3>
                          {[item.institution, item.location].filter(Boolean).length > 0 ? (
                            <p className="mt-1 text-lg font-semibold text-cyan-300 transition-transform duration-300 group-hover:translate-x-1">
                              {[item.institution, item.location].filter(Boolean).join(' - ')}
                            </p>
                          ) : null}
                        </div>

                        <span className="inline-flex w-fit items-center rounded-full border border-cyan-200/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.14)] animate-pulse transition-transform duration-300 hover:scale-105">
                          {item.tag}
                        </span>
                      </div>

                      <div className="grid gap-3 text-sm text-slate-300/85 sm:grid-cols-2">
                        <div className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-200">
                          <Award size={16} className="text-cyan-300 transition-transform duration-500 group-hover:rotate-12" />
                          <span>{item.score}</span>
                        </div>
                        <div className="flex items-center gap-2 transition-colors duration-300 hover:text-cyan-200">
                          <Calendar size={16} className="text-blue-300 transition-transform duration-500 group-hover:rotate-180" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <div className="mt-5 flex items-center gap-2 text-sm text-slate-100">
                        <GraduationCap size={18} className="text-cyan-300 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
                        <span>Academic qualification</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
