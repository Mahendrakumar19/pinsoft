import type { Metadata } from 'next'
import { Inter, Roboto_Mono, Space_Grotesk } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk'
})

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-roboto-mono'
})

export const metadata: Metadata = {
  title: {
    template: '%s | PinSoft - Complete Software Solutions',
    default: 'PinSoft - Complete Software Solutions',
  },
  description: 'Professional software development studio building custom applications and scalable solutions',
  keywords: 'software development, custom applications, web development, mobile apps, enterprise solutions',
  authors: [{ name: 'Mahendra Kumar', url: 'https://pinsoft.in' }],
  creator: 'PinSoft',
  publisher: 'PinSoft',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pinsoft.in',
    title: 'PinSoft - Complete Software Solutions',
    description: 'Professional software development studio building custom applications and scalable solutions',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PinSoft - Complete Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PinSoft - Complete Software Solutions',
    description: 'Professional software development studio building custom applications and scalable solutions',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceGrotesk.variable} ${robotoMono.variable}`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
