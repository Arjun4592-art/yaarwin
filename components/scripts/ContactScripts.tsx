'use client'

import Link from 'next/link'

export default function ContactScripts() {
  return (
    <div
      style={{
        fontFamily: 'var(--yw-font-body)',
        color: 'var(--color-yw-text-primary)',
        background: 'var(--color-yw-black)',
      }}
    >
      {/* Hero */}
      <section
        style={{
          padding: '140px 24px 80px',
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.1) 0%, transparent 70%), var(--color-yw-black)',
        }}
      >
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontSize: 12,
              color: 'var(--color-yw-green)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Get In Touch
          </span>
          <h1
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              lineHeight: 1.2,
              color: 'var(--color-yw-white)',
              marginTop: 12,
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Contact <span style={{ color: 'var(--color-yw-green)' }}>Us</span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'var(--color-yw-text-secondary)',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            If you have any questions, suggestions, or need assistance, feel
            free to get in touch with us. We are here to help and provide the
            best possible support.
          </p>
        </div>
      </section>

      {/* Contact card */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 24,
            }}
          >
            {/* Email */}
            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid rgba(0,200,83,0.2)',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(0,200,83,0.1)',
                  border: '1px solid rgba(0,200,83,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                }}
              >
                📧
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-yw-green)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 6,
                  }}
                >
                  Email Support
                </div>
                <a
                  href='mailto:support@yaarwin.game'
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--color-yw-white)',
                    textDecoration: 'none',
                    fontFamily: 'var(--yw-font-heading)',
                  }}
                >
                  support@yaarwin.game
                </a>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--color-yw-text-secondary)',
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  For general queries, information requests, and support related
                  to website content.
                </p>
              </div>
            </div>

            {/* Website */}
            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(41,182,246,0.1)',
                  border: '1px solid rgba(41,182,246,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                }}
              >
                🌐
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: '#29b6f6',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 6,
                  }}
                >
                  Official Website
                </div>
                <a
                  href='https://yaarwin.game'
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: 'var(--color-yw-white)',
                    textDecoration: 'none',
                    fontFamily: 'var(--yw-font-heading)',
                  }}
                >
                  yaarwin.game
                </a>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--color-yw-text-secondary)',
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  Visit the official YaarWin platform for registration, login,
                  and gameplay access.
                </p>
              </div>
            </div>

            {/* Invite Code */}
            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 12,
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(0,200,83,0.08)',
                  border: '1px solid rgba(0,200,83,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                }}
              >
                🎁
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: 'var(--color-yw-green)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 6,
                  }}
                >
                  Invite Code
                </div>
                <span
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: 'var(--color-yw-green)',
                    fontFamily: 'var(--yw-font-heading)',
                    letterSpacing: '0.05em',
                  }}
                >
                  24348109027
                </span>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--color-yw-text-secondary)',
                    marginTop: 6,
                    lineHeight: 1.6,
                  }}
                >
                  Use this invite code during registration to unlock your
                  welcome bonus of up to ₹100.
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: 32,
              padding: '24px 28px',
              background: 'rgba(255,179,0,0.05)',
              border: '1px solid rgba(255,179,0,0.18)',
              borderRadius: 14,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.75,
              }}
            >
              <strong style={{ color: 'var(--color-yw-warning)' }}>
                ℹ️ Please Note:
              </strong>{' '}
              This website is an informational platform only. We do not operate
              the YaarWin gaming platform directly. For account-related issues
              such as deposits, withdrawals, and game problems, please contact
              the official YaarWin support through the app or official website.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section
        style={{ padding: '64px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 700,
              fontSize: 22,
              color: 'var(--color-yw-white)',
              marginBottom: 12,
            }}
          >
            Looking for something specific?
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--color-yw-text-secondary)',
              marginBottom: 32,
            }}
          >
            Browse our guides and blog posts for quick answers to common
            questions.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: 'center',
            }}
          >
            {[
              {
                label: 'APK Download Guide',
                href: '/blogs/yaarwin-game-app-download',
              },
              { label: 'Login Help', href: '/blogs/yaar-win-login' },
              {
                label: 'Referral Event',
                href: '/blogs/yaarwin-grand-referral-event',
              },
              { label: 'Responsible Gaming', href: '/responsible-gaming' },
              { label: 'About Us', href: '/about-us' },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  padding: '10px 18px',
                  borderRadius: 999,
                  fontSize: 13,
                  border: '1px solid var(--color-yw-black-border)',
                  color: 'var(--color-yw-text-secondary)',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-yw-green)'
                  el.style.color = 'var(--color-yw-green)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-yw-black-border)'
                  el.style.color = 'var(--color-yw-text-secondary)'
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
