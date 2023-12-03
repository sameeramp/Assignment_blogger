import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from './components/Layout/Footer'
import './globals.css'
import Div from './components/shared/atomic/Div'
import Navbar from './components/Layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blogger App',
  description: 'New Generation App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
