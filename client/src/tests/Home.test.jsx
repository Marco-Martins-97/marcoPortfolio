import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { SITE_CONFIG } from '../data/siteConfig.js'
import { useLanguage } from '../hooks/useLanguage.js'
import { Home } from '../pages/Home.jsx'

/**
 * Harness exposing language switching alongside Home.
 *
 * @returns {JSX.Element} Language switch button and Home page.
 */
function HomeHarness() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        Lang: {language}
      </button>
      <Home />
    </div>
  )
}

/**
 * Renders Home inside MemoryRouter and LanguageProvider.
 *
 * @returns {ReturnType<typeof render>} Testing Library render result.
 */
function renderHome() {
  return render(
    <MemoryRouter>
      <LanguageProvider>
        <HomeHarness />
      </LanguageProvider>
    </MemoryRouter>
  )
}

describe('Home', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('renders client-friendly hero, navigation CTAs, mailto link, and 3 service cards', () => {
    renderHome()

    expect(document.title).toBe(`${SITE_CONFIG.name} — Websites & Custom Web Tools`)

    expect(
      screen.getByText('Open to Full-Stack roles & freelance projects')
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Simple, fast websites for your business.',
      })
    ).toBeInTheDocument()

    const emailLink = screen.getByRole('link', { name: 'Email Me' })
    expect(emailLink).toHaveAttribute(
      'href',
      expect.stringContaining(`mailto:${SITE_CONFIG.email}`)
    )

    expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute(
      'href',
      '/projects'
    )
    expect(screen.getByRole('link', { name: 'About →' })).toHaveAttribute(
      'href',
      '/about'
    )

    expect(screen.getByText('Business Websites')).toBeInTheDocument()
    expect(screen.getByText('Custom Web Tools')).toBeInTheDocument()
    expect(screen.getByText('Fast & Reliable')).toBeInTheDocument()
  })

  it('translates hero, CTAs, and service cards when switched to Portuguese', async () => {
    const user = userEvent.setup()
    renderHome()

    await user.click(screen.getByRole('button', { name: 'Lang: en' }))

    expect(document.title).toBe(`${SITE_CONFIG.name} — Websites & Ferramentas Web`)

    expect(
      screen.getByText('Disponível para Full-Stack e freelance')
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Websites simples e rápidos para o seu negócio.',
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Enviar Email' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Ver Projetos' })).toBeInTheDocument()
    expect(screen.getByText('Como Posso Ajudar')).toBeInTheDocument()
  })

  it('copies contact email to clipboard and handles clipboard rejection safely', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    renderHome()

    const copyBtn = screen.getByRole('button', { name: 'Copy Email' })
    await user.click(copyBtn)

    expect(writeText).toHaveBeenCalledWith(SITE_CONFIG.email)
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument()

    // Verify rejected clipboard call does not throw unhandled errors
    writeText.mockRejectedValueOnce(new Error('Clipboard blocked'))
    await user.click(screen.getByRole('button', { name: 'Copied!' }))
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument()
  })
})

