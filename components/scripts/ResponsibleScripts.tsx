'use client'

import Link from 'next/link'
import { responsibleGamingMetadata } from '@/lib/seo/metadata'
export const metadata = responsibleGamingMetadata

const guidelines = [
  {
    icon: '💰',
    title: 'Set a Budget Before Playing',
    desc: 'Always decide your spending limit before you start playing. Do not exceed your budget under any condition. Treat gaming as entertainment, not an investment.',
  },
  {
    icon: '⏱️',
    title: 'Manage Your Playing Time',
    desc: 'Avoid spending long hours continuously on YaarWin Game. Take regular breaks and keep gaming balanced with your daily routine and responsibilities.',
  },
  {
    icon: '🎉',
    title: 'Play for Entertainment Only',
    desc: 'Use YaarWin Game for fun and entertainment. Do not treat it as a fixed income source or guaranteed earning method — winnings are never guaranteed.',
  },
  {
    icon: '🚫',
    title: 'Do Not Chase Losses',
    desc: 'Never increase your playing amount just to recover previous losses. Chasing losses can increase financial risk significantly and lead to further setbacks.',
  },
  {
    icon: '🧘',
    title: 'Stay Emotionally Balanced',
    desc: 'Avoid playing when you are angry, stressed, tired, or emotionally disturbed. A calm and clear mindset helps you make better decisions while playing.',
  },
  {
    icon: '🔐',
    title: 'Keep Your Account Secure',
    desc: 'Do not share your mobile number, password, OTP, or account details with anyone. Always keep your login information private and use strong passwords.',
  },
  {
    icon: '🔞',
    title: 'Follow Age Restrictions',
    desc: 'YaarWin Game is strictly intended for users aged 18 years or above. Underage users should not register or participate in any gaming activities.',
  },
]

const breakSigns = [
  'You are spending more than your planned budget',
  'You are playing for too many hours continuously',
  'You feel stress, pressure, or frustration while playing',
  'You are trying to recover losses quickly by increasing bets',
  'Gaming is affecting your studies, work, or personal life',
  'You feel compelled to play even when you do not want to',
]

const safeTips = [
  'Start with a small amount',
  'Set daily or weekly spending limits',
  'Never borrow money to play',
  'Do not share your account with others',
  'Avoid playing continuously for long sessions',
  'Stop immediately if gaming feels stressful',
]

export default function ResponsibleScripts() {
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
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontSize: 12,
              color: 'var(--color-yw-green)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            Play Smart
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
            Responsible Gaming on{' '}
            <span style={{ color: 'var(--color-yw-green)' }}>YaarWin</span>
          </h1>
          <p
            style={{
              fontSize: 16,
              color: 'var(--color-yw-text-secondary)',
              lineHeight: 1.8,
              maxWidth: 580,
              margin: '0 auto',
            }}
          >
            Playing on YaarWin Game should always be safe, controlled, and
            enjoyable. Online gaming can be entertaining, but it is important to
            play with responsibility, manage your time, and never take
            unnecessary financial risks.
          </p>
        </div>
      </section>

      {/* What is Responsible Gaming */}
      <section
        style={{
          padding: '80px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              background: 'var(--color-yw-black-card)',
              border: '1px solid rgba(0,200,83,0.2)',
              borderRadius: 20,
              padding: '36px 40px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 22,
                color: 'var(--color-yw-white)',
                marginBottom: 16,
              }}
            >
              🧠 What is Responsible Gaming?
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.8,
                marginBottom: 16,
              }}
            >
              Responsible gaming means playing in a safe and balanced way. It
              includes setting limits, understanding risk, avoiding emotional
              decisions, and knowing when to stop.
            </p>
            <p
              style={{
                fontSize: 15,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.8,
              }}
            >
              Every user should play with a clear mind and only use money they
              can comfortably afford to lose. At YaarWin Game, users should
              treat gaming as a form of entertainment — not as a guaranteed
              source of income.
            </p>
          </div>
        </div>
      </section>

      {/* Guidelines */}
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
              Guidelines
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
              Responsible Gaming Guidelines
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 20,
            }}
          >
            {guidelines.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: '1px solid var(--color-yw-black-border)',
                  borderRadius: 14,
                  padding: '24px 22px',
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
                <div style={{ fontSize: 30, marginBottom: 12 }}>{icon}</div>
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
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs + Safe Tips */}
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
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: 32,
            }}
          >
            {/* Signs */}
            <div
              style={{
                background: 'rgba(239,83,80,0.06)',
                border: '1px solid rgba(239,83,80,0.2)',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#ef5350',
                  marginBottom: 20,
                }}
              >
                🚨 Signs You Should Take a Break
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {breakSigns.map((sign, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                    }}
                  >
                    <span
                      style={{ color: '#ef5350', flexShrink: 0, marginTop: 1 }}
                    >
                      ✗
                    </span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe Tips */}
            <div
              style={{
                background: 'rgba(0,200,83,0.06)',
                border: '1px solid rgba(0,200,83,0.2)',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: 'var(--color-yw-green)',
                  marginBottom: 20,
                }}
              >
                ✅ Safe Gaming Tips
              </h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {safeTips.map((tip, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--color-yw-green)',
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      ✓
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section
        style={{ padding: '64px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(255,179,0,0.06)',
              border: '1px solid rgba(255,179,0,0.2)',
              borderRadius: 16,
              padding: '28px 32px',
              marginBottom: 32,
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 600,
                fontSize: 14,
                color: 'var(--color-yw-warning)',
                marginBottom: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              ⚠️ Important Disclaimer
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.8,
              }}
            >
              YaarWin Game involves an element of skill and chance.
              Participation carries financial risk. Users must be 18 years or
              older. Excessive gaming can be harmful — set your limits and play
              responsibly at all times. If gaming is impacting your mental
              health, financial situation, or personal relationships, please
              seek professional support immediately.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(0,200,83,0.05)',
              border: '1px solid rgba(0,200,83,0.15)',
              borderRadius: 16,
              padding: '28px 32px',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 18,
                color: 'var(--color-yw-white)',
                marginBottom: 12,
              }}
            >
              🌟 Final Words
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.8,
                marginBottom: 20,
              }}
            >
              Responsible gaming is about staying in control. YaarWin Game
              should be used for entertainment only, with proper limits and
              awareness. Play smart, protect your account, manage your budget,
              and always remember that your safety comes first.
            </p>
            <Link
              href='/'
              className='btn btn-primary'
              style={{
                padding: '12px 24px',
                fontSize: 14,
                borderRadius: 10,
                textDecoration: 'none',
                display: 'inline-flex',
              }}
            >
              Play Responsibly — Get Started →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
