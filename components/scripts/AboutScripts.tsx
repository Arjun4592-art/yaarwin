'use client'
import Link from 'next/link'

const whatWeProvide = [
  {
    icon: '📋',
    title: 'Login & Registration Guides',
    desc: 'Easy-to-follow, step-by-step guides that help both new and returning users register or sign in to YaarWin quickly and without any hassle.',
  },
  {
    icon: '📥',
    title: 'APK Download & Installation',
    desc: 'A complete walkthrough for downloading and installing the latest YaarWin APK directly from the official website — written for beginners.',
  },
  {
    icon: '🎮',
    title: 'Game Information',
    desc: 'In-depth information on popular games available on the platform, including Wingo, K3, 5D, Slots, and Aviator.',
  },
  {
    icon: '💳',
    title: 'Deposit & Withdrawal Guides',
    desc: 'Straightforward guides on how to add money to your YaarWin wallet and withdraw your earnings with ease.',
  },
  {
    icon: '🎁',
    title: 'Referral & Gift Code Info',
    desc: 'Up-to-date information on the referral program, available gift codes, and other bonus features offered by YaarWin.',
  },
  {
    icon: '📰',
    title: 'Platform News & Updates',
    desc: 'The latest news, events, and announcements from the YaarWin gaming platform, all in one place.',
  },
]

const importantNotes = [
  'We never ask visitors for personal or financial information.',
  'We do not offer direct gaming services of any kind.',
  'Always verify information from official sources before taking any action.',
  'This website is intended strictly for users who are 18 years of age or older.',
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-yw-green)]'>
      {children}
    </span>
  )
}

