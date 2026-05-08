'use client'

import React from 'react'

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  animationStyle?: 'pulse' | 'glow' | 'shimmer' | 'neon'
  children: React.ReactNode
}

export function AnimatedButton({
  variant = 'primary',
  size = 'md',
  animationStyle = 'glow',
  children,
  className = '',
  ...props
}: AnimatedButtonProps) {
  const baseStyles = 'relative font-semibold transition-all duration-300 overflow-hidden group'

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow-blue hover:scale-110 active:scale-95',
    secondary:
      'bg-secondary text-secondary-foreground hover:shadow-glow-blue hover:scale-110 active:scale-95',
    outline:
      'border-2 border-primary text-primary hover:bg-primary/10 hover:scale-110 active:scale-95',
    ghost:
      'text-primary hover:bg-primary/10 hover:scale-110 active:scale-95',
  }

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const animationStyles = {
    pulse: 'hover:animate-pulse-glow',
    glow: 'hover:animate-glow-pulse',
    shimmer: 'hover:animate-shimmer',
    neon: 'hover:animate-neon-glow',
  }

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${animationStyles[animationStyle]}
        rounded-lg
        ${className}
      `}
      {...props}
    >
      {/* Animated background shine effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-shimmer-fast" />

      {/* Glow effect on hover */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:blur-md group-hover:animate-glow-pulse" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2 group-hover:-translate-y-0.5 transition-transform">
        {children}
      </span>
    </button>
  )
}
