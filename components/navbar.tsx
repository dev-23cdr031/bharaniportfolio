'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLightTheme, setIsLightTheme] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
    setIsLightTheme(false)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Education' },
    { href: '#publications', label: 'Publications' },
  ]

  const toggleTheme = () => {
    const nextIsLight = !isLightTheme

    document.documentElement.classList.toggle('dark', !nextIsLight)
    document.documentElement.classList.toggle('light', nextIsLight)
    setIsLightTheme(nextIsLight)
  }

  const themeLabel = isLightTheme ? 'Switch to dark theme' : 'Switch to light theme'

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-lg border-b border-border animate-slide-down'
          : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' as const }}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={themeLabel}
        title={themeLabel}
        className="fixed left-4 top-3 z-[60] inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-card/95 px-3 text-sm font-semibold text-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-glow-blue/20 active:scale-95"
      >
        {isLightTheme ? <Moon size={18} /> : <Sun size={18} />}
        <span>{isLightTheme ? 'Dark' : 'Light'}</span>
      </button>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16 gap-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group animate-fade-in-up"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 group-hover:shadow-glow-blue" />
              </Link>
            ))}
            <Link
              href="#achievements"
              style={{ animationDelay: `${navLinks.length * 0.1}s` }}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group animate-fade-in-up"
            >
              Awards
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 group-hover:shadow-glow-blue" />
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-glow-blue hover:scale-105 transition-all duration-300 animate-fade-in-up hover:animate-pulse-glow"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors animate-fade-in-right hover:rotate-90 duration-300"
          >
            {isOpen ? <X size={24} className="animate-rotate-in" /> : <Menu size={24} className="animate-fade-in" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden pb-4 space-y-3 overflow-hidden"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' as const }}
            >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ animationDelay: `${index * 0.05}s` }}
                className="block text-sm font-medium text-foreground hover:text-primary py-2 transition-colors animate-fade-in-left hover:translate-x-2 duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#achievements"
              style={{ animationDelay: `${navLinks.length * 0.05}s` }}
              className="block text-sm font-medium text-foreground hover:text-primary py-2 transition-colors animate-fade-in-left hover:translate-x-2 duration-300"
              onClick={() => setIsOpen(false)}
            >
              Awards
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:shadow-glow-blue transition-all animate-fade-in-up hover:scale-105 duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
