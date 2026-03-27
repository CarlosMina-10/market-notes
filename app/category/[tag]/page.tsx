import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getArticlesByCategory, ALL_CATEGORIES } from '@/lib/mdx'
import { slugToCategory, categoryToSlug } from '@/lib/utils'
import ArticleCard from '@/components/ArticleCard'
import FadeIn from '@/components/FadeIn'

interface Props {
  params: { tag: string }
}

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({ tag: categoryToSlug(cat) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = slugToCategory(params.tag)
  return {
    title: `${category} — Articles`,
    description: `All Market Notes articles in the ${category} category.`,
  }
}

export default function CategoryPage({ params }: Props) {
  const category = slugToCategory(params.tag)
  const articles = getArticlesByCategory(params.tag)

  const isValidCategory = ALL_CATEGORIES.some(
    (cat) => cat.toLowerCase() === category.toLowerCase()
  )

  if (!isValidCategory) notFound()

  return (
    <>
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            Category
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-3">
          {category}
        </h1>
        <p className="text-mn-muted text-base">
          {articles.length} {articles.length === 1 ? 'article' : 'articles'}
        </p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      {/* Other categories */}
      <section className="px-6 max-w-7xl mx-auto pb-10">
        <div className="flex flex-wrap gap-3">
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/category/${categoryToSlug(cat)}`}
              className={`category-tag transition-all duration-200 ${
                cat.toLowerCase() === category.toLowerCase()
                  ? 'bg-mn-accent text-white'
                  : 'hover:bg-mn-accent hover:text-white'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 60} className="bg-mn-bg">
                <div className="bg-mn-bg h-full">
                  <ArticleCard article={article} />
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-mn-border">
            <p className="text-mn-muted mb-4">
              No articles in this category yet.
            </p>
            <Link href="/articles" className="text-mn-accent text-sm hover:underline">
              Browse all articles →
            </Link>
          </div>
        )}
      </section>
    </>
  )
}
