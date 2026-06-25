'use client'

import Link from 'next/link'

const footerLinks = {
  Pages: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Responsible Gaming', href: '/responsible-gaming' },
    { label: 'Contact Us', href: '/contact-us' },
  ],
  Blogs: [
    {
      label: 'Grand Referral Event',
      href: '/blogs/yaarwin-grand-referral-event',
    },
    { label: 'Telegram Channel', href: '/blogs/yaarwin-telegram-channel' },
    { label: 'App Download APK', href: '/blogs/yaarwin-game-app-download' },
    { label: 'Login Guide', href: '/blogs/yaar-win-login' },
  ],
  Games: [
    { label: 'Wingo Colour Prediction', href: '/#wingo' },
    { label: 'K3 & 5D Games', href: '/#games' },
    { label: 'Aviator', href: '/#games' },
    { label: 'Slots & Casino', href: '/#games' },
  ],
}

const bottomLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact-us' },
]

export default function Footer() {
  return (
    <footer className='bg-[var(--color-yw-white-tint)] border-t border-[var(--color-yw-white-border)] pt-16 pb-8 font-[var(--yw-font-body)]'>
      <div className='max-w-[1200px] mx-auto px-6'>
        {/* ── Top grid ── */}
        <div className='grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-12 mb-14'>
          {/* Brand */}
          <div>
            <Link
              href='/'
              className='inline-flex items-center gap-2.5 no-underline mb-4'
            >
              <span className='w-9 h-9 rounded-[10px] flex items-center justify-center font-[var(--yw-font-heading)] font-extrabold text-[15px] text-[#003d18] bg-gradient-to-br from-[#00c853] to-[#69f0ae] shadow-[var(--yw-shadow-green-sm)]'>
                YW
              </span>
              <span className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)]'>
                Yaar<span className='text-[var(--color-yw-green)]'>Win</span>
              </span>
            </Link>

            <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.7] mb-5 max-w-[240px]'>
              India's trusted online gaming platform. Play Wingo, K3, 5D,
              Aviator &amp; more.
            </p>

            <a
              href='https://www.yaarwin14.com/#/register?invitationCode=67868138834'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary btn-sm'
            >
              Register Free →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className='font-[var(--yw-font-heading)] font-semibold text-[13px] text-[var(--color-yw-green)] tracking-[0.08em] uppercase mb-4'>
                {title}
              </h4>
              <ul className='flex flex-col gap-2.5'>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className='text-[13px] text-[var(--color-yw-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--color-yw-text-primary)]'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className='font-[var(--yw-font-heading)] font-semibold text-[13px] text-[var(--color-yw-green)] tracking-[0.08em] uppercase mb-4'>
              Contact
            </h4>
            <div className='flex flex-col gap-3 mb-6'>
              <a
                href='mailto:support@yaarwiner.com'
                className='text-[13px] text-[var(--color-yw-text-muted)] no-underline hover:text-[var(--color-yw-text-primary)] transition-colors duration-200'
              >
                📧 support@yaarwiner.com
              </a>
              <a
                href='https://yaarwiner.com'
                className='text-[13px] text-[var(--color-yw-text-muted)] no-underline hover:text-[var(--color-yw-text-primary)] transition-colors duration-200'
              >
                🌐 yaarwiner.com
              </a>
            </div>

            {/* App info card */}
            <div className='p-3.5 bg-[var(--color-yw-white)] border border-[var(--color-yw-white-border)] rounded-[10px]'>
              <div className='text-[11px] text-[var(--color-yw-text-hint)] font-semibold uppercase tracking-[0.06em] mb-1.5'>
                App Details
              </div>
              <div className='text-[12px] text-[var(--color-yw-text-muted)] leading-[1.8]'>
                Version: 1.5 &nbsp;·&nbsp; 12 MB
                <br />
                Invite Code:{' '}
                <span className='text-[var(--color-yw-green)] font-semibold'>
                  67868138834
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <hr className='divider' />

        {/* ── Disclaimer ── */}
        <p className='text-[11px] text-[var(--color-yw-text-hint)] leading-[1.7] mb-5 max-w-[900px]'>
          <strong className='text-[var(--color-yw-text-muted)]'>
            Disclaimer:
          </strong>{' '}
          This website is for informational and educational purposes only. We do
          not operate or own any gaming platform. Users must be 18+ to
          participate. Online prediction games involve financial risk — play
          responsibly.
        </p>

        {/* ── Bottom bar ── */}
        <div className='flex flex-wrap items-center justify-between gap-y-3 gap-x-4'>
          <p className='text-[12px] text-[var(--color-yw-text-hint)]'>
            © 2026 YaarWin Game. All rights reserved.
          </p>
          <div className='flex flex-wrap gap-x-5 gap-y-2'>
            {bottomLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className='text-[12px] text-[var(--color-yw-text-hint)] no-underline hover:text-[var(--color-yw-green)] transition-colors duration-200'
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
