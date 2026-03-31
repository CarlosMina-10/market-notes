import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import { ui } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Conoce al Autor — Carlos Mina',
  description:
    'Donde los negocios, las finanzas y el impacto comunitario se encuentran. Análisis en la intersección del capital y el impacto comunitario — escrito por una mente curiosa.',
}

const t = ui.es.meetAuthor

const timeline = [
  {
    icon: '🎓',
    title: 'Licenciatura en Finanzas',
    body: 'Base en teoría financiera, mercados de capital y finanzas corporativas. El punto de partida de una carrera construida en tres continentes.',
  },
  {
    icon: '🌍',
    title: 'Especialista en Tesorería — Israel',
    body: 'Flujos de capital transfronterizos, gestión de liquidez y operaciones de tesorería en múltiples monedas en uno de los entornos financieros más dinámicos del mundo.',
  },
  {
    icon: '🌎',
    title: 'Analista de Riesgo — Colombia',
    body: 'Evaluación de riesgo financiero, análisis de exposición de portafolios y marcos de riesgo de mercado en América Latina. Trabajo directo con exposición soberana y corporativa en un contexto de mercados emergentes.',
  },
  {
    icon: '🎓',
    title: 'MBA — Boston University, Boston, MA',
    body: 'MBA con designación STEM, enfocado en finanzas globales, ciencias de gestión y estrategia. La perspectiva analítica y estratégica que impulsa Market Notes.',
  },
  {
    icon: '🏦',
    title: 'Operaciones de Capital Privado — Estados Unidos',
    body: 'Actualmente trabaja en administración de fondos y mercados de capital privado, en la intersección de la inversión institucional, cálculo de NAV, reportes a inversores e infraestructura de mercado.',
  },
]

export default function EsMeetTheAuthorPage() {
  return (
    <>
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            {t.eyebrow}
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-4">
          Carlos Mina
        </h1>
        <p className="text-mn-muted text-lg">{t.subtitle}</p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      <section className="px-6 max-w-4xl mx-auto pb-16">
        <FadeIn>
          <div className="flex flex-col items-center mb-14">
            <div
              className="relative w-full max-w-[280px] aspect-square rounded-lg overflow-hidden mb-8"
              style={{ border: '2px solid #2563eb', boxShadow: '0 0 40px rgba(37,99,235,0.15)' }}
            >
              <Image
                src="/carlos-mina.jpg"
                alt="Carlos Mina"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 280px"
                priority
              />
            </div>
            <div className="w-full max-w-2xl text-center">
              <p className="text-[#d1d5db] text-base leading-loose">{t.bio}</p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {t.tags.map((tag) => (
                  <span key={tag} className="category-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <h2 className="font-display text-2xl text-white mb-2">{t.careerTimeline}</h2>
          <div className="h-px w-12 bg-mn-accent mb-10" />
          <div className="relative">
            <div className="absolute left-[18px] top-8 bottom-8 w-px bg-mn-accent/30 hidden sm:block" />
            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="relative flex gap-6 pb-10">
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-9 h-9 bg-mn-surface border-2 border-mn-accent flex items-center justify-center text-base z-10 mt-1">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1 bg-mn-surface border border-mn-border p-6 hover:border-mn-accent/40 transition-colors duration-300">
                      <div className="sm:hidden text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-display text-lg text-white mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-mn-muted text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mt-4 p-8 border-l-4 border-mn-accent bg-mn-surface/50">
            <p className="text-[#d1d5db] text-base leading-loose">
              Market Notes nació de una convicción simple: los eventos financieros no están aislados
              de la vida humana — dan forma a cómo cooperan las comunidades, cómo planifican las
              familias y cómo avanzan las sociedades. Carlos escribe para hacer visible esa conexión,
              y para hacer la pregunta que los mercados rara vez hacen: ¿a quién sirve esto realmente?
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-12 text-center bg-mn-surface border border-mn-border p-10">
            <p className="text-mn-muted text-sm mb-2 uppercase tracking-wider text-xs">{t.ctaEyebrow}</p>
            <p className="font-display text-2xl text-white mb-6">{t.ctaHeading}</p>
            <p className="text-mn-muted text-sm mb-8">{t.ctaDesc}</p>
            <Link href="/es/newsletter" className="btn-primary py-3.5 px-10 text-sm">
              {t.ctaBtn}
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
