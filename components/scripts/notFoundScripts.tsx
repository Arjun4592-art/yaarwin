import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found | YaarWin Game',
  description:
    'The page you are looking for does not exist. Go back to YaarWin Game homepage.',
}

export default function NotFound() {
  return (
    <div
      style={{
        fontFamily: 'var(--yw-font-body)',
        color: 'var(--color-yw-text-primary)',
        background: 'var(--color-yw-black)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0,200,83,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle, rgba(0,200,83,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          textAlign: 'center',
          maxWidth: 560,
        }}
      >
        {/* 404 big number */}
        <div
          style={{
            fontFamily: 'var(--yw-font-heading)',
            fontWeight: 800,
            fontSize: 'clamp(6rem, 20vw, 10rem)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            background:
              'linear-gradient(135deg, rgba(0,200,83,0.9) 0%, rgba(0,200,83,0.2) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 8,
            userSelect: 'none',
          }}
        >
          404
        </div>

        {/* Icon */}
        <div style={{ fontSize: 48, marginBottom: 20 }}>🎮</div>

        <h1
          style={{
            fontFamily: 'var(--yw-font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            color: 'var(--color-yw-white)',
            marginBottom: 16,
            letterSpacing: '-0.02em',
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: 15,
            color: 'var(--color-yw-text-secondary)',
            lineHeight: 1.75,
            marginBottom: 36,
            maxWidth: 420,
            margin: '0 auto 36px',
          }}
        >
          Looks like this page went offline. The link may be broken or the page
          may have been removed. Head back to the homepage and continue playing.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            justifyContent: 'center',
          }}
        >
          <Link
            href='/'
            className='btn btn-primary'
            style={{
              padding: '13px 28px',
              fontSize: 14,
              borderRadius: 10,
              textDecoration: 'none',
            }}
          >
            🏠 Back to Home
          </Link>
          <Link
            href='/blogs'
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '13px 24px',
              fontSize: 14,
              borderRadius: 10,
              border: '1.5px solid var(--color-yw-black-border)',
              color: 'var(--color-yw-text-secondary)',
              textDecoration: 'none',
            }}
          >
            📖 Browse Blogs
          </Link>
        </div>

        {/* Quick links */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: '1px solid var(--color-yw-black-border)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            justifyContent: 'center',
          }}
        >
          {[
            { label: 'APK Download', href: '/blogs/yaarwin-game-app-download' },
            { label: 'Login Guide', href: '/blogs/yaar-win-login' },
            {
              label: 'Referral Event',
              href: '/blogs/yaarwin-grand-referral-event',
            },
            { label: 'Contact Us', href: '/contact-us' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                fontSize: 13,
                color: 'var(--color-yw-green)',
                textDecoration: 'none',
                opacity: 0.8,
              }}
            >
              {label} →
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
