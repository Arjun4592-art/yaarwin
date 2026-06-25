'use client'

import Link from 'next/link'

const guidelines = [
  {
    icon: '💰',
    title: 'Set a Budget Before Playing',
    desc: 'Decide on a fixed spending limit before you begin any gaming session. Stick to it no matter what. Think of gaming as a leisure activity, not a financial strategy.',
  },
  {
    icon: '⏱️',
    title: 'Manage Your Playing Time',
    desc: 'Do not play for long, uninterrupted stretches on YaarWin Game. Take regular breaks and make sure gaming fits around your daily responsibilities — not the other way around.',
  },
  {
    icon: '🎉',
    title: 'Play for Entertainment Only',
    desc: 'YaarWin Game is a form of entertainment. Do not rely on it as a steady income or a guaranteed way to earn money — outcomes are never certain.',
  },
  {
    icon: '🚫',
    title: 'Do Not Chase Losses',
    desc: 'Increasing your bets to win back money you have already lost is a dangerous habit. It raises your financial risk and rarely leads to recovery.',
  },
  {
    icon: '🧘',
    title: 'Stay Emotionally Balanced',
    desc: 'Gaming while angry, tired, or emotionally unstable leads to poor choices. Always play with a calm and focused state of mind.',
  },
  {
    icon: '🔐',
    title: 'Keep Your Account Secure',
    desc: 'Never share your phone number, password, OTP, or any account credentials with anyone. Your login details should always remain private.',
  },
  {
    icon: '🔞',
    title: 'Follow Age Restrictions',
    desc: 'YaarWin Game is only for users who are 18 years of age or older. Anyone below this age must not create an account or take part in any gaming activity.',
  },
]

const breakSigns = [
  'Your spending has gone beyond what you originally planned',
  'You have been playing non-stop for many hours',
  'You are feeling stressed, anxious, or frustrated while playing',
  'You are placing larger bets in an attempt to recover past losses',
  'Gaming is starting to interfere with work, studies, or personal relationships',
  'You feel a strong urge to play even when you would rather not',
]

const safeTips = [
  'Begin with a small, comfortable amount',
  'Set a daily or weekly limit and stick to it',
  'Never use borrowed money for gaming',
  'Keep your account to yourself — do not share access',
  'Avoid back-to-back sessions without breaks',
  'Step away immediately if playing starts feeling like a burden',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-yw-green)]'>
      {children}
    </span>
  )
}

