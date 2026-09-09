import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'NELKAI | Workflow Automation for Property & Dealership Businesses',
  description: 'NELKAI maps and improves recurring workflows for property management companies, estate agents, real estate teams, and small car dealerships using focused software and automation.',
  keywords: ['workflow automation', 'property management software', 'estate agent automation', 'real estate workflow', 'car dealership automation', 'custom software'],
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
