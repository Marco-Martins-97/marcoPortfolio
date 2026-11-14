import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Temporary About page placeholder.
 * @returns {JSX.Element} About page placeholder.
 */
export function About() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
        {t({ en: 'About', pt: 'Sobre Mim' })}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {t({
          en: 'Full-Stack Developer focused on MERN, clean architecture, and reliable web products.',
          pt: 'Programador Full-Stack focado em MERN, arquitetura limpa e produtos web fiáveis.',
        })}
      </p>
    </section>
  )
}

