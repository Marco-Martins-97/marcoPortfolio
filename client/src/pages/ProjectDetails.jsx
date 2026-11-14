import { Link, useParams } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Temporary Project Details placeholder for /projects/:slug.
 * @returns {JSX.Element} Project details page placeholder.
 */
export function ProjectDetails() {
  const { slug } = useParams()
  const { t } = useLanguage()

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <Link
        to="/projects"
        className="text-xs font-medium text-cobalt-light hover:underline"
      >
        &larr; {t({ en: 'Back to Projects', pt: 'Voltar aos Projetos' })}
      </Link>
      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-4xl">
        {slug}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {t({
          en: 'Project details and screenshots will load here.',
          pt: 'Os detalhes e capturas de ecrã do projeto serão carregados aqui.',
        })}
      </p>
    </section>
  )
}

