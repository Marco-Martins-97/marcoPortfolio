import { createContext, useContext } from 'react'

/**
 * React context holding the active UI language, toggle handler, and translator.
 * Kept in a separate file from LanguageProvider so Vite's react-refresh ESLint rule
 * only sees a single component export inside LanguageContext.jsx.
 */
export const LanguageContext = createContext(null)

/**
 * Accesses the current language state and translation helper.
 *
 * @returns {{
 *   language: 'en' | 'pt',
 *   toggleLanguage: () => void,
 *   t: (localizedObj: { en?: string, pt?: string } | null | undefined) => string
 * }} Current language context value.
 * @throws {Error} When called outside a <LanguageProvider> tree.
 */
export function useLanguage() {
  const context = useContext(LanguageContext)

  // Fail loudly during development instead of crashing later on undefined destructuring
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.')
  }

  return context
}

