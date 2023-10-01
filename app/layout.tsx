import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/app/components/Layout/Header'
import Footer from '@/app/components/Layout/Footer'
import ThemeContextProvider from './hooks/useTheme'

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
