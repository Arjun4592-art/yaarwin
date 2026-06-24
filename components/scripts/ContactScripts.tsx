'use client'

import Link from 'next/link'

const quickLinks = [
  { label: 'APK Download Guide', href: '/blogs/yaarwin-game-app-download' },
  { label: 'Login Help', href: '/blogs/yaar-win-login' },
  { label: 'Referral Event', href: '/blogs/yaarwin-grand-referral-event' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
  { label: 'About Us', href: '/about-us' },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-yw-green)]'>
      {children}
    </span>
  )
}

export default function ContactScripts() {
  return (
    <div className='font-[var(--yw-font-body)] text-[var(--color-yw-text-primary)] bg-[var(--color-yw-off-white)] overflow-x-hidden'>
      {/* ══════════════ HERO ══════════════ */}
      <section className='pt-[140px] pb-20 px-6 relative overflow-hidden bg-[var(--color-yw-off-white)]'>
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,200,83,0.1)_0%,transparent_70%)]'
        />
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(0,200,83,0.07)_1px,transparent_1px)] [background-size:40px_40px]'
        />

        <div className='max-w-[680px] mx-auto text-center relative animate-fade-in-up'>
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.2] text-[var(--color-yw-text-primary)] mt-3 mb-5 tracking-tight'>
            Contact <span className='text-gradient'>Us</span>
          </h1>
          <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.8] max-w-[520px] mx-auto'>
            Have a question, a suggestion, or need some help? Reach out to us
            anytime. Our team is ready to assist you and make sure you get the
            information you need.
          </p>
        </div>
      </section>

      {/* ══════════════ CONTACT CARDS ══════════════ */}
      <section className='py-20 px-6 bg-[var(--color-yw-white)]'>
        <div className='max-w-[900px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Email */}
            <div className='card card-hover flex flex-col items-start gap-3 animate-fade-in-up border-[rgba(0,200,83,0.2)]'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center text-[22px] shrink-0 bg-[rgba(0,200,83,0.1)] border border-[rgba(0,200,83,0.25)]'>
                📧
              </div>
              <div>
                <div className='text-xs font-semibold uppercase tracking-wider text-[var(--color-yw-green)] mb-1.5'>
                  Email Support
                </div>
                <a
                  href='mailto:support@yaarwin.game'
                  className='font-[var(--yw-font-heading)] font-semibold text-base text-[var(--color-yw-text-primary)] no-underline hover:text-[var(--color-yw-green)] transition-colors duration-200'
                >
                  support@yaarwin.game
                </a>
                <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.6] mt-1.5'>
                  Reach us for any content-related questions, feedback, or
                  information requests about our guides.
                </p>
              </div>
            </div>

            {/* Website */}
            <div className='card card-hover flex flex-col items-start gap-3 animate-fade-in-up delay-1'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center text-[22px] shrink-0 bg-[rgba(41,182,246,0.1)] border border-[rgba(41,182,246,0.2)]'>
                🌐
              </div>
              <div>
                <div className='text-xs font-semibold uppercase tracking-wider text-[#29b6f6] mb-1.5'>
                  Official Website
                </div>
                <a
                  href='https://yaarwin.game'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-[var(--yw-font-heading)] font-semibold text-base text-[var(--color-yw-text-primary)] no-underline hover:text-[var(--color-yw-green)] transition-colors duration-200'
                >
                  yaarwin.game
                </a>
                <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.6] mt-1.5'>
                  Head to the official YaarWin platform for account
                  registration, login, and full game access.
                </p>
              </div>
            </div>

            {/* Invite Code */}
            <div className='card card-hover flex flex-col items-start gap-3 animate-fade-in-up delay-2'>
              <div className='w-12 h-12 rounded-xl flex items-center justify-center text-[22px] shrink-0 bg-[rgba(0,200,83,0.08)] border border-[rgba(0,200,83,0.15)]'>
                🎁
              </div>
              <div>
                <div className='text-xs font-semibold uppercase tracking-wider text-[var(--color-yw-green)] mb-1.5'>
                  Invite Code
                </div>
                <span className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-green)] tracking-wide'>
                  24348109027
                </span>
                <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.6] mt-1.5'>
                  Enter this code when signing up to claim a welcome bonus of up
                  to ₹100 on your new account.
                </p>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className='mt-8 px-7 py-6 rounded-2xl animate-fade-in-up delay-3 bg-[rgba(255,179,0,0.05)] border border-[rgba(255,179,0,0.18)]'>
            <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.75]'>
              <strong className='text-[var(--color-yw-warning)]'>
                ℹ️ Please Note:
              </strong>{' '}
              This is an informational website only — we do not run the YaarWin
              gaming platform. For account-specific issues such as deposits,
              withdrawals, or game-related problems, please get in touch with
              YaarWin directly through their official app or website.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ QUICK LINKS ══════════════ */}
      <section className='py-16 px-6 bg-[var(--color-yw-off-white)]'>
        <div className='max-w-[860px] mx-auto text-center animate-fade-in-up'>
          <h2 className='font-[var(--yw-font-heading)] font-bold text-[22px] text-[var(--color-yw-text-primary)] mb-3'>
            Looking for something specific?
          </h2>
          <p className='text-sm text-[var(--color-yw-text-muted)] mb-8'>
            Browse our guides and blog posts to find quick answers to the most
            common questions.
          </p>
          <div className='flex flex-wrap gap-3 justify-center'>
            {quickLinks.map(({ label, href }) => (
              <Link key={href} href={href} className='btn btn-soft btn-pill'>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
