import type { Metadata } from 'next'
import { getAllArticles, ALL_CATEGORIES } from '@/lib/mdx'
import ArticleSearch from '@/components/ArticleSearch'
import Link from 'next/link'
import { categoryToSlug } from '@/lib/utils'
import { ui } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Artículos — Market Notes',
  description: 'Todos los artículos de Market Notes — análisis en la intersección de los negocios, las finanzas y el impacto comunitario.',
}

const t = ui.es.articles

export default function EsArticlesPage() {
  const articles = getAllArticles('es')

  return (
    <>
      <section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            {t.eyebrow}
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-4">
          {t.heading}
        </h1>
        <p className="text-mn-muted text-base">
          {articles.length} artículo{articles.length !== 1 ? 's' : ''} publicado{articles.length !== 1 ? 's' : ''} — negocios, finanzas y las comunidades en medio.
        </p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-10">
        <div className="flex flex-wrap gap-3">
          <Link href="/es/articles" className="category-tag bg-mn-accent text-white">
            Todos
          </Link>
          {ALL_CATEGORIES.map((cat) => (
            <Link
              key={cat}
              href={`/es/category/${categoryToSlug(cat)}`}
              className="category-tag hover:bg-mn-accent hover:text-white transition-all duration-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <ArticleSearch articles={articles} locale="es" />
    </>
  )
}
