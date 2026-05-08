'use client'

import { useMemo, useState, useEffect, useRef, useCallback } from 'react'
import { Bot, MessageCircle, Send, Volume2, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ChatMessage {
  id: string
  role: 'user' | 'bot'
  text: string
}
const devProfileResponse = `I’m Bharani N, a passionate and dedicated aspiring software developer with a strong enthusiasm for web development, modern technologies, and innovative digital solutions. As a recipient of the POC 2nd Prize, I have gained valuable experience in problem-solving, teamwork, and building impactful technology-driven solutions in competitive environments. I enjoy transforming ideas into interactive and user-friendly applications while continuously strengthening my technical expertise in React, HTML, CSS, Bootstrap, Python, MySQL, and modern UI/UX design. Along with technical knowledge, I possess strong leadership, communication, and collaboration skills, enabling me to work effectively within teams, manage responsibilities confidently, and contribute positively to project development and execution.

I am deeply interested in building technology that creates real-world impact and enhances user experiences. Over time, I have worked on multiple projects ranging from responsive web platforms to innovative solutions such as the HackConnect project and sales data analysis platforms. I believe that combining creativity, consistency, leadership, and technical knowledge is the key to building meaningful digital products. I continuously explore emerging technologies, improve my problem-solving abilities, and challenge myself through innovation, teamwork, and continuous learning. My goal is to grow into a skilled full-stack developer and technology professional who contributes to future-focused projects while creating impactful and inspiring digital experiences.`

export function EchoChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-bot-message',
      role: 'bot',
      text: devProfileResponse,
    },
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (isOpen) {
      scrollToBottom()
    }
  }, [messages, isOpen, scrollToBottom])

  const speak = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 0.95
    utterance.pitch = 1
    window.speechSynthesis.speak(utterance)
  }, [])

  const sendMessage = useCallback(() => {
    const text = input.trim()

    if (!text) {
      return
    }

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: 'user', text },
      { id: crypto.randomUUID(), role: 'bot', text: devProfileResponse },
    ])
    setInput('')
    speak(devProfileResponse)
  }, [input, speak])

  const toggleChatbot = () => {
    setIsOpen((current) => {
      const nextIsOpen = !current

      if (nextIsOpen) {
        window.setTimeout(() => speak(devProfileResponse), 180)
      } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }

      return nextIsOpen
    })
  }

  return (
    <div className="fixed bottom-5 right-5 z-[70]">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.94 }}
            transition={{ duration: 0.22, ease: 'easeOut' as const }}
            className="mb-4 flex h-[520px] w-[min(calc(100vw-2.5rem),380px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl dark:border-cyan-200/15 dark:bg-[#071027]/95 dark:shadow-[0_24px_90px_rgba(0,0,0,0.42),0_0_40px_rgba(34,211,238,0.14)]"
          >
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 py-3 dark:border-white/10 dark:bg-white/[0.055]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] dark:from-cyan-300 dark:to-blue-500 dark:text-slate-950 dark:shadow-[0_0_24px_rgba(34,211,238,0.25)]">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-950 dark:text-white">Bharani Chatbot</h3>
                  <p className="text-xs text-slate-500 dark:text-cyan-100/75">Responds as Bharani Chatbot</p>
                </div>
              </div>
              <button
                type="button"
                aria-label="Close chatbot"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:border-cyan-300/45 dark:hover:bg-cyan-300/12 dark:hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50/45 p-4 dark:bg-transparent scrollbar-thin">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg ${
                      message.role === 'user'
                        ? 'bg-cyan-500 text-white dark:bg-cyan-300 dark:text-slate-950'
                        : 'border border-slate-200 bg-white text-slate-700 shadow-sm dark:border-cyan-200/10 dark:bg-white/[0.07] dark:text-slate-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-slate-950/45">
              <div className="flex items-end gap-2">
                <textarea
                  value={input}
                  aria-label="Chat message"
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' && !event.shiftKey) {
                      event.preventDefault()
                      sendMessage()
                    }
                  }}
                  rows={2}
                  placeholder="Type text..."
                  className="min-h-[46px] flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-200/70 dark:border-cyan-200/15 dark:bg-white/[0.06] dark:text-white dark:placeholder:text-slate-400 dark:focus:border-cyan-300/55 dark:focus:ring-cyan-300/20"
                />
                <button
                  type="button"
                  onClick={sendMessage}
                  disabled={!canSend}
                  className="inline-flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-[0_10px_24px_rgba(6,182,212,0.24)] transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-45 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-[0_0_24px_rgba(34,211,238,0.22)] dark:hover:bg-cyan-200"
                  aria-label="Send message"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggleChatbot}
        className="group ml-auto flex h-14 w-14 items-center justify-center rounded-full border border-cyan-200 bg-cyan-500 text-white shadow-[0_16px_34px_rgba(6,182,212,0.28)] transition hover:scale-105 hover:bg-cyan-600 dark:border-cyan-200/20 dark:bg-cyan-300 dark:text-slate-950 dark:shadow-[0_0_34px_rgba(34,211,238,0.34)] dark:hover:bg-cyan-200"
        aria-label="Open chatbot"
      >
        {isOpen ? <Volume2 className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
