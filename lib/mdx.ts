import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import type { Locale } from './translations'

const articlesDir = (locale: Locale = 'en') =>
  locale === 'es'
    ? path.join(process.cwd(), 'content/articles/es')
    : path.join(process.cwd(), 'content/articles')

export interface ArticleFrontmatter {
  title: string
  date: string
  category: string[]
  excerpt: string
  author: string
  readTime: string
  featured?: boolean
  image?: string
  slug: string
}

export interface Article extends ArticleFrontmatter {
  content: string
}

export function getAllArticles(locale: Locale = 'en'): ArticleFrontmatter[] {
  let fileNames: string[] = []
  try {
    fileNames = fs.readdirSync(articlesDir(locale))
  } catch {
    return []
  }

  const articles = fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(articlesDir(locale), fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        category: Array.isArray(data.category)
          ? data.category
          : [data.category || 'Finance'],
        excerpt: data.excerpt || '',
        author: data.author || 'Carlos Mina',
        readTime: data.readTime || stats.text,
        featured: data.featured || false,
        image: data.image,
      } as ArticleFrontmatter
    })

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getArticleBySlug(slug: string, locale: Locale = 'en'): Article | null {
  try {
    const fullPath = path.join(articlesDir(locale), `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)

    return {
      slug,
      content,
      title: data.title || '',
      date: data.date || '',
      category: Array.isArray(data.category)
        ? data.category
        : [data.category || 'Finance'],
      excerpt: data.excerpt || '',
      author: data.author || 'Carlos Mina',
      readTime: data.readTime || stats.text,
      featured: data.featured || false,
      image: data.image,
    } as Article
  } catch {
    return null
  }
}

export function getArticlesByCategory(tag: string, locale: Locale = 'en'): ArticleFrontmatter[] {
  const normalized = tag.toLowerCase().replace(/-/g, ' ')
  return getAllArticles(locale).filter((article) =>
    article.category.some((cat) => cat.toLowerCase() === normalized)
  )
}

export function getFeaturedArticle(locale: Locale = 'en'): ArticleFrontmatter | null {
  const articles = getAllArticles(locale)
  return articles.find((a) => a.featured) || articles[0] || null
}

export function getAllSlugs(locale: Locale = 'en'): string[] {
  try {
    return fs
      .readdirSync(articlesDir(locale))
      .filter((name) => name.endsWith('.mdx'))
      .map((name) => name.replace(/\.mdx$/, ''))
  } catch {
    return []
  }
}

export function getRelatedArticles(
  currentSlug: string,
  categories: string[],
  count = 3,
  locale: Locale = 'en'
): ArticleFrontmatter[] {
  return getAllArticles(locale)
    .filter((article) => article.slug !== currentSlug)
    .filter((article) =>
      article.category.some((cat) =>
        categories.some((c) => c.toLowerCase() === cat.toLowerCase())
      )
    )
    .slice(0, count)
}

export const ALL_CATEGORIES = [
  'Business',
  'Finance',
  'Community Impact',
  'LatAm Markets',
  'Global Economy',
]