export default function AboutScripts() {
  return (
    <div className='font-[var(--yw-font-body)] text-[var(--color-yw-text-primary)] bg-[var(--color-yw-off-white)] overflow-x-hidden'>
      {/* ══════════════ HERO ══════════════ */}
      <section className='pt-[140px] pb-20 px-6 relative overflow-hidden bg-[var(--color-yw-off-white)]'>
        {/* Radial glow */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,200,83,0.12)_0%,transparent_70%)]'
        />

        {/* Dot grid */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none [background-image:radial-gradient(circle,rgba(0,200,83,0.07)_1px,transparent_1px)] [background-size:40px_40px]'
        />

        <div className='max-w-[1000px] mx-auto relative'>
          <div className='grid grid-cols-1 sm:grid-cols-[1fr_180px] gap-10 items-center'>
            {/* Text */}
            <div className='text-center sm:text-left animate-fade-in-up'>
              <SectionLabel>Who We Are</SectionLabel>
              <h1 className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.2] text-[var(--color-yw-text-primary)] mt-3 mb-5 tracking-tight'>
                About <span className='text-gradient'>YaarWin</span> Game
              </h1>
              <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.8] max-w-[560px] mx-auto sm:mx-0'>
                Welcome to YaarWin Game — your trusted source for clear,
                accurate, and up-to-date information about online gaming apps,
                login processes, and game guides. Our goal is straightforward:
                help users understand how the platform works, without any
                confusion.
              </p>
            </div>

            {/* Logo placeholder */}
            <div className='max-w-[180px] mx-auto sm:mx-0 w-full animate-scale-in delay-1'>
              <div className='relative w-full aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 overflow-hidden border-[1.5px] border-dashed border-[rgba(0,200,83,0.35)] bg-[var(--yw-gradient-soft)]'>
                <div
                  aria-hidden
                  className='absolute inset-0 opacity-60 [background-image:radial-gradient(circle,rgba(0,200,83,0.15)_1px,transparent_1px)] [background-size:18px_18px]'
                />
                <span className='relative text-3xl'>🖼️</span>
                <span className='relative text-[11px] font-semibold uppercase tracking-wider text-[var(--color-yw-green-deep)] text-center px-4'>
                  Logo — cropped-yaar-win.jpeg
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ MISSION CARDS ══════════════ */}
      <section className='py-20 px-6 bg-[var(--color-yw-white)]'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Our Purpose */}
            <div className='card card-hover animate-fade-in-up'>
              <div className='text-3xl mb-4'>🎯</div>
              <h2 className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)] mb-3'>
                Our Purpose
              </h2>
              <p className='text-sm text-[var(--color-yw-text-muted)] leading-[1.75]'>
                We are an informational website only. We do not own or operate
                any gaming platform. Every piece of content we create is
                designed to guide users and give them the knowledge they need to
                use the platform safely and with confidence.
              </p>
            </div>

            {/* Our Commitment */}
            <div
              className='card card-hover animate-fade-in-up delay-1'
              style={{ borderColor: 'rgba(0,200,83,0.2)' }}
            >
              <div className='text-3xl mb-4'>🛡️</div>
              <h2 className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)] mb-3'>
                Our Commitment
              </h2>
              <p className='text-sm text-[var(--color-yw-text-muted)] leading-[1.75]'>
                We encourage every user to play responsibly and approach online
                platforms with awareness. We never ask for personal or financial
                details, and we always remind users to verify information
                through official sources before acting on it.
              </p>
            </div>

            {/* What We Do */}
            <div className='card card-hover animate-fade-in-up delay-2'>
              <div className='text-3xl mb-4'>📚</div>
              <h2 className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)] mb-3'>
                What We Do
              </h2>
              <p className='text-sm text-[var(--color-yw-text-muted)] leading-[1.75]'>
                We help users understand every aspect of the platform — from
                creating an account and downloading the APK, to managing
                deposits, withdrawals, and referral programs — all explained
                simply and clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT WE PROVIDE ══════════════ */}
      <section className='py-24 px-6 bg-[var(--color-yw-off-white)]'>
        <div className='max-w-[1100px] mx-auto'>
          {/* Heading */}
          <div className='text-center mb-12'>
            <SectionLabel>Our Content</SectionLabel>
            <h2 className='font-[var(--yw-font-heading)] font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[var(--color-yw-text-primary)] mt-2 tracking-tight'>
              What We Provide
            </h2>
            <p className='text-[14px] text-[var(--color-yw-text-muted)] mt-3 max-w-[480px] mx-auto leading-[1.7]'>
              Everything a YaarWin user might need — from first login to
              understanding advanced features.
            </p>
          </div>

          {/* Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {whatWeProvide.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className='card card-hover animate-scale-in'
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className='text-[28px] mb-3'>{icon}</div>
                <h3 className='font-[var(--yw-font-heading)] font-semibold text-[15px] text-[var(--color-yw-text-primary)] mb-2'>
                  {title}
                </h3>
                <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.65]'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STAY SAFE STRIP ══════════════ */}
      <section className='py-12 px-6 bg-[var(--color-yw-white-tint)] border-y border-[var(--color-yw-white-border)]'>
        <div className='max-w-[800px] mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left'>
          <span className='text-4xl shrink-0'>🎮</span>
          <div>
            <h3 className='font-[var(--yw-font-heading)] font-semibold text-[15px] text-[var(--color-yw-text-primary)] mb-1'>
              Stay Safe While You Play
            </h3>
            <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.7]'>
              We encourage all users to play responsibly. Online gaming is
              entertainment — always set personal limits and use platforms with
              full awareness. YaarWin Game is strictly for users aged 18 and
              above.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ IMPORTANT NOTE + CTA ══════════════ */}
      <section className='py-16 px-6 bg-[var(--color-yw-white)]'>
        <div className='max-w-[800px] mx-auto'>
          {/* Warning box */}
          <div className='rounded-2xl px-8 py-7 animate-fade-in-up bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.2)]'>
            <h3 className='font-[var(--yw-font-heading)] font-semibold text-base text-[var(--color-yw-warning)] mb-4'>
              ⚠️ Important Note
            </h3>
            <ul className='flex flex-col gap-2.5'>
              {importantNotes.map((note, i) => (
                <li
                  key={i}
                  className='flex items-start gap-2.5 text-sm text-[var(--color-yw-text-muted)]'
                >
                  <span className='text-[var(--color-yw-warning)] shrink-0'>
                    →
                  </span>
                  {note}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA buttons */}
          <div className='flex gap-4 flex-wrap justify-center mt-9'>
            <Link href='/responsible-gaming' className='btn btn-primary btn-lg'>
              Responsible Gaming →
            </Link>
            <Link href='/contact-us' className='btn btn-ghost btn-lg'>
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
