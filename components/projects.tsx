'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { AnimatedSection } from './motion-shell'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  github: string
  featured: boolean
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'HackConnect',
    description: 'Developed a responsive web application for hackathons discovery and participation. Enabled users to find hackathons, form teams, and collaborate in real time. Implemented secure user authentication and authorization with real-time search and filtering features to help users discover relevant hackathons.',
    image: '/images/hackconnect-project.png',
    tags: ['React', 'Node.js', 'MongoDB', 'WebSocket'],
    link: 'https://github.com/Bharani312/hackconnect',
    github: 'https://github.com/Bharani312/hackconnect',
    featured: true,
  },
  {
    id: 4,
    title: 'Smart Tourist Safety',
    description: 'Integrated AI blockchain-based protocol for identity, non-fencing, and mesh networking for secure and reliable monitoring. Implemented real-time emergency support with panic button feature and voice distress recognition to automatically trigger emergency alerts.',
    image: '/images/smart-tourist-safety-project.png',
    tags: ['React Native', 'Blockchain', 'AI', 'Node.js'],
    link: 'https://github.com/Bharani312/smart-tourist-police-dashboard',
    github: 'https://github.com/Bharani312/smart-tourist-police-dashboard',
    featured: true,
  },
]

const projectTitleWords = ['Featured', 'Projects']

export function Projects() {
  return (
    <AnimatedSection
      id="projects"
      className="bg-gradient-to-b from-background to-background py-20 lg:py-32"
      contentClassName="relative"
      maxWidthClassName="max-w-7xl"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-12">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.75, ease: 'easeOut' as const }}
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-200 shadow-[0_0_28px_rgba(59,130,246,0.16)] backdrop-blur-xl"
            animate={{ y: [0, -4, 0], boxShadow: ['0 0 22px rgba(59,130,246,0.12)', '0 0 34px rgba(59,130,246,0.3)', '0 0 22px rgba(59,130,246,0.12)'] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            Selected Work
          </motion.div>

          <h2
            aria-label="Featured Projects"
            className="relative text-4xl font-black leading-tight text-balance lg:text-6xl"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-14 max-w-[640px] -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl lg:h-20"
              animate={{ opacity: [0.18, 0.42, 0.18], scale: [0.92, 1.05, 0.92] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span aria-hidden="true" className="relative inline-flex flex-wrap justify-center gap-x-4 overflow-hidden">
              {projectTitleWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="relative inline-block bg-[linear-gradient(100deg,#ffffff_0%,#dbeafe_24%,#3b82f6_56%,#60a5fa_78%,#ffffff_100%)] bg-[length:240%_auto] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_22px_rgba(59,130,246,0.22)]"
                  initial={{ opacity: 0, y: 34, rotateX: -55, filter: 'blur(10px)' }}
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
            className="mx-auto mt-5 h-px w-56 bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0],
              boxShadow: [
                '0 0 0 rgba(96,165,250,0)',
                '0 0 18px rgba(96,165,250,0.7)',
                '0 0 18px rgba(96,165,250,0.7)',
                '0 0 0 rgba(96,165,250,0)',
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

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' as const }}
          >
            Showcase of my most impactful work across full-stack development, AI/ML, and cloud architecture.
            Each project represents a unique challenge and innovative solution.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.filter((project) => project.featured).map((project, idx) => (
            <div
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-border hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg bg-card animate-zoom-in hover:scale-105 duration-300"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="w-full h-56 transition-transform duration-500 group-hover:scale-110 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-blue-400 transition-colors duration-300 animate-fade-in-left" style={{ animationDelay: `${idx * 0.15 + 0.1}s` }}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors duration-300" style={{ animationDelay: `${idx * 0.15 + 0.15}s` }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/30 rounded-full group-hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
                      style={{ animationDelay: `${idx * 0.15 + tagIdx * 0.03}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link !== '#' && (
                    <Link
                      href={project.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 active:scale-95 text-sm animate-fade-in-up duration-300"
                      style={{ animationDelay: `${idx * 0.15 + 0.2}s` }}
                    >
                      View Project
                      <ExternalLink size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                  )}
                  <Link
                    href={project.github}
                    className="inline-flex items-center justify-center p-3 border border-muted-foreground/20 text-muted-foreground hover:bg-blue-600/20 hover:border-blue-500/50 hover:text-blue-400 rounded-lg transition-all hover:scale-110 active:scale-95 animate-fade-in-up duration-300"
                    style={{ animationDelay: `${idx * 0.15 + 0.25}s` }}
                  >
                    <Github size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </AnimatedSection>
  )
}
