import { useEffect, useRef, useState } from 'react'
import {
  FiArrowLeft,
  FiCheck,
  FiCopy,
  FiExternalLink,
  FiMail,
  FiX,
} from 'react-icons/fi'
import {
  EMAIL_TEMPLATES,
  SITE_CONFIG,
  buildGmailComposeHref,
  buildMailtoHref,
} from '../data/siteConfig.js'
import { useLanguage } from '../hooks/useLanguage.js'

/**
 * Accessible two-step email template composer modal rendered inside `<dialog>`.
 * Step 1 lets visitors pick a template and edit subject/body; Step 2 preserves
 * the draft after triggering `mailto:` or Gmail so nothing is lost if no local
 * mail client opens.
 *
 * @param {object} props - Component props.
 * @param {boolean} props.isOpen - Whether the modal dialog is open.
 * @param {() => void} props.onClose - Callback invoked when closing the modal.
 * @param {'business' | 'webapp' | 'hiring' | 'general'} [props.defaultTemplateId='business'] - Initial template selected on open.
 * @returns {JSX.Element | null} Modal dialog element or null when closed.
 */
export function EmailModal({
  isOpen,
  onClose,
  defaultTemplateId = 'business',
}) {
  const { t } = useLanguage()
  const dialogRef = useRef(null)

  const [step, setStep] = useState(1)
  const [selectedId, setSelectedId] = useState(defaultTemplateId)
  const [customSubject, setCustomSubject] = useState(null)
  const [customBody, setCustomBody] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      if (typeof dialog.showModal === 'function') {
        if (!dialog.open) dialog.showModal()
      } else {
        dialog.setAttribute('open', '')
      }
    } else if (typeof dialog.close === 'function') {
      if (dialog.open) dialog.close()
    } else {
      dialog.removeAttribute('open')
    }
  }, [isOpen])

  useEffect(() => {
    if (!copied) return undefined

    const timer = window.setTimeout(() => setCopied(false), 2000)
    return () => window.clearTimeout(timer)
  }, [copied])

  if (!isOpen) return null

  const activeTemplate =
    EMAIL_TEMPLATES.find((tpl) => tpl.id === selectedId) ?? EMAIL_TEMPLATES[0]

  const subject = customSubject ?? t(activeTemplate.subject)
  const body = customBody ?? t(activeTemplate.body)

  // Fall back to the template subject if the user clears the input so URI builders never throw
  const safeSubject = subject.trim() ? subject : t(activeTemplate.subject)
  const mailtoHref = buildMailtoHref(safeSubject, body)
  const gmailHref = buildGmailComposeHref(safeSubject, body)

  const handleSelectTemplate = (templateId) => {
    setSelectedId(templateId)
    setCustomSubject(null)
    setCustomBody(null)
    setCopied(false)
    setStep(1)
  }

  const handleClose = () => {
    setSelectedId(defaultTemplateId)
    setCustomSubject(null)
    setCustomBody(null)
    setCopied(false)
    setStep(1)
    onClose()
  }

  const handleCopyMessage = async () => {
    if (!navigator.clipboard?.writeText) return

    try {
      await navigator.clipboard.writeText(
        `${SITE_CONFIG.email}\n${safeSubject}\n\n${body}`,
      )
      setCopied(true)
    } catch {
      // Ignore clipboard permission denials; mailto and Gmail links remain actionable
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="email-modal-heading"
      onCancel={(event) => {
        event.preventDefault()
        handleClose()
      }}
      onClick={(event) => {
        if (event.target === dialogRef.current) handleClose()
      }}
      className="m-0 flex h-dvh max-h-dvh w-screen max-w-none flex-col rounded-none border-0 bg-surface p-0 text-text shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm sm:m-auto sm:h-[80dvh] sm:max-h-[80dvh] sm:w-full sm:max-w-2xl sm:rounded-2xl sm:border sm:border-border"
    >
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-4 py-3.5 sm:px-5">
        <h2
          id="email-modal-heading"
          className="text-base font-semibold text-text sm:text-lg"
        >
          {t({
            en: 'Choose an Email Template',
            pt: 'Escolher Modelo de Email',
          })}
        </h2>
        <button
          type="button"
          onClick={handleClose}
          aria-label={t({
            en: 'Close email composer',
            pt: 'Fechar janela de email',
          })}
          className="inline-flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-border bg-obsidian text-muted transition-colors hover:border-cobalt-light hover:text-text"
        >
          <FiX aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>

      {step === 1 ? (
        <>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-cobalt-light">
                {t({
                  en: '1. Purpose of inquiry',
                  pt: '1. Objetivo do contacto',
                })}
              </span>
              <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                {EMAIL_TEMPLATES.map((tpl) => {
                  const isSelected = tpl.id === activeTemplate.id
                  return (
                    <button
                      key={tpl.id}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => handleSelectTemplate(tpl.id)}
                      className={`flex cursor-pointer flex-col gap-0.5 rounded-xl border px-3 py-2.5 text-left transition-colors ${isSelected
                        ? 'border-cobalt bg-cobalt/15'
                        : 'border-border bg-obsidian hover:border-cobalt/60'
                        }`}
                    >
                      <span className="text-xs font-semibold text-text sm:text-sm">
                        {t(tpl.title)}
                      </span>
                      <span className="text-[11px] text-muted">
                        {t(tpl.hint)}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email-modal-subject"
                className="font-mono text-[11px] uppercase tracking-wider text-cobalt-light"
              >
                {t({ en: '2. Subject', pt: '2. Assunto' })}
              </label>
              <input
                id="email-modal-subject"
                type="text"
                value={subject}
                onChange={(event) => setCustomSubject(event.target.value)}
                className="w-full rounded-lg border border-border bg-obsidian px-3 py-2 text-sm text-text focus:border-cobalt-light focus:outline-none"
              />
            </div>

            <div className="flex min-h-[140px] flex-1 flex-col gap-1.5">
              <label
                htmlFor="email-modal-body"
                className="font-mono text-[11px] uppercase tracking-wider text-cobalt-light"
              >
                {t({
                  en: '3. Message (editable)',
                  pt: '3. Mensagem (editável)',
                })}
              </label>
              <textarea
                id="email-modal-body"
                rows={7}
                value={body}
                onChange={(event) => setCustomBody(event.target.value)}
                className="w-full flex-1 resize-none rounded-lg border border-border bg-obsidian px-3 py-2 text-sm leading-relaxed text-text focus:border-cobalt-light focus:outline-none"
              />
            </div>
          </div>

          <div className="mt-auto flex shrink-0 flex-col gap-2 border-t border-border px-4 py-3.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:px-5">
            <button
              type="button"
              onClick={handleCopyMessage}
              aria-live="polite"
              className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3.5 py-2 text-xs font-medium text-muted transition-colors hover:border-cobalt-light hover:text-text sm:text-sm"
            >
              {copied ? (
                <FiCheck aria-hidden="true" className="h-3.5 w-3.5 text-live" />
              ) : (
                <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
              )}
              <span>
                {copied
                  ? t({ en: 'Copied!', pt: 'Copiado!' })
                  : t({ en: 'Copy Message', pt: 'Copiar Mensagem' })}
              </span>
            </button>

            <a
              href={gmailHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => setStep(2)}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-cobalt-light sm:text-sm"
            >
              <span>{t({ en: 'Open in Gmail', pt: 'Abrir no Gmail' })}</span>
              <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>

            <a
              href={mailtoHref}
              onClick={() => setStep(2)}
              className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-cobalt-strong px-4 py-2 text-xs font-semibold text-text transition-colors hover:bg-cobalt sm:text-sm"
            >
              <FiMail aria-hidden="true" className="h-3.5 w-3.5" />
              <span>
                {t({ en: 'Open Email App', pt: 'Abrir App de Email' })}
              </span>
            </a>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
            <div className="flex items-start gap-3">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cobalt/15 text-cobalt-light"
              >
                <FiMail className="h-5 w-5" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-text sm:text-base">
                  {t({
                    en: 'Did your email app open?',
                    pt: 'A aplicação de email abriu?',
                  })}
                </h3>
                <p className="text-xs leading-relaxed text-muted sm:text-sm">
                  {t({
                    en: 'Your draft is still safely kept below. It will not be cleared until you confirm.',
                    pt: 'O teu rascunho continua guardado aqui em baixo. Só é limpo quando confirmares.',
                  })}
                </p>
              </div>
            </div>

            <dl className="flex min-h-0 flex-1 flex-col divide-y divide-border/70 rounded-xl border border-border bg-obsidian px-3.5 py-2.5">
              <div className="flex shrink-0 flex-col gap-0.5 py-2">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light">
                  {t({ en: 'To', pt: 'Para' })}
                </dt>
                <dd className="text-xs text-text sm:text-sm">
                  {SITE_CONFIG.email}
                </dd>
              </div>
              <div className="flex shrink-0 flex-col gap-0.5 py-2">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light">
                  {t({ en: 'Saved Subject', pt: 'Assunto guardado' })}
                </dt>
                <dd className="text-xs font-medium text-text sm:text-sm">
                  {safeSubject}
                </dd>
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-0.5 py-2">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-cobalt-light">
                  {t({ en: 'Saved Message', pt: 'Mensagem guardada' })}
                </dt>
                <dd className="flex-1 overflow-y-auto whitespace-pre-wrap text-xs leading-relaxed text-muted sm:text-sm">
                  {body}
                </dd>
              </div>
            </dl>
          </div>

          <div className="mt-auto flex shrink-0 flex-col gap-3 border-t border-border px-4 py-4 sm:px-5">
            <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-cobalt-light sm:text-sm"
              >
                <FiArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
                <span>
                  {t({ en: 'Back to edit', pt: 'Voltar a editar' })}
                </span>
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-live/45 bg-live/15 px-3.5 py-2 text-xs font-semibold text-live transition-colors hover:bg-live/25 sm:text-sm"
              >
                <FiCheck aria-hidden="true" className="h-3.5 w-3.5" />
                <span>
                  {t({
                    en: 'Yes, sent (Close)',
                    pt: 'Sim, já enviei (Fechar)',
                  })}
                </span>
              </button>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] text-muted">
                {t({
                  en: 'If nothing opened:',
                  pt: 'Se a app não abriu:',
                })}
              </span>
              <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  aria-live="polite"
                  className="inline-flex min-h-10 cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-border bg-obsidian px-3.5 py-2 text-xs font-medium text-text transition-colors hover:border-cobalt-light sm:text-sm"
                >
                  {copied ? (
                    <FiCheck
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-live"
                    />
                  ) : (
                    <FiCopy aria-hidden="true" className="h-3.5 w-3.5" />
                  )}
                  <span>
                    {copied
                      ? t({ en: 'Copied!', pt: 'Copiado!' })
                      : t({
                        en: 'Copy All (Email + Text)',
                        pt: 'Copiar Tudo (Email + Texto)',
                      })}
                  </span>
                </button>

                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-cobalt-strong px-3.5 py-2 text-xs font-semibold text-text transition-colors hover:bg-cobalt sm:text-sm"
                >
                  <span>{t({ en: 'Open in Gmail', pt: 'Abrir no Gmail' })}</span>
                  <FiExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </dialog>
  )
}
