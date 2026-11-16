import { useEffect } from 'react'
import { useLanguage } from './useLanguage.js'

const SITE_ORIGIN = 'https://builtbymarco.dev'

/**
 * Normalizes a route pathname into an absolute canonical URL.
 *
 * @param {string} rawPath - Route path (e.g. '/projects' or '/').
 * @returns {string} Canonical URL matching sitemap entries.
 */
function buildCanonicalUrl(rawPath) {
  if (typeof rawPath !== 'string' || rawPath.trim() === '' || rawPath === '/') {
    return `${SITE_ORIGIN}/`
  }

  const leadingSlash = rawPath.startsWith('/') ? rawPath : `/${rawPath}`
  const trimmed = leadingSlash.replace(/\/+$/, '')
  return `${SITE_ORIGIN}${trimmed || '/'}`
}

/**
 * Syncs `document.title`, `<meta name="description">`, and `<link rel="canonical">`
 * with the active route and selected language (`EN` | `pt-PT`).
 * Accepts either a pre-translated string or `{ en, pt }` bilingual copy so every
 * route resolves consistently across React Navigation and screen readers.
 *
 * @param {string | { en: string, pt: string }} title - Page title string or locale map.
 * @param {object} [options={}] - Optional SEO metadata overrides for the active route.
 * @param {string | { en: string, pt: string }} [options.description] - Route meta description.
 * @param {string} [options.path] - Canonical pathname override (defaults to `window.location.pathname`).
 * @returns {void}
 */
export function useDocumentTitle(title, options = {}) {
  const { t } = useLanguage()
  const { description, path } = options

  const resolvedTitle =
    typeof title === 'object' && title !== null ? t(title) : title
  const resolvedDescription =
    typeof description === 'object' && description !== null
      ? t(description)
      : description

  useEffect(() => {
    if (typeof resolvedTitle === 'string' && resolvedTitle.trim() !== '') {
      document.title = resolvedTitle
    }
  }, [resolvedTitle])

  useEffect(() => {
    if (
      typeof resolvedDescription !== 'string' ||
      resolvedDescription.trim() === ''
    ) {
      return
    }

    // Update existing index.html meta description tag when present in DOM
    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', resolvedDescription)
    }
  }, [resolvedDescription])

  useEffect(() => {
    const canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) return

    const targetPath = path ?? window.location.pathname
    canonical.setAttribute('href', buildCanonicalUrl(targetPath))
  }, [path])
}
