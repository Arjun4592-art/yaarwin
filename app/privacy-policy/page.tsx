'use client'

import Link from 'next/link'

const sections = [
  {
    icon: '📋',
    title: 'Information We Collect',
    content: [
      'We collect only the minimum information required to operate this website effectively. This includes basic server logs such as IP address, browser type, pages visited, and timestamps.',
      'If you reach out to us via our contact form, we collect your name, email address, and message — solely to respond to your inquiry. This data is not stored beyond the time needed to handle your request.',
      'We do not collect financial information, gaming account details, or any sensitive personal data.',
    ],
  },
  {
    icon: '🎯',
    title: 'How We Use Your Information',
    content: [
      'To operate and improve the performance of this website.',
      'To respond to messages or queries you send through our contact page.',
      'To understand how visitors interact with our content through anonymised analytics.',
      'We do not use your information for targeted advertising, and we never sell or rent your data to any third party under any circumstances.',
    ],
  },
  {
    icon: '🍪',
    title: 'Cookies',
    content: [
      'This website uses a small number of cookies to maintain basic site preferences and to gather anonymised analytics data (such as page views and click events) through tools like Google Analytics.',
      'These cookies do not track you across other websites or link your activity to any personal identity.',
      'You can manage or disable cookies at any time through your browser settings.',
    ],
  },
  {
    icon: '🔗',
    title: 'Third-Party Links',
    content: [
      "Our website contains links to external platforms, including the official YaarWin Game website. Once you follow an outbound link, you are subject to that site's own privacy policy — not ours.",
      'We are not responsible for the privacy practices or content of any third-party websites we link to.',
    ],
  },
  {
    icon: '🔐',
    title: 'Data Security',
    content: [
      'We take reasonable steps to protect any information collected through this website from unauthorised access or misuse.',
      'However, no method of internet transmission is completely secure. We encourage users to exercise caution when sharing personal information online.',
    ],
  },
  {
    icon: '🔞',
    title: 'Age Restriction',
    content: [
      'This website is intended strictly for users who are 18 years of age or older.',
      'We do not knowingly collect data from minors. If you believe a minor has submitted a message through our contact form, please notify us and we will delete the information promptly.',
    ],
  },
  {
    icon: '✋',
    title: 'Your Rights',
    content: [
      'You have the right to know what personal data we hold about you.',
      'You may request a correction of any inaccurate data, or ask for deletion of your information where legally permissible.',
      'You can withdraw consent for any marketing communications at any time.',
      'To make a data request, use our Contact page. We aim to respond within 30 days.',
    ],
  },
  {
    icon: '🔄',
    title: 'Updates to This Policy',
    content: [
      'We may update this Privacy Policy from time to time to reflect changes in how we operate or to comply with applicable regulations.',
      'The "Last Updated" date at the top of this page will reflect the most recent revision. Continued use of this website after any changes constitutes your acceptance of the updated policy.',
    ],
  },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className='text-[11px] font-semibold tracking-[0.1em] uppercase text-[var(--color-yw-green)]'>
      {children}
    </span>
  )
}

export default function PrivacyPolicyPage() {
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
          <SectionLabel>Legal</SectionLabel>
          <h1 className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.2] text-[var(--color-yw-text-primary)] mt-3 mb-5 tracking-tight'>
            Privacy <span className='text-gradient'>Policy</span>
          </h1>
          <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.8] max-w-[520px] mx-auto'>
            This policy explains what limited information we collect when you
            visit YaarWin Game, how we use it, and how we keep it safe. We are
            an informational website — we do not handle gaming accounts,
            payments, or user data from the YaarWin platform.
          </p>
          <p className='text-[12px] text-[var(--color-yw-text-muted)] mt-4'>
            Last Updated: June 2026
          </p>
        </div>
      </section>

      {/* ══════════════ DISCLAIMER BANNER ══════════════ */}
      <section className='px-6 pb-4 bg-[var(--color-yw-off-white)]'>
        <div className='max-w-[860px] mx-auto'>
          <div className='rounded-2xl px-7 py-5 bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.2)]'>
            <p className='text-[13px] text-[var(--color-yw-text-muted)] leading-[1.75]'>
              <strong className='text-[var(--color-yw-warning)]'>
                ⚠️ Important:
              </strong>{' '}
              This Privacy Policy applies only to the YaarWin Game informational
              website. It does not cover the official YaarWin gaming platform at
              yaarwin.game, which operates under its own separate privacy terms.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ POLICY SECTIONS ══════════════ */}
      <section className='py-16 px-6 pb-24 bg-[var(--color-yw-white)]'>
        <div className='max-w-[860px] mx-auto flex flex-col gap-6'>
          {sections.map(({ icon, title, content }, i) => (
            <div
              key={title}
              className='card animate-fade-in-up'
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <div className='flex items-start gap-4'>
                <span className='text-[26px] shrink-0 mt-0.5'>{icon}</span>
                <div className='flex-1'>
                  <h2 className='font-[var(--yw-font-heading)] font-bold text-[16px] text-[var(--color-yw-text-primary)] mb-3'>
                    {title}
                  </h2>
                  <ul className='flex flex-col gap-2.5'>
                    {content.map((line, j) => (
                      <li
                        key={j}
                        className='flex items-start gap-2.5 text-[13px] text-[var(--color-yw-text-muted)] leading-[1.75]'
                      >
                        <span className='text-[var(--color-yw-green)] shrink-0 mt-[3px] text-[10px]'>
                          ●
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className='max-w-[860px] mx-auto mt-12 pt-8 border-t border-[var(--color-yw-white-border)] flex flex-wrap gap-4 justify-between items-center'>
          <p className='text-[13px] text-[var(--color-yw-text-muted)]'>
            Questions about this policy?{' '}
            <Link
              href='/contact-us'
              className='text-[var(--color-yw-green)] font-semibold hover:text-[var(--color-yw-green-mid)] transition-colors duration-200'
            >
              Contact us →
            </Link>
          </p>
          <Link
            href='/terms-and-conditions'
            className='text-[13px] text-[var(--color-yw-green)] font-semibold hover:text-[var(--color-yw-green-mid)] transition-colors duration-200'
          >
            View Terms & Conditions →
          </Link>
        </div>
      </section>
    </div>
  )
}
