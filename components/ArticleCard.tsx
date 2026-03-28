import Link from 'next/link'
import { ArticleFrontmatter } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import type { Locale } from '@/lib/translations'

interface ArticleCardProps {
  article: ArticleFrontmatter
  featured?: boolean
  locale?: Locale
}

export default function ArticleCard({
  article,
  featured = false,
  locale = 'en',
}: ArticleCardProps) {
  const articleHref = locale === 'es'
    ? `/es/articles/${article.slug}`
    : `/articles/${article.slug}`

  if (featured) {
    return (
      <Link href={articleHref} className="group block">
        <article className="bg-mn-surface border border-mn-border hover:border-mn-accent transition-all duration-300 overflow-hidden">
          <div className="aspect-[21/8] bg-gradient-to-br from-[#0d0d1a] via-mn-surface to-[#0a1020] relative overflow-hidden flex items-center justify-center">
            <div
              className="absolute inset-0"
              style={{ backgroundImage: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, transparent 60%)' }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: 'linear-gradient(90deg, #2563eb, rgba(37,99,235,0.15))' }}
            />
            <div className="text-center relative z-10">
              <div className="w-8 h-px bg-mn-accent mx-auto mb-4 opacity-60" />
              <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.2em]">
                {locale === 'es' ? 'Análisis Destacado' : 'Featured Analysis'}
              </span>
              <div className="w-8 h-px bg-mn-accent mx-auto mt-4 opacity-60" />
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center gap-3 mb-5">
              {article.category.slice(0, 2).map((cat) => (
                <span key={cat} className="category-tag">{cat}</span>
              ))}
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-5 group-hover:text-mn-accent transition-colors duration-300 leading-tight tracking-tight">
              {article.title}
            </h2>
            <p className="text-mn-muted text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-4 text-xs text-mn-muted uppercase tracking-wider">
              <span className="font-medium">{article.author}</span>
              <span className="w-1 h-1 bg-mn-border rounded-full" />
              <span>{formatDate(article.date)}</span>
              <span className="w-1 h-1 bg-mn-border rounded-full" />
              <span>{article.readTime}</span>
              <span className="ml-auto text-mn-accent group-hover:translate-x-1 transition-transform duration-200">
                {locale === 'es' ? 'Leer →' : 'Read →'}
              </span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={articleHref} className="group block h-full">
      <article
        className="bg-mn-surface border border-mn-border hover:bg-[#191919] transition-all duration-300 h-full p-6 flex flex-col"
        style={{ borderLeft: '3px solid var(--color-accent)' }}
      >
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {article.category.slice(0, 2).map((cat) => (
            <span key={cat} className="category-tag">{cat}</span>
          ))}
        </div>
        <h3 className="font-display text-xl text-white mb-3 group-hover:text-mn-accent transition-colors duration-200 leading-snug flex-1">
          {article.title}
        </h3>
        <p className="text-mn-muted text-sm leading-relaxed mb-5 overflow-hidden line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex items-center gap-3 text-xs text-mn-muted uppercase tracking-wider pt-4 border-t border-mn-border mt-auto">
          <span>{formatDate(article.date)}</span>
          <span className="w-1 h-1 bg-mn-border rounded-full" />
          <span>{article.readTime}</span>
        </div>
      </article>
    </Link>
  )
}
