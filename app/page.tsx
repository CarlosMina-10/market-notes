import Link from 'next/link'
import { getAllArticles, getFeaturedArticle } from '@/lib/mdx'
import ArticleCard from '@/components/ArticleCard'
import NewsletterSection from '@/components/NewsletterSection'
import FadeIn from '@/components/FadeIn'
import { formatDate } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Market Notes — Where Business, Finance, and Community Impact Meet',
  description:
    'Independent analysis at the intersection of business, finance, and community impact. Written by a finance professional with experience across three continents.',
}

export default function HomePage() {
  const allArticles = getAllArticles()
  const featured = getFeaturedArticle()
  const latestArticles = allArticles
    .filter((a) => a.slug !== featured?.slug)
    .slice(0, 6)

  return (
    <>
      {/* ─── Hero ──────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center hero-grain overflow-hidden pt-16">
        {/* SVG illustrated background */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#020306" />
              <stop offset="100%" stopColor="#08080f" />
            </linearGradient>
            <linearGradient id="trendArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.01" />
            </linearGradient>
            <filter id="lineGlow" x="-20%" y="-100%" width="140%" height="300%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <filter id="winGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <pattern id="winPat" x="0" y="0" width="15" height="13" patternUnits="userSpaceOnUse">
              <rect x="1" y="1" width="5" height="4" fill="#0f1828" />
              <rect x="9" y="1" width="5" height="4" fill="#0c1420" />
              <rect x="1" y="8" width="5" height="4" fill="#0c1420" />
              <rect x="9" y="8" width="5" height="4" fill="#0f1828" />
            </pattern>
            {/* Per-building clip paths */}
            <clipPath id="c0"><rect x="0"    y="452" width="62"  height="98"  /></clipPath>
            <clipPath id="c1"><rect x="72"   y="412" width="52"  height="138" /></clipPath>
            <clipPath id="c2"><rect x="134"  y="372" width="76"  height="178" /></clipPath>
            <clipPath id="c3"><rect x="220"  y="318" width="82"  height="232" /></clipPath>
            <clipPath id="c4"><rect x="312"  y="265" width="96"  height="285" /></clipPath>
            <clipPath id="c5"><rect x="418"  y="212" width="77"  height="338" /></clipPath>
            <clipPath id="c6"><rect x="505"  y="160" width="92"  height="390" /></clipPath>
            <clipPath id="c7"><rect x="607"  y="130" width="128" height="420" /></clipPath>
            <clipPath id="c8"><rect x="745"  y="100" width="88"  height="450" /></clipPath>
            <clipPath id="c9"><rect x="843"  y="142" width="76"  height="408" /></clipPath>
            <clipPath id="c10"><rect x="929"  y="188" width="106" height="362" /></clipPath>
            <clipPath id="c11"><rect x="1045" y="242" width="80"  height="308" /></clipPath>
            <clipPath id="c12"><rect x="1135" y="295" width="86"  height="255" /></clipPath>
            <clipPath id="c13"><rect x="1231" y="342" width="80"  height="208" /></clipPath>
            <clipPath id="c14"><rect x="1321" y="392" width="66"  height="158" /></clipPath>
            <clipPath id="c15"><rect x="1397" y="435" width="43"  height="115" /></clipPath>
          </defs>

          {/* Sky */}
          <rect width="1440" height="600" fill="url(#skyGrad)" />

          {/* Subtle data-grid lines */}
          {([100,200,300,400,500] as number[]).map(y => (
            <line key={y} x1="0" y1={y} x2="1440" y2={y} stroke="#14141e" strokeWidth="0.5"/>
          ))}

          {/* Buildings — base fills */}
          {(
            [[0,452,62,98],[72,412,52,138],[134,372,76,178],[220,318,82,232],
             [312,265,96,285],[418,212,77,338],[505,160,92,390],[607,130,128,420],
             [745,100,88,450],[843,142,76,408],[929,188,106,362],[1045,242,80,308],
             [1135,295,86,255],[1231,342,80,208],[1321,392,66,158],[1397,435,43,115]]
            as number[][]
          ).map(([x,y,w,h], i) => (
            <rect key={`b${i}`} x={x} y={y} width={w} height={h} fill="#0e0e16" />
          ))}

          {/* Buildings — window pattern overlay (clipped per building) */}
          {(
            [[0,452,62,98],[72,412,52,138],[134,372,76,178],[220,318,82,232],
             [312,265,96,285],[418,212,77,338],[505,160,92,390],[607,130,128,420],
             [745,100,88,450],[843,142,76,408],[929,188,106,362],[1045,242,80,308],
             [1135,295,86,255],[1231,342,80,208],[1321,392,66,158],[1397,435,43,115]]
            as number[][]
          ).map(([x,y,w,h], i) => (
            <rect key={`w${i}`} x={x} y={y} width={w} height={h} fill="url(#winPat)" clipPath={`url(#c${i})`} opacity="0.75"/>
          ))}

          {/* Glowing lit windows — tallest buildings (c7 / c8 / c9) */}
          <rect x="618" y="150" width="6" height="5" fill="#2563eb" opacity="0.85" filter="url(#winGlow)"/>
          <rect x="648" y="163" width="6" height="5" fill="#2563eb" opacity="0.90" filter="url(#winGlow)"/>
          <rect x="693" y="175" width="6" height="5" fill="#2563eb" opacity="0.75" filter="url(#winGlow)"/>
          <rect x="633" y="150" width="6" height="5" fill="#3b7cf4" opacity="0.55"/>
          <rect x="663" y="150" width="6" height="5" fill="#2563eb" opacity="0.45"/>
          <rect x="708" y="188" width="6" height="5" fill="#2563eb" opacity="0.60"/>
          <rect x="718" y="163" width="6" height="5" fill="#4d8ef0" opacity="0.40"/>
          <rect x="753" y="120" width="7" height="5" fill="#2563eb" opacity="0.95" filter="url(#winGlow)"/>
          <rect x="768" y="120" width="7" height="5" fill="#2563eb" opacity="0.75" filter="url(#winGlow)"/>
          <rect x="753" y="148" width="7" height="5" fill="#2563eb" opacity="0.65" filter="url(#winGlow)"/>
          <rect x="798" y="148" width="7" height="5" fill="#2563eb" opacity="0.80" filter="url(#winGlow)"/>
          <rect x="783" y="135" width="7" height="5" fill="#3b7cf4" opacity="0.50"/>
          <rect x="813" y="120" width="7" height="5" fill="#1d55d0" opacity="0.45"/>
          <rect x="783" y="162" width="7" height="5" fill="#2563eb" opacity="0.70" filter="url(#winGlow)"/>
          <rect x="851" y="162" width="6" height="5" fill="#2563eb" opacity="0.70"/>
          <rect x="866" y="148" width="6" height="5" fill="#2563eb" opacity="0.90" filter="url(#winGlow)"/>
          <rect x="881" y="162" width="6" height="5" fill="#3b7cf4" opacity="0.50"/>
          <rect x="896" y="175" width="6" height="5" fill="#2563eb" opacity="0.60"/>
          {/* Mid buildings */}
          <rect x="515" y="178" width="5" height="4" fill="#2563eb" opacity="0.70" filter="url(#winGlow)"/>
          <rect x="530" y="192" width="5" height="4" fill="#2563eb" opacity="0.50"/>
          <rect x="560" y="205" width="5" height="4" fill="#1e4db0" opacity="0.60"/>
          <rect x="937" y="205" width="7" height="5" fill="#2563eb" opacity="0.60" filter="url(#winGlow)"/>
          <rect x="952" y="218" width="7" height="5" fill="#2563eb" opacity="0.80"/>
          <rect x="995" y="218" width="7" height="5" fill="#3b7cf4" opacity="0.50"/>
          <rect x="1053" y="260" width="5" height="4" fill="#2563eb" opacity="0.60"/>
          <rect x="1068" y="273" width="5" height="4" fill="#2563eb" opacity="0.40"/>
          <rect x="1143" y="313" width="5" height="4" fill="#2563eb" opacity="0.70" filter="url(#winGlow)"/>
          <rect x="1158" y="326" width="5" height="4" fill="#1e4db0" opacity="0.50"/>
          <rect x="431"  y="230" width="5" height="4" fill="#2563eb" opacity="0.50"/>
          <rect x="446"  y="243" width="5" height="4" fill="#1e4db0" opacity="0.55"/>

          {/* City light haze at horizon */}
          <ellipse cx="790" cy="550" rx="420" ry="55" fill="#2563eb" opacity="0.04"/>

          {/* Area fill under trend line */}
          <polygon
            points="60,490 130,468 200,474 270,450 350,428 430,402 510,373 590,345 660,318 730,292 800,264 870,238 940,215 1010,225 1080,198 1150,175 1220,152 1290,128 1360,106 1360,550 60,550"
            fill="url(#trendArea)"
          />

          {/* Trend line — wide glow pass */}
          <polyline
            points="60,490 130,468 200,474 270,450 350,428 430,402 510,373 590,345 660,318 730,292 800,264 870,238 940,215 1010,225 1080,198 1150,175 1220,152 1290,128 1360,106"
            fill="none" stroke="#2563eb" strokeWidth="8" opacity="0.18" filter="url(#lineGlow)"
          />
          {/* Trend line — crisp main line */}
          <polyline
            points="60,490 130,468 200,474 270,450 350,428 430,402 510,373 590,345 660,318 730,292 800,264 870,238 940,215 1010,225 1080,198 1150,175 1220,152 1290,128 1360,106"
            fill="none" stroke="#2563eb" strokeWidth="2" opacity="0.9"
          />
          {/* Trend line — data point dots */}
          {([[60,490],[270,450],[510,373],[730,292],[940,215],[1150,175],[1360,106]] as number[][]).map(([x,y],i) => (
            <g key={`dot${i}`}>
              <circle cx={x} cy={y} r="5" fill="#2563eb" opacity="0.9"/>
              <circle cx={x} cy={y} r="9" fill="none" stroke="#2563eb" strokeWidth="1" opacity="0.35"/>
            </g>
          ))}

          {/* Human silhouettes — connected community figures */}
          {([590,650,710,770,830,890,950] as number[]).map((cx) => (
            <g key={`p${cx}`} transform={`translate(${cx},548)`} fill="#162040">
              <circle cx="0" cy="-44" r="7"/>
              <path d="M-9,-36 C-11,-26 -11,-16 -10,-2 L10,-2 C11,-16 11,-26 9,-36 C6,-38 -6,-38 -9,-36 Z"/>
              <path d="M-9,-30 L-21,-20" stroke="#162040" strokeWidth="5" strokeLinecap="round" fill="none"/>
              <path d="M9,-30 L21,-20"  stroke="#162040" strokeWidth="5" strokeLinecap="round" fill="none"/>
              <path d="M-4,-2 L-7,13"  stroke="#162040" strokeWidth="5" strokeLinecap="round" fill="none"/>
              <path d="M4,-2 L7,13"    stroke="#162040" strokeWidth="5" strokeLinecap="round" fill="none"/>
            </g>
          ))}
          {/* Hand-to-hand connection lines */}
          {([590,650,710,770,830,890] as number[]).map((x) => (
            <line key={`cl${x}`} x1={x+21} y1={528} x2={x+39} y2={528} stroke="#1c3060" strokeWidth="2" opacity="0.8"/>
          ))}

          {/* Ground line */}
          <line x1="0" y1="550" x2="1440" y2="550" stroke="#1a1a28" strokeWidth="1"/>
        </svg>

        {/* Dark overlay — keeps text readable while SVG shows through */}
        <div className="absolute inset-0" style={{ background: 'rgba(13, 13, 13, 0.80)' }} />

        {/* Vertical accent lines */}
        <div className="absolute top-0 right-[28%] w-px h-full bg-gradient-to-b from-transparent via-mn-accent/10 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-mn-accent/20 via-mn-accent/5 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-mn-bg to-transparent z-10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Main headline — 8 of 12 columns, left-weighted */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-mn-accent" />
              <span className="text-mn-accent text-[0.65rem] uppercase tracking-[0.25em] font-semibold">
                Independent Financial Analysis
              </span>
            </div>

            <h1 className="font-display leading-[0.88] tracking-[-0.04em] mb-10">
              <span className="block text-white" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
                Market
              </span>
              <span
                className="block text-mn-accent"
                style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
              >
                Notes
              </span>
            </h1>

            <p className="text-mn-muted text-lg md:text-xl max-w-lg leading-relaxed mb-12">
              Where Business, Finance, and Community Impact Meet.
              Finance analysis from the bond desks of three continents — written
              for professionals and curious minds alike.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/articles"
                className="btn-primary text-sm py-4 px-8 inline-block text-center"
              >
                Read Latest Articles
              </Link>
              <Link
                href="/newsletter"
                className="btn-outline text-sm py-4 px-8 inline-block text-center"
              >
                Join Newsletter
              </Link>
            </div>
          </div>

          {/* Right column accent — 3 of 12 columns, right-weighted */}
          <div className="hidden lg:flex lg:col-span-3 lg:col-start-10 flex-col gap-5">
            <div className="border border-mn-border bg-mn-surface/40 p-6 backdrop-blur-sm">
              <div className="accent-bar mb-5" />
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-3">
                Latest Issue
              </p>
              {featured && (
                <>
                  <p className="text-white text-sm font-medium leading-snug mb-2">
                    {featured.title}
                  </p>
                  <p className="text-mn-muted text-xs">
                    {formatDate(featured.date)}
                  </p>
                </>
              )}
              <Link
                href={featured ? `/articles/${featured.slug}` : '/articles'}
                className="text-mn-accent text-xs uppercase tracking-wider mt-5 block hover:underline underline-offset-2"
              >
                Read Now →
              </Link>
            </div>

            <div className="border border-mn-border p-5">
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-1">
                Published
              </p>
              <p className="font-display text-3xl text-white">
                {allArticles.length}
              </p>
              <p className="text-mn-muted text-xs mt-1">Articles &amp; Analyses</p>
            </div>

            <div className="border border-mn-border p-5">
              <p className="text-mn-muted text-[0.65rem] uppercase tracking-[0.15em] mb-1">
                Coverage
              </p>
              <p className="text-white text-xs leading-relaxed">
                LatAm · USA · Global Markets · Community Impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Main Content ──────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Article */}
        {featured && (
          <section className="pt-16 pb-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
                Featured
              </span>
              <div className="flex-1 h-px bg-mn-border" />
            </div>
            <FadeIn>
              <ArticleCard article={featured} featured />
            </FadeIn>
          </section>
        )}

        {/* Latest Articles Grid */}
        <section className="py-16">
          <hr className="section-divider mb-12" />
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
                Latest Articles
              </span>
              <div className="w-8 h-px bg-mn-border" />
            </div>
            <Link
              href="/articles"
              className="text-mn-accent text-xs uppercase tracking-wider hover:underline underline-offset-2"
            >
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {latestArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 70} className="bg-mn-bg">
                <div className="bg-mn-bg h-full">
                  <ArticleCard article={article} />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Category Browse */}
        <section className="pb-8">
          <hr className="section-divider mb-8" />
          <div className="flex items-center gap-3 mb-6">
            <span className="text-mn-muted text-[0.65rem] uppercase tracking-[0.18em]">
              Browse by Topic
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'Business',
              'Finance',
              'Community Impact',
              'LatAm Markets',
              'Global Economy',
            ].map((tag) => (
              <Link
                key={tag}
                href={`/category/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                className="category-tag hover:bg-mn-accent hover:text-white transition-all duration-200"
              >
                {tag}
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ─── Opinion Banner ────────────────────────────── */}
      <FadeIn>
        <section className="bg-mn-accent py-14 px-6 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-white mb-5 tracking-tight">
              Your perspective matters.
            </h2>
            <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Every article on Market Notes opens the floor — read, react, and
              drop your take in the comments. Finance is a conversation, not a
              monologue.
            </p>
            <Link
              href="/articles"
              className="inline-block bg-white text-mn-accent font-semibold text-sm py-3 px-8 hover:bg-blue-50 transition-colors duration-200"
            >
              Join the Conversation
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* ─── Newsletter ────────────────────────────────── */}
      <FadeIn>
        <NewsletterSection variant="full" />
      </FadeIn>
    </>
  )
}
