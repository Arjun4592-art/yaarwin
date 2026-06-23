'use client'
import Link from 'next/link'

import { aboutMetadata } from '@/lib/seo/metadata'
export const metadata = aboutMetadata

const whatWeProvide = [
  {
    icon: '📋',
    title: 'Login & Registration Guides',
    desc: 'Step-by-step guides to help new and existing users register or log in to Yaar Win quickly and securely.',
  },
  {
    icon: '📥',
    title: 'APK Download & Installation',
    desc: 'Complete walkthrough for downloading and installing the latest Yaar Win APK from the official website.',
  },
  {
    icon: '🎮',
    title: 'Game Information',
    desc: 'Detailed information about popular games like Wingo, K3, 5D, Slots, and Aviator available on the platform.',
  },
  {
    icon: '💳',
    title: 'Deposit & Withdrawal Guides',
    desc: 'Easy-to-follow guides on how to add funds and withdraw earnings from your Yaar Win wallet.',
  },
  {
    icon: '🎁',
    title: 'Referral & Gift Code Info',
    desc: 'Updates about the referral program, gift codes, and other bonus features available on YaarWin.',
  },
  {
    icon: '📰',
    title: 'Platform News & Updates',
    desc: 'Latest news, events, and announcements related to the YaarWin gaming platform.',
  },
]

export default function AboutScripts() {
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
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.12) 0%, transparent 70%), var(--color-yw-black)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontSize: 12,
              color: 'var(--color-yw-green)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Who We Are
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
            About{' '}
            <span style={{ color: 'var(--color-yw-green)' }}>YaarWin</span> Game
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'var(--color-yw-text-secondary)',
              lineHeight: 1.8,
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            Welcome to YaarWin Game — your trusted platform for getting the
            latest information about online gaming apps, login processes, and
            game guides. Our goal is simple: provide users with clear,
            easy-to-understand, and updated information.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 40,
            }}
          >
            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 16,
                padding: 32,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>🎯</div>
              <h2
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--color-yw-white)',
                  marginBottom: 12,
                }}
              >
                Our Purpose
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                We are an informational website only. We do not operate or own
                any gaming platform. Our content is created to guide users and
                provide helpful knowledge so they can understand how to use the
                platform safely and easily.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid rgba(0,200,83,0.2)',
                borderRadius: 16,
                padding: 32,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>🛡️</div>
              <h2
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--color-yw-white)',
                  marginBottom: 12,
                }}
              >
                Our Commitment
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                We encourage all users to play responsibly and use online
                platforms with awareness. We never ask for personal or financial
                details, and we always encourage players to verify information
                from official sources before taking any action.
              </p>
            </div>

            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 16,
                padding: 32,
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>📚</div>
              <h2
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 20,
                  color: 'var(--color-yw-white)',
                  marginBottom: 12,
                }}
              >
                What We Do
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                }}
              >
                We focus on helping users understand how the platform works —
                from registration and APK download to deposits, withdrawals, and
                referral programs — without any confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section
        style={{ padding: '80px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-green)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Our Content
            </span>
            <h2
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.5rem,3vw,2.2rem)',
                color: 'var(--color-yw-white)',
                marginTop: 8,
                letterSpacing: '-0.02em',
              }}
            >
              What We Provide
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {whatWeProvide.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: '1px solid var(--color-yw-black-border)',
                  borderRadius: 14,
                  padding: 24,
                  transition: 'border-color 0.25s, transform 0.25s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(0,200,83,0.3)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-yw-black-border)'
                  el.style.transform = 'none'
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--yw-font-heading)',
                    fontWeight: 600,
                    fontSize: 15,
                    color: 'var(--color-yw-white)',
                    marginBottom: 8,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: 'var(--color-yw-text-secondary)',
                    lineHeight: 1.65,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section
        style={{
          padding: '64px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(255,179,0,0.06)',
              border: '1px solid rgba(255,179,0,0.2)',
              borderRadius: 16,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 600,
                fontSize: 16,
                color: 'var(--color-yw-warning)',
                marginBottom: 16,
              }}
            >
              ⚠️ Important Note
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                'We do not ask for any personal or financial details.',
                'We do not provide direct gaming services.',
                'Users should always verify information from official sources before taking action.',
                'This website is strictly for users aged 18 years and above.',
              ].map((note, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 14,
                    color: 'var(--color-yw-text-secondary)',
                  }}
                >
                  <span
                    style={{ color: 'var(--color-yw-warning)', flexShrink: 0 }}
                  >
                    →
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap',
              marginTop: 32,
              justifyContent: 'center',
            }}
          >
            <Link
              href='/responsible-gaming'
              className='btn btn-primary'
              style={{
                padding: '12px 24px',
                fontSize: 14,
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-flex',
              }}
            >
              Responsible Gaming →
            </Link>
            <Link
              href='/contact-us'
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                fontSize: 14,
                borderRadius: 10,
                border: '1.5px solid var(--color-yw-black-border)',
                color: 'var(--color-yw-text-secondary)',
                textDecoration: 'none',
              }}
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
