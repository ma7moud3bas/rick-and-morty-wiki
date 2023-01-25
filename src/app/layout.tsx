import Navbar from '@UI/navbar'
import { NextSeo } from 'next-seo'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <NextSeo
          useAppDir={true}
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body>
        <main className='min-h-screen flex flex-col font-satoshi'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  )
}
