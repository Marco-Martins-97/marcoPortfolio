import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { useLanguage } from '../hooks/useLanguage.js'
import { Projects } from '../pages/Projects.jsx'

function ProjectsHarness() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div>
      <button type="button" onClick={toggleLanguage}>
        Lang: {language}
      </button>
      <Projects />
    </div>
  )
}

function renderProjects() {
  return render(
    <LanguageProvider>
      <MemoryRouter>
        <ProjectsHarness />
      </MemoryRouter>
    </LanguageProvider>,
  )
}

describe('Projects page', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('renders Primary and Secondary project sections with cover preview', async () => {
    renderProjects()

    expect(
      await screen.findByRole('heading', { name: 'Root Studio Fitness' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Primary Projects' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Secondary Projects' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Root Studio Fitness preview' }),
    ).toBeInTheDocument()

    const detailLinks = screen.getAllByRole('link', { name: /View Details/i })
    expect(detailLinks).toHaveLength(4)
  })

  it('switches headings to European Portuguese when toggled to PT', async () => {
    renderProjects()

    expect(
      await screen.findByRole('heading', { name: 'Projects' }),
    ).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /Lang: en/i }))

    expect(
      screen.getByRole('heading', { name: 'Projetos' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Projetos Principais' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Projetos Secundários' }),
    ).toBeInTheDocument()
  })
})
