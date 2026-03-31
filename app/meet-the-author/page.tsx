import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'
import { ui } from '@/lib/translations'

export const metadata: Metadata = {
  title: 'Meet the Author — Carlos Mina',
  description:
    'Where business, finance and community impact meet. Analysis at the intersection of capital and community impact — written by a curious mind.',
}

const t = ui.en.meetAuthor

const timeline = [
  {
    icon: '🎓',
    title: 'B.S. in Finance',
    body: 'Foundation in financial theory, capital markets, and corporate finance. The starting point of a career built across three continents.',
  },
  {
    icon: '🌍',
    title: 'Treasury Specialist — Israel',
    body: 'Cross-border capital flows, liquidity management, and multi-currency treasury operations in one of the world\'s most dynamic financial environments.',
  },
  {
    icon: '🌎',
    title: 'Risk Analyst — Colombia',
    body: 'Financial risk assessment, portfolio exposure analysis, and market risk frameworks across Latin America. Worked closely with sovereign and corporate exposure in an emerging market context.',
  },
  {
    icon: '🎓',
    title: 'MBA — Boston University, Boston, MA',
    body: 'STEM-designated MBA with a focus on global finance, management science, and strategy. The analytical and strategic lens that now drives Market Notes.',
  },
  {
    icon: '🏦',
    title: 'Private Capital Operations — United States',
    body: 'Currently working in fund administration and private capital markets, sitting at the intersection of institutional investment, NAV calculation, investor reporting, and market infrastructure.',
  },
]

export default function MeetTheAuthorPage() {
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
            {/* Author photo */}
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

            {/* Intro */}
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

        {/* Timeline */}
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

        {/* Closing */}
        <FadeIn delay={100}>
          <div className="mt-4 p-8 border-l-4 border-mn-accent bg-mn-surface/50">
            <p className="text-[#d1d5db] text-base leading-loose">
              Market Notes was born from a simple conviction: financial events are not isolated from
              human life — they shape how communities cooperate, how families plan, and how societies
              progress. Carlos writes to make that connection visible, and to ask the question that
              markets rarely ask: who does this actually serve?
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={120}>
          <div className="mt-12 text-center bg-mn-surface border border-mn-border p-10">
            <p className="text-mn-muted text-sm mb-2 uppercase tracking-wider text-xs">
              {t.ctaEyebrow}
            </p>
            <p className="font-display text-2xl text-white mb-6">{t.ctaHeading}</p>
            <p className="text-mn-muted text-sm mb-8">{t.ctaDesc}</p>
            <Link href="/newsletter" className="btn-primary py-3.5 px-10 text-sm">
              {t.ctaBtn}
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
