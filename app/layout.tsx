import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { poppins, inter } from '@/app/fonts'
import '@/app/globals.css'

import { contactMetadata } from '@/lib/seo/metadata'
export const metadata = contactMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable}`}
    >
      <body className='bg-(--yw-black)'>
        <Navbar />
        <main className='flex-1 w-full'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
