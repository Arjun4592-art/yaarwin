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

/* ── Tag colours (mirrors listing page) ──────────────────────────────── */
const tagColors: Record<string, string> = {
  'App Guide': '#00c853',
  'Login Guide': '#29b6f6',
  Event: '#ffb300',
  Updates: '#ab47bc',
}

/* ── Section renderer ────────────────────────────────────────────────── */
function RenderSection({ section }: { section: Section }) {
  switch (section.type) {
    /* Intro */
    case 'intro':
      return (
        <p
          style={{
            fontSize: 17,
            lineHeight: 1.85,
            color: 'var(--color-yw-text-secondary)',
            borderLeft: '3px solid var(--color-yw-green)',
            paddingLeft: 20,
            margin: '0 0 28px',
          }}
        >
          {section.text}
        </p>
      )

    /* Info table */
    case 'table':
      return (
        <div
          style={{
            overflowX: 'auto',
            margin: '0 0 32px',
            borderRadius: 12,
            border: '1px solid var(--color-yw-black-border)',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {section.rows.map(([label, value], i) => (
                <tr
                  key={i}
                  style={{
                    background:
                      i % 2 === 0
                        ? 'var(--color-yw-black-card)'
                        : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '12px 18px',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--color-yw-green)',
                      whiteSpace: 'nowrap',
                      width: '38%',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                    }}
                  >
                    {label}
                  </td>
                  <td
                    style={{
                      padding: '12px 18px',
                      fontSize: 13,
                      color: 'var(--color-yw-text-primary)',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                    }}
                  >
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    /* Headings */
    case 'heading2':
      return (
        <h2
          style={{
            fontFamily: 'var(--yw-font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(1.25rem, 3vw, 1.55rem)',
            color: 'var(--color-yw-white)',
            margin: '40px 0 16px',
            letterSpacing: '-0.01em',
            lineHeight: 1.3,
          }}
        >
          {section.text}
        </h2>
      )

    case 'heading3':
      return (
        <h3
          style={{
            fontFamily: 'var(--yw-font-heading)',
            fontWeight: 600,
            fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
            color: 'var(--color-yw-white)',
            margin: '28px 0 12px',
            letterSpacing: '-0.01em',
          }}
        >
          {section.text}
        </h3>
      )

    /* Paragraph */
    case 'paragraph':
      return (
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.85,
            color: 'var(--color-yw-text-secondary)',
            margin: '0 0 24px',
          }}
        >
          {section.text}
        </p>
      )

    /* Numbered steps */
    case 'steps':
      return (
        <ol
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 14,
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 10,
                padding: '12px 16px',
                fontSize: 14,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.6,
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: 26,
                  height: 26,
                  borderRadius: '50%',
                  background: 'rgba(0,200,83,0.12)',
                  border: '1px solid rgba(0,200,83,0.35)',
                  color: 'var(--color-yw-green)',
                  fontSize: 12,
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: '0 0 28px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {section.items.map((item, i) => (
            <li
              key={i}
              style={{
                fontSize: 14,
                color: 'var(--color-yw-text-secondary)',
                lineHeight: 1.7,
                paddingLeft: 4,
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )

    /* Prize table */
    case 'prize_table':
      return (
        <div
          style={{
            overflowX: 'auto',
            margin: '0 0 32px',
            borderRadius: 12,
            border: '1px solid var(--color-yw-black-border)',
          }}
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(0,200,83,0.07)' }}>
                {['Rank', 'Prize', 'Value'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '12px 18px',
                      fontSize: 12,
                      fontWeight: 700,
                      color: 'var(--color-yw-green)',
                      textAlign: 'left',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                    }}
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
                  style={{
                    background:
                      i % 2 === 0
                        ? 'var(--color-yw-black-card)'
                        : 'transparent',
                  }}
                >
                  <td
                    style={{
                      padding: '12px 18px',
                      fontSize: 13,
                      color: 'var(--color-yw-text-primary)',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {row.rank}
                  </td>
                  <td
                    style={{
                      padding: '12px 18px',
                      fontSize: 13,
                      color: 'var(--color-yw-text-secondary)',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                    }}
                  >
                    {row.prize}
                  </td>
                  <td
                    style={{
                      padding: '12px 18px',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--color-yw-green)',
                      borderBottom: '1px solid var(--color-yw-black-border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
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
        <div
          style={{
            background: 'rgba(255,179,0,0.06)',
            border: '1px solid rgba(255,179,0,0.25)',
            borderRadius: 10,
            padding: '14px 18px',
            margin: '0 0 28px',
            fontSize: 13,
            color: '#ffca28',
            lineHeight: 1.7,
          }}
        >
          ⚠️ {section.text}
        </div>
      )

    /* CTA button */
    case 'cta':
      return (
        <div style={{ margin: '36px 0', textAlign: 'center' }}>
          <a
            href={section.href}
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'inline-block',
              padding: '14px 32px',
              borderRadius: 999,
              background: 'var(--color-yw-green)',
              color: '#000',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              boxShadow: '0 0 24px rgba(0,200,83,0.3)',
              transition: 'opacity 0.2s',
            }}
          >
            {section.label}
          </a>
        </div>
      )

    /* FAQ accordion (static) */
    case 'faq':
      return (
        <div
          style={{
            margin: '0 0 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}
        >
          {section.items.map((item, i) => (
            <details
              key={i}
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 10,
                padding: '14px 18px',
              }}
            >
              <summary
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--color-yw-white)',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 12,
                }}
              >
                {item.q}
                <span
                  style={{
                    flexShrink: 0,
                    color: 'var(--color-yw-green)',
                    fontSize: 18,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  margin: '12px 0 0',
                  fontSize: 13,
                  lineHeight: 1.75,
                  color: 'var(--color-yw-text-secondary)',
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      )

    /* Feature grid */
    case 'feature_grid':
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 16,
            margin: '0 0 32px',
          }}
        >
          {section.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--color-yw-black-card)',
                border: '1px solid var(--color-yw-black-border)',
                borderRadius: 12,
                padding: '20px 18px',
                display: 'flex',
                flexDirection: 'column',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 28 }}>{item.icon}</span>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--color-yw-white)',
                  lineHeight: 1.3,
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  margin: 0,
                  fontSize: 12,
                  color: 'var(--color-yw-text-secondary)',
                  lineHeight: 1.65,
                }}
              >
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

  const accentColor = tagColors[blog.tag] || 'var(--color-yw-green)'

  return (
    <div
      style={{
        fontFamily: 'var(--yw-font-body)',
        color: 'var(--color-yw-text-primary)',
        background: 'var(--color-yw-black)',
      }}
    >
      {/* ── Hero ── */}
      <section
        style={{
          padding: '140px 24px 64px',
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${accentColor}18 0%, transparent 70%), var(--color-yw-black)`,
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 28,
              fontSize: 13,
              color: 'var(--color-yw-text-muted)',
            }}
          >
            <Link
              href='/'
              style={{
                color: 'var(--color-yw-text-muted)',
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
            <span>›</span>
            <Link
              href='/blogs'
              style={{
                color: 'var(--color-yw-text-muted)',
                textDecoration: 'none',
              }}
            >
              Blogs
            </Link>
            <span>›</span>
            <span
              style={{
                color: 'var(--color-yw-text-secondary)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                maxWidth: 200,
              }}
            >
              {blog.title}
            </span>
          </nav>

          {/* Tag + meta */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginBottom: 20,
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                padding: '4px 12px',
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.04em',
                background: `${accentColor}18`,
                color: accentColor,
                border: `1px solid ${accentColor}35`,
              }}
            >
              {blog.tag}
            </span>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-text-muted)',
              }}
            >
              {blog.date}
            </span>
            <span
              style={{
                fontSize: 12,
                color: 'var(--color-yw-text-muted)',
              }}
            >
              · {blog.readTime}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'var(--yw-font-heading)',
              fontWeight: 800,
              fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
              lineHeight: 1.2,
              color: 'var(--color-yw-white)',
              margin: 0,
              letterSpacing: '-0.02em',
            }}
          >
            {blog.title}
          </h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section
        style={{
          padding: '56px 24px 100px',
          background: 'var(--color-yw-black-soft)',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          {blog.sections.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}

          {/* Back link */}
          <div
            style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop: '1px solid var(--color-yw-black-border)',
            }}
          >
            <Link
              href='/blogs'
              style={{
                fontSize: 14,
                color: 'var(--color-yw-green)',
                textDecoration: 'none',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              ← Back to All Blogs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
