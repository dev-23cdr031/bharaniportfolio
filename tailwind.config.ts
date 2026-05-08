import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      animation: {
        // Core fade animations
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.7s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.7s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.7s ease-out forwards',
        'fade-out': 'fadeOut 0.6s ease-in forwards',
        'fade-out-up': 'fadeOutUp 0.7s ease-in forwards',
        
        // Slide animations
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'slide-in-down': 'slideInDown 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'slide-down': 'slideDown 0.8s ease-out forwards',
        'slide-out-left': 'slideOutLeft 0.8s ease-in forwards',
        'slide-out-right': 'slideOutRight 0.8s ease-in forwards',
        
        // Scale & Zoom animations
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'scale-up': 'scaleUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'scale-bounce': 'scaleBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'zoom-in': 'zoomIn 0.5s ease-out forwards',
        'zoom-in-up': 'zoomInUp 0.6s ease-out forwards',
        'zoom-out-up': 'zoomOutUp 0.6s ease-in forwards',
        'zoom-rotate': 'zoomRotate 0.6s ease-out forwards',
        
        // Bounce & Spring animations
        'bounce-in': 'bounceIn 0.7s ease-out forwards',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'bounce-spring': 'bounceSpring 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'bounce-top': 'bounceTop 0.8s ease-in-out infinite',
        'bounce-bottom': 'bounceBottom 0.8s ease-in-out infinite',
        
        // Rotate & Flip animations
        'rotate-in': 'rotateIn 0.6s ease-out forwards',
        'rotate-left': 'rotateLeft 0.6s ease-out forwards',
        'rotate-right': 'rotateRight 0.6s ease-out forwards',
        'flip-in-x': 'flipInX 0.6s ease-out forwards',
        'flip-in-y': 'flipInY 0.6s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'spin-fast': 'spin 1s linear infinite',
        'spin-reverse': 'spinReverse 3s linear infinite',
        
        // Glow & Light animations
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'glow-intense': 'glowIntense 1.5s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'box-glow': 'boxGlow 2.5s ease-in-out infinite',
        'shadow-glow': 'shadowGlow 2s ease-in-out infinite',
        
        // Motion animations
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'float-fast': 'floatFast 4s ease-in-out infinite',
        'wobble': 'wobble 0.8s ease-in-out infinite',
        'swing': 'swing 1s ease-in-out infinite',
        'sway': 'sway 3s ease-in-out infinite',
        'tilt': 'tilt 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'shimmer-fast': 'shimmerFast 1.2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        'gradient-fast': 'gradientFast 4s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.3s ease-in-out infinite',
        'pulse-wave': 'pulseWave 2s ease-in-out infinite',
        
        // Advanced animations
        'elastic': 'elastic 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        'reveal': 'reveal 0.8s ease-out forwards',
        'draw': 'draw 1.5s ease-out forwards',
        'parallax': 'parallax 20s linear infinite',
        'ping-slow': 'pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'ping-fast': 'pingFast 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        
        // Premium animations
        'liquid-swipe': 'liquidSwipe 0.8s ease-out forwards',
        'morphing': 'morphing 3s ease-in-out infinite',
        'stagger-children': 'staggerChildren 0.8s ease-out forwards',
        'wave-text': 'waveText 1.2s ease-in-out infinite',
        'blur-in': 'blurIn 0.6s ease-out forwards',
        'blur-out': 'blurOut 0.6s ease-in forwards',
        'chrome-effect': 'chromeEffect 3s ease-in-out infinite',
        'neon-glow': 'neonGlow 2s ease-in-out infinite',
        'aurora': 'aurora 5s ease-in-out infinite',
        'kaleidoscope': 'kaleidoscope 4s linear infinite',
        'prismatic': 'prismatic 3s ease-in-out infinite',
        'color-cycle': 'colorCycle 3s ease-in-out infinite',
        'premium-letter': 'premiumLetter 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
        'ultra-dance': 'ultraDance 1.8s cubic-bezier(0.34, 1.56, 0.64, 1) infinite',
        'morph-color': 'morphColor 3.5s ease-in-out infinite',
        'premium-glitch': 'premiumGlitch 2.2s ease-in-out infinite',
        'liquid-wave': 'liquidWave 4s cubic-bezier(0.42, 0, 0.58, 1) infinite',
        'elastic-bounce': 'elasticBounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-60px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(103, 232, 249, 0.3)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 40px rgba(103, 232, 249, 0.6)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(103, 232, 249, 0.2), 0 0 20px rgba(103, 232, 249, 0.2)' },
          '50%': { boxShadow: '0 0 20px rgba(103, 232, 249, 0.6), 0 0 40px rgba(103, 232, 249, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '-200% center' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        parallax: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-50px)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-200deg) scale(0.8)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        pingSlow: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        wobble: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-5px) rotate(-1deg)' },
          '30%': { transform: 'translateX(5px) rotate(1deg)' },
          '45%': { transform: 'translateX(-5px) rotate(-1deg)' },
          '60%': { transform: 'translateX(3px) rotate(0.5deg)' },
          '75%': { transform: 'translateX(-2px) rotate(-0.5deg)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '20%': { transform: 'rotate(15deg)' },
          '40%': { transform: 'rotate(-10deg)' },
          '60%': { transform: 'rotate(5deg)' },
          '80%': { transform: 'rotate(-2deg)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.3)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.3)' },
          '70%': { transform: 'scale(1)' },
        },
        flipInX: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateX(90deg)' },
          '40%': { transform: 'perspective(400px) rotateX(-10deg)' },
          '70%': { transform: 'perspective(400px) rotateX(10deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateX(0deg)' },
        },
        flipInY: {
          '0%': { opacity: '0', transform: 'perspective(400px) rotateY(90deg)' },
          '40%': { transform: 'perspective(400px) rotateY(-10deg)' },
          '70%': { transform: 'perspective(400px) rotateY(10deg)' },
          '100%': { opacity: '1', transform: 'perspective(400px) rotateY(0deg)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
        },
        zoomInUp: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3) translate(0, 40px)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1) translate(0, 0)' },
        },
        zoomOutUp: {
          '0%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
          '40%': { opacity: '1', transform: 'scale3d(0.475, 0.475, 0.475) translate(0, -60px)' },
          '100%': { opacity: '0', transform: 'scale3d(0.1, 0.1, 0.1) translate(0, -2000px)' },
        },
        elastic: {
          '0%': { opacity: '0', transform: 'scale(0) translateX(-50%)' },
          '55%': { opacity: '1', transform: 'scale(1.1)' },
          '75%': { transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1) translateX(0)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translate(0, 100px) skewY(2deg)' },
          '100%': { opacity: '1', transform: 'translate(0, 0) skewY(0deg)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        textGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(103, 232, 249, 0.2), 0 0 20px rgba(103, 232, 249, 0.1)' },
          '50%': { textShadow: '0 0 20px rgba(103, 232, 249, 0.6), 0 0 40px rgba(103, 232, 249, 0.4)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(103, 232, 249, 0.2)', boxShadow: 'inset 0 0 10px rgba(103, 232, 249, 0.1)' },
          '50%': { borderColor: 'rgba(103, 232, 249, 0.6)', boxShadow: 'inset 0 0 20px rgba(103, 232, 249, 0.3), 0 0 20px rgba(103, 232, 249, 0.2)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadeOutUp: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-30px)' },
        },
        slideOutLeft: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(-60px)' },
        },
        slideOutRight: {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(60px)' },
        },
        scaleUp: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleBounce: {
          '0%': { transform: 'scale(0.3)' },
          '50%': { transform: 'scale(1.15)' },
          '75%': { transform: 'scale(0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        bounceSpring: {
          '0%': { transform: 'scale(0.3) translateY(100px)' },
          '50%': { transform: 'scale(1.1) translateY(-10px)' },
          '75%': { transform: 'scale(0.95) translateY(5px)' },
          '100%': { transform: 'scale(1) translateY(0)' },
        },
        bounceTop: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        bounceBottom: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(30px)' },
        },
        zoomRotate: {
          '0%': { opacity: '0', transform: 'scale(0) rotate(-180deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0deg)' },
        },
        rotateLeft: {
          '0%': { opacity: '0', transform: 'rotate(-90deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        rotateRight: {
          '0%': { opacity: '0', transform: 'rotate(90deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        glowIntense: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(103, 232, 249, 0.4), 0 0 20px rgba(103, 232, 249, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(103, 232, 249, 1), 0 0 60px rgba(103, 232, 249, 0.6)' },
        },
        boxGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(103, 232, 249, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(103, 232, 249, 0.8), 0 0 60px rgba(103, 232, 249, 0.4)' },
        },
        shadowGlow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(103, 232, 249, 0.3))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(103, 232, 249, 0.8))' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        floatFast: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        sway: {
          '0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
          '25%': { transform: 'translateX(-5px) rotate(-0.5deg)' },
          '50%': { transform: 'translateX(0px) rotate(0deg)' },
          '75%': { transform: 'translateX(5px) rotate(0.5deg)' },
        },
        tilt: {
          '0%, 100%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '50%': { transform: 'perspective(1000px) rotateY(10deg)' },
        },
        shimmerFast: {
          '0%, 100%': { backgroundPosition: '-2000px 0' },
          '50%': { backgroundPosition: '2000px 0' },
        },
        gradientFast: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseWave: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '0', transform: 'scale(2)' },
        },
        liquidSwipe: {
          '0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
          '100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' },
        },
        morphing: {
          '0%': { borderRadius: '50% 50% 50% 50%' },
          '25%': { borderRadius: '60% 40% 30% 70%' },
          '50%': { borderRadius: '30% 60% 70% 40%' },
          '75%': { borderRadius: '70% 30% 40% 60%' },
          '100%': { borderRadius: '50% 50% 50% 50%' },
        },
        staggerChildren: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        waveText: {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-5px)' },
        },
        blurIn: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        blurOut: {
          '0%': { opacity: '1', filter: 'blur(0px)' },
          '100%': { opacity: '0', filter: 'blur(10px)' },
        },
        chromeEffect: {
          '0%, 100%': { background: 'linear-gradient(90deg, transparent 0%, rgba(103, 232, 249, 0.5) 50%, transparent 100%)' },
          '50%': { background: 'linear-gradient(90deg, transparent 25%, rgba(103, 232, 249, 0.8) 75%, transparent 100%)' },
        },
        neonGlow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(103, 232, 249, 0.5), 0 0 20px rgba(103, 232, 249, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(103, 232, 249, 1), 0 0 40px rgba(103, 232, 249, 0.6), 0 0 60px rgba(103, 232, 249, 0.4)' },
        },
        aurora: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        kaleidoscope: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        prismatic: {
          '0%': { opacity: '0.5', filter: 'hue-rotate(0deg)' },
          '50%': { opacity: '1', filter: 'hue-rotate(180deg)' },
          '100%': { opacity: '0.5', filter: 'hue-rotate(360deg)' },
        },
        colorCycle: {
          '0%': { color: '#60a5fa', opacity: '1' },
          '25%': { color: '#06b6d4', opacity: '1' },
          '50%': { color: '#a855f7', opacity: '1' },
          '75%': { color: '#ec4899', opacity: '1' },
          '100%': { color: '#60a5fa', opacity: '1' },
        },
        premiumLetter: {
          '0%': { 
            transform: 'translateY(0) rotate(0deg) scale(1)', 
            opacity: '0.5',
            textShadow: '0 0 0px rgba(59, 130, 246, 0)',
          },
          '25%': { 
            transform: 'translateY(-15px) rotate(5deg) scale(1.1)', 
            opacity: '1',
            textShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
          },
          '50%': { 
            transform: 'translateY(0px) rotate(-3deg) scale(0.95)', 
            opacity: '1',
            textShadow: '0 0 20px rgba(168, 85, 247, 0.8)',
          },
          '75%': { 
            transform: 'translateY(-8px) rotate(2deg) scale(1.05)', 
            opacity: '1',
            textShadow: '0 0 15px rgba(236, 72, 153, 0.8)',
          },
          '100%': { 
            transform: 'translateY(0) rotate(0deg) scale(1)', 
            opacity: '0.5',
            textShadow: '0 0 0px rgba(59, 130, 246, 0)',
          },
        },
        ultraDance: {
          '0%': { 
            transform: 'translateY(0) translateX(0) rotate(0deg) skewX(0deg)', 
            opacity: '1',
          },
          '20%': { 
            transform: 'translateY(-20px) translateX(-3px) rotate(-8deg) skewX(-2deg)', 
          },
          '40%': { 
            transform: 'translateY(5px) translateX(5px) rotate(4deg) skewX(2deg)', 
          },
          '60%': { 
            transform: 'translateY(-12px) translateX(-5px) rotate(-5deg) skewX(-1deg)', 
          },
          '80%': { 
            transform: 'translateY(3px) translateX(2px) rotate(3deg) skewX(1deg)', 
          },
          '100%': { 
            transform: 'translateY(0) translateX(0) rotate(0deg) skewX(0deg)', 
            opacity: '1',
          },
        },
        morphColor: {
          '0%': { 
            color: '#3b82f6', 
            opacity: '1',
            filter: 'brightness(1) saturate(1)',
          },
          '20%': { 
            color: '#06b6d4', 
            opacity: '1',
            filter: 'brightness(1.1) saturate(1.2)',
          },
          '40%': { 
            color: '#8b5cf6', 
            opacity: '0.95',
            filter: 'brightness(0.95) saturate(1)',
          },
          '60%': { 
            color: '#ec4899', 
            opacity: '1',
            filter: 'brightness(1.15) saturate(1.3)',
          },
          '80%': { 
            color: '#10b981', 
            opacity: '0.95',
            filter: 'brightness(1) saturate(1)',
          },
          '100%': { 
            color: '#3b82f6', 
            opacity: '1',
            filter: 'brightness(1) saturate(1)',
          },
        },
        premiumGlitch: {
          '0%': { 
            transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) skewY(0deg)', 
            opacity: '1',
            textShadow: 'none',
          },
          '25%': { 
            transform: 'perspective(500px) rotateX(15deg) rotateY(10deg) skewY(-2deg)', 
            opacity: '0.8',
            textShadow: '3px 0 0 rgba(59, 130, 246, 0.7), -3px 0 0 rgba(236, 72, 153, 0.7)',
          },
          '50%': { 
            transform: 'perspective(500px) rotateX(-10deg) rotateY(-15deg) skewY(2deg)', 
            opacity: '1',
            textShadow: '-2px 0 0 rgba(168, 85, 247, 0.7), 2px 0 0 rgba(6, 182, 212, 0.7)',
          },
          '75%': { 
            transform: 'perspective(500px) rotateX(8deg) rotateY(5deg) skewY(-1deg)', 
            opacity: '0.9',
            textShadow: '2px 0 0 rgba(34, 197, 94, 0.7), -2px 0 0 rgba(249, 115, 22, 0.7)',
          },
          '100%': { 
            transform: 'perspective(500px) rotateX(0deg) rotateY(0deg) skewY(0deg)', 
            opacity: '1',
            textShadow: 'none',
          },
        },
        liquidWave: {
          '0%': { 
            transform: 'translateY(0) translateX(0) skewY(0deg)', 
            opacity: '1',
          },
          '25%': { 
            transform: 'translateY(-8px) translateX(4px) skewY(-3deg)', 
          },
          '50%': { 
            transform: 'translateY(0) translateX(0) skewY(0deg)', 
          },
          '75%': { 
            transform: 'translateY(-5px) translateX(-3px) skewY(2deg)', 
          },
          '100%': { 
            transform: 'translateY(0) translateX(0) skewY(0deg)', 
            opacity: '1',
          },
        },
        elasticBounce: {
          '0%': { 
            transform: 'scale(1) translateY(0)', 
            opacity: '1',
          },
          '30%': { 
            transform: 'scale(1.2) translateY(-20px)', 
          },
          '50%': { 
            transform: 'scale(0.9) translateY(5px)', 
          },
          '70%': { 
            transform: 'scale(1.1) translateY(-10px)', 
          },
          '100%': { 
            transform: 'scale(1) translateY(0)', 
            opacity: '1',
          },
        },
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(103, 232, 249, 0.4)',
        'glow-purple': '0 0 30px rgba(168, 85, 247, 0.3)',
        'elevated': '0 20px 40px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
