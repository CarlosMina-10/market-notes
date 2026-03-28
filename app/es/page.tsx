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
            <ArticleCard article={featured} featured locale="es" />
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

      <FadeIn>
        <NewsletterSection variant="full" locale="es" />
      </FadeIn>
    </>
  )
}
