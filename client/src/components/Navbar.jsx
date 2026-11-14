import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SITE_CONFIG } from '../data/siteConfig.js'
import { useLanguage } from '../hooks/useLanguage.js'

const NAV_LINKS = [
  { to: '/', label: { en: 'Home', pt: 'Início' }, end: true },
  { to: '/projects', label: { en: 'Projects', pt: 'Projetos' }, end: false },
  { to: '/about', label: { en: 'About', pt: 'Sobre' }, end: true },
]

/**
 * Mobile-first site header with responsive navigation and EN | PT language toggle.
 * Keeps a single <nav> landmark and aligned DOM/visual tab order across breakpoints.
 *
 * @returns {JSX.Element} Header landmark with navigation and language switcher.
 */
export function Navbar() {
  const { language, toggleLanguage, t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  /**
   * Closes the mobile menu after selecting a route.
   * @returns {void}
   */
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="relative z-20 border-b border-border bg-surface/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="text-base font-semibold tracking-tight text-text transition-colors hover:text-cobalt-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
        >
          {SITE_CONFIG.name}
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          <nav aria-label="Primary" className="flex items-center">
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="primary-menu"
              aria-label={t({
                en: isMenuOpen ? 'Close navigation menu' : 'Open navigation menu',
                pt: isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação',
              })}
              className="inline-flex min-h-9 min-w-9 cursor-pointer items-center justify-center rounded-md border border-border bg-obsidian p-2 text-text transition-colors hover:border-cobalt hover:text-cobalt-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light sm:hidden"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {isMenuOpen ? (
                  <>
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </>
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>

            <ul
              id="primary-menu"
              className={
                isMenuOpen
                  ? 'absolute inset-x-0 top-full flex flex-col border-b border-border bg-surface py-2 shadow-lg sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none'
                  : 'hidden sm:flex sm:items-center sm:gap-6'
              }
            >
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        'flex min-h-11 w-full items-center px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light sm:inline-flex sm:min-h-9 sm:w-auto sm:px-1',
                        // Use both color and border/background so active state is never color-only
                        isActive
                          ? 'border-l-2 border-cobalt bg-obsidian/50 text-cobalt-light sm:border-b-2 sm:border-l-0 sm:bg-transparent'
                          : 'text-muted hover:bg-obsidian/30 hover:text-text sm:hover:bg-transparent',
                      ].join(' ')
                    }
                  >
                    {t(item.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bilingual EN | PT switcher */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={
              language === 'en'
                ? 'Switch language to Portuguese'
                : 'Mudar idioma para Inglês'
            }
            className="inline-flex min-h-9 cursor-pointer items-center gap-1.5 rounded-md border border-border bg-obsidian px-3 py-1.5 font-mono text-xs font-medium transition-colors hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
          >
            <span
              className={
                language === 'en' ? 'font-semibold text-cobalt-light' : 'text-muted'
              }
            >
              EN
            </span>
            <span className="text-border" aria-hidden="true">
              |
            </span>
            <span
              className={
                language === 'pt' ? 'font-semibold text-cobalt-light' : 'text-muted'
              }
            >
              PT
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

