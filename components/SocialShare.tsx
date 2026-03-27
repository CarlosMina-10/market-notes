'use client'

import { useState, useEffect } from 'react'

interface SocialShareProps {
  title: string
  variant?: 'inline' | 'sidebar' | 'mobile-bar'
}

export default function SocialShare({
  title,
  variant = 'inline',
}: SocialShareProps) {
  const [copied, setCopied] = useState(false)
  const [shareUrl, setShareUrl] = useState('')

  useEffect(() => {
    setShareUrl(window.location.href)
  }, [])

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(shareUrl)
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // silent fail
    }
  }

  const btnClass =
    'flex items-center gap-2 text-mn-muted hover:text-mn-accent transition-colors duration-200 text-sm py-2 px-3 border border-mn-border hover:border-mn-accent bg-transparent cursor-pointer'

  if (variant === 'mobile-bar') {
    return (
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-mn-surface border-t border-mn-border px-4 py-3 flex items-center justify-center gap-3">
        <span className="text-xs text-mn-muted uppercase tracking-widest mr-1">
          Share
        </span>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="Share on X"
        >
          <TwitterIcon />
          <span>X</span>
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={btnClass}
          aria-label="Share on LinkedIn"
        >
          <LinkedinIcon />
          <span>LinkedIn</span>
        </a>
        <button onClick={handleCopy} className={btnClass} aria-label="Copy link">
          <LinkIcon />
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className="hidden md:flex flex-col items-center gap-3 pt-2">
        <span className="text-xs text-mn-muted uppercase tracking-widest writing-mode-vertical rotate-180 mb-2">
          Share
        </span>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mn-muted hover:text-mn-accent transition-colors p-2 border border-mn-border hover:border-mn-accent"
          aria-label="Share on X"
          title="Share on X"
        >
          <TwitterIcon />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-mn-muted hover:text-mn-accent transition-colors p-2 border border-mn-border hover:border-mn-accent"
          aria-label="Share on LinkedIn"
          title="Share on LinkedIn"
        >
          <LinkedinIcon />
        </a>
        <button
          onClick={handleCopy}
          className="text-mn-muted hover:text-mn-accent transition-colors p-2 border border-mn-border hover:border-mn-accent cursor-pointer bg-transparent"
          aria-label="Copy link"
          title={copied ? 'Copied!' : 'Copy link'}
        >
          <LinkIcon />
        </button>
        {copied && (
          <span className="text-xs text-mn-accent absolute ml-10">Copied!</span>
        )}
      </div>
    )
  }

  // inline variant
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-xs text-mn-muted uppercase tracking-widest">
        Share
      </span>
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
        aria-label="Share on X (Twitter)"
      >
        <TwitterIcon />
        <span>Twitter / X</span>
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={btnClass}
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon />
        <span>LinkedIn</span>
      </a>
      <button onClick={handleCopy} className={btnClass} aria-label="Copy link">
        <LinkIcon />
        <span>{copied ? 'Copied!' : 'Copy Link'}</span>
      </button>
    </div>
  )
}

function TwitterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
