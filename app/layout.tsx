import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Bharani N | Full-Stack Developer & AI Specialist',
  description: 'Full-stack developer specializing in AI, machine learning, web development, and mobile applications. Explore my projects, experience, and achievements.',
  keywords: 'developer, full-stack, AI, machine learning, web development, portfolio',
  authors: [{ name: 'Bharani N' }],
  creator: 'Bharani N',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dharrshan.dev',
    title: 'Bharani N | Full-Stack Developer & AI Specialist',
    description: 'Explore my portfolio of cutting-edge projects and professional experience.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark bg-background scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{localStorage.removeItem('theme');document.documentElement.classList.add('dark');document.documentElement.classList.remove('light')}catch(e){}",
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
