'use client'

import type { ComponentType } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Atom, Binary, Blocks, Brain, Cloud, Code2, Cpu, Server, Smartphone, Sparkles, Wrench } from 'lucide-react'
import { AnimatedSection } from './motion-shell'

interface SkillCategory {
  name: string
  skills: {
    name: string
    level: number
  }[]
  image: string
  icon: ComponentType<{ className?: string }>
  accent: string
  summary: string
}

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 94 },
      { name: 'Next.js', level: 91 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 78 },
      { name: 'Angular', level: 74 },
    ],
    image: '/images/skills-frontend.jpg',
    icon: Code2,
    accent: 'from-cyan-300 to-blue-500',
    summary: 'Interfaces, systems, and production-grade web experiences.',
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 88 },
      { name: 'Express', level: 86 },
      { name: 'Django', level: 80 },
      { name: 'PostgreSQL', level: 84 },
      { name: 'MongoDB', level: 82 },
    ],
    image: '/images/skills-backend.jpg',
    icon: Server,
    accent: 'from-blue-300 to-indigo-500',
    summary: 'APIs, databases, services, and scalable application logic.',
  },
  {
    name: 'AI/ML',
    skills: [
      { name: 'TensorFlow', level: 82 },
      { name: 'PyTorch', level: 84 },
      { name: 'Scikit-learn', level: 86 },
      { name: 'NLP', level: 88 },
      { name: 'Computer Vision', level: 81 },
      { name: 'LLMs', level: 90 },
    ],
    image: '/images/skills-aiml.jpg',
    icon: Brain,
    accent: 'from-cyan-300 to-violet-500',
    summary: 'Applied intelligence, model workflows, and Gen AI solutions.',
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Docker', level: 86 },
      { name: 'Kubernetes', level: 76 },
      { name: 'AWS', level: 82 },
      { name: 'CI/CD', level: 84 },
      { name: 'Nginx', level: 78 },
      { name: 'Linux', level: 87 },
    ],
    image: '/images/skills-devops.jpg',
    icon: Cloud,
    accent: 'from-sky-300 to-cyan-500',
    summary: 'Deployment pipelines, cloud foundations, and reliable delivery.',
  },
  {
    name: 'Mobile',
    skills: [
      { name: 'React Native', level: 84 },
      { name: 'Flutter', level: 80 },
      { name: 'Swift', level: 72 },
      { name: 'Kotlin', level: 74 },
      { name: 'iOS', level: 76 },
      { name: 'Android', level: 80 },
    ],
    image: '/images/skills-mobile.jpg',
    icon: Smartphone,
    accent: 'from-blue-300 to-cyan-500',
    summary: 'Responsive mobile products with smooth native-feeling flows.',
  },
  {
    name: 'Tools',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 82 },
      { name: 'Jira', level: 78 },
      { name: 'Figma', level: 84 },
      { name: 'VS Code', level: 94 },
    ],
    image: '/images/skills-tools.jpg',
    icon: Wrench,
    accent: 'from-cyan-300 to-slate-200',
    summary: 'Workflow tools for collaboration, design handoff, and delivery.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: 'easeOut' as const,
    },
  },
}

const exploringData = [
  {
    name: 'Rust',
    description: 'Systems programming & performance',
    status: 'Learning',
    icon: Cpu,
    color: 'from-orange-300 via-amber-400 to-red-500',
  },
  {
    name: 'WebAssembly',
    description: 'High-speed browser applications',
    status: 'Experimenting',
    icon: Binary,
    color: 'from-violet-300 via-fuchsia-400 to-cyan-400',
  },
  {
    name: 'Quantum ML',
    description: 'Future of intelligent computing',
    status: 'Learning',
    icon: Atom,
    color: 'from-cyan-300 via-blue-400 to-violet-500',
  },
  {
    name: 'Web3',
    description: 'Decentralized applications',
    status: 'Building',
    icon: Blocks,
    color: 'from-blue-300 via-indigo-400 to-purple-500',
  },
]

const exploringSliderData = [...exploringData, ...exploringData]
const titleWords = ['Technical', 'Skills']

