// Next.js App Router i18n via middleware
// English is the default locale (no URL prefix: /articles)
// Spanish uses /es prefix (/es/articles)
// Auto-detection: reads Accept-Language on first visit (no NEXT_LOCALE cookie)
// Manual selection: stores NEXT_LOCALE cookie, overrides auto-detection

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SPANISH_PREFIX = '/es'

// Paths middleware should ignore
const SKIP_PREFIXES = ['/_next', '/api', '/static']
const SKIP_EXTENSIONS = ['.ico', '.png', '.jpg', '.jpeg', '.svg', '.webp', '.woff', '.woff2', '.ttf', '.css', '.js']

function shouldSkip(pathname: string): boolean {
  if (SKIP_PREFIXES.some((p) => pathname.startsWith(p))) return true
  if (SKIP_EXTENSIONS.some((ext) => pathname.endsWith(ext))) return true
  return false
}

function prefersSpanish(request: NextRequest): boolean {
  const accept = request.headers.get('accept-language') ?? ''
  // Match es, es-MX, es-CO, es-AR, etc.
  return /\bes\b/.test(accept.split(',')[0] ?? '')
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (shouldSkip(pathname)) return NextResponse.next()

  const isEsPath = pathname.startsWith(SPANISH_PREFIX + '/') || pathname === SPANISH_PREFIX
  if (isEsPath) return NextResponse.next()

  // Check for explicit manual locale cookie
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale === 'en') return NextResponse.next()
  if (cookieLocale === 'es') {
    const esUrl = new URL(`${SPANISH_PREFIX}${pathname === '/' ? '' : pathname}`, request.url)
    return NextResponse.redirect(esUrl)
  }

  // No cookie — use Accept-Language for first visit
  if (prefersSpanish(request)) {
    const esUrl = new URL(`${SPANISH_PREFIX}${pathname === '/' ? '' : pathname}`, request.url)
    const response = NextResponse.redirect(esUrl)
    // Don't set cookie here — let the user's explicit toggle set it.
    // This keeps auto-detection active on every visit unless overridden.
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
