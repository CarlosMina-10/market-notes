import type { Metadata } from 'next'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'

export const metadata: Metadata = {
  title: 'Newsletter — No Noise. Just Signal.',
  description:
    'Weekly market commentary at the intersection of business, finance, and community impact. Written by a finance professional with experience across three continents.',
}

const benefits = [
  {
    icon: '📊',
    title: 'Weekly Market Commentary',
    desc: 'Concise, opinionated takes on what moved markets and why it matters.',
  },
  {
    icon: '🌎',
    title: 'LatAm & Emerging Market Lens',
    desc: 'Coverage you won\'t get from Bloomberg — the regions that are always the last to be covered, first to be affected.',
  },
  {
    icon: '🏘️',
    title: 'Community Impact Angle',
    desc: 'Every macro event has downstream consequences. We follow the capital to the communities.',
  },
  {
    icon: '📬',
    title: 'Early Access to New Articles',
    desc: 'Subscribers get articles before they\'re published to the general web.',
  },
]

const pastIssues = [
  {
    number: '001',
    title: 'The Fed Pause and What It Costs the Global South',
    date: 'August 2025',
    tag: 'Global Economy',
  },
  {
    number: '002',
    title: 'Private Credit\'s Quiet Takeover — And the Risk Nobody Mentions',
    date: 'September 2025',
    tag: 'Finance',
  },
  {
    number: '003',
    title: 'Remittances vs. Foreign Aid: The Numbers Don\'t Lie',
    date: 'October 2025',
    tag: 'Community Impact',
  },
]

export default function NewsletterPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-10 bg-mn-accent" />
            <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.2em] font-semibold">
              Newsletter
            </span>
            <div className="h-px w-10 bg-mn-accent" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl text-white tracking-tight mb-6">
            No Noise.
            <br />
            <span className="text-mn-accent">Just Signal.</span>
          </h1>

          <p className="text-mn-muted text-lg leading-relaxed max-w-xl mx-auto mb-12">
            Weekly analysis at the intersection of business, finance, and
            community impact. Written by a finance professional with experience
            across three continents. Free. Always.
          </p>

          <div className="max-w-md mx-auto">
            <NewsletterSection variant="compact" />
            <p className="text-mn-muted text-xs mt-4">
              No spam. No sponsored content. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <hr className="section-divider mb-16" />

        <div className="flex items-center gap-4 mb-10">
          <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
            What Subscribers Get
          </span>
          <div className="flex-1 h-px bg-mn-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-mn-border">
          {benefits.map((item, i) => (
            <FadeIn key={i} delay={i * 60}>
              <div className="bg-mn-surface p-8 hover:bg-[#181818] transition-colors duration-300">
                <div className="text-2xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg text-white mb-3">{item.title}</h3>
                <p className="text-mn-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Past issues */}
      <section className="px-6 pb-20 max-w-5xl mx-auto">
        <hr className="section-divider mb-16" />

        <div className="flex items-center gap-4 mb-10">
          <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
            Past Issues
          </span>
          <div className="flex-1 h-px bg-mn-border" />
        </div>

        <div className="flex flex-col gap-px bg-mn-border">
          {pastIssues.map((issue, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div className="bg-mn-surface p-6 hover:bg-[#181818] transition-colors duration-300 flex items-start gap-6">
                <span className="font-display text-3xl text-mn-border/60 flex-shrink-0">
                  {issue.number}
                </span>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="category-tag">{issue.tag}</span>
                    <span className="text-mn-muted text-xs">{issue.date}</span>
                  </div>
                  <h3 className="font-display text-lg text-white">{issue.title}</h3>
                  <p className="text-mn-muted text-xs mt-2 uppercase tracking-wider">
                    Archive — Subscribe to access future editions
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  )
}
