import { useEffect, useState } from 'react'
import profileImg from '../assets/profile.webp'
import { EmailModal } from '../components/EmailModal.jsx'
import { SITE_CONFIG } from '../data/siteConfig.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../hooks/useLanguage.js'
import { getTechIcon } from '../utils/techIcons.js'

const CORE_STACK = [
  'React',
  'Vite',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'MongoDB',
  'PHP / WordPress',
  'SQL',
  'Docker',
  'Linux',
]

const CREDENTIALS = [
  {
    id: 'grupo-erre',
    meta: {
      en: 'Internship · Web Development',
      pt: 'Estágio · Desenvolvimento Web',
    },
    title: {
      en: 'Grupo Érre (Érre Technology)',
      pt: 'Grupo Érre (Érre Technology)',
    },
    description: {
      en: 'Recreated and optimized the institutional website (dessta.pt), built a custom PHP theme, and developed the Schema Generator WordPress/Elementor plugin for SEO & AIEO.',
      pt: 'Recriação e otimização do website institucional (dessta.pt), desenvolvimento de tema PHP personalizado e criação do plugin Schema Generator para WordPress/Elementor focado em SEO e AIEO.',
    },
  },
  {
    id: 'masterd',
    meta: {
      en: 'EQF Level 5 · Final Grade: 78/100',
      pt: 'Nível QEQ 5 · Nota Final: 78/100',
    },
    title: {
      en: 'Advanced Course in Web Design & Programming — MasterD (Braga)',
      pt: 'Curso Avançado de Web Design e Programação — MasterD (Braga)',
    },
    description: {
      en: 'Focused on full-stack web fundamentals, responsive UI design, relational databases, and server-side programming.',
      pt: 'Focado em fundamentos de desenvolvimento web full-stack, design responsivo, bases de dados relacionais e programação server-side.',
    },
  },
]

/**
 * Bilingual, public-safe About page (/about) presenting developer profile,
 * experience, education, core stack, engineering workflow, and maker interests.
 *
 * @returns {JSX.Element} Complete About page view.
 */
