import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Providers } from './Providers'

const inter = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GoYieldNFT',
  description: 'A unique GoYieldNFT representing ownership in the GoYieldNFT ecosystem. Holders have the opportunity to earn passive income and participate in the NFT marketplace revenue sharing program.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='mx-auto'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
