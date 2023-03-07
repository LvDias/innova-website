import { IBM_Plex_Sans } from 'next/font/google'
import Body from './body'
import Header from './partials/header'

const ibm_plex_sans = IBM_Plex_Sans({
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
  ],
  subsets: ['latin']
})

import './globals.css'
import Attention from './partials/attention'
import Footer from './partials/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={ibm_plex_sans.className}>

        <Body />

        <div className='
          flex flex-col
          absolute
          w-full
          z-50
        '>

          <Attention />

          <Header />

        </div>

        {children}

        <Footer />

      </body>
    </html>
  )
}
