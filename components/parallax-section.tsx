'use client'

import React, { useEffect, useRef, useState } from 'react'

interface ParallaxSectionProps {
  children: React.ReactNode
  intensity?: number
  className?: string
}

export function ParallaxSection({
  children,
  intensity = 0.5,
  className = '',
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const elementCenter = rect.top + rect.height / 2
      const windowCenter = window.innerHeight / 2
      const distance = elementCenter - windowCenter

      setOffset(distance * intensity * -0.1)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [intensity])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 6,
  className = '',
}: FloatingElementProps) {
  return (
    <div
      className={`${className} animate-float`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  )
}

interface GlowingOrbitProps {
  size?: number
  duration?: number
  children?: React.ReactNode
}

export function GlowingOrbit({
  size = 300,
  duration = 20,
  children,
}: GlowingOrbitProps) {
  return (
    <div
      className="absolute rounded-full border border-primary/30 animate-spin-slow"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animationDuration: `${duration}s`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 30px rgba(103, 232, 249, 0.2)',
      }}
    >
      {children}
    </div>
  )
}

interface PulseRingProps {
  delay?: number
  duration?: number
  size?: number
}

export function PulseRing({
  delay = 0,
  duration = 2,
  size = 100,
}: PulseRingProps) {
  return (
    <div
      className="absolute rounded-full border border-primary/50 animate-pulse-wave"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}
