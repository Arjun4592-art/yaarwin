'use client'

import { useState } from 'react'
import Link from 'next/link'

/* ─────────────────────────── DATA ─────────────────────────── */

const appDetails = [
  { label: 'App Name', value: 'Yaar Win' },
  { label: 'Latest Version', value: '1.5 (2026)' },
  { label: 'Platform', value: 'Android APK' },
  { label: 'App Size', value: '12 MB' },
  { label: 'Website', value: 'yaarwin.game' },
  { label: 'Invite Code', value: '24348109027', highlight: true },
  { label: 'Welcome Bonus', value: 'Up to ₹100', highlight: true },
]

const gameCategories = [
  {
    icon: '🎯',
    title: 'Wingo Colour Prediction',
    desc: 'Fast colour prediction rounds — Red, Green, or Violet — with 30 s to 5-min timers. Perfect for beginners.',
  },
  {
    icon: '🎲',
    title: 'K3 Lottery',
    desc: 'Dice-based predictions on the combined value of three virtual dice. More strategic depth than colour prediction.',
  },
  {
    icon: '🔢',
    title: '5D Lottery',
    desc: 'Five-digit number prediction with diverse bet types. Great for players who enjoy analytical wagering.',
  },
  {
    icon: '✈️',
    title: 'Aviator',
    desc: 'Crash-style game with a rising multiplier. Cash out before it crashes for maximum winnings.',
  },
  {
    icon: '♾️',
    title: 'Limbo',
    desc: 'Set a target multiplier before the round starts. Higher targets = bigger wins, lower probability.',
  },
  {
    icon: '🎰',
    title: 'Jili Slots',
    desc: "Extensive slot library from Asia's top provider — classic reels to feature-rich video slots.",
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Create Account',
    desc: 'Register with your mobile number in under 60 seconds.',
  },
  {
    step: '02',
    title: 'Verify OTP',
    desc: 'Complete secure OTP verification to activate your account.',
  },
  {
    step: '03',
    title: 'Add Funds',
    desc: 'Deposit easily via UPI, PhonePe, or bank transfer.',
  },
  {
    step: '04',
    title: 'Choose a Game',
    desc: 'Pick from Wingo, K3, 5D, Aviator, Limbo, or Jili Slots.',
  },
  {
    step: '05',
    title: 'Play & Win',
    desc: 'Place your prediction before each round timer ends.',
  },
  {
    step: '06',
    title: 'Withdraw',
    desc: 'Transfer winnings directly to your bank or UPI in minutes.',
  },
]

const wingoLogic = [
  {
    color: '#00c853',
    bg: 'rgba(0,200,83,0.08)',
    border: 'rgba(0,200,83,0.25)',
    label: 'Green',
    numbers: '1, 3, 7, 9',
  },
  {
    color: '#ef5350',
    bg: 'rgba(239,83,80,0.08)',
    border: 'rgba(239,83,80,0.25)',
    label: 'Red',
    numbers: '2, 4, 6, 8',
  },
  {
    color: '#ab47bc',
    bg: 'rgba(171,71,188,0.08)',
    border: 'rgba(171,71,188,0.25)',
    label: 'Violet',
    numbers: '0, 5',
  },
]

const referralPrizes = [
  {
    rank: '🎆 Grand Prize',
    prize: 'Mercedes-Benz A-Class Limousine',
    value: '₹55 Lakh',
    top: true,
  },
  {
    rank: '🥇 1st Prize',
    prize: 'Diamond Jewelry (2 Items)',
    value: '₹15 Lakh',
    top: false,
  },
  {
    rank: '🥈 2nd Prize',
    prize: 'Gold + Diamond Jewelry',
    value: '₹5 Lakh',
    top: false,
  },
  {
    rank: '🥉 3rd Prize',
    prize: 'Gold Bar 999.9',
    value: '₹2 Lakh',
    top: false,
  },
  {
    rank: '4th Prize',
    prize: 'Gold Necklace 999.9',
    value: '₹1 Lakh',
    top: false,
  },
  {
    rank: '5th Prize',
    prize: 'Gold Bracelet 999.9',
    value: '₹50,000',
    top: false,
  },
  {
    rank: '6th Prize',
    prize: 'Nothing Phone (256 GB)',
    value: '₹30,000',
    top: false,
  },
]

