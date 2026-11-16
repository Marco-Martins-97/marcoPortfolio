import { useEffect, useState } from 'react'
import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiChevronDown,
  FiExternalLink,
  FiGithub,
  FiServer,
  FiUser,
} from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { ScreenshotLightbox } from '../components/ScreenshotLightbox.jsx'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { useLanguage } from '../hooks/useLanguage.js'
import {
  getAdjacentProjects,
  getProjectBySlug,
} from '../services/projectService.js'
import { getTechIcon } from '../utils/techIcons.js'

/**
 * Project details page (`/projects/:slug`) with metadata strip, architecture
 * highlights, tech stack icons, collapsible release changelogs with miniature
 * screenshot galleries, lightbox modal, and sequential project navigation.
 *
 * @returns {JSX.Element} Project case-study view or not-found fallback.
 */
export function ProjectDetails() {
  const { slug } = useParams()
  const { t } = useLanguage()

  const [project, setProject] = useState(null)
  const [adjacent, setAdjacent] = useState({ prev: null, next: null })
  const [loading, setLoading] = useState(true)
  const [expandedVersion, setExpandedVersion] = useState(null)
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    version: '',
    items: [],
    activeIndex: 0,
  })

  useDocumentTitle(
    {
      en: project ? `${project.title} | Marco Martins` : 'Project | Marco Martins',
      pt: project ? `${project.title} | Marco Martins` : 'Projeto | Marco Martins',
    },
    {
      path: `/projects/${slug}`,
      description: project?.summary,
    }
  )

  useEffect(() => {
    let active = true

    async function loadProject() {
      setLoading(true)
      try {
        const [record, neighbors] = await Promise.all([
          getProjectBySlug(slug),
          getAdjacentProjects(slug),
        ])
        if (!active) return
        setProject(record)
        setAdjacent(neighbors)
        setExpandedVersion(record?.versions?.[0]?.version ?? null)
        setLightboxState({ isOpen: false, version: '', items: [], activeIndex: 0 })
      } finally {
        if (active) setLoading(false)
      }
    }

    loadProject()
    return () => {
      active = false
    }
  }, [slug])

  if (loading) {
    return (
      <div className="mx-auto flex w-full max-w-5xl flex-1 items-center justify-center px-4 py-16 text-sm text-muted xl:max-w-6xl 2xl:max-w-[90rem] min-[2200px]:max-w-[112rem]">
        {t({ en: 'Loading project...', pt: 'A carregar projeto...' })}
      </div>
    )
  }

  if (!project) {
    return (
      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center gap-4 px-4 py-16 text-center xl:max-w-6xl 2xl:max-w-[90rem] min-[2200px]:max-w-[112rem]">
        <h1 className="text-2xl font-bold text-text sm:text-3xl">
          {t({ en: 'Project not found', pt: 'Projeto não encontrado' })}
        </h1>
        <p className="max-w-md text-sm text-muted">
          {t({
            en: 'The project you requested does not exist or may have moved.',
            pt: 'O projeto pedido não existe ou foi movido.',
          })}
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-lg bg-cobalt px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
        >
          <FiArrowLeft aria-hidden="true" className="h-4 w-4" />
          <span>{t({ en: 'Back to Projects', pt: 'Voltar aos Projetos' })}</span>
        </Link>
      </section>
    )
  }

  const isLive = project.projectStatus === 'live'
  const descriptionText = project.description
    ? t(project.description)
    : t(project.summary)

  const openLightbox = (version, items, index) => {
    setLightboxState({
      isOpen: true,
      version,
      items,
      activeIndex: index,
    })
  }

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-10 sm:gap-12 sm:px-6 sm:py-12 xl:max-w-6xl 2xl:max-w-[90rem] 2xl:gap-14 2xl:py-16 min-[2200px]:max-w-[112rem] min-[2200px]:gap-16">
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-cobalt-light hover:underline sm:text-sm"
        >
          <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
          <span>{t({ en: 'Back to Projects', pt: 'Voltar aos Projetos' })}</span>
        </Link>
      </div>

      <header className="flex flex-col gap-5 sm:gap-6">
        <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-center">
          <h1 className="text-center text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-left 2xl:text-5xl min-[2200px]:text-6xl">
            {project.title}
          </h1>
          <span
            className={`inline-flex items-center rounded-full px-3 py-0.5 text-xs font-semibold ${
              isLive ? 'bg-live/15 text-live' : 'bg-building/15 text-building'
            }`}
          >
            {isLive
              ? t({ en: 'Live', pt: 'Online' })
              : t({ en: 'Building', pt: 'Em Desenvolvimento' })}
          </span>
        </div>

        {project.meta && (
          <dl className="flex flex-col items-center gap-2.5 border-b border-border pb-4 text-xs text-muted sm:text-sm lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2">
            <div className="inline-flex items-center gap-2">
              <FiUser aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-cobalt-light" />
              <dt className="sr-only">{t({ en: 'Role', pt: 'Função' })}</dt>
              <dd className="font-medium text-text">{t(project.meta.role)}</dd>
            </div>
            <div className="inline-flex items-center gap-2">
              <FiServer aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-cobalt-light" />
              <dt className="sr-only">{t({ en: 'Hosting & Infra', pt: 'Alojamento & Infra' })}</dt>
              <dd>{project.meta.hosting}</dd>
            </div>
            <div className="inline-flex items-center gap-2">
              <FiCalendar aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-cobalt-light" />
              <dt className="sr-only">{t({ en: 'Timeline', pt: 'Cronologia' })}</dt>
              <dd>{t(project.meta.timeline)}</dd>
            </div>
          </dl>
        )}

        <p className="mx-auto max-w-4xl text-justify text-sm leading-relaxed text-muted sm:text-base lg:mx-0 lg:text-left 2xl:text-lg min-[2200px]:text-xl">
          {descriptionText}
        </p>

        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cobalt px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-cobalt-hover sm:text-sm"
              >
                <span>{t({ en: 'Visit Live Site', pt: 'Visitar Site' })}</span>
                <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-text transition-colors hover:border-cobalt-light sm:text-sm"
              >
                <FiGithub aria-hidden="true" className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        )}
      </header>

      {project.highlights?.length > 0 && (
        <section aria-labelledby="highlights-heading" className="flex flex-col gap-4 sm:gap-5">
          <h2
            id="highlights-heading"
            className="text-center text-lg font-semibold text-text sm:text-xl lg:text-left min-[2200px]:text-2xl"
          >
            {t({
              en: 'Architecture & Key Highlights',
              pt: 'Arquitetura & Destaques Principais',
            })}
          </h2>
          <ul className="flex list-disc flex-col gap-2.5 pl-5 text-justify text-sm leading-relaxed text-muted sm:text-base lg:text-left">
            {project.highlights.map((item) => (
              <li key={item.en}>{t(item)}</li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="tech-stack-heading" className="flex flex-col gap-4 sm:gap-5">
        <h2
          id="tech-stack-heading"
          className="text-center text-lg font-semibold text-text sm:text-xl lg:text-left min-[2200px]:text-2xl"
        >
          {t({ en: 'Tech Stack', pt: 'Tecnologias' })}
        </h2>
        <ul className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-start">
          {project.techStack.map((techName) => {
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
      </section>

      {project.versions?.length > 0 && (
        <section aria-labelledby="releases-heading" className="flex flex-col gap-5 sm:gap-6">
          <h2
            id="releases-heading"
            className="text-center text-lg font-semibold text-text sm:text-xl lg:text-left min-[2200px]:text-2xl"
          >
            {t({
              en: 'Releases & Screenshots',
              pt: 'Versões & Capturas de Ecrã',
            })}
          </h2>

          <div className="flex flex-col gap-3">
            {project.versions.map((release) => {
              const isExpanded = expandedVersion === release.version
              const shotCount = release.screenshots?.length ?? 0

              return (
                <div
                  key={release.version}
                  className="overflow-hidden rounded-xl border border-border bg-surface"
                >
                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    onClick={() =>
                      setExpandedVersion(isExpanded ? null : release.version)
                    }
                    className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left transition-colors hover:bg-obsidian/40"
                  >
                    <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-text">
                      <span className="rounded-md bg-cobalt/15 px-2 py-0.5 font-mono text-xs font-bold text-cobalt-light">
                        {release.version}
                      </span>
                      <span>{t(release.title)}</span>
                      <span className="text-xs font-normal text-muted">
                        &middot; {release.date}
                        {shotCount > 0 ? ` · ${shotCount}` : ''}
                      </span>
                    </span>
                    <FiChevronDown
                      aria-hidden="true"
                      className={`h-4 w-4 shrink-0 text-muted transition-transform duration-200 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isExpanded && (
                    <div className="flex flex-col gap-4 border-t border-border px-4 py-4">
                      {release.changes?.length > 0 && (
                        <ul className="flex list-disc flex-col gap-1.5 pl-5 text-justify text-sm leading-relaxed text-muted lg:text-left">
                          {release.changes.map((change) => (
                            <li key={change.en}>{t(change)}</li>
                          ))}
                        </ul>
                      )}

                      {shotCount > 0 && (
                        <div className="flex flex-col gap-2">
                          <p className="text-xs font-semibold text-text">
                            {t({
                              en: `Screenshots (${release.version} — click any thumbnail to inspect)`,
                              pt: `Capturas de Ecrã (${release.version} — clica para ampliar)`,
                            })}
                          </p>
                          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                            {release.screenshots.map((shot, idx) => (
                              <button
                                key={`${release.version}-${shot.route}-${shot.device}-${idx}`}
                                type="button"
                                onClick={() =>
                                  openLightbox(
                                    release.version,
                                    release.screenshots,
                                    idx,
                                  )
                                }
                                aria-label={t({
                                  en: `Open ${shot.device} screenshot: ${shot.caption.en}`,
                                  pt: `Abrir captura ${shot.device}: ${shot.caption.pt}`,
                                })}
                                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-obsidian text-left transition-colors hover:border-cobalt-light"
                              >
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian">
                                  <img
                                    src={shot.src}
                                    alt={t(shot.caption)}
                                    loading="lazy"
                                    className="h-full w-full object-cover object-top transition-transform duration-200 group-hover:scale-[1.03]"
                                  />
                                  <span className="absolute left-1.5 top-1.5 rounded border border-border/80 bg-obsidian/85 px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase text-text">
                                    {shot.device}
                                  </span>
                                </div>
                                <span className="truncate px-2 py-1.5 font-mono text-[11px] text-muted">
                                  {shot.route} &middot; {t(shot.label)}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {(adjacent.prev || adjacent.next) && (
        <nav
          aria-label={t({
            en: 'Project navigation',
            pt: 'Navegação entre projetos',
          })}
          className="mt-2 flex flex-col gap-3 border-t border-border pt-6 min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between"
        >
          {adjacent.prev ? (
            <Link
              to={`/projects/${adjacent.prev.slug}`}
              className="flex flex-col gap-0.5 rounded-xl border border-border bg-surface px-4 py-3 transition-colors hover:border-cobalt-light"
            >
              <span className="inline-flex items-center gap-1 font-mono text-[11px] uppercase text-muted">
                <FiArrowLeft aria-hidden="true" className="h-3 w-3" />
                {t({ en: 'Previous Project', pt: 'Projeto Anterior' })}
              </span>
              <span className="text-sm font-semibold text-text">
                {adjacent.prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {adjacent.next && (
            <Link
              to={`/projects/${adjacent.next.slug}`}
              className="flex flex-col gap-0.5 rounded-xl border border-border bg-surface px-4 py-3 text-right transition-colors hover:border-cobalt-light"
            >
              <span className="inline-flex items-center justify-end gap-1 font-mono text-[11px] uppercase text-muted">
                {t({ en: 'Next Project', pt: 'Próximo Projeto' })}
                <FiArrowRight aria-hidden="true" className="h-3 w-3" />
              </span>
              <span className="text-sm font-semibold text-text">
                {adjacent.next.title}
              </span>
            </Link>
          )}
        </nav>
      )}

      <ScreenshotLightbox
        isOpen={lightboxState.isOpen}
        version={lightboxState.version}
        items={lightboxState.items}
        activeIndex={lightboxState.activeIndex}
        onClose={closeLightbox}
        onSelectIndex={(nextIndex) =>
          setLightboxState((prev) => ({ ...prev, activeIndex: nextIndex }))
        }
      />
    </div>
  )
}
