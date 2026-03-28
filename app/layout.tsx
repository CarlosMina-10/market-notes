import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketnotes.vercel.app'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | Market Notes',
    default: 'Market Notes — Where Business, Finance, and Community Impact Meet',
  },
  description:
    'Where business, finance and community impact meet. Analysis at the intersection of capital and community impact — written by a curious mind.',
  keywords: [
    'finance',
    'business',
    'market analysis',
    'Latin America',
    'emerging markets',
    'community impact',
    'Carlos Mina',
  ],
  authors: [{ name: 'Carlos Mina' }],
  creator: 'Carlos Mina',
  publisher: 'Market Notes',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Market Notes',
    title: 'Market Notes — Where Business, Finance, and Community Impact Meet',
    description:
      'Where business, finance and community impact meet. Analysis at the intersection of capital and community impact — written by a curious mind.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Market Notes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Notes',
    description: 'Where business, finance and community impact meet.',
    images: ['/og-image.png'],
    creator: '@marketnotes_co',
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
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
