'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation(delay = 0, threshold = 0.1) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply animation when element enters viewport
          setTimeout(() => {
            element.style.opacity = '1'
          }, delay)
          observer.unobserve(element)
        }
      },
      {
        threshold,
        rootMargin: '50px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [delay, threshold])

  return elementRef
}

export function useParallaxScroll() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleScroll = () => {
      const rect = element.getBoundingClientRect()
      const scrollY = window.scrollY
      const elementY = scrollY + rect.top
      const distance = window.innerHeight / 2
      const offset = (scrollY - (elementY - distance)) * 0.5

      element.style.transform = `translateY(${offset}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return elementRef
}

export function useMagneticCursor() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      const distance = Math.sqrt(distX * distX + distY * distY)

      if (distance < 100) {
        const angle = Math.atan2(distY, distX)
        const pullDistance = 100 - distance
        const moveX = Math.cos(angle) * pullDistance * 0.1
        const moveY = Math.sin(angle) * pullDistance * 0.1

        element.style.transform = `translate(${moveX}px, ${moveY}px)`
      } else {
        element.style.transform = 'translate(0, 0)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return elementRef
}

export function useGlitchEffect() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const triggerGlitch = () => {
      element.style.animation = 'none'
      setTimeout(() => {
        element.style.animation = 'glitch-effect 0.6s ease-out'
      }, 10)
    }

    // Trigger glitch on hover
    element.addEventListener('mouseenter', triggerGlitch)

    return () => {
      element.removeEventListener('mouseenter', triggerGlitch)
    }
  }, [])

  return elementRef
}
