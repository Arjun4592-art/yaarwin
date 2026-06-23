'use client'

import Link from 'next/link'

const footerLinks = {
  Pages: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Responsible Gaming', href: '/responsible-gaming' },
    { label: 'Contact Us', href: '/contact' },
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

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-yw-black-soft)',
        borderTop: '1px solid var(--color-yw-black-border)',
        paddingTop: 64,
        paddingBottom: 32,
        fontFamily: 'var(--yw-font-body)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link
              href='/'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                textDecoration: 'none',
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background:
                    'linear-gradient(135deg, var(--color-yw-green) 0%, var(--color-yw-green-dark) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 800,
                  fontSize: 15,
                  color: '#000',
                  boxShadow: 'var(--yw-shadow-green)',
                }}
              >
                YW
              </span>
              <span
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--color-yw-white)',
                }}
              >
                Yaar<span style={{ color: 'var(--color-yw-green)' }}>Win</span>
              </span>
            </Link>
            <p
              style={{
                fontSize: 13,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.7,
                marginBottom: 20,
                maxWidth: 240,
              }}
            >
              India's trusted online gaming platform. Play Wingo, K3, 5D,
              Aviator & more.
            </p>
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
              style={{ padding: '10px 20px', fontSize: 13, borderRadius: 8 }}
            >
              Register Free →
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'var(--color-yw-green)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        fontSize: 13,
                        color: 'var(--color-yw-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color =
                          'var(--color-yw-white)')
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color =
                          'var(--color-yw-text-secondary)')
                      }
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
            <h4
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 600,
                fontSize: 13,
                color: 'var(--color-yw-green)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 16,
              }}
            >
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href='mailto:support@yaarwin.game'
                style={{
                  fontSize: 13,
                  color: 'var(--color-yw-text-secondary)',
                  textDecoration: 'none',
                }}
              >
                📧 support@yaarwin.game
              </a>
              <a
                href='https://yaarwin.game'
                style={{
                  fontSize: 13,
                  color: 'var(--color-yw-text-secondary)',
                  textDecoration: 'none',
                }}
              >
                🌐 yaarwin.game
              </a>
            </div>

            {/* App info */}
            <div
              style={{
                marginTop: 24,
                padding: '14px 16px',
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 10,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: 'var(--color-yw-text-muted)',
                  marginBottom: 6,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                App Details
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.8,
                }}
              >
                Version: 1.5 &nbsp;·&nbsp; 12 MB
                <br />
                Invite Code:{' '}
                <span
                  style={{ color: 'var(--color-yw-green)', fontWeight: 600 }}
                >
                  24348109027
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: 'var(--color-yw-black-border)',
            marginBottom: 24,
          }}
        />

        {/* Disclaimer */}
        <p
          style={{
            fontSize: 11,
            color: 'var(--color-yw-text-muted)',
            lineHeight: 1.7,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          <strong style={{ color: 'var(--color-yw-text-secondary)' }}>
            Disclaimer:
          </strong>{' '}
          This website is for informational and educational purposes only. We do
          not operate or own any gaming platform. Users must be 18+ to
          participate. Online prediction games involve financial risk — play
          responsibly.
        </p>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: 'var(--color-yw-text-muted)' }}>
            © 2026 YaarWin Game. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 20 }}>
            {[
              { label: 'Responsible Gaming', href: '/responsible-gaming' },
              { label: 'About Us', href: '/about-us' },
              { label: 'Contact', href: '/contact-us' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 12,
                  color: 'var(--color-yw-text-muted)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    'var(--color-yw-green)')
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    'var(--color-yw-text-muted)')
                }
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
