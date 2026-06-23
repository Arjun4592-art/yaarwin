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
  { label: 'About Us', href: '/about' },
  { label: 'Responsible Gaming', href: '/responsible-gaming' },
  { label: 'Contact Us', href: '/contact' },
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--yw-z-modal)' as any,
          transition: `background-color var(--yw-duration-3) var(--yw-ease), box-shadow var(--yw-duration-3) var(--yw-ease), backdrop-filter var(--yw-duration-3) var(--yw-ease)`,
          backgroundColor: scrolled ? 'rgba(10,13,11,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'blur(0px)',
          boxShadow: scrolled ? '0 1px 0 rgba(0,200,83,0.12)' : 'none',
        }}
      >
        <nav
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            height: 68,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href='/'
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background:
                  'linear-gradient(135deg, var(--color-yw-green) 0%, var(--color-yw-green-dark) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 800,
                fontSize: 16,
                color: '#000',
                letterSpacing: '-0.5px',
                flexShrink: 0,
                boxShadow: 'var(--yw-shadow-green)',
              }}
            >
              YW
            </span>
            <span
              style={{
                fontFamily: 'var(--yw-font-heading)',
                fontWeight: 700,
                fontSize: 20,
                color: 'var(--color-yw-white)',
                letterSpacing: '-0.3px',
              }}
            >
              Yaar<span style={{ color: 'var(--color-yw-green)' }}>Win</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 4 }}
            className='desktop-nav'
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'var(--yw-font-body)',
                  color: isActive(link.href)
                    ? 'var(--color-yw-green)'
                    : 'var(--color-yw-text-secondary)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease, background 0.2s ease',
                  background: isActive(link.href)
                    ? 'rgba(0,200,83,0.08)'
                    : 'transparent',
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* Blog Dropdown */}
            <div style={{ position: 'relative' }} ref={dropdownRef}>
              <button
                onClick={() => setBlogOpen((v) => !v)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 14px',
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: 'var(--yw-font-body)',
                  border: 'none',
                  cursor: 'pointer',
                  color: pathname.startsWith('/blogs')
                    ? 'var(--color-yw-green)'
                    : 'var(--color-yw-text-secondary)',
                  background: pathname.startsWith('/blogs')
                    ? 'rgba(0,200,83,0.08)'
                    : 'transparent',
                  transition: 'color 0.2s ease, background 0.2s ease',
                }}
              >
                Blogs
                <svg
                  width='12'
                  height='12'
                  viewBox='0 0 12 12'
                  fill='none'
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: blogOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path
                    d='M2 4L6 8L10 4'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

              {blogOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 8px)',
                    right: 0,
                    minWidth: 300,
                    background: 'var(--color-yw-black-card)',
                    border: '1px solid var(--color-yw-black-border)',
                    borderRadius: 12,
                    padding: 8,
                    boxShadow: 'var(--yw-shadow-card)',
                    animation: 'yw-fade-in-up 0.2s ease forwards',
                  }}
                >
                  {blogLinks.map((b) => (
                    <Link
                      key={b.href}
                      href={b.href}
                      style={{
                        display: 'block',
                        padding: '10px 14px',
                        borderRadius: 8,
                        fontSize: 13,
                        color: 'var(--color-yw-text-secondary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s, background 0.2s',
                        fontFamily: 'var(--yw-font-body)',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.target as HTMLElement).style.color =
                          'var(--color-yw-white)'
                        ;(e.target as HTMLElement).style.background =
                          'rgba(0,200,83,0.08)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.target as HTMLElement).style.color =
                          'var(--color-yw-text-secondary)'
                        ;(e.target as HTMLElement).style.background =
                          'transparent'
                      }}
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
              className='btn btn-primary'
              style={{
                padding: '9px 20px',
                fontSize: 14,
                marginLeft: 8,
                borderRadius: 8,
              }}
            >
              Play Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            className='hamburger-btn'
            onClick={() => setMenuOpen((v) => !v)}
            aria-label='Toggle menu'
            style={{
              display: 'none',
              flexDirection: 'column',
              gap: 5,
              padding: 8,
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: 24,
                  height: 2,
                  background: 'var(--color-yw-white)',
                  borderRadius: 2,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  transform: menuOpen
                    ? i === 0
                      ? 'translateY(7px) rotate(45deg)'
                      : i === 2
                        ? 'translateY(-7px) rotate(-45deg)'
                        : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(320px, 90vw)',
          zIndex: 100,
          background: 'var(--color-yw-black-card)',
          borderLeft: '1px solid var(--color-yw-black-border)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            padding: '0 24px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--color-yw-black-border)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 700,
              fontSize: 18,
              color: 'var(--color-yw-white)',
            }}
          >
            Yaar<span style={{ color: 'var(--color-yw-green)' }}>Win</span>
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-yw-text-secondary)',
              cursor: 'pointer',
              padding: 4,
            }}
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

        <div style={{ padding: '16px 16px 0', flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '13px 16px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                color: isActive(link.href)
                  ? 'var(--color-yw-green)'
                  : 'var(--color-yw-text-primary)',
                textDecoration: 'none',
                marginBottom: 4,
                background: isActive(link.href)
                  ? 'rgba(0,200,83,0.08)'
                  : 'transparent',
                fontFamily: 'var(--yw-font-body)',
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Blog Accordion */}
          <div>
            <button
              onClick={() => setMobileBlogOpen((v) => !v)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '13px 16px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                color: pathname.startsWith('/blogs')
                  ? 'var(--color-yw-green)'
                  : 'var(--color-yw-text-primary)',
                background: pathname.startsWith('/blogs')
                  ? 'rgba(0,200,83,0.08)'
                  : 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--yw-font-body)',
                marginBottom: 4,
              }}
            >
              Blogs
              <svg
                width='14'
                height='14'
                viewBox='0 0 12 12'
                fill='none'
                style={{
                  transition: 'transform 0.2s',
                  transform: mobileBlogOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path
                  d='M2 4L6 8L10 4'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            <div
              style={{
                overflow: 'hidden',
                maxHeight: mobileBlogOpen ? 400 : 0,
                transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <div
                style={{
                  padding: '0 0 8px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {blogLinks.map((b) => (
                  <Link
                    key={b.href}
                    href={b.href}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: 8,
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                      textDecoration: 'none',
                      borderLeft: '2px solid var(--color-yw-green-dark)',
                      fontFamily: 'var(--yw-font-body)',
                    }}
                  >
                    {b.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div style={{ padding: '16px 16px 0' }}>
            <a
              href='https://4yaarwin.com/#/register?invitationCode=24348109027'
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-primary'
              style={{
                width: '100%',
                padding: '14px',
                fontSize: 15,
                borderRadius: 10,
                justifyContent: 'center',
              }}
            >
              🎮 Play Now — Register Free
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
