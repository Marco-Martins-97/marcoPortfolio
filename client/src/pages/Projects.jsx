import { useEffect, useState } from 'react'
import { FiArrowRight, FiExternalLink, FiGithub, FiTerminal } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../hooks/useLanguage.js'
import { getProjects } from '../services/projectService.js'
import { getTechIcon } from '../utils/techIcons.js'

/**
 * Renders the status badge for a project (`Live` or `Building`).
 *
 * @param {object} props - Component props.
 * @param {'live' | 'planning'} props.status - Project lifecycle status.
 * @param {boolean} [props.overlay=false] - Whether badge floats over a card cover image.
 * @returns {JSX.Element} Styled status pill.
 */
function StatusBadge({ status, overlay = false }) {
  const { t } = useLanguage()
  const isLive = status === 'live'
  const toneClass = isLive ? 'bg-live/15 text-live' : 'bg-building/15 text-building'
  const overlayClass = overlay
    ? 'border border-white/15 bg-obsidian/80 backdrop-blur-md'
    : ''

  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${toneClass} ${overlayClass}`}
    >
      {isLive
        ? t({ en: 'Live', pt: 'Online' })
        : t({ en: 'Building', pt: 'Em Desenvolvimento' })}
    </span>
  )
}

/**
 * Projects index page (`/projects`) displaying Primary showcase projects
 * (with 16:9 cover previews) and Secondary engineering/plugin builds.
 *
 * @returns {JSX.Element} Projects catalog view.
 */
export function Projects() {
  const { t } = useLanguage()
  const [primaryProjects, setPrimaryProjects] = useState([])
  const [secondaryProjects, setSecondaryProjects] = useState([])
  const [error, setError] = useState(null)

  useDocumentTitle(
    {
      en: 'Projects | Marco Martins',
      pt: 'Projetos | Marco Martins',
    },
    {
      path: '/projects',
      description: {
        en: 'Production web builds, active hardware & game systems, and curated backend/frontend studies by Marco Martins.',
        pt: 'Projetos web em produção, sistemas de hardware e jogos em curso e estudos selecionados de backend e frontend de Marco Martins.',
      },
    }
  )

  useEffect(() => {
    let active = true

    async function loadProjects() {
      try {
        const [primary, secondary] = await Promise.all([
          getProjects({ tier: 'primary' }),
          getProjects({ tier: 'secondary' }),
        ])
        if (!active) return
        setPrimaryProjects(primary)
        setSecondaryProjects(secondary)
      } catch (err) {
        if (!active) return
        setError(err instanceof Error ? err.message : 'Failed to load projects.')
      }
    }

    loadProjects()
    return () => {
      active = false
    }
  }, [])

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-10 sm:px-6 sm:py-12 xl:max-w-6xl 2xl:max-w-[90rem] 2xl:gap-12 2xl:py-16 min-[2200px]:max-w-[112rem] min-[2200px]:gap-14">
      <header className="flex flex-col gap-3">
        <h1 className="text-center text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-left 2xl:text-5xl min-[2200px]:text-6xl">
          {t({ en: 'Projects', pt: 'Projetos' })}
        </h1>
        <p className="mx-auto max-w-3xl text-justify text-sm leading-relaxed text-muted sm:text-base lg:mx-0 lg:text-left 2xl:text-lg min-[2200px]:text-xl">
          {t({
            en: 'Production web builds, active hardware & game systems, and curated backend/frontend studies.',
            pt: 'Projetos web em produção, sistemas de hardware e jogos em curso e estudos selecionados de backend e frontend.',
          })}
        </p>
      </header>

      {error && (
        <p
          role="alert"
          className="rounded-xl border border-building/30 bg-building/10 px-4 py-3 text-sm text-building"
        >
          {error}
        </p>
      )}

      <section aria-labelledby="primary-projects-heading" className="flex flex-col gap-5">
        <h2
          id="primary-projects-heading"
          className="text-center text-lg font-semibold text-text sm:text-xl lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Primary Projects', pt: 'Projetos Principais' })}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-6">
          {primaryProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-cobalt/60"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="group relative aspect-video w-full overflow-hidden border-b border-border bg-obsidian"
                aria-label={t({
                  en: `Open ${project.title} details`,
                  pt: `Abrir detalhes de ${project.title}`,
                })}
              >
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_60%)] px-4 text-center">
                    <FiTerminal
                      aria-hidden="true"
                      className="h-6 w-6 text-cobalt-light/80"
                    />
                    <span className="font-mono text-xs tracking-wide text-muted">
                      /{project.slug}
                    </span>
                  </div>
                )}

                <div className="absolute right-3 top-3">
                  <StatusBadge status={project.projectStatus} overlay />
                </div>
              </Link>

              <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-4 2xl:px-6 2xl:pb-6">
                <h3 className="text-center text-lg font-semibold text-text lg:text-left 2xl:text-xl">
                  {project.title}
                </h3>

                <p className="text-justify text-sm leading-relaxed text-muted lg:text-left min-[2200px]:text-base">
                  {t(project.summary)}
                </p>

                <ul
                  className="my-auto grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3"
                  aria-label={t({ en: 'Technologies', pt: 'Tecnologias' })}
                >
                  {project.techStack.map((techName) => {
                    const TechIcon = getTechIcon(techName)
                    return (
                      <li
                        key={techName}
                        className="inline-flex items-center justify-center gap-1.5 rounded-md border border-border bg-obsidian px-2.5 py-1.5 font-mono text-xs text-text"
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

                <div className="grid grid-cols-1 gap-2.5 pt-1 min-[380px]:grid-cols-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-cobalt-light hover:text-text sm:text-sm"
                    >
                      <span>{t({ en: 'Live Site', pt: 'Site' })}</span>
                      <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3 py-2 text-xs font-medium text-muted transition-colors hover:border-cobalt-light hover:text-text sm:text-sm"
                    >
                      <FiGithub aria-hidden="true" className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-cobalt-strong px-3.5 py-2 text-xs font-semibold text-text transition-colors hover:bg-cobalt min-[380px]:col-start-2 sm:text-sm"
                  >
                    <span>{t({ en: 'View Details', pt: 'Ver Detalhes' })}</span>
                    <FiArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="secondary-projects-heading" className="flex flex-col gap-5">
        <h2
          id="secondary-projects-heading"
          className="text-center text-lg font-semibold text-text sm:text-xl lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Secondary Projects', pt: 'Projetos Secundários' })}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:gap-5">
          {secondaryProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-cobalt/50 2xl:p-5"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold text-text">
                  {project.title}
                </h3>
              </div>

              <p className="flex-1 text-justify text-xs leading-relaxed text-muted sm:text-sm lg:text-left">
                {t(project.summary)}
              </p>

              <ul
                className="grid grid-cols-1 gap-1.5 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-2"
                aria-label={t({ en: 'Technologies', pt: 'Tecnologias' })}
              >
                {project.techStack.map((techName) => {
                  const TechIcon = getTechIcon(techName)
                  return (
                    <li
                      key={techName}
                      className="inline-flex items-center justify-center gap-1 rounded-md border border-border bg-obsidian px-2 py-1 font-mono text-[11px] text-text"
                    >
                      <TechIcon
                        aria-hidden="true"
                        className="h-3 w-3 shrink-0 text-cobalt-light"
                      />
                      <span>{techName}</span>
                    </li>
                  )
                })}
              </ul>

              {project.repoUrl && (
                <div className="flex justify-end pt-1">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cobalt-light hover:underline"
                  >
                    <FiGithub aria-hidden="true" className="h-3.5 w-3.5" />
                    <span>{t({ en: 'View Repository', pt: 'Ver Repositório' })}</span>
                    <FiExternalLink aria-hidden="true" className="h-3 w-3" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
