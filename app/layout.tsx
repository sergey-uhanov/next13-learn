import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheHeader } from './components/TheHeader'
import { TheFooter } from './components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <TheHeader/>
          <div className="main-item">
            {children}
        </div>
        <TheFooter/>
        </div>
      </body>
      
    </html>
  )
}
