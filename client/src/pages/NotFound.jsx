import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Fallback 404 page for unmatched routes.
 * @returns {JSX.Element} Not-found view with link back home.
 */
export function NotFound() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-start justify-center px-4 py-16 sm:px-6">
      <p className="font-mono text-xs font-semibold text-amber uppercase">404</p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl">
        {t({ en: 'Page not found', pt: 'Página não encontrada' })}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {t({
          en: 'The page you are looking for does not exist or has been moved.',
          pt: 'A página que procura não existe ou foi movida.',
        })}
      </p>
      <Link
        to="/"
        className="mt-6 inline-flex min-h-9 items-center rounded-md bg-amber px-4 py-2 text-xs font-semibold text-obsidian transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber"
      >
        {t({ en: 'Back to Home', pt: 'Voltar ao Início' })}
      </Link>
    </section>
  )
}

