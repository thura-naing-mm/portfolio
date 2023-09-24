import './globals.css'
import type { Metadata } from 'next'
import { META } from './constant/index.constants'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth dark'>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