export function About() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false)

  useDocumentTitle(
    {
      en: `About — ${SITE_CONFIG.name}`,
      pt: `Sobre — ${SITE_CONFIG.name}`,
    },
    {
      path: '/about',
      description: {
        en: 'Learn about Marco Martins — Full-Stack Developer in Esposende / Braga, Portugal, experience at Grupo Érre, MasterD education, core stack, and contact details.',
        pt: 'Conheça Marco Martins — Full-Stack Developer em Esposende / Braga, Portugal, experiência no Grupo Érre, formação MasterD, tecnologias e contactos.',
      },
    }
  )

  useEffect(() => {
    if (!copied) return undefined

    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  /**
   * Copies the public contact email to the clipboard as a fallback for desktop visitors.
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
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-10 sm:px-6 lg:py-14 xl:max-w-6xl 2xl:max-w-[90rem] 2xl:py-16 min-[2200px]:max-w-[112rem]">
      {/* Bio + Portrait */}
      <section
        aria-labelledby="about-heading"
        className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[224px_1fr] lg:gap-10 min-[2200px]:grid-cols-[256px_1fr] min-[2200px]:gap-12"
      >
        <div className="relative mx-auto h-44 w-44 sm:h-52 sm:w-52 lg:mx-0 lg:h-56 lg:w-56 min-[2200px]:h-64 min-[2200px]:w-64">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-2xl border-2 border-cobalt bg-cobalt/10"
          />
          <img
            src={profileImg}
            alt={t({
              en: 'Portrait of Marco Martins',
              pt: 'Retrato de Marco Martins',
            })}
            width={600}
            height={600}
            className="relative h-full w-full rounded-2xl border border-border object-cover"
          />
        </div>

        <div>
          <p className="text-center text-xs font-semibold tracking-wider text-cobalt-light uppercase lg:text-left min-[2200px]:text-sm">
            {t({
              en: 'Full-Stack Developer',
              pt: 'Programador Full-Stack',
            })}
          </p>

          <h1
            id="about-heading"
            className="mt-1.5 text-center text-3xl font-bold tracking-tight text-text lg:text-left lg:text-4xl min-[2200px]:text-5xl"
          >
            {SITE_CONFIG.name}
          </h1>

          <p className="mt-1 text-center text-sm text-muted lg:text-left min-[2200px]:text-base">
            {SITE_CONFIG.location}
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-justify text-base leading-relaxed text-muted lg:mx-0 lg:text-left 2xl:max-w-3xl min-[2200px]:text-lg">
            {t({
              en: 'I build clean, responsive websites for small businesses and full-stack MERN applications backed by tested APIs and simple, maintainable architecture.',
              pt: 'Desenvolvo websites limpos e responsivos para pequenos negócios e aplicações MERN full-stack com APIs testadas e arquitetura simples e sustentável.',
            })}
          </p>

          <div className="mx-auto mt-6 grid w-full max-w-md grid-cols-1 gap-3 min-[380px]:grid-cols-2 lg:mx-0 lg:flex lg:max-w-none lg:flex-wrap lg:justify-start">
            <button
              type="button"
              onClick={() => setIsEmailModalOpen(true)}
              className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg bg-cobalt-strong px-4 py-2 text-sm font-semibold text-text transition-colors hover:bg-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
            >
              {t({ en: 'Email Me', pt: 'Enviar Email' })}
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              aria-live="polite"
              className="inline-flex min-h-10 cursor-pointer items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
            >
              {copied
                ? t({ en: 'Copied!', pt: 'Copiado!' })
                : t({ en: 'Copy Email', pt: 'Copiar Email' })}
            </button>

            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
            >
              GitHub ↗
            </a>

            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-cobalt focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt-light"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section aria-labelledby="about-credentials-heading" className="mt-12 border-t border-border pt-9">
        <h2
          id="about-credentials-heading"
          className="text-center text-xl font-bold tracking-tight text-text lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Experience & Education', pt: 'Experiência & Formação' })}
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          {CREDENTIALS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 2xl:p-6"
            >
              <span className="text-center text-xs font-semibold text-cobalt-light lg:text-left">
                {t(item.meta)}
              </span>
              <h3 className="text-center text-base font-semibold text-text lg:text-left min-[2200px]:text-lg">
                {t(item.title)}
              </h3>
              <p className="text-justify text-sm leading-relaxed text-muted lg:text-left min-[2200px]:text-base">
                {t(item.description)}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Stack & Workflow */}
      <section aria-labelledby="about-stack-heading" className="mt-12 border-t border-border pt-9">
        <h2
          id="about-stack-heading"
          className="text-center text-xl font-bold tracking-tight text-text lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Stack & Workflow', pt: 'Tecnologias & Metodologia' })}
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <article className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-5 2xl:p-6">
            <h3 className="text-center text-base font-semibold text-text lg:text-left min-[2200px]:text-lg">
              {t({ en: 'Core Technologies', pt: 'Tecnologias Principais' })}
            </h3>
            <ul className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-start">
              {CORE_STACK.map((techName) => {
                const TechIcon = getTechIcon(techName)
                return (
                  <li
                    key={techName}
                    className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-obsidian px-2.5 py-1.5 font-mono text-xs text-text lg:justify-start min-[2200px]:text-sm"
                  >
                    <TechIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 shrink-0 text-cobalt-light"
                    />
                    <span>{techName}</span>
                  </li>
                )
              })}
            </ul>
          </article>

          <article className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 2xl:p-6">
            <h3 className="text-center text-base font-semibold text-text lg:text-left min-[2200px]:text-lg">
              {t({
                en: 'AI-Augmented, Spec-Driven Workflow',
                pt: 'Engenharia Orientada a Spec com IA',
              })}
            </h3>
            <p className="text-justify text-sm leading-relaxed text-muted lg:text-left min-[2200px]:text-base">
              {t({
                en: 'I use structured specs (SPEC.md & ADRs), automated Vitest/Supertest suites, and human-reviewed clean code to deliver reliable software faster without sacrificing ownership.',
                pt: 'Utilizo especificações estruturadas (SPEC.md e ADRs), testes automatizados com Vitest/Supertest e revisão humana rigorosa para entregar software fiável com total domínio do código.',
              })}
            </p>
          </article>
        </div>
      </section>

      {/* Beyond Code */}
      <section aria-labelledby="about-beyond-heading" className="mt-12 border-t border-border pt-9">
        <h2
          id="about-beyond-heading"
          className="text-center text-xl font-bold tracking-tight text-text lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Beyond Code', pt: 'Para Além do Código' })}
        </h2>

        <article className="mt-5 flex flex-col gap-2 rounded-xl border border-border bg-surface p-5 2xl:p-6">
          <h3 className="text-center text-base font-semibold text-text lg:text-left min-[2200px]:text-lg">
            {t({
              en: 'Hardware, 3D Printing & Photography',
              pt: 'Hardware, Impressão 3D & Fotografia',
            })}
          </h3>
          <p className="text-justify text-sm leading-relaxed text-muted lg:text-left min-[2200px]:text-base">
            {t({
              en: 'Outside web development, I experiment with embedded hardware (Raspberry Pi, ESP32, Arduino), 3D printing and firmware tuning (Ender 3 V2), and landscape photography.',
              pt: 'Fora do desenvolvimento web, exploro eletrónica e sistemas embebidos (Raspberry Pi, ESP32, Arduino), impressão 3D e afinação de firmware (Ender 3 V2), e fotografia de paisagem.',
            })}
          </p>
        </article>
      </section>

      <EmailModal
        isOpen={isEmailModalOpen}
        onClose={() => setIsEmailModalOpen(false)}
        defaultTemplateId="hiring"
      />
    </div>
  )
}
