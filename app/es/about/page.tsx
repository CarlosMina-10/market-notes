import Link from 'next/link'
import type { Metadata } from 'next'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'
import { ui } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Acerca de — Market Notes',
  description:
    'Donde los negocios, las finanzas y el impacto comunitario se encuentran. Análisis en la intersección del capital y el impacto comunitario — escrito por una mente curiosa.',
}

const t = ui.es.about

export default function EsAboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            {t.eyebrow}
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight mb-6">
          Donde los Negocios,
          <br />
          <span className="text-mn-accent">las Finanzas y</span>
          <br />
          la Comunidad se Encuentran.
        </h1>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      <section className="px-6 max-w-2xl mx-auto pb-16">
        <FadeIn>
          <div className="mb-12">
            <p className="text-white text-xl leading-relaxed mb-6 font-display italic">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-[#d1d5db] text-base leading-loose">{t.missionBody}</p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-display text-2xl text-white mb-4 mt-10">{t.philosophyHeading}</h2>
          <div className="h-px w-12 bg-mn-accent mb-6" />
          <p className="text-[#d1d5db] text-base leading-loose mb-6">{t.philosophyBody1}</p>
          <p className="text-[#d1d5db] text-base leading-loose mb-6">{t.philosophyBody2}</p>
          <p className="text-[#d1d5db] text-base leading-loose">{t.philosophyBody3}</p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-14 p-8 bg-mn-surface border-l-4 border-mn-accent">
            <p className="text-mn-accent text-[0.65rem] uppercase tracking-[0.18em] mb-3 font-semibold">
              {t.independentLabel}
            </p>
            <p className="text-white font-display text-xl leading-snug">{t.independentHeading}</p>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/es/meet-the-author" className="btn-primary py-3.5 px-8 text-sm text-center">
              {t.ctaAuthor}
            </Link>
            <Link href="/es/articles" className="btn-outline py-3.5 px-8 text-sm text-center">
              {t.ctaArticles}
            </Link>
          </div>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr className="section-divider" />
      </div>

      <FadeIn>
        <NewsletterSection variant="full" locale="es" />
      </FadeIn>
    </>
  )
}
