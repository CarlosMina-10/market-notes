import Link from 'next/link'
import { getAllArticles, getFeaturedArticle } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Notes — Donde los negocios, las finanzas y el impacto comunitario se encuentran',
  description:
    'Donde los negocios, las finanzas y el impacto comunitario se encuentran. Análisis en la intersección del capital y el impacto comunitario — escrito por una mente curiosa.',
}

export default function EsHomePage() {
  const allArticles = getAllArticles('es')
  const featured = getFeaturedArticle('es')
  const latestArticles = allArticles.filter((a) => a.slug !== featured?.slug).slice(0, 6)

  return (
    <>
      {/* Hero — reuses same SVG as English homepage */}
      <section className="relative min-h-[90vh] flex items-center hero-grain overflow-hidden pt-16">
        <div className="absolute inset-0 bg-mn-bg/80 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-10 bg-mn-accent" />
              <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
                Donde los negocios, las finanzas y el impacto comunitario se encuentran
              </span>
            </div>
            <h1
              className="font-display font-bold text-white leading-none tracking-tight mb-8"
              style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}
            >
              Market
              <span className="block text-mn-accent" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                Notes
              </span>
            </h1>
            <p className="text-mn-muted text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Donde los negocios, las finanzas y el impacto comunitario se encuentran.
              Análisis en la intersección del capital y el impacto comunitario —
              escrito por una mente curiosa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/es/articles" className="btn-primary text-sm py-4 px-8 inline-block text-center">
                Lee los Artículos
              </Link>
              <Link href="/es/newsletter" className="btn-outline text-sm py-4 px-8 inline-block text-center">
                Recibe Nuevos Artículos
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="px-6 max-w-7xl mx-auto py-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-mn-accent" />
            <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.2em]">
              Análisis Destacado
            </span>
          </div>
          <FadeIn>
            <Link href={`/es/articles/${featured.slug}`} className="group block">
              <article className="bg-mn-surface border border-mn-border hover:border-mn-accent/50 transition-colors duration-300 overflow-hidden">
                <div className="h-1 w-full bg-gradient-to-r from-mn-accent to-mn-accent/20" />
                <div className="p-10 md:p-14 lg:p-16">
                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
                      Análisis Destacado
                    </span>
                    <span className="w-px h-3 bg-mn-border" />
                    {featured.category.slice(0, 2).map((cat) => (
                      <span key={cat} className="category-tag">{cat}</span>
                    ))}
                    <span className="ml-auto text-mn-muted text-xs">
                      {formatDate(featured.date)} · {featured.readTime}
                    </span>
                  </div>
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6 group-hover:text-mn-accent transition-colors duration-300 leading-[1.05] tracking-tight max-w-4xl">
                    {featured.title}
                  </h2>
                  <p className="text-[#d1d5db] text-lg md:text-xl leading-relaxed mb-10 max-w-3xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 bg-mn-accent text-white text-sm font-semibold py-3.5 px-10 group-hover:bg-blue-600 transition-colors duration-200">
                    Leer Ahora →
                  </span>
                </div>
              </article>
            </Link>
          </FadeIn>
        </section>
      )}

      {/* Latest articles */}
      {latestArticles.length > 0 && (
        <section className="px-6 max-w-7xl mx-auto pb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px w-10 bg-mn-accent" />
            <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.2em]">
              Artículos Recientes
            </span>
            <div className="flex-1 h-px bg-mn-border" />
            <Link href="/es/articles" className="text-mn-accent text-xs hover:underline">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {latestArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 50} className="bg-mn-bg">
                <div className="bg-mn-bg h-full">
                  <ArticleCard article={article} locale="es" />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Opinion Banner */}
      <FadeIn>
        <section className="bg-mn-accent py-14 px-6 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-5 tracking-tight">
              Las finanzas nos afectan a todos — no solo a los inversores.
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Cada artículo de Market Notes conecta los números con las personas detrás de ellos.
              Lee, reflexiona y comparte tu perspectiva en los comentarios.
            </p>
            <Link
              href="/es/articles"
              className="inline-block bg-white text-mn-accent font-semibold text-sm py-3 px-8 hover:bg-blue-50 transition-colors duration-200"
            >
              Leer y Reflexionar →
            </Link>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <NewsletterSection variant="full" locale="es" />
      </FadeIn>
    </>
  )
}
