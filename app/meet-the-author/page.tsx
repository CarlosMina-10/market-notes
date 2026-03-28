import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Meet the Author — Carlos Mina',
  description:
    'Carlos Mina is a finance professional with a global footprint — from the bond desks of Israel to the risk floors of Colombia, and now the private capital markets of the United States.',
}

const timeline = [
  {
    icon: '🎓',
    title: 'B.S. in Finance',
    body: 'Foundation in financial theory, capital markets, and corporate finance. The starting point of a career built across three continents.',
  },
  {
    icon: '🌍',
    title: 'Treasury Specialist — Israel',
    body: 'Cross-border capital flows, liquidity management, and multi-currency treasury operations in one of the world\'s most dynamic financial environments. Developed firsthand experience with international bond operations and foreign currency risk.',
  },
  {
    icon: '🌎',
    title: 'Risk Analyst — Colombia',
    body: 'Financial risk assessment, portfolio exposure analysis, and market risk frameworks across Latin America — a region where risk is both a science and an art. Worked closely with sovereign and corporate exposure in an emerging market context.',
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
            Meet the Author
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-6xl text-white tracking-tight mb-4">
          Carlos Mina
        </h1>
        <p className="text-mn-muted text-lg">Finance Professional · Writer · Global Perspective</p>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      {/* Author card */}
      <section className="px-6 max-w-4xl mx-auto pb-16">
        <FadeIn>
          <div className="flex flex-col items-center mb-14">
            {/* Author photo — centered above intro */}
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
              <p className="text-[#d1d5db] text-base leading-loose">
                Carlos Mina is a finance professional with a global footprint —
                from the bond desks of Israel to the risk floors of Colombia,
                and now the private capital markets of the United States.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {['Treasury', 'Risk Analysis', 'Private Capital', 'LatAm Markets', 'Fund Administration'].map((tag) => (
                  <span key={tag} className="category-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Timeline */}
        <FadeIn delay={80}>
          <h2 className="font-display text-2xl text-white mb-2">Career Timeline</h2>
          <div className="h-px w-12 bg-mn-accent mb-10" />

          <div className="relative">
            {/* Vertical blue line */}
            <div className="absolute left-[18px] top-8 bottom-8 w-px bg-mn-accent/30 hidden sm:block" />

            <div className="flex flex-col gap-0">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 80}>
                  <div className="relative flex gap-6 pb-10">
                    {/* Node */}
                    <div className="relative flex-shrink-0 hidden sm:flex">
                      <div className="w-9 h-9 bg-mn-surface border-2 border-mn-accent flex items-center justify-center text-base z-10 mt-1">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-mn-surface border border-mn-border p-6 hover:border-mn-accent/40 transition-colors duration-300">
                      <div className="sm:hidden text-2xl mb-2">{item.icon}</div>
                      <h3 className="font-display text-lg text-white mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-mn-muted text-sm leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Closing paragraph */}
        <FadeIn delay={100}>
          <div className="mt-4 p-8 border-l-4 border-mn-accent bg-mn-surface/50">
            <p className="text-[#d1d5db] text-base leading-loose">
              Market Notes was born from a simple belief: finance doesn&apos;t
              happen in a vacuum. Markets shape communities, and communities
              shape markets. Carlos writes to make that connection visible —
              for professionals, curious readers, and anyone who wants to
              understand the forces moving capital around the world.
            </p>
          </div>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={120}>
          <div className="mt-12 text-center bg-mn-surface border border-mn-border p-10">
            <p className="text-mn-muted text-sm mb-2 uppercase tracking-wider text-xs">
              Stay connected
            </p>
            <p className="font-display text-2xl text-white mb-6">
              Want insights like this in your inbox?
            </p>
            <p className="text-mn-muted text-sm mb-8">
              Join the Market Notes newsletter.
            </p>
            <Link href="/newsletter" className="btn-primary py-3.5 px-10 text-sm">
              Join the Newsletter
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
