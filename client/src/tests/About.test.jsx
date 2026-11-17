import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { SITE_CONFIG } from '../data/siteConfig.js'
import { useLanguage } from '../hooks/useLanguage.js'
import { About } from '../pages/About.jsx'

/**
 * Harness exposing language switching alongside About.
 *
 * @returns {JSX.Element} Language switch button and About page.
 */
function AboutHarness() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        Lang: {language}
      </button>
      <About />
    </div>
  )
}

/**
 * Renders About inside LanguageProvider.
 *
 * @returns {ReturnType<typeof render>} Testing Library render result.
 */
function renderAbout() {
  return render(
    <LanguageProvider>
      <AboutHarness />
    </LanguageProvider>
  )
}

describe('About', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
    window.localStorage.setItem('portfolio_lang', 'en')
  })

  it('renders portrait, public identity, contact links, credentials, stack, and maker section', () => {
    renderAbout()

    expect(document.title).toBe(`About — ${SITE_CONFIG.name}`)

    const portrait = screen.getByRole('img', { name: 'Portrait of Marco Martins' })
    expect(portrait).toHaveAttribute('width', '600')
    expect(portrait).toHaveAttribute('height', '600')

    expect(
      screen.getByRole('heading', { level: 1, name: SITE_CONFIG.name })
    ).toBeInTheDocument()
    expect(screen.getByText(SITE_CONFIG.location)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'Email Me' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub ↗' })).toHaveAttribute(
      'href',
      SITE_CONFIG.githubUrl
    )
    expect(screen.getByRole('link', { name: 'LinkedIn ↗' })).toHaveAttribute(
      'href',
      SITE_CONFIG.linkedinUrl
    )

    expect(screen.getByText('Grupo Érre (Érre Technology)')).toBeInTheDocument()
    expect(
      screen.getByText('Advanced Course in Web Design & Programming — MasterD (Braga)')
    ).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Hardware, 3D Printing & Photography')).toBeInTheDocument()
  })

  it('translates headings, portrait alt text, and credentials to Portuguese', async () => {
    const user = userEvent.setup()
    renderAbout()

    await user.click(screen.getByRole('button', { name: 'Lang: en' }))

    expect(document.title).toBe(`Sobre — ${SITE_CONFIG.name}`)
    expect(
      screen.getByRole('img', { name: 'Retrato de Marco Martins' })
    ).toBeInTheDocument()
    expect(screen.getByText('Experiência & Formação')).toBeInTheDocument()
    expect(screen.getByText('Tecnologias & Metodologia')).toBeInTheDocument()
    expect(screen.getByText('Para Além do Código')).toBeInTheDocument()
  })

  it('copies email to clipboard and handles rejected clipboard promises safely', async () => {
    const user = userEvent.setup()
    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText },
      configurable: true,
    })

    renderAbout()

    await user.click(screen.getByRole('button', { name: 'Copy Email' }))
    expect(writeText).toHaveBeenCalledWith(SITE_CONFIG.email)
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument()

    writeText.mockRejectedValueOnce(new Error('Clipboard blocked'))
    await user.click(screen.getByRole('button', { name: 'Copied!' }))
    expect(screen.getByRole('button', { name: 'Copied!' })).toBeInTheDocument()
  })

  it('opens email modal defaulted to Full-Stack Role template when Email Me is clicked', async () => {
    const user = userEvent.setup()
    renderAbout()

    await user.click(screen.getByRole('button', { name: 'Email Me' }))

    expect(
      screen.getByRole('heading', { name: 'Choose an Email Template' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('2. Subject')).toHaveValue(
      'Full-Stack Developer Role — Opportunity'
    )
  })
})

