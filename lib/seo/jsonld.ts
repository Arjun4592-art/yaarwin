import {
  SITE_URL,
  SITE_NAME,
  SITE_DESC,
  SOCIAL_LINKS,
  ANDROID_PACKAGE,
} from '@/lib/constants/site'

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    /* — WebSite — */
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESC,
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?s={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },

    /* — Organization — */
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
        caption: 'YaarWin Game Logo',
      },
      sameAs: [
        SOCIAL_LINKS.telegram,
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.twitter,
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
      },
    },

    /* — WebPage — */
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'YaarWin Game — Play Wingo, K3, 5D, Aviator & Win Real Rewards',
      description: SITE_DESC,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-IN',
      datePublished: '2026-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
        ],
      },
    },

    /* — MobileApplication — */
    {
      '@type': 'MobileApplication',
      name: 'YaarWin Game App',
      operatingSystem: 'Android',
      applicationCategory: 'GameApplication',
      identifier: ANDROID_PACKAGE,
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'INR',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        ratingCount: '12500',
        bestRating: '5',
        worstRating: '1',
      },
      description:
        'Download YaarWin Game APK and play Wingo, K3, 5D, Aviator, Slots and more. Win real rewards and withdraw instantly via UPI.',
    },

    /* — FAQPage — */
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is YaarWin Game?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'YaarWin is a secure online gaming platform where users can play Wingo, K3, 5D, Aviator, Poker, and Slots to earn real rewards.',
          },
        },
        {
          '@type': 'Question',
          name: 'How to download YaarWin APK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Visit yaarwin.game on your mobile browser and click the Download APK button. Enable 'Install from Unknown Sources' in settings and install the file.",
          },
        },
        {
          '@type': 'Question',
          name: 'How to withdraw money from YaarWin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Go to Wallet → Withdraw, select Bank Account or UPI, enter the amount, and submit. Minimum withdrawal is ₹100.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the YaarWin invitation code?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The YaarWin invitation code is 24348109027. Enter it during registration to unlock a welcome bonus.',
          },
        },
      ],
    },
  ],
}