const faqs = [
  {
    q: 'What is YaarWin?',
    a: 'YaarWin is an online gaming platform where users can explore games like Wingo, K3, 5D, Slots, and Aviator and earn real rewards.',
  },
  {
    q: 'Is YaarWin available on Google Play Store?',
    a: 'No. Download the APK directly from the official website yaarwin.game. This is standard for Indian gaming apps.',
  },
  {
    q: 'What is the minimum withdrawal amount?',
    a: 'The minimum withdrawal starts from around ₹100, though it may vary depending on platform rules and account level.',
  },
  {
    q: 'What payment methods are available?',
    a: 'UPI, PhonePe, bank transfer (NEFT/IMPS), and digital wallets are all supported in Indian Rupees.',
  },
  {
    q: 'What is the YaarWin Invitation Code?',
    a: 'The YaarWin invitation code is 24348109027. Use it during registration to unlock up to ₹100 welcome bonus.',
  },
  {
    q: 'Can I use multiple accounts?',
    a: 'No. Multiple accounts violate platform rules and may result in account suspension.',
  },
  {
    q: 'How fast are withdrawals processed?',
    a: 'Most withdrawal requests are processed within minutes to a few hours.',
  },
]

const apkSteps = [
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
    desc: 'Settings → Security → Unknown Sources',
  },
  {
    icon: '📲',
    step: 'Step 4',
    title: 'Install & Play',
    desc: 'Tap the APK file, install, register and play',
  },
]

const giftCodeSteps = [
  'Log in to your account using your registered mobile number',
  'Go to the Gift Code or Promo Code section from your dashboard',
  'Enter a valid gift code carefully',
  'Click on Redeem or Submit',
  'Once verified, the reward is added to your account instantly',
]

const alternatives = [
  {
    name: 'Daman Game',
    desc: 'Popular alternative known for colour prediction games, quick rounds, and easy mobile access.',
  },
  {
    name: 'Jai Club',
    desc: 'Offers multiple game categories including Wingo, K3, and other prediction formats.',
  },
]

const trustBadges = [
  '✅ Secure Login',
  '⚡ Instant Withdrawal',
  '🎁 Bonus ₹100',
  '📱 12 MB APK',
  '🔒 18+ Safe Play',
]

/* ─────────────────────────── IMAGE PLACEHOLDER ─────────────────────────── */
/**
 * Drop-in placeholder for every spot the live site has a screenshot/image.
 * Swap the wrapping element for a Next <Image> once real assets are ready —
 * the aspect ratio + label make it obvious what belongs where.
 */
