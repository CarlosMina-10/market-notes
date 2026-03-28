import type { Metadata } from 'next'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'
import { ui } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Suscríbete — Sé el primero en leerlo.',
  description: 'Recibe cada nuevo artículo de Market Notes directamente en tu bandeja de entrada.',
}

const t = ui.es.subscribe

export default function EsSubscribePage() {
  return (
    <>
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-mn-accent" />
            <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
              {t.eyebrow}
            </span>
            <div className="h-px w-10 bg-mn-accent" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight mb-6">
            Sé el Primero
            <br />
            <span className="text-mn-accent">en Leerlo.</span>
          </h1>

          <p className="text-mn-muted text-lg leading-relaxed max-w-xl mx-auto mb-12">
            {t.description}
          </p>

          <div className="max-w-md mx-auto">
            <NewsletterSection variant="compact" locale="es" />
            <p className="text-mn-muted text-xs mt-4">{t.nospam}</p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 max-w-3xl mx-auto">
        <hr className="section-divider mb-16" />

        <FadeIn>
          <div className="p-10 bg-mn-surface border border-mn-border border-l-4 border-l-mn-accent">
            <p className="text-mn-accent text-[0.65rem] uppercase tracking-[0.18em] mb-4 font-semibold">
              Qué recibes
            </p>
            <p className="text-[#d1d5db] text-base leading-loose">
              {t.description}
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
