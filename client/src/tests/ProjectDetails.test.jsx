import '@testing-library/jest-dom/vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { beforeEach, describe, expect, it } from 'vitest'
import { LanguageProvider } from '../context/LanguageContext.jsx'
import { ProjectDetails } from '../pages/ProjectDetails.jsx'

function renderDetails(slug = 'root-studio-fitness') {
  return render(
    <LanguageProvider>
      <MemoryRouter initialEntries={[`/projects/${slug}`]}>
        <Routes>
          <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </MemoryRouter>
    </LanguageProvider>,
  )
}

describe('ProjectDetails page', () => {
  beforeEach(() => {
    cleanup()
    window.localStorage.clear()
  })

  it('renders metadata strip, release accordions, and interactive lightbox', async () => {
    renderDetails('root-studio-fitness')

    expect(
      await screen.findByRole('heading', { name: 'Root Studio Fitness' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('Vercel · Render · Atlas · Cloudinary · Pi Keepalive'),
    ).toBeInTheDocument()

    const v1Button = screen.getByRole('button', { name: /v1\.0\.0/i })
    const v01Button = screen.getByRole('button', { name: /v0\.1\.0/i })
    expect(v1Button).toHaveAttribute('aria-expanded', 'true')
    expect(v01Button).toHaveAttribute('aria-expanded', 'false')

    const firstThumb = screen.getByRole('button', {
      name: /Live workout player with session progress and timer/i,
    })
    fireEvent.click(firstThumb)

    expect(screen.getByText('1 / 7')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Next screenshot' }))
    expect(screen.getByText('2 / 7')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Previous screenshot' }))
    expect(screen.getByText('1 / 7')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Close gallery' }))
    expect(screen.queryByText('1 / 7')).not.toBeInTheDocument()

    fireEvent.click(v01Button)
    expect(v01Button).toHaveAttribute('aria-expanded', 'true')
    expect(v1Button).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders not-found fallback when project slug does not exist', async () => {
    renderDetails('unknown-project')

    expect(
      await screen.findByRole('heading', { name: 'Project not found' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Back to Projects/i }),
    ).toHaveAttribute('href', '/projects')
  })
})
