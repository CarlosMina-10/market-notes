import type { Metadata } from 'next'
import { getAllArticles, ALL_CATEGORIES } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import { categoryToSlug } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'All Market Notes articles — analysis at the intersection of business, finance, and community impact.',
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <>
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            Archive
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-4">
          All Articles
        </h1>
        <p className="text-mn-muted text-base">
          {articles.length} pieces published — business, finance, and the
          communities in between.
        </p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      {/* Category filter links */}
      <section className="px-6 max-w-7xl mx-auto pb-10">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/articles"
            className="category-tag bg-mn-accent text-white"
          >
            All
          </Link>
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${categoryToSlug(cat)}`}
              className="category-tag hover:bg-mn-accent hover:text-white transition-all duration-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 50} className="bg-mn-bg">
              <div className="bg-mn-bg h-full">
                <ArticleCard article={article} />
              </div>
            </FadeIn>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-24">
            <p className="text-mn-muted">No articles published yet.</p>
          </div>
        )}
      </section>
    </>
  )
}
