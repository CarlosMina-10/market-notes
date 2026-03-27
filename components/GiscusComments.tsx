'use client'

import Giscus from '@giscus/react'

export default function GiscusComments() {
  const repo = (process.env.NEXT_PUBLIC_GISCUS_REPO ||
    'your-username/market-notes') as `${string}/${string}`
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || 'YOUR_REPO_ID'
  const category = process.env.NEXT_PUBLIC_GISCUS_CATEGORY || 'General'
  const categoryId =
    process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || 'YOUR_CATEGORY_ID'

  // Show placeholder if not yet configured
  if (repoId === 'YOUR_REPO_ID') {
    return (
      <div className="border border-mn-border bg-mn-surface p-8 text-center">
        <p className="text-mn-muted text-sm mb-2">Comments powered by Giscus</p>
        <p className="text-mn-muted text-xs">
          Configure Giscus in your{' '}
          <code className="text-mn-accent">.env.local</code> to enable comments.
          See README for setup instructions.
        </p>
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-mn-accent text-xs underline underline-offset-2 hover:text-white transition-colors"
        >
          Set up Giscus free in 5 minutes →
        </a>
      </div>
    )
  }

  return (
    <div className="giscus-wrapper">
      <Giscus
        id="comments"
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
