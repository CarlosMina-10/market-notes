import Link from 'next/link'
import { getAllArticles, getFeaturedArticle } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Notes — Where Business, Finance, and Community Impact Meet',
  description:
    'Independent analysis at the intersection of business, finance, and community impact. Written by a finance professional with experience across three continents.',
}

export default function HomePage() {
  const allArticles = getAllArticles()
  const featured = getFeaturedArticle()
  const latestArticles = allArticles
    .filter((a) => a.slug !== featured?.slug)
    .slice(0, 6)

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center hero-grain overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-mn-bg via-mn-bg to-[#060610]" />

        {/* Vertical accent lines */}
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-mn-accent/10 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-mn-accent/20 via-mn-accent/5 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mn-bg to-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Main headline — 8 of 12 columns, left-weighted */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-mn-accent" />
              <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.25em] font-semibold">
                Independent Financial Analysis
              </span>
            </div>

            <h1 className="font-display leading-[0.88] tracking-[-0.04em] mb-10">
              <span className="block text-white" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                Market
              </span>
              <span
                className="block text-mn-accent"
                style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
              >
                Notes
              </span>
            </h1>

            <p className="text-mn-muted text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Where Business, Finance, and Community Impact Meet.
              Finance analysis from the bond desks of three continents — written
              for professionals and curious minds alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/articles"
                className="btn-primary text-sm py-4 px-8 inline-block text-center"
              >
                Read Latest Articles
              </Link>
              <Link
                href="/newsletter"
                className="btn-outline text-sm py-4 px-8 inline-block text-center"
              >
                Join Newsletter
              </Link>
            </div>
          </div>

          {/* Right column accent — 3 of 12 columns, right-weighted */}
          <div className="hidden lg:flex lg:col-span-3 lg:col-start-10 flex-col gap-5">
            <div className="border border-mn-border bg-mn-surface/40 p-6 backdrop-blur-sm">
              <div className="accent-bar mb-5" />
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-3">
                Latest Issue
              </p>
              {featured && (
                <>
                  <p className="text-white text-sm font-medium leading-snug mb-2">
                    {featured.title}
                  </p>
                  <p className="text-mn-muted text-xs">
                    {formatDate(featured.date)}
                  </p>
                </>
              )}
              <Link
                href={featured ? `/articles/${featured.slug}` : '/articles'}
                className="text-mn-accent text-xs uppercase tracking-wider mt-5 block hover:underline underline-offset-2"
              >
                Read Now →
              </Link>
            </div>

            <div className="border border-mn-border p-5">
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-1">
                Published
              </p>
              <p className="font-display text-3xl text-white">
                {allArticles.length}
              </p>
              <p className="text-mn-muted text-xs mt-1">Articles &amp; Analyses</p>
            </div>

            <div className="border border-mn-border p-5">
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-1">
                Coverage
              </p>
              <p className="text-white text-xs leading-relaxed">
                LatAm · USA · Global Markets · Community Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Article */}
        {featured && (
          <section className="pt-16 pb-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
                Featured
              </span>
              <div className="flex-1 h-px bg-mn-border" />
            </div>
            <FadeIn>
              <ArticleCard article={featured} featured />
            </FadeIn>
          </section>
        )}

        {/* Latest Articles Grid */}
        <section className="py-16">
          <hr className="section-divider mb-12" />
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
                Latest Articles
              </span>
              <div className="w-8 h-px bg-mn-border" />
            </div>
            <Link
              href="/articles"
              className="text-mn-accent text-xs uppercase tracking-wider hover:underline underline-offset-2"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {latestArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 70} className="bg-mn-bg">
                <div className="bg-mn-bg h-full">
                  <ArticleCard article={article} />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Category Browse */}
        <section className="pb-8">
          <hr className="section-divider mb-8" />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
              Browse by Topic
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Business',
              'Finance',
              'Community Impact',
              'LatAm Markets',
              'Global Economy',
            ].map((tag) => (
              <Link
                key={tag}
                href={`/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="category-tag hover:bg-mn-accent hover:text-white transition-all duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ─── Opinion Banner ────────────────────────────── */}
      <FadeIn>
        <section className="bg-mn-accent py-14 px-6 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-5 tracking-tight">
              Your perspective matters.
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Every article on Market Notes opens the floor — read, react, and
              drop your take in the comments. Finance is a conversation, not a
              monologue.
            </p>
            <Link
              href="/articles"
              className="inline-block bg-white text-mn-accent font-semibold text-sm py-3 px-8 hover:bg-blue-50 transition-colors duration-200"
            >
              Join the Conversation
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ─── Newsletter ────────────────────────────────── */}
      <FadeIn>
        <NewsletterSection variant="full" />
      </FadeIn>
    </>
  )
}
