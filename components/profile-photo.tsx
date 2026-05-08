'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ProfilePhotoProps {
  src?: string
  alt?: string
  delay?: number
}

export function ProfilePhoto({ 
  src = '/images/profile-bharani.jpg',
  alt = 'Bharani N profile photo',
  delay = 0.2
}: ProfilePhotoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: '-100px' }}
      className="flex justify-center"
    >
      <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
        {/* Animated Glow Ring - Outer */}
        <motion.div
          animate={{
            boxShadow: [
              '0 0 20px 0 rgba(59, 130, 246, 0.5)',
              '0 0 40px 8px rgba(59, 130, 246, 0.3)',
              '0 0 20px 0 rgba(59, 130, 246, 0.5)',
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-xl -z-10"
        />

        {/* Animated Glow Ring - Inner */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/40 via-cyan-400/20 to-blue-400/40 p-1 -z-10"
        />

        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-2xl">
          <motion.div
            animate={{
              boxShadow: [
                '0 0 30px rgba(59, 130, 246, 0.4)',
                '0 0 60px rgba(6, 182, 212, 0.3)',
                '0 0 30px rgba(59, 130, 246, 0.4)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative w-full h-full"
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
            />
          </motion.div>

          {/* Inner Highlight Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
        </div>

        {/* Floating Particles Effect */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.cos((i * 2 * Math.PI) / 3) * 60, 0],
              y: [0, Math.sin((i * 2 * Math.PI) / 3) * 60, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.3,
              ease: 'easeInOut',
            }}
            className="absolute w-2 h-2 rounded-full bg-cyan-400 blur-sm"
            style={{
              top: '50%',
              left: '50%',
              marginTop: '-4px',
              marginLeft: '-4px',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
