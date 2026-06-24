'use client'

import Link from 'next/link'

const blogs = [
  {
    slug: 'yaarwin-game-app-download',
    date: 'June 19, 2026',
    tag: 'App Guide',
    title: 'YaarWin App Download: Getting the Latest 2026 APK',
    excerpt:
      "A lightweight, fast-loading app that's quickly gaining a following among players who enjoy quick-round titles like Wingo, K3, 5D, Slots, and Aviator. Smooth navigation and near-instant results make it approachable for first-timers and regulars alike.",
    readTime: '3 min read',
  },
  {
    slug: 'yaar-win-login',
    date: 'June 19, 2026',
    tag: 'Login Guide',
    title: 'Signing Into Yaar Win: A Straightforward Walkthrough',
    excerpt:
      'Getting into your account takes just a few taps using your registered number and password. This guide breaks down the sign-in flow step by step and covers the most common hiccups users run into along the way.',
    readTime: '2 min read',
  },
  {
    slug: 'yaarwin-grand-referral-event',
    date: 'June 7, 2026',
    tag: 'Event',
    title: 'Inside the 2026 YaarWin Referral Campaign: Big Prizes Up for Grabs',
    excerpt:
      "One of the platform's largest promotions to date rewards members for bringing friends on board. The leaderboard rankings unlock everything from a Mercedes-Benz A-Class worth ₹55 lakh down to smaller gold and gadget prizes.",
    readTime: '3 min read',
  },
  {
    slug: 'yaarwin-telegram-channel',
    date: 'June 4, 2026',
    tag: 'Updates',
    title: 'Why Players Are Joining the YaarWin Telegram Channel',
    excerpt:
      'A growing number of users turn to the official Telegram channel for fast, direct updates — announcements, bonus drops, event alerts, and gift codes land there before anywhere else, making it a handy way to stay in the loop.',
    readTime: '2 min read',
  },
]

const tagColors: Record<string, string> = {
  'App Guide': '#00c853',
  'Login Guide': '#29b6f6',
  Event: '#ffb300',
  Updates: '#ab47bc',
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[--color-yw-green]'>
      {children}
    </span>
  )
}

export default function BlogsScripts() {
  return (
    <div className='font-body text-[--color-yw-text-primary] bg-[--color-yw-off-white] overflow-x-hidden'>
      {/* ══════════════ HERO ══════════════ */}
      <section
        className='pt-[140px] pb-20 px-6 relative overflow-hidden'
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,200,83,0.1) 0%, transparent 70%), var(--color-yw-off-white)',
        }}
      >
        <div
          aria-hidden
          className='absolute inset-0 pointer-events-none'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,200,83,0.07) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className='max-w-[680px] mx-auto text-center relative animate-fade-in-up'>
          <SectionLabel>Knowledge Hub</SectionLabel>
          <h1 className='font-heading font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.2] text-[--color-yw-text-primary] mt-3 mb-5 tracking-tight'>
            Yaar Win <span className='text-gradient'>Blogs</span> & Guides
          </h1>
          <p className='text-base text-[--color-yw-text-muted] leading-[1.8] max-w-[520px] mx-auto'>
            Fresh write-ups on app updates, login help, ongoing events, and
            general platform news — all in one place.
          </p>
        </div>
      </section>

      {/* ══════════════ BLOG CARDS ══════════════ */}
      <section className='py-20 px-6 pb-24 bg-white'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {blogs.map(({ slug, date, tag, title, excerpt, readTime }, i) => {
              const color = tagColors[tag] || 'var(--color-yw-green)'
              return (
                <Link
                  key={slug}
                  href={`/blogs/${slug}`}
                  className='no-underline block animate-fade-in-up'
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <article
                    className='card card-hover h-full flex flex-col gap-3.5'
                    style={
                      {
                        '--tw-shadow-color': color,
                      } as React.CSSProperties
                    }
                  >
                    <div className='flex items-center justify-between'>
                      <span
                        className='inline-block px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide'
                        style={{
                          background: `${color}18`,
                          color,
                          border: `1px solid ${color}35`,
                        }}
                      >
                        {tag}
                      </span>
                      <span className='text-xs text-[--color-yw-text-muted]'>
                        {readTime}
                      </span>
                    </div>

                    <h2 className='font-heading font-bold text-base text-[--color-yw-text-primary] leading-[1.4] m-0'>
                      {title}
                    </h2>

                    <p className='text-[13px] text-[--color-yw-text-muted] leading-[1.7] flex-1 m-0'>
                      {excerpt}
                    </p>

                    <div className='flex items-center justify-between mt-1'>
                      <span className='text-xs text-[--color-yw-text-muted]'>
                        {date}
                      </span>
                      <span
                        className='text-[13px] font-semibold'
                        style={{ color }}
                      >
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
