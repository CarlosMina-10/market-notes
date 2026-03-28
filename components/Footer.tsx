'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NewsletterSection from './NewsletterSection'
import { ui, type Locale } from '@/lib/translations'

export default function Footer() {
  const pathname = usePathname()
  const locale: Locale = pathname.startsWith('/es') ? 'es' : 'en'
  const t = ui[locale]

  const siteLinks = [
    { href: locale === 'es' ? '/es' : '/', label: t.nav.home },
    { href: locale === 'es' ? '/es/articles' : '/articles', label: t.nav.articles },
    { href: locale === 'es' ? '/es/about' : '/about', label: t.nav.about },
    { href: locale === 'es' ? '/es/meet-the-author' : '/meet-the-author', label: t.nav.meetAuthor },
    { href: locale === 'es' ? '/es/newsletter' : '/newsletter', label: t.nav.subscribe },
  ]

  return (
    <footer>
      {/* Electric blue top border */}
      <div className="h-0.5 bg-gradient-to-r from-mn-accent via-mn-accent to-transparent" />

      <div className="bg-mn-surface">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Column 1: Logo + Site Links */}
            <div>
              <Link
                href={locale === 'es' ? '/es' : '/'}
                className="font-display text-2xl font-bold text-white block mb-2 hover:text-mn-accent transition-colors"
              >
                Market Notes
              </Link>
              <p className="text-mn-muted text-sm mb-8 leading-relaxed">
                {t.footer.tagline}
              </p>
              <nav className="flex flex-col gap-2.5">
                {siteLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-mn-muted hover:text-mn-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Column 2: New Article Alerts */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-[0.12em] mb-5">
                {t.subscribe.footerHeading}
              </h3>
              <p className="text-mn-muted text-sm mb-5 leading-relaxed">
                {t.subscribe.footerDesc}
              </p>
              <NewsletterSection variant="footer" locale={locale} />
            </div>

            {/* Column 3: Social */}
            <div>
              <h3 className="text-white font-semibold text-xs uppercase tracking-[0.12em] mb-5">
                {t.footer.connect}
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mn-muted hover:text-mn-accent transition-colors duration-200 p-2 border border-mn-border hover:border-mn-accent"
                  aria-label="Twitter / X"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/carlosmina-viveros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mn-muted hover:text-mn-accent transition-colors duration-200 p-2 border border-mn-border hover:border-mn-accent"
                  aria-label="LinkedIn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-mn-border">
                <p className="text-mn-muted text-xs leading-relaxed">
                  {t.footer.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-mn-bg border-t border-mn-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-mn-muted text-xs">
            {t.footer.copyright}
          </p>
          <p className="text-mn-muted text-xs">
            {t.footer.builtBy}{' '}
            <Link
              href={locale === 'es' ? '/es/meet-the-author' : '/meet-the-author'}
              className="text-mn-accent hover:underline"
            >
              Carlos Mina
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
