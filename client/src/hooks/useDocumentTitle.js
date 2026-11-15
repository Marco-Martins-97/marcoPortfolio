import { useEffect } from 'react'

/**
 * Syncs `document.title` with the active route and language.
 * Keeps browser tabs and screen reader page announcements accurate.
 *
 * @param {string} title - Localized document title for the current route.
 * @returns {void}
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (typeof title === 'string' && title.trim() !== '') {
      document.title = title
    }
  }, [title])
}

