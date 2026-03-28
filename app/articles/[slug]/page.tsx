import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, getAllSlugs, getRelatedArticles } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import ArticleCard from '@/components/ArticleCard'
import GiscusComments from '@/components/GiscusComments'
import SocialShare from '@/components/SocialShare'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)
  if (!article) return {}

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://marketnotes.vercel.app'

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `${siteUrl}/articles/${article.slug}`,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.category,
      images: [
        {
          url: article.image || '/og-image.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image || '/og-image.png'],
    },
  }
}

const mdxComponents = {
  // Styled blockquote (pull quote)
  blockquote: ({ children }: { children?: React.ReactNode }) => (
    <blockquote className="border-l-4 border-mn-accent bg-mn-surface/50 px-6 py-5 my-8 italic text-xl text-[#cbd5e1] font-display leading-relaxed">
      {children}
    </blockquote>
  ),
  // Styled Market Notes Take — use a <strong> wrapper in MDX for the take label
  h2: ({ children }: { children?: React.ReactNode }) => (
    <h2 className="font-display text-2xl text-white mt-12 mb-4 tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }: { children?: React.ReactNode }) => (
    <h3 className="font-display text-xl text-white mt-8 mb-3">{children}</h3>
  ),
  hr: () => <hr className="border-none border-t border-mn-border my-10" />,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => (
    <a
      href={href}
      className="text-mn-accent underline underline-offset-2 decoration-mn-accent/40 hover:decoration-mn-accent transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug)
  if (!article) notFound()

  const related = getRelatedArticles(article.slug, article.category, 3)
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://marketnotes.vercel.app'
  const articleUrl = `${siteUrl}/articles/${article.slug}`

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Person',
      name: article.author,
      url: `${siteUrl}/meet-the-author`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Market Notes',
      url: siteUrl,
    },
    datePublished: article.date,
    dateModified: article.date,
    url: articleUrl,
    image: article.image || `${siteUrl}/og-image.png`,
    keywords: article.category.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article header */}
      <header className="pt-32 pb-12 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            {article.category.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="category-tag hover:bg-mn-accent hover:text-white transition-all"
              >
                {cat}
              </Link>
            ))}
          </div>

          <h1 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            {article.title}
          </h1>

          <p className="text-[#9ca3af] text-lg leading-relaxed mb-8">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-mn-muted uppercase tracking-wider pb-8 border-b border-mn-border">
            <Link
              href="/meet-the-author"
              className="font-medium text-white hover:text-mn-accent transition-colors"
            >
              {article.author}
            </Link>
            <span className="w-1 h-1 bg-mn-border rounded-full" />
            <span>{formatDate(article.date)}</span>
            <span className="w-1 h-1 bg-mn-border rounded-full" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </header>

      {/* Article body — sidebar layout on desktop */}
      <div className="relative max-w-5xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[56px,1fr] gap-8">
          {/* Desktop sticky sidebar share */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <SocialShare title={article.title} variant="sidebar" />
            </div>
          </div>

          {/* Article content */}
          <article className="max-w-[720px] w-full">
            <div className="prose-mn">
              <MDXRemote
                source={article.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
              />
            </div>

            {/* Inline share row */}
            <div className="mt-12 pt-8 border-t border-mn-border">
              <SocialShare title={article.title} variant="inline" />
            </div>

            {/* Newsletter inline CTA */}
            <FadeIn>
              <div className="mt-12 bg-mn-surface border border-mn-border p-8">
                <p className="text-mn-accent text-[0.65rem] uppercase tracking-[0.15em] font-semibold mb-3">
                  Like what you read?
                </p>
                <h3 className="font-display text-2xl text-white mb-3">
                  Get this in your inbox — weekly.
                </h3>
                <p className="text-mn-muted text-sm mb-6">
                  No noise. Just signal. Unsubscribe anytime.
                </p>
                <NewsletterSection variant="compact" />
              </div>
            </FadeIn>

            {/* Related articles */}
            {related.length > 0 && (
              <FadeIn delay={80}>
                <section className="mt-16">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em]">
                      Related Articles
                    </span>
                    <div className="flex-1 h-px bg-mn-border" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
                    {related.map((rel) => (
                      <div key={rel.slug} className="bg-mn-bg">
                        <ArticleCard article={rel} />
                      </div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            {/* Comments Section */}
            <FadeIn delay={100}>
              <section className="mt-16 pt-10 border-t border-mn-border">
                <h2 className="font-display text-3xl text-white mb-2 tracking-tight">
                  What&apos;s Your Take?
                </h2>
                <p className="text-mn-muted text-sm mb-8 max-w-xl">
                  Markets are shaped by collective intelligence. Share your
                  perspective — agree, push back, or add context. Every voice
                  sharpens the conversation.
                </p>
                <GiscusComments />
              </section>
            </FadeIn>
          </article>
        </div>
      </div>

      {/* Mobile sticky share bar */}
      <SocialShare title={article.title} variant="mobile-bar" />
    </>
  )
}
