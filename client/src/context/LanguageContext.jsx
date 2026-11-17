import { useCallback, useEffect, useState } from 'react'
import { LanguageContext } from '../hooks/useLanguage.js'

const STORAGE_KEY = 'portfolio_lang'
const DEFAULT_LANGUAGE = 'pt'
const SUPPORTED_LANGUAGES = new Set(['en', 'pt'])

/**
 * Reads the initial language preference safely from localStorage.
 *
 * @returns {'en' | 'pt'} Validated initial language code.
 */
function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return SUPPORTED_LANGUAGES.has(saved) ? saved : DEFAULT_LANGUAGE
  } catch {
    // Fallback when storage is blocked (e.g., private browsing or restricted iframes)
    return DEFAULT_LANGUAGE
  }
}

/**
 * Provides bilingual ('en' | 'pt') state, persistence, and a schema-aligned
 * translation helper to all child components.
 *
 * @param {{ children: import('react').ReactNode }} props - Provider props.
 * @returns {JSX.Element} Context provider wrapping the application subtree.
 */
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    // Sync <html lang> so screen readers and browser spellcheckers match the active copy
    document.documentElement.lang = language === 'pt' ? 'pt-PT' : 'en'

    try {
      window.localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // Ignore storage write failures when quota or privacy settings block localStorage
    }
  }, [language])

  /**
   * Switches active language between English and European Portuguese.
   * @returns {void}
   */
  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'pt' : 'en'))
  }, [])

  /**
   * Resolves a { en, pt } localized object matching the Stage 2 MongoDB schema.
   * Falls back to English, then empty string, so partial translations never render "undefined".
   *
   * @param {{ en?: string, pt?: string } | null | undefined} localizedObj - Text map.
   * @returns {string} Resolved string for the active language.
   */
  const t = useCallback(
    (localizedObj) => {
      if (!localizedObj || typeof localizedObj !== 'object') {
        return ''
      }
      return localizedObj[language] ?? localizedObj.en ?? ''
    },
    [language]
  )

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

