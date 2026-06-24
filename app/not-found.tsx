import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found | YaarWin Game',
  description:
    'The page you are looking for does not exist. Go back to YaarWin Game homepage.',
}

const quickLinks = [
  { label: 'APK Download', href: '/blogs/yaarwin-game-app-download' },
  { label: 'Login Guide', href: '/blogs/yaar-win-login' },
  { label: 'Referral Event', href: '/blogs/yaarwin-grand-referral-event' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function NotFound() {
  return (
    <div className='font-[var(--yw-font-body)] text-[var(--color-yw-text-primary)] bg-[var(--color-yw-off-white)] min-h-screen flex items-center justify-center px-6 pt-[120px] pb-6 relative overflow-hidden'>
      {/* Background radial glow */}
      <div
        aria-hidden
        className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(0,200,83,0.08)_0%,transparent_70%)]'
      />

      {/* Dot grid */}
      <div
        aria-hidden
        className='absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(0,200,83,0.07)_1px,transparent_1px)] [background-size:40px_40px]'
      />

      {/* Content */}
      <div className='relative text-center max-w-[560px] w-full'>
        {/* 404 number */}
        <div className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(6rem,20vw,10rem)] leading-none tracking-[-0.04em] select-none mb-2 bg-gradient-to-br from-[rgba(0,200,83,0.9)] to-[rgba(0,200,83,0.2)] bg-clip-text text-transparent'>
          404
        </div>

        {/* Icon */}
        <div className='text-[48px] mb-5'>🎮</div>

        {/* Heading */}
        <h1 className='font-[var(--yw-font-heading)] font-bold text-[clamp(1.4rem,4vw,2rem)] text-[var(--color-yw-text-primary)] mb-4 tracking-[-0.02em]'>
          Page Not Found
        </h1>

        {/* Description */}
        <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.75] max-w-[420px] mx-auto mb-9'>
          Looks like this page went offline. The link may be broken or the page
          may have been removed. Head back to the homepage and continue playing.
        </p>

        {/* Buttons */}
        <div className='flex flex-wrap gap-3 justify-center'>
          <Link
            href='/'
            className='btn btn-primary px-7 py-3 text-[14px] rounded-[10px] no-underline'
          >
            🏠 Back to Home
          </Link>
          <Link
            href='/blogs'
            className='inline-flex items-center px-6 py-3 text-[14px] rounded-[10px] border border-[var(--color-yw-white-border)] text-[var(--color-yw-text-secondary)] no-underline transition-colors duration-200 hover:border-[var(--color-yw-green)] hover:text-[var(--color-yw-green)]'
          >
            📖 Browse Blogs
          </Link>
        </div>

        {/* Quick links */}
        <div className='mt-12 pt-7 border-t border-[var(--color-yw-white-border)] flex flex-wrap gap-4 justify-center'>
          {quickLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className='text-[13px] text-[var(--color-yw-green)] no-underline opacity-75 hover:opacity-100 transition-opacity duration-200'
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
