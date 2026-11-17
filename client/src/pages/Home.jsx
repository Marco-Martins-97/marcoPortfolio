import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { EmailModal } from '../components/EmailModal.jsx'
import { SITE_CONFIG } from '../data/siteConfig.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../hooks/useLanguage.js'

const SERVICES = [
  {
    id: 'business-websites',
    title: { en: 'Business Websites', pt: 'Websites para Negócios' },
    description: {
      en: 'Clean pages designed to work on phones, tablets, and computers and turn visitors into clients.',
      pt: 'Páginas limpas pensadas para telemóveis, tablets e computadores, focadas em converter visitantes.',
    },
  },
  {
    id: 'custom-web-tools',
    title: { en: 'Custom Web Tools', pt: 'Ferramentas à Medida' },
    description: {
      en: 'Booking portals, client areas, and online systems tailored to your workflow.',
      pt: 'Portais de marcações, áreas de cliente e sistemas online adaptados ao seu negócio.',
    },
  },
  {
    id: 'fast-reliable',
    title: { en: 'Fast & Reliable', pt: 'Rápido e Fiável' },
    description: {
      en: 'Built with care so your site loads quickly, stays secure, and grows with you.',
      pt: 'Construído com rigor para carregar rápido, manter-se seguro e crescer consigo.',
    },
  },
]

/**
 * Bilingual, mobile-first Homepage (/) tailored for small-business prospects
 * and recruiters, featuring plain-language value propositions and clear CTAs.
 *
 * @returns {JSX.Element} Complete homepage view.
 */
export function Home() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  useDocumentTitle(
    t({
      en: `${SITE_CONFIG.name} — Websites & Custom Web Tools`,
      pt: `${SITE_CONFIG.name} — Websites & Ferramentas Web`,
    })
  )

  useEffect(() => {
    if (!copied) return undefined

    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  /**
   * Copies the public contact email to the clipboard as a fallback for visitors
   * without a configured desktop mail client.
   *
   * @returns {Promise<void>}
   */
  const handleCopyEmail = async () => {
    if (!navigator.clipboard?.writeText) return

    try {
      await navigator.clipboard.writeText(SITE_CONFIG.email)
      setCopied(true)
    } catch {
      // Ignore clipboard permission denials silently; the mailto link remains available
    }
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 sm:px-6 lg:gap-24 lg:py-12 xl:max-w-6xl 2xl:max-w-[90rem] 2xl:gap-28 2xl:py-16 min-[2200px]:max-w-[112rem] min-[2200px]:gap-32">
      {/* Hero: full first screen on mobile & tablet (< lg), shared screen with services on desktop/4K (lg+) */}
      <section
        aria-labelledby="home-hero-heading"
        className="relative pt-24 pb-8 lg:py-0"
      >
        <div className="absolute top-4 left-0 lg:static lg:mb-4 min-[2200px]:mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-live/15 px-3 py-1 text-xs font-semibold text-live min-[2200px]:px-4 min-[2200px]:py-1.5 min-[2200px]:text-sm">
            <span className="h-2 w-2 rounded-full bg-live" aria-hidden="true" />
            {t({
              en: 'Open to Full-Stack roles & freelance projects',
              pt: 'Disponível para Full-Stack e freelance',
            })}
          </span>
        </div>

        <h1
          id="home-hero-heading"
          className="text-center text-2xl font-bold tracking-tight text-text sm:text-3xl lg:text-left lg:text-4xl 2xl:text-5xl min-[2200px]:text-6xl"
        >
          {t({
            en: 'Simple, fast websites for your business.',
            pt: 'Websites simples e rápidos para o seu negócio.',
          })}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-justify text-base leading-relaxed text-muted lg:mx-0 lg:text-left 2xl:max-w-3xl 2xl:text-lg min-[2200px]:mt-6 min-[2200px]:max-w-4xl min-[2200px]:text-xl">
          {t({
            en: 'I help small businesses stand out online with clean websites that work on every device and custom web tools.',
            pt: 'Ajudo pequenos negócios a destacar-se online com websites limpos que funcionam em qualquer dispositivo e ferramentas à medida.',
          })}
        </p>

        <div className="mx-auto mt-7 grid w-full max-w-md grid-cols-2 gap-3 lg:mx-0 lg:flex lg:max-w-none lg:flex-wrap lg:items-center min-[2200px]:mt-9 min-[2200px]:gap-4">
          <button
            type="button"
            onClick={() => setIsEmailModalOpen(true)}
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-cobalt-strong px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light min-[2200px]:min-h-13 min-[2200px]:px-6 min-[2200px]:text-base"
          >
            {t({ en: 'Email Me', pt: 'Enviar Email' })}
          </button>

          <button
            type="button"
            onClick={handleCopyEmail}
            aria-live="polite"
            className="inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-cobalt hover:text-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light min-[2200px]:min-h-13 min-[2200px]:px-5 min-[2200px]:text-base"
          >
            {copied
              ? t({ en: 'Copied!', pt: 'Copiado!' })
              : t({ en: 'Copy Email', pt: 'Copiar Email' })}
          </button>

          <Link
            to="/projects"
            className="col-span-2 inline-flex min-h-11 items-center justify-center rounded-lg border border-cobalt px-5 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-cobalt/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light lg:col-span-1 min-[2200px]:min-h-13 min-[2200px]:px-6 min-[2200px]:text-base"
          >
            {t({ en: 'View Projects', pt: 'Ver Projetos' })}
          </Link>

          <Link
            to="/about"
            className="col-span-2 inline-flex min-h-11 items-center justify-center px-2 text-sm font-medium text-cobalt-light transition-colors hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light lg:col-span-1 min-[2200px]:text-base"
          >
            {t({ en: 'About →', pt: 'Sobre →' })}
          </Link>
        </div>
      </section>

      {/* Services / Value Proposition */}
      <section
        aria-labelledby="home-services-heading"
        className="flex flex-col justify-center border-t border-border py-10 lg:py-0 lg:pt-12 2xl:pt-14 min-[2200px]:pt-16"
      >
        <h2
          id="home-services-heading"
          className="text-center text-xl font-bold tracking-tight text-text lg:text-left 2xl:text-2xl min-[2200px]:text-3xl"
        >
          {t({ en: 'How I Can Help', pt: 'Como Posso Ajudar' })}
        </h2>

        <div className="mx-auto mt-6 grid w-full max-w-2xl grid-cols-1 gap-5 lg:max-w-none lg:grid-cols-3 lg:gap-6 2xl:gap-8 min-[2200px]:mt-8 min-[2200px]:gap-10">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="flex flex-col gap-2.5 rounded-xl border border-border bg-surface p-5 2xl:p-6 min-[2200px]:gap-3.5 min-[2200px]:p-8"
            >
              <h3 className="text-center text-base font-semibold text-text lg:text-left 2xl:text-lg min-[2200px]:text-xl">
                {t(service.title)}
              </h3>
              <p className="text-justify text-sm leading-relaxed text-muted lg:text-left 2xl:text-base min-[2200px]:text-lg">
                {t(service.description)}
              </p>
            </article>
          ))}
        </div>
      </section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        defaultTemplateId="business"
      />
    </div>
  )
}
