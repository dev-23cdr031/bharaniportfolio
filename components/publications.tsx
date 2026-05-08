'use client'

import { MouseEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ExternalLink, Sparkles } from 'lucide-react'
import { AnimatedSection } from './motion-shell'

interface Paper {
  id: number
  title: string
  venue: string
  details?: string
  year: string
  link?: string
}

const papers: Paper[] = [
  {
    id: 1,
    title: 'SHAADISPOT',
    venue: 'IRJMETS (VOL 08/ISS 01)',
    year: '2026',
    link: 'https://www.irjmets.com/paperdetail.php?paperId=271873b0747204fed65f3dd8e267484e',
  },
  {
    id: 3,
    title: 'HACKCONNECT',
    venue: 'IJPREMS (VOL 06/ISS 01)',
    year: '2026',
    link: 'https://www.ijprems.com/research-paper/hackconnect',
  },
]

const publicationTitleParts = [
  { text: 'Selected', highlight: false },
  { text: 'peer-reviewed', highlight: false },
  { text: 'and', highlight: false },
  { text: 'conference', highlight: false },
  { text: 'publications', highlight: true },
  { text: 'with', highlight: false },
  { text: 'details.', highlight: false },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 34, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.68,
      ease: 'easeOut' as const,
    },
  },
}

function PublicationCard({ paper }: { paper: Paper }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((0.5 - y / rect.height)) * 8

    setTilt({ rotateX, rotateY })
  }

  return (
    <motion.article
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ rotateX: 0, rotateY: 0 })}
      whileHover={{ y: -10, scale: 1.014 }}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex min-h-[205px] overflow-hidden rounded-2xl border border-cyan-200/10 bg-gradient-to-br from-white/[0.08] via-white/[0.045] to-blue-950/25 p-5 shadow-[0_22px_90px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/45 hover:shadow-[0_28px_110px_rgba(34,211,238,0.18)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(34,211,238,0.16),transparent_42%),radial-gradient(circle_at_92%_110%,rgba(168,85,247,0.14),transparent_42%)] opacity-70" />
      <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

      <div className="relative z-10 flex h-full w-full items-start gap-4">
        <motion.div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.3)]"
          animate={{ y: [0, -6, 0], scale: [1, 1.04, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BookOpen className="h-6 w-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </motion.div>

        <div className="flex min-w-0 flex-1 flex-col self-stretch">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {paper.link ? (
                <a href={paper.link} target="_blank" rel="noreferrer" className="inline-block text-base font-bold leading-6 text-white transition-colors duration-300 hover:text-cyan-200 group-hover:text-cyan-100 sm:text-lg">
                  {paper.title}
                </a>
              ) : (
                <h3 className="text-base font-bold leading-6 text-white transition-colors duration-300 group-hover:text-cyan-100 sm:text-lg">
                  {paper.title}
                </h3>
              )}
              <p className="mt-2 text-sm font-medium text-slate-300/80">{paper.venue}</p>
            </div>

            <div className="flex shrink-0 flex-col items-end gap-2">
              <span className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.18)] animate-pulse">
                {paper.year}
              </span>
              {paper.link ? (
                <a href={paper.link} target="_blank" rel="noreferrer" className="text-slate-400 transition-colors duration-300 hover:text-cyan-200">
                  <ExternalLink className="h-4 w-4" />
                </a>
              ) : null}
            </div>
          </div>

          {paper.details ? <p className="mt-4 text-sm text-slate-300/80">{paper.details}</p> : null}

          <div className="mt-auto pt-6">
            <div className="h-px w-full bg-gradient-to-r from-cyan-300/45 via-blue-400/20 to-transparent" />
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export function Publications() {
  return (
    <AnimatedSection
      id="publications"
      className="bg-[#070b1f] py-20 lg:py-28"
      contentClassName="relative"
      maxWidthClassName="max-w-5xl"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(96,165,250,0.04)_1px,transparent_1px)] bg-[size:46px_46px]"
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/16 blur-3xl"
        animate={{ scale: [0.92, 1.12, 0.92], opacity: [0.3, 0.58, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -right-24 bottom-10 -z-10 h-72 w-72 rounded-full bg-purple-500/12 blur-3xl"
        animate={{ x: [0, -36, 0], y: [0, -18, 0], opacity: [0.28, 0.5, 0.28] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden="true" className="absolute left-[9%] top-32 -z-10 h-1 w-1 rounded-full bg-cyan-200/80 shadow-[120px_24px_0_rgba(125,211,252,0.4),310px_-12px_0_rgba(96,165,250,0.36),610px_58px_0_rgba(34,211,238,0.32),850px_8px_0_rgba(168,85,247,0.3)] animate-pulse" />
      <div aria-hidden="true" className="absolute bottom-24 right-[11%] -z-10 h-1 w-1 rounded-full bg-blue-200/70 shadow-[-130px_-24px_0_rgba(34,211,238,0.3),-360px_22px_0_rgba(96,165,250,0.3),-650px_-16px_0_rgba(168,85,247,0.26)] animate-pulse" />

      <div>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.14)] backdrop-blur-xl"
            initial={{ opacity: 0, y: -24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            animate={{
              y: [0, -4, 0],
              boxShadow: ['0 0 18px rgba(34,211,238,0.12)', '0 0 34px rgba(34,211,238,0.28)', '0 0 18px rgba(34,211,238,0.12)'],
            }}
            transition={{ duration: 0.65, ease: 'easeOut' as const, boxShadow: { duration: 2.8, repeat: Infinity, ease: 'easeInOut' } }}
          >
            <BookOpen className="h-5 w-5 animate-pulse" />
            <span>Paper Published</span>
          </motion.div>

          <h2
            aria-label="Selected peer-reviewed and conference publications with details."
            className="relative text-4xl font-black leading-tight text-white lg:text-5xl"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-20 max-w-[720px] -translate-y-1/2 rounded-full bg-cyan-300/16 blur-3xl"
              animate={{ opacity: [0.2, 0.5, 0.2], scale: [0.92, 1.06, 0.92] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span aria-hidden="true" className="relative inline-flex flex-wrap justify-center gap-x-3 overflow-hidden">
              {publicationTitleParts.map((part, index) => (
                <motion.span
                  key={`${part.text}-${index}`}
                  className={
                    part.highlight
                      ? 'relative inline-block bg-[linear-gradient(100deg,#67e8f9_0%,#22d3ee_38%,#60a5fa_68%,#cffafe_100%)] bg-[length:240%_auto] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_24px_rgba(34,211,238,0.35)]'
                      : 'relative inline-block text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.08)]'
                  }
                  initial={{ opacity: 0, y: 34, rotateX: -55, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ duration: 0.75, delay: index * 0.055, ease: 'easeOut' as const }}
                  whileHover={{ y: -4, scale: 1.025 }}
                >
                  {part.text}
                  {part.highlight ? (
                    <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 transition-all duration-700 hover:left-[120%] hover:opacity-100" />
                  ) : null}
                </motion.span>
              ))}
            </span>
          </h2>
          <motion.div
            className="mx-auto mt-7 h-px w-64 bg-gradient-to-r from-transparent via-cyan-300/75 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
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
            style={{ transformOrigin: 'center' }}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2"
        >
          {papers.map((paper) => (
            <PublicationCard key={paper.id} paper={paper} />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