export function Skills() {
  return (
    <AnimatedSection
      id="skills"
      className="bg-[#070b1f] py-20 lg:py-32"
      contentClassName="relative"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_82%_28%,rgba(59,130,246,0.14),transparent_32%),linear-gradient(to_bottom,rgba(7,11,31,0.2),#070b1f_78%)]"
      />
      <div aria-hidden="true" className="absolute left-[8%] top-24 -z-10 h-1 w-1 rounded-full bg-cyan-300/80 shadow-[90px_40px_0_rgba(125,211,252,0.45),220px_10px_0_rgba(34,211,238,0.35),540px_70px_0_rgba(96,165,250,0.4),780px_18px_0_rgba(34,211,238,0.3)] animate-pulse" />
      <div aria-hidden="true" className="absolute bottom-28 right-[12%] -z-10 h-1 w-1 rounded-full bg-blue-300/70 shadow-[-120px_-30px_0_rgba(34,211,238,0.35),-340px_20px_0_rgba(96,165,250,0.32),-620px_-12px_0_rgba(125,211,252,0.28)] animate-pulse" />

      <div className="space-y-12">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
        >
          <motion.div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.16)] backdrop-blur-xl"
            animate={{ y: [0, -4, 0], boxShadow: ['0 0 22px rgba(34,211,238,0.12)', '0 0 34px rgba(34,211,238,0.28)', '0 0 22px rgba(34,211,238,0.12)'] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-4 w-4 animate-spin-slow" />
            Core Stack
          </motion.div>
          <h2
            aria-label="Technical Skills"
            className="relative text-4xl font-black leading-tight lg:text-6xl"
          >
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-1/2 -z-10 mx-auto h-14 max-w-[680px] -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl lg:h-20"
              animate={{ opacity: [0.22, 0.48, 0.22], scale: [0.92, 1.04, 0.92] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span aria-hidden="true" className="relative inline-flex flex-wrap justify-center gap-x-4 overflow-hidden">
              {titleWords.map((word, index) => (
                <motion.span
                  key={word}
                  className="relative inline-block bg-[linear-gradient(100deg,#f8fafc_0%,#67e8f9_38%,#60a5fa_70%,#e0f2fe_100%)] bg-[length:220%_auto] bg-clip-text text-transparent animate-gradient-shift drop-shadow-[0_0_22px_rgba(103,232,249,0.22)]"
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
            className="mx-auto mt-5 h-px w-52 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent"
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
            style={{ transformOrigin: 'center' }}
          />
          <motion.p
            className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300/85 lg:text-lg"
            initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' as const }}
          >
            A focused toolkit for building scalable products across interfaces, systems, AI workflows,
            mobile experiences, and modern delivery pipelines.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((category, idx) => (
            <motion.article
              key={category.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ duration: 0.25, ease: 'easeOut' as const }}
              className="group relative flex h-full min-h-[545px] flex-col overflow-hidden rounded-2xl border border-cyan-200/10 bg-white/[0.055] shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/45 hover:bg-white/[0.075] hover:shadow-[0_28px_100px_rgba(34,211,238,0.18)]"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.22),transparent_45%)]" />

              <div className="relative h-44 w-full shrink-0 overflow-hidden bg-slate-950">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-85 transition duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b1f] via-[#070b1f]/30 to-transparent" />
                <div className={`absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t ${category.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-35`} />
              </div>

              <div className="relative z-10 flex flex-1 flex-col p-5">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="mt-2 min-h-[44px] text-sm leading-6 text-slate-300/80">{category.summary}</p>
                  </div>
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.2)] transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="h-5 w-5 animate-pulse" />
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-100">{skill.name}</span>
                        <span className="translate-y-1 text-xs font-semibold text-cyan-200 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1 overflow-hidden rounded-full bg-slate-700/55 ring-1 ring-white/5">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.accent} shadow-[0_0_14px_rgba(34,211,238,0.45)]`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.95,
                            delay: 0.12 + idx * 0.04 + skillIdx * 0.04,
                            ease: 'easeOut' as const,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="relative mt-16 overflow-hidden rounded-3xl border border-cyan-200/15 bg-slate-950/55 p-5 shadow-[0_28px_110px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl transition-colors duration-300 hover:border-cyan-300/35 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.65, ease: 'easeOut' as const }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:36px_36px] opacity-50"
          />
          <motion.div
            aria-hidden="true"
            className="absolute -left-24 top-4 h-64 w-64 rounded-full bg-cyan-400/15 blur-3xl"
            animate={{ x: [0, 44, 0], y: [0, 24, 0], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl"
            animate={{ x: [0, -36, 0], y: [0, -20, 0], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div aria-hidden="true" className="absolute left-10 top-16 h-1 w-1 rounded-full bg-cyan-200/80 shadow-[160px_36px_0_rgba(125,211,252,0.42),380px_-8px_0_rgba(96,165,250,0.36),690px_44px_0_rgba(34,211,238,0.32),930px_6px_0_rgba(165,180,252,0.3)] animate-pulse" />

          <div className="relative z-10">
            <motion.div
              className="mx-auto mb-8 max-w-2xl text-center"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut' as const }}
            >
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-[linear-gradient(100deg,#ffffff_0%,#67e8f9_35%,#60a5fa_70%,#dbeafe_100%)] bg-[length:220%_auto] animate-gradient-shift md:text-4xl">
                Currently Exploring
              </h3>
              <div className="mx-auto mt-4 h-px w-44 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            </motion.div>

            <div className="relative overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
              <motion.div
                className="flex w-max gap-4"
                initial={{ x: 0 }}
                animate={{ x: '-50%' }}
                transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
              >
                {exploringSliderData.map((tech, index) => (
                <motion.article
                key={`${tech.name}-${index}`}
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: (index % exploringData.length) * 0.08, ease: 'easeOut' as const }}
                whileHover={{ y: -10, scale: 1.025, rotateX: 2, rotateY: -2 }}
                className="group relative flex min-h-[230px] w-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl transform-gpu transition-colors duration-300 hover:border-cyan-300/45 hover:bg-white/[0.08] hover:shadow-[0_24px_90px_rgba(34,211,238,0.18)] sm:w-[300px] lg:w-[304px]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <motion.div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.color} text-slate-950 shadow-[0_0_34px_rgba(34,211,238,0.22)]`}
                      animate={{ y: [0, -5, 0], scale: [1, 1.04, 1] }}
                      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <tech.icon className="h-6 w-6 animate-pulse" />
                    </motion.div>
                    <span className="rounded-full border border-cyan-200/15 bg-cyan-200/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-100">
                      {tech.status}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-cyan-100">
                      {tech.name}
                    </h4>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-slate-300/82">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  )
}
