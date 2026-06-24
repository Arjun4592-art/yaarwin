import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getBlogBySlug, blogs, type Section } from '@/components/data/blogs'

/* ── Metadata ─────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) return {}
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
  }
}

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

/* ── Tag colours ──────────────────────────────────────────────────────── */
const tagStyles: Record<string, { pill: string; dot: string }> = {
  'App Guide': {
    pill: 'bg-[#00c853]/10 text-[#00c853] border border-[#00c853]/20',
    dot: 'bg-[#00c853]',
  },
  'Login Guide': {
    pill: 'bg-[#29b6f6]/10 text-[#29b6f6] border border-[#29b6f6]/20',
    dot: 'bg-[#29b6f6]',
  },
  Event: {
    pill: 'bg-[#ffb300]/10 text-[#ffb300] border border-[#ffb300]/20',
    dot: 'bg-[#ffb300]',
  },
  Updates: {
    pill: 'bg-[#ab47bc]/10 text-[#ab47bc] border border-[#ab47bc]/20',
    dot: 'bg-[#ab47bc]',
  },
}

/* ── Section renderer ────────────────────────────────────────────────── */
function RenderSection({ section }: { section: Section }) {
  switch (section.type) {
    /* Intro */
    case 'intro':
      return (
        <p className='text-[17px] leading-[1.85] text-[var(--color-yw-text-secondary)] border-l-[3px] border-[var(--color-yw-green)] pl-5 mb-7'>
          {section.text}
        </p>
      )

    /* Info table */
    case 'table':
      return (
        <div className='overflow-x-auto mb-8 rounded-xl border border-[var(--color-yw-white-border)]'>
          <table className='w-full border-collapse'>
            <tbody>
              {section.rows.map(([label, value], i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? 'bg-[var(--color-yw-white-tint)]'
                      : 'bg-transparent'
                  }
                >
                  <td className='px-[18px] py-3 text-[13px] font-semibold text-[var(--color-yw-green)] whitespace-nowrap w-[38%] border-b border-[var(--color-yw-white-border)]'>
                    {label}
                  </td>
                  <td className='px-[18px] py-3 text-[13px] text-[var(--color-yw-text-primary)] border-b border-[var(--color-yw-white-border)]'>
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    /* Heading 2 */
    case 'heading2':
      return (
        <h2 className='font-[var(--yw-font-heading)] font-bold text-[clamp(1.25rem,3vw,1.55rem)] text-[var(--color-yw-text-primary)] mt-10 mb-4 tracking-tight leading-[1.3]'>
          {section.text}
        </h2>
      )

    /* Heading 3 */
    case 'heading3':
      return (
        <h3 className='font-[var(--yw-font-heading)] font-semibold text-[clamp(1rem,2.5vw,1.15rem)] text-[var(--color-yw-text-primary)] mt-7 mb-3 tracking-tight'>
          {section.text}
        </h3>
      )

    /* Paragraph */
    case 'paragraph':
      return (
        <p className='text-[15px] leading-[1.85] text-[var(--color-yw-text-secondary)] mb-6'>
          {section.text}
        </p>
      )

    /* Numbered steps */
    case 'steps':
      return (
        <ol className='list-none p-0 mb-7 flex flex-col gap-[10px]'>
          {section.items.map((item, i) => (
            <li
              key={i}
              className='flex items-start gap-[14px] bg-[var(--color-yw-white-tint)] border border-[var(--color-yw-white-border)] rounded-[10px] px-4 py-3 text-[14px] text-[var(--color-yw-text-secondary)] leading-[1.6]'
            >
              <span className='shrink-0 w-[26px] h-[26px] rounded-full bg-[rgba(0,200,83,0.12)] border border-[rgba(0,200,83,0.35)] text-[var(--color-yw-green)] text-[12px] font-bold flex items-center justify-center'>
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      )

    /* Bullet list */
    case 'bullets':
      return (
        <ul className='list-none p-0 mb-7 flex flex-col gap-2'>
          {section.items.map((item, i) => (
            <li
              key={i}
              className='flex items-start gap-3 text-[14px] text-[var(--color-yw-text-secondary)] leading-[1.7] pl-1'
            >
              <span className='mt-[7px] shrink-0 w-[6px] h-[6px] rounded-full bg-[var(--color-yw-green)] opacity-70' />
              {item}
            </li>
          ))}
        </ul>
      )

    /* Prize table */
    case 'prize_table':
      return (
        <div className='overflow-x-auto mb-8 rounded-xl border border-[var(--color-yw-white-border)]'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-[rgba(0,200,83,0.07)]'>
                {['Rank', 'Prize', 'Value'].map((h) => (
                  <th
                    key={h}
                    className='px-[18px] py-3 text-[12px] font-bold text-[var(--color-yw-green)] text-left tracking-[0.06em] uppercase border-b border-[var(--color-yw-white-border)]'
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, i) => (
                <tr
                  key={i}
                  className={
                    i % 2 === 0
                      ? 'bg-[var(--color-yw-white-tint)]'
                      : 'bg-transparent'
                  }
                >
                  <td className='px-[18px] py-3 text-[13px] text-[var(--color-yw-text-primary)] border-b border-[var(--color-yw-white-border)] whitespace-nowrap'>
                    {row.rank}
                  </td>
                  <td className='px-[18px] py-3 text-[13px] text-[var(--color-yw-text-secondary)] border-b border-[var(--color-yw-white-border)]'>
                    {row.prize}
                  </td>
                  <td className='px-[18px] py-3 text-[13px] font-semibold text-[var(--color-yw-green)] border-b border-[var(--color-yw-white-border)] whitespace-nowrap'>
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    /* Note / callout */
    case 'note':
      return (
        <div className='bg-[rgba(255,179,0,0.06)] border border-[rgba(255,179,0,0.25)] rounded-[10px] px-[18px] py-[14px] mb-7 text-[13px] text-[#ffb300] leading-[1.7]'>
          ⚠️ {section.text}
        </div>
      )

    /* CTA button */
    case 'cta':
      return (
        <div className='my-9 text-center'>
          <a
            href={section.href}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block px-8 py-3.5 rounded-full bg-[#00c853] text-white! font-bold text-[15px] no-underline tracking-[0.01em] shadow-[0_0_24px_rgba(0,200,83,0.3)] transition-opacity duration-200 hover:opacity-90'
          >
            {section.label}
          </a>
        </div>
      )

    /* FAQ accordion */
    case 'faq':
      return (
        <div className='mb-8 flex flex-col gap-[10px]'>
          {section.items.map((item, i) => (
            <details
              key={i}
              className='bg-[var(--color-yw-white-tint)] border border-[var(--color-yw-white-border)] rounded-[10px] px-[18px] py-[14px] group'
            >
              <summary className='text-[14px] font-semibold text-[var(--color-yw-text-primary)] cursor-pointer list-none flex items-center justify-between gap-3'>
                {item.q}
                <span className='shrink-0 text-[var(--color-yw-green)] text-[18px] leading-none'>
                  +
                </span>
              </summary>
              <p className='mt-3 mb-0 text-[13px] leading-[1.75] text-[var(--color-yw-text-secondary)]'>
                {item.a}
              </p>
            </details>
          ))}
        </div>
      )

    /* Feature grid */
    case 'feature_grid':
      return (
        <div className='grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4 mb-8'>
          {section.items.map((item, i) => (
            <div
              key={i}
              className='bg-[var(--color-yw-white-tint)] border border-[var(--color-yw-white-border)] rounded-xl px-[18px] py-5 flex flex-col gap-2 transition-shadow duration-300 hover:shadow-[var(--yw-shadow-card-hover)]'
            >
              <span className='text-[28px]'>{item.icon}</span>
              <p className='m-0 text-[14px] font-semibold text-[var(--color-yw-text-primary)] leading-[1.3]'>
                {item.title}
              </p>
              <p className='m-0 text-[12px] text-[var(--color-yw-text-secondary)] leading-[1.65]'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )

    default:
      return null
  }
}

/* ── Page ─────────────────────────────────────────────────────────────── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const blog = getBlogBySlug(slug)
  if (!blog) notFound()

  const tag = tagStyles[blog.tag] ?? tagStyles['App Guide']

  return (
    <div className='font-[var(--yw-font-body)] text-[var(--color-yw-text-primary)] bg-[var(--color-yw-off-white)] min-h-screen'>
      {/* ── Hero ── */}
      <section className='pt-[140px] pb-16 px-6 bg-[var(--color-yw-off-white)]'>
        {/* subtle green radial glow at top */}
        <div className='absolute inset-x-0 top-0 h-[420px] pointer-events-none bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(0,200,83,0.1)_0%,transparent_70%)]' />

        <div className='relative max-w-[760px] mx-auto'>
          {/* Breadcrumb */}
          <nav className='flex items-center gap-1.5 mb-7 text-[13px] text-[var(--color-yw-text-muted)]'>
            <Link
              href='/'
              className='text-[var(--color-yw-text-muted)] hover:text-[var(--color-yw-green)] transition-colors duration-200 no-underline'
            >
              Home
            </Link>
            <span className='opacity-50'>›</span>
            <Link
              href='/blogs'
              className='text-[var(--color-yw-text-muted)] hover:text-[var(--color-yw-green)] transition-colors duration-200 no-underline'
            >
              Blogs
            </Link>
            <span className='opacity-50'>›</span>
            <span className='text-[var(--color-yw-text-secondary)] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]'>
              {blog.title}
            </span>
          </nav>

          {/* Tag + meta row */}
          <div className='flex items-center gap-3 mb-5 flex-wrap'>
            <span
              className={`inline-block px-3 py-[3px] rounded-full text-[11px] font-semibold tracking-[0.04em] ${tag.pill}`}
            >
              {blog.tag}
            </span>
            <span className='text-[12px] text-[var(--color-yw-text-muted)]'>
              {blog.date}
            </span>
            <span className='text-[12px] text-[var(--color-yw-text-muted)]'>
              · {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className='font-[var(--yw-font-heading)] font-extrabold text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.2] text-[var(--color-yw-text-primary)] m-0 tracking-[-0.02em]'>
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ── Divider strip ── */}
      <div className='h-px bg-gradient-to-r from-transparent via-[rgba(0,200,83,0.25)] to-transparent' />

      {/* ── Content ── */}
      <section className='py-14 px-6 pb-24 bg-[var(--color-yw-white)]'>
        <div className='max-w-[760px] mx-auto'>
          {blog.sections.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}

          {/* Back link */}
          <div className='mt-14 pt-7 border-t border-[var(--color-yw-white-border)]'>
            <Link
              href='/blogs'
              className='text-[14px] text-[var(--color-yw-green)] no-underline font-semibold inline-flex items-center gap-1.5 hover:text-[var(--color-yw-green-mid)] transition-colors duration-200'
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
