'use client'

import Image from 'next/image'
import { useState } from 'react'

interface TechShowcaseItem {
  id: string
  title: string
  description: string
  image: string
  color: string
  skills: string[]
}

const techShowcaseData: TechShowcaseItem[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    description: 'Creating stunning, responsive user interfaces with modern frameworks and cutting-edge CSS techniques.',
    image: '/images/frontend-hero.jpg',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    description: 'Building robust, scalable server architectures with optimized databases and powerful APIs.',
    image: '/images/backend-hero.jpg',
    color: 'from-purple-500 to-blue-500',
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Express']
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems using advanced neural networks and deep learning algorithms.',
    image: '/images/ai-ml-hero.jpg',
    color: 'from-pink-500 to-purple-500',
    skills: ['TensorFlow', 'PyTorch', 'scikit-learn', 'NLP', 'Computer Vision']
  },
  {
    id: 'devops',
    title: 'DevOps & Infrastructure',
    description: 'Orchestrating continuous deployment and managing cloud infrastructure for optimal performance.',
    image: '/images/devops-hero.jpg',
    color: 'from-orange-500 to-red-500',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform']
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    description: 'Crafting fast, intuitive mobile applications for iOS and Android platforms.',
    image: '/images/mobile-hero.jpg',
    color: 'from-green-500 to-emerald-500',
    skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
  },
  {
    id: 'cloud',
    title: 'Cloud Architecture',
    description: 'Designing scalable, secure cloud solutions with microservices and serverless patterns.',
    image: '/images/cloud-hero.jpg',
    color: 'from-indigo-500 to-purple-500',
    skills: ['AWS', 'Azure', 'GCP', 'Microservices', 'Serverless']
  }
]

export function TechShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section id="tech-showcase" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance animate-text-glow">
            Technology <span className="text-primary animate-pulse">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Comprehensive knowledge across full-stack development, AI/ML, and cloud infrastructure
          </p>
        </div>

        {/* Grid Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {techShowcaseData.map((item, idx) => (
            <div
              key={item.id}
              className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer animate-zoom-in hover:scale-105 duration-300"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              {/* Image Background */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-500 group-hover:brightness-75"
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-all duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                <div className={`transform transition-all duration-300 ${activeId === item.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h3 className="text-2xl font-bold mb-2 animate-fade-in-up">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-4 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {item.skills.map((skill, skillIdx) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${0.15 + skillIdx * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Default content */}
                <div className={`transform transition-all duration-300 absolute bottom-6 left-6 ${activeId === item.id ? 'translate-y-4 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <div className={`h-2 w-16 bg-gradient-to-r ${item.color} rounded-full mb-3 animate-shimmer`} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 animate-border-glow" />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {[
            { number: '6+', label: 'Tech Domains', icon: '🎯' },
            { number: '20+', label: 'Technologies', icon: '⚙️' },
            { number: '100%', label: 'Expertise', icon: '⭐' }
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all group animate-bounce-in hover:scale-110 duration-300 hover:shadow-glow-blue"
              style={{ animationDelay: `${0.6 + idx * 0.1}s` }}
            >
              <div className="text-4xl mb-2 group-hover:animate-spin-slow">{stat.icon}</div>
              <p className="text-3xl font-bold text-primary mb-1 animate-text-glow">{stat.number}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
