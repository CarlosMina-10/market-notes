import type { Metadata } from 'next'
import { getArticlesByCategory, ALL_CATEGORIES } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import { categoryToSlug, slugToCategory } from '@/lib/utils'

interface Props {
  params: { tag: string }
}

export async function generateStaticParams() {
  return ALL_CATEGORIES.map((cat) => ({ tag: categoryToSlug(cat) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = slugToCategory(params.tag)
  return {
    title: `${category} — Market Notes`,
    description: `Artículos de Market Notes en la categoría ${category}.`,
  }
}

export default function EsCategoryPage({ params }: Props) {
  const category = slugToCategory(params.tag)
  const articles = getArticlesByCategory(params.tag, 'es')

  return (
    <>
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            Categoría
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-4">
          {category}
        </h1>
        <p className="text-mn-muted text-base">
          {articles.length} artículo{articles.length !== 1 ? 's' : ''} en esta categoría.
        </p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-10">
        <div className="flex flex-wrap gap-3">
          <Link href="/es/articles" className="category-tag hover:bg-mn-accent hover:text-white transition-all duration-200">
            Todos
          </Link>
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/es/category/${categoryToSlug(cat)}`}
              className={`category-tag transition-all duration-200 ${
                cat === category ? 'bg-mn-accent text-white' : 'hover:bg-mn-accent hover:text-white'
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-24">
        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {articles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 50} className="bg-mn-bg">
                <div className="bg-mn-bg h-full">
                  <ArticleCard article={article} locale="es" />
                </div>
              </FadeIn>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-mn-muted">No se encontraron artículos en esta categoría.</p>
          </div>
        )}
      </section>
    </>
  )
}
