import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Douglas Vargas',
  description: 'Meu portfólio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="darki">
      <body>
        <Header />
        <main className="w-full max-w-maxwidth flex flex-col grow bg-secondary shadow-md mx-auto font-fontprimary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
