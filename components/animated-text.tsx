'use client'

import { useMemo } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  animationType?: 'dance' | 'colorShift' | 'wave' | 'glitch' | 'bounce' | 'fadeSlide'
  staggerDelay?: number
}

const animationClasses = {
  dance: 'animate-bounce-in hover:animate-letter-dance',
  colorShift: 'animate-fade-in-up',
  wave: 'animate-wave-text',
  glitch: 'animate-flip-in-x',
  bounce: 'animate-bounce-spring',
  fadeSlide: 'animate-fade-in-up',
}

const colorSequence = [
  'text-blue-400',
  'text-cyan-400',
  'text-purple-400',
  'text-pink-400',
  'text-green-400',
  'text-yellow-400',
  'text-orange-400',
]

export function AnimatedText({
  text,
  className = '',
  animationType = 'fadeSlide',
  staggerDelay = 0.05,
}: AnimatedTextProps) {
  const words = useMemo(() => text.split(' '), [text])

  return (
    <span className={`inline ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block mr-1 ${animationClasses[animationType]}`}
          style={{
            animationDelay: `${index * staggerDelay}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

// Premium morphing letters with world-class animation
export function PremiumAnimatedText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const letters = useMemo(() => text.split(''), [text])

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block animate-premium-letter ${
            colorSequence[index % colorSequence.length]
          }`}
          style={{
            animationDelay: `${index * 0.06}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}

// Dancing letters with complex choreography
export function DancingLetters({
  text,
  className = '',
  speed = 'normal',
}: {
  text: string
  className?: string
  speed?: 'slow' | 'normal' | 'fast'
}) {
  const letters = useMemo(() => text.split(''), [text])
  const speedMultiplier = { slow: 1.5, normal: 1, fast: 0.6 }[speed]

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block animate-ultra-dance ${
            colorSequence[index % colorSequence.length]
          }`}
          style={{
            animationDelay: `${index * 0.08 * speedMultiplier}s`,
            animationIterationCount: 'infinite',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}

// Color morphing text with smooth transitions
export function ColorMorphText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const letters = useMemo(() => text.split(''), [text])

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block animate-morph-color`}
          style={{
            animationDelay: `${index * 0.08}s`,
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}

// Glitch effect text with 3D flipping
export function GlitchText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const letters = useMemo(() => text.split(''), [text])

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className={`inline-block animate-premium-glitch`}
          style={{
            animationDelay: `${index * 0.05}s`,
            animationIterationCount: 'infinite',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  )
}

// Fade and slide animated paragraph
export function FadeInParagraph({
  text,
  className = '',
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  return (
    <p
      className={`animate-fade-in-up text-muted-foreground leading-relaxed ${className}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {text}
    </p>
  )
}


