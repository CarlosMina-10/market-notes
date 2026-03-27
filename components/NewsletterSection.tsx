'use client'

import { useState } from 'react'

interface NewsletterSectionProps {
  variant?: 'full' | 'compact' | 'footer'
}

export default function NewsletterSection({
  variant = 'full',
}: NewsletterSectionProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const beehiivId = process.env.NEXT_PUBLIC_BEEHIIV_EMBED_ID

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (beehiivId) {
      const params = new URLSearchParams({
        publication_id: beehiivId,
        email,
        ...(firstName && { first_name: firstName }),
      })
      window.open(
        `https://embeds.beehiiv.com/subscribe?${params.toString()}`,
        '_blank'
      )
    }

    await new Promise((r) => setTimeout(r, 700))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div
          className="text-mn-accent text-3xl mb-3 font-display"
          aria-hidden="true"
        >
          ✓
        </div>
        <h3 className="font-display text-2xl text-white mb-2">
          You&apos;re in the signal.
        </h3>
        <p className="text-mn-muted text-sm">
          First edition lands in your inbox soon.
        </p>
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="text-sm"
        />
        <button
          type="submit"
          className="btn-primary text-sm py-2.5 w-full"
          disabled={loading}
        >
          {loading ? 'Subscribing...' : 'Subscribe Free'}
        </button>
      </form>
    )
  }

  if (variant === 'compact') {
    return (
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-2 w-full"
      >
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 text-sm"
        />
        <button
          type="submit"
          className="btn-primary text-sm py-2.5 px-5 whitespace-nowrap"
          disabled={loading}
        >
          {loading ? '...' : 'Subscribe Free'}
        </button>
      </form>
    )
  }

  // Full variant
  return (
    <section className="bg-mn-surface border-t border-b border-mn-border py-20 px-6">
      <div className="max-w-xl mx-auto text-center">
        <div className="accent-bar w-12 mx-auto mb-8" />
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4 tracking-tight">
          No Noise. Just Signal.
        </h2>
        <p className="text-mn-muted text-base leading-relaxed mb-8 max-w-md mx-auto">
          Weekly analysis at the intersection of business, finance, and
          community impact. Written by a finance professional with experience
          across three continents.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="sm:w-36 text-sm"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 text-sm"
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap text-sm py-3"
            disabled={loading}
          >
            {loading ? '...' : 'Subscribe Free'}
          </button>
        </form>

        <p className="text-mn-muted text-xs mt-5">
          No spam. Unsubscribe anytime. No cost.
        </p>
      </div>
    </section>
  )
}
