import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Temporary Projects Index placeholder.
 * @returns {JSX.Element} Projects page placeholder.
 */
export function Projects() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold tracking-tight sm:text-4xl">
        {t({ en: 'Projects', pt: 'Projetos' })}
      </h1>
      <p className="mt-3 text-sm text-muted">
        {t({
          en: 'Primary engineering builds and curated secondary projects coming next.',
          pt: 'Projetos principais e projetos secundários selecionados em construção.',
        })}
      </p>
    </section>
  )
}

