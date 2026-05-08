'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'
import { AnimatedSection, SectionHeader } from './motion-shell'

const contactEmail = 'bharaninagarathinam@gmail.com'

export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const result = await response.json()

      if (!response.ok) {
        if (result.code === 'CONTACT_NOT_CONFIGURED') {
          const mailBody = [
            `Name: ${formState.name}`,
            `Email: ${formState.email}`,
            '',
            formState.message,
          ].join('\n')

          window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(mailBody)}`
          setSubmitMessage('Opening your email app so the message can be sent directly.')
          return
        }

        throw new Error(result.error ?? 'Failed to send message. Please try again.')
      }

      setSubmitMessage('Message sent successfully! I will get back to you soon.')
      setFormState({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitMessage(''), 3000)
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 79045 80284',
      href: 'tel:+917904580284',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Namakkal, Tamil Nadu',
      href: '#',
    },
  ]

  return (
    <AnimatedSection
      id="contact"
      className="bg-gradient-to-b from-background to-background py-20 lg:py-32"
      contentClassName="relative"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="space-y-12">
        <SectionHeader
          title={<>Get In <span className="text-primary animate-pulse">Touch</span></>}
          description={
            <>
              Have a project in mind? Let&apos;s connect and create something amazing together.
              I&apos;m always open to discussing new opportunities and challenges.
            </>
          }
        />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="space-y-6 animate-fade-in-left">
            {contactInfo.map((info, idx) => (
              <a
                key={idx}
                href={info.href}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-card border border-transparent hover:border-primary/50 transition-all group animate-fade-in-left hover:translate-x-2 duration-300 hover:shadow-glow-blue/20"
                style={{ animationDelay: `${0.2 + idx * 0.08}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors group-hover:scale-125 group-hover:rotate-180 duration-300">
                  {info.icon}
                </div>
                <div className="group-hover:translate-x-1 transition-transform duration-300">
                  <p className="text-sm font-semibold text-muted-foreground group-hover:text-primary/80 transition-colors duration-300">{info.label}</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors duration-300 animate-pulse-glow">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="pt-6 border-t border-border animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <p className="text-sm font-semibold text-muted-foreground mb-4 animate-text-glow">Follow me</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://github.com/Bharani312', label: 'GitHub' },
                  { href: 'https://www.linkedin.com/in/bharani-nallathambi-182187373/', label: 'LinkedIn' },
                  { href: 'https://www.instagram.com/_._.bharani_._/', label: 'Instagram' },
                ].map((social, idx) => {
                  const Icon = idx === 0 ? Github : idx === 1 ? Linkedin : Instagram
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 hover:shadow-glow-blue transition-all hover:scale-125 active:scale-95 animate-fade-in-up hover:-translate-y-2 duration-300 hover:animate-spin-slow"
                      aria-label={social.label}
                      style={{ animationDelay: `${0.45 + idx * 0.06}s` }}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all animate-zoom-in hover:shadow-glow-blue/20 duration-300"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                  placeholder="Project discussion"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-3 rounded-lg text-sm font-medium ${
                    submitMessage.includes('successfully') || submitMessage.includes('Opening')
                      ? 'bg-green-500/10 text-green-600 border border-green-500/30'
                      : 'bg-red-500/10 text-red-600 border border-red-500/30'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-glow-blue transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
