'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import type { Locale } from '@/lib/translations'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  currentPath: string
  subscribeHref: string
  subscribeLabel: string
  locale: Locale
  onSwitchLocale: (locale: Locale) => void
  tagline: string
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
  currentPath,
  subscribeHref,
  subscribeLabel,
  locale,
  onSwitchLocale,
  tagline,
}: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] bg-mn-bg flex flex-col">
      <div className="flex items-center justify-between px-6 py-5 border-b border-mn-border">
        <span className="font-display text-xl font-bold text-white tracking-tight">
          Market Notes
        </span>
        <button onClick={onClose} className="text-white p-2 hover:text-mn-accent transition-colors" aria-label="Close menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-col px-6 pt-4 flex-1 overflow-y-auto">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={`font-display text-2xl py-4 border-b border-mn-border transition-colors ${
              currentPath === link.href ? 'text-mn-accent' : 'text-white hover:text-mn-accent'
            }`}
          >
            {link.label}
          </Link>
        ))}

        <div className="mt-10">
          <Link href={subscribeHref} onClick={onClose} className="btn-primary w-full text-center block text-base py-3.5">
            {subscribeLabel}
          </Link>
        </div>

        {/* EN | ES toggle */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={() => { onSwitchLocale('en'); onClose() }}
            className={`text-sm font-semibold tracking-wider transition-colors ${locale === 'en' ? 'text-mn-accent' : 'text-mn-muted'}`}
          >
            EN
          </button>
          <span className="text-mn-muted">|</span>
          <button
            onClick={() => { onSwitchLocale('es'); onClose() }}
            className={`text-sm font-semibold tracking-wider transition-colors ${locale === 'es' ? 'text-mn-accent' : 'text-mn-muted'}`}
          >
            ES
          </button>
        </div>
      </nav>

      <div className="px-6 py-6 border-t border-mn-border">
        <p className="text-mn-muted text-sm">{tagline}</p>
      </div>
    </div>
  )
}
