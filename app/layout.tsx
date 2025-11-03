import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  metadataBase: new URL('https://nocfra.example.com'),
  title: {
    default: 'Nocfra Solutions Limited – Project Management Consulting & Training',
    template: '%s | Nocfra Solutions',
  },
  description:
    'Nocfra Solutions provides Project Management Consulting, Training, PMO setup, and Resource Outsourcing for organizations across Nigeria and Africa.',
  openGraph: {
    type: 'website',
    title: 'Nocfra Solutions Limited',
    siteName: 'Nocfra Solutions',
    description:
      'Project Management Consulting, Training, and Resource Outsourcing that deliver boundless results.',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Nocfra Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nocfra Solutions Limited',
    description:
      'Project Management Consulting, Training, and Resource Outsourcing that deliver boundless results.',
    images: ['/og.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  )
}

