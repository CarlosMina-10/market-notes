# Market Notes

> **Where Business, Finance, and Community Impact Meet**

A production-ready publication website built with Next.js 14 (App Router), Tailwind CSS, and MDX. Written by Carlos Mina — finance professional with experience across bond desks in Israel, risk floors in Colombia, and private capital markets in the United States.

---

## Quick Start

```bash
cd market-notes
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Deploy to Vercel (Free — Zero Configuration)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo
4. Click **Deploy** — no configuration needed

Your site will be live at `https://market-notes-[yourname].vercel.app` instantly. To get `marketnotes.vercel.app` specifically, name your Vercel project `marketnotes` in the project settings.

### Environment Variables on Vercel

After deploying, add your environment variables in Vercel → Project Settings → Environment Variables:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g., `https://marketnotes.vercel.app`) |
| `NEXT_PUBLIC_GISCUS_REPO` | Your GitHub repo (`username/repo`) |
| `NEXT_PUBLIC_GISCUS_REPO_ID` | Your Giscus repo ID |
| `NEXT_PUBLIC_GISCUS_CATEGORY` | Discussion category name |
| `NEXT_PUBLIC_GISCUS_CATEGORY_ID` | Discussion category ID |
| `NEXT_PUBLIC_BEEHIIV_EMBED_ID` | Your Beehiiv publication ID |

---

## Setting Up Giscus Comments (5 minutes, free)

Giscus uses GitHub Discussions as your comment backend. Zero cost, no database needed.

### Step 1 — Enable GitHub Discussions on your repo

1. Go to your GitHub repo → **Settings**
2. Scroll to **Features** → check **Discussions**
3. Click **Set up discussions**

### Step 2 — Configure Giscus

1. Visit [https://giscus.app](https://giscus.app)
2. Enter your repository name (e.g., `your-username/market-notes`)
3. Select **Mapping**: choose `pathname` (recommended — links comments to article URL)
4. Select a **Discussion Category**: `General` works well, or create a `Comments` category
5. Copy the values Giscus provides for:
   - `data-repo-id` → `NEXT_PUBLIC_GISCUS_REPO_ID`
   - `data-category` → `NEXT_PUBLIC_GISCUS_CATEGORY`
   - `data-category-id` → `NEXT_PUBLIC_GISCUS_CATEGORY_ID`

### Step 3 — Add to your local `.env.local`

```bash
cp .env.local.example .env.local
```

Fill in the values from Giscus:

```env
NEXT_PUBLIC_GISCUS_REPO=your-username/market-notes
NEXT_PUBLIC_GISCUS_REPO_ID=R_kgDO...
NEXT_PUBLIC_GISCUS_CATEGORY=General
NEXT_PUBLIC_GISCUS_CATEGORY_ID=DIC_...
```

Comments will appear on every article page under the **"What's Your Take?"** section. Readers sign in with their GitHub account to comment.

---

## Connecting Beehiiv Newsletter

[Beehiiv](https://beehiiv.com) is a free newsletter platform built for serious publishers.

### Step 1 — Create your Beehiiv publication

1. Sign up at [beehiiv.com](https://beehiiv.com) (free plan available)
2. Create your publication — name it "Market Notes"

### Step 2 — Get your Publication ID

1. In Beehiiv dashboard → **Settings** → **Publication**
2. Copy your **Publication ID** (starts with `pub_`)

### Step 3 — Add to environment variables

```env
NEXT_PUBLIC_BEEHIIV_EMBED_ID=pub_your_publication_id_here
```

When this variable is set, the newsletter form will open Beehiiv's hosted subscription page with the email pre-filled. For a fully embedded experience, you can replace the `NewsletterSection` component with Beehiiv's official embed code from their dashboard.

---

## Adding New Articles

Articles live in `content/articles/` as `.mdx` files.

### File naming convention

```
content/articles/your-article-slug.mdx
```

The filename becomes the URL: `/articles/your-article-slug`

### Frontmatter fields

```mdx
---
title: "Your Article Title"
date: "2025-12-01"
category: ["Finance", "Global Economy"]
excerpt: "A compelling one or two sentence summary that appears in article cards and meta descriptions."
author: "Carlos Mina"
readTime: "5 min read"
featured: true
---

Article body in Markdown...
```

| Field | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✓ | Article headline |
| `date` | string (YYYY-MM-DD) | ✓ | Publication date — used for sorting |
| `category` | string[] | ✓ | One or more of: `Business`, `Finance`, `Community Impact`, `LatAm Markets`, `Global Economy` |
| `excerpt` | string | ✓ | One–two sentence summary (appears in cards and meta tags) |
| `author` | string | ✓ | Author name |
| `readTime` | string | — | e.g., `"6 min read"`. Auto-calculated if omitted |
| `featured` | boolean | — | Set to `true` on the article you want featured on the homepage |
| `image` | string | — | Path to OG image (defaults to `/og-image.png`) |

### MDX formatting tips

**Pull quotes** — use standard Markdown blockquotes:
```md
> This is a pull quote. It gets styled with an electric blue left border.
```

**Section headers** — use `##` for section headers, `###` for sub-sections.

**Bold Market Notes Take section** — to style the opinionated take section, use `##` with the text "Market Notes Take":
```md
## Market Notes Take

Your opinion here...
```

---

## Adding a Custom Domain (Optional, ~$12/year)

1. Buy a domain from Namecheap, Google Domains, or Cloudflare Registrar
2. In Vercel → Project → **Settings** → **Domains** → add your domain
3. Follow Vercel's DNS configuration instructions (takes ~5 minutes)
4. Update `NEXT_PUBLIC_SITE_URL` to your new domain

---

## Project Structure

```
market-notes/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout, fonts, metadata
│   ├── page.tsx                  # Homepage
│   ├── about/page.tsx
│   ├── meet-the-author/page.tsx
│   ├── newsletter/page.tsx
│   ├── articles/
│   │   ├── page.tsx              # Article listing
│   │   └── [slug]/page.tsx       # Individual article
│   ├── category/[tag]/page.tsx   # Category filter pages
│   ├── sitemap.ts                # Auto-generated sitemap
│   └── robots.ts                 # robots.txt
├── components/
│   ├── Navbar.tsx                # Sticky frosted-glass navbar
│   ├── Footer.tsx                # Footer with newsletter
│   ├── ArticleCard.tsx           # Article card (default + featured)
│   ├── NewsletterSection.tsx     # Newsletter signup (full / compact / footer)
│   ├── GiscusComments.tsx        # Giscus comment embed
│   ├── SocialShare.tsx           # Share buttons (inline / sidebar / mobile)
│   ├── FadeIn.tsx                # Scroll-triggered fade animation
│   └── MobileMenu.tsx            # Full-screen mobile nav
├── content/
│   └── articles/                 # MDX article files
├── lib/
│   ├── mdx.ts                    # Article parsing utilities
│   └── utils.ts                  # Date formatting, slugs
├── public/                       # Static assets
├── vercel.json                   # Vercel deployment config
└── .env.local.example            # Environment variable template
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Content | MDX + `next-mdx-remote` v5 (RSC) |
| Comments | Giscus (GitHub Discussions) |
| Newsletter | Beehiiv (via env variable) |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Design System

| Role | Value |
|---|---|
| Background | `#0d0d0d` |
| Surface / Cards | `#141414` |
| Accent | `#2563eb` (electric blue) |
| Primary text | `#ffffff` |
| Muted text | `#9ca3af` |
| Borders | `#1f1f1f` |
| Hover glow | `rgba(37, 99, 235, 0.15)` |

---

*Built by Carlos Mina · Market Notes © 2025*
