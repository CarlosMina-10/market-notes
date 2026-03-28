'use client'

import { useState, useMemo } from 'react'
import ArticleCard from '@/components/ArticleCard'
import type { ArticleFrontmatter } from '@/lib/mdx'

interface ArticleSearchProps {
  articles: ArticleFrontmatter[]
}

export default function ArticleSearch({ articles }: ArticleSearchProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return articles
    return articles.filter((a) => {
      const categories = Array.isArray(a.category)
        ? a.category.join(' ')
        : a.category ?? ''
      return (
        a.title.toLowerCase().includes(q) ||
        (a.excerpt ?? '').toLowerCase().includes(q) ||
        categories.toLowerCase().includes(q)
      )
    })
  }, [query, articles])

  return (
    <>
      {/* Search input */}
      <div className="flex justify-center px-6 pb-10 max-w-7xl mx-auto">
        <div className="relative w-full max-w-[600px]">
          {/* Magnifying glass icon */}
          <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-mn-muted"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full bg-mn-surface text-white placeholder:text-mn-muted border border-mn-border pl-11 pr-4 py-3 text-sm outline-none focus:border-[#2563eb] transition-colors duration-200"
          />
        </div>
      </div>

      {/* Articles grid */}
      <section className="px-6 max-w-7xl mx-auto pb-24">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mn-border">
            {filtered.map((article) => (
              <div key={article.slug} className="bg-mn-bg h-full">
                <ArticleCard article={article} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-mn-muted text-base">
              No articles found for &ldquo;{query}&rdquo;.
            </p>
          </div>
        )}
      </section>
    </>
  )
}
