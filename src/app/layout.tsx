import '@/styles/globals.scss'
import '@/styles/variables.scss'
import '@/styles/darkTheme.scss'
import '@/styles/responsive.scss'
import '@/styles/HeaderFooter.scss'

import type { Metadata } from 'next'

import ThemeContextProvider from '@/hooks/useTheme'

import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

export const metadata: Metadata = {
  title: 'Douglas Vargas',
  description: 'Meu portfólio'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeContextProvider>
      <html lang='pt-BR'>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeContextProvider>
  )
}
