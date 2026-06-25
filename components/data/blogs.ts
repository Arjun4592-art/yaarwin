export type Blog = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  date: string
  tag: string
  readTime: string
  sections: Section[]
}

export type Section =
  | { type: 'intro'; text: string }
  | { type: 'table'; rows: [string, string][] }
  | { type: 'heading2'; text: string }
  | { type: 'heading3'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'steps'; items: string[] }
  | { type: 'bullets'; items: string[] }
  | {
      type: 'prize_table'
      rows: { rank: string; prize: string; value: string }[]
    }
  | { type: 'note'; text: string }
  | { type: 'cta'; label: string; href: string }
  | { type: 'faq'; items: { q: string; a: string }[] }
  | {
      type: 'feature_grid'
      items: { icon: string; title: string; desc: string }[]
    }

export const blogs: Blog[] = [
  /* ─────────────────────────────────────────────
     1. APP DOWNLOAD
  ───────────────────────────────────────────── */
  {
    slug: 'yaarwin-game-app-download',
    title: 'YaarWin Game App Download APK Latest Version (2026)',
    metaTitle: 'YaarWin Game App Download APK Latest Version (2026)',
    metaDescription:
      'Download the latest YaarWin Game APK (v1.5) for Android. Step-by-step install guide, login process, games overview, and deposit & withdrawal info.',
    date: 'June 19, 2026',
    tag: 'App Guide',
    readTime: '3 min read',
    sections: [
      {
        type: 'intro',
        text: 'The YaarWin Game App (2026 latest version) is becoming popular among users who enjoy fast-paced online games like Wingo, K3, 5D, Slots, and Aviator. With a smooth interface, quick gameplay, and instant results, the app provides an engaging experience for both beginners and regular players.',
      },
      {
        type: 'table',
        rows: [
          ['App Name', 'YaarWin'],
          ['Latest Version', '1.5'],
          ['Platform Type', 'Color Prediction, Jili, Limbo, Aviator'],
          ['App Size', '12 MB'],
          ['Official Website', 'yaarwin.game'],
          ['Invite Code', '24348109027'],
        ],
      },
      { type: 'heading2', text: 'Yaar Win APK Download – Latest 2026' },
      {
        type: 'paragraph',
        text: 'The YaarWin app is usually not available on Google Play Store. Users need to download the APK file directly from the official website or a trusted source.',
      },
      { type: 'heading3', text: 'How to Download YaarWin Game App' },
      {
        type: 'steps',
        items: [
          'Visit the official YaarWin Game website using your mobile browser.',
          'Click on the Download APK button on the homepage.',
          'The APK file will start downloading automatically.',
          'Open the file from your Downloads folder.',
        ],
      },
      { type: 'heading3', text: 'How to Install YaarWin Game APK' },
      {
        type: 'steps',
        items: [
          'Go to Settings → Security / Privacy on your device.',
          'Enable the "Install from Unknown Sources" option.',
          'Tap on the downloaded APK file.',
          'Click Install and wait for the installation to complete.',
          'Open the app and log in or register your account.',
        ],
      },
      { type: 'heading2', text: 'YaarWin Game Login Process' },
      {
        type: 'steps',
        items: [
          'Open the YaarWin app or official website.',
          'Enter your registered mobile number.',
          'Add your password.',
          'Click on Login to access your dashboard instantly.',
        ],
      },
      { type: 'heading2', text: 'Games Available on YaarWin' },
      {
        type: 'feature_grid',
        items: [
          {
            icon: '🎯',
            title: 'Wingo Colour Prediction',
            desc: 'Fast-result prediction game with 30s, 1min, 3min, and 5min rounds.',
          },
          {
            icon: '🔢',
            title: 'K3 & 5D Games',
            desc: 'Dice-based prediction games with multiple outcomes per round.',
          },
          {
            icon: '🎰',
            title: 'Slots & Casino Games',
            desc: 'Interactive slot and casino-style games with smooth controls.',
          },
          {
            icon: '✈️',
            title: 'Aviator',
            desc: 'Crash-style game — cash out at the right multiplier to win big.',
          },
        ],
      },
      { type: 'heading2', text: 'Deposit & Withdrawal' },
      {
        type: 'bullets',
        items: [
          '💰 Easy deposit via UPI / Bank / Wallet',
          '⚡ Fast withdrawal process',
          '📊 Instant balance updates',
          '🔄 Smooth and secure transaction system',
        ],
      },
      { type: 'heading2', text: 'Key Features (2026 Update)' },
      {
        type: 'bullets',
        items: [
          '🚀 Improved app performance and speed',
          '🔐 Enhanced security features',
          '🎨 Better UI and design layout',
          '⚡ Faster loading on all devices',
          '📱 Fully optimized for mobile users',
        ],
      },
      {
        type: 'note',
        text: 'Always play responsibly and use the platform for entertainment purposes only. This app involves financial risk — only use money you can afford to lose.',
      },
      {
        type: 'cta',
        label: '📥 Download YaarWin APK — Register Free',
        href: 'https://www.yaarwin14.com/#/register?invitationCode=67868138834',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     2. LOGIN GUIDE
  ───────────────────────────────────────────── */
  {
    slug: 'yaar-win-login',
    title: 'Yaar Win Login – Complete Guide to Sign In',
    metaTitle: 'Yaar Win Login – How to Sign In to YaarWin Game',
    metaDescription:
      'Learn how to log in to Yaar Win Game quickly and securely. Step-by-step login guide, forgot password help, and account safety tips.',
    date: 'June 19, 2026',
    tag: 'Login Guide',
    readTime: '2 min read',
    sections: [
      {
        type: 'intro',
        text: 'The Yaar Win Login process is simple, fast, and secure. Whether you are a new user or an existing player, you can access your account within seconds using your registered mobile number and password.',
      },
      { type: 'heading2', text: 'What is YaarWin Login?' },
      {
        type: 'paragraph',
        text: 'Yaar Win Login allows users to securely access their gaming dashboard where they can check wallet balance, play games like Wingo, K3, and 5D, deposit and withdraw funds, and track their game history — all in one place.',
      },
      { type: 'heading2', text: 'Steps to Login on YaarWin' },
      {
        type: 'steps',
        items: [
          'Open the official YaarWin Game app or visit the trusted website.',
          'Tap on the Login option available on the homepage.',
          'Enter your registered mobile number and your account password.',
          'Click on Sign In to access your dashboard instantly.',
        ],
      },
      { type: 'heading2', text: 'Forgot Password?' },
      {
        type: 'steps',
        items: [
          'Click on the Forgot Password link on the login page.',
          'Enter your registered mobile number.',
          'Verify your identity using the OTP sent to your number.',
          'Set a new strong password for your account.',
        ],
      },
      { type: 'heading2', text: 'Is YaarWin Login Safe?' },
      {
        type: 'paragraph',
        text: 'Yaar Win uses a secure login system with OTP verification steps to protect user accounts. However, users should always keep their login credentials private, avoid using unsecured public Wi-Fi networks, and never share their OTP or password with anyone.',
      },
      { type: 'heading2', text: 'After Logging In — What Can You Do?' },
      {
        type: 'feature_grid',
        items: [
          {
            icon: '💰',
            title: 'Check Wallet Balance',
            desc: 'View your current balance and transaction history instantly.',
          },
          {
            icon: '🎮',
            title: 'Play Games',
            desc: 'Access Wingo, K3, 5D, Slots, Aviator and more from the dashboard.',
          },
          {
            icon: '💳',
            title: 'Deposit Funds',
            desc: 'Add money to your wallet via UPI, QR Code, or bank transfer.',
          },
          {
            icon: '🏦',
            title: 'Withdraw Earnings',
            desc: 'Transfer your winnings to your bank account or UPI ID.',
          },
        ],
      },
      {
        type: 'note',
        text: 'Keep your login credentials private. Do not share your mobile number, OTP, or password with anyone. The official YaarWin support team will never ask for your password.',
      },
      {
        type: 'cta',
        label: '🔑 Login to Yaar Win — Play Now',
        href: 'https://www.yaarwin14.com/#/register?invitationCode=67868138834',
      },
      { type: 'heading2', text: 'Frequently Asked Questions' },
      {
        type: 'faq',
        items: [
          {
            q: 'Can I log in using my email address?',
            a: 'Yaar Win primarily uses mobile number-based login with OTP verification for security.',
          },
          {
            q: 'What if my OTP is not received?',
            a: 'Check your network connection and try resending the OTP. Make sure your mobile number is active.',
          },
          {
            q: 'Can I stay logged in on multiple devices?',
            a: 'This depends on platform rules. It is recommended to use one device for account security.',
          },
        ],
      },
    ],
  },

  /* ─────────────────────────────────────────────
     3. GRAND REFERRAL EVENT
  ───────────────────────────────────────────── */
  {
    slug: 'yaarwin-grand-referral-event',
    title: 'YaarWin Grand Referral Event 2026 – Win Mercedes & Gold',
    metaTitle:
      'YaarWin Grand Referral Event 2026 – Full Prize List & How to Join',
    metaDescription:
      'Join the YaarWin Grand Referral Event 2026 (March 1 – April 30) and win a Mercedes-Benz A-Class Limousine worth ₹55 Lakh, gold bars, diamond jewelry, and more.',
    date: 'June 7, 2026',
    tag: 'Event',
    readTime: '3 min read',
    sections: [
      {
        type: 'intro',
        text: 'The YaarWin Grand Referral Event 2026 is one of the biggest promotional campaigns launched by YaarWin, giving members the opportunity to earn premium rewards simply by inviting friends to join the platform. Running for two months, this exciting event features luxury cars, gold bars, diamond jewelry, smartphones, and many other valuable prizes.',
      },
      { type: 'heading2', text: 'What is the YaarWin Grand Referral Event?' },
      {
        type: 'paragraph',
        text: 'The YaarWin Grand Referral Event is a special invite-and-earn campaign where participants earn rankings based on successful referrals and event performance. The more active referrals you generate during the event period, the higher your chances of securing a top position on the leaderboard and winning exclusive prizes.',
      },
      { type: 'heading2', text: 'Event Duration' },
      {
        type: 'bullets',
        items: [
          '📅 Start Date: March 1, 2026',
          '📅 End Date: April 30, 2026',
          '⏳ Duration: 2 Months',
        ],
      },
      { type: 'heading2', text: '🏆 Grand Referral Event Prize List' },
      {
        type: 'prize_table',
        rows: [
          {
            rank: '🎆 Grand Prize',
            prize: 'Mercedes-Benz A-Class Limousine',
            value: '₹55,00,000',
          },
          {
            rank: '🥇 1st Prize',
            prize: 'Diamond Jewelry (2 Items)',
            value: '₹15,00,000',
          },
          {
            rank: '🥈 2nd Prize',
            prize: 'Gold + Diamond Jewelry',
            value: '₹5,00,000',
          },
          { rank: '🥉 3rd Prize', prize: 'Gold Bar 999.9', value: '₹2,00,000' },
          {
            rank: '4th Prize',
            prize: 'Gold Necklace 999.9',
            value: '₹1,00,000',
          },
          { rank: '5th Prize', prize: 'Gold Bracelet 999.9', value: '₹50,000' },
          {
            rank: '6th Prize',
            prize: 'Nothing Phone (256GB)',
            value: '₹30,000',
          },
          { rank: '7th Prize', prize: 'Gold Ring 999.9', value: '₹20,000' },
          { rank: '8th Prize', prize: 'Gold Earrings 999.9', value: '₹10,000' },
          { rank: '9th Prize', prize: 'Treasure Box Reward', value: '₹5,000' },
        ],
      },
      { type: 'heading2', text: 'How to Participate' },
      {
        type: 'steps',
        items: [
          'Login to your YaarWin account using the official platform.',
          'Navigate to the Referral or Invite Friends section.',
          'Copy your unique personal referral link or invite code.',
          'Share the link with friends, family, and social media followers.',
          'When invited users register and complete required activities, your referral count increases.',
          'The more successful referrals you generate, the higher your leaderboard ranking.',
        ],
      },
      { type: 'heading2', text: 'Why Join the YaarWin Referral Event?' },
      {
        type: 'feature_grid',
        items: [
          {
            icon: '🚗',
            title: 'Luxury Grand Prize',
            desc: 'Compete for a Mercedes-Benz A-Class Limousine and high-value gold and diamond prizes.',
          },
          {
            icon: '🆓',
            title: 'Free to Participate',
            desc: 'Existing users can join simply by sharing their personal referral links — no extra cost.',
          },
          {
            icon: '🏅',
            title: 'Multiple Prize Tiers',
            desc: 'The event offers several reward positions, allowing more participants to qualify for prizes.',
          },
          {
            icon: '⏰',
            title: 'Limited-Time Offer',
            desc: 'This special promotion is only available during the event period — a unique opportunity.',
          },
        ],
      },
      { type: 'heading2', text: 'Tips to Increase Your Referrals' },
      {
        type: 'bullets',
        items: [
          '✔ Share your referral link on WhatsApp groups and family chats.',
          '✔ Promote your invite code on social media platforms.',
          '✔ Explain the event benefits clearly to potential new members.',
          '✔ Stay active throughout the full event duration.',
          '✔ Track your referral progress and leaderboard position regularly.',
          '✔ Focus on genuine and active referrals for best results.',
        ],
      },
      { type: 'heading2', text: 'Important Terms & Conditions' },
      {
        type: 'bullets',
        items: [
          'Participants must follow all YaarWin platform rules at all times.',
          'Only valid and verified referrals may count toward leaderboard rankings.',
          'Duplicate or fraudulent accounts may result in disqualification.',
          'Event prizes are subject to verification and approval.',
          'YaarWin reserves the right to modify event rules if necessary.',
          'Winners will be announced after the event officially concludes.',
        ],
      },
      {
        type: 'note',
        text: 'Terms & Conditions Apply. Invite More, Win More. The event was active from March 1 to April 30, 2026.',
      },
      {
        type: 'cta',
        label: '🚀 Join YaarWin — Start Referring Now',
        href: 'https://www.yaarwin14.com/#/register?invitationCode=67868138834',
      },
    ],
  },

  /* ─────────────────────────────────────────────
     4. TELEGRAM CHANNEL
  ───────────────────────────────────────────── */
  {
    slug: 'yaarwin-telegram-channel',
    title: 'YaarWin Telegram Channel 2026 – Stay Updated',
    metaTitle: 'YaarWin Telegram Channel 2026 – Updates, Bonus & Gift Codes',
    metaDescription:
      'Learn about the YaarWin Telegram Channel 2026. Find out how to join, what updates you get, and important safety tips to protect yourself online.',
    date: 'June 4, 2026',
    tag: 'Updates',
    readTime: '2 min read',
    sections: [
      {
        type: 'intro',
        text: 'Many users search for the YaarWin Telegram Channel to receive quick updates related to platform announcements, bonus offers, event notifications, gift codes, and gaming-related information. Telegram channels are often used to share updates instantly with active users.',
      },
      { type: 'heading2', text: 'What is YaarWin Telegram Channel?' },
      {
        type: 'paragraph',
        text: 'The YaarWin Telegram Channel is a community or update channel where users may find useful information about the platform including latest bonus updates, gift code announcements, referral program news, platform events and promotions, APK download links, login and registration guides, and new feature announcements.',
      },
      { type: 'heading2', text: 'How to Join YaarWin Telegram Channel' },
      {
        type: 'steps',
        items: [
          'Download and install the Telegram application on your mobile device.',
          'Open Telegram and use the search bar to look for the latest YaarWin Telegram Channel.',
          'Select the correct official community or update channel from the search results.',
          'Tap the Join button to start receiving future updates automatically.',
        ],
      },
      {
        type: 'heading2',
        text: 'Benefits of Joining YaarWin Telegram Channel',
      },
      {
        type: 'feature_grid',
        items: [
          {
            icon: '🔔',
            title: 'Instant Notifications',
            desc: 'Receive fast update notifications about events, bonuses, and platform news.',
          },
          {
            icon: '🎁',
            title: 'Gift Code Updates',
            desc: 'Some channels post exclusive gift codes and reward announcements for members.',
          },
          {
            icon: '📥',
            title: 'APK & Login Guides',
            desc: 'Get the latest APK download links and login guides when they are updated.',
          },
          {
            icon: '🎪',
            title: 'Event Announcements',
            desc: 'Be the first to know about upcoming events and referral campaigns.',
          },
        ],
      },
      { type: 'heading2', text: '⚠️ Important Safety Tips' },
      {
        type: 'bullets',
        items: [
          '🔍 Always verify the authenticity of the channel before joining.',
          '🚫 Never share your OTP codes with anyone on Telegram.',
          '🔐 Avoid sharing your password or account credentials in any group.',
          '🏦 Protect your banking information at all times.',
          '⚠️ Beware of fake admin accounts asking for money or personal details.',
          '✅ Only trust information from the official YaarWin website.',
        ],
      },
      { type: 'heading2', text: 'Is YaarWin Telegram Channel Free?' },
      {
        type: 'paragraph',
        text: 'Most Telegram channels are generally free to join. However, users should always verify information from trusted official sources before participating in any external activities or following links shared in Telegram groups.',
      },
      { type: 'heading2', text: 'Frequently Asked Questions' },
      {
        type: 'faq',
        items: [
          {
            q: 'What is YaarWin Telegram used for?',
            a: 'It is commonly used to share updates, announcements, gift codes, and platform information with active users.',
          },
          {
            q: 'Can I receive bonus updates on Telegram?',
            a: 'Some official or affiliated channels may post event and reward information for members.',
          },
          {
            q: 'Is joining the Telegram channel free?',
            a: 'Yes, Telegram channels are generally free to access and join.',
          },
          {
            q: 'How do I stay safe on Telegram?',
            a: 'Never share your OTP, password, or banking details. Only trust links from the official YaarWin website.',
          },
        ],
      },
      {
        type: 'note',
        text: 'Use Telegram communities responsibly. Always verify sources and avoid sharing personal details. This website does not operate any Telegram channel — always verify from official sources.',
      },
      {
        type: 'cta',
        label: '🎮 Register on YaarWin — Play Now',
        href: 'https://www.yaarwin14.com/#/register?invitationCode=67868138834',
      },
    ],
  },
]

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug)
}
