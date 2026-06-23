'use client'

import { useState } from 'react'
import Link from 'next/link'

const appDetails = [
  { label: 'App Name', value: 'Yaar Win' },
  { label: 'Latest Version', value: '1.5' },
  { label: 'Platform Type', value: 'Color Prediction, Jili, Limbo, Aviator' },
  { label: 'App Size', value: '12 MB' },
  { label: 'Official Website', value: 'yaarwin.game' },
  { label: 'Invite Code', value: '24348109027', highlight: true },
  { label: 'Welcome Bonus', value: 'Up to ₹100', highlight: true },
]

const gameCategories = [
  {
    icon: '🎯',
    title: 'Colour Prediction & Lottery',
    desc: 'Fast-result prediction and lottery-style games with quick rounds, simple choices, and instant gameplay.',
  },
  {
    icon: '⚡',
    title: 'Instant Play Entertainment',
    desc: 'Quick-play games perfect for short sessions with fast loading and smooth performance on all devices.',
  },
  {
    icon: '🎰',
    title: 'Slots & Casino Style',
    desc: 'Interactive slot and casino-style games with engaging layouts and smooth controls for all users.',
  },
  {
    icon: '🏆',
    title: 'Popular & Trending',
    desc: 'The most played and trending games on Yaar Win, ideal for quick entertainment and easy game selection.',
  },
  {
    icon: '🃏',
    title: 'Card & Arcade Gaming',
    desc: 'Card-based and arcade-style games designed for casual users who prefer simple and entertaining gameplay.',
  },
  {
    icon: '✈️',
    title: 'Aviator',
    desc: 'The popular crash-style game with real-time multipliers. Cash out at the right moment to win big.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Create Account',
    desc: 'Register using your mobile number in under 60 seconds.',
    image: '' /* add image path here e.g. '/images/step-1.png' */,
  },
  {
    step: '02',
    title: 'Verify OTP',
    desc: 'Complete secure OTP verification to activate your account.',
    image: '',
  },
  {
    step: '03',
    title: 'Add Funds',
    desc: 'Deposit easily via UPI, QR Code, or digital wallet.',
    image: '',
  },
  {
    step: '04',
    title: 'Choose a Game',
    desc: 'Pick from Wingo, K3, 5D, Slots, Rummy, or Aviator.',
    image: '',
  },
  {
    step: '05',
    title: 'Play & Win',
    desc: 'Place your prediction before each round timer ends.',
    image: '',
  },
  {
    step: '06',
    title: 'Withdraw',
    desc: 'Transfer your winnings directly to your bank or UPI.',
    image: '',
  },
]

const wingoLogic = [
  { color: '#00c853', label: 'Green', numbers: '1, 3, 7, 9' },
  { color: '#ef5350', label: 'Red', numbers: '2, 4, 6, 8' },
  { color: '#ab47bc', label: 'Violet', numbers: '0, 5' },
]

const referralPrizes = [
  {
    rank: '🎆 Grand Prize',
    prize: 'Mercedes-Benz A-Class Limousine',
    value: '₹55 Lakh',
  },
  {
    rank: '🥇 1st Prize',
    prize: 'Diamond Jewelry (2 Items)',
    value: '₹15 Lakh',
  },
  { rank: '🥈 2nd Prize', prize: 'Gold + Diamond Jewelry', value: '₹5 Lakh' },
  { rank: '🥉 3rd Prize', prize: 'Gold Bar 999.9', value: '₹2 Lakh' },
  { rank: '4th Prize', prize: 'Gold Necklace 999.9', value: '₹1 Lakh' },
  { rank: '5th Prize', prize: 'Gold Bracelet 999.9', value: '₹50,000' },
  { rank: '6th Prize', prize: 'Nothing Phone (256GB)', value: '₹30,000' },
]

