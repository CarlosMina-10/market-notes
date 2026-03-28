'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'
import { ui, type Locale } from '@/lib/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isEs = pathname.startsWith('/es')
  const locale: Locale = isEs ? 'es' : 'en'
  const t = ui[locale]

  const basePath = isEs ? pathname.replace(/^\/es/, '') || '/' : pathname

  const navLinks = [
    { href: isEs ? '/es' : '/', label: t.nav.home },
    { href: isEs ? '/es/articles' : '/articles', label: t.nav.articles },
    { href: isEs ? '/es/about' : '/about', label: t.nav.about },
    { href: isEs ? '/es/meet-the-author' : '/meet-the-author', label: t.nav.meetAuthor },
  ]

  const subscribeHref = isEs ? '/es/newsletter' : '/newsletter'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const switchLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`
    const target =
      newLocale === 'es'
        ? `/es${basePath === '/' ? '' : basePath}`
        : basePath
    router.push(target)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'frosted-glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href={isEs ? '/es' : '/'}
            className="font-display text-xl font-bold text-white tracking-tight hover:text-mn-accent transition-colors duration-200"
          >
            Market Notes
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative pb-0.5 ${
                  pathname === link.href
                    ? 'text-mn-accent'
                    : 'text-mn-muted hover:text-white'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-mn-accent" />
                )}
              </Link>
            ))}

            {/* EN | ES toggle */}
            <div className="flex items-center gap-1.5 text-xs font-semibold tracking-wider">
              <button
                onClick={() => switchLocale('en')}
                className={`transition-colors duration-200 ${
                  locale === 'en' ? 'text-mn-accent' : 'text-mn-muted hover:text-white'
                }`}
              >
                EN
              </button>
              <span className="text-mn-muted select-none">|</span>
              <button
                onClick={() => switchLocale('es')}
                className={`transition-colors duration-200 ${
                  locale === 'es' ? 'text-mn-accent' : 'text-mn-muted hover:text-white'
                }`}
              >
                ES
              </button>
            </div>

            <Link href={subscribeHref} className="btn-primary text-sm py-2 px-4">
              {t.nav.subscribe}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 hover:text-mn-accent transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        links={navLinks}
        currentPath={pathname}
        subscribeHref={subscribeHref}
        subscribeLabel={t.nav.subscribe}
        locale={locale}
        onSwitchLocale={switchLocale}
        tagline={t.footer.tagline}
      />
    </>
  )
}
