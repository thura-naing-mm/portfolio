import './globals.css'
import type { Metadata } from 'next'
import { META } from './constant/index.constants'
import { Inter } from 'next/font/google'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import Favicon from '/public/favicon.ico';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <head>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-QB7Q1GH5CW' />
        <Script id='google-analytics'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-QB7Q1GH5CW');
        `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
