import { Poppins, Inter } from 'next/font/google'

// next/font self-hosts these at build time — no external @import,
// no network fetch in the browser, no FOUT/FOUC, no monospace fallback.

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--yw-font-heading', // matches the var() already used in global.css
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--yw-font-body', // matches the var() already used in global.css
  display: 'swap',
})
