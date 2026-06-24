'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const blogLinks = [
  {
    label: 'YaarWin Grand Referral Event 2026',
    href: '/blogs/yaarwin-grand-referral-event',
  },
  {
    label: 'YaarWin Telegram Channel 2026',
    href: '/blogs/yaarwin-telegram-channel',
  },
  {
    label: 'YaarWin Game App Download APK (2026)',
    href: '/blogs/yaarwin-game-app-download',
  },
  { label: 'Yaar Win Login', href: '/blogs/yaar-win-login' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
  { label: 'Contact Us', href: '/contact-us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [mobileBlogOpen, setMobileBlogOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setBlogOpen(false)
    setMobileBlogOpen(false)
  }, [pathname])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setBlogOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  /* ── shared class builders ── */
  const desktopLinkClass = (href: string) =>
    [
      'px-3.5 py-2 rounded-lg text-sm font-medium font-[var(--yw-font-body)] transition-colors duration-200 no-underline',
      isActive(href)
        ? 'text-[var(--color-yw-green)] bg-[rgba(0,200,83,0.08)]'
        : 'text-[var(--color-yw-text-muted)] hover:text-[var(--color-yw-text-secondary)] hover:bg-[var(--color-yw-white-hover)]',
    ].join(' ')

  const mobileLinkClass = (href: string) =>
    [
      'block px-4 py-3 rounded-[10px] text-[15px] font-medium font-[var(--yw-font-body)] no-underline mb-1 transition-colors duration-200',
      isActive(href)
        ? 'text-[var(--color-yw-green)] bg-[rgba(0,200,83,0.08)]'
        : 'text-[var(--color-yw-text-primary)] hover:bg-[var(--color-yw-white-tint)]',
    ].join(' ')

  const blogsBtnBase = (active: boolean) =>
    [
      'flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium font-[var(--yw-font-body)] border-none transition-colors duration-200 cursor-pointer bg-transparent',
      active
        ? 'text-[var(--color-yw-green)] bg-[rgba(0,200,83,0.08)]'
        : 'text-[var(--color-yw-text-muted)] hover:text-[var(--color-yw-text-secondary)] hover:bg-[var(--color-yw-white-hover)]',
    ].join(' ')

  const mobileBlogsBtnClass = (active: boolean) =>
    [
      'w-full flex items-center justify-between px-4 py-3 rounded-[10px] text-[15px] font-medium font-[var(--yw-font-body)] border-none cursor-pointer mb-1 transition-colors duration-200 bg-transparent',
      active
        ? 'text-[var(--color-yw-green)] bg-[rgba(0,200,83,0.08)]'
        : 'text-[var(--color-yw-text-primary)] hover:bg-[var(--color-yw-white-tint)]',
    ].join(' ')

  const ChevronIcon = ({ open }: { open: boolean }) => (
    <svg
      width='12'
      height='12'
      viewBox='0 0 12 12'
      fill='none'
      className={`transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`}
    >
      <path
        d='M2 4L6 8L10 4'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )

  return (
    <>
      {/* ── Header ── */}
      <header
        className={[
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          scrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-[rgba(0,200,83,0.12)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <nav className='max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2.5 no-underline'>
            <span className='w-9 h-9 rounded-[10px] flex items-center justify-center shrink-0 font-[var(--yw-font-heading)] font-extrabold text-base text-[#003d18] bg-gradient-to-br from-[#00c853] to-[#69f0ae] shadow-[var(--yw-shadow-green-sm)] animate-pulse-glow'>
              YW
            </span>
            <span className='font-[var(--yw-font-heading)] font-bold text-xl text-[var(--color-yw-text-primary)] tracking-tight'>
              Yaar<span className='text-[var(--color-yw-green)]'>Win</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={desktopLinkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}

            {/* Blog Dropdown */}
            <div className='relative' ref={dropdownRef}>
              <button
                onClick={() => setBlogOpen((v) => !v)}
                className={blogsBtnBase(pathname.startsWith('/blogs'))}
              >
                Blogs
                <ChevronIcon open={blogOpen} />
              </button>

              {blogOpen && (
                <div className='absolute top-[calc(100%+8px)] right-0 min-w-[300px] bg-[var(--color-yw-white)] border border-[var(--color-yw-white-border)] rounded-xl p-2 shadow-[var(--yw-shadow-card)] animate-fade-in-up z-50'>
                  {blogLinks.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      className='block px-3.5 py-2.5 rounded-lg text-[13px] text-[var(--color-yw-text-muted)] font-[var(--yw-font-body)] no-underline transition-colors duration-200 hover:text-[var(--color-yw-text-primary)] hover:bg-[var(--color-yw-white-tint)]'
                    >
                      {b.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary btn-sm ml-2'
            >
              Play Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className='md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer'
            onClick={() => setMenuOpen((v) => !v)}
            aria-label='Toggle menu'
          >
            <span
              className='block w-6 h-0.5 rounded-sm bg-[var(--color-yw-text-primary)] transition-all duration-300'
              style={{
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className='block w-6 h-0.5 rounded-sm bg-[var(--color-yw-text-primary)] transition-all duration-300'
              style={{
                transform: menuOpen ? 'scaleX(0)' : 'none',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className='block w-6 h-0.5 rounded-sm bg-[var(--color-yw-text-primary)] transition-all duration-300'
              style={{
                transform: menuOpen
                  ? 'translateY(-7px) rotate(-45deg)'
                  : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        className='fixed inset-0 z-[99] bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden'
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className='fixed top-0 right-0 bottom-0 z-[100] bg-[var(--color-yw-white)] border-l border-[var(--color-yw-white-border)] flex flex-col py-6 overflow-y-auto transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden shadow-[var(--yw-shadow-card)]'
        style={{
          width: 'min(320px, 90vw)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Drawer Header */}
        <div className='px-6 pb-6 flex items-center justify-between border-b border-[var(--color-yw-white-border)]'>
          <span className='font-[var(--yw-font-heading)] font-bold text-lg text-[var(--color-yw-text-primary)]'>
            Yaar<span className='text-[var(--color-yw-green)]'>Win</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            className='bg-transparent border-none text-[var(--color-yw-text-muted)] cursor-pointer p-1 hover:text-[var(--color-yw-text-primary)] transition-colors duration-200'
          >
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path
                d='M4 4L16 16M16 4L4 16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>

        {/* Drawer Links */}
        <div className='px-4 pt-4 flex-1'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={mobileLinkClass(link.href)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Blog Accordion */}
          <div>
            <button
              onClick={() => setMobileBlogOpen((v) => !v)}
              className={mobileBlogsBtnClass(pathname.startsWith('/blogs'))}
            >
              Blogs
              <ChevronIcon open={mobileBlogOpen} />
            </button>

            <div
              className='overflow-hidden transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]'
              style={{ maxHeight: mobileBlogOpen ? 400 : 0 }}
            >
              <div className='pl-3 pb-2 flex flex-col gap-0.5'>
                {blogLinks.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    className='block px-3.5 py-2.5 rounded-lg text-[13px] text-[var(--color-yw-text-muted)] font-[var(--yw-font-body)] no-underline border-l-2 border-[var(--color-yw-green)] hover:text-[var(--color-yw-text-primary)] hover:bg-[var(--color-yw-white-tint)] transition-colors duration-200'
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='px-0 pt-4'>
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary w-full justify-center py-3.5 text-[15px] rounded-[10px]'
            >
              🎮 Play Now — Register Free
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
