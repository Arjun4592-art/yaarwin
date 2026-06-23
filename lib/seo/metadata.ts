import type { Metadata } from 'next'
import {
  SITE_URL,
  SITE_NAME,
  SITE_DESC,
  SITE_KEYWORDS,
  TWITTER_HANDLE,
  ANDROID_PACKAGE,
  GOOGLE_VERIFICATION,
} from '@/lib/constants/site'

/* ─────────────────────────────────────────────
   ROOT / LAYOUT METADATA  (app/layout.tsx)
───────────────────────────────────────────── */
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'YaarWin Game — Play Wingo, K3, 5D, Aviator & Win Real Rewards',
    template: '%s | YaarWin Game',
  },
  description: SITE_DESC,
  keywords: SITE_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Gaming',

  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-IN': SITE_URL,
      'hi-IN': `${SITE_URL}/hi`,
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: 'YaarWin Game — Play Wingo, K3, 5D, Aviator & Win Real Rewards',
    description: SITE_DESC,
    locale: 'en_IN',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'YaarWin Game — Online Gaming Platform',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'YaarWin Game — Play Wingo, K3, 5D & Win Real Rewards',
    description: SITE_DESC,
    images: [`${SITE_URL}/og-image.jpg`],
    creator: TWITTER_HANDLE,
    site: TWITTER_HANDLE,
  },

  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon.ico' }],
  },

  manifest: '/manifest.json',

  verification: {
    google: GOOGLE_VERIFICATION,
  },

  appLinks: {
    android: {
      package: ANDROID_PACKAGE,
      app_name: SITE_NAME,
    },
  },
}

/* ─────────────────────────────────────────────
   HOME PAGE  (app/page.tsx)
───────────────────────────────────────────── */
export const homeMetadata: Metadata = {
  title: 'Yaar Win App Download – Latest Version, Bonus & Features',
  description:
    'Download Yaar Win App and explore exciting online games, welcome rewards, secure transactions, and user-friendly gameplay. Learn about features, bonuses, and the latest APK download guide.',
  keywords: [
    'yaar win',
    'yaar win apk',
    'yaar win download',
    'yaar win website',
    'yaar win game',
    'yaar win game online',
    'yaar win app',
    'yaar win app download',
    'yaar win apk download',
    'yaar win online game',
    'yaar win bonus',
    'yaar win welcome bonus',
    'yaar win latest version',
    'yaar win review',
    'yaar win game download',
    'yaar win registration',
    'yaar win rewards',
    'yaar win mobile app',
    'yaar win gaming app',
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    url: SITE_URL,
    title: 'Yaar Win App Download – Latest Version, Bonus & Features',
    description:
      'Download Yaar Win App and explore exciting online games, welcome rewards, secure transactions, and user-friendly gameplay.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

/* ─────────────────────────────────────────────
   BLOGS LISTING  (app/blogs/page.tsx)
───────────────────────────────────────────── */
export const blogsMetadata: Metadata = {
  title: 'Blogs – YaarWin Game',
  description:
    'Read the latest YaarWin Game blogs covering app download guides, login help, referral events, Telegram channel updates, and more.',
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    url: `${SITE_URL}/blogs`,
    title: 'Blogs – YaarWin Game',
    description:
      'Read the latest YaarWin Game blogs covering app download guides, login help, referral events, Telegram channel updates, and more.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

/* ─────────────────────────────────────────────
   ABOUT US  (app/about-us/page.tsx)
───────────────────────────────────────────── */
export const aboutMetadata: Metadata = {
  title: 'About Us – YaarWin Game',
  description:
    'Learn about YaarWin Game — your trusted source for online gaming guides, APK download instructions, login help, and platform information.',
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    url: `${SITE_URL}/about-us`,
    title: 'About Us – YaarWin Game',
    description:
      'Learn about YaarWin Game — your trusted source for online gaming guides, APK download instructions, login help, and platform information.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

/* ─────────────────────────────────────────────
   RESPONSIBLE GAMING  (app/responsible-gaming/page.tsx)
───────────────────────────────────────────── */
export const responsibleGamingMetadata: Metadata = {
  title: 'Responsible Gaming – YaarWin Game',
  description:
    'Playing on YaarWin Game should always be safe, controlled, and enjoyable. Read our responsible gaming guidelines, safe tips, and important warnings.',
  alternates: { canonical: `${SITE_URL}/responsible-gaming` },
  openGraph: {
    url: `${SITE_URL}/responsible-gaming`,
    title: 'Responsible Gaming – YaarWin Game',
    description:
      'Playing on YaarWin Game should always be safe, controlled, and enjoyable. Read our responsible gaming guidelines, safe tips, and important warnings.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}

/* ─────────────────────────────────────────────
   CONTACT US  (app/contact-us/page.tsx)
───────────────────────────────────────────── */
export const contactMetadata: Metadata = {
  title: 'Contact Us – YaarWin Game',
  description:
    'Have questions, suggestions, or need assistance? Get in touch with YaarWin Game. We are here to help and provide the best possible support.',
  alternates: { canonical: `${SITE_URL}/contact-us` },
  openGraph: {
    url: `${SITE_URL}/contact-us`,
    title: 'Contact Us – YaarWin Game',
    description:
      'Have questions, suggestions, or need assistance? Get in touch with YaarWin Game. We are here to help and provide the best possible support.',
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630 }],
  },
}