function ImagePlaceholder({
  label,
  ratio = 'aspect-square',
  className = '',
}: {
  label: string
  ratio?: string
  className?: string
}) {
  return (
    <div
      className={`relative w-full ${ratio} rounded-2xl flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}
      style={{
        background: 'var(--yw-gradient-soft)',
        border: '1.5px dashed rgba(0,200,83,0.35)',
      }}
    >
      <div
        aria-hidden
        className='absolute inset-0 opacity-60'
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(0,200,83,0.15) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      <span className='relative text-3xl'>🖼️</span>
      <span className='relative text-[11px] font-semibold uppercase tracking-wider text-[--color-yw-green-deep] text-center px-4'>
        {label}
      </span>
    </div>
  )
}

/* ─────────────────────────── FAQ ACCORDION ─────────────────────────── */
function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <section className='py-24 px-6 bg-[--color-yw-off-white]'>
      <div className='max-w-[800px] mx-auto'>
        <div className='text-center mb-12'>
          <span className='text-xs font-semibold tracking-[0.1em] uppercase text-[--color-yw-green]'>
            FAQ
          </span>
          <h2 className='font-heading font-bold text-[clamp(1.6rem,3.5vw,2.2rem)] text-[--color-yw-text-primary] mt-2 tracking-tight'>
            Frequently Asked Questions
          </h2>
        </div>
        <div className='flex flex-col gap-2.5'>
          {faqs.map(({ q, a }, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={q}
                className='bg-white rounded-xl overflow-hidden transition-all duration-300'
                style={{
                  border: `1px solid ${isOpen ? 'rgba(0,200,83,0.4)' : 'var(--color-yw-white-border)'}`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className='w-full flex items-center justify-between gap-4 px-5 py-4 bg-transparent border-none cursor-pointer text-left'
                >
                  <span className='font-heading font-semibold text-sm text-[--color-yw-text-primary] leading-relaxed'>
                    {q}
                  </span>
                  <span
                    className='shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-base font-light transition-all duration-300'
                    style={{
                      background: isOpen
                        ? 'rgba(0,200,83,0.12)'
                        : 'var(--color-yw-white-tint)',
                      border: isOpen
                        ? '1px solid rgba(0,200,83,0.4)'
                        : '1px solid var(--color-yw-white-border)',
                      color: isOpen
                        ? 'var(--color-yw-green)'
                        : 'var(--color-yw-text-muted)',
                      transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className='overflow-hidden transition-all duration-300 ease-in-out'
                  style={{ maxHeight: isOpen ? 200 : 0 }}
                >
                  <p
                    className='m-0 px-5 pb-5 pt-0 text-[13px] text-[--color-yw-text-muted] leading-[1.75] border-t border-[--color-yw-white-border]'
                    style={{ paddingTop: 14 }}
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

/* ─────────────────────────── SECTION LABEL ─────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[--color-yw-green]'>
      {children}
    </span>
  )
}

/* ─────────────────────────── MAIN COMPONENT ─────────────────────────── */
export default function HomeClient() {
  return (
    <div className='font-body text-[--color-yw-text-primary] bg-[--color-yw-off-white] overflow-x-hidden'>
      {/* ══════════════ HERO ══════════════ */}
      <section
        className='min-h-screen flex items-center px-6 pt-[120px] pb-20 relative overflow-hidden'
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,200,83,0.13) 0%, transparent 70%), var(--color-yw-off-white)',
        }}
      >
        {/* dot grid */}
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,200,83,0.07) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className='max-w-[1200px] mx-auto w-full relative'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
            {/* Left */}
            <div className='animate-fade-in-up'>
              {/* live pill */}
              <div className='inline-flex items-center gap-2 bg-[--color-yw-white-tint] border border-[rgba(0,200,83,0.25)] rounded-full px-3.5 py-1.5 mb-6'>
                <span
                  className='w-1.5 h-1.5 rounded-full bg-[--color-yw-green]'
                  style={{ animation: 'yw-pulse-dot 2s infinite' }}
                />
                <span className='text-[11px] font-semibold tracking-widest uppercase text-[--color-yw-green]'>
                  Live Platform · 2026
                </span>
              </div>

              <h1 className='font-heading font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[1.15] text-[--color-yw-text-primary] mb-5 tracking-tight'>
                Yaar Win App Download —{' '}
                <span className='text-gradient'>Latest Version,</span> Bonus &
                Features
              </h1>

              <p className='text-base text-[--color-yw-text-muted] leading-[1.75] mb-8 max-w-[520px]'>
                Yaar Win is India's fastest-growing online gaming app. Download
                the latest APK, claim your ₹100 welcome bonus, and explore
                Wingo, Aviator, K3, 5D, and Jili Slots in one lightweight 12 MB
                app.
              </p>

              <div className='flex flex-wrap gap-3 mb-9'>
                <a
                  href='https://4yaarwin.com/#/register?invitationCode=24348109027'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-primary btn-lg'
                >
                  🎮 Download & Register Free
                </a>
                <Link
                  href='/blogs/yaarwin-game-app-download'
                  className='btn btn-ghost btn-lg'
                >
                  APK Guide →
                </Link>
              </div>

              <div className='flex flex-wrap gap-4'>
                {trustBadges.map((b) => (
                  <span
                    key={b}
                    className='text-[13px] text-[--color-yw-text-muted]'
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — App Details Card */}
            <div className='card animate-slide-right'>
              <div className='flex items-center gap-3.5 mb-6 pb-5 border-b border-[--color-yw-white-border]'>
                <div
                  className='w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-extrabold text-xl text-[#003d18] shrink-0'
                  style={{
                    background: 'var(--yw-gradient-primary)',
                    boxShadow: 'var(--yw-shadow-green-sm)',
                  }}
                >
                  YW
                </div>
                <div>
                  <div className='font-heading font-bold text-lg text-[--color-yw-text-primary]'>
                    Yaar Win
                  </div>
                  <div className='text-xs text-[--color-yw-text-muted]'>
                    Online Gaming App
                  </div>
                </div>
              </div>

              {appDetails.map(({ label, value, highlight }) => (
                <div
                  key={label}
                  className='flex justify-between items-center py-2.5 border-b border-[--color-yw-white-border] last:border-0'
                >
                  <span className='text-[13px] text-[--color-yw-text-muted]'>
                    {label}
                  </span>
                  <span
                    className={`text-[13px] font-semibold ${highlight ? 'text-[--color-yw-green]' : 'text-[--color-yw-text-primary]'}`}
                  >
                    {value}
                  </span>
                </div>
              ))}

              <a
                href='https://4yaarwin.com/#/register?invitationCode=24348109027'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-primary w-full justify-center mt-5 py-3 text-sm rounded-[10px]'
              >
                Register Now →
              </a>
            </div>
          </div>
        </div>

        <style>{`@keyframes yw-pulse-dot{0%,100%{opacity:1}50%{opacity:0.35}}`}</style>
      </section>

      {/* ══════════════ APP SHOWCASE (yaar-win 300x300 img) ══════════════ */}
      <section className='py-20 px-6 bg-white'>
        <div className='max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <div className='order-2 lg:order-1 animate-slide-left'>
            <SectionLabel>The App</SectionLabel>
            <h2 className='font-heading font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[--color-yw-text-primary] mt-2 mb-4 tracking-tight'>
              Yaar Win Game App
            </h2>
            <p className='text-[15px] text-[--color-yw-text-muted] leading-[1.75] mb-6'>
              Yaar Win is a secure online gaming platform where users can
              explore Wingo, K3, 5D, Poker, Slots, and Aviator — and play to
              earn real rewards through skill-based gameplay, all from a
              lightweight 12 MB app.
            </p>
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
            >
              Register & Download →
            </a>
          </div>
          <div className='order-1 lg:order-2 animate-scale-in max-w-[320px] mx-auto w-full'>
            <ImagePlaceholder
              label='App Icon — yaar-win.jpeg'
              ratio='aspect-square'
            />
          </div>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className='py-24 px-6 bg-[--color-yw-off-white]'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center mb-16'>
            <div className='animate-slide-left'>
              <SectionLabel>Quick Start</SectionLabel>
              <h2 className='font-heading font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-[--color-yw-text-primary] mt-2 tracking-tight'>
                Why Choose Yaar Game?
              </h2>
              <p className='text-[15px] text-[--color-yw-text-muted] mt-3 leading-[1.75]'>
                Yaar Win is a modern and fast-growing online gaming platform
                offering a wide variety of prediction-based and interactive
                games such as Wingo, K3, 5D, Slots, Plinko, Limbo, and Aviator.
              </p>
            </div>
            <div className='animate-slide-right max-w-[280px] mx-auto w-full'>
              <ImagePlaceholder
                label='Platform Preview — yaarwin-383x1024'
                ratio='aspect-[383/1024]'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {howItWorks.map(({ step, title, desc }, i) => (
              <div
                key={step}
                className='card card-hover animate-fade-in-up'
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className='w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-base text-[--color-yw-green] mb-4 shrink-0'
                  style={{
                    background: 'var(--color-yw-white-tint)',
                    border: '1.5px solid rgba(0,200,83,0.3)',
                  }}
                >
                  {step}
                </div>
                <h3 className='font-heading font-semibold text-[15px] text-[--color-yw-text-primary] mb-2'>
                  {title}
                </h3>
                <p className='text-[13px] text-[--color-yw-text-muted] leading-[1.65]'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ REGISTER & LOGIN ══════════════ */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {/* Register */}
            <div className='card'>
              <div className='max-w-[200px] mx-auto mb-6 animate-scale-in'>
                <ImagePlaceholder
                  label='Register Steps — yaarwin-game-432x1024'
                  ratio='aspect-[432/1024]'
                />
              </div>
              <h3 className='font-heading font-bold text-[17px] text-[--color-yw-text-primary] mb-4 text-center'>
                How to Register on Yaar Win Club
              </h3>
              <ol className='flex flex-col gap-3'>
                {[
                  'Visit the official registration page on mobile or desktop',
                  'Enter your active mobile number to begin signup',
                  'Create a strong, secure password',
                  'Complete OTP verification sent to your number',
                  'Enter a referral or invite code (optional) for bonus',
                  'Finish registration and start exploring games',
                ].map((s, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-[14px] text-[--color-yw-text-muted]'
                  >
                    <span
                      className='w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[--color-yw-green] shrink-0 mt-0.5'
                      style={{
                        background: 'var(--color-yw-white-tint)',
                        border: '1px solid rgba(0,200,83,0.3)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            {/* Login */}
            <div className='card'>
              <div className='max-w-[200px] mx-auto mb-6 animate-scale-in delay-1'>
                <ImagePlaceholder
                  label='Login Screen — yaar-win-489x1024'
                  ratio='aspect-[489/1024]'
                />
              </div>
              <h3 className='font-heading font-bold text-[17px] text-[--color-yw-text-primary] mb-4 text-center'>
                YaarWin Game Login — How to Sign In
              </h3>
              <ol className='flex flex-col gap-3'>
                {[
                  'Open the official YaarWin app or trusted website',
                  'Tap the Login option on the homepage',
                  'Enter your registered mobile number and password',
                  'Click Sign In to access your account instantly',
                ].map((s, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-[14px] text-[--color-yw-text-muted]'
                  >
                    <span
                      className='w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[--color-yw-green] shrink-0 mt-0.5'
                      style={{
                        background: 'var(--color-yw-white-tint)',
                        border: '1px solid rgba(0,200,83,0.3)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className='text-[13px] text-[--color-yw-text-muted] leading-[1.7] mt-5 pt-4 border-t border-[--color-yw-white-border]'>
                After logging in, check your wallet balance, explore game
                categories, and manage your activity in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ GAME CATEGORIES ══════════════ */}
      <section id='games' className='py-24 px-6 bg-[--color-yw-off-white]'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='text-center mb-14'>
            <SectionLabel>Game Library</SectionLabel>
            <h2 className='font-heading font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-[--color-yw-text-primary] mt-2 tracking-tight'>
              Game Categories on YaarWin
            </h2>
            <p className='text-[15px] text-[--color-yw-text-muted] max-w-[500px] mx-auto mt-3'>
              A wide range of categories designed to suit every player's
              interest and playing style.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {gameCategories.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className='card card-hover animate-scale-in'
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <div className='text-3xl mb-3.5'>{icon}</div>
                <h3 className='font-heading font-semibold text-[15px] text-[--color-yw-text-primary] mb-2'>
                  {title}
                </h3>
                <p className='text-[13px] text-[--color-yw-text-muted] leading-[1.65]'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ APK DOWNLOAD ══════════════ */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center mb-14'>
            <div className='order-2 lg:order-1 max-w-[300px] mx-auto w-full animate-slide-left'>
              <ImagePlaceholder
                label='App Preview — yaar-win-1-1024x683'
                ratio='aspect-[1024/683]'
              />
            </div>
            <div className='order-1 lg:order-2 text-center lg:text-left animate-slide-right'>
              <SectionLabel>APK Download</SectionLabel>
              <h2 className='font-heading font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-[--color-yw-text-primary] mt-2 mb-4 tracking-tight'>
                Yaar Win APK Download — Latest 2026
              </h2>
              <p className='text-[15px] text-[--color-yw-text-muted] leading-[1.75] max-w-[520px] mx-auto lg:mx-0'>
                The Yaar Win app is not on Google Play Store. Download the APK
                safely from the official website in 4 simple steps.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
            {apkSteps.map(({ icon, step, title, desc }, i) => (
              <div
                key={step}
                className='card card-hover text-center animate-fade-in-up'
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className='text-3xl mb-2.5'>{icon}</div>
                <div className='text-[11px] font-semibold uppercase tracking-widest text-[--color-yw-green] mb-1.5'>
                  {step}
                </div>
                <div className='font-heading font-semibold text-[14px] text-[--color-yw-text-primary] mb-2'>
                  {title}
                </div>
                <p className='text-[12px] text-[--color-yw-text-muted] leading-relaxed'>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <div className='max-w-[220px] mx-auto mb-10 animate-scale-in'>
            <ImagePlaceholder
              label='Install Guide — yaar-win-games-466x1024'
              ratio='aspect-[466/1024]'
            />
          </div>

          <div className='text-center'>
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary btn-lg'
            >
              📥 Download Yaar Win APK
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════ WINGO SECTION ══════════════ */}
      <section id='wingo' className='py-24 px-6 bg-[--color-yw-off-white]'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mb-14'>
            {/* Left text */}
            <div className='animate-slide-left'>
              <SectionLabel>Most Popular</SectionLabel>
              <h2 className='font-heading font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[--color-yw-text-primary] mt-2 mb-4 tracking-tight'>
                How to Play Wingo Colour Prediction
              </h2>
              <p className='text-[15px] text-[--color-yw-text-muted] leading-[1.75] mb-7'>
                Wingo is the most popular game on Yaar Win — quick colour/number
                predictions with 30-second to 5-minute rounds. Results are
                instant, winnings credited immediately.
              </p>
              <ol className='flex flex-col gap-3 mb-7'>
                {[
                  'Log in to your Yaar Win account',
                  'Open the Wingo section from the main dashboard',
                  'Select a round duration (30 s / 1 min / 3 min / 5 min)',
                  'Choose Colour (Red, Green, Violet) or Number (0–9)',
                  'Enter your amount and confirm before the timer ends',
                  'Winnings are credited instantly to your wallet',
                ].map((s, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-[14px] text-[--color-yw-text-muted]'
                  >
                    <span
                      className='w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[--color-yw-green] shrink-0 mt-0.5'
                      style={{
                        background: 'var(--color-yw-white-tint)',
                        border: '1px solid rgba(0,200,83,0.3)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>

            {/* Right image */}
            <div className='max-w-[320px] mx-auto w-full animate-slide-right'>
              <ImagePlaceholder
                label='Wingo Gameplay — yaarwin-app-683x1024'
                ratio='aspect-[683/1024]'
              />
            </div>
          </div>

          {/* logic card + its own image, side by side */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-start'>
            <div className='max-w-[300px] mx-auto w-full animate-scale-in'>
              <ImagePlaceholder
                label='Colour Logic — yaarwin-games-393x1024'
                ratio='aspect-[393/1024]'
              />
            </div>
            <div className='card animate-scale-in delay-1'>
              <h3 className='font-heading font-bold text-[17px] text-[--color-yw-text-primary] mb-6 text-center'>
                🎯 Wingo Colour & Number Logic
              </h3>
              {wingoLogic.map(({ color, bg, border, label, numbers }) => (
                <div
                  key={label}
                  className='flex items-center justify-between px-5 py-4 rounded-xl mb-3 last:mb-0'
                  style={{ background: bg, border: `1px solid ${border}` }}
                >
                  <div className='flex items-center gap-3'>
                    <div
                      className='w-4 h-4 rounded-full shrink-0'
                      style={{
                        background: color,
                        boxShadow: `0 0 10px ${color}80`,
                      }}
                    />
                    <span className='font-semibold text-[15px] text-[--color-yw-text-primary]'>
                      {label}
                    </span>
                  </div>
                  <span className='text-[14px] text-[--color-yw-text-muted] font-mono tracking-wide'>
                    {numbers}
                  </span>
                </div>
              ))}
              <div className='mt-5 p-3.5 bg-[--color-yw-white-tint] rounded-xl border border-[rgba(0,200,83,0.2)]'>
                <p className='text-[12px] text-[--color-yw-text-muted] text-center leading-relaxed'>
                  Game results are generated automatically. Winnings credited
                  instantly to your Yaar Win wallet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ DEPOSIT & WITHDRAWAL ══════════════ */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='text-center mb-14'>
            <SectionLabel>Transactions</SectionLabel>
            <h2 className='font-heading font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-[--color-yw-text-primary] mt-2 tracking-tight'>
              Deposit & Withdrawal on Yaar Win
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10'>
            {[
              {
                title: '💰 How to Deposit Money',
                accent: 'rgba(0,200,83,0.08)',
                accentBorder: 'rgba(0,200,83,0.18)',
                accentText: 'text-[--color-yw-green]',
                imgLabel: 'Deposit Flow — yaarwin-game-app-499x1024',
                imgRatio: 'aspect-[499/1024]',
                meta: [
                  ['Min. Deposit', '₹50'],
                  ['Methods', 'UPI / QR'],
                ],
                steps: [
                  'Open Yaar Win app and log in',
                  'Go to Wallet or Recharge section',
                  'Tap Deposit or Add Balance',
                  'Enter the amount you want to add',
                  'Select UPI, QR Code, or digital wallet',
                  'Balance updates instantly after payment',
                ],
              },
              {
                title: '🏦 How to Withdraw Money',
                accent: 'rgba(41,182,246,0.08)',
                accentBorder: 'rgba(41,182,246,0.18)',
                accentText: 'text-[#0ea5e9]',
                imgLabel: 'Withdrawal Flow — yaar-win-game-app-487x1024',
                imgRatio: 'aspect-[487/1024]',
                meta: [
                  ['Min. Withdrawal', '~₹100'],
                  ['Processing', 'Minutes'],
                ],
                steps: [
                  'Log in to your Yaar Win account',
                  'Navigate to Wallet or Withdraw section',
                  'Choose Bank Account or UPI ID',
                  'Enter the withdrawal amount',
                  'Review details and click Withdraw',
                  'Processing usually within minutes',
                ],
              },
            ].map(
              (
                {
                  title,
                  accent,
                  accentBorder,
                  accentText,
                  meta,
                  steps,
                  imgLabel,
                  imgRatio,
                },
                idx,
              ) => (
                <div
                  key={title}
                  className={`card animate-fade-in-up ${idx === 1 ? 'delay-2' : ''}`}
                >
                  <div className='max-w-[180px] mx-auto mb-5'>
                    <ImagePlaceholder label={imgLabel} ratio={imgRatio} />
                  </div>
                  <h3 className='font-heading font-semibold text-[17px] text-[--color-yw-text-primary] mb-5'>
                    {title}
                  </h3>
                  <ol className='flex flex-col gap-3 mb-6'>
                    {steps.map((s, i) => (
                      <li
                        key={i}
                        className='flex gap-3 items-start text-[14px] text-[--color-yw-text-muted]'
                      >
                        <span
                          className={`font-heading font-bold text-[12px] ${accentText} shrink-0 mt-0.5`}
                        >
                          0{i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ol>
                  <div className='flex gap-4 flex-wrap'>
                    {meta.map(([k, v]) => (
                      <div
                        key={k}
                        className='flex-1 min-w-[100px] px-3.5 py-2.5 rounded-lg'
                        style={{
                          background: accent,
                          border: `1px solid ${accentBorder}`,
                        }}
                      >
                        <div className='text-[11px] text-[--color-yw-text-hint] mb-1'>
                          {k}
                        </div>
                        <div
                          className={`text-[14px] font-semibold ${accentText}`}
                        >
                          {v}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>

          {/* Add bank account */}
          <div className='card max-w-[800px] mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-6 items-center'>
              <div className='animate-scale-in'>
                <ImagePlaceholder
                  label='Bank Setup — yaar-win-game-464x1024'
                  ratio='aspect-[464/1024]'
                />
              </div>
              <div>
                <h3 className='font-heading font-semibold text-[16px] text-[--color-yw-text-primary] mb-3'>
                  How to Add Bank Account
                </h3>
                <ol className='flex flex-col gap-2'>
                  {[
                    'Login to your Yaar Win account',
                    'Go to Wallet or Profile section',
                    'Select "Add Bank Account" option',
                    'Enter account holder name, bank, account no. & IFSC',
                    'Confirm and submit details',
                    'Complete OTP verification if required',
                  ].map((s, i) => (
                    <li
                      key={i}
                      className='text-[13px] text-[--color-yw-text-muted] leading-relaxed'
                    >
                      {i + 1}. {s}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ REFER & EARN ══════════════ */}
      <section className='py-24 px-6 bg-[--color-yw-off-white]'>
        <div className='max-w-[1200px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14'>
            {/* Left */}
            <div className='animate-slide-left'>
              <SectionLabel>Refer & Earn</SectionLabel>
              <h2 className='font-heading font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[--color-yw-text-primary] mt-2 mb-4 tracking-tight'>
                YaarWin Grand Referral Event 2026
              </h2>
              <p className='text-[15px] text-[--color-yw-text-muted] leading-[1.75] mb-6'>
                Invite friends to join YaarWin and climb the leaderboard to win
                luxury prizes — including a{' '}
                <strong className='text-[--color-yw-text-primary]'>
                  Mercedes-Benz A-Class Limousine worth ₹55 Lakh!
                </strong>
              </p>
              <div className='inline-flex items-center gap-2 px-4 py-2.5 bg-[--color-yw-white-tint] border border-[rgba(0,200,83,0.2)] rounded-lg text-[13px] text-[--color-yw-text-muted] mb-7'>
                📅 March 1 – April 30, 2026
              </div>
              <br />
              <Link
                href='/blogs/yaarwin-grand-referral-event'
                className='btn btn-primary'
              >
                View Full Event Details →
              </Link>
            </div>

            {/* Right — leaderboard */}
            <div className='card overflow-hidden p-0 animate-slide-right'>
              <div className='px-5 py-4 border-b border-[--color-yw-white-border] bg-[--color-yw-white-tint]'>
                <span className='font-heading font-semibold text-[14px] text-[--color-yw-text-primary]'>
                  🏆 Prize Leaderboard
                </span>
              </div>
              {referralPrizes.map(({ rank, prize, value, top }, i) => (
                <div
                  key={rank}
                  className='flex items-center justify-between px-5 py-3.5 border-b border-[--color-yw-white-border] last:border-0'
                  style={{
                    background: top ? 'rgba(0,200,83,0.05)' : 'transparent',
                  }}
                >
                  <div>
                    <div className='text-[11px] text-[--color-yw-text-hint] mb-0.5'>
                      {rank}
                    </div>
                    <div className='text-[13px] text-[--color-yw-text-muted]'>
                      {prize}
                    </div>
                  </div>
                  <span
                    className={`text-[13px] font-bold shrink-0 ml-3 ${top ? 'text-[--color-yw-green]' : 'text-[--color-yw-text-muted]'}`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* How to use referral program */}
          <div className='grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-8 items-center card'>
            <div className='animate-scale-in'>
              <ImagePlaceholder
                label='Referral Dashboard — yaarwin-login-491x1024'
                ratio='aspect-[491/1024]'
              />
            </div>
            <div>
              <h3 className='font-heading font-semibold text-[16px] text-[--color-yw-text-primary] mb-3'>
                How to Use the Referral Program
              </h3>
              <ol className='flex flex-col gap-2'>
                {[
                  'Open the Refer & Earn / Invite Friends section',
                  'Copy your personal referral link or invite code',
                  'Share it with friends, family, or online communities',
                  'Ask them to register using your referral link',
                  'Referrals are tracked automatically once they join',
                  'Earn bonuses based on their activity',
                ].map((s, i) => (
                  <li
                    key={i}
                    className='text-[13px] text-[--color-yw-text-muted] leading-relaxed'
                  >
                    {i + 1}. {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ GIFT CODE (missing on original component) ══════════════ */}
      <section className='py-24 px-6 bg-white'>
        <div className='max-w-[1000px] mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 items-center card'>
            <div>
              <SectionLabel>Bonus Codes</SectionLabel>
              <h2 className='font-heading font-bold text-[clamp(1.4rem,3vw,2rem)] text-[--color-yw-text-primary] mt-2 mb-4 tracking-tight'>
                How to Use a YaarWin Gift Code
              </h2>
              <p className='text-[14px] text-[--color-yw-text-muted] leading-[1.75] mb-6'>
                Using a gift code is a simple way to unlock bonus rewards,
                special offers, and extra benefits on the platform.
              </p>
              <ol className='flex flex-col gap-3'>
                {giftCodeSteps.map((s, i) => (
                  <li
                    key={i}
                    className='flex items-start gap-3 text-[14px] text-[--color-yw-text-muted]'
                  >
                    <span
                      className='w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-[--color-yw-green] shrink-0 mt-0.5'
                      style={{
                        background: 'var(--color-yw-white-tint)',
                        border: '1px solid rgba(0,200,83,0.3)',
                      }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
            <div className='animate-scale-in w-full'>
              <ImagePlaceholder
                label='Gift Code Screen — yaar-win-apk-489x1024'
                ratio='aspect-[489/1024]'
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ ALTERNATIVES (missing on original component) ══════════════ */}
      <section className='py-24 px-6 bg-[--color-yw-off-white]'>
        <div className='max-w-[900px] mx-auto'>
          <div className='text-center mb-12'>
            <SectionLabel>Also Worth Knowing</SectionLabel>
            <h2 className='font-heading font-bold text-[clamp(1.5rem,3vw,2.2rem)] text-[--color-yw-text-primary] mt-2 tracking-tight'>
              Popular YaarWin Alternatives
            </h2>
            <p className='text-[14px] text-[--color-yw-text-muted] max-w-[480px] mx-auto mt-3'>
              Users searching for similar platforms often explore these
              alternatives with prediction games and wallet features.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            {alternatives.map(({ name, desc }, i) => (
              <div
                key={name}
                className='card card-hover animate-fade-in-up'
                style={{ animationDelay: `${i * 90}ms` }}
              >
                <div
                  className='w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-[--color-yw-green] mb-4'
                  style={{
                    background: 'var(--color-yw-white-tint)',
                    border: '1.5px solid rgba(0,200,83,0.3)',
                  }}
                >
                  {i + 1}
                </div>
                <h3 className='font-heading font-semibold text-[15px] text-[--color-yw-text-primary] mb-2'>
                  {name}
                </h3>
                <p className='text-[13px] text-[--color-yw-text-muted] leading-[1.65]'>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ RESPONSIBLE GAMING ══════════════ */}
      <section
        className='py-16 px-6 border-y border-[rgba(0,200,83,0.15)]'
        style={{ background: 'rgba(0,200,83,0.04)' }}
      >
        <div className='max-w-[860px] mx-auto'>
          <h2 className='font-heading font-bold text-[clamp(1.3rem,3vw,1.8rem)] text-[--color-yw-text-primary] mb-4 tracking-tight'>
            🛡️ Responsible Gaming on Yaar Win
          </h2>
          <p className='text-[14px] text-[--color-yw-text-muted] leading-[1.75] mb-6'>
            Playing on YaarWin should always be safe, controlled, and enjoyable.
            Always play for entertainment purposes only.
          </p>
          <div className='flex flex-wrap gap-2.5 mb-6'>
            {[
              'Set a Spending Limit',
              'Control Your Playing Time',
              'Never Chase Losses',
              'Play for Entertainment Only',
              '18+ Only',
              'Keep Account Secure',
            ].map((g) => (
              <span key={g} className='badge badge-green'>
                ✅ {g}
              </span>
            ))}
          </div>
          <Link
            href='/responsible-gaming'
            className='text-[13px] text-[--color-yw-green] hover:text-[--color-yw-green-mid] transition-colors duration-200'
          >
            Read Full Responsible Gaming Guidelines →
          </Link>
        </div>
      </section>

      {/* ══════════════ FAQ ══════════════ */}
      <FaqAccordion />

      {/* ══════════════ DISCLAIMER ══════════════ */}
      <section className='py-12 px-6 bg-white'>
        <div className='max-w-[900px] mx-auto p-6 bg-[--color-yw-off-white] border border-[--color-yw-white-border] rounded-xl'>
          <h3 className='font-heading font-semibold text-[12px] text-[--color-yw-warning] uppercase tracking-widest mb-3'>
            ⚠️ Disclaimer
          </h3>
          <p className='text-[12px] text-[--color-yw-text-hint] leading-[1.75]'>
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