const faqs = [
  {
    q: 'What is YaarWin?',
    a: 'YaarWin is an online gaming platform where users can explore games like Wingo, K3, 5D, Slots, and Aviator and earn real rewards.',
  },
  {
    q: 'Is YaarWin available on Google Play Store?',
    a: 'No, the Yaar Win app is not on Google Play Store. You need to download the APK directly from the official website.',
  },
  {
    q: 'What is the minimum withdrawal amount?',
    a: 'The minimum withdrawal starts from around ₹100, though it may vary depending on platform rules.',
  },
  {
    q: 'How many withdrawal requests can I make daily?',
    a: 'There may be a daily limit on withdrawal requests based on platform rules and account level.',
  },
  {
    q: 'What payment methods are available?',
    a: 'Common methods include UPI, bank transfer, QR Code, and digital wallets.',
  },
  {
    q: 'What is the YaarWin Invitation Code?',
    a: 'The YaarWin invitation code is 24348109027. Use it during registration to unlock bonus benefits.',
  },
  {
    q: 'Can I use multiple accounts?',
    a: 'No, using multiple accounts may violate platform rules and result in account suspension.',
  },
]

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{ padding: '96px 24px', background: 'var(--color-yw-black-soft)' }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
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
            FAQ
          </span>
          <h2
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem,3.5vw,2.2rem)',
              color: 'var(--color-yw-white)',
              marginTop: 8,
              letterSpacing: '-0.02em',
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={q}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: `1px solid ${isOpen ? 'rgba(0,200,83,0.35)' : 'var(--color-yw-black-border)'}`,
                  borderRadius: 12,
                  overflow: 'hidden',
                  transition: 'border-color 0.25s',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 16,
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--yw-font-heading)',
                      fontWeight: 600,
                      fontSize: 14,
                      color: 'var(--color-yw-white)',
                      lineHeight: 1.5,
                    }}
                  >
                    {q}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: 26,
                      height: 26,
                      borderRadius: '50%',
                      background: isOpen
                        ? 'rgba(0,200,83,0.15)'
                        : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${isOpen ? 'rgba(0,200,83,0.4)' : 'rgba(255,255,255,0.1)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isOpen
                        ? 'var(--color-yw-green)'
                        : 'var(--color-yw-text-muted)',
                      fontSize: 16,
                      fontWeight: 300,
                      transition:
                        'transform 0.25s, background 0.25s, border-color 0.25s',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? 300 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.35s ease',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      padding: '0 22px 18px',
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                      lineHeight: 1.75,
                      borderTop: '1px solid var(--color-yw-black-border)',
                      paddingTop: 14,
                    }}
                  >
                    {a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function HomeClient() {
  return (
    <div
      style={{
        fontFamily: 'var(--yw-font-body)',
        color: 'var(--color-yw-text-primary)',
        background: 'var(--color-yw-black)',
      }}
    >
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,200,83,0.18) 0%, transparent 70%), var(--color-yw-black)',
          padding: '120px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(0,200,83,0.06) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            width: '100%',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 56,
              alignItems: 'center',
            }}
          >
            {/* Left: Text */}
            <div className='animate-fade-in-up'>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(0,200,83,0.1)',
                  border: '1px solid rgba(0,200,83,0.25)',
                  borderRadius: 999,
                  padding: '6px 14px',
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: '50%',
                    background: 'var(--color-yw-green)',
                    display: 'inline-block',
                    animation: 'pulse 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    color: 'var(--color-yw-green)',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                  }}
                >
                  LIVE PLATFORM · 2026
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: 1.15,
                  color: 'var(--color-yw-white)',
                  marginBottom: 20,
                  letterSpacing: '-0.02em',
                }}
              >
                Yaar Win App Download —{' '}
                <span style={{ color: 'var(--color-yw-green)' }}>
                  Latest Version,
                </span>{' '}
                Bonus & Features
              </h1>

              <p
                style={{
                  fontSize: 16,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: 32,
                  maxWidth: 520,
                }}
              >
                Yaar Win is a popular online gaming platform that offers an
                easy-to-use interface, exciting rewards, and multiple
                entertainment options. Download the latest Yaar Win app, create
                an account, and explore various gaming features while enjoying a
                smooth mobile experience.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                <a
                  href='https://4yaarwin.com/#/register?invitationCode=24348109027'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary'
                  style={{
                    padding: '14px 28px',
                    fontSize: 15,
                    borderRadius: 10,
                  }}
                >
                  🎮 Download & Register Free
                </a>
                <Link
                  href='/blogs/yaarwin-game-app-download'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '14px 24px',
                    fontSize: 15,
                    borderRadius: 10,
                    border: '1.5px solid var(--color-yw-black-border)',
                    color: 'var(--color-yw-text-secondary)',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                >
                  APK Guide →
                </Link>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 20,
                  marginTop: 36,
                }}
              >
                {[
                  '✅ Secure Login',
                  '⚡ Instant Withdrawal',
                  '🎁 Welcome Bonus ₹100',
                  '📱 12 MB APK',
                ].map((b) => (
                  <span
                    key={b}
                    style={{
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: App details card */}
            <div
              className='animate-slide-right'
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 20,
                padding: 28,
                boxShadow: 'var(--yw-shadow-card)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  marginBottom: 24,
                  paddingBottom: 20,
                  borderBottom: '1px solid var(--color-yw-black-border)',
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background:
                      'linear-gradient(135deg, var(--color-yw-green) 0%, var(--color-yw-green-dark) 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--yw-font-heading)',
                    fontWeight: 800,
                    fontSize: 22,
                    color: '#000',
                    boxShadow: 'var(--yw-shadow-green)',
                  }}
                >
                  YW
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--yw-font-heading)',
                      fontWeight: 700,
                      fontSize: 18,
                      color: 'var(--color-yw-white)',
                    }}
                  >
                    Yaar Win
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'var(--color-yw-text-secondary)',
                    }}
                  >
                    Online Gaming App
                  </div>
                </div>
              </div>

              {appDetails.map(({ label, value, highlight }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span
                    style={{
                      fontSize: 13,
                      color: 'var(--color-yw-text-muted)',
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: highlight
                        ? 'var(--color-yw-green)'
                        : 'var(--color-yw-text-primary)',
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}

              <a
                href='https://4yaarwin.com/#/register?invitationCode=24348109027'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary'
                style={{
                  width: '100%',
                  marginTop: 20,
                  padding: '12px',
                  fontSize: 14,
                  borderRadius: 10,
                  justifyContent: 'center',
                }}
              >
                Register Now →
              </a>
            </div>
          </div>
        </div>

        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        style={{
          padding: '96px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-green)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Quick Start
            </span>
            <h2
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
                color: 'var(--color-yw-white)',
                marginTop: 8,
                letterSpacing: '-0.02em',
              }}
            >
              How Yaar Win Platform Works
            </h2>
            <p
              style={{
                color: 'var(--color-yw-text-secondary)',
                fontSize: 15,
                maxWidth: 500,
                margin: '12px auto 0',
              }}
            >
              Getting started on Yaar Win Game is simple and quick. Follow these
              steps:
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {howItWorks.map(({ step, title, desc, image }, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 40,
                    alignItems: 'center',
                    padding: '48px 0',
                    borderBottom:
                      i < howItWorks.length - 1
                        ? '1px solid var(--color-yw-black-border)'
                        : 'none',
                    direction: isEven ? 'ltr' : 'rtl',
                  }}
                >
                  {/* Text side */}
                  <div style={{ direction: 'ltr' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 16,
                        marginBottom: 16,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 48,
                          height: 48,
                          borderRadius: '50%',
                          background: 'rgba(0,200,83,0.1)',
                          border: '1.5px solid rgba(0,200,83,0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontFamily: 'var(--yw-font-heading)',
                          fontWeight: 800,
                          fontSize: 16,
                          color: 'var(--color-yw-green)',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {step}
                      </span>
                      <div
                        style={{
                          width: 1,
                          flexGrow: 1,
                          height: 1,
                          background: 'rgba(0,200,83,0.15)',
                        }}
                      />
                    </div>
                    <h3
                      style={{
                        fontFamily: 'var(--yw-font-heading)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                        color: 'var(--color-yw-white)',
                        marginBottom: 12,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {title}
                    </h3>
                    <p
                      style={{
                        fontSize: 15,
                        color: 'var(--color-yw-text-secondary)',
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Image side */}
                  <div style={{ direction: 'ltr' }}>
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        style={{
                          width: '100%',
                          borderRadius: 16,
                          border: '1px solid var(--color-yw-black-border)',
                          display: 'block',
                        }}
                      />
                    ) : (
                      /* Placeholder — remove once you add the image path above */
                      <div
                        style={{
                          width: '100%',
                          aspectRatio: '16/9',
                          borderRadius: 16,
                          border: '1px dashed rgba(0,200,83,0.25)',
                          background: 'rgba(0,200,83,0.03)',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: 8,
                        }}
                      >
                        <span style={{ fontSize: 32, opacity: 0.3 }}>🖼️</span>
                        <span
                          style={{
                            fontSize: 12,
                            color: 'rgba(0,200,83,0.4)',
                            fontWeight: 500,
                          }}
                        >
                          Add image for Step {step}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GAME CATEGORIES ── */}
      <section
        id='games'
        style={{ padding: '96px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-green)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Game Library
            </span>
            <h2
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
                color: 'var(--color-yw-white)',
                marginTop: 8,
                letterSpacing: '-0.02em',
              }}
            >
              Game Categories on YaarWin
            </h2>
            <p
              style={{
                color: 'var(--color-yw-text-secondary)',
                fontSize: 15,
                marginTop: 12,
                maxWidth: 520,
                margin: '12px auto 0',
              }}
            >
              A wide range of game categories designed to suit every player's
              interest and playing style.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
              gap: 20,
            }}
          >
            {gameCategories.map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: '1px solid var(--color-yw-black-border)',
                  borderRadius: 16,
                  padding: 24,
                  transition:
                    'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(0,200,83,0.3)'
                  el.style.boxShadow = '0 8px 32px rgba(0,200,83,0.1)'
                  el.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-yw-black-border)'
                  el.style.boxShadow = 'none'
                  el.style.transform = 'translateY(0)'
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
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

      {/* ── WINGO SECTION ── */}
      <section
        id='wingo'
        style={{
          padding: '96px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 56,
              alignItems: 'center',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 12,
                  color: 'var(--color-yw-green)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Most Popular
              </span>
              <h2
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem,3vw,2.2rem)',
                  color: 'var(--color-yw-white)',
                  marginTop: 8,
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}
              >
                How to Play Wingo Colour Prediction
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Wingo is one of the most popular fast-paced games on Yaar Win,
                where players make quick predictions on colours or numbers
                within short time intervals of 30 seconds, 1 minute, 3 minutes,
                or 5 minutes.
              </p>
              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                {[
                  'Log in to your Yaar Win account',
                  'Open the Wingo section from the main dashboard',
                  'Select a round duration (30s / 1min / 3min / 5min)',
                  'Choose Colour (Red, Green, Violet) or Number (0–9)',
                  'Enter your amount and confirm before the timer ends',
                  'Winnings are credited instantly to your wallet',
                ].map((s, i) => (
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
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: 'rgba(0,200,83,0.15)',
                        border: '1px solid rgba(0,200,83,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 10,
                        color: 'var(--color-yw-green)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: 1,
                      }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 20,
                padding: 28,
                boxShadow: 'var(--yw-shadow-card)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 18,
                  color: 'var(--color-yw-white)',
                  marginBottom: 24,
                  textAlign: 'center',
                }}
              >
                🎯 Wingo Colour & Number Logic
              </h3>
              {wingoLogic.map(({ color, label, numbers }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px 20px',
                    borderRadius: 12,
                    marginBottom: 12,
                    background: `${color}10`,
                    border: `1px solid ${color}30`,
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 12px ${color}80`,
                      }}
                    />
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 15,
                        color: 'var(--color-yw-white)',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 14,
                      color: 'var(--color-yw-text-secondary)',
                      fontFamily: 'monospace',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {numbers}
                  </span>
                </div>
              ))}
              <div
                style={{
                  marginTop: 20,
                  padding: '14px',
                  background: 'rgba(0,200,83,0.05)',
                  borderRadius: 10,
                  border: '1px solid rgba(0,200,83,0.15)',
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--color-yw-text-secondary)',
                    textAlign: 'center',
                    lineHeight: 1.6,
                  }}
                >
                  Game results are generated automatically. Winnings credited
                  instantly to your Yaar Win wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEPOSIT & WITHDRAWAL ── */}
      <section
        style={{ padding: '96px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-green)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Transactions
            </span>
            <h2
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
                color: 'var(--color-yw-white)',
                marginTop: 8,
                letterSpacing: '-0.02em',
              }}
            >
              Deposit & Withdrawal on Yaar Win
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: 24,
            }}
          >
            {[
              {
                title: '💰 How to Deposit Money',
                color: '#00c853',
                steps: [
                  'Open Yaar Win app and log in',
                  'Go to Wallet or Recharge section',
                  'Tap Deposit or Add Balance',
                  'Enter the amount you want to add',
                  'Select UPI, QR Code, or digital wallet',
                  'Your balance updates instantly after payment',
                ],
              },
              {
                title: '🏦 How to Withdraw Money',
                color: '#29b6f6',
                steps: [
                  'Log in to your Yaar Win account',
                  'Navigate to Wallet or Withdraw section',
                  'Choose Bank Account or UPI ID',
                  'Enter the withdrawal amount',
                  'Review details and click Withdraw',
                  'Processing usually within a few hours',
                ],
              },
            ].map(({ title, color, steps }) => (
              <div
                key={title}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: '1px solid var(--color-yw-black-border)',
                  borderRadius: 16,
                  padding: 28,
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--yw-font-heading)',
                    fontWeight: 600,
                    fontSize: 17,
                    color: 'var(--color-yw-white)',
                    marginBottom: 20,
                  }}
                >
                  {title}
                </h3>
                <ol
                  style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
                >
                  {steps.map((s, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        gap: 12,
                        alignItems: 'flex-start',
                        fontSize: 14,
                        color: 'var(--color-yw-text-secondary)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--yw-font-heading)',
                          fontWeight: 700,
                          fontSize: 12,
                          color,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        0{i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
                <div
                  style={{
                    marginTop: 20,
                    display: 'flex',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                >
                  {(title.includes('Deposit')
                    ? [
                        ['Min. Deposit', '₹50'],
                        ['Methods', 'UPI / QR'],
                      ]
                    : [
                        ['Min. Withdrawal', '~₹100'],
                        ['Processing', 'Few Hours'],
                      ]
                  ).map(([k, v]) => (
                    <div
                      key={k}
                      style={{
                        flex: 1,
                        minWidth: 100,
                        padding: '10px 14px',
                        background: title.includes('Deposit')
                          ? 'rgba(0,200,83,0.06)'
                          : 'rgba(41,182,246,0.06)',
                        borderRadius: 8,
                        border: title.includes('Deposit')
                          ? '1px solid rgba(0,200,83,0.15)'
                          : '1px solid rgba(41,182,246,0.15)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          color: 'var(--color-yw-text-muted)',
                          marginBottom: 2,
                        }}
                      >
                        {k}
                      </div>
                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: title.includes('Deposit')
                            ? 'var(--color-yw-green)'
                            : '#29b6f6',
                        }}
                      >
                        {v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFER & EARN ── */}
      <section
        style={{
          padding: '96px 24px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
              gap: 48,
              alignItems: 'start',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: 12,
                  color: 'var(--color-yw-green)',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Refer & Earn
              </span>
              <h2
                style={{
                  fontFamily: 'var(--yw-font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem,3vw,2.2rem)',
                  color: 'var(--color-yw-white)',
                  marginTop: 8,
                  marginBottom: 16,
                  letterSpacing: '-0.02em',
                }}
              >
                YaarWin Grand Referral Event 2026
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.75,
                  marginBottom: 24,
                }}
              >
                Invite friends to join YaarWin and climb the leaderboard to win
                luxury prizes — including a Mercedes-Benz A-Class Limousine
                worth ₹55 Lakh!
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 16,
                  flexWrap: 'wrap',
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    padding: '10px 16px',
                    background: 'rgba(0,200,83,0.08)',
                    borderRadius: 8,
                    border: '1px solid rgba(0,200,83,0.2)',
                    fontSize: 13,
                    color: 'var(--color-yw-text-secondary)',
                  }}
                >
                  📅 Duration: March 1 – April 30, 2026
                </div>
              </div>
              <Link
                href='/blogs/yaarwin-grand-referral-event'
                className='btn btn-primary'
                style={{
                  padding: '12px 24px',
                  fontSize: 14,
                  borderRadius: 10,
                  textDecoration: 'none',
                  display: 'inline-flex',
                }}
              >
                View Full Event Details →
              </Link>
            </div>

            <div
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 16,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  padding: '16px 20px',
                  borderBottom: '1px solid var(--color-yw-black-border)',
                  background: 'rgba(0,200,83,0.05)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--yw-font-heading)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: 'var(--color-yw-white)',
                  }}
                >
                  🏆 Prize Leaderboard
                </span>
              </div>
              {referralPrizes.map(({ rank, prize, value }, i) => (
                <div
                  key={rank}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderBottom:
                      i < referralPrizes.length - 1
                        ? '1px solid var(--color-yw-black-border)'
                        : 'none',
                    background: i === 0 ? 'rgba(0,200,83,0.05)' : 'transparent',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: 'var(--color-yw-text-muted)',
                        marginBottom: 2,
                      }}
                    >
                      {rank}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: 'var(--color-yw-text-secondary)',
                      }}
                    >
                      {prize}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color:
                        i === 0
                          ? 'var(--color-yw-green)'
                          : 'var(--color-yw-text-secondary)',
                      flexShrink: 0,
                      marginLeft: 12,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── APK DOWNLOAD ── */}
      <section
        style={{ padding: '96px 24px', background: 'var(--color-yw-black)' }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              fontSize: 12,
              color: 'var(--color-yw-green)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            APK Download
          </span>
          <h2
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.6rem,3.5vw,2.4rem)',
              color: 'var(--color-yw-white)',
              marginTop: 8,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Yaar Win APK Download — Latest 2026
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'var(--color-yw-text-secondary)',
              lineHeight: 1.75,
              maxWidth: 600,
              margin: '16px auto 40px',
            }}
          >
            The Yaar Win app is not available on Google Play Store. Download the
            APK directly from the official website using these simple steps.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 20,
              marginBottom: 40,
            }}
          >
            {[
              {
                icon: '🌐',
                step: 'Step 1',
                title: 'Visit Official Site',
                desc: 'Open yaarwin.game in your mobile browser',
              },
              {
                icon: '⬇️',
                step: 'Step 2',
                title: 'Tap Download APK',
                desc: 'Click the Download button on the homepage',
              },
              {
                icon: '⚙️',
                step: 'Step 3',
                title: 'Enable Unknown Sources',
                desc: 'Settings → Security → Install Unknown Sources',
              },
              {
                icon: '📲',
                step: 'Step 4',
                title: 'Install & Play',
                desc: 'Tap the APK file, install, and log in or register',
              },
            ].map(({ icon, step, title, desc }) => (
              <div
                key={step}
                style={{
                  background: 'var(--color-yw-black-card)',
                  border: '1px solid var(--color-yw-black-border)',
                  borderRadius: 14,
                  padding: '24px 20px',
                  textAlign: 'center',
                  transition: 'border-color 0.2s, transform 0.2s',
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
                <div style={{ fontSize: 28, marginBottom: 10 }}>{icon}</div>
                <div
                  style={{
                    fontSize: 11,
                    color: 'var(--color-yw-green)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginBottom: 6,
                  }}
                >
                  {step}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--yw-font-heading)',
                    fontWeight: 600,
                    fontSize: 14,
                    color: 'var(--color-yw-white)',
                    marginBottom: 8,
                  }}
                >
                  {title}
                </div>
                <p
                  style={{
                    fontSize: 12,
                    color: 'var(--color-yw-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <a
            href='https://4yaarwin.com/#/register?invitationCode=24348109027'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary'
            style={{ padding: '14px 32px', fontSize: 15, borderRadius: 10 }}
          >
            📥 Download Yaar Win APK
          </a>
        </div>
      </section>

      {/* ── RESPONSIBLE GAMING ── */}
      <section
        style={{
          padding: '72px 24px',
          background: 'rgba(0,200,83,0.04)',
          borderTop: '1px solid rgba(0,200,83,0.12)',
          borderBottom: '1px solid rgba(0,200,83,0.12)',
        }}
      >
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(1.3rem,3vw,1.8rem)',
              color: 'var(--color-yw-white)',
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            🛡️ Responsible Gaming on Yaar Win
          </h2>
          <p
            style={{
              fontSize: 14,
              color: 'var(--color-yw-text-secondary)',
              lineHeight: 1.75,
              marginBottom: 24,
            }}
          >
            Playing on YaarWin should always remain safe, controlled, and
            enjoyable. Always play for entertainment purposes only.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[
              'Set a Spending Limit',
              'Control Your Playing Time',
              'Never Chase Losses',
              'Play for Entertainment Only',
              '18+ Only',
              'Keep Account Secure',
            ].map((g) => (
              <span
                key={g}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(0,200,83,0.08)',
                  border: '1px solid rgba(0,200,83,0.2)',
                  borderRadius: 999,
                  fontSize: 12,
                  color: 'var(--color-yw-text-secondary)',
                }}
              >
                ✅ {g}
              </span>
            ))}
          </div>
          <Link
            href='/responsible-gaming'
            style={{
              fontSize: 13,
              color: 'var(--color-yw-green)',
              textDecoration: 'none',
            }}
          >
            Read Full Responsible Gaming Guidelines →
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <FaqAccordion />

      {/* ── DISCLAIMER ── */}
      <section
        style={{ padding: '48px 24px', background: 'var(--color-yw-black)' }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: '0 auto',
            padding: '24px',
            background: 'var(--color-yw-black-card)',
            border: '1px solid var(--color-yw-black-border)',
            borderRadius: 12,
          }}
        >
          <h3
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--color-yw-warning)',
              marginBottom: 10,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            ⚠️ Disclaimer
          </h3>
          <p
            style={{
              fontSize: 12,
              color: 'var(--color-yw-text-muted)',
              lineHeight: 1.75,
            }}
          >
            This website is not the official website of yaarwin.game or any
            related application. The information shared on this website is
            published only for educational, informational, and awareness
            purposes. We do not own, manage, operate, or officially promote any
            gaming service. All trademarks and logos belong to their respective
            owners. Users are strongly advised not to deposit money without
            understanding the financial risks involved. Online prediction and
            gaming platforms may lead to financial loss, and winning is never
            guaranteed. This website is strictly for users aged 18 years and
            above.
          </p>
        </div>
      </section>
    </div>
  )
}
