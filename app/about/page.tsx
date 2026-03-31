import Link from 'next/link'
import type { Metadata } from 'next'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Where business, finance and community impact meet. Analysis at the intersection of capital and community impact — written by a curious mind.',
}

export default function AboutPage() {
  return (
    <>
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

      <section className="px-6 max-w-2xl mx-auto pb-16">
        <FadeIn>
          <div className="mb-12">
            <p className="text-white text-xl leading-relaxed mb-6 font-display italic">
              &ldquo;Market Notes exists at the intersection of capital and community. Financial events are never just numbers — they are forces that shape how people live, cooperate, and build futures together.&rdquo;
            </p>
            <p className="text-[#d1d5db] text-base leading-loose">
              Our analysis is technical enough to be credible and human enough to be meaningful.
              Every piece published here asks not just what the numbers say, but who is shaped by them —
              the communities, families, and workers who live downstream of capital flows, monetary
              policy, and investment decisions.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="font-display text-2xl text-white mb-4 mt-10">Editorial Philosophy</h2>
          <div className="h-px w-12 bg-mn-accent mb-6" />
          <p className="text-[#d1d5db] text-base leading-loose mb-6">
            Market Notes exists because financial analysis without human context is incomplete. The
            dominant financial press excels at the mechanics of capital — and too often stops there.
            We don&apos;t. Every article asks: who is living with this decision, who bears the cost
            when the model is wrong, and what does it mean for the communities that exist downstream
            of these capital flows?
          </p>
          <p className="text-[#d1d5db] text-base leading-loose mb-6">
            The publication has a particular focus on Latin American and emerging markets — regions
            that are often covered only when they are in crisis, and ignored when they are building.
            That asymmetry produces blind spots. Market Notes aims to provide consistent, contextual
            coverage that treats LatAm markets as the dynamic, complex systems they are.
          </p>
          <p className="text-[#d1d5db] text-base leading-loose">
            We also believe finance is a conversation. Every article features an open comment section.
            Agree, push back, add context. The best analysis is sharpened by challenge, and every
            voice adds to the collective intelligence of the market.
          </p>
        </FadeIn>

        <FadeIn delay={150}>
          <div className="mt-14 p-8 bg-mn-surface border-l-4 border-mn-accent">
            <p className="text-mn-accent text-[0.65rem] uppercase tracking-[0.18em] mb-3 font-semibold">
              Independent
            </p>
            <p className="text-white font-display text-xl leading-snug">
              No sponsors. No advertorials. No access journalism. Market Notes is funded by readers
              who find it worth their time.
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
        <NewsletterSection variant="full" locale="en" />
      </FadeIn>
    </>
  )
}
