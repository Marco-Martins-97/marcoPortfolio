import { SITE_CONFIG } from '../data/siteConfig.js'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Temporary Homepage placeholder while Piece 5 is built.
 * @returns {JSX.Element} Homepage placeholder content.
 */
export function Home() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-16 sm:px-6">
      <p className="text-xs font-semibold tracking-wider text-cobalt-light uppercase">
        {t(SITE_CONFIG.role)}
      </p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl">
        {SITE_CONFIG.name}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
        {t({
          en: 'Clean, fast websites for small businesses and production-grade MERN applications.',
          pt: 'Websites rápidos e limpos para pequenos negócios e aplicações MERN de nível de produção.',
        })}
      </p>
    </section>
  )
}

