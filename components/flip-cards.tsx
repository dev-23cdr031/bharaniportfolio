'use client'

import { useState } from 'react'

interface FlipCardData {
  id: string
  front: {
    title: string
    icon: string
  }
  back: {
    description: string
    features: string[]
  }
}

const flipCardsData: FlipCardData[] = [
  {
    id: 'react',
    front: { title: 'React', icon: '⚛️' },
    back: {
      description: 'JavaScript library for building user interfaces with components',
      features: ['Component-based', 'Virtual DOM', 'Hooks', 'Reusable']
    }
  },
  {
    id: 'typescript',
    front: { title: 'TypeScript', icon: '📘' },
    back: {
      description: 'Typed superset of JavaScript for scalable applications',
      features: ['Type Safety', 'Better IDE Support', 'Interfaces', 'Generics']
    }
  },
  {
    id: 'tailwind',
    front: { title: 'Tailwind CSS', icon: '🎨' },
    back: {
      description: 'Utility-first CSS framework for rapid UI development',
      features: ['Utility Classes', 'Responsive', 'Customizable', 'Performance']
    }
  },
  {
    id: 'nodejs',
    front: { title: 'Node.js', icon: '🟢' },
    back: {
      description: 'JavaScript runtime for server-side development',
      features: ['Non-blocking I/O', 'Event-driven', 'Scalable', 'Fast']
    }
  },
  {
    id: 'python',
    front: { title: 'Python', icon: '🐍' },
    back: {
      description: 'Versatile language for web, data science, and AI',
      features: ['AI/ML Ready', 'Data Science', 'Web Dev', 'Easy to Learn']
    }
  },
  {
    id: 'docker',
    front: { title: 'Docker', icon: '🐳' },
    back: {
      description: 'Containerization platform for consistent deployment',
      features: ['Containerization', 'Portability', 'Isolation', 'Scalability']
    }
  },
  {
    id: 'kubernetes',
    front: { title: 'Kubernetes', icon: '☸️' },
    back: {
      description: 'Orchestration platform for managing containerized apps',
      features: ['Auto-scaling', 'Self-healing', 'Load Balancing', 'Rolling Updates']
    }
  },
  {
    id: 'aws',
    front: { title: 'AWS', icon: '☁️' },
    back: {
      description: 'Cloud computing platform with comprehensive services',
      features: ['Compute', 'Storage', 'Databases', 'Global Reach']
    }
  }
]

interface FlipCardProps {
  card: FlipCardData
  index: number
}

function FlipCard({ card, index }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative w-full h-64 cursor-pointer perspective animate-zoom-in"
      style={{ animationDelay: `${index * 0.08}s` }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full p-6 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl flex flex-col items-center justify-center group hover:border-primary/50 transition-all duration-300 hover:shadow-glow-blue"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-float-slow">
            {card.front.icon}
          </div>
          <h3 className="text-2xl font-bold text-foreground text-center group-hover:text-primary transition-colors duration-300 animate-text-glow">
            {card.front.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hover to learn more
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full p-6 bg-gradient-to-br from-accent/30 to-primary/30 border border-accent/30 rounded-2xl flex flex-col justify-between group hover:border-accent/50 transition-all duration-300 hover:shadow-glow-blue overflow-hidden"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-aurora" />
          </div>

          <div className="relative z-10">
            <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300 animate-fade-in-up">
              {card.back.description}
            </p>
          </div>

          <div className="relative z-10">
            <div className="flex flex-wrap gap-2">
              {card.back.features.map((feature, idx) => (
                <span
                  key={feature}
                  className="px-3 py-1 text-xs font-semibold bg-primary/30 text-primary rounded-full backdrop-blur-sm hover:bg-primary/50 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20 animate-border-glow" />
        </div>
      </div>
    </div>
  )
}

export function FlipCards() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-fast" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 text-center mb-16 animate-fade-in-down">
          <h2 className="text-4xl lg:text-5xl font-bold text-balance animate-text-glow">
            Technology <span className="text-primary animate-pulse">Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hover over the cards to discover detailed information about each technology
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flipCardsData.map((card, idx) => (
            <FlipCard key={card.id} card={card} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
