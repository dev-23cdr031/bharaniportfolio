'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Quick: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    Connect: [
      { label: 'GitHub', href: 'https://github.com/Bharani312' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bharani-nallathambi-182187373/' },
      { label: 'Instagram', href: 'https://www.instagram.com/_._.bharani_._/' },
      { label: 'Email', href: 'mailto:bharaninagarathinam@gmail.com' },
    ],
  }

  return (
    <motion.footer
      className="border-t border-border bg-background relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' as const }}
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4 animate-fade-in-left">
              <Link href="/" className="flex items-center gap-2 group w-fit hover:-translate-y-1 transition-transform duration-300">
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 animate-text-glow">BHARANI N</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed hover:text-foreground transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
                Full-stack developer and AI specialist crafting innovative solutions through cutting-edge technology.
              </p>
              <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {[
                  { href: 'https://github.com/Bharani312', Icon: Github, label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/bharani-nallathambi-182187373/', Icon: Linkedin, label: 'LinkedIn' },
                  { href: 'mailto:bharaninagarathinam@gmail.com', Icon: Mail, label: 'Email' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target={social.label !== 'Email' ? '_blank' : undefined}
                    rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="p-2 bg-muted rounded-lg text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all hover:scale-125 active:scale-95 animate-bounce-in hover:animate-pulse-glow hover:-translate-y-2 duration-300"
                    aria-label={social.label}
                    style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIdx) => (
              <div key={category} className="space-y-4 animate-fade-in-up" style={{ animationDelay: `${0.15 + categoryIdx * 0.1}s` }}>
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors duration-300 animate-text-glow">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIdx) => (
                    <li key={link.label} className="animate-fade-in-left" style={{ animationDelay: `${0.15 + categoryIdx * 0.1 + linkIdx * 0.03}s` }}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 duration-300 inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent animate-fade-in hover:via-primary/50 transition-all duration-300" />
        </div>

        {/* Bottom Footer */}
        <div className="py-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              &copy; {currentYear} Bharani N. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 animate-pulse-glow">
              Made with <Heart size={16} className="text-primary animate-heartbeat" /> for the web
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