export default function ResponsibleScripts() {
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

        <div className='max-w-[760px] mx-auto text-center relative animate-fade-in-up'>
          <SectionLabel>Play Smart</SectionLabel>
          <h1 className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.2] text-[var(--color-yw-text-primary)] mt-3 mb-5 tracking-tight'>
            Responsible Gaming on <span className='text-gradient'>YaarWin</span>
          </h1>
          <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.8] max-w-[580px] mx-auto'>
            Your experience on YaarWin Game should always be enjoyable, safe,
            and within your control. While online gaming can be a fun activity,
            it is essential to play wisely, manage your time well, and avoid
            putting yourself under unnecessary financial pressure.
          </p>
        </div>
      </section>

      {/* ══════════════ WHAT IS RESPONSIBLE GAMING ══════════════ */}
      <section className='py-20 px-6 bg-[var(--color-yw-white)]'>
        <div className='max-w-[860px] mx-auto'>
          <div className='rounded-[20px] px-8 sm:px-10 py-9 animate-fade-in-up bg-[var(--color-yw-white-card)] border border-[rgba(0,200,83,0.2)] shadow-[var(--yw-shadow-card)]'>
            <h2 className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)] mb-4'>
              🧠 What is Responsible Gaming?
            </h2>
            <p className='text-[15px] text-[var(--color-yw-text-muted)] leading-[1.8] mb-4'>
              Responsible gaming means approaching online games in a thoughtful,
              measured way. It involves knowing your limits, understanding that
              outcomes involve chance, keeping emotions in check, and
              recognising when it is time to walk away.
            </p>
            <p className='text-[15px] text-[var(--color-yw-text-muted)] leading-[1.8]'>
              Only play with money you are genuinely comfortable losing, and
              always approach YaarWin Game as a source of entertainment — not as
              a reliable way to make money.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ GUIDELINES ══════════════ */}
      <section className='py-24 px-6 bg-[var(--color-yw-off-white)]'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='text-center mb-12'>
            <SectionLabel>Guidelines</SectionLabel>
            <h2 className='font-[var(--yw-font-heading)] font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[var(--color-yw-text-primary)] mt-2 tracking-tight'>
              Responsible Gaming Guidelines
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {guidelines.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className='card card-hover animate-fade-in-up'
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className='text-[30px] mb-3'>{icon}</div>
                <h3 className='font-[var(--yw-font-heading)] font-semibold text-[15px] text-[var(--color-yw-text-primary)] mb-2'>
                  {title}
                </h3>
                <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.7]'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ SIGNS + SAFE TIPS ══════════════ */}
      <section className='py-24 px-6 bg-[var(--color-yw-white)]'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Break signs */}
            <div className='rounded-2xl p-7 animate-slide-left bg-[rgba(239,83,80,0.06)] border border-[rgba(239,83,80,0.2)]'>
              <h3 className='font-[var(--yw-font-heading)] font-bold text-lg text-[#ef5350] mb-5'>
                🚨 Signs You Should Take a Break
              </h3>
              <ul className='flex flex-col gap-3'>
                {breakSigns.map((sign, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-2.5 text-[13px] text-[var(--color-yw-text-muted)]'
                  >
                    <span className='text-[#ef5350] shrink-0 mt-0.5'>✗</span>
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            {/* Safe tips */}
            <div className='rounded-2xl p-7 animate-slide-right bg-[rgba(0,200,83,0.06)] border border-[rgba(0,200,83,0.2)]'>
              <h3 className='font-[var(--yw-font-heading)] font-bold text-lg text-[var(--color-yw-green)] mb-5'>
                ✅ Safe Gaming Tips
              </h3>
              <ul className='flex flex-col gap-3'>
                {safeTips.map((tip, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-2.5 text-[13px] text-[var(--color-yw-text-muted)]'
                  >
                    <span className='text-[var(--color-yw-green)] shrink-0 mt-0.5'>
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

      {/* ══════════════ DISCLAIMER + FINAL WORDS ══════════════ */}
      <section className='py-20 px-6 bg-[var(--color-yw-off-white)]'>
        <div className='max-w-[860px] mx-auto'>
          {/* Disclaimer */}
          <div className='rounded-2xl px-8 py-7 mb-8 animate-fade-in-up bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.2)]'>
            <h3 className='font-[var(--yw-font-heading)] font-semibold text-sm uppercase tracking-wider text-[var(--color-yw-warning)] mb-3'>
              ⚠️ Important Disclaimer
            </h3>
            <p className='text-sm text-[var(--color-yw-text-muted)] leading-[1.8]'>
              YaarWin Game combines elements of both skill and chance, and all
              participation carries a degree of financial risk. You must be at
              least 18 years old to use this platform. Excessive gaming can
              negatively affect your wellbeing — always play within set limits
              and act responsibly. If gaming is having a negative impact on your
              mental health, finances, or relationships, please reach out to a
              professional for support.
            </p>
          </div>

          {/* Final words */}
          <div className='rounded-2xl px-8 py-7 animate-fade-in-up delay-1 bg-[rgba(0,200,83,0.05)] border border-[rgba(0,200,83,0.15)]'>
            <h3 className='font-[var(--yw-font-heading)] font-bold text-lg text-[var(--color-yw-text-primary)] mb-3'>
              🌟 Final Words
            </h3>
            <p className='text-sm text-[var(--color-yw-text-muted)] leading-[1.8] mb-5'>
              Being a responsible player means staying in control of your
              experience. Use YaarWin Game purely for entertainment, set clear
              boundaries, and keep your account safe. Play smart, spend wisely,
              and always put your personal safety first.
            </p>
            <Link
              href='https://www.yaarwin14.com/#/register?invitationCode=67868138834'
              className='btn btn-primary'
            >
              Play Responsibly — Get Started →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
