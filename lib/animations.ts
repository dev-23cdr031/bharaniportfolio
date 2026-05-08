export const animationClasses = {
  // Scroll trigger animations
  scrollReveal: 'scroll-animate',
  scrollFloat: 'scroll-float',
  scrollRotate: 'scroll-rotate',
  scrollScale: 'scroll-scale',
  
  // Text animations
  textReveal: 'text-reveal',
  textTypewriter: 'typewriter',
  textWave: 'wave-text',
  textShimmer: 'text-shimmer-premium',
  
  // Magnetic/Interactive
  magneticHover: 'magnetic-element',
  magneticButton: 'magnetic-button',
  
  // Particles & Effects
  particleHover: 'particle-hover',
  trailCursor: 'trail-cursor',
  
  // Advanced transforms
  morphing: 'morphing-shape',
  liquidSwipe: 'liquid-swipe',
  
  // 3D Effects
  perspective3d: 'perspective-3d',
  tiltCard: 'tilt-card',
  
  // Premium hover states
  premiumHover: 'premium-hover-effect',
  premiumFocus: 'premium-focus-effect',
  
  // Stagger animations
  staggerChildren: 'stagger-children',
  staggerUp: 'stagger-up',
  
  // Advanced loading
  premiumLoader: 'premium-loader',
  shimmerLoader: 'shimmer-loader',
}

export const getAnimationDelay = (index: number, multiplier = 0.1) => ({
  animationDelay: `${index * multiplier}s`,
})

export const getStaggerDelay = (index: number, baseDelay = 0, step = 0.1) => ({
  animationDelay: `${baseDelay + index * step}s`,
})

export const useScrollTrigger = (elementRef: React.RefObject<HTMLElement>) => {
  // This would be implemented in a useEffect hook
  // to trigger animations when element enters viewport
}
