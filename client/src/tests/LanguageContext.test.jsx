import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Minimal test consumer exposing LanguageContext values in the DOM.
 * @returns {JSX.Element} Test harness UI.
 */
function TestConsumer() {
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <div>
      <span data-testid="lang">{language}</span>
      <span data-testid="greeting">{t({ en: 'Hello', pt: 'Olá' })}</span>
      <span data-testid="fallback">{t({ en: 'English only' })}</span>
      <button type="button" onClick={toggleLanguage}>
        Toggle
      </button>
    </div>
  )
}

describe('LanguageContext', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
    document.documentElement.lang = 'en'
  })

  it('defaults to European Portuguese and toggles to English with <html lang="en">', async () => {
    const user = userEvent.setup()

    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang')).toHaveTextContent('pt')
    expect(screen.getByTestId('greeting')).toHaveTextContent('Olá')
    expect(document.documentElement.lang).toBe('pt-PT')

    await user.click(screen.getByRole('button', { name: /toggle/i }))

    expect(screen.getByTestId('lang')).toHaveTextContent('en')
    expect(screen.getByTestId('greeting')).toHaveTextContent('Hello')
    expect(document.documentElement.lang).toBe('en')
    expect(window.localStorage.getItem('portfolio_lang')).toBe('en')
  })

  it('falls back to English when a Portuguese translation is missing', async () => {
    window.localStorage.setItem('portfolio_lang', 'pt')

    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang')).toHaveTextContent('pt')
    expect(screen.getByTestId('fallback')).toHaveTextContent('English only')
  })

  it('ignores invalid localStorage values and defaults safely to Portuguese', () => {
    window.localStorage.setItem('portfolio_lang', 'fr')

    render(
      <LanguageProvider>
        <TestConsumer />
      </LanguageProvider>
    )

    expect(screen.getByTestId('lang')).toHaveTextContent('pt')
  })

  it('throws an explicit error when useLanguage is called outside LanguageProvider', () => {
    // Silence React's expected error boundary console noise during this assertion
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => render(<TestConsumer />)).toThrow(
      'useLanguage must be used within a LanguageProvider.'
    )

    consoleSpy.mockRestore()
  })
})

