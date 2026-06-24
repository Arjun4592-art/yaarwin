'use client'

import Link from 'next/link'

const sections = [
  {
    icon: '✅',
    title: 'Acceptance of Terms',
    content: [
      'By accessing or using this website, you confirm that you have read, understood, and agreed to these Terms and Conditions.',
      'If you do not agree with any part of these terms, please stop using this website immediately.',
      'We reserve the right to update these terms at any time. The "Last Updated" date at the top of this page reflects the most recent revision. Continued use of the website after changes are made constitutes your acceptance of the updated terms.',
    ],
  },
  {
    icon: '📌',
    title: 'Nature of This Website',
    content: [
      'YaarWin Game is an informational website only. We publish guides, news, and general information about the YaarWin gaming platform.',
      'We do not own, operate, or manage the YaarWin gaming platform. We are not affiliated with or endorsed by the official YaarWin platform in any way.',
      'We do not hold user accounts, process payments, or provide direct gaming services of any kind.',
    ],
  },
  {
    icon: '📖',
    title: 'Use of Content',
    content: [
      'All written content, layout, and design on this website are the property of YaarWin Game unless otherwise stated.',
      'The YaarWin name, logo, and related product imagery belong to their respective owners and are used here for informational and editorial purposes only.',
      'You may quote short excerpts from this website with appropriate credit and a link back. Please contact us before reproducing or redistributing larger sections of content.',
    ],
  },
  {
    icon: '⚠️',
    title: 'Accuracy of Information',
    content: [
      'We make every reasonable effort to ensure that the content on this website is accurate and up to date. However, we cannot guarantee that all information — including gift codes, bonus details, or platform features — is currently active or correct.',
      'Information is provided on an "as is" basis for general guidance only. Always verify specific details directly within the official YaarWin app before taking any action.',
      'We update our content regularly, but game rules, bonus tiers, and platform features can change at any time without notice.',
    ],
  },
  {
    icon: '🔗',
    title: 'Third-Party Links',
    content: [
      'This website contains links to external websites, including the official YaarWin platform. Once you leave this site, you are subject to the terms and privacy policies of the destination website — not ours.',
      'We do not control, endorse, or take responsibility for the content or practices of any third-party websites we link to.',
    ],
  },
  {
    icon: '💸',
    title: 'No Financial or Legal Advice',
    content: [
      'Nothing on this website constitutes financial, legal, or investment advice of any kind.',
      'Online gaming and colour prediction games involve real money and real risk. They should never be treated as a reliable source of income or a savings strategy.',
      'We strongly encourage all users to participate only with money they can genuinely afford to lose, and to play responsibly at all times.',
    ],
  },
  {
    icon: '🚫',
    title: 'Limitation of Liability',
    content: [
      'To the fullest extent permitted by applicable law, we are not liable for any direct, indirect, incidental, or consequential losses arising from your use of this website.',
      'This includes any losses you may incur while using or accessing the official YaarWin gaming platform through links found on this site.',
      'We are not responsible for any decisions made based on the information published on this website.',
    ],
  },
  {
    icon: '🔞',
    title: 'Age Restriction',
    content: [
      'This website is intended for users who are 18 years of age or older.',
      'By using this website, you confirm that you meet the minimum age requirement in your jurisdiction.',
      'We do not knowingly provide content to minors. If you are under 18, please leave this website immediately.',
    ],
  },
  {
    icon: '🔄',
    title: 'Changes to These Terms',
    content: [
      'We may revise these Terms and Conditions from time to time. Any significant updates will be reflected on this page with an updated "Last Updated" date.',
      'We recommend reviewing this page periodically to stay informed of any changes.',
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

export default function TermsAndConditionsPage() {
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
            Terms & <span className='text-gradient'>Conditions</span>
          </h1>
          <p className='text-[15px] text-[var(--color-yw-text-secondary)] leading-[1.8] max-w-[520px] mx-auto'>
            Please read these terms carefully before using this website. By
            accessing YaarWin Game, you agree to be bound by the conditions
            outlined below.
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
              These Terms and Conditions apply to this informational website
              only. They do not govern your use of the official YaarWin gaming
              platform, which is subject to its own separate terms.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════ TERMS SECTIONS ══════════════ */}
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
            Questions about these terms?{' '}
            <Link
              href='/contact-us'
              className='text-[var(--color-yw-green)] font-semibold hover:text-[var(--color-yw-green-mid)] transition-colors duration-200'
            >
              Contact us →
            </Link>
          </p>
          <Link
            href='/privacy-policy'
            className='text-[13px] text-[var(--color-yw-green)] font-semibold hover:text-[var(--color-yw-green-mid)] transition-colors duration-200'
          >
            View Privacy Policy →
          </Link>
        </div>
      </section>
    </div>
  )
}
