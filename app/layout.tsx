import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'NELKAI | Automation for Property, Estate Agents & Car Dealerships',
  description: 'Custom software and workflow automation for property management, real estate and estate agents, and small car dealerships. Explore enquiry, scheduling, and follow-up workflows.',
  keywords: ['operations systems', 'workflow automation', 'property management', 'estate agents', 'real estate', 'small car dealerships', 'custom software'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
