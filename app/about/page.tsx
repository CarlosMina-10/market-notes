import Link from 'next/link'
import type { Metadata } from 'next'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Market Notes was built on a simple belief: finance shapes communities, and communities shape finance. Independent analysis with a global lens.',
}

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-10 bg-mn-accent" />
          <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
            About
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight mb-6">
          Where Business,
          <br />
          <span className="text-mn-accent">Finance, and</span>
          <br />
          Community Meet.
        </h1>
        <div className="h-px w-full bg-mn-border mt-10" />
      </section>

      {/* Mission */}
      <section className="px-6 max-w-2xl mx-auto pb-16">
        <FadeIn>
          <div className="mb-12">
            <p className="text-white text-xl leading-relaxed mb-6 font-display italic">
              &ldquo;Finance doesn&apos;t happen in a vacuum. Markets shape
              communities, and communities shape markets.&rdquo;
            </p>
            <p className="text-[#d1d5db] text-base leading-loose">
              Market Notes was built on that belief. Every piece of analysis
              here is written through that lens — not just what the numbers say,
              but what they mean for the people and communities that live
              downstream of capital flows, monetary policy, and investment
              decisions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-display text-2xl text-white mb-4 mt-10">
            Editorial Philosophy
          </h2>
          <div className="h-px w-12 bg-mn-accent mb-6" />

          <p className="text-[#d1d5db] text-base leading-loose mb-6">
            Market Notes exists because the dominant financial press is too
            often written by insiders for insiders. The coverage is excellent on
            technicals and thin on consequences. We aim to close that gap —
            providing rigorous analysis that doesn&apos;t forget to ask: who
            benefits, who bears the risk, and who doesn&apos;t have a seat at
            the table?
          </p>

          <p className="text-[#d1d5db] text-base leading-loose mb-6">
            The publication has a particular focus on Latin American and
            emerging markets — regions that are often covered only when they are
            in crisis, and ignored when they are building. That asymmetry
            produces blind spots. Market Notes aims to provide consistent,
            contextual coverage that treats LatAm markets as the dynamic,
            complex systems they are.
          </p>

          <p className="text-[#d1d5db] text-base leading-loose">
            We also believe finance is a conversation. Every article features an
            open comment section. Agree, push back, add context. The best
            analysis is sharpened by challenge, and every voice adds to the
            collective intelligence of the market.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-14 p-8 bg-mn-surface border-l-4 border-mn-accent">
            <p className="text-mn-accent text-[0.65rem] uppercase tracking-[0.18em] mb-3 font-semibold">
              Independent
            </p>
            <p className="text-white font-display text-xl leading-snug">
              No sponsors. No advertorials. No access journalism. Market Notes
              is funded by readers who find it worth their time.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={180}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link href="/meet-the-author" className="btn-primary py-3.5 px-8 text-sm text-center">
              Meet the Author
            </Link>
            <Link href="/articles" className="btn-outline py-3.5 px-8 text-sm text-center">
              Read the Articles
            </Link>
          </div>
        </FadeIn>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <hr className="section-divider" />
      </div>

      <FadeIn>
        <NewsletterSection variant="full" />
      </FadeIn>
    </>
  )
}
