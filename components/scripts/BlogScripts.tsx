'use client'

import Link from 'next/link'

const blogs = [
  {
    slug: 'yaarwin-game-app-download',
    date: 'June 19, 2026',
    tag: 'App Guide',
    title: 'YaarWin Game App Download APK Latest Version (2026)',
    excerpt:
      'The YaarWin Game App (2026 latest version) is becoming popular among users who enjoy fast-paced online games like Wingo, K3, 5D, Slots, and Aviator. With a smooth interface, quick gameplay, and instant results, the app provides an engaging experience for both beginners and regular players.',
    readTime: '3 min read',
  },
  {
    slug: 'yaar-win-login',
    date: 'June 19, 2026',
    tag: 'Login Guide',
    title: 'Yaar Win Login – Complete Guide to Sign In',
    excerpt:
      'The Yaar Win Login process is simple, fast, and secure. Whether you are a new user or an existing player, you can access your account within seconds using your registered mobile number and password. This guide will help you understand how to log in and solve common login issues.',
    readTime: '2 min read',
  },
  {
    slug: 'yaarwin-grand-referral-event',
    date: 'June 7, 2026',
    tag: 'Event',
    title: 'YaarWin Grand Referral Event 2026 – Win Mercedes & Gold',
    excerpt:
      'The YaarWin Grand Referral Event 2026 is one of the biggest promotional campaigns launched by YaarWin, giving members the opportunity to earn premium rewards simply by inviting friends to join the platform. Prizes include a Mercedes-Benz A-Class Limousine worth ₹55 Lakh.',
    readTime: '3 min read',
  },
  {
    slug: 'yaarwin-telegram-channel',
    date: 'June 4, 2026',
    tag: 'Updates',
    title: 'YaarWin Telegram Channel 2026 – Stay Updated',
    excerpt:
      'Many users search for the YaarWin Telegram Channel to receive quick updates related to platform announcements, bonus offers, event notifications, gift codes, and gaming-related information. Telegram channels are often used to share updates instantly with active users.',
    readTime: '2 min read',
  },
]

const tagColors: Record<string, string> = {
  'App Guide': '#00c853',
  'Login Guide': '#29b6f6',
  Event: '#ffb300',
  Updates: '#ab47bc',
}

export default function BlogsScripts() {
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
            Knowledge Hub
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
            Yaar Win{' '}
            <span style={{ color: 'var(--color-yw-green)' }}>Blogs</span> &
            Guides
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
            Stay updated with the latest guides, event announcements, APK
            download instructions, and platform news for YaarWin Game.
          </p>
        </div>
      </section>

      {/* Blog cards */}
      <section
        style={{
          padding: '80px 24px 100px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
              gap: 24,
            }}
          >
            {blogs.map(({ slug, date, tag, title, excerpt, readTime }) => {
              const color = tagColors[tag] || 'var(--color-yw-green)'
              return (
                <Link
                  key={slug}
                  href={`/blogs/${slug}`}
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  <article
                    style={{
                      background: 'var(--color-yw-black-card)',
                      border: '1px solid var(--color-yw-black-border)',
                      borderRadius: 16,
                      padding: 28,
                      height: '100%',
                      transition:
                        'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 14,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = `${color}40`
                      el.style.boxShadow = `0 8px 32px ${color}18`
                      el.style.transform = 'translateY(-5px)'
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement
                      el.style.borderColor = 'var(--color-yw-black-border)'
                      el.style.boxShadow = 'none'
                      el.style.transform = 'translateY(0)'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 10px',
                          borderRadius: 999,
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: '0.04em',
                          background: `${color}18`,
                          color,
                          border: `1px solid ${color}35`,
                        }}
                      >
                        {tag}
                      </span>
                      <span
                        style={{
                          fontSize: 12,
                          color: 'var(--color-yw-text-muted)',
                        }}
                      >
                        {readTime}
                      </span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--yw-font-heading)',
                        fontWeight: 700,
                        fontSize: 16,
                        color: 'var(--color-yw-white)',
                        lineHeight: 1.4,
                        margin: 0,
                      }}
                    >
                      {title}
                    </h2>

                    <p
                      style={{
                        fontSize: 13,
                        color: 'var(--color-yw-text-secondary)',
                        lineHeight: 1.7,
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {excerpt}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 4,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: 'var(--color-yw-text-muted)',
                        }}
                      >
                        {date}
                      </span>
                      <span style={{ fontSize: 13, color, fontWeight: 600 }}>
                        Read More →
                      </span>
                    </div>
                  </article>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
