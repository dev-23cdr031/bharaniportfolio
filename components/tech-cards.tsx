'use client'

import { Code2, Database, Brain, Cloud, Smartphone, Zap } from 'lucide-react'

interface TechCard {
  icon: React.ReactNode
  title: string
  items: string[]
  color: string
  bgGradient: string
}

const techCards: TechCard[] = [
  {
    icon: <Code2 size={32} />,
    title: 'Frontend Stack',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'ShadCN UI'],
    color: 'text-blue-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10'
  },
  {
    icon: <Database size={32} />,
    title: 'Backend & Databases',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL'],
    color: 'text-purple-500',
    bgGradient: 'from-purple-500/10 to-blue-500/10'
  },
  {
    icon: <Brain size={32} />,
    title: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'scikit-learn', 'LLMs', 'NLP', 'Computer Vision'],
    color: 'text-pink-500',
    bgGradient: 'from-pink-500/10 to-purple-500/10'
  },
  {
    icon: <Cloud size={32} />,
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'GCP'],
    color: 'text-orange-500',
    bgGradient: 'from-orange-500/10 to-red-500/10'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Development',
    items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    color: 'text-green-500',
    bgGradient: 'from-green-500/10 to-emerald-500/10'
  },
  {
    icon: <Zap size={32} />,
    title: 'Tools & Platforms',
    items: ['Git', 'Vercel', 'VS Code', 'Figma', 'Postman', 'Jest'],
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-500/10 to-orange-500/10'
  }
]

export function TechCards() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map((card, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${card.bgGradient} border border-primary/20 hover:border-primary/50 transition-all duration-300 animate-zoom-in hover:scale-105 hover:shadow-glow-blue overflow-hidden`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Animated Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-aurora" />
              </div>

              {/* Icon */}
              <div className={`${card.color} mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 inline-block animate-fade-in-down`}>
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300 animate-fade-in-left">
                {card.title}
              </h3>

              {/* Items Grid */}
              <div className="grid grid-cols-2 gap-2">
                {card.items.map((item, itemIdx) => (
                  <div
                    key={item}
                    className="px-3 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm rounded-lg border border-primary/20 text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-all duration-300 animate-fade-in-up hover:scale-110 cursor-pointer"
                    style={{ animationDelay: `${idx * 0.1 + itemIdx * 0.03}s` }}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 animate-border-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
