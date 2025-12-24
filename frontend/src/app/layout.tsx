import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { BaseMetaTag } from '@/components/BaseMetaTag'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BaseChainVerify - Prove anything, trustlessly',
  description: 'On-Chain Proof of Real-World Assets via Cryptographic Certificates on Base',
  other: {
    'base:app_id': '694c01e54d3a403912ed7e3a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseMetaTag />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

