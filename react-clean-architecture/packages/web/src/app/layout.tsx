import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'This is Todo App'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ko'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
