import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { Navbar } from '../components/Navbar.jsx'

/**
 * Helper to render Navbar inside Router and LanguageProvider contexts.
 * @param {string} [initialRoute='/'] - Initial memory router path.
 * @returns {ReturnType<typeof render>} Testing Library render result.
 */
function renderNavbar(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>
    </MemoryRouter>
  )
}

describe('Navbar', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('marks the active route link with aria-current="page"', async () => {
    const user = userEvent.setup()
    renderNavbar('/')

    const homeLink = screen.getByRole('link', { name: 'Home' })
    const projectsLink = screen.getByRole('link', { name: 'Projects' })

    expect(homeLink).toHaveAttribute('aria-current', 'page')
    expect(projectsLink).not.toHaveAttribute('aria-current', 'page')

    await user.click(projectsLink)

    expect(projectsLink).toHaveAttribute('aria-current', 'page')
    expect(homeLink).not.toHaveAttribute('aria-current', 'page')
  })

  it('toggles mobile navigation aria-expanded state and closes on link click', async () => {
    const user = userEvent.setup()
    renderNavbar('/')

    const menuButton = screen.getByRole('button', { name: /open navigation menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('switches navigation labels between English and Portuguese', async () => {
    const user = userEvent.setup()
    renderNavbar('/')

    const langButton = screen.getByRole('button', {
      name: /switch language to portuguese/i,
    })

    await user.click(langButton)

    expect(screen.getByRole('link', { name: 'Início' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projetos' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument()
  })
})

